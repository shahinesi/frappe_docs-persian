---
title: "عنوان سند (Document Title)"
slug: "document-title"
source_url: "https://docs.frappe.io/erpnext/document-title"
source_id: "erpnext/document-title"
source_version: "1397e5531088dbdf5f29636d8bc2cfb377bae7b9a50fab89bc0313c0a2326ce5"
source_updated: "2026-02-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/document-title)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

**می‌توانید عنوان سندها را بر اساس ویژگی‌هایشان سفارشی کنید تا در نمای فهرست، اطلاعات معناداری نمایش داده شود.**

برای نمونه، عنوان پیش‌فرض یک پیش‌فاکتور نام مشتری است؛ اما اگر با تعداد کمی مشتری کار می‌کنید و برای هرکدام تعداد زیادی پیش‌فاکتور می‌فرستید، ممکن است بخواهید عنوان را سفارشی کنید.

![عنوان سند](https://docs.frappe.io/files/document-title.png)

## تنظیم فیلدهای عنوان

از ERPNext نسخهٔ 6.0 به بعد، همهٔ تراکنش‌ها ویژگی **Title** دارند. اگر DocTypeای این ویژگی را ندارد، می‌توانید یک **Custom فیلد** به‌عنوان عنوان اضافه کنید و **Title فیلد** را از طریق **Customize Form** تنظیم کنید.

می‌توانید مقدار پیش‌فرض این ویژگی را با قالب‌بندی رشته به سبک Python در **Default** یا **Options** تعیین کنید.

1. برای ویرایش عنوان پیش‌فرض، **Customize Form** را باز کنید.
2. فرمی را انتخاب کنید که می‌خواهید فیلد Title آن را تغییر دهید.
3. **Title فیلد** فرم را ویرایش کنید.

## تعریف عنوان‌ها

برای تعریف عنوان، ویژگی‌های سند را داخل آکولاد `{}` قرار دهید. برای نمونه، اگر سندتان فیلد `customer_name` دارد، می‌توانید از آن به‌عنوان عنوان فرم استفاده کنید.

![تنظیم عنوان سند](https://docs.frappe.io/files/set-document-title.gif)

همچنین می‌توانید از طریق Customize Form یک فیلد مشخص را به‌عنوان **Title فیلد** تعیین کنید.

![Title فیلد در تنظیمات نما](https://docs.frappe.io/files/title-field-in-view-settings.png)

## عنوان ثابت یا قابل ویرایش

اگر عنوان به‌صورت پیش‌فرض ساخته شده باشد، کاربر می‌تواند با کلیک روی سربرگ سند آن را ویرایش کند.

![عنوان قابل ویرایش](https://docs.frappe.io/files/customize-document%20title.gif)

اگر عنوان ثابتی می‌خواهید، قاعده را در ویژگی **Options** تنظیم کنید. در این صورت هر بار که سند به‌روزرسانی شود، عنوان نیز به‌طور خودکار به‌روز می‌شود.
