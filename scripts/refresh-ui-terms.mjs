import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'sources', 'manifest.json'), 'utf8'));
const snapshotPath = path.join(root, 'sources', 'ui-terms.json');
const previous = JSON.parse(await readFile(snapshotPath, 'utf8'));
const dryRun = process.argv.includes('--dry-run');

const localeFiles = {
	framework: {
		url: 'https://raw.githubusercontent.com/frappe/frappe/develop/frappe/locale/fa.po',
		repository: 'frappe/frappe', branch: 'develop', path: 'frappe/locale/fa.po',
	},
	erpnext: {
		url: 'https://raw.githubusercontent.com/frappe/erpnext/develop/erpnext/locale/fa.po',
		repository: 'frappe/erpnext', branch: 'develop', path: 'erpnext/locale/fa.po',
	},
	hr: {
		url: 'https://raw.githubusercontent.com/frappe/hrms/develop/hrms/locale/fa.po',
		repository: 'frappe/hrms', branch: 'develop', path: 'hrms/locale/fa.po',
	},
	helpdesk: {
		url: 'https://raw.githubusercontent.com/frappe/helpdesk/develop/helpdesk/locale/fa.po',
		repository: 'frappe/helpdesk', branch: 'develop', path: 'helpdesk/locale/fa.po',
	},
	insights: {
		url: 'https://raw.githubusercontent.com/frappe/insights/develop/insights/locale/fa.po',
		repository: 'frappe/insights', branch: 'develop', path: 'insights/locale/fa.po',
	},
	crm: {
		url: 'https://raw.githubusercontent.com/frappe/crm/develop/crm/locale/fa.po',
		repository: 'frappe/crm', branch: 'develop', path: 'crm/locale/fa.po',
	},
	builder: {
		url: 'https://raw.githubusercontent.com/frappe/builder/develop/builder/locale/fa.po',
		repository: 'frappe/builder', branch: 'develop', path: 'builder/locale/fa.po',
	},
	learning: {
		url: 'https://raw.githubusercontent.com/frappe/lms/develop/lms/locale/fa.po',
		repository: 'frappe/lms', branch: 'develop', path: 'lms/locale/fa.po',
	},
	drive: {
		url: 'https://raw.githubusercontent.com/frappe/drive/develop/drive/locale/fa.po',
		repository: 'frappe/drive', branch: 'develop', path: 'drive/locale/fa.po',
	},
};

const productLocales = {
	framework: ['framework'],
	erpnext: ['framework', 'erpnext'],
	hr: ['framework', 'erpnext', 'hr'],
	helpdesk: ['framework', 'helpdesk'],
	insights: ['framework', 'insights'],
	crm: ['framework', 'crm'],
	builder: ['framework', 'builder'],
	learning: ['framework', 'learning'],
	drive: ['framework', 'drive'],
	wiki: ['framework'],
	other: ['framework'],
};

function readPoField(block, field) {
	const lines = block.split(/\r?\n/);
	const start = lines.findIndex((line) => line.startsWith(`${field} `));
	if (start < 0) return '';
	let value = JSON.parse(lines[start].slice(field.length).trim());
	for (let index = start + 1; index < lines.length && /^"/.test(lines[index]); index++) {
		value += JSON.parse(lines[index]);
	}
	return value;
}

function parsePo(content) {
	const entries = new Map();
	for (const block of content.split(/\r?\n\s*\r?\n/)) {
		if (/^#,.*\bfuzzy\b/m.test(block)) continue;
		const msgid = readPoField(block, 'msgid');
		const msgstr = readPoField(block, 'msgstr');
		if (!msgid || !msgstr || msgid === msgstr || /\{\d+\}/.test(msgid)) continue;
		entries.set(msgid, msgstr);
	}
	return entries;
}

function addCandidate(set, value) {
	const candidate = value.replace(/\s+/g, ' ').trim();
	if (candidate.length > 1 && candidate.length <= 120 && /[A-Za-z]/.test(candidate) && !/[\r\n]|https?:\/\//.test(candidate)) {
		set.add(candidate);
	}
}

function extractCandidates(markdown, set) {
	const body = markdown
		.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
		.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, '')
		.replace(/<code\b[^>]*>[\s\S]*?<\/code\s*>|<pre\b[^>]*>[\s\S]*?<\/pre\s*>/gi, '')
		.replace(/`[^`\n]*`/g, '');
	for (const match of body.matchAll(/\*\*([^*]+)\*\*|(?<!!)\[([^\]]+)\]\([^)]+\)/g)) {
		addCandidate(set, match[1] || match[2]);
	}
	for (const line of body.split(/\r?\n/)) {
		const item = line.match(/^\s*(?:[-*+]\s+|\d+[.)]\s+)([^|:]{1,120})\s*$/);
		if (item) addCandidate(set, item[1].replace(/\*\*/g, '').replace(/`/g, ''));
		if (line.includes('|')) {
			for (const cell of line.split('|').slice(1, -1)) {
				addCandidate(set, cell.replace(/\*\*/g, '').replace(/`/g, ''));
			}
		}
	}
}

async function getSourceMarkdown(page) {
	const sourceUrl = page.source_markdown_url || `${page.url.replace(/\/$/, '')}.md`;
	const parts = new URL(sourceUrl).pathname.split('/').filter(Boolean);
	if (parts.length < 2) return null;
	const sourceSection = page.section === 'wiki' ? 'wiki-v2' : page.section;
	const sourceFile = path.join(root, 'sources', sourceSection, ...parts.slice(1));
	try {
		return await readFile(sourceFile, 'utf8');
	} catch {
		return null;
	}
}

const localeContent = {};
const localeMaps = {};
const sourceFiles = {};
for (const [product, source] of Object.entries(localeFiles)) {
	const response = await fetch(source.url, { signal: AbortSignal.timeout(30000) });
	if (!response.ok) throw new Error(`Could not fetch ${product} Persian locale: HTTP ${response.status}`);
	const bytes = Buffer.from(await response.arrayBuffer());
	const content = bytes.toString('utf8');
	localeContent[product] = content;
	localeMaps[product] = parsePo(content);
	sourceFiles[product] = { ...source, sha256: createHash('sha256').update(bytes).digest('hex') };
}

const candidates = Object.fromEntries(Object.keys(productLocales).map((product) => [product, new Set()]));
for (const page of manifest.pages) {
	if (!(page.section in candidates)) continue;
	addCandidate(candidates[page.section], page.source_title || '');
	const source = await getSourceMarkdown(page);
	if (source) extractCandidates(source, candidates[page.section]);
}

const terms = {};
const counts = {};
for (const [product, localeStack] of Object.entries(productLocales)) {
	const collected = { ...(previous.terms?.[product] || {}) };
	for (const locale of localeStack) {
		for (const candidate of candidates[product]) {
			const translated = localeMaps[locale].get(candidate);
			if (translated) collected[candidate] = translated;
		}
	}
	for (const entry of previous.curated_terms || []) {
		if (entry.product !== product) continue;
		if (entry.source_label && entry.translation) collected[entry.source_label] = entry.translation;
		for (const [sourceLabel, translation] of Object.entries(entry.source_labels || {})) {
			if (translation) collected[sourceLabel] = translation;
		}
	}
	terms[product] = collected;
	counts[product] = { source_candidates: candidates[product].size, translated_terms: Object.keys(collected).length };
}

const updated = {
	schema_version: 1,
	generated_at: new Date().toISOString(),
	method: 'Exact UI labels found in upstream source Markdown and page titles, matched to non-fuzzy non-empty msgstr entries in each product locale. Framework locale terms are inherited by Frappe apps; product locales override them. Reviewed curated terms are applied last and take precedence over upstream entries.',
	curated_terms: previous.curated_terms || [],
	source_files: sourceFiles,
	terms,
};

console.log(JSON.stringify({ dry_run: dryRun, counts }, null, 2));
if (!dryRun) await writeFile(snapshotPath, `${JSON.stringify(updated, null, 2)}\n`, 'utf8');
