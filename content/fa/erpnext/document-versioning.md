---
title: "نسخه‌بندی سند (Document Versioning)"
slug: "document-versioning"
source_url: "https://docs.frappe.io/erpnext/document-versioning"
source_id: "erpnext/document-versioning"
source_version: "f41b8804210b17866b9f7b7ede007fcf231759c9ffba6409f95b07bdd8ab8a36"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/document-versioning)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

**نسخه‌بندی سند در ERPNext قابلیتی است که تغییرات انجام‌شده در فرم یا سند را رهگیری می‌کند.**

این قابلیت هنگام حسابرسی کاربرد دارد؛ می‌توانید بررسی کنید چه تغییری در سند انجام شده، چه زمانی انجام شده و چه کسی مسئول آن بوده است.

![نسخه‌بندی سند](https://docs.frappe.io/files/using-document-versioning-1.png)

## فعال‌کردن نسخه‌بندی سند

فرض کنیم می‌خواهیم نسخه‌بندی را برای سفارش خرید فعال کنیم.

1. به فهرست سفارش خرید بروید.
2. از منوی کشویی، **Customize** را انتخاب کنید.
3. صفحهٔ [سفارشی‌سازی فرم (Customize Form)](customize-form.md) مربوط به سفارش خرید باز می‌شود.
4. در بخش Properties، گزینهٔ **Track Changes** را علامت بزنید.

![فعال‌کردن Document Versioning](https://docs.frappe.io/files/using-document-versioning-2.gif)

از این پس، نسخه‌بندی برای همهٔ سفارش خریدهایی که ویرایش می‌شوند فعال خواهد بود.

### گزارش نسخه‌ها

برای هر سندی که نسخه‌بندی آن فعال است، یک **Version Log** ساخته می‌شود. در این گزارش پیوندهایی به نسخه‌های مشخص سند وجود دارد.

با انتخاب این پیوندها، گزارشی از همهٔ فیلدها و تغییرات انجام‌شده در آن‌ها باز می‌شود.

![گزارش تغییرات نسخهٔ سند](https://docs.frappe.io/files/using-document-versioning-3.gif)
