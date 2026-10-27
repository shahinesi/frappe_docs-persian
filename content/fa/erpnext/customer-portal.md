---
title: "پرتال مشتری (Customer Portal)"
slug: "customer-portal"
source_url: "https://docs.frappe.io/erpnext/customer-portal"
source_id: "erpnext/customer-portal"
source_version: "67b5c6c5992efb1caf698c6ae2b3561972fa2abc6601f79f067bd10bd9bc1e37"
source_updated: "2026-10-22"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/customer-portal)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویرهای صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

Customer Portal دسترسی آسان Customerها را به اطلاعاتشان در ERPNext فراهم می‌کند.

Customerها می‌توانند وارد پورتال شوند تا وضعیت سفارش‌ها، صورتحساب‌ها و محموله‌هایشان را ببینند، Issue ثبت کنند و گفتگوهای مربوط به آن‌ها را دنبال کنند.

## 1. فراهم‌کردن دسترسی مشتریان به پورتال

Customer از طریق یک **Website User** می‌تواند به پورتال دسترسی پیدا کند؛ این کاربر باید به جدول **Portal Users** همان Customer اضافه شده باشد.

### 1.1 افزودن کاربر پورتال به Customer

1. برای Customer یک **Contact** بسازید و آن را به Customer پیوند دهید. سپس یک Website User با نقش **Customer** بسازید و آن را در فیلد **User Id** مربوط به Contact قرار دهید.
2. Customer را باز کنید و به زبانهٔ **Portal Users** بروید.
3. کاربر را در جدول **Customer Portal Users** اضافه و **Save** کنید.

> پورتال سفارش‌ها، صورتحساب‌ها و محموله‌های Customer را فقط به کاربرانی نشان می‌دهد که در جدول Portal Users همان Customer ثبت شده‌اند.

### 1.2 ثبت‌نام

اگر ثبت‌نام در **Website Settings** فعال باشد (یعنی کادر **Disable Signup** علامت نخورده باشد)، Customerها می‌توانند از گزینهٔ **Sign up** در صفحهٔ ورود، حساب خودشان را بسازند.

پس از ثبت‌نام، ایمیلی حاوی پیوند تنظیم گذرواژه به نشانی ایمیل Customer فرستاده می‌شود. سپس می‌توانید کاربر تازه را به جدول **Portal Users** مربوط به Customer اضافه کنید.

## 2. ورود به پورتال

برای ورود، Customer در صفحهٔ Login از نشانی ایمیل و گذرواژه‌اش استفاده می‌کند. همچنین می‌تواند گزینهٔ **Login with Email Link** را انتخاب کند تا پیوند ورود به ایمیلش فرستاده شود.

پس از ورود، Customer به صفحهٔ اصلی پورتال می‌رود. منوی سمت چپ به Quotationها، سفارش‌ها، صورتحساب‌ها، محموله‌ها، Issueها، Addressها و موارد دیگر پیوند دارد.

## 3. سفارش‌ها، صورتحساب‌ها و وضعیت ارسال

وقتی سفارشی از طریق سبد خرید یا در ERPNext ایجاد شود، Customer می‌تواند آن را در پورتال ببیند و وضعیت صورتحساب و تحویلش را پیگیری کند. پس از ثبت نهایی صورتحساب‌ها و پرداخت‌های مربوط به این سفارش‌ها، Customer می‌تواند وضعیت به‌روز را یک‌جا در پورتال مشاهده کند.

### 3.1 سفارش‌ها

برای دیدن جزئیات، روی یک سفارش کلیک کنید.

### 3.2 صورتحساب‌ها

فهرست صورتحساب‌ها وضعیت هر Sales Invoice را نشان می‌دهد؛ برای نمونه Overdue یا Paid.

#### Sales Invoice تسویه‌نشده

#### Sales Invoice پرداخت‌شده

## 4. Issueها

Customer Portal ثبت و پیگیری نگرانی‌های Customer را آسان می‌کند. رابطی ساده به او اجازه می‌دهد مسئله را به‌صورت Issue گزارش کند و گفتگوی کامل مربوط به آن را ببیند.

1. در منوی پورتال، به **Issues** بروید و **New** را انتخاب کنید.
2. **Subject** و **Description** مسئله را وارد کنید و **Submit** را بزنید.
3. Issue در ERPNext ایجاد و در فهرست **Issue** مربوط به Customer نمایش داده می‌شود.
4. برای دیدن جزئیات، روی Issue کلیک کنید.
5. Customer می‌تواند از بخش **Comments** برای Issue دیدگاه بگذارد و کل گفتگو را ببیند.

## موضوعات مرتبط

- [Customer](/erpnext/customer)
- [Contact](/erpnext/contact)
- [Sales Order](/erpnext/sales-order)
- [Sales Invoice](/erpnext/sales-invoice)
- [Issue](/erpnext/issue)
- [Website Settings](/erpnext/website-settings)
