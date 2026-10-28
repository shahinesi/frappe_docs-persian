---
title: "دریافت اطلاعات از سندی دیگر در قالب چاپ"
slug: "getting-information-from-another-document-in-print-format"
source_url: "https://docs.frappe.io/framework/user/en/guides/reports-and-printing/getting-information-from-another-document-in-print-format"
source_id: "framework/user/en/guides/reports-and-printing/getting-information-from-another-document-in-print-format"
source_version: "c0d0a2341dcbec4d0ff6af85f0616b50104d7afcf9d559d86c9327d30ca1c519"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [دریافت اطلاعات از سندی دیگر در قالب چاپ](https://docs.frappe.io/framework/user/en/guides/reports-and-printing/getting-information-from-another-document-in-print-format)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

در قالب چاپ می‌توانید داده‌ها را از سند دیگری دریافت کنید. برای نمونه، اگر در فاکتور فروش فیلدی به نام `sales_order` داشته باشید، با `frappe.get_doc` می‌توانید جزئیات سفارش فروش را بگیرید:

```jinja
{% set sales_order_doc = frappe.get_doc("Sales Order", sales_order) %}

{{ sales_order_doc.customer }}
```

---

**منبع:** [دریافت اطلاعات از سندی دیگر در قالب چاپ](https://docs.frappe.io/framework/user/en/guides/reports-and-printing/getting-information-from-another-document-in-print-format). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
