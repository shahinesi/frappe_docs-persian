import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const contentRoot = new URL('../content/fa/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('../sources/manifest.json', import.meta.url), 'utf8'));
const byUrl = new Map(manifest.pages.map((page) => [page.url, page]));
const failures = [];
const pages = [];
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
  if (!title) failures.push(`${relative}: missing title`);
  if (!sourceUrl || !sourceUrl.startsWith('https://docs.frappe.io/')) failures.push(`${relative}: source_url must point to official docs.frappe.io`);
  if (sourceUrl && !byUrl.has(sourceUrl)) failures.push(`${relative}: source_url is absent from sources/manifest.json`);
  if (!/منبع|Source:/i.test(body.slice(fm[0].length))) failures.push(`${relative}: missing visible source attribution`);
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
