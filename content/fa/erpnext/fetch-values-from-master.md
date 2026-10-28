---
title: "دریافت مقدار از سند پیوندشده"
slug: "fetch-values-from-master"
source_url: "https://docs.frappe.io/erpnext/fetch-values-from-master"
source_id: "erpnext/fetch-values-from-master"
source_version: "000b9deb33cd7b0987d0bbedb6454ba86f87791752acf751e7510de4002bfeb9"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/fetch-values-from-master)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.

برای دریافت مقدار یکی از فیلدهای سند پیوندشده، هنگام انتخاب آن سند، از متد `add_fetch` استفاده کنید:

```javascript
add_fetch(link_fieldname, source_fieldname, target_fieldname)
```

پارامترها به‌ترتیب نام فیلد پیوند در سند جاری، نام فیلدی که مقدار از آن خوانده می‌شود و نام فیلد مقصد در سند جاری هستند.

### نمونه

فرض کنید یک فیلد سفارشی با عنوان **شناسهٔ مالیاتی** و نام فنی `vat_id` در DocTypeهای `Customer` و `Sales Invoice` ساخته‌اید. می‌خواهید هر بار که در یک فاکتور فروش مشتری‌ای را انتخاب می‌کنید، مقدار شناسهٔ مالیاتی او نیز در فاکتور فروش قرار بگیرد.

برای این کار، در اسکریپت کلاینت مربوط به `Sales Invoice` این خط را اضافه کنید:

```javascript
cur_frm.add_fetch('customer', 'vat_id', 'vat_id')
```

در این مثال، `customer` نام فیلد پیوند به `Customer` است؛ `vat_id` اول نام فیلدی در سند `Customer` است که مقدار از آن دریافت می‌شود و `vat_id` دوم نام فیلد مقصد در `Sales Invoice` است. نام‌های فنی داخل کد را با نام فیلدهای واقعی خودتان جایگزین کنید.
