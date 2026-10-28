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

test('resolves any official documentation label from its destination URL', () => {
	const result = prepareMarkdownLinks('[مستندات رسمی Frappe Helpdesk](https://docs.frappe.io/hr/branch)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, '[شاخه](branch.md)');
});

test('uses the translated page title for a generic self-source attribution link', () => {
	const sourceUrl = 'https://docs.frappe.io/hr/branch';
	const result = prepareMarkdownLinks(`منبع: [مستندات رسمی Frappe HR](${sourceUrl})`, {
		currentPath: 'content/fa/hr/branch.md',
		manifest: { pages: [{ ...manifest.pages[0], url: sourceUrl }] },
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, `منبع: [شاخه](${sourceUrl})`);
	assert.equal(prepareMarkdownLinks(result.markdown, {
		currentPath: 'content/fa/hr/branch.md',
		manifest: { pages: [{ ...manifest.pages[0], url: sourceUrl }] },
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	}).markdown, result.markdown);
});

test('uses the translated page title for a generic source-view attribution link', () => {
	const sourceUrl = 'https://docs.frappe.io/hr/branch';
	const result = prepareMarkdownLinks(`منبع: [مشاهدهٔ منبع اصلی](${sourceUrl})`, {
		currentPath: 'content/fa/hr/branch.md',
		manifest: { pages: [{ ...manifest.pages[0], url: sourceUrl }] },
		titles: new Map([['content/fa/hr/branch.md', 'شاخه']]),
		terms: {},
	});
	assert.equal(result.markdown, `منبع: [شاخه](${sourceUrl})`);
});

test('keeps an untranslated frontmatter title self-source link external and idempotent', () => {
	const sourceUrl = 'https://docs.frappe.io/erpnext/batch-split';
	const localPath = 'content/fa/erpnext/batch-split.md';
	const input = `منبع: [مستندات رسمی ERPNext](${sourceUrl})`;
	const options = {
		currentPath: localPath,
		manifest: { pages: [{ url: sourceUrl, section: 'erpnext', source_title: 'Batch Split', translation_path: localPath }] },
		titles: new Map(),
		terms: { 'Batch Split': 'تقسیم دسته' },
	};
	const first = prepareMarkdownLinks(input, options);
	assert.equal(first.markdown, `منبع: [تقسیم دسته](${sourceUrl})`);
	assert.equal(prepareMarkdownLinks(first.markdown, options).markdown, first.markdown);
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

test('maps legacy docs.erpnext.com URLs through their verified redirect to a translated target', () => {
	const source = {
		pages: [{
			url: 'https://docs.frappe.io/erpnext/chart-of-accounts',
			section: 'erpnext',
			source_title: 'Chart of Accounts',
			translation_path: 'content/fa/erpnext/chart-of-accounts.md',
		}],
	};
	const result = prepareMarkdownLinks('[درخت حساب‌ها](https://docs.erpnext.com/docs/user/manual/en/chart-of-accounts)', {
		currentPath: 'content/fa/hr/expense-claim.md',
		manifest: source,
		aliases: new Map([['/docs/user/manual/en/chart-of-accounts', '/erpnext/chart-of-accounts']]),
		titles: new Map([['content/fa/erpnext/chart-of-accounts.md', 'درخت حساب‌ها']]),
		terms: {},
	});
	assert.equal(result.markdown, '[درخت حساب‌ها](../erpnext/chart-of-accounts.md)');
	assert.equal(result.counters.localizedUrls, 1);
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

test('gives an unindexed official link a destination-derived Persian label', () => {
	const result = prepareMarkdownLinks('[مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/profit-and-loss-statement)', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: { 'Profit and Loss Statement': 'صورت سود و زیان' },
	});
	assert.equal(result.markdown, '[راهنمای «صورت سود و زیان» در ERPNext](https://docs.frappe.io/erpnext/profit-and-loss-statement)');
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

test('uses address-keyed Persian labels for official pages that are not translated yet', () => {
	const url = 'https://docs.frappe.io/erpnext/newsletter';
	const result = prepareMarkdownLinks('[راهنمای «Newsletter» در ERPNext](' + url + ')', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest: { pages: [{ url, section: 'erpnext', source_title: 'Newsletter', translation_path: null }] },
		titles: new Map(),
		terms: {},
		linkLabels: { '/erpnext/newsletter': 'خبرنامه' },
	});
	assert.equal(result.markdown, '[خبرنامه](' + url + ')');
});

test('replaces generic Persian and English link labels with the title keyed by destination', () => {
	const url = 'https://docs.frappe.io/erpnext/managing-multi-level-bom';
	const source = { pages: [{ url, section: 'erpnext', source_title: 'Managing Multi-level BOM', translation_path: null }] };
	for (const label of ['این صفحه', 'this page', 'مستندات رسمی ERPNext']) {
		const result = prepareMarkdownLinks(`[${label}](${url})`, {
			currentPath: 'content/fa/erpnext/example.md',
			manifest: source,
			titles: new Map(),
			terms: {},
			linkLabels: { '/erpnext/managing-multi-level-bom': 'مدیریت BOM چندسطحی' },
		});
		assert.equal(result.markdown, `[مدیریت BOM چندسطحی](${url})`);
	}
});

test('preserves an already-Persian destination title without duplicating glossary terms', () => {
	const url = 'https://docs.frappe.io/erpnext/custom-field';
	const result = prepareMarkdownLinks(`[این صفحه](${url})`, {
		currentPath: 'content/fa/erpnext/example.md',
		manifest: { pages: [{ url, section: 'erpnext', source_title: 'Custom Field', translation_path: 'content/fa/erpnext/custom-field.md' }] },
		titles: new Map([['content/fa/erpnext/custom-field.md', 'فیلد سفارشی']]),
		terms: { 'Custom Field': 'فیلد سفارشی (Custom Field)' },
	});
	assert.equal(result.markdown, '[فیلد سفارشی](custom-field.md)');
});

test('preserves routes and snake-case identifiers inside visible labels', () => {
	const result = prepareMarkdownLinks('**/help/my-tickets** and **assign_to**', {
		currentPath: 'content/fa/helpdesk/example.md',
		manifest,
		titles: new Map(),
		terms: { Ticket: 'تیکت', assign_to: 'assign به' },
	});
	assert.equal(result.markdown, '**/help/my-tickets** and **assign_to**');
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

test('repairs every partially localized form of a composite UI term in prose', () => {
	const result = prepareMarkdownLinks('پرداخت Terms و Payment مقررات را بررسی کنید.', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: {},
		uiTerms: { Payment: 'پرداخت', Terms: 'مقررات', 'Payment Terms': 'شرایط پرداخت' },
	});
	assert.equal(result.markdown, 'شرایط پرداخت و شرایط پرداخت را بررسی کنید.');
});

test('translates mixed Persian and acronym UI terms while preserving standalone identifiers', () => {
	const result = prepareMarkdownLinks('دسته ID را تعیین کنید؛ مقدار API را حفظ کنید.', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: {},
		uiTerms: { 'دسته ID': 'شناسهٔ دسته', API: 'رابط برنامه‌نویسی کاربردی' },
	});
	assert.equal(result.markdown, 'شناسهٔ دسته را تعیین کنید؛ مقدار API را حفظ کنید.');
});

test('removes a duplicated Persian UI label left beside its translated label', () => {
	const result = prepareMarkdownLinks('گزینهٔ **افزودن دارایی** (افزودن دارایی) را انتخاب کنید.', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: {},
	});
	assert.equal(result.markdown, 'گزینهٔ **افزودن دارایی** را انتخاب کنید.');
});

test('localizes source labels in parentheses after a Persian field label', () => {
	const result = prepareMarkdownLinks('**محل** (Location) و **عنوان** (Title)', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest,
		titles: new Map(),
		terms: {},
		uiTerms: { Location: 'محل', Title: 'عنوان' },
	});
	assert.equal(result.markdown, '**محل** و **عنوان**');
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

test('does not change text inside indented code blocks', () => {
	const input = '    const Employee = "Employee";\n    window.open(Employee);\n';
	const result = prepareMarkdownLinks(input, {
		currentPath: 'content/fa/helpdesk/example.md',
		manifest,
		titles: new Map(),
		terms: { Employee: 'کارمند' },
	});
	assert.equal(result.markdown, input);
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

test('translates standalone UI labels in Markdown lists without changing example names', () => {
	const result = prepareMarkdownLinks('- Employee\n- Department\n- Branch\n- Nova Electronics Trading', {
		currentPath: 'content/fa/hr/example.md',
		manifest: { pages: [] },
		terms: {},
		uiTerms: { Employee: 'کارمند', Department: 'دپارتمان', Branch: 'شعبه' },
	});
	assert.equal(result.markdown, '- کارمند\n- دپارتمان\n- شعبه\n- Nova Electronics Trading');
});

test('localizes attendance prerequisites and a mixed attendance tool heading', () => {
	const result = prepareMarkdownLinks('پیش‌نیازها:\n- Employee\n- Department\n- Branch\n\n2. ثبت حضور و غیاب با Employee Attendance', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map(),
		terms: {},
		uiTerms: {
			Employee: 'کارمند',
			Department: 'دپارتمان',
			Branch: 'شعبه',
			'Employee Attendance': 'حضور و غیاب کارکنان',
		},
	});
	assert.equal(result.markdown, 'پیش‌نیازها:\n- کارمند\n- دپارتمان\n- شعبه\n\n2. ثبت حضور و غیاب با حضور و غیاب کارکنان');
});

test('localizes UI labels in navigation breadcrumbs while preserving code identifiers', () => {
	const result = prepareMarkdownLinks('> صفحهٔ اصلی > Manufacturing > Tools > BOM Update Tool\n\n`Warehouse`', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest: { pages: [] },
		terms: {},
		uiTerms: { Manufacturing: 'تولید', Tools: 'ابزارها', 'BOM Update Tool': 'ابزار به‌روزرسانی BOM' },
	});
	assert.equal(result.markdown, '> صفحهٔ اصلی > تولید > ابزارها > ابزار به‌روزرسانی BOM\n\n`Warehouse`');
});

test('localizes known UI entities in prose but preserves code and compound English labels', () => {
	const result = prepareMarkdownLinks('این Contact اصلی و Address مرتبط را بررسی کنید. همه Contactهای مرتبط. از Warehouseای دیگر. S3 Backup Settings را باز کنید. `Contact`', {
		currentPath: 'content/fa/erpnext/example.md',
		manifest: { pages: [] },
		terms: {},
		uiTerms: { Contact: 'مخاطب', Address: 'نشانی', Warehouse: 'انبار', Settings: 'تنظیمات' },
	});
	assert.equal(result.markdown, 'این مخاطب اصلی و نشانی مرتبط را بررسی کنید. همه مخاطب‌های مرتبط. از انباری دیگر. S3 Backup Settings را باز کنید. `Contact`');
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

test('uses the translated destination title for mixed Persian and English link labels', () => {
	const result = prepareMarkdownLinks('[Finance and Accounts شعبه](https://docs.frappe.io/hr/branch)', {
		currentPath: 'content/fa/hr/example.md',
		manifest,
		titles: new Map([['content/fa/hr/branch.md', 'شعبه']]),
		terms: { Finance: 'مالی', Accounts: 'حساب‌ها' },
	});
	assert.equal(result.markdown, '[شعبه](branch.md)');
});
