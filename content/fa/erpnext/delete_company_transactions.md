---
title: "حذف تراکنش‌های شرکت"
slug: "delete-company-transactions"
source_url: "https://docs.frappe.io/erpnext/delete_company_transactions"
source_id: "erpnext/delete_company_transactions"
source_version: "86cb7e7786b38c2d13b232aba07bc36504a91926d3533abba7afc8d305b8be27"
source_updated: "2026-03-12"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/delete_company_transactions)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

ERPNext امکان حذف همهٔ تراکنش‌های مرتبط با یک شرکت، مانند Sales Invoice، Sales Order و Payment Entry را فراهم می‌کند و هم‌زمان داده‌های پایه (Master Data) را نگه می‌دارد.

معمولاً کاربران ابتدا داده‌های پایه را تنظیم می‌کنند و سپس برای آزمایش یا آشنایی با سیستم چند رکورد ساختگی ایجاد می‌کنند. بعد می‌خواهند رکوردهای آزمایشی را حذف کنند و از نو شروع کنند.

### Transaction Deletion Record

این قابلیت همهٔ رکوردهای مربوط به شرکت مشخص‌شده را حذف می‌کند، به‌جز رکوردهای DocTypeهایی که در جدول **Excluded DocTypes** فهرست شده‌اند.

اگر واقعاً می‌خواهید تراکنش‌ها را پاک کنید، مراحل زیر را انجام دهید. توجه کنید تراکنش‌های حذف‌شده قابل بازیابی نیستند.

1. یک سند جدید **Transaction Deletion Record** ایجاد کنید.
2. نام شرکتی را وارد کنید که می‌خواهید رکوردهایش حذف شوند.
3. در صورت نیاز جدول **Excluded DocTypes** را تغییر دهید.
4. سند را ذخیره و ثبت نهایی کنید.

![فرم Transaction Deletion Record](https://docs.frappe.io/files/imageaf22f8.png)

جدول **Summary** نام DocTypeهایی را که رکوردهایشان حذف شده و تعداد رکوردهای حذف‌شده را نشان می‌دهد.

## حذف تراکنش‌ها

1. به **Home > Accounting > Company** بروید و شرکت موردنظر را پیدا کنید.
2. در گوشهٔ بالا سمت راست، دکمهٔ **Delete Transactions** را در بخش **Manage** پیدا کنید.
3. گذرواژهٔ خود را وارد کنید.
4. برای تأیید، نام شرکت را وارد کنید.

![عمل حذف تراکنش‌های شرکت](https://docs.frappe.io/files/imagef7bec2.png)

این کار یک رکورد در DocType مربوط به Transaction Deletion Record ثبت می‌کند.

> برای انجام این عملیات، کاربر باید نقش **System Manager** داشته باشد.
