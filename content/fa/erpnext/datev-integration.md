---
title: "یکپارچه‌سازی DATEV"
slug: "datev-integration"
source_url: "https://docs.frappe.io/erpnext/datev-integration"
source_id: "erpnext/datev-integration"
source_version: "0fbb6732ba5cccad8ccb389ac4c2c783d47052a37774e46d39b627b960614fb2"
source_updated: "2026-07-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/datev-integration)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> این صفحه تصویر ندارد.

## نمای کلی

اپ یکپارچه‌سازی DATEV، ERPNext را به گردش‌کارهای DATEV که تیم‌های حسابداری و مشاوران مالیاتی آلمان استفاده می‌کنند متصل می‌کند. این اپ در [بازارگاه Frappe Cloud](https://cloud.frappe.io/marketplace/apps/erpnext_datev) با نام **DATEV Integration** فهرست شده و ناشر آن ALYF GmbH، تیم Raffael است.

## قابلیت‌ها

- **DATEV Unternehmen Online:** اسناد ثبت‌نهایی‌شده را از طریق ایمیل به DATEV Unternehmen Online می‌فرستد. اسناد خروجی را می‌توان به PDF تبدیل کرد و برای اسناد ورودی، فایل‌های پیوست‌شده قابل ارسال‌اند.
- **DATEV CSV Export:** ثبت‌های خام General Ledger را از ERPNext در قالب CSVِ DATEV خروجی می‌گیرد.
- **تحویل به مشاور مالیاتی:** گزارش DATEV را همراه با اطلاعات پایه به‌صورت فایل ZIP خروجی می‌گیرد تا در سامانهٔ DATEV مشاور مالیاتی وارد شود.

## خلاصهٔ راه‌اندازی

DATEV Settings را با شمارهٔ مشتری، شمارهٔ مشاور مالیاتی و حساب موقت طرف مقابل پیکربندی کنید. برای DATEV Unternehmen Online، یکپارچه‌سازی را فعال کنید، حساب ایمیل فرستنده و نوع سند را انتخاب کنید، نشانی ایمیل مقصد را که از DATEV گرفته‌اید بیفزایید و مشخص کنید پیوست‌ها یا نسخه‌های چاپی تولیدشده ارسال شوند یا نه.

## سازگاری

فهرست بازارگاه، پشتیبانی از نسخه‌های 13، 14، 15 و 16 ERPNext را نشان می‌دهد. پیش از استفاده برای تحویل اطلاعات حسابداری، یکپارچه‌سازی را در سایت آزمایشی بررسی کنید.

## پیوندها

- [یکپارچه‌سازی DATEV در بازارگاه Frappe Cloud](https://cloud.frappe.io/marketplace/apps/erpnext_datev)

## سلب مسئولیت

DATEV و DATEV Unternehmen Online علامت‌های تجاری DATEV eG هستند. طبق توضیح فهرست بازارگاه، این یکپارچه‌سازی از سوی DATEV eG تأیید یا پشتیبانی نشده است.
