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
	wiki: ['framework', 'wiki'], other: ['framework'],
};
const knownTechnical = /^(?:API|REST API|SQL|JSON|CSV|HTML|CSS|JavaScript|Python|Linux|Windows|Mac|Git|GitHub|OAuth|DocType|ERPNext|Frappe(?: (?:Cloud|Framework|HR|Helpdesk|CRM|Builder|Learning|Drive|Insights))?|CRM|SLA|GST|KPI|CI|CD|SDK|CLI|URL|Docker|Redis|MariaDB|PostgreSQL|MySQL|SQLite|AWS|S3|GCS|Amazon|Google|Microsoft|Twilio|Stripe|PayPal|Razorpay|UPI|IRN|QR|Vue|React|Node\.js|TypeScript|Bench|Ubuntu|Debian|Nginx|Supervisor|Systemd|Jinja|YAML|XML|PDF|Excel|OAuth2|JWT|SMTP|IMAP|DNS|SSL|TLS|TCP|SSH|PWA|WebSocket|Markdown|TipTap|ProseMirror|YJS|Ibis|Awesomebar|Command|Option|Ctrl|Alt|Enter|Esc)$/i;
const findings = [];

async function walk(directory) {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const absolute = path.join(directory, entry.name);
		if (entry.isDirectory()) await walk(absolute);
		else if (entry.name.toLowerCase().endsWith('.md')) {
			const relative = path.relative(contentRoot, absolute).split(path.sep);
			const product = relative[0];
			const terms = Object.assign({}, ...(localeStacks[product] || ['framework']).map((locale) => snapshot.terms[locale] || {}));
			const markdown = (await readFile(absolute, 'utf8'))
				.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
				.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, '')
				.replace(/`[^`\r\n]*`/g, '');
			const labels = new Set();
			for (const match of markdown.matchAll(/\*\*([^*]+)\*\*|^\s*(?:[-*+]\s+|\d+[.)]\s+)([^|:]+?)\s*$/gm)) {
				const label = (match[1] || match[2] || '').replace(/\[[^\]]+\]\([^)]+\)/g, '').trim();
				if (label && /[A-Za-z]{3}/.test(label) && !/[\u0600-\u06ff]/i.test(label) && !terms[label] && !knownTechnical.test(label)) labels.add(label);
			}
			for (const label of labels) findings.push({ file: path.relative(root, absolute).split(path.sep).join('/'), label });
		}
	}
}

await walk(contentRoot);
findings.sort((a, b) => a.file.localeCompare(b.file) || a.label.localeCompare(b.label));
console.log(JSON.stringify({ candidate_count: findings.length, candidates: findings }, null, 2));
