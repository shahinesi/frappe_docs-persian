---
title: "توزیع هزینه میان مراکز هزینه"
slug: "distributed-cost-center"
source_url: "https://docs.frappe.io/erpnext/distributed-cost-center"
source_id: "erpnext/distributed-cost-center"
source_version: "b481ea0809113ab910fe8ce65df7647cb94018e7a43a5f7b3b71c71e63f7686e"
source_updated: "2026-08-14"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/distributed-cost-center)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

شرکت Nova Electronics Trading هر ماه 10,000 دلار برای نرم‌افزاری می‌پردازد که دو تیم از آن استفاده می‌کنند. تیم عملیات خرده‌فروشی بیشتر از نرم‌افزار استفاده می‌کند و باقی استفاده به تیم فروش آنلاین مربوط است. اگر Nova کل فاکتور را به عملیات خرده‌فروشی منظور کند، هزینه‌های آن تیم بیش از واقع دیده می‌شود و چنین به نظر می‌رسد که فروش آنلاین نرم‌افزار را رایگان مصرف می‌کند.

Nova می‌تواند فاکتور را یک‌بار به یک [مرکز هزینه](cost-center.md) مشترک اصلی نسبت دهد. سپس یک [Cost Center Allocation](/erpnext/cost-center-allocation) مبلغ را 60% به عملیات خرده‌فروشی و 40% به فروش آنلاین توزیع می‌کند. فاکتور مبدأ همچنان یک تراکنش است، اما گزارش‌های مدیریتی 6,000 دلار را به عملیات خرده‌فروشی و 4,000 دلار را به فروش آنلاین نشان می‌دهند.

Distributed Cost Center رکورد جداگانه‌ای در ERPNext نیست؛ این اصطلاح نتیجهٔ حسابداریِ ثبت مبلغ در یک Cost Center اصلی و تقسیم آن میان Cost Centerهای دریافت‌کننده با قاعدهٔ تخصیص را توصیف می‌کند.

## پیش از شروع

Cost Center اصلی و همهٔ Cost Centerهای دریافت‌کننده را در یک [شرکت](/erpnext/company) ایجاد کنید. درصدی را انتخاب کنید که کسب‌وکار بتواند دلیل آن را توضیح دهد؛ برای نمونه، تعداد کارکنان، مساحت، درآمد یا میزان واقعی استفاده از نرم‌افزار.

جمع درصدها باید 100% باشد. تاریخ اثرگذاری را با دقت تعیین کنید. ERPNext برای انتخاب تخصیص مناسب، **Posting Date** تراکنش را با **Valid From** مقایسه می‌کند.

## تنظیم توزیع

فهرست Cost Center Allocation را باز کنید و **Add Cost Center Allocation** را انتخاب کنید.

![فهرست Cost Center Allocation در ERPNext](https://docs.frappe.io/files/cost-center-allocation-list.webp)

**Main Cost Center** مشترک، **شرکت** و تاریخ **Valid From** را انتخاب کنید.

![فیلدهای Main Cost Center و Valid From](https://docs.frappe.io/files/allocation-main-and-date.webp)

در جدول تخصیص، هر Cost Center دریافت‌کننده و درصد آن را اضافه کنید. وقتی جمع به 100% رسید، رکورد را ذخیره کنید.

![Cost Centerهای دریافت‌کننده و درصدهای تخصیص](https://docs.frappe.io/files/allocation-percentages.webp)

## در تراکنش چه رخ می‌دهد؟

در تراکنش حسابداری پشتیبانی‌شده، فقط Cost Center اصلی را انتخاب کنید. این روش برای [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice)، [راهنمای «Sales Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/sales-invoice) یا [راهنمای «Journal Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry) کاربرد دارد. لازم نیست سهم هر دریافت‌کننده را جداگانه محاسبه و دستی وارد کنید.

هنگام ثبت تراکنش، ERPNext تخصیصی را اعمال می‌کند که در آن تاریخ معتبر است. ردیف‌های حاصل در [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger) دارای Cost Centerهای دریافت‌کننده و سهم محاسبه‌شدهٔ آن‌ها هستند. تخصیص، دسته‌بندی گزارش را تغییر می‌دهد؛ نه تأمین‌کننده، جمع فاکتور، مالیات یا مبلغ پرداختنی را.

## نمونهٔ نتیجه

| ثبت | Cost Center | مبلغ |
| --- | --- | ---: |
| انتخاب اولیه | Shared Services - NET | 10,000 دلار |
| سهم تخصیص‌یافته | Retail Operations - NET | 6,000 دلار |
| سهم تخصیص‌یافته | Online Sales - NET | 4,000 دلار |

برای مقایسهٔ هزینهٔ هر تیم، [Profit and Loss Statement](/erpnext/profit-and-loss-statement) را با فیلتر Cost Center اجرا کنید. اگر می‌خواهید ردیف‌های بدهکار و بستانکار پشت گزارش را جداگانه ببینید، دفترکل کل را باز کنید. مبلغ [حساب‌های پرداختنی](/erpnext/accounts-payable) همچنان 10,000 دلار است، زیرا کل یک فاکتور به تأمین‌کننده بدهکار است.

## تغییر توزیع در آینده

اگر نسبت تخصیص تغییر کرد، یک تخصیص جدید با تاریخ **Valid From** دیرتر ایجاد کنید. برای نمونه، اگر فروش آنلاین گسترش یابد، Nova می‌تواند از ماه بعد نسبت را از 60:40 به 50:50 تغییر دهد. تخصیص قبلی باقی می‌ماند تا تراکنش‌هایی که با قاعدهٔ پیشین ثبت شده‌اند قابل توضیح باشند.

برای اعمال تخصیص جدید، تراکنش‌های قدیمی ثبت‌نهایی‌شده را تغییر ندهید. پیش از تغییر قاعده، تاریخ اثرگذاری تجاری آن را با تیم مالی بررسی کنید.

## عیب‌یابی

### مبلغ توزیع نشده است

بررسی کنید تراکنش دقیقاً از Cost Center اصلی استفاده کرده باشد، تاریخ ثبت آن در یا پس از تاریخ Valid From تخصیص باشد و تخصیص به همان شرکت تعلق داشته باشد.

### درصدها ذخیره نمی‌شوند

مطمئن شوید برای هر ردیف Cost Center دریافت‌کننده تعیین شده و جمع درصدها دقیقاً 100% است.

### گزارش نسبت نامنتظره‌ای نشان می‌دهد

بررسی کنید در تاریخ Posting Date تراکنش کدام تخصیص معتبر بوده است. سپس voucher و ردیف‌های دفترکل کل آن را ببینید تا Cost Center ذخیره‌شده در هر ردیف تأیید شود.

## پرسش‌های متداول

### آیا توزیع، چند فاکتور ایجاد می‌کند؟

خیر. ERPNext یک فاکتور نگه می‌دارد و ردیف‌های حسابداری را میان Cost Centerهای دریافت‌کننده توزیع می‌کند.

### آیا Cost Centerهای دریافت‌کننده می‌توانند متعلق به شرکت‌های مختلف باشند؟

خیر. Cost Center اصلی و دریافت‌کننده باید به یک شرکت تعلق داشته باشند. اگر شرکت‌های جداگانه باید از یکدیگر هزینه دریافت کنند، از [گردش‌کار بین‌شرکتی](https://docs.frappe.io/erpnext/inter-company-invoices) استفاده کنید.

### آیا می‌توانم ماه آینده نسبت دیگری به‌کار ببرم؟

بله. یک تخصیص جدید با نسبت اصلاح‌شده و تاریخ Valid From درست ایجاد کنید. ERPNext بر اساس Posting Date هر تراکنش، تخصیص قابل‌اعمال را انتخاب می‌کند.

## موضوعات مرتبط

- [Cost Center Allocation](/erpnext/cost-center-allocation)
- [مرکز هزینه](cost-center.md)
- [ابعاد حسابداری](accounting-dimensions.md)
- [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger)
- [بودجه](budget.md)
