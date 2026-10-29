---
title: "فرم وب"
slug: "web-form"
source_url: "https://docs.frappe.io/framework/user/en/web-form"
source_id: "framework/user/en/web-form"
source_version: "8cc7da4a1cb2963b4e98c42b6c6b8b6db19f586cb7bccb7119bc4755b6f0cdda"
source_updated: "2026-06-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe راهی ساده برای ساخت فرم در وب‌سایت ارائه می‌دهد و برای راه‌اندازی آن به تنظیمات اندکی نیاز است. این فرم‌ها می‌توانند عمومی باشند تا هرکسی آن‌ها را تکمیل کند، نیازمند ورود به حساب کاربری باشند یا از طریق پیوندهای درخواست خصوصی در دسترس قرار گیرند.

![نمونهٔ فرم وب ثبت‌نام در همایش](https://docs.frappe.io/files/v-14-webform-conference-register.png)

## ساخت فرم وب

در نوار جست‌وجوی سراسری، عبارت فنی `new web form` را وارد کنید و کلید Enter را بزنید.

1. **عنوان** را وارد کنید.
2. DocTypeای را انتخاب کنید که رکورد در آن ساخته می‌شود.
3. در صورت تمایل، متن معرفی را اضافه کنید.
4. برای دریافت همهٔ فیلدهای DocType انتخاب‌شده، دکمهٔ **دریافت فیلدها** را بزنید؛ یا فیلدهای فرم وب را جداگانه انتخاب کنید.
5. فرم را **منتشر** کنید تا آمادهٔ استفاده شود.

![ساخت فرم وب](https://docs.frappe.io/files/v-14-webform.png)

![فیلدهای فرم وب](https://docs.frappe.io/files/v-14-webform-fields.png)

[سفارشی‌سازی فرم وب](https://docs.frappe.io/framework/user/en/web-form/customization)

[درخواست خصوصی فرم وب](../../portal-web-form/web-form-request.md)

## فرم‌های وب استاندارد

اگر گزینهٔ **استاندارد است** را فعال کنید، پوشه‌ای تازه در ماژول فرم وب ساخته می‌شود. در این پوشه دو فایل `.py` و `.js` قرار می‌گیرد که می‌توانید با آن‌ها فرم وب را پیکربندی کنید. این فایل‌ها باید همراه برنامهٔ سفارشی شما در سامانهٔ کنترل نسخه ثبت شوند. سپس می‌توانید برنامه را در هر سایتی نصب کنید تا فرم وب نیز در آن نصب شود.

> فیلد **استاندارد است** فقط در **حالت توسعه‌دهنده** نمایش داده می‌شود.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [فرم وب](https://docs.frappe.io/framework/user/en/web-form). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
