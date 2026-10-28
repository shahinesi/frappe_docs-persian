---
title: "دریافت بازخورد با استفاده از Web Form"
slug: "feedback-request-using-web-form"
source_url: "https://docs.frappe.io/erpnext/feedback-request-using-web-form"
source_id: "erpnext/feedback-request-using-web-form"
source_version: "45bca7e92ed2845b86ab157c8b02c89b772a3045cdfcb5a84bca309962433d20"
source_updated: "2026-03-04"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [دریافت بازخورد با استفاده از فرم وب](https://docs.frappe.io/erpnext/feedback-request-using-web-form)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها و پویانمایی در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

در ERPNext نسخهٔ 11 قابلیتی برای دریافت بازخورد از مشتریان و کاربران وجود داشت. در نسخه‌های کنونی ERPNext می‌توانید این فرایند را با ابزارهای سفارشی‌سازی داخلی مدیریت کنید:

- DocType سفارشی
- فرم وب
- اعلان (Notification)

مراحل زیر را برای پیکربندی این قابلیت و شروع جمع‌آوری بازخورد دنبال کنید.

## تعریف DocType برای بازخورد

یک DocType سفارشی برای امتیازدهی با ساختاری مانند نمونه ایجاد کنید.

![نمونهٔ DocType سفارشی برای امتیازدهی](https://docs.frappe.io/files/oUDbd8e.png)

1. در فیلدهای نخست، DocTypeهایی را فهرست کنید که می‌خواهید برایشان امتیاز ثبت شود.
2. در فیلد **نام سند**، نام فیلد نخست، یعنی `document`، را وارد کنید تا این فیلد به یک [لینک پویا](dynamic-link-fields.md) تبدیل شود.
3. یک فیلد **امتیاز** اضافه کنید. در صورت نیاز می‌توانید فیلد داده یا انتخابی دیگری هم برای ثبت امتیاز در نظر بگیرید.

## ساخت فرم وب بازخورد

پس از ایجاد DocType، یک فرم وب بسازید و همهٔ فیلدهای استاندارد DocType بازخورد را در آن قرار دهید.

![ساخت فرم وب برای بازخورد](https://docs.frappe.io/files/eWKqJ50.png)

## ساخت اعلان

اعلانی ایجاد کنید تا پیوند فرم برای کاربر فرستاده شود و او بتواند امتیاز ثبت کند. می‌توانید شرط ارسال ایمیل را با قابلیت‌های استاندارد [اعلان‌ها](https://docs.frappe.io/erpnext/notifications) تعیین کنید. نمونهٔ زیر پیام و پیوندی را نشان می‌دهد که کاربر را به فرم وب می‌برد:

```text
https://example.erpnext.com/feedback?new=1&document=Sales%20Order&document_name={{doc.name}}
```

در این نشانی:

- `example.erpnext.com` را با دامنهٔ حساب ERPNext خود جایگزین کنید.
- `feedback` نام DocType سفارشی‌ای است که برای ثبت بازخورد ساخته‌اید.
- `document=Sales%20Order&` نوع DocTypeای را مشخص می‌کند که اعلان برای آن ارسال می‌شود.
- `document_name={{doc.name}}` نام سند مشخص را دریافت می‌کند و آن را در فیلد **نام سند** فرم بازخورد قرار می‌دهد.

![نمونهٔ تنظیم اعلان و پیوند فرم](https://docs.frappe.io/files/UDBhIaK.png)

## نمایش سریع

پویانمایی زیر نمونه‌ای از ساخته‌شدن پیوند، تکمیل فرم وب و ثبت بازخورد در ERPNext را نشان می‌دهد.

![نمایش فرایند ثبت بازخورد در ERPNext](https://docs.frappe.io/files/hEbdh6c.gif)
