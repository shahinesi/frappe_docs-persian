import path from 'node:path';

const MARKDOWN_TOKEN = /```[\s\S]*?```|~~~[\s\S]*?~~~|(?:^(?: {4}|\t)[^\n]*(?:\r?\n|$))+|`[^`\n]*`|<code\b[^>]*>[\s\S]*?<\/code\s*>|<pre\b[^>]*>[\s\S]*?<\/pre\s*>|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\)|\*\*(?![^*\n]*(?:\]\(|`))[^*\n]+\*\*/gim;
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
		const candidates = entries.filter(([candidate]) => candidate !== english
		&& candidate.length < english.length
			&& english.toLowerCase().includes(candidate.toLowerCase()));
		const partialTermSets = candidates.map((entry) => [entry]);
		if (candidates.length > 1) partialTermSets.push(candidates);
		for (const partialTermSet of partialTermSets) {
			const partial = replaceUiTerms(english, Object.fromEntries(partialTermSet));
			if (partial !== english && partial !== persian && FA_LETTER.test(partial) && /[A-Za-z]/.test(partial)) {
				mixedEntries.push([partial, persian]);
			}
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
		const leadingPersian = partial.match(/^([\u0600-\u06FF][\u0600-\u06FF\s‌َُِّٔ]*)\s+\S/u)?.[1]?.trimEnd();
		const replacement = leadingPersian && persian.startsWith(`${leadingPersian} `)
			? `${leadingPersian} ${persian.slice(leadingPersian.length).trimStart()}`
			: persian;
		const count = [...result.matchAll(pattern)].length;
		if (counters) counters.translatedTerms += count;
		result = result.replace(pattern, replacement);
	}
	const compiled = getCompiledTerms(terms);
	if (!compiled.pattern) return result;
	if (counters) counters.translatedTerms += [...result.matchAll(compiled.pattern)].length;
	result = result.replace(compiled.pattern, (match) => {
		const english = match.toLowerCase();
		const persian = compiled.lookup.get(english);
		return /^[A-Z0-9 _-]+$/.test(match) && english !== match ? match : persian || match;
	});
	return result;
}

function localizeDisplayLabel(text, terms, counters, mixedEntries = [], phraseTerms = terms) {
	const protectedTokens = [];
	const protectCode = (value) => value.replace(/`[^`\n]*`|<code\b[^>]*>[\s\S]*?<\/code\s*>/gi, (token) => {
		const marker = `\uE000${protectedTokens.length}\uE001`;
		protectedTokens.push(token);
		return marker;
	});
	const restoreCode = (value) => value.replace(/\uE000(\d+)\uE001/g, (marker, index) => protectedTokens[Number(index)] ?? marker);
	text = protectCode(text);
	const labelSeparators = [' > ', ' → ', ' / '];
	for (const separator of labelSeparators) {
		if (!text.includes(separator)) continue;
		const localized = text.split(separator)
			.map((part) => replaceKnownUiEntities(
				localizeDisplayLabel(part, terms, counters, mixedEntries, phraseTerms),
				terms,
				counters,
				['User'],
			))
			.join(separator);
		if (localized !== text) return restoreCode(localized);
	}
	const trimmedText = text.trim();
	if (/^\/[A-Za-z0-9._~!$&'()*+,;=:@%/-]+$/.test(trimmedText)
		|| /^[a-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)+$/.test(trimmedText)) return restoreCode(text);
	if (FA_LETTER.test(text) && !/[A-Za-z]/.test(text)) return restoreCode(text);
	const punctuated = trimmedText.match(/^([\s\S]*?)([:!?.,;])$/);
	if (punctuated?.[1] && terms[punctuated[1]]) {
		if (counters) counters.translatedTerms++;
		return restoreCode(`${text.slice(0, text.indexOf(trimmedText))}${terms[punctuated[1]]}${punctuated[2]}${text.slice(text.indexOf(trimmedText) + trimmedText.length)}`);
	}
	let result = replaceUiTerms(text, phraseTerms, counters, mixedEntries);
	const trimmed = text.trim();
	const exactTranslation = terms[trimmed];
	if (exactTranslation) result = result.replace(trimmed, exactTranslation);
	result = replaceKnownUiEntities(result, terms, counters);
	return restoreCode(result);
}

function localizeBareListLabels(text, terms, counters, mixedEntries = [], phraseTerms = terms) {
	return text.replace(/^(\s*(?:[-*+]|\d+[.)])\s+)([A-Z][A-Za-z0-9 &/'()-]*)(\s*)$/gm, (line, prefix, label, suffix) => {
		const translation = terms[label.trim()];
		if (!translation || !FA_LETTER.test(translation)) return line;
		if (counters) counters.localizedLabels++;
		return `${prefix}${translation}${suffix}`;
	});
}

function replaceKnownUiEntities(text, terms, counters, labels = ['Contact', 'Address', 'Warehouse', 'Campaign', 'Communication', 'Currency', 'Employee', 'Department', 'Branch', 'Payroll', 'Performance', 'Settings']) {
	const entries = labels.filter((label) => terms[label] && FA_LETTER.test(terms[label]));
	if (!entries.length) return text;
	const pattern = new RegExp(`(?<![\\p{L}\\p{N}])(${entries.map(escapeRegExp).join('|')})(های|ها|ای|ی)?(?![\\p{L}\\p{N}])`, 'gu');
	const lookup = new Map(entries.map((label) => [label, terms[label]]));
	return text.replace(pattern, (match, label, suffix, offset, source) => {
		const before = source.slice(0, offset);
		const after = source.slice(offset + match.length);
		if (before.match(/[A-Za-z]+\s*$/) || after.match(/^\s*[A-Za-z]+/)) return match;
		if (counters) counters.translatedTerms++;
		const persianSuffix = suffix === 'های' ? '‌های' : suffix === 'ها' ? '‌ها' : suffix ? 'ی' : '';
		return `${lookup.get(label)}${persianSuffix}`;
	});
}

function localizeStatusMentions(text, terms, counters) {
	const statuses = ['Draft', 'Submitted', 'Cancelled', 'Completed', 'Pending', 'Unreconciled', 'Reconciled', 'Settled']
		.filter((status) => terms[status] && FA_LETTER.test(terms[status]));
	if (!statuses.length) return text;
	const pattern = new RegExp(`(?<![A-Za-z0-9_])(${statuses.map(escapeRegExp).join('|')})(?![A-Za-z0-9_])`, 'g');
	return text.replace(pattern, (match) => {
		if (counters) counters.translatedTerms++;
		return terms[match];
	});
}

function localizeBreadcrumbs(text, terms, counters, mixedEntries = [], phraseTerms = terms) {
	return text.replace(/^(\s*>\s*)([^\r\n]+)$/gm, (line, prefix, breadcrumb) => {
		if (!breadcrumb.includes(' > ')) return line;
		const localized = breadcrumb.split(' > ').map((segment) => localizeDisplayLabel(segment, terms, counters, mixedEntries, phraseTerms)).join(' > ');
		return `${prefix}${localized}`;
	});
}

function localizePlainTableCells(text, terms, counters) {
	return text.replace(/^[ \t]*\|[^\r\n]*\|[ \t]*$/gm, (line) => {
		if (/`|<\/?(?:code|pre)\b|!\[|\[[^\]]+\]\(/i.test(line)) return line;
		const cells = line.split('|');
		if (cells.length < 4) return line;
		return cells.map((cell, index) => {
			if (index === 0 || index === cells.length - 1) return cell;
			const match = cell.match(/^(\s*)([\s\S]*?)(\s*)$/);
			const label = match?.[2] || '';
			if (!label || /^:?-{2,}:?$/.test(label) || /[*<>\[\]`]/.test(label)) return cell;
			const translation = terms[label];
			if (!translation || !FA_LETTER.test(translation)) return cell;
			if (counters) counters.translatedTerms++;
			return `${match[1]}${translation}${match[3]}`;
		}).join('|');
	});
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
		|| /^مستندات\s+(?:Frappe\s+)?(?:ERPNext|Framework|Helpdesk|Insights|CRM|HR|Wiki|Builder|Learning|Drive|Education)(?:\s+.*)?$/i.test(label.trim())
		|| /^مستندات$/.test(label.trim())
		|| /^صفحه(?:ٔ|‌ی|ی)? رسمی$/.test(label.trim())
		|| /^راهنمای «.*» در .+$/.test(label.trim())
		|| /^(?:این صفحه|این راهنما|این سند|اینجا|برای اطلاعات بیشتر|برای جزئیات بیشتر|بیشتر بخوانید|کلیک کنید|مشاهده کنید|راهنمای رسمی|مستندات رسمی(?: Frappe)?|مستندات)$/i.test(label.trim())
		|| /^(?:this page|this guide|this document|here|read more|learn more|click here|official documentation|documentation)$/i.test(label.trim());
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
	if (isOwnPageAttribution && (isGenericPageLabel(originalLabel) || ATTRIBUTION_LABEL.test(originalLabel))) {
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
			if (!isAttribution && (!FA_LETTER.test(label) || isGenericPageLabel(originalLabel))) {
				const slug = pathname.split('/').filter(Boolean).at(-1) || section || 'Frappe';
				const sourceTitle = localizeDisplayLabel(slug.replaceAll('-', ' ').replaceAll('_', ' '), terms, null, mixedEntries, phraseTerms);
				label = `راهنمای «${sourceTitle}» در ${productLinkLabel(section).replace(/^مستندات رسمی /, '')}`;
			}
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
		const plainText = localizePlainTableCells(body.slice(lastIndex, index), allTerms, counters);
		result += localizeBreadcrumbs(localizeBareListLabels(replaceKnownUiEntities(localizeStatusMentions(replaceUiTerms(plainText, bodyTerms, counters, mixedEntries), allTerms, counters), allTerms, counters), allTerms, counters, mixedEntries, phraseTerms), allTerms, counters, mixedEntries, phraseTerms);
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
	const trailingText = localizePlainTableCells(body.slice(lastIndex), allTerms, counters);
	result += localizeBreadcrumbs(localizeBareListLabels(replaceKnownUiEntities(localizeStatusMentions(replaceUiTerms(trailingText, bodyTerms, counters, mixedEntries), allTerms, counters), allTerms, counters), allTerms, counters, mixedEntries, phraseTerms), allTerms, counters, mixedEntries, phraseTerms);
	result = result.replace(/\*\*([^*\r\n]+)\*\*\s+\(([^()\r\n]+)\)/gu, (match, label, sourceLabel) => {
		if (!/[A-Za-z]/.test(sourceLabel)) return match;
		if (sourceLabel.includes('`') || /<code\b/i.test(sourceLabel)) return match;
		const localized = localizeDisplayLabel(sourceLabel, allTerms, null, mixedEntries, phraseTerms).trim();
		if (localized === sourceLabel) return match;
		return localized === label.trim() ? `**${label}**` : `**${label}** (${localized})`;
	});
	result = result.replace(/\*\*([^*\r\n]+)\*\*\s+\(\s*\1\s*\)/gu, '**$1**');
	return { markdown: prefix + result, counters, reviewIssues };
}

export { getPageTitle, normalizeRepoPath };
