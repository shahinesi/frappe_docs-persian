---
title: "راه‌اندازی ورود با fairlogin"
slug: "fairlogin-integration"
source_url: "https://docs.frappe.io/erpnext/fairlogin-integration"
source_id: "erpnext/fairlogin-integration"
source_version: "3e5c68f1f010f3fe51833672c87a2aeb324d7d8582e00d726db813e881b72dd2"
source_updated: "2026-02-26"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [راه‌اندازی ورود با fairlogin](https://docs.frappe.io/erpnext/fairlogin-integration)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

fairlogin سرویس‌دهندهٔ OAuth شرکت fairkom.eu است که الزامات GDPR را در نظر می‌گیرد.

برای پیکربندی fairlogin به‌عنوان سرویس‌دهندهٔ OAuth، به مسیر زیر بروید:

> خانه > یکپارچه‌سازی‌ها > کلید ورود اجتماعی

## راه‌اندازی Keycloak

fairlogin بر پایهٔ Keycloak ساخته شده است؛ بنابراین پارامترهای آن ممکن است برای تنظیمات سفارشی OAuth مبتنی بر Keycloak نیز مناسب باشند.

در آنجا یک Client جدید بسازید، پروتکل Client را روی OpenID قرار دهید و نشانی نمونهٔ ERPNext خود را به‌عنوان نشانی‌های Root، Redirect و Base وارد کنید.

افزودن سرویس ERPNext شما به‌عنوان Client را [fairkom به‌صورت یک سرویس ارائه می‌کند](https://erp.fairkom.net/cloud/fairlogin-client).

![تنظیمات Keycloak برای ERPNext](https://docs.frappe.io/files/fairloginKeycloakERPnext.png)

## پیکربندی fairlogin

برای فعال‌کردن fairlogin به‌عنوان یکی از روش‌های ورود ERPNext، پارامترهای زیر را پیکربندی کنید:

- نشانی پایه: `https://id.fairkom.net/auth/realms/fairlogin/`
- نشانی مجوزدهی: `https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/auth`
- نشانی بازگشت: `/api/method/frappe.integrations.oauth2_logins.login_via_fairlogin`
- نشانی دریافت توکن دسترسی: `https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/token`
- نقطهٔ پایانی API: `https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/userinfo`

![تنظیمات fairlogin در ERPNext](https://docs.frappe.io/files/fairloginERPnextSettings.png)

پس از فعال‌کردن این سرویس، کاربران می‌توانند با هر حساب fairlogin وارد شوند.

نقش پیش‌فرض کاربر جدید Blogger است (در حال حاضر این مقدار در کد ثابت شده است).
