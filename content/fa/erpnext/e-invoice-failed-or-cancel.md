---
title: "رفع خطای e-Invoice، نبود IRN یا لغو نشدن صورتحساب"
slug: "e-invoice-failed-or-cancel"
source_url: "https://docs.frappe.io/erpnext/e-invoice-failed-or-cancel"
source_id: "erpnext/e-invoice-failed-or-cancel"
source_version: "d7478c1261eecde0e1299a35610e9b287d7c8ba9660d51ceed528125a5dadb11"
source_updated: "2026-10-24"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/e-invoice-failed-or-cancel)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویر در این مخزن بازنشر نشده و پیوندش به فایل میزبان منبع اشاره می‌کند.

پس از ثبت نهایی فاکتور فروش، برنامهٔ India Compliance صورتحساب الکترونیکی را تولید می‌کند و IRN و کد QR را روی آن ذخیره می‌کند. این صفحه توضیح می‌دهد هنگام نمایش وضعیت **e-Invoice Status** به‌صورت Failed، نبود IRN یا امکان‌نداشتن لغو یا تغییر صورتحساب الکترونیکی چه باید کرد.

## پیام خطا

```text
e-Invoice can only be cancelled upto 24 hours after it is generated
```

نشانه‌های دیگر همین مشکل عبارت‌اند از: **e-Invoice Status** برابر Failed یا Pending باشد، IRN یا کد QR روی نسخهٔ چاپی صورتحساب نباشد، یا در درگاه GST صورتحساب الکترونیکی دیده شود که در ERPNext وجود ندارد.

## سازوکار کار

هنگام تولید صورتحساب الکترونیکی، درگاه دولتی یک **IRN** (شمارهٔ مرجع صورتحساب) و کد QR امضاشده برمی‌گرداند. India Compliance این اطلاعات را در فاکتور فروش و **e-Invoice Log** ذخیره و وضعیت **e-Invoice Status** را روی Generated تنظیم می‌کند.

دولت فقط تا 24 ساعت پس از تولید اجازهٔ لغو صورتحساب الکترونیکی را می‌دهد و این صورتحساب را نمی‌توان ویرایش کرد. پس از آن، اصلاحات باید با یادداشت بستانکار یا بدهکار انجام شوند.

## وضعیت e-Invoice برابر Failed است یا IRN وجود ندارد

1. فاکتور فروش را باز کنید و خطای بخش صورتحساب الکترونیکی یا **e-Invoice Log** را بخوانید.
2. اگر خطا مربوط به اعتبارنامه یا API است، [خطاهای GST API](https://docs.frappe.io/erpnext/gst-api-credentials-and-credits) را ببینید.
3. اگر خطا مربوط به داده‌هاست (GSTIN، کد PIN، کد HSN یا نشانی)، اطلاعات پایه را اصلاح کنید و سپس در صورتحساب **e-Invoice > Generate** را انتخاب کنید تا دوباره تلاش شود.
4. اگر درگاه اعلام کرد IRN از قبل وجود دارد (IRN تکراری)، صورتحساب الکترونیکی در تلاش قبلی ایجاد شده اما ERPNext آن را ثبت نکرده است. دوباره **e-Invoice > Generate** را انتخاب کنید. اگر GSTIN خریدار و مبلغ صورتحساب با این سند مطابقت داشته باشند، India Compliance صورتحساب موجود را دریافت و به آن پیوند می‌دهد. اگر گزینهٔ **Fetch e-Invoice details from GST Portal** در **GST Settings > General** فعال باشد، هنگامی که درگاه صورتحساب الکترونیکی جزئیات را برنگرداند، اطلاعات در درگاه GST نیز جست‌وجو می‌شود.
5. اگر خطای زیر نمایش داده شود، تاریخ ثبت صورتحساب از مهلت گزارش‌دهی دولتی که در **e-Invoice Reporting Time Limit (in روزها)** در GST Settings تعیین شده قدیمی‌تر است و دیگر نمی‌توان برای آن صورتحساب الکترونیکی تولید کرد. صورتحساب تازه‌ای با تاریخ امروز صادر کنید یا دربارهٔ این محدودیت با مشاور مالیاتی خود مشورت کنید.

   ```text
   e-Invoice cannot be generated because the posting date exceeds the reporting time limit of … days as specified in GST Settings
   ```

در نسخه‌های قدیمی‌تر، اگر کاربری بار دوم از فهرست فاکتور فروش صورتحساب الکترونیکی را تولید می‌کرد، وضعیت به Failed تغییر می‌کرد. این مشکل در India Compliance نسخهٔ 15.25.5 رفع شد. اگر نسخهٔ شما قدیمی‌تر است، برنامه را به‌روزرسانی کنید.

![اقدام‌های e-Invoice](https://docs.frappe.io/files/e-invoice-actions.png)

## صورتحساب الکترونیکی مستقیماً در درگاه دولتی ایجاد شده است

اگر صورتحساب الکترونیکی را به‌جای ERPNext در درگاه ایجاد یا لغو کرده‌اید، آن را در خود صورتحساب ثبت کنید:

- اگر در درگاه ایجاد شده است: **e-Invoice > Mark as Generated** را انتخاب و IRN، شماره و تاریخ تأیید را وارد کنید.
- اگر در درگاه لغو شده است: **e-Invoice > Mark as Cancelled** را انتخاب و جزئیات لغو را وارد کنید.

## لغو صورتحساب الکترونیکی

تا 24 ساعت پس از تولید:

1. فاکتور فروش را باز کنید و **لغو** را بزنید.
2. انتخاب کنید که IRN نیز همراه صورتحساب لغو شود. اگر گزینهٔ **Automatically Cancel e-Invoice on Invoice Cancellation** در GST Settings فعال باشد، لغو IRN بدون پرسش انجام می‌شود.

پس از 24 ساعت، درگاه صورتحساب الکترونیکی را لغو نمی‌کند:

- برای اصلاح صورتحساب، یک **یادداشت بستانکاری** برای آن و یک صورتحساب تازه با اطلاعات درست صادر کنید.
- اگر بااین‌حال لازم است فاکتور فروش را در ERPNext لغو کنید (برای نمونه، درگاه آن را حذف کرده است)، گزینهٔ **محدود کردن Cancellation if e-Invoice not Cancellable** را در **GST Settings > General** غیرفعال کنید، صورتحساب را لغو کنید و سپس گزینه را دوباره فعال کنید.

صورتحساب الکترونیکی قابل اصلاح نیست. آن را لغو و صورتحساب تازه‌ای صادر کنید یا از یادداشت بستانکاری استفاده کنید.

## صورتحساب فقط اقلام با نرخ صفر یا معاف دارد

گزینهٔ **Nil / Exempted / Non-GST Items in e-Invoice** در **GST Settings > General** تعیین می‌کند چه اتفاقی بیفتد: Do Not Generate، Generate with Other Charges یا Generate with Taxable Values. اگر موردی اشتباهاً به‌صورت Nil-Rated نمایش داده می‌شود، **الگوی مالیات آیتم** و جزئیات GST آن را بررسی کنید. همچنین ببینید [چرا GST در صورتحساب اشتباه است یا نمایش داده نمی‌شود؟](https://docs.frappe.io/erpnext/gst-wrong-on-invoice).

## چاپ صورتحساب الکترونیکی همراه IRN و کد QR

فاکتور فروش را با قالب چاپ **e-Invoice** (یا قالب سفارشی دارای کد QR) چاپ کنید. راهنمای [کد QR صورتحساب الکترونیکی در قالب‌های چاپ](https://docs.indiacompliance.app/docs/developer-guide/e_invoice_qr) را ببینید.

## موضوعات مرتبط

- [GST هند، صورتحساب الکترونیکی و e-way bill: یافتن پاسخ](https://docs.frappe.io/erpnext/india-gst-help)
- [تولید و لغو صورتحساب الکترونیکی](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_invoice)
- [پرسش‌های متداول e-Invoice و e-Waybill](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/faqs)
