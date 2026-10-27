---
title: "دستور بازکردن محصول (Disassembly Order)"
slug: "disassembly-order"
source_url: "https://docs.frappe.io/erpnext/disassembly-order"
source_id: "erpnext/disassembly-order"
source_version: "836a41fb86c7721efb1a0326c604e73fda5555666b639404b69c0c6820f1f1e7"
source_updated: "2026-02-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/disassembly-order)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

در ERPNext از **Disassembly Order** برای بازکردن کالای ساخته‌شده و بازگرداندن قطعات سالم آن به انبار استفاده می‌شود. هنگام افزودن قطعات به انبار، سیستم اجازه می‌دهد نرخ ارزش‌گذاری آن‌ها را تغییر دهید.

برای ایجاد Disassembly Order، Work Orderای را باز کنید که در وضعیت **Completed** یا **Closed** است. روی دکمهٔ ایجاد کلیک کنید و سپس **Disassembly Order** را انتخاب کنید.

![انتخاب Disassembly Order از Work Order](https://docs.frappe.io/files/work-order-disassembly-orderfe73b5.png)

پس از انتخاب دکمهٔ **Disassembly Order**، سیستم Stock Entryای با نوع **Disassemble** باز می‌کند.

![Stock Entry از نوع Disassemble](https://docs.frappe.io/files/stock-entry-disassembly-order.png)

- کاربر می‌تواند کالاهایی را که وضعیت مناسبی ندارند، دستی از فهرست حذف کند.
- سیستم به‌طور پیش‌فرض نرخ پایه را بر اساس تراکنش‌های گذشته دریافت می‌کند. در صورت نیاز، کاربر می‌تواند نرخ پایهٔ مواد خام را ویرایش کند.
