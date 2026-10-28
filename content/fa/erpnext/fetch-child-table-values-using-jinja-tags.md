---
title: "دریافت مقدارهای جدول فرزند با برچسب‌های Jinja"
slug: "fetch-child-table-values-using-jinja-tags"
source_url: "https://docs.frappe.io/erpnext/fetch-child-table-values-using-jinja-tags"
source_id: "erpnext/fetch-child-table-values-using-jinja-tags"
source_version: "b8bfff49d0a3713557ddba3f1f9b03044a434ca7bc31fd4dc4057b4c3a0cbdc2"
source_updated: "2026-03-04"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [دریافت مقدارهای جدول فرزند با برچسب‌های Jinja](https://docs.frappe.io/erpnext/fetch-child-table-values-using-jinja-tags)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

در ERPNext می‌توانید با قالب‌بندی Jinja به هر فیلدی از هر DocType ارجاع دهید. برای نمونه، در یک قالب چاپ با `{{doc.field_name}}` به فیلد دسترسی پیدا می‌کنید؛ در این عبارت، `doc` متغیر سند جاری است.

اما این روش به‌تنهایی برای دسترسی به جدول‌های فرزندِ یک DocType کافی نیست. در این راهنما، روش پیمایش و نمایش همهٔ ردیف‌های یک جدول فرزند را می‌بینید.

## پیش‌نیازها

ابتدا نام متغیر فیلدِ جدول فرزند را در DocType مربوط پیدا کنید. این نام را می‌توانید در بخش **سفارشی‌سازی فرم** مربوط به آن DocType ببینید؛ تصویر زیر محل آن را نشان می‌دهد.

![یافتن نام فیلد جدول فرزند در سفارشی‌سازی فرم](https://docs.frappe.io/files/f7Xxz1S.png)

همچنین برای فیلدهای جدول فرزند که می‌خواهید به آن‌ها ارجاع دهید، به نام متغیر هر فیلد نیاز دارید. این نام‌ها را در بخش **سفارشی‌سازی فرم** مربوط به خود جدول فرزند پیدا کنید.

![فیلدهای جدول فرزند در سفارشی‌سازی فرم](https://docs.frappe.io/files/tzloEh2.png)

![نمای سفارشی‌سازی فرم](https://docs.frappe.io/files/wPB82f0.png)

![نمای فیلدهای جدول فرزند](https://docs.frappe.io/files/AV0308f.png)

![نمونهٔ فیلدهای جدول](https://docs.frappe.io/files/CW0oEUo.png)

## روش 1: نمایش ردیف‌های جدول فرزند در فهرست نامرتب

در نمونهٔ زیر، `items` نام متغیر جدول فرزند در سند جاری است:

```jinja
{% for row in doc.items %}

* کد کالا: {{ row.get_formatted("item_code", doc) }}

تعداد: {{ row.get_formatted("qty", doc) }}

نرخ: {{ row.get_formatted("rate", doc) }}

مبلغ: {{ row.get_formatted("amount", doc) }}

{% endfor %}
```

خروجی این قالب در نسخهٔ چاپی به شکل زیر خواهد بود:

![خروجی فهرست ردیف‌های جدول فرزند](https://docs.frappe.io/files/lgLjE7u.png)

## روش 2: نمایش ردیف‌های جدول فرزند در جدول

می‌توانید فیلدهای هر ردیف را در ستون‌های یک جدول قرار دهید:

| کد کالا | تعداد | نرخ | مبلغ |
| --- | --- | --- | --- |
| {{کالا.کالا_code }} | {{کالا.مقدار}} | {{کالا.نرخ}} | {{کالا.مبلغ}} |

خروجی این قالب در نسخهٔ چاپی به شکل زیر خواهد بود:

![خروجی جدولی ردیف‌های جدول فرزند](https://docs.frappe.io/files/GS00WlC.png)

از این قالب به‌عنوان الگو استفاده کنید. برای دریافت فیلدهای دیگر جدول فرزند نیز می‌توانید قالب Jinja را به همین شکل گسترش دهید.
