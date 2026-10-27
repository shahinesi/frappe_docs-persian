import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = new URL('../', import.meta.url);
const contentRoot = new URL('../content/fa/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('../sources/manifest.json', import.meta.url), 'utf8'));
const byUrl = new Map(manifest.pages.map((page) => [page.url, page]));
const markdownLink = /(?<!!)(\[[^\]]*\]\(\s*)(<[^>]+>|[^)\s]+)(\s+[^)]*)?(\))/g;
let changedFiles = 0;
let rewrittenLinks = 0;

function relativePath(fromFile, targetFile) {
  return path.posix.relative(path.posix.dirname(fromFile), targetFile);
}

async function walk(dir, relativeDir = '') {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const rel = relativeDir ? `${relativeDir}/${item.name}` : item.name;
    const target = new URL(`${item.name}${item.isDirectory() ? '/' : ''}`, dir);
    if (item.isDirectory()) {
      await walk(target, rel);
      continue;
    }
    if (!item.name.toLowerCase().endsWith('.md')) continue;

    const body = await readFile(target, 'utf8');
    let localChanges = 0;
    const output = body.replace(markdownLink, (whole, prefix, wrappedHref, title = '', close = ')') => {
      const href = wrappedHref.replace(/^<|>$/g, '');
      if (!href.startsWith('/') || href.startsWith('/files/') || href.startsWith('/private/files/')) return whole;
      const [pathname, fragment] = href.split(/(?=#)/, 2);
      const source = byUrl.get(`https://docs.frappe.io${pathname}`);
      if (!source) return whole;

      let nextHref;
      if (source.translation_path) {
        nextHref = relativePath(`content/fa/${rel}`, source.translation_path);
      } else {
        nextHref = `https://docs.frappe.io${pathname}`;
      }
      if (fragment) nextHref += fragment;
      if (nextHref === href) return whole;
      localChanges++;
      rewrittenLinks++;
      return `${prefix}${nextHref}${title}${close}`;
    });

    if (localChanges) {
      await writeFile(target, output, 'utf8');
      changedFiles++;
    }
  }
}

await walk(contentRoot);
console.log(`Prepared Wiki-compatible Markdown links in ${changedFiles} files (${rewrittenLinks} links).`);
console.log('Links to translated pages use repository-relative .md paths; other Frappe docs links point to their official page.');
