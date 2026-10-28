import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getPageTitle, normalizeRepoPath, prepareMarkdownLinks } from './wiki-link-localization.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content', 'fa');
const manifest = JSON.parse(await readFile(path.join(root, 'sources', 'manifest.json'), 'utf8'));
const uiTermSnapshot = JSON.parse(await readFile(path.join(root, 'sources', 'ui-terms.json'), 'utf8'));
const localeStacks = {
	framework: ['framework'], erpnext: ['framework', 'erpnext'], hr: ['framework', 'erpnext', 'hr'],
	helpdesk: ['framework', 'helpdesk'], insights: ['framework', 'insights'], crm: ['framework', 'crm'],
	builder: ['framework', 'builder'], learning: ['framework', 'learning'], drive: ['framework', 'drive'],
	wiki: ['framework'], other: ['framework'],
};
const linkAudit = JSON.parse(await readFile(path.join(root, 'sources', 'link-target-audit.json'), 'utf8'));
const aliases = new Map();
const manifestPaths = new Set(manifest.pages.map((page) => new URL(page.url).pathname.replace(/\/$/, '')));
for (const record of linkAudit.records) {
	if (!record.canonical_url) continue;
	const alias = new URL(record.url).pathname.replace(/\/$/, '');
	const canonical = new URL(record.canonical_url).pathname.replace(/\/$/, '');
	if (manifestPaths.has(canonical) && alias !== canonical) aliases.set(alias, canonical);
}
const glossary = await readFile(path.join(root, 'glossary', 'fa.md'), 'utf8');
const dryRun = process.argv.includes('--dry-run');
const terms = {};
for (const line of glossary.split(/\r?\n/)) {
	const row = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
	if (!row || row[1].trim() === 'English') continue;
	const english = row[1].trim().replaceAll('`', '').replaceAll('**', '');
	const persian = row[2].trim();
	if (english && persian && !/[A-Za-z]/.test(persian)) terms[english] = persian;
}

const files = [];
async function writeWithRetry(file, contents) {
	for (let attempt = 0; ; attempt++) {
		try {
			await writeFile(file, contents, 'utf8');
			return;
		} catch (error) {
			if (attempt >= 7 || !['UNKNOWN', 'EBUSY', 'EPERM'].includes(error.code)) throw error;
			await new Promise((resolve) => setTimeout(resolve, 150 * (attempt + 1)));
		}
	}
}

async function walk(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) await walk(absolute);
		else if (entry.name.toLowerCase().endsWith('.md')) files.push(absolute);
	}
}
await walk(contentRoot);

const pages = new Map();
for (const absolute of files) {
	const relative = normalizeRepoPath(path.relative(root, absolute));
	const markdown = await readFile(absolute, 'utf8');
	pages.set(relative, { absolute, markdown, title: getPageTitle(markdown) });
}
const titles = new Map([...pages].filter(([, page]) => page.title).map(([relative, page]) => [relative, page.title]));

const totals = {
	localizedLabels: 0,
	localizedUrls: 0,
	changedUrls: 0,
	resolvedRelativeLinks: 0,
	translatedTerms: 0,
	unmappedOfficialLinks: 0,
	unresolvedRelativeLinks: 0,
};
const reviewIssues = [];
const changedPaths = new Set();
let changedFiles = 0;
for (const [currentPath, page] of pages) {
	const product = currentPath.match(/^content\/fa\/([^/]+)\//)?.[1];
	const productTerms = {};
	for (const locale of localeStacks[product] || ['framework']) Object.assign(productTerms, uiTermSnapshot.terms[locale] || {});
	const prepared = prepareMarkdownLinks(page.markdown, { currentPath, manifest, aliases, titles, terms, uiTerms: productTerms });
	for (const [key, value] of Object.entries(prepared.counters)) totals[key] += value;
	reviewIssues.push(...prepared.reviewIssues);
	if (prepared.markdown === page.markdown) continue;
	changedFiles++;
	changedPaths.add(currentPath);
	if (!dryRun) await writeWithRetry(page.absolute, prepared.markdown);
}

let pagesMarkedForReview = 0;
if (!dryRun) {
	for (const page of manifest.pages) {
		if (!page.translation_path || !changedPaths.has(normalizeRepoPath(page.translation_path))) continue;
		if (page.quality_status === 'passed' && page.translation_status !== 'published') {
			page.translation_status = 'translated';
			page.quality_status = 'not_reviewed';
			pagesMarkedForReview++;
		}
	}
	await writeFile(path.join(root, 'sources', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
	await writeFile(
		path.join(root, 'sources', 'link-review.json'),
		`${JSON.stringify({ schema_version: 1, checked_files: files.length, changed_files: changedFiles, unresolved: reviewIssues }, null, 2)}\n`,
		'utf8',
	);
}

console.log(`${dryRun ? 'Would update' : 'Updated'} ${changedFiles} of ${files.length} Persian Markdown files.`);
console.log(`Localized ${totals.localizedLabels} link labels and ${totals.translatedTerms} glossary terms.`);
console.log(`Changed ${totals.changedUrls} links to local translated pages.`);
console.log(`Resolved ${totals.resolvedRelativeLinks} existing relative links to translated pages.`);
console.log(`Unresolved official links: ${totals.unmappedOfficialLinks}; unresolved relative Markdown links: ${totals.unresolvedRelativeLinks}.`);
if (dryRun) console.log('Dry run only; no files were written.');
else console.log(`Marked ${pagesMarkedForReview} edited translations as needing quality review and wrote sources/link-review.json.`);
if (dryRun && reviewIssues.length) console.log(JSON.stringify(reviewIssues.slice(0, 20), null, 2));
