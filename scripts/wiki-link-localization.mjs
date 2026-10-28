import path from 'node:path';

const MARKDOWN_TOKEN = /```[\s\S]*?```|`[^`\n]*`|<code\b[^>]*>[\s\S]*?<\/code\s*>|<pre\b[^>]*>[\s\S]*?<\/pre\s*>|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\)|\*\*(?![^*\n]*(?:\]\(|`))[^*\n]+\*\*/gi;
const FA_LETTER = /[\u0600-\u06FF]/;
const ATTRIBUTION_LABEL = /^(?:منبع رسمی|منبع اصلی|مشاهده\s*(?:ٔ|ی|ِ)?\s*منبع(?:\s*(?:ٔ|ی|ِ)?\s*اصلی)?|صفحهٔ منبع|original source|source)$/i;
const mixedEntriesCache = new Map();
const compiledTermsCache = new Map();
const compiledTermsObjectCache = new WeakMap();

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getTermsCacheKey(terms) {
	return Object.entries(terms).sort(([left], [right]) => left.localeCompare(right)).map(([key, value]) => `${key}\u0000${value}`).join('\u0001');
}

function getCompiledTerms(terms) {
	if (compiledTermsObjectCache.has(terms)) return compiledTermsObjectCache.get(terms);
	const cacheKey = getTermsCacheKey(terms);
	if (compiledTermsCache.has(cacheKey)) {
		const cached = compiledTermsCache.get(cacheKey);
		compiledTermsObjectCache.set(terms, cached);
		return cached;
	}
	const entries = Object.entries(terms).filter(([english, persian]) => english && persian).sort(([left], [right]) => right.length - left.length);
	const lookup = new Map(entries.map(([english, persian]) => [english.toLowerCase(), persian]));
	const alternatives = entries.map(([english]) => escapeRegExp(english)).join('|');
	const result = alternatives
		? { lookup, pattern: new RegExp(`(?<![A-Za-z0-9])(?:${alternatives})(?![A-Za-z0-9])`, 'gi') }
		: { lookup, pattern: null };
	compiledTermsCache.set(cacheKey, result);
	compiledTermsObjectCache.set(terms, result);
	return result;
}

function buildMixedTermEntries(terms) {
	const cacheKey = getTermsCacheKey(terms);
	if (mixedEntriesCache.has(cacheKey)) return mixedEntriesCache.get(cacheKey);
	const entries = Object.entries(terms).sort(([left], [right]) => right.length - left.length);
	const mixedEntries = [];
	for (const [english, persian] of entries) {
		if (!english.includes(' ') || !persian || !FA_LETTER.test(persian)) continue;
	const partialTerms = Object.fromEntries(entries.filter(([candidate]) => candidate !== english
		&& candidate.length < english.length
		&& english.toLowerCase().includes(candidate.toLowerCase())));
		const partial = replaceUiTerms(english, partialTerms);
		if (partial !== english && partial !== persian && FA_LETTER.test(partial) && /[A-Za-z]/.test(partial)) {
			mixedEntries.push([partial, persian]);
		}
	}
	const result = mixedEntries.sort(([left], [right]) => left.length - right.length);
	mixedEntriesCache.set(cacheKey, result);
	return result;
}

export function replaceUiTerms(text, terms, counters, mixedEntries = []) {
	let result = text;
	for (const [partial, persian] of mixedEntries) {
		if (!partial || !result.includes(partial)) continue;
		const leftBoundary = /^[\p{L}\p{N}_]/u.test(partial) ? '(?<![\\p{L}\\p{N}_])' : '';
		const rightBoundary = /[\p{L}\p{N}_]$/u.test(partial) ? '(?![\\p{L}\\p{N}_])' : '';
		const pattern = new RegExp(`${leftBoundary}${escapeRegExp(partial)}${rightBoundary}`, 'gu');
		const count = [...result.matchAll(pattern)].length;
		if (counters) counters.translatedTerms += count;
		result = result.replace(pattern, persian);
	}
	const compiled = getCompiledTerms(terms);
	if (!compiled.pattern) return result;
	if (counters) counters.translatedTerms += [...result.matchAll(compiled.pattern)].length;
	result = result.replace(compiled.pattern, (match) => {
		const english = match.toLowerCase();
		const persian = compiled.lookup.get(english);
		return match === match.toUpperCase() && english !== match ? match : persian || match;
	});
	return result;
}

function localizeDisplayLabel(text, terms, counters, mixedEntries = [], phraseTerms = terms) {
	let result = replaceUiTerms(text, phraseTerms, counters, mixedEntries);
	const trimmed = text.trim();
	const exactTranslation = terms[trimmed];
	if (exactTranslation) result = result.replace(trimmed, exactTranslation);
	return result;
}

function normalizeRepoPath(value) {
	return path.posix.normalize(value.replaceAll('\\', '/')).replace(/^\.\//, '');
}

function getPageTitle(value) {
	const match = value.match(/^title:\s*["']?([^\r\n"']+)["']?\s*$/m);
	return match?.[1]?.replaceAll('\\n', ' ').replaceAll('\\r', ' ').replace(/[\r\n]+/g, ' ').trim() || null;
}

function getOfficialPage(href, byPath, aliases = new Map()) {
	try {
		const url = href.startsWith('/')
			? new URL(href, 'https://docs.frappe.io')
			: new URL(href);
		if (!['docs.frappe.io', 'docs.erpnext.com'].includes(url.hostname.toLowerCase())) return null;
		if (url.pathname.startsWith('/files/')) return null;
		const pathname = decodeURI(url.pathname).replace(/\/$/, '').replace(/\.md$/i, '');
		const section = pathname.split('/')[1];
		const page = byPath.get(pathname) || byPath.get(aliases.get(pathname));
		return { page, hash: url.hash, section: page?.section || section, pathname };
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

function isGenericPageLabel(label) {
	return /^مستندات رسمی(?:\s+.+)?$/.test(label.trim())
		|| /^مستندات$/.test(label.trim())
		|| /^صفحه(?:ٔ|‌ی|ی)? رسمی$/.test(label.trim())
		|| /^راهنمای «.*» در .+$/.test(label.trim());
}

function localizeImageAlt(token, terms, counters, mixedEntries, phraseTerms) {
	const match = token.match(/^!\[([^\]]*)\](\(.*\))$/);
	if (!match) return token;
	const alt = localizeDisplayLabel(match[1], terms, counters, mixedEntries, phraseTerms);
	if (alt !== match[1]) counters.localizedLabels++;
	return `![${alt}]${match[2]}`;
}

function rewriteLink(token, { currentPath, byPath, byTranslationPath, titles, linkLabels, terms, mixedEntries, phraseTerms, counters, reviewIssues }) {
	const match = token.match(/^(\[)([^\]]*)(\]\()(<[^>]+>|[^\s)]+)([^)]*)(\))$/);
	if (!match) return token;
	const [, open, originalLabel, close, wrappedHref, suffix, end] = match;
	const href = wrappedHref.replace(/^<|>$/g, '');
	let label = localizeDisplayLabel(originalLabel, terms, counters, mixedEntries, phraseTerms).replaceAll('\\n', ' ').replaceAll('\\r', ' ').trim();
	let nextHref = href;
	let targetPath = null;
	const official = getOfficialPage(href, byPath);
	const ownPageTitle = official?.page?.translation_path
		&& normalizeRepoPath(official.page.translation_path) === currentPath
		? titles.get(currentPath)
		: null;
	const isOwnPageAttribution = Boolean(official?.page?.translation_path
		&& normalizeRepoPath(official.page.translation_path) === currentPath);
	const isAttribution = ATTRIBUTION_LABEL.test(originalLabel) || isOwnPageAttribution;
	if (isOwnPageAttribution && isGenericPageLabel(originalLabel)) {
		const cleanSourceTitle = (official.page.source_title || '').replaceAll('\\n', ' ').replaceAll('\\r', ' ').replace(/\s*\|\s*(?:ERPNext|Frappe Framework|Frappe HR|Frappe Helpdesk|Insights|Frappe CRM|Frappe Builder|Frappe Learning|Frappe Drive) Documentation\s*$/i, '').trim();
		const translatedSourceTitle = cleanSourceTitle
			? localizeDisplayLabel(cleanSourceTitle, terms, null, mixedEntries, phraseTerms)
			: '';
		label = ownPageTitle && FA_LETTER.test(ownPageTitle)
			? ownPageTitle
			: (FA_LETTER.test(translatedSourceTitle) ? translatedSourceTitle : label);
	}

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
			const isGenericProductLabel = isGenericPageLabel(originalLabel);
			if (!FA_LETTER.test(label) || isGenericProductLabel) {
				const cleanSourceTitle = (page.source_title || '').replaceAll('\\n', ' ').replaceAll('\\r', ' ').replace(/[\r\n]+/g, ' ').replace(/\s*\|\s*(?:ERPNext|Frappe Framework|Frappe HR|Frappe Helpdesk|Insights|Frappe CRM|Frappe Builder|Frappe Learning|Frappe Drive) Documentation\s*$/i, '').trim();
				const sourceTitle = cleanSourceTitle ? localizeDisplayLabel(cleanSourceTitle, terms, null, mixedEntries, phraseTerms) : '';
				label = FA_LETTER.test(sourceTitle)
					? sourceTitle
					: `راهنمای «${sourceTitle || cleanSourceTitle || label}» در ${productLinkLabel(page.section).replace(/^مستندات رسمی /, '')}`;
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
	if (official?.page && !official.page.translation_path && !isAttribution && linkLabels?.[official.pathname]) {
		label = linkLabels[official.pathname];
	}

	const rawTranslatedTitle = targetPath ? titles.get(targetPath) : null;
	const translatedTitle = rawTranslatedTitle
		? localizeDisplayLabel(rawTranslatedTitle, terms, null, mixedEntries, phraseTerms)
		: null;
	if (translatedTitle && !isAttribution) {
		if (!FA_LETTER.test(label) || /[A-Za-z]/.test(label) || label.trim() === (official?.page.source_title || '').trim() || isGenericPageLabel(originalLabel)) {
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
	uiTerms = {},
	linkLabels = {},
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
	const allTerms = { ...terms, ...uiTerms };
	const phraseTerms = Object.fromEntries(Object.entries(allTerms).filter(([english]) => english.includes(' ')));
	const bodyTerms = {
		...terms,
		...Object.fromEntries(Object.entries(uiTerms).filter(([english]) => english.includes(' '))),
	};
	const mixedEntries = buildMixedTermEntries(allTerms);
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
		result += replaceUiTerms(body.slice(lastIndex, index), bodyTerms, counters, mixedEntries);
		if (token.startsWith('```') || token.startsWith('`')) {
			result += token;
		} else if (token.startsWith('![')) {
			result += localizeImageAlt(token, allTerms, counters, mixedEntries, phraseTerms);
		} else if (token.startsWith('**')) {
			result += `**${localizeDisplayLabel(token.slice(2, -2), allTerms, counters, mixedEntries, phraseTerms)}**`;
		} else {
			result += rewriteLink(token, {
				currentPath,
				byPath,
				byTranslationPath,
				titles,
				linkLabels,
				terms: allTerms,
				mixedEntries,
				phraseTerms,
				counters,
				reviewIssues,
			});
		}
		lastIndex = index + token.length;
	}
	result += replaceUiTerms(body.slice(lastIndex), bodyTerms, counters, mixedEntries);
	return { markdown: prefix + result, counters, reviewIssues };
}

export { getPageTitle, normalizeRepoPath };
