import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const contentRoot = new URL('../content/fa/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('../sources/manifest.json', import.meta.url), 'utf8'));
const uiTermSnapshot = JSON.parse(await readFile(new URL('../sources/ui-terms.json', import.meta.url), 'utf8'));
const byUrl = new Map(manifest.pages.map((page) => [page.url, page]));
const byOfficialPath = new Map(manifest.pages.map((page) => {
  const url = new URL(page.url);
  return [`${url.hostname}${url.pathname.replace(/\/$/, '')}`, page];
}));
const failures = [];
const pages = [];
const genericLinkLabel = /^(?:مستندات رسمی(?:\s+.+)?|مستندات|صفحه(?:ٔ|‌ی|ی)? رسمی|راهنمای «.*» در .+|این صفحه|این راهنما|این سند|اینجا|برای اطلاعات بیشتر|برای جزئیات بیشتر|بیشتر بخوانید|کلیک کنید|مشاهده کنید|راهنمای رسمی|this page|this guide|this document|here|read more|learn more|click here|official documentation|documentation)$/i;
const localeStacks = {
  framework: ['framework'], erpnext: ['framework', 'erpnext'], hr: ['framework', 'erpnext', 'hr'],
  helpdesk: ['framework', 'helpdesk'], insights: ['framework', 'insights'], crm: ['framework', 'crm'],
  builder: ['framework', 'builder'], learning: ['framework', 'learning'], drive: ['framework', 'drive'],
  wiki: ['framework', 'wiki'], other: ['framework'],
};
const glossary = await readFile(new URL('../glossary/fa.md', import.meta.url), 'utf8');
const glossaryTerms = Object.fromEntries([...glossary.matchAll(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/gm)]
  .filter(([, source, translation]) => source.trim() !== 'English' && /[\u0600-\u06FF]/.test(translation))
  .map(([, source, translation]) => [source.trim().replaceAll('`', '').replaceAll('**', ''), translation.trim()]));
const productUiTermCache = new Map();
function getProductUiTerms(product) {
  if (productUiTermCache.has(product)) return productUiTermCache.get(product);
  const productLocales = localeStacks[product] || ['framework'];
  const terms = { ...glossaryTerms };
  for (const locale of productLocales) Object.assign(terms, uiTermSnapshot.terms[locale] || {});
  for (const curated of uiTermSnapshot.curated_terms || []) {
    if (!productLocales.includes(curated.product)) continue;
    if (curated.source_label && curated.translation) terms[curated.source_label] = curated.translation;
    Object.assign(terms, curated.source_labels || {});
  }
  const phraseTerms = Object.entries(terms)
    .filter(([english, persian]) => english.includes(' ') && /[A-Za-z]/.test(english) && !/[\u0600-\u06FF]/.test(english) && /[\u0600-\u06FF]/.test(persian) && english.toLowerCase() !== persian.toLowerCase())
    .sort(([left], [right]) => right.length - left.length);
  const phraseLookup = new Map(phraseTerms.map(([english, persian]) => [english.toLowerCase(), persian]));
  const phrasePattern = phraseTerms.length
    ? new RegExp(`(?<![A-Za-z0-9])(${phraseTerms.map(([english]) => english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})(?![A-Za-z0-9])`, 'i')
    : null;
  const result = { terms, phraseLookup, phrasePattern };
  productUiTermCache.set(product, result);
  return result;
}
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const target = new URL(item.name + (item.isDirectory() ? '/' : ''), dir);
    if (item.isDirectory()) await walk(target);
    else if (item.name.toLowerCase().endsWith('.md')) pages.push(target);
  }
}
await walk(contentRoot);
for (const file of pages) {
  const body = await readFile(file, 'utf8');
  const relative = path.relative(new URL('../', import.meta.url).pathname, file.pathname).replaceAll('\\', '/');
  const fm = body.match(/^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n/);
  if (!fm) { failures.push(`${relative}: missing YAML frontmatter`); continue; }
  const meta = fm[1];
  const get = (name) => meta.match(new RegExp(`^${name}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`, 'm'))?.[1]?.trim() || null;
  const title = get('title');
  const sourceUrl = get('source_url');
  const sourceId = get('source_id');
  const sourceVersion = get('source_version');
  if (!title) failures.push(`${relative}: missing title`);
  if (!sourceUrl || !sourceUrl.startsWith('https://docs.frappe.io/')) failures.push(`${relative}: source_url must point to official docs.frappe.io`);
  const source = sourceUrl ? byUrl.get(sourceUrl) : null;
  if (sourceUrl && !source) failures.push(`${relative}: source_url is absent from sources/manifest.json`);
  if (!sourceId || !sourceVersion) failures.push(`${relative}: missing source_id or source_version`);
  if (source && sourceId !== source.source_id) failures.push(`${relative}: source_id does not match manifest`);
  if (source && sourceVersion !== source.source_content_sha256) failures.push(`${relative}: source_version is stale versus manifest`);
  if (source) {
    const sourceFile = new URL(`../sources/${source.source_id}.md`, import.meta.url);
    try {
      const sourceText = await readFile(sourceFile, 'utf8');
      const digest = createHash('sha256').update(sourceText).digest('hex');
      if (digest !== source.source_content_sha256) failures.push(`${relative}: source snapshot digest does not match manifest`);
      if (source.translation_path !== relative) failures.push(`${relative}: manifest translation_path does not point to this file`);
    } catch {
      failures.push(`${relative}: source snapshot is missing`);
    }
  }
  if (!/منبع|Source:/i.test(body.slice(fm[0].length))) failures.push(`${relative}: missing visible source attribution`);
  if (!/ترجمهٔ غیررسمی/.test(body)) failures.push(`${relative}: missing unofficial-translation notice`);
  if (!/تحت شرایط CC BY-SA/.test(body)) failures.push(`${relative}: missing ShareAlike attribution notice`);
  const visibleMarkdown = body.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, '').replace(/`[^`\n]*`/g, '');
  const product = relative.match(/^content\/fa\/([^/]+)\//)?.[1];
  const { terms: productTerms, phraseLookup, phrasePattern } = getProductUiTerms(product);
  for (const line of visibleMarkdown.split(/\r?\n/)) {
    const bareListLabel = line.match(/^\s*(?:[-*+]|\d+[.)])\s+([A-Z][A-Za-z0-9 &/'()-]*)\s*$/)?.[1]?.trim();
    if (bareListLabel && productTerms[bareListLabel] && /[\u0600-\u06FF]/.test(productTerms[bareListLabel])) {
      failures.push(`${relative}: visible list label "${bareListLabel}" has a Persian UI translation "${productTerms[bareListLabel]}"`);
    }
    const heading = line.match(/^\s*#{1,6}\s+(.+)$/)?.[1];
    const untranslatedHeadingLabel = heading?.replace(/`[^`]*`/g, '')?.match(phrasePattern || /$^/)?.[1] || null;
    if (untranslatedHeadingLabel) {
      const persianLabel = phraseLookup.get(untranslatedHeadingLabel.toLowerCase());
      failures.push(`${relative}: heading contains the untranslated UI label "${untranslatedHeadingLabel}"; use "${persianLabel}"`);
    }
  }
  for (const [, label, wrappedHref] of visibleMarkdown.matchAll(/(?<!!)\[([^\]]+)\]\((<[^>]+>|[^\s)]+)(?:[^)]*)\)/g)) {
    const href = wrappedHref.replace(/^<|>$/g, '');
    const pointsToExternalSite = /^[a-z]+:/i.test(href);
    const pointsToMarkdown = !/^[a-z]+:/i.test(href) && !href.startsWith('#') && /\.md(?:[?#]|$)/i.test(href);
    if ((pointsToExternalSite || pointsToMarkdown) && genericLinkLabel.test(label.trim())) {
      failures.push(`${relative}: generic link label "${label.trim()}" must describe its destination`);
    }
    if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href);
        if (['docs.frappe.io', 'docs.erpnext.com'].includes(url.hostname.toLowerCase())
          && !url.pathname.startsWith('/files/')) {
          const officialTarget = byOfficialPath.get(`${url.hostname}${url.pathname.replace(/\/$/, '')}`);
          const isThisPageSource = source && officialTarget === source && href.split(/[?#]/, 1)[0] === sourceUrl;
          if (officialTarget?.translation_path && !isThisPageSource) {
            failures.push(`${relative}: official link to a translated page must use its local Persian Markdown target: ${href}`);
          }
        }
      } catch {
        failures.push(`${relative}: malformed official documentation URL: ${href}`);
      }
    }
  }
  const fences = [...body.matchAll(/^\s*```/gm)].length;
  if (fences % 2 !== 0) failures.push(`${relative}: unbalanced fenced code block`);
}
console.log(`Validated ${pages.length} Persian Markdown files against ${manifest.pages.length} source records.`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('No validation errors.');
}
