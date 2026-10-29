---
title: "وب‌هوک‌ها"
slug: "webhooks"
source_url: "https://docs.frappe.io/framework/user/en/guides/integration/webhooks"
source_id: "framework/user/en/guides/integration/webhooks"
source_version: "482682a72965b4bbaf63eb55161a78ec28fa8d167b6c43c57a74f575e56538c9"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

وب‌هوک‌ها «فراخوانی‌های HTTP تعریف‌شده به‌دست کاربر» هستند. می‌توانید برای یک DocType مشخص، وب‌هوکی بسازید تا در صورت نیاز، با رخدادهای معینی از سند و تحت شرط‌هایی مشخص فعال شود.

هنگام رخ‌دادن `doc_event`، سایت مبدأ درخواست HTTP را به نشانی‌ای می‌فرستد که برای وب‌هوک پیکربندی شده است. می‌توانید رخدادهای یک سایت را تنظیم کنید تا رفتاری را در سایت دیگری اجرا کنند.

## پیکربندی وب‌هوک

برای افزودن وب‌هوک، به مسیر زیر بروید:

> یکپارچه‌سازی‌ها ← وب‌هوک ← وب‌هوک

![فرم پیکربندی وب‌هوک](https://docs.frappe.io/files/webhook.png)

1. DocTypeای را انتخاب کنید که وب‌هوک برای آن فعال می‌شود؛ برای نمونه، `Quotation` (پیش‌فاکتور).
2. رویداد سندی را انتخاب کنید که وب‌هوک را فعال می‌کند؛ برای نمونه، `on_update`.
3. در صورت نیاز، شرط‌های دیگری برای سند تعیین کنید تا وب‌هوک فقط در وضعیت‌های مشخص اجرا شود.
4. نشانی معتبری وارد کنید تا داده‌های وب‌هوک به آن فرستاده شوند.
5. روش درخواست را انتخاب کنید. روش پیش‌فرض `POST` است.
6. در صورت نیاز، سربرگ‌های HTTP را به درخواست اضافه کنید؛ برای نمونه، اگر لازم است کلید API بفرستید.

همچنین می‌توانید با برداشتن تیک گزینهٔ **فعال**، وب‌هوک را غیرفعال کنید. فقط وب‌هوک‌های فعال اجرا می‌شوند.

### ساختار داده

- اگر ساختار درخواستتان بر پایهٔ فرم است، فیلدهای سند را در جدول انتخاب کنید. نام فیلد به‌عنوان `key` به‌کار می‌رود.
- اگر ساختار درخواستتان بر پایهٔ JSON است، می‌توانید فیلدهای سند را با الگوی Jinja وارد کنید. حتماً فیلدها را درون علامت نقل‌قول دوتایی قرار دهید.

### امنیت وب‌هوک

برای افزودن امنیت به درخواست‌ها و اطمینان از اینکه فرستندهٔ وب‌هوک Frappe است، می‌توانید همراه درخواست یک «رمز وب‌هوک» تنظیم کنید. این رمز را عمومی نکنید.

اگر این گزینه فعال باشد، پیش از ارسال درخواست، سربرگ `X-Frappe-Webhook-Signature` به آن افزوده می‌شود. مقدار سربرگ با استفاده از رمز و به‌شکل هش HMAC-SHA256 از محتوای درخواست ساخته می‌شود و با Base64 کدگذاری می‌شود.

### نمونهٔ درخواست وب‌هوک

- **نوع سند (DocType):** `Quotation` (پیش‌فاکتور)
- **رویداد سند:** `on_update`
- **نشانی درخواست (URL):** `https://httpbin.org/post`
- **ساختار درخواست:** فرم با کدگذاری URL
- **سربرگ‌های وب‌هوک:**
  1. **کلید:** `Content-Type:`، **مقدار:** `application/x-www-form-urlencoded`
- **داده‌های وب‌هوک:**
  1. **نام فیلد:** `name`، **کلید:** `id`
  2. **نام فیلد:** `items`، **کلید:** `lineItems`

پیکربندی بالا درخواست JSON زیر را می‌سازد. این درخواست از سرور Frappe و برای `Quotation` در رخداد `on_update` به `https://httpbin.org/post` فرستاده می‌شود:

```json
{
 "args": {},
 "data": "{\"lineItems\": [{\"stock_qty\": 1.0, \"base_price_list_rate\": 1.0, \"image\": \"\", \"creation\": \"2017-09-14 13:41:58.373023\", \"base_amount\": 1.0, \"qty\": 1.0, \"margin_rate_or_amount\": 0.0, \"rate\": 1.0, \"owner\": \"Administrator\", \"stock_uom\": \"Unit\", \"base_net_amount\": 1.0, \"page_break\": 0, \"modified_by\": \"Administrator\", \"base_net_rate\": 1.0, \"discount_percentage\": 0.0, \"item_name\": \"I1\", \"amount\": 1.0, \"actual_qty\": 0.0, \"net_rate\": 1.0, \"conversion_factor\": 1.0, \"warehouse\": \"Finished Goods - R\", \"docstatus\": 0, \"prevdoc_docname\": null, \"uom\": \"Unit\", \"description\": \"I1\", \"parent\": \"QTN-00001\", \"brand\": null, \"gst_hsn_code\": null, \"base_rate\": 1.0, \"item_code\": \"I1\", \"projected_qty\": 0.0, \"margin_type\": \"\", \"doctype\": \"Quotation Item\", \"rate_with_margin\": 0.0, \"pricing_rule\": null, \"price_list_rate\": 1.0, \"name\": \"QUOD/00001\", \"idx\": 1, \"item_tax_rate\": \"{}\", \"item_group\": \"Products\", \"modified\": \"2017-09-14 17:09:51.239271\", \"parenttype\": \"Quotation\", \"customer_item_code\": null, \"net_amount\": 1.0, \"prevdoc_doctype\": null, \"parentfield\": \"items\"}], \"id\": \"QTN-00001\"}",
 "files": {},
 "form": {},
 "headers": {
 "Accept": "*/*",
 "Accept-Encoding": "gzip, deflate",
 "Connection": "close",
 "Content-Length": "1075",
 "Host": "httpbin.org",
 "User-Agent": "python-requests/2.18.1"
 },
 "json": {
 "id": "QTN-00001",
 "lineItems": [
 {
 "actual_qty": 0.0,
 "amount": 1.0,
 "base_amount": 1.0,
 "base_net_amount": 1.0,
 "base_net_rate": 1.0,
 "base_price_list_rate": 1.0,
 "base_rate": 1.0,
 "brand": null,
 "conversion_factor": 1.0,
 "creation": "2017-09-14 13:41:58.373023",
 "customer_item_code": null,
 "description": "I1",
 "discount_percentage": 0.0,
 "docstatus": 0,
 "doctype": "Quotation Item",
 "gst_hsn_code": null,
 "idx": 1,
 "image": "",
 "item_code": "I1",
 "item_group": "Products",
 "item_name": "I1",
 "item_tax_rate": "{}",
 "margin_rate_or_amount": 0.0,
 "margin_type": "",
 "modified": "2017-09-14 17:09:51.239271",
 "modified_by": "Administrator",
 "name": "QUOD/00001",
 "net_amount": 1.0,
 "net_rate": 1.0,
 "owner": "Administrator",
 "page_break": 0,
 "parent": "QTN-00001",
 "parentfield": "items",
 "parenttype": "Quotation",
 "prevdoc_docname": null,
 "prevdoc_doctype": null,
 "price_list_rate": 1.0,
 "pricing_rule": null,
 "projected_qty": 0.0,
 "qty": 1.0,
 "rate": 1.0,
 "rate_with_margin": 0.0,
 "stock_qty": 1.0,
 "stock_uom": "Unit",
 "uom": "Unit",
 "warehouse": "Finished Goods - R"
 }
 ]
 },
 "url": "https://httpbin.org/post"
}
```

### نمونهٔ بدنهٔ درخواست JSON

برای وب‌هوکی که به یک تراکنش فروش مربوط است، می‌توانید دادهٔ JSON را به‌شکل زیر بسازید:

```json
{
 "id": "{{ doc.name }}",
 "total": "{{ doc.total }} EUR",
 "total_net_weight": "{{ doc.total_net_weight }} kg",
 "customer": "{{ doc.customer }}",
 "created": "{{ doc.creation }}",
 "items": {{ doc["items"] | tojson }}
}
```

### گزارش درخواست‌های وب‌هوک

برای هر درخواست موفق، گزارشی با همهٔ جزئیات مرتبط ساخته می‌شود.

![گزارش درخواست وب‌هوک](https://docs.frappe.io/files/webhook-request-log.png)

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [وب‌هوک‌ها](https://docs.frappe.io/framework/user/en/guides/integration/webhooks). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
