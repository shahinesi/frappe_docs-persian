import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const manifestUrl = new URL('../sources/manifest.json', import.meta.url);
const outputPath = new URL('../sources/retrieval-errors.json', import.meta.url);
const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));
const pages = manifest.pages;
const resume = process.argv.includes('--resume');
const previousErrors = await readFile(outputPath, 'utf8').then(JSON.parse).then((data) => data.errors || []).catch(() => []);
const errors = resume ? previousErrors : [];
let next = 0;
let completed = 0;
let checkpoint = Promise.resolve();
const workers = Array.from({ length: 4 }, async () => {
  while (next < pages.length) {
    const page = pages[next++];
    if (page.source_status === 'missing_from_sitemap' || (resume && page.source_metadata_status === 'fetched' && page.source_content_sha256)) continue;
    for (let i = errors.length - 1; i >= 0; i--) if (errors[i].url === page.url) errors.splice(i, 1);
    const markdownUrl = `${page.url}.md`;
    let response;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        response = await fetch(markdownUrl, { headers: { 'user-agent': 'frappe-docs-persian-manifest/1.0', accept: 'text/markdown' } });
        if (response.ok) break;
        if (![429, 500, 502, 503, 504].includes(response.status)) break;
        const retryAfter = Number(response.headers.get('retry-after'));
        await new Promise((resolve) => setTimeout(resolve, Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * (attempt + 1)));
      } catch (error) {
        if (attempt === 2) errors.push({ url: page.url, markdown_url: markdownUrl, error: String(error) });
        await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
      }
    }
    if (!response?.ok) {
      page.source_markdown_url = markdownUrl;
      page.source_http_status = response?.status ?? null;
      page.source_status = 'markdown_unavailable';
      page.source_metadata_status = 'unavailable';
      if (!errors.some((item) => item.url === page.url)) errors.push({ url: page.url, markdown_url: markdownUrl, error: `HTTP ${response?.status ?? 'network error'}` });
    } else {
      const text = await response.text();
      const match = text.match(/^\uFEFF?---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n/);
      const front = match?.[1] || '';
      const field = (name) => front.match(new RegExp(`^${name}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`, 'm'))?.[1]?.trim() || null;
      const updated = field('updated');
      const digest = createHash('sha256').update(text).digest('hex');
      const changed = Boolean(page.source_content_sha256 && page.source_content_sha256 !== digest);
      page.source_markdown_url = markdownUrl;
      page.source_title = field('title');
      page.source_space = field('space');
      page.source_modified = updated || page.source_modified || null;
      page.source_version = digest;
      page.source_content_sha256 = digest;
      page.source_status = 'present';
      page.source_metadata_status = 'fetched';
      if (changed && ['translated','quality_checked','published'].includes(page.translation_status)) page.translation_status = 'needs_update';
      if (changed) page.quality_status = 'not_reviewed';
      delete page.source_http_status;
    }
    completed++;
    if (completed % 50 === 0) {
      console.log(`Fetched metadata for ${completed}/${pages.length} pages`);
      checkpoint = checkpoint.then(() => writeFile(manifestUrl, `${JSON.stringify(manifest, null, 2)}\n`));
      await checkpoint;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
});
await Promise.all(workers);
await checkpoint;
manifest.retrieved_at = new Date().toISOString();
manifest.page_count = pages.length;
await writeFile(manifestUrl, `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(outputPath, `${JSON.stringify({ generated_at: new Date().toISOString(), error_count: errors.length, errors }, null, 2)}\n`);
console.log(`Metadata fetched for ${completed} pages; ${errors.length} endpoint failures recorded.`);

