import path from 'node:path';

const MARKDOWN_TOKEN = /```[\s\S]*?```|`[^`\n]*`|<code\b[^>]*>[\s\S]*?<\/code\s*>|<pre\b[^>]*>[\s\S]*?<\/pre\s*>|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\)/gi;
const FA_LETTER = /[\u0600-\u06FF]/;
const ATTRIBUTION_LABEL = /(منبع|مشاهده.{0,8}منبع|\bsource\b)/i;

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function replaceUiTerms(text, terms, counters) {
	let result = text;
	const entries = Object.entries(terms).sort(([left], [right]) => right.length - left.length);
	for (const [english, persian] of entries) {
		if (!english || !persian) continue;
		const pattern = new RegExp(`(?<![A-Za-z0-9])${escapeRegExp(english)}(?![A-Za-z0-9])`, 'gi');
		if (counters) counters.translatedTerms += [...result.matchAll(pattern)].length;
		result = result.replace(pattern, (match) => match === match.toUpperCase() && english !== match ? match : persian);
	}
	return result;
}

function normalizeRepoPath(value) {
	return path.posix.normalize(value.replaceAll('\\', '/')).replace(/^\.\//, '');
}

function getPageTitle(value) {
	const match = value.match(/^title:\s*["']?([^\r\n"']+)["']?\s*$/m);
	return match?.[1]?.replaceAll('\\n', ' ').replaceAll('\\r', ' ').replace(/[\r\n]+/g, ' ').trim() || null;
}

function getOfficialPage(href, byPath, aliases) {
	try {
		const url = href.startsWith('/')
			? new URL(href, 'https://docs.frappe.io')
			: new URL(href);
		if (url.hostname.toLowerCase() !== 'docs.frappe.io') return null;
		const pathname = decodeURI(url.pathname).replace(/\/$/, '').replace(/\.md$/i, '');
		const section = pathname.split('/')[1];
		const productSections = new Set(['builder', 'crm', 'drive', 'erpnext', 'framework', 'helpdesk', 'hr', 'insights', 'learning', 'wiki']);
		if (!productSections.has(section)) return null;
		return { page: byPath.get(pathname) || byPath.get(aliases.get(pathname)), hash: url.hash, section, pathname };
	} catch {
		return null;
	}
}

function productLinkLabel(section) {
	const labels = {
		builder: 'مستندات رسمی Frappe Builder',
		crm: 'مستندات رسمی Frappe CRM',
		drive: 'مستندات رسمی Frappe Drive',
		erpnext: 'مستندات رسمی ERPNext',
		framework: 'مستندات رسمی Frappe Framework',
		helpdesk: 'مستندات رسمی Helpdesk',
		hr: 'مستندات رسمی Frappe HR',
		insights: 'مستندات رسمی Insights',
		learning: 'مستندات رسمی Frappe Learning',
		wiki: 'مستندات رسمی Frappe Wiki',
	};
	return labels[section] || 'مستندات رسمی Frappe';
}

function localizeImageAlt(token, terms, counters) {
	const match = token.match(/^!\[([^\]]*)\](\(.*\))$/);
	if (!match) return token;
	const alt = replaceUiTerms(match[1], terms, counters);
	if (alt !== match[1]) counters.localizedLabels++;
	return `![${alt}]${match[2]}`;
}

function rewriteLink(token, { currentPath, byPath, byTranslationPath, titles, terms, counters, reviewIssues }) {
	const match = token.match(/^(\[)([^\]]*)(\]\()(<[^>]+>|[^\s)]+)([^)]*)(\))$/);
	if (!match) return token;
	const [, open, originalLabel, close, wrappedHref, suffix, end] = match;
	const href = wrappedHref.replace(/^<|>$/g, '');
	let label = replaceUiTerms(originalLabel, terms, counters).replaceAll('\\n', ' ').replaceAll('\\r', ' ').trim();
	let nextHref = href;
	let targetPath = null;
	const official = getOfficialPage(href, byPath);
	const isOwnPageAttribution = Boolean(official?.page?.translation_path
		&& normalizeRepoPath(official.page.translation_path) === currentPath
		&& /^مستندات رسمی /.test(originalLabel.trim()));
	const isAttribution = ATTRIBUTION_LABEL.test(originalLabel) || isOwnPageAttribution;

	if (official) {
		const { page, hash, section, pathname } = official;
		if (page?.translation_path && !isAttribution) {
			targetPath = normalizeRepoPath(page.translation_path);
			nextHref = path.posix.relative(path.posix.dirname(currentPath), targetPath) + hash;
			counters.localizedUrls++;
		} else if (!page) {
			reviewIssues.push({ file: currentPath, href, kind: 'official-page-not-in-manifest' });
			counters.unmappedOfficialLinks++;
			if (!FA_LETTER.test(label) && !isAttribution) label = productLinkLabel(section);
		} else if (page && !isAttribution) {
			nextHref = `${page.url}${hash}`;
			const isGenericProductLabel = /^مستندات رسمی (?:ERPNext|Frappe|Frappe Framework|Frappe HR|Helpdesk|Insights|Frappe Builder|Frappe CRM|Frappe Drive|Frappe Learning|Frappe Wiki)$/.test(originalLabel.trim())
				|| /^راهنمای «.*» در (?:ERPNext|Frappe Framework|Frappe HR|Frappe Helpdesk|Insights|Frappe CRM|Frappe Builder|Frappe Learning|Frappe Drive)$/.test(originalLabel.trim());
			if (!FA_LETTER.test(label) || isGenericProductLabel) {
				const cleanSourceTitle = (page.source_title || '').replaceAll('\\n', ' ').replaceAll('\\r', ' ').replace(/[\r\n]+/g, ' ').replace(/\s*\|\s*(?:ERPNext|Frappe Framework|Frappe HR|Frappe Helpdesk|Insights|Frappe CRM|Frappe Builder|Frappe Learning|Frappe Drive) Documentation\s*$/i, '').trim();
				const sourceTitle = cleanSourceTitle ? replaceUiTerms(cleanSourceTitle, terms) : '';
				label = FA_LETTER.test(sourceTitle)
					? sourceTitle
					: `راهنمای «${sourceTitle || label}» در ${productLinkLabel(page.section).replace(/^مستندات رسمی /, '')}`;
			}
		}
		if (!page && !reviewIssues.some((issue) => issue.file === currentPath && issue.href === href)) {
			reviewIssues.push({ file: currentPath, href, pathname, kind: 'official-page-not-in-manifest' });
		}
	} else if (!/^[a-z]+:/i.test(href) && !href.startsWith('#')) {
		const pathPart = href.split(/[?#]/, 1)[0];
		targetPath = normalizeRepoPath(path.posix.join(path.posix.dirname(currentPath), pathPart));
		if (byTranslationPath.has(targetPath)) {
			counters.resolvedRelativeLinks++;
		} else if (/\.mdx?$/i.test(pathPart)) {
			const slug = path.posix.basename(pathPart).replace(/\.mdx?$/i, '');
			const section = currentPath.match(/^content\/fa\/([^/]+)\//)?.[1];
			const guessedPath = `/${section}/${slug}`;
			const sourcePage = byPath.get(guessedPath) || (slug === 'company' ? byPath.get('/erpnext/company-setup') : null);
			if (sourcePage?.translation_path) {
				targetPath = normalizeRepoPath(sourcePage.translation_path);
				const hash = href.match(/#[^?]*/)?.[0] || '';
				nextHref = path.posix.relative(path.posix.dirname(currentPath), targetPath) + hash;
				counters.localizedUrls++;
			} else if (sourcePage) {
				targetPath = null;
				nextHref = `${sourcePage.url}${href.match(/#[^?]*/)?.[0] || ''}`;
			} else {
				counters.unresolvedRelativeLinks++;
				reviewIssues.push({ file: currentPath, href, kind: 'relative-markdown-target-not-in-manifest' });
			}
		}
	}

	const translatedTitle = targetPath ? titles.get(targetPath) : null;
	if (translatedTitle && !isAttribution) {
		if (!FA_LETTER.test(label) || label.trim() === (official?.page.source_title || '').trim()) {
			label = translatedTitle;
		}
	}
	if (label !== originalLabel) counters.localizedLabels++;
	if (nextHref !== href) counters.changedUrls++;
	return `${open}${label}${close}${nextHref}${suffix}${end}`;
}

export function prepareMarkdownLinks(markdown, {
	currentPath,
	manifest,
	aliases = new Map(),
	titles = new Map(),
	terms = {},
}) {
	const byPath = new Map();
	const byTranslationPath = new Map();
	for (const page of manifest.pages) {
		try {
			byPath.set(decodeURI(new URL(page.url).pathname).replace(/\/$/, '').replace(/\.md$/i, ''), page);
		} catch {}
		if (page.translation_path) byTranslationPath.set(normalizeRepoPath(page.translation_path), page);
	}
	for (const [alias, canonical] of aliases) {
		const canonicalPath = canonical.startsWith('https://docs.frappe.io') ? new URL(canonical).pathname : canonical;
		byPath.set(alias, byPath.get(decodeURI(canonicalPath).replace(/\/$/, '')));
	}
	const counters = { localizedLabels: 0, localizedUrls: 0, changedUrls: 0, resolvedRelativeLinks: 0, translatedTerms: 0, unmappedOfficialLinks: 0, unresolvedRelativeLinks: 0 };
	const reviewIssues = [];
	const prefixMatch = markdown.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n/);
	const prefix = prefixMatch?.[0] || '';
	const body = markdown.slice(prefix.length);
	let result = '';
	let lastIndex = 0;
	for (const match of body.matchAll(MARKDOWN_TOKEN)) {
		const token = match[0];
		const index = match.index ?? 0;
		result += replaceUiTerms(body.slice(lastIndex, index), terms, counters);
		if (token.startsWith('```') || token.startsWith('`')) {
			result += token;
		} else if (token.startsWith('![')) {
			result += localizeImageAlt(token, terms, counters);
		} else {
			result += rewriteLink(token, {
				currentPath,
				byPath,
				byTranslationPath,
				titles,
				terms,
				counters,
				reviewIssues,
			});
		}
		lastIndex = index + token.length;
	}
	result += replaceUiTerms(body.slice(lastIndex), terms, counters);
	return { markdown: prefix + result, counters, reviewIssues };
}

export { getPageTitle, normalizeRepoPath };
