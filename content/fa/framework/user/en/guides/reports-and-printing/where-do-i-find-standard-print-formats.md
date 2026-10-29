---
title: "قالب‌های چاپ استاندارد را از کجا پیدا کنم؟"
slug: "where-do-i-find-standard-print-formats"
source_url: "https://docs.frappe.io/framework/user/en/guides/reports-and-printing/where-do-i-find-standard-print-formats"
source_id: "framework/user/en/guides/reports-and-printing/where-do-i-find-standard-print-formats"
source_version: "b21618cff093cdcb60f0b660fc04689a4c3bb9222f38d0e79b29c8a3f00b8937"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

قالب‌های چاپ استاندارد به‌طور خودکار از چیدمان DocType ساخته می‌شوند. می‌توانید این قالب‌ها را سفارشی کنید.

## 1. سفارشی‌سازی قالب چاپ استاندارد

به مسیر **تنظیمات ← سفارشی‌سازی ← سفارشی‌سازی نمای فرم** بروید. در این بخش می‌توانید:

1. با کشیدن و رهاکردن، ترتیب فیلدها را تغییر دهید.
2. فیلدهایی از نوع **HTML** اضافه کنید و محتوای HTML را در **گزینه‌ها** بنویسید تا عناصر ثابت به قالب افزوده شوند.
3. با فعال‌کردن ویژگی **پنهان در چاپ**، فیلدها را از چاپ پنهان کنید.

## 2. ساخت چیدمان تازه بر پایهٔ قالب چاپ

برای قالب‌های چاپ استاندارد، قالب آماده‌ای تولید نمی‌شود؛ بنابراین باید قالب‌های تازه را از ابتدا با زبان قالب‌سازی Jinja بسازید. به مسیر **تنظیمات ← چاپ و برندسازی ← قالب چاپ** بروید.

1. راهنمای زندهٔ ERPNext را دربارهٔ [قالب چاپ](https://docs.frappe.io/erpnext/print-format) ببینید.
2. برای چیدمان قالب چاپ می‌توانید از [چارچوب CSS بوت‌استرپ](https://getbootstrap.com) استفاده کنید.

**نکته:** برای ساخت قالب چاپ می‌توانید ماکروهای [قالب استاندارد Frappe](https://github.com/frappe/frappe/blob/develop/frappe/templates/print_formats/standard_macros.html) را وارد کنید.

برای نمونه، افزودن سربرگ استاندارد:

```jinja
{%- from "templates/print_formats/standard_macros.html" import add_header -%}

{{ add_header() }}
```

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [قالب‌های چاپ استاندارد را از کجا پیدا کنم؟](https://docs.frappe.io/framework/user/en/guides/reports-and-printing/where-do-i-find-standard-print-formats). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
