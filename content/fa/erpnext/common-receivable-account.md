---
title: "حساب دریافتنی مشترک"
slug: "common-receivable-account"
source_url: "https://docs.frappe.io/erpnext/common-receivable-account"
source_id: "erpnext/common-receivable-account"
source_version: "3e28228f4e407381dfe9167311676a241403eba6b4d5218a06df89615aea9511"
source_updated: "2026-07-31"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/common-receivable-account)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر صفحهٔ منبع بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

ERPNext معمولاً هر Customer را در حساب دریافتنی پیش‌فرض شرکت ثبت می‌کند و در عین حال Customer را به‌عنوان طرف حساب نگه می‌دارد. **حساب دریافتنی مشترک (Common Receivable Account)** به چند مشتری اجازه می‌دهد از یک حساب دفترکل دریافتنی مشترک استفاده کنند، بی‌آنکه ماندهٔ باز هر مشتری و صورتحساب‌هایش از هم تفکیک‌ناپذیر شود.

## پیکربندی حساب

1. Company یا Accounts Settings را باز کنید و حساب دریافتنی پیش‌فرض را بررسی کنید.
2. مطمئن شوید حساب، داراییِ غیرگروهی است و **Account Type** آن روی Receivable تنظیم شده است.
3. در جزئیات حسابداری Customer فقط زمانی حساب دریافتنی ویژهٔ شرکت را اضافه کنید که آن مشتری باید از پیش‌فرض شرکت استفاده نکند.
4. یک Sales Invoice آزمایشی بسازید و حساب **Debit To** آن را بررسی کنید.

فیلد **Debit To** در Sales Invoice حساب کنترلی دریافتنی را نشان می‌دهد که برای تراکنش آن مشتری استفاده می‌شود.

## تفکیک ماندهٔ مشتریان

ثبت General Ledger هم حساب دریافتنی و هم Customer را به‌عنوان طرف حساب دربر می‌گیرد. گزارش‌هایی مانند Accounts Receivable با استفاده از طرف حساب و ارجاع‌های سند، مانده‌ها را از هم جدا می‌کنند؛ حتی اگر همهٔ مشتریان در یک حساب دفترکل ثبت شوند.

| سطح | کاربرد |
| --- | --- |
| حساب دریافتنی | ماندهٔ کل کنترلی در Chart of Accounts |
| طرف حساب Customer | ماندهٔ یک مشتری مشخص |
| ارجاع سند | مبلغ باز یک صورتحساب یا بستانکاری |

## مشکلات رایج

**Customer در حساب دریافتنی نادرستی ثبت می‌شود**

ابتدا حساب ویژهٔ همان شرکت در Customer را بررسی کنید، سپس حساب دریافتنی پیش‌فرض شرکت را کنترل کنید.

**گزارش Accounts Receivable با حساب کنترلی مطابقت ندارد**

شرکت، تاریخ، ارز و حساب دریافتنی یکسانی را مقایسه کنید. Journal Entryهایی را بررسی کنید که طرف حساب یا ارجاع سند ندارند.

**حساب دریافتنی را نمی‌توان انتخاب کرد**

تأیید کنید حساب گروهی نباشد، به همان شرکت تعلق داشته باشد و نوع حساب درستی داشته باشد.

## موضوعات مرتبط

- [Chart of Accounts](https://docs.frappe.io/erpnext/chart-of-accounts)
- [پیش‌فرض‌های حسابداری شرکت](https://docs.frappe.io/erpnext/company-accounting-defaults)
- [Customer](https://docs.frappe.io/erpnext/customer)
- [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
- [حساب‌های دریافتنی](https://docs.frappe.io/erpnext/accounts-receivables)
- [General Ledger](https://docs.frappe.io/erpnext/general-ledger)

**منبع:** [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/common-receivable-account). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصویر اصلی در این مخزن بازنشر نشده است.
