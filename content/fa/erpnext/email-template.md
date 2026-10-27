---
title: "قالب ایمیل"
slug: "email-template"
source_url: "https://docs.frappe.io/erpnext/email-template"
source_id: "erpnext/email-template"
source_version: "757ddf5d646f022e512f164987427422d28c9cfe1253abb8b4cb84cd19d30b2d"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/email-template)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویر در این مخزن بازنشر نشده و پیوندش به فایل میزبان منبع اشاره می‌کند.

هر ایمیل با دیگری فرق دارد، اما می‌توان محتوای برخی ایمیل‌ها را استاندارد کرد. به این محتوای آماده **Email Template** یا پاسخ استاندارد می‌گویند.

برای دسترسی به فهرست Email Template، به مسیر زیر بروید:

> Home > Settings > Email > Email Template

## 1. ایجاد Email Template

1. فهرست Email Template را باز و **New** را انتخاب کنید.
2. نامی برای قالب وارد کنید.
3. **Subject** قالب را وارد کنید.
4. در **Response** متن استاندارد ایمیل را بنویسید؛ این متن بخشی از قالب خواهد بود.
5. سند را ذخیره کنید.

![نمونهٔ قالب ایمیل](https://docs.frappe.io/files/email-template-example.png)

**DocType Associated:** (اختیاری) DocTypeای که این قالب به آن مرتبط است.

### 1.1 استفاده از Email Template

می‌توانید از این قالب برای ایمیل‌هایی که از ERPNext می‌فرستید استفاده کنید. در بخش ایمیل سند، آن را در فیلد **CC, BCC & Email Template** انتخاب کنید. ERPNext بر اساس قالب انتخاب‌شده، موضوع و متن پاسخ را دریافت می‌کند.

از طریق [Customize Form](/erpnext/customize-form) می‌توانید برای هر نوع سند، یک Email Template پیش‌فرض تعیین کنید.

### 1.2 یافتن نام فیلدها

نام فیلدهایی که در قالب ایمیل می‌توانید به‌کار ببرید، همان فیلدهای سندی هستند که ایمیل را از آن می‌فرستید. برای دیدن فیلدهای هر سند، [Customize Form](/erpnext/customize-form) را باز و نوع سند موردنظر (برای نمونه Sales Order) را انتخاب کنید.

### 1.3 ساخت قالب با HTML

گزینهٔ **Use HTML** را فعال کنید تا به‌جای ویرایشگر متن از ویرایشگر کد استفاده شود. این گزینه کنترل دقیق‌تری بر متن ایمیل می‌دهد و استفاده از قابلیت‌هایی مانند حلقه‌ها در Jinja را آسان‌تر می‌کند.

### 1.4 قالب‌بندی

قالب‌ها با Jinja پردازش می‌شوند. برای آشنایی بیشتر با Jinja، [مستندات آن](https://jinja.palletsprojects.com/en/2.10.x/) را ببینید.

## 2. موضوعات مرتبط

- [Email Account](/erpnext/email-account)
- [Email Inbox](/erpnext/email-inbox)
