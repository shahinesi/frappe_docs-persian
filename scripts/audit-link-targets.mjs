import { writeFile, readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content', 'fa');
const manifest = JSON.parse(await readFile(path.join(root, 'sources', 'manifest.json'), 'utf8'));
let previousRecords = new Map();
try {
	const previous = JSON.parse(await readFile(path.join(root, 'sources', 'link-target-audit.json'), 'utf8'));
	previousRecords = new Map(previous.records.map((record) => [record.url, record]));
} catch {}
const knownPaths = new Set(manifest.pages.map((page) => normalizePath(new URL(page.url).pathname)));
const linkPattern = /(?<!!)\[[^\]]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)/g;
const found = new Map();

function normalizePath(value) {
	return decodeURI(value).replace(/\/$/, '').replace(/\.md$/i, '');
}

async function walk(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) await walk(absolute);
		else if (entry.name.toLowerCase().endsWith('.md')) {
			const content = (await readFile(absolute, 'utf8')).replace(/```[\s\S]*?```|`[^`\n]*`/g, '');
			for (const match of content.matchAll(linkPattern)) {
				const href = match[1].replace(/^<|>$/g, '');
				try {
					const url = href.startsWith('/') ? new URL(href, 'https://docs.frappe.io') : new URL(href);
					if (url.hostname !== 'docs.frappe.io' || url.pathname.startsWith('/files/')) continue;
					const pagePath = normalizePath(url.pathname);
					if (knownPaths.has(pagePath)) continue;
					const canonical = `https://docs.frappe.io${url.pathname.replace(/\/$/, '')}`;
					const file = path.relative(root, absolute).replaceAll('\\', '/');
					if (!found.has(canonical)) found.set(canonical, new Set());
					found.get(canonical).add(file);
				} catch {}
			}
		}
	}
}

function frontmatterValue(markdown, key) {
	const match = markdown.match(new RegExp(`^${key}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`, 'm'));
	return match?.[1]?.trim() || null;
}

await walk(contentRoot);
const urls = [...found.entries()];
const records = new Array(urls.length);
let cursor = 0;
async function worker() {
	while (cursor < urls.length) {
		const index = cursor++;
		const [url, refs] = urls[index];
		const record = { url, references: [...refs].sort() };
		try {
			const pageResponse = await fetch(url, { signal: AbortSignal.timeout(15000), redirect: 'follow' });
			record.page_status = pageResponse.status;
			record.final_page_url = pageResponse.url;
			let markdown = null;
			if (pageResponse.ok) {
				const finalPage = pageResponse.url.replace(/\/$/, '');
				record.markdown_url = finalPage.endsWith('.md') ? finalPage : `${finalPage}.md`;
				const markdownResponse = await fetch(record.markdown_url, { signal: AbortSignal.timeout(15000), redirect: 'follow' });
				record.http_status = markdownResponse.status;
				record.final_markdown_url = markdownResponse.url;
				if (markdownResponse.ok) markdown = await markdownResponse.text();
			} else {
				const previous = previousRecords.get(url);
				record.markdown_url = previous?.markdown_url || `${url}.md`;
				record.http_status = previous?.http_status ?? pageResponse.status;
				record.final_markdown_url = previous?.final_markdown_url || null;
			}
			if (markdown) {
				record.title = frontmatterValue(markdown, 'title');
				record.canonical_url = frontmatterValue(markdown, 'url');
				record.updated = frontmatterValue(markdown, 'updated');
				record.content_sha256 = createHash('sha256').update(markdown).digest('hex');
				record.source_kind = 'official-markdown-export-endpoint';
			}
		} catch (error) {
			record.error = error.message;
		}
		records[index] = record;
		console.log(`[${index + 1}/${urls.length}] ${record.http_status || 'ERROR'} ${url}`);
		if (index + 1 < urls.length) await new Promise((resolve) => setTimeout(resolve, 900));
	}
}

await Promise.all([worker(), worker()]);
const report = {
	schema_version: 1,
	checked_at: new Date().toISOString(),
	checked_count: records.length,
	valid_markdown_sources: records.filter((record) => record.http_status === 200 && record.canonical_url).length,
	missing_or_unavailable: records.filter((record) => record.http_status !== 200 || !record.canonical_url).length,
	records,
};
await writeFile(path.join(root, 'sources', 'link-target-audit.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`Checked ${report.checked_count} unique official link targets: ${report.valid_markdown_sources} valid Markdown sources and ${report.missing_or_unavailable} unavailable or incomplete.`);
