---
title: "OAuth2 در Frappe Framework"
slug: "oauth2"
source_url: "https://docs.frappe.io/framework/oauth2"
source_id: "framework/oauth2"
source_version: "a8e172b381e27c3fa4bf1c773e3e0f00ba4ad9ab8e42fbf8884f74de6e639c8e"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe Framework برای مدیریت نیازمندی‌های OAuth2 از کتابخانهٔ [`oauthlib`](https://github.com/oauthlib/oauthlib) استفاده می‌کند. یک نمونهٔ Frappe می‌تواند هم‌زمان هر یک از نقش‌های زیر را داشته باشد:

1. **Resource Server (سرور منبع):** منابعی مانند داده‌های DocTypeها را در خود نگه می‌دارد.
2. **Authorization Server (سرور مجوزدهی):** سروری که برای دسترسی به منابع، توکن صادر می‌کند.
3. **Client (کلاینت):** برنامه‌ای که برای دسترسی به منبعی در یک Resource Server به مجوز نیاز دارد.

DocTypeهای مربوط به این نقش‌ها عبارت‌اند از:

1. **مشترک**
   - **OAuth Settings:** پیکربندی برخی قابلیت‌های OAuth مربوط به هر سه نقش.
2. **Authorization Server**
   - **OAuth Client:** نگهداری اطلاعات کلاینت‌های ثبت‌شده در نمونهٔ Frappe.
   - **OAuth Bearer Token:** نگهداری توکن‌هایی که به کلاینت‌های ثبت‌شده داده شده‌اند.
   - **OAuth Authorization Code:** پیگیری کدهای OAuth که کلاینت در ازای دریافت توکن ارائه می‌کند.
   - **OAuth Provider Settings:** امکان ردشدن از فرایند مجوزدهی را فراهم می‌کند. این گزینه **منسوخ شده است**؛ به‌جای آن از **OAuth Settings** استفاده کنید.
3. **Client**
   - **Connected App:** نگهداری اطلاعات Authorization Serverهایی که این نمونهٔ Frappe در آن‌ها به‌عنوان Client ثبت شده است تا به منبعی دسترسی پیدا کند؛ برای نمونه، حساب Google Drive کاربر.
   - **Social Key Login:** شبیه **Connected App** است، اما برای ورود به نمونهٔ Frappe به‌کار می‌رود؛ برای نمونه، حساب Google کاربر برای فعال‌کردن «ورود با Google».
   - **Token Cache:** نگهداری توکن‌هایی که نمونهٔ Frappe هنگام دسترسی به یک **Connected App** دریافت کرده است.

### قابلیت‌ها

قابلیت‌های زیر افزون بر امکانات `oauthlib` در Framework پیاده‌سازی شده‌اند:

- **Dynamic Client Registration (ثبت پویای کلاینت):** کلاینت می‌تواند بدون پیکربندی دستی از سوی مالک منبع، خودش را ثبت کند. [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)
- **Authorization Server Metadata Discovery (کشف فرادادهٔ سرور مجوزدهی):** کلاینت می‌تواند فرادادهٔ سرور مجوزدهی نمونه، از جمله نشانی نقطه‌های پایانی مجوزدهی، را دریافت کند. [RFC 8414](https://datatracker.ietf.org/doc/html/rfc8414)
- **Resource Server Metadata Discovery (کشف فرادادهٔ سرور منبع):** کلاینت می‌تواند فرادادهٔ سرور منبع نمونه، مانند مستندات و سرورهای مجوزدهی، را دریافت کند. [RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728)

### مستندات تکمیلی

راهنماهای قابلیت‌های مختلف OAuth2:

1. [راه‌اندازی OAuth 2](https://docs.frappe.io/framework/user/en/guides/integration/how_to_set_up_oauth)
2. [OAuth 2 در REST API](https://docs.frappe.io/framework/user/en/guides/integration/rest_api/oauth-2)
3. [احراز هویت مبتنی بر توکن](https://docs.frappe.io/framework/user/en/guides/integration/rest_api/token_based_authentication)
4. [استفاده از Frappe به‌عنوان سرویس OAuth](https://docs.frappe.io/framework/user/en/using_frappe_as_oauth_service)
5. [راهنمای «Social Login Key\n» در Frappe Framework](https://docs.frappe.io/framework/user/en/guides/integration/social_login_key)
6. [Set up a جدید Connected App](https://docs.frappe.io/framework/user/en/guides/app-development/connected-app)

> **هشدار**
>
> ممکن است برخی از این صفحه‌ها قدیمی باشند. اگر تردید داشتید، کد را بررسی کنید.

### OAuth Settings

یک DocType از نوع Single است که امکان پیکربندی قابلیت‌های مربوط به OAuth2 را می‌دهد. پیشنهاد می‌شود خود صفحهٔ DocType را باز کنید؛ توضیح راهنمای هر فیلد به‌اندازهٔ کافی گویاست.

در این تنظیمات می‌توانید قابلیت‌های زیر را روشن یا خاموش کنید:

- بررسی مجوزدهی هنگام وجود توکن فعال، با استفاده از فیلد **Skip Authorization**. **توجه:** در محیط عملیاتی این گزینه را علامت نزنید.
- **Authorization Server Metadata Discovery:** با تغییر فیلد **Show Auth Server Metadata**.
- **Dynamic Client Registration:** با تغییر فیلد **Enable Dynamic Client Registration**.
- **Resource Server Metadata Discovery:** با تغییر فیلد **Show Protected Resource Metadata**.

فیلدهای باقی‌مانده در بخش **Resource** فقط هنگام پاسخ‌گویی به درخواست‌های `/.well-known/oauth-protected-resource` استفاده می‌شوند.

> **دربارهٔ کلاینت‌های عمومی**
>
> کلاینت‌های عمومی، مانند SPA، به‌طور پیش‌فرض دسترسی محدودی دارند. این محدودیت با استفاده از CORS اعمال می‌شود.
>
> برای کنارگذاشتن این محدودیت دربارهٔ کلاینت‌های مورداعتماد مشخص، نام میزبان آن‌ها را به فیلد **Allowed Public Client Origins** اضافه کنید.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/oauth2). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
