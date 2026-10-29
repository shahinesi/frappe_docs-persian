---
title: "افزودن دکمهٔ سفارشی به فرم"
slug: "adding-custom-button-to-form"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/adding-custom-button-to-form"
source_id: "framework/user/en/guides/app-development/adding-custom-button-to-form"
source_version: "6be4d45cd12cb42bde6464840775f513ec13dbc2a46d9fa3d21df002653f658b"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

برای افزودن دکمه‌ای سفارشی به فرم، فایل جاوااسکریپت DocType مربوط را ویرایش کنید. برای نمونه، برای افزودن دکمه به فرم کاربر، فایل `user.js` را ویرایش کنید.

در این فایل، متد `add_custom_button` را بنویسید تا دکمه به فرم افزوده شود.

#### امضای تابع `add_custom_button(...)`

```js
frm.add_custom_button(__(buttonName), function() {
    // اجرای کاری مانند رفتن به فرم تازه یا دریافت داده
}, __(groupName));
```

#### نمونهٔ 1: افزودن دکمه به فرم کاربر

فایل `frappe/core/doctype/user/user.js` را ویرایش کنید:

```js
frappe.ui.form.on('User', {
    refresh: function(frm) {
        frm.add_custom_button(__('دریافت نشانی ایمیل کاربر'), function() {
            frappe.msgprint(frm.doc.email);
        }, __('ابزارها'));
    }
});
```

اکنون باید دکمه را در فرم کاربر، مانند تصویر زیر، ببینید:

![دکمهٔ سفارشی در فرم](https://docs.frappe.io/files/add_custom_button.png)

رشته‌های «دریافت نشانی ایمیل کاربر» و «ابزارها» برچسب‌های نمایشی‌اند و در این نمونه به فارسی تنظیم شده‌اند؛ نام DocType و متدهای فنی بدون تغییر مانده‌اند.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [افزودن دکمهٔ سفارشی به فرم](https://docs.frappe.io/framework/user/en/guides/app-development/adding-custom-button-to-form). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
