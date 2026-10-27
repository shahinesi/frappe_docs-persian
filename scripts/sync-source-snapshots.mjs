import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applySnapshotState } from './source-sync-state.mjs';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const manifestPath = path.join(repoRoot, 'sources', 'manifest.json');
const errorsPath = path.join(repoRoot, 'sources', 'retrieval-errors.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const translatedOnly = process.argv.includes('--translated-only');
const selectedSection = process.argv.find((arg) => arg.startsWith('--section='))?.slice('--section='.length) || null;
const selectedIds = new Set((process.argv.find((arg) => arg.startsWith('--ids='))?.slice('--ids='.length) || '').split(',').filter(Boolean));
const delayMs = Number(process.env.FRAPPE_DOCS_SYNC_DELAY_MS || 250);
const concurrency = Math.max(1, Math.min(4, Number(process.env.FRAPPE_DOCS_SYNC_CONCURRENCY || 2)));
const pages = manifest.pages.filter((page) => (!translatedOnly || page.translation_path) && (!selectedSection || page.section === selectedSection) && (!selectedIds.size || selectedIds.has(page.source_id)));
const selectedUrls = new Set(pages.map((page) => page.url));
const previousErrors = await readFile(errorsPath, 'utf8').then(JSON.parse).then((data) => data.errors || []).catch(() => []);
const errors = previousErrors.filter((error) => !selectedUrls.has(error.url));
let index = 0;
let fetched = 0;
let changed = 0;
let unchanged = 0;
let needsUpdate = 0;

function sourcePath(page) {
  const target = path.resolve(repoRoot, 'sources', `${page.source_id}.md`);
  const base = path.resolve(repoRoot, 'sources') + path.sep;
  if (!target.startsWith(base)) throw new Error(`Unsafe source_id: ${page.source_id}`);
  return target;
}

function frontmatterField(markdown, field) {
  const block = markdown.match(/^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n/)?.[1] || '';
  return block.match(new RegExp(`^${field}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`, 'm'))?.[1]?.trim() || null;
}

async function syncPage(page) {
  const url = page.source_markdown_url || `${page.url}.md`;
  let response;
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      response = await fetch(url, {
        headers: { 'user-agent': 'frappe-docs-persian-source-sync/1.0', accept: 'text/markdown' },
      });
      if (response.ok) break;
      lastError = new Error(`HTTP ${response.status}`);
      if (![429, 500, 502, 503, 504].includes(response.status)) break;
      const retryAfter = Number(response.headers.get('retry-after'));
      await new Promise((resolve) => setTimeout(resolve, Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * (attempt + 1)));
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  if (!response?.ok) {
    page.snapshot_status = 'unavailable';
    page.snapshot_error = String(lastError || 'Unknown retrieval error');
    errors.push({ url: page.url, markdown_url: url, error: page.snapshot_error });
    return;
  }

  const markdown = await response.text();
  const digest = createHash('sha256').update(markdown).digest('hex');
  const destination = sourcePath(page);
  let previousDigest = null;
  try {
    previousDigest = createHash('sha256').update(await readFile(destination)).digest('hex');
  } catch {}

  await mkdir(path.dirname(destination), { recursive: true });
  if (previousDigest !== digest) await writeFile(destination, markdown, 'utf8');
  page.source_markdown_url = url;
  page.source_title = frontmatterField(markdown, 'title') || page.source_title || null;
  page.source_space = frontmatterField(markdown, 'space') || page.source_space || null;
  page.source_modified = frontmatterField(markdown, 'updated') || page.source_modified || null;
  page.source_status = 'present';
  page.source_metadata_status = 'fetched';
  const state = applySnapshotState(page, { digest, previousDigest, now: new Date().toISOString() });
  if (state.changed) changed++;
  else unchanged++;
  if (state.needsUpdate) needsUpdate++;
}

const workers = Array.from({ length: concurrency }, async () => {
  while (index < pages.length) {
    const page = pages[index++];
    try {
      await syncPage(page);
    } catch (error) {
      errors.push({ url: page.url, markdown_url: page.source_markdown_url || `${page.url}.md`, error: String(error) });
      page.snapshot_status = 'error';
      page.snapshot_error = String(error);
    }
    fetched++;
    if (fetched % 50 === 0) {
      console.log(`Processed ${fetched}/${pages.length}; source changes ${changed}; translations flagged ${needsUpdate}; errors ${errors.length}`);
      await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
});

await Promise.all(workers);
manifest.retrieved_at = new Date().toISOString();
manifest.page_count = manifest.pages.length;
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
if (JSON.stringify(errors) !== JSON.stringify(previousErrors)) {
  await writeFile(errorsPath, `${JSON.stringify({ generated_at: new Date().toISOString(), error_count: errors.length, errors }, null, 2)}\n`);
}
console.log(`Processed ${fetched} pages: ${changed} changed, ${unchanged} unchanged, ${needsUpdate} translations marked needs_update, ${errors.length} retrieval errors.`);
console.log('Translation Markdown is never modified by this sync. Review updates, then change status after translation and QA.');
