---
title: "سفارشی‌سازی DocTypeها"
slug: "customize"
source_url: "https://docs.frappe.io/framework/user/en/basics/doctypes/customize"
source_id: "framework/user/en/basics/doctypes/customize"
source_version: "4fc2a2aac643400c90f1675dfb803e4ed5a570f808fd7fc17927fcefb2d9b933"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

اگر یک برنامه را برای چند سایت (مستأجر) به‌کار می‌برید، ممکن است هر سایت بخواهد DocType را به‌صورت جداگانه سفارشی کند. برای نمونه، اگر DocType «مشتری» دارید، هر کاربر می‌تواند فیلدهای سفارشی، شیوهٔ نام‌گذاری یا تنظیم‌های دیگری مخصوص سایت خود اضافه کند.

Frappe Framework برای پشتیبانی از سفارشی‌سازی مختص هر سایت، چند روش دارد:

1. **فیلد سفارشی** (`Custom Field`): یک DocType است که فیلدهای مختص سایت را ثبت می‌کند.
2. **تنظیم‌کنندهٔ ویژگی** (`Property Setter`): ویژگی‌هایی را ثبت می‌کند که در یک DocType یا DocTypeهای فرزند آن بازنویسی شده‌اند.
3. **سفارشی‌سازی فرم** (`Customize Form`): نمایی برای سفارشی‌کردن آسان DocTypeها.
4. [اسکریپت کلاینت](https://docs.frappe.io/framework/user/en/desk/scripting/client-script): گرداننده‌های رویداد اضافی در سمت کاربر.
5. [اسکریپت سرور](https://docs.frappe.io/framework/user/en/desk/scripting/server-script): منطق تجاری اضافی در سمت سرور.
6. **مجوزهای سفارشی** (`Custom DocPerm`): مجوزهای اضافی که از طریق **مدیر مجوزهای نقش** مدیریت می‌شوند.

## سفارشی‌سازی فرم

**سفارشی‌سازی فرم** نمایی است که امکان بازنویسی ویژگی‌های DocType و افزودن فیلدهای سفارشی را در یک جا فراهم می‌کند.

![نمای سفارشی‌سازی فرم](https://docs.frappe.io/files/customize-form.png)

وقتی ویژگی‌های DocType را در سفارشی‌سازی فرم تغییر می‌دهید، خود DocType پایه تغییر نمی‌کند؛ در عوض، اشیای سفارشی تازه‌ای برای بازنویسی آن ویژگی‌ها ساخته می‌شوند. این فرایند به‌طور یکپارچه انجام می‌شود.

#### افزودن پیوندها و کنش‌های سفارشی

این قابلیت از نسخهٔ 13 افزوده شده است.

در سفارشی‌سازی فرم می‌توانید پیوندها و کنش‌ها را نیز اضافه یا ویرایش کنید. تغییرها در همان DocTypeهای فنی `DocType Link` و `DocType Action` ذخیره می‌شوند و ویژگی `custom` برایشان فعال می‌شود.

این تنظیم‌های سفارشی هنگام دریافت فراداده از طریق `frappe.get_meta` به‌طور خودکار اعمال می‌شوند.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [سفارشی‌سازی DocTypeها](https://docs.frappe.io/framework/user/en/basics/doctypes/customize). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
