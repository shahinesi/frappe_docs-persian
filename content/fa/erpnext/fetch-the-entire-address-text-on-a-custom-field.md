---
title: "نمایش متن کامل نشانی در یک فیلد سفارشی"
slug: "fetch-the-entire-address-text-on-a-custom-field"
source_url: "https://docs.frappe.io/erpnext/fetch-the-entire-address-text-on-a-custom-field"
source_id: "erpnext/fetch-the-entire-address-text-on-a-custom-field"
source_version: "bf468cd37c3e120c28045aadcef7d7f07237a8437b0cd0442b2927c17062d5bb"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/fetch-the-entire-address-text-on-a-custom-field)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها و پویانمایی در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

این راهنما با روشی سه‌مرحله‌ای نحوهٔ افزودن فیلد سفارشی برای نمایش نشانی کامل را در هر DocType توضیح می‌دهد.

## گام 1: سفارشی‌سازی ظاهری DocType موردنظر

ابتدا دو فیلد برای دریافت نشانی به DocType اضافه کنید:

- یک فیلد از نوع **پیوند** که به رکورد اصلی Address پیوند می‌دهد؛
- یک فیلد **فقط خواندنی** که متن کامل نشانی را نمایش می‌دهد.

نام متغیر فیلدهایی را که ایجاد می‌کنید یادداشت کنید؛ در گام بعد به آن‌ها نیاز دارید.

![افزودن فیلدهای سفارشی برای نشانی](https://docs.frappe.io/files/q90efZM.png)

برای آشنایی با ساخت فیلد سفارشی در DocType، راهنمای [فیلدهای سفارشی در ERPNext](custom-field.md) را ببینید.

پس از این گام، DocType انتخاب‌شده باید دو فیلد جدید داشته باشد؛ مانند نمونهٔ زیر:

![DocType با فیلد پیوند و فیلد فقط‌خواندنی](https://docs.frappe.io/files/SabQi7A.png)

## گام 2: افزودن اسکریپت کلاینت برای دریافت نشانی کامل از Address

در نوار جست‌وجو **اسکریپت کلاینت** را پیدا کنید و یک اسکریپت کلاینت جدید بسازید. DocTypeای را انتخاب کنید که قرار است نشانی در آن دریافت شود.

اسکریپت زیر را در بخش Script قرار دهید:

```javascript
frappe.ui.form.on("DocType Name", "address_link_field", function(frm, cdt, cdn) {
	if (frm.doc.address_link_field) {
		return frm.call({
			method: "frappe.contacts.doctype.address.address.get_address_display",
			args: {
				address_dict: frm.doc.address_link_field
			},
			callback: function(r) {
				if (r.message) {
					frm.set_value("full_address_field", r.message);
				}
			}
		});
	} else {
		frm.set_value("full_address_field", "");
	}
});
```

مقادیر نمونه را با تنظیمات خود جایگزین کنید:

- `DocType Name` را با نام DocTypeای که نشانی را در آن می‌خواهید جایگزین کنید؛ برای مثال `Sales Invoice` یا `Purchase Order`.
- `address_link_field` را با نام متغیر فیلد سفارشی Link که در گام 1 ساختید جایگزین کنید.
- `full_address_field` را با نام متغیر فیلد سفارشی فقط‌خواندنی جایگزین کنید.

> در نمونهٔ منبع، نام‌های داخل اسکریپت با شکل نام‌ها در توضیح متنی یکدست نیستند. هنگام جایگزینی، نام متغیرهای داخل اسکریپت را مبنا بگیرید و هر دو کاربرد آن‌ها را تغییر دهید.

پس از این تنظیم، اسکریپت کلاینت باید مانند نمونهٔ زیر باشد:

![نمونهٔ اسکریپت کلاینت برای دریافت نشانی](https://docs.frappe.io/files/VukPzs4.png)

## گام 3: ذخیره، فعال‌سازی و آزمایش اسکریپت کلاینت

پس از تنظیم اسکریپت کلاینت متناسب با نیازتان، آن را ذخیره کنید و با انتخاب گزینهٔ **فعال** فعال کنید. سپس به DocType موردنظر بروید و صفحه را تازه‌سازی کنید تا تغییرها اعمال شوند.

از این پس با انتخاب یک نشانی در فیلد Link سفارشی، متن کامل آن در فیلد سفارشی فقط‌خواندنی نمایش داده می‌شود.

![نمایش نشانی کامل پس از انتخاب Address](https://docs.frappe.io/files/W3kxhT2.gif)
