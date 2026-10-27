---
title: "وضعیت سند (Docstatus)"
slug: "وضعیت-سند"
source_url: "https://docs.frappe.io/framework/doctypes/docstatus"
source_id: "framework/doctypes/docstatus"
source_version: "8b16041175dcc1a841f2f6a58ead86971f9e7fa10670fe223a2307fb6eadc831"
source_updated: "2026-07-05"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/doctypes/docstatus)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

Frappe از مفهوم «وضعیت سند» (`Docstatus`) برای پیگیری وضعیت تراکنش‌ها استفاده می‌کند. مقدار `docstatus` همیشه یکی از این سه مقدار است:

1. پیش‌نویس (`Draft`، مقدار: 0)
2. ثبت‌شده (`Submitted`، مقدار: 1)
3. لغوشده (`Cancelled`، مقدار: 2)

سندهایی که _قابل‌ثبت نیستند_ همیشه در وضعیت پیش‌نویس می‌مانند. سندهای _قابل‌ثبت_ می‌توانند از پیش‌نویس به وضعیت ثبت‌شده و سپس به وضعیت لغوشده بروند.

سندهای ثبت‌شده و لغوشده را نمی‌توان ویرایش کرد؛ یک استثنا وجود دارد: می‌توان ویرایش بعضی فیلدها را به‌طور صریح مجاز کرد، حتی وقتی سند در وضعیت ثبت‌شده است.

در کد سمت کارساز می‌توان از کلاس کمکی `DocStatus` به این شکل استفاده کرد:

```py
import frappe
from frappe.model.docstatus import DocStatus

draft_invoice_names = frappe.get_list(
 "Sales Invoice",
 filters={"docstatus": DocStatus.draft()},
 pluck="name"
)

invoice_doc = frappe.get_doc("Sales Invoice", draft_invoice_names[0])
invoice_doc.docstatus == DocStatus.draft() # -> True
invoice_doc.docstatus.is_draft() # -> True
invoice_doc.docstatus.is_submitted() # -> False
invoice_doc.docstatus.is_cancelled() # -> False

invoice_doc.submit()
invoice_doc.docstatus == DocStatus.submitted() # -> True
invoice_doc.docstatus.is_draft() # -> False
invoice_doc.docstatus.is_submitted() # -> True
invoice_doc.docstatus.is_cancelled() # -> False

invoice_doc.cancel()
invoice_doc.docstatus == DocStatus.cancelled() # -> True
invoice_doc.docstatus.is_draft() # -> False
invoice_doc.docstatus.is_submitted() # -> False
invoice_doc.docstatus.is_cancelled() # -> True
```

وضعیت سند (`docstatus`) در جدول پایگاه دادهٔ هر `DocType` به‌صورت عدد صحیح ذخیره می‌شود.
