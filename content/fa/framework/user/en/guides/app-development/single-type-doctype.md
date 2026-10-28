---
title: "DocType از نوع Single"
slug: "single-type-doctype"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/single-type-doctype"
source_id: "framework/user/en/guides/app-development/single-type-doctype"
source_version: "c5a05baabf88ffa482e151761d66ea459bd0dda795365101c2f132b07821b5ea"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/app-development/single-type-doctype)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

هر DocType یک جدول متناظر دارد. برای نمونه، DocType **مشتری** با جدول `tabCustomer` متناظر است.

DocTypeهای **Single** جدول جداگانه‌ای ندارند و فقط یک سند از هرکدام وجود دارد. این مفهوم به الگوی Singleton در Java شباهت دارد. DocTypeهای Single برای ذخیرهٔ تنظیماتی که در سطح کلی اعمال می‌شوند و نیز فرم‌های راهنما یا کمکی که سند مستقلی ندارند، اما در رابط کاربری فرم استفاده می‌شوند، مناسب‌اند.

داده‌های DocType از نوع Single در جدول `tabSingles` ذخیره می‌شوند (`doctype`، `field` و `value`).

#### نمونه‌ها

در Frappe، **System Settings** و **Customize Form** از نوع Single هستند.

برای توضیحات بیشتر، راهنمای [DocType تکی](../../basics/doctypes/single-doctype.md) را ببینید.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/guides/app-development/single-type-doctype). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
