import { readFile, writeFile } from 'node:fs/promises';

const sitemapUrl = 'https://docs.frappe.io/sitemap.xml';
const manifestUrl = new URL('../sources/manifest.json', import.meta.url);
const response = await fetch(sitemapUrl, { headers: { 'user-agent': 'frappe-docs-persian-manifest/1.0' } });
if (!response.ok) throw new Error(`Sitemap request failed: ${response.status} ${response.statusText}`);
const xml = await response.text();
const previous = await readFile(manifestUrl, 'utf8').then(JSON.parse).catch(() => ({ pages: [] }));
const previousByUrl = new Map((previous.pages || []).map((page) => [page.url, page]));
const discovered = [...xml.matchAll(/<url>\s*([\s\S]*?)\s*<\/url>/g)].map(([, block]) => {
  const value = (tag) => block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? null;
  const decode = (s) => s?.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&apos;', "'") ?? null;
  const url = decode(value('loc'));
  if (!url) return null;
  const parsed = new URL(url);
  const parts = parsed.pathname.split('/').filter(Boolean);
  const slug = (parts[0] || 'other').toLowerCase();
  const section = ['framework','erpnext','helpdesk','insights','crm','hr','wiki-v2','builder','learning','drive'].includes(slug) ? slug.replace('wiki-v2','wiki') : 'other';
  const pageId = `${slug}/${parts.slice(1).join('/')}` || slug;
  const sitemapLastmod = decode(value('lastmod'));
  const prior = previousByUrl.get(url);
  const changedBySitemap = !prior?.source_content_sha256 && Boolean(prior?.source_sitemap_lastmod && sitemapLastmod && prior.source_sitemap_lastmod !== sitemapLastmod);
  return {
    ...(prior || {}),
    url,
    source_id: prior?.source_id || pageId,
    section,
    source_kind: 'official-markdown-export-endpoint',
    source_repository: null,
    source_markdown_url: `${url}.md`,
    source_metadata_status: prior?.source_metadata_status || (prior?.source_http_status ? 'unavailable' : 'pending'),
    source_version: prior?.source_version || null,
    source_modified: prior?.source_metadata_status === 'fetched' ? prior.source_modified : (sitemapLastmod || prior?.source_modified || null),
    source_sitemap_lastmod: sitemapLastmod,
    source_status: prior?.source_status === 'markdown_unavailable' ? 'markdown_unavailable' : 'present',
    license_status: prior?.license_status || 'unverified',
    attribution_required: true,
    unofficial_translation: true,
    translation_status: changedBySitemap && ['translated','quality_checked','published'].includes(prior?.translation_status) ? 'needs_update' : (prior?.translation_status || 'not_started'),
    quality_status: changedBySitemap ? 'not_reviewed' : (prior?.quality_status || 'not_reviewed'),
    published: prior?.published || false,
    translation_path: prior?.translation_path || null,
    discovered_at: prior?.discovered_at || new Date().toISOString(),
  };
}).filter(Boolean);
const currentUrls = new Set(discovered.map((page) => page.url));
// Preserve source entries that disappeared; disappearance must never delete Persian text.
for (const prior of previous.pages || []) {
  if (!currentUrls.has(prior.url)) discovered.push({ ...prior, source_status: 'missing_from_sitemap', translation_status: prior.translation_status === 'published' ? 'source_removed_review' : prior.translation_status });
}
const unique = [...new Map(discovered.map((page) => [page.url, page])).values()].sort((a,b) => a.section.localeCompare(b.section) || a.url.localeCompare(b.url));
const output = { schema_version: 1, sitemap_url: sitemapUrl, retrieved_at: new Date().toISOString(), page_count: unique.length, pages: unique };
await writeFile(manifestUrl, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Updated ${unique.length} records from ${sitemapUrl}; translation states and removed source URLs were preserved.`);
