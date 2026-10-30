import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content', 'fa');
const snapshot = JSON.parse(await readFile(path.join(root, 'sources', 'ui-terms.json'), 'utf8'));
const localeStacks = {
	framework: ['framework'], erpnext: ['framework', 'erpnext'], hr: ['framework', 'erpnext', 'hr'],
	helpdesk: ['framework', 'helpdesk'], insights: ['framework', 'insights'], crm: ['framework', 'crm'],
	builder: ['framework', 'builder'], learning: ['framework', 'learning'], drive: ['framework', 'drive'],
	wiki: ['framework', 'wiki'], books: ['framework', 'books'], other: ['framework'],
};
const knownTechnical = /^(?:API|REST API|SQL|JSON|CSV|HTML|CSS|JavaScript|Python|Linux|Windows|Mac|Git|GitHub|OAuth|DocType|ERPNext|Frappe(?: (?:Cloud|Framework|HR|Helpdesk|CRM|Builder|Learning|Drive|Insights))?|CRM|SLA|GST|KPI|CI|CD|SDK|CLI|URL|Docker|Redis|MariaDB|PostgreSQL|MySQL|SQLite|AWS|S3|GCS|Amazon|Google|Microsoft|Twilio|Stripe|PayPal|Razorpay|UPI|IRN|QR|Vue|React|Node\.js|TypeScript|Bench|Ubuntu|Debian|Nginx|Supervisor|Systemd|Jinja|YAML|XML|PDF|Excel|OAuth2|JWT|SMTP|IMAP|DNS|SSL|TLS|TCP|SSH|PWA|WebSocket|Markdown|TipTap|ProseMirror|YJS|Ibis|Awesomebar|Command|Option|Ctrl|Alt|Enter|Esc|Reply-To)$/i;
const findings = [];
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function walk(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) await walk(absolute);
		else if (entry.name.toLowerCase().endsWith('.md')) {
			const relative = path.relative(contentRoot, absolute).split(path.sep);
			const product = relative[0];
			const terms = Object.assign({}, ...(localeStacks[product] || ['framework']).map((locale) => snapshot.terms[locale] || {}));
			for (const curated of snapshot.curated_terms || []) {
				if (!(localeStacks[product] || ['framework']).includes(curated.product)) continue;
				if (curated.source_label && curated.translation) terms[curated.source_label] = curated.translation;
				Object.assign(terms, curated.source_labels || {});
			}
			const markdown = (await readFile(absolute, 'utf8'))
				.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
				.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, '')
				.replace(/`[^`\r\n]*`/g, '');
			const labels = new Set();
			for (const [sourceLabel, translation] of Object.entries(terms)) {
				if (!translation || !/[\u0600-\u06ff]/.test(translation) || !/[A-Za-z]{3}/.test(sourceLabel) || /^[A-Z0-9 _-]+$/.test(sourceLabel) || knownTechnical.test(sourceLabel)) continue;
				const bilingualLabel = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(translation)}\\s*\\(\\s*${escapeRegExp(sourceLabel)}\\s*\\)(?![\\p{L}\\p{N}])`, 'giu');
				if (bilingualLabel.test(markdown) && !(product === 'crm' && relative.slice(1).join('/') === 'custom-statuses.md')) labels.add(`${translation} (${sourceLabel}) [English duplicate]`);
			}
			for (const match of markdown.matchAll(/\*\*([^*]+)\*\*|^\s*(?:[-*+]\s+|\d+[.)]\s+)([^|:]+?)\s*$/gm)) {
				const label = (match[1] || match[2] || '').replace(/\[[^\]]+\]\([^)]+\)/g, '').replace(/^\*+|\*+$/g, '').trim();
				if (label && /[A-Za-z]{3}/.test(label) && !/[\u0600-\u06ff]/i.test(label) && !terms[label] && !knownTechnical.test(label)) labels.add(label);
			}
			for (const label of labels) findings.push({ file: path.relative(root, absolute).split(path.sep).join('/'), label });
		}
	}
}

await walk(contentRoot);
findings.sort((a, b) => a.file.localeCompare(b.file) || a.label.localeCompare(b.label));
console.log(JSON.stringify({ candidate_count: findings.length, candidates: findings }, null, 2));
