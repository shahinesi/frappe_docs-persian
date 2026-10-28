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
