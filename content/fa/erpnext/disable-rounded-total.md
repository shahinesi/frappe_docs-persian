---
title: "غیرفعال‌کردن Rounded Total"
slug: "disable-rounded-total"
source_url: "https://docs.frappe.io/erpnext/disable-rounded-total"
source_id: "erpnext/disable-rounded-total"
source_version: "7c00e8681f2ee21612682451e907a502291142b2527158b80c41cba4007e138a"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/disable-rounded-total)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

همهٔ تراکنش‌های فروش، مانند سفارش فروش و Sales Invoice، شامل **Rounded Total** هستند. این مقدار بر اساس Grand Total محاسبه می‌شود و در قالب‌های چاپ استاندارد نیز نمایش داده می‌شود.

> توجه: قابلیت Rounded Total فقط در تراکنش‌های **Sales** وجود دارد.

![پیش‌نمایش چاپ با Rounded Total](https://docs.frappe.io/files/customize-disable-rounded-total-2.png)

اگر می‌خواهید Rounded Total را از قالب‌های چاپ استاندارد همهٔ تراکنش‌های فروش پنهان کنید، مراحل زیر را انجام دهید.

#### گام 1: رفتن به Global Defaults

در Awesome Bar عبارت **Global Defaults** را جست‌وجو کنید.

#### گام 2: غیرفعال‌کردن Rounded Total

گزینهٔ **Disable Rounded Total** را فعال و ذخیره کنید.

![تنظیم Disable Rounded Total](https://docs.frappe.io/files/customize-disable-rounded-total.png)

برای مشاهدهٔ تغییر، حافظهٔ پنهان را پاک کنید و/یا حساب ERPNext را تازه‌سازی کنید. پس از آن، قالب‌های چاپ مقدار Rounded Total را نمایش نمی‌دهند.

> توجه: این تنظیم فقط بر قالب‌های چاپ استاندارد اثر می‌گذارد.
