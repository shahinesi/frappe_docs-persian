import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content', 'fa');
const manifestPath = path.join(root, 'sources', 'manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const glossary = await readFile(path.join(root, 'glossary', 'fa.md'), 'utf8');
const snapshot = JSON.parse(await readFile(path.join(root, 'sources', 'ui-terms.json'), 'utf8'));
const pageByTranslationPath = new Map(manifest.pages.filter((page) => page.translation_path).map((page) => [page.translation_path, page]));
const globalTerms = {};
const manualTokens = {
	'سرنخ_نام': 'lead_name',
	'معامله_won': 'deal_won',
	'ایمیل_replied': 'email_replied',
	'معامله_via_سرنخ': 'deal_via_lead',
	'اقدام_type': 'action_type',
	'requires_سند': 'requires_document',
	'server_script_فعال': 'server_script_enabled',
	'common_سایت_config': 'common_site_config',
	'سایت_config': 'site_config',
	'get_system_تنظیمات': 'get_system_settings',
	'ایمیل_template': 'email_template',
	'resume_پس': 'resume_after',
	'ایمیل': 'email',
	'مشتری': 'customer',
	'سرنخ': 'Lead',
	'نام': 'name',
	'هدف': 'target',
	'فیلد': 'field',
	'سند': 'document',
	'بستن': 'close',
	'وضعیت': 'status',
	'امروز': 'today',
	'ادمین': 'Administrator',
	'دلیل': 'reason',
	'پرس‌وجو': 'query',
	'فعال': 'enabled',
	'تنظیمات': 'settings',
};

for (const line of glossary.split(/\r?\n/)) {
	const row = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
	if (!row || row[1].trim() === 'English') continue;
	const english = row[1].trim().replaceAll('`', '').replaceAll('**', '');
	const persian = row[2].trim();
	if (english && persian && !/[A-Za-z]/.test(persian)) globalTerms[english] = persian;
}

function transformToken(token, terms) {
	let value = token;
	for (const [english, persian] of Object.entries(terms).sort(([a], [b]) => b.length - a.length)) {
		const pattern = new RegExp(`(?<![A-Za-z0-9])${english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z0-9])`, 'gi');
		value = value.replace(pattern, (match) => match === match.toUpperCase() && english !== match ? match : persian);
	}
	return value;
}

async function walk(directory, callback) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) await walk(absolute, callback);
		else if (entry.name.toLowerCase().endsWith('.md')) await callback(absolute);
	}
}

const contentChanges = new Set();
let restored = 0;
let ambiguous = 0;
await walk(contentRoot, async (absolute) => {
	const relative = path.relative(contentRoot, absolute).replaceAll('\\', '/');
	const section = relative.split('/')[0];
	const translationPath = `content/fa/${relative}`;
	const page = pageByTranslationPath.get(translationPath);
	const before = await readFile(absolute, 'utf8');
	if (!/<code\b[^>]*>[\s\S]*?[\u0600-\u06FF][\s\S]*?<\/code\s*>/i.test(before)) return;
	const terms = { ...globalTerms, ...(snapshot.terms[section] || {}) };
	const sourcePath = page?.source_id
		? path.join(root, 'sources', ...page.source_id.split('/')) + '.md'
		: path.join(root, 'sources', ...relative.split('/'));
	let source;
	try {
		source = await readFile(sourcePath, 'utf8');
	} catch {
		return;
	}
	const reverse = new Map();
	for (const match of source.matchAll(/[A-Za-z0-9_]+/g)) {
		const english = match[0];
		const localized = transformToken(english, terms);
		if (localized === english || !/[\u0600-\u06FF]/.test(localized)) continue;
		if (!reverse.has(localized)) reverse.set(localized, new Set());
		reverse.get(localized).add(english);
	}
	let after = before.replace(/<code\b([^>]*)>([\s\S]*?)<\/code\s*>/gi, (whole, attrs, code) => {
		let restoredCode = code
			.replaceAll('جدید Lead', 'New lead')
			.replaceAll('پرس‌وجو()', 'query()')
			.replaceAll('resume_پس از', 'resume_after')
			.replaceAll('StopAutomation("دلیل", resume_after=seconds)', 'StopAutomation("reason", resume_after=seconds)')
			.replaceAll('updateField(\'وضعیت\', \'بسته شده\', callback)', 'updateField(\'status\', \'closed\', callback)')
			.replaceAll('{ بستن }', '{ close }')
			.replaceAll('onClick(بستن)', 'onClick(close)')
			.replaceAll('"doctype": "CRM سرنخ"', '"doctype": "CRM Lead"')
			.replaceAll('"Email"', '"Email"');
		restoredCode = restoredCode.replace(/[A-Za-z0-9_\u0600-\u06FF]+/g, (token) => {
			if (manualTokens[token]) {
				restored++;
				return manualTokens[token];
			}
			const candidates = reverse.get(token);
			if (!candidates) return token;
			if (candidates.size !== 1) {
				ambiguous++;
				return token;
			}
			restored++;
			return [...candidates][0];
		});
		return `<code${attrs}>${restoredCode}</code>`;
	});
	if (after !== before) {
		await writeFile(absolute, after, 'utf8');
		contentChanges.add(`content/fa/${relative}`);
	}
});

for (const page of manifest.pages) {
	if (!contentChanges.has(page.translation_path)) continue;
	if (page.quality_status === 'passed') {
		page.quality_status = 'not_reviewed';
		page.translation_status = 'translated';
	}
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Restored ${restored} code tokens in ${contentChanges.size} pages; ${ambiguous} ambiguous tokens were left for manual inspection.`);
