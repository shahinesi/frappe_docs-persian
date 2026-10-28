import assert from 'node:assert/strict';
import test from 'node:test';

import { prepareMarkdownLinks } from './wiki-link-localization.mjs';

const manifest = {
	pages: [
		{
			url: 'https://docs.frappe.io/hr/branch',
			section: 'hr',
			source_title: 'Branch',
			translation_path: 'content/fa/hr/branch.md',
		},
		{
			url: 'https://docs.frappe.io/hr/employee',
			section: 'hr',
			source_title: 'Employee',
			translation_path: null,
		},
	],
};

test('resolves translated source URLs to their local Markdown page and title', () => {
	const result = prepareMarkdownLinks('[Branch](https://docs.frappe.io/hr/branch#history)', {
		currentPath: 'content/fa/hr/employee-attendance-tool.md',
		manifest,
		titles: new Map([['content/fa/hr/branch.md', 'شعبه']]),
		terms: {},
	});
	assert.equal(result.markdown, '[شعبه](branch.md#history)');
	assert.equal(result.counters.localizedUrls, 1);
});

test('replaces a generic product label with the translated title of its destination', () => {
	const result = prepareMarkdownLinks('[مستندات رسمی Frappe HR](https://docs.frappe.io/hr/branch)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, '[شاخه](branch.md)');
});

test('resolves canonical aliases outside the main product section list', () => {
	const result = prepareMarkdownLinks('[مستندات رسمی Frappe HR](https://docs.frappe.io/education)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		aliases: new Map([['/education', '/hr/branch']]),
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, '[شاخه](branch.md)');
});

test('treats translated labels containing the word source as normal page links', () => {
	const leadSource = {
		pages: [{
			url: 'https://docs.frappe.io/erpnext/lead_source',
			section: 'erpnext',
			source_title: 'Lead Source',
			translation_path: null,
		}],
	};
	const result = prepareMarkdownLinks('[منبع سرنخ](/erpnext/lead-source)', {
		currentPath: 'content/fa/erpnext/crm.md',
		manifest: leadSource,
		aliases: new Map([['/erpnext/lead-source', '/erpnext/lead_source']]),
		terms: {},
	});
	assert.equal(result.markdown, '[منبع سرنخ](https://docs.frappe.io/erpnext/lead_source)');
	assert.equal(result.counters.changedUrls, 1);
	assert.equal(result.reviewIssues.length, 0);
});

test('reports an official URL that is absent from the manifest for repair', () => {
	const result = prepareMarkdownLinks('[P&L](https://docs.frappe.io/erpnext/profit-and-loss-statement)', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: {},
	});
	assert.equal(result.reviewIssues[0]?.kind, 'official-page-not-in-manifest');
});

test('keeps source attribution external while translating known UI terms', () => {
	const sourceUrl = 'https://docs.frappe.io/hr/employee';
	const result = prepareMarkdownLinks(
		`Employee; \`Employee\`; [منبع رسمی](${sourceUrl})`,
		{
			currentPath: 'content/fa/hr/example.md',
			manifest,
			titles: new Map(),
			terms: { Employee: 'کارمند' },
		},
	);
	assert.equal(result.markdown, `کارمند; \`Employee\`; [منبع رسمی](${sourceUrl})`);
});

test('uses a Persian product label when the target page is not translated yet', () => {
	const result = prepareMarkdownLinks('[Employee](https://docs.frappe.io/hr/employee)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map(),
		terms: {},
	});
	assert.equal(result.markdown, '[راهنمای «Employee» در Frappe HR](https://docs.frappe.io/hr/employee)');
});

test('uses the translated source title for an untranslated destination when available', () => {
	const result = prepareMarkdownLinks('[مستندات رسمی Frappe HR](https://docs.frappe.io/hr/employee)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map(),
		terms: { Employee: 'کارمند' },
	});
	assert.equal(result.markdown, '[کارمند](https://docs.frappe.io/hr/employee)');
});

test('repairs partial product translations using the full locale term', () => {
	const result = prepareMarkdownLinks('**مشتری Group**', {
		currentPath: 'content/fa/erpnext/customer-group.md',
		manifest,
		titles: new Map(),
		terms: { Customer: 'مشتری', 'Customer Group': 'گروه مشتریان' },
	});
	assert.equal(result.markdown, '**گروه مشتریان**');
});

test('matches translated composite terms without consuming an English plural suffix', () => {
	const result = prepareMarkdownLinks('**All مشتری Groups**', {
		currentPath: 'content/fa/erpnext/customer-group.md',
		manifest,
		titles: new Map(),
		terms: {
			Customer: 'مشتری',
			'Customer Group': 'گروه مشتریان',
			'All Customer Groups': 'همه گروه‌های مشتری',
		},
	});
	assert.equal(result.markdown, '**همه گروه‌های مشتری**');
});

test('does not match a mixed Persian term at the start of a longer Persian word', () => {
	const result = prepareMarkdownLinks('PDF نامه', {
		currentPath: 'content/fa/hr/appointment-letter.md',
		manifest: { pages: [] },
		terms: { Name: 'نام', Letter: 'نامه', 'PDF Name': 'نام PDF' },
	});
	assert.equal(result.markdown, 'PDF نامه');
});

test('applies longer UI terms after repairing their translated subterms', () => {
	const result = prepareMarkdownLinks('**مشتری Group Name**', {
		currentPath: 'content/fa/erpnext/customer-group.md',
		manifest,
		titles: new Map(),
		terms: {
			Customer: 'مشتری',
			'Customer Group': 'گروه مشتریان',
			'Customer Group Name': 'نام گروه مشتری',
		},
	});
	assert.equal(result.markdown, '**نام گروه مشتری**');
});

test('does not change text inside fenced code or inline code', () => {
	const input = 'Employee `Employee`\n\n```js\nconst Employee = "Employee"\n```';
	assert.equal(
		prepareMarkdownLinks(input, {
			currentPath: 'content/fa/hr/example.md',
			manifest: { pages: [] },
			titles: new Map(),
			terms: { Employee: 'کارمند' },
		}).markdown,
		'کارمند `Employee`\n\n```js\nconst Employee = "Employee"\n```',
	);
});

test('translates single-word locale terms in visible labels without changing sample names', () => {
	const result = prepareMarkdownLinks('**Employee**; Nova Electronics Trading uses **Nova Commercial Customers**.', {
		currentPath: 'content/fa/hr/example.md',
		manifest: { pages: [] },
		terms: {},
		uiTerms: { Employee: 'کارمند', Customers: 'مشتریان' },
	});
	assert.equal(result.markdown, '**کارمند**; Nova Electronics Trading uses **Nova Commercial Customers**.');
});

test('localizes a linked label nested inside bold markup', () => {
	const result = prepareMarkdownLinks('**[Branch](https://docs.frappe.io/hr/branch)**', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, '**[شاخه](branch.md)**');
});
