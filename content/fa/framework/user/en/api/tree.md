---
title: "نمای درختی"
slug: "tree"
source_url: "https://docs.frappe.io/framework/user/en/api/tree"
source_id: "framework/user/en/api/tree"
source_version: "5bb689ad2e6246bf25892d194d862adc55f3f7ce41997ebade0e0c9834e24b24"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

نمای درختی برای همهٔ DocTypeهایی ساخته می‌شود که گزینهٔ **درختی است** برایشان فعال شده باشد.

![نمای درختی](/files/treeview.png)

## JavaScript استاندارد نمای درختی

برای سفارشی‌کردن نمای درختی، باید فایل `{doctype}_tree.js` را در پوشهٔ DocType داشته باشید. گزینه‌های قابل سفارشی‌سازی در ادامه آمده‌اند.

برای نمونه، اگر بخواهید DocType حساب را پیکربندی کنید، فایلی به نام `account_tree.js` با محتوای زیر بسازید:

```js
frappe.treeview_settings["Account"] = {
	breadcrumb: "حسابداری",
	title: "درخت حساب‌ها",

	filters: [
		{
			fieldname: "company",
			fieldtype: "Select",
			label: "شرکت",
			options: "شرکت 1\nشرکت 2",
			on_change: handle_company_change(),
		},
	],

	get_tree_nodes: "path.to.whitelisted_method.get_children",
	add_tree_node: "path.to.whitelisted_method.handle_add_account",

	fields: [
		{
			fieldtype: "Data",
			fieldname: "account_name",
			label: "نام حساب تازه",
			reqd: true,
		},
		{
			fieldtype: "Link",
			fieldname: "account_currency",
			label: "ارز",
			options: "Currency",
		},
		{
			fieldtype: "Check",
			fieldname: "is_group",
			label: "گروه است",
		},
	],

	ignore_fields: ["parent_account"],

	menu_items: [
		{
			label: "شرکت تازه",
			action: function () {
				frappe.new_doc("Company", true);
			},
			condition: "frappe.boot.user.can_create.indexOf('Company') !== -1",
		},
	],

	onload: function (treeview) {},

	post_render: function (treeview) {},

	onrender: function (node) {},

	on_get_node: function (nodes) {},

	extend_toolbar: true,

	toolbar: [
		{
			label: "افزودن فرزند",
			condition: function (node) {
				return node && node.is_group;
			},
			click: function (node) {
				frappe.treeview_settings["Account"].add_node(node);
			},
			btnClass: "hidden-xs",
		},
	],
};
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [نمای درختی](https://docs.frappe.io/framework/user/en/api/tree). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
