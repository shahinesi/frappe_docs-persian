---
title: "اسکریپت‌های سمت کاربر"
slug: "client-scripts"
source_url: "https://docs.frappe.io/erpnext/client-scripts"
source_id: "erpnext/client-scripts"
source_version: "3519dee97f33a4fa6c73dcc3d93d458a76b889b1ea8bbad867ddbc0bd401aba6"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/client-scripts)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر صفحهٔ منبع بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

**Client Script** قطعه‌کد کوچکی است که در مرورگر اجرا می‌شود تا قابلیت‌های استاندارد ERPNext را گسترش دهد یا سفارشی کند.

برای دسترسی به آن بروید به:

**Build > Scripting > Client Script**

## ایجاد اسکریپت سفارشی

برای ایجاد Custom Script باید نقش **System Manager** داشته باشید:

1. به فهرست **Custom Script** بروید و روی **جدید** کلیک کنید.
2. صفحه‌ای باز می‌شود که در آن باید DocTypeای را که می‌خواهید برایش Custom Script بسازید وارد کنید.
3. اسکریپت سفارشی خود را بنویسید و مطمئن شوید فعال است.
4. ذخیره کنید.

## نکته‌ها

- Server Custom Script فقط برای Administrator در دسترس است.
- Client Custom Script با JavaScript و Server Custom Script با Python نوشته می‌شود.
- برای آزمایش، پس از به‌روزرسانی Custom Script به **Tools > Clear Cache** بروید و صفحه را تازه‌سازی کنید.

**منبع:** [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/client-scripts). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصویر اصلی در این مخزن بازنشر نشده است.
