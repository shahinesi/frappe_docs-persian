---
title: "کلید ورود به سیستم اجتماعی"
slug: "social_login_key"
source_url: "https://docs.frappe.io/framework/user/en/guides/integration/social_login_key"
source_id: "framework/user/en/guides/integration/social_login_key"
source_version: "091baff6435d6ed94702c8c00ea85efb1cf81f085a62b2dfaad76544f5b079e4"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

می‌توانید ارائه‌دهنده‌های ورود اجتماعی، مانند Facebook، Frappe، GitHub، Google و Microsoft را اضافه و ورود اجتماعی را فعال کنید.

#### راه‌اندازی ورود اجتماعی

برای افزودن کلید ورود به سیستم اجتماعی، به این مسیر بروید:

> یکپارچه‌سازی‌ها > احراز هویت > کلید ورود به سیستم اجتماعی

![تنظیم کلید ورود اجتماعی](https://docs.frappe.io/files/social-login-key.png)

1. **ارائه‌دهندهٔ ورود اجتماعی** را انتخاب کنید یا **سفارشی** را برگزینید.
2. اگر ارائه‌دهنده لازم دارد، **URL پایه** را وارد کنید.
3. برای نمایش نماد ورود در صفحهٔ ورود، **فعال‌کردن ورود با شبکه‌های اجتماعی** را روشن کنید.
4. شناسهٔ کلاینت و سیکرت کلاینت را بر اساس مقادیر ارائه‌دهنده وارد کنید.

نمونهٔ تنظیم کلید ورود اجتماعی:

- **ارائه‌دهندهٔ ورود اجتماعی**: `Frappe`
- **شناسهٔ کلاینت**: `ABCDEFG`
- **سیکرت کلاینت**: `123456` (مقدار نمونه)
- **فعال‌کردن ورود با شبکه‌های اجتماعی**: فعال
- **URL پایه**: `https://erpnext.org` (برای برخی ارائه‌دهندگان الزامی است)

#### دریافت شناسه و سیکرت کلاینت از ارائه‌دهندگان

- [ایجاد پروژه در کنسول API گوگل و ساخت شناسهٔ کلاینت](https://developers.google.com/identity/sign-in/web/devconsole-project)
- [ساخت دستی فرایند ورود فیسبوک](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow)
- [ساخت برنامهٔ OAuth در GitHub](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
- [مجوزدهی به برنامه‌های وب با OpenID Connect و Azure اکتیو دایرکتوری](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-openid-connect-code)
- [ساخت برنامهٔ متصل در Salesforce](https://help.salesforce.com/articleView?id=connected_app_create.htm)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [کلید ورود به سیستم اجتماعی](https://docs.frappe.io/framework/user/en/guides/integration/social_login_key). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
