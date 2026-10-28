---
title: "خطای موجودی منفی در Delivery Note"
slug: "delivery-note-stock-error"
source_url: "https://docs.frappe.io/erpnext/delivery-note-stock-error"
source_id: "erpnext/delivery-note-stock-error"
source_version: "1a7a73ac79b06bdbd3583a3e939880a80c8657e4e350c4b670e502d1cd22d63b"
source_updated: "2026-02-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/delivery-note-stock-error)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.

**پرسش:** هنگام ثبت نهایی یادداشت تحویل پیامی دریافت می‌کنم که موجودی کالا کافی نیست، درحالی‌که آن کالا در انبار موجود است. علت چیست؟

**پاسخ:** هنگام ثبت نهایی یادداشت تحویل، سطح موجودی بر اساس تاریخ و ساعت ثبت همان سند بررسی می‌شود. ممکن است اکنون کالا در انبار موجود باشد، اما اگر یادداشت تحویل را با تاریخ گذشته ایجاد کرده‌اید و کالا در آن تاریخ و ساعت در انبار موجود نبوده است، احتمالاً با خطای موجودی منفی روبه‌رو می‌شوید. برای تأیید، گزارش دفتر موجودی را بررسی کنید.

اگر چنین است، تاریخ و ساعت ثبت یادداشت تحویل را ویرایش کنید و مطمئن شوید پس از تاریخ و ساعت ثبت سند دریافت آن کالا باشد.
