---
title: "پرسش‌های متداول e-Waybill"
slug: "e-waybill-problems"
source_url: "https://docs.frappe.io/erpnext/e-waybill-problems"
source_id: "erpnext/e-waybill-problems"
source_version: "f265f3377d88fd70de0b51d093fba4c42f83a590ca000700ced2660da7ebc24b"
source_updated: "2026-10-24"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/e-waybill-problems)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویر در این مخزن بازنشر نشده و پیوندش به فایل میزبان منبع اشاره می‌کند.

این صفحه به پرسش‌هایی پاسخ می‌دهد که تیم پشتیبانی بیشتر دربارهٔ e-way bill دریافت می‌کند: از کدام سند می‌توان آن را ایجاد کرد، چرا تولید آن ناموفق می‌شود، چگونه Part B یا اطلاعات حمل‌کننده را به‌روز کرد و اگر PDF یا گزارش e-Waybill وجود نداشت چه باید کرد.

برای روش تولید، به‌روزرسانی، تمدید و لغو e-way bill، راهنمای [e-Waybill در مستندات India Compliance](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_waybill) را ببینید.

## از کدام سند می‌توان e-way bill تولید کرد؟

همیشه می‌توان آن را از Sales Invoice تولید کرد. برای سندهای دیگر، باید تنظیم مربوط را در بخش **e-Waybill** در **GST Settings > General** فعال کنید:

| نوع جابه‌جایی | سند | تنظیمی که باید فعال شود |
| --- | --- | --- |
| فروش | Sales Invoice | **Enable e-Waybill Features** |
| ارسال کالا پیش از صدور صورتحساب | Delivery Note | **Enable e-Waybill Generation from Delivery Note** |
| مرجوعی خرید یا یادداشت بدهکار | Purchase Invoice با فعال‌بودن **Is Return** | **Enable e-Waybill Generation from Purchase Invoice** |
| دریافت کالا (برای نمونه از تأمین‌کنندهٔ ثبت‌نشده) | Purchase Receipt | **Enable e-Waybill Generation from Purchase Receipt** |
| انتقال میان انبارهای خودتان یا ارسال کالا برای کار پیمانکاری | Stock Entry (Material Transfer یا Send to Subcontractor) | **Enable e-Waybill Generation for Subcontracting and Material Transfer** |

![تنظیمات e-Waybill در GST Settings](https://docs.frappe.io/files/gst-settings-e-waybill.png)

برای مرجوعی (با فعال‌بودن **Is Return**)، نوع عرضه Inward است. نسخه‌های قدیمی‌تر همهٔ این تنظیمات را ندارند. اگر تنظیمی را نمی‌بینید، India Compliance را به‌روزرسانی کنید.

این موارد پشتیبانی نمی‌شوند: تولید e-way bill از Asset Movement و تولید بیش از یک e-way bill برای یک سند. اگر چند وسیلهٔ نقلیه دارید، برای هر وسیله یک Delivery Note بسازید و از هرکدام e-way bill جداگانه تولید کنید؛ سپس یک Sales Invoice از همهٔ Delivery Noteها بسازید. تغییر وسیلهٔ نقلیه در مسیر را با **Update Vehicle Info** یا درگاه e-way bill برای جابه‌جایی چندوسیله‌ای ثبت کنید.

## انتقال موجودی به ایالتی دیگر

Stock Entry موجودی را درون یک شرکت جابه‌جا می‌کند. برای انتقال کالا به شعبه‌ای با GSTIN متفاوت، برای شعبه (به‌عنوان مشتری داخلی) Sales Invoice صادر کنید و در شعبهٔ دریافت‌کننده Purchase Invoice ثبت کنید. به این ترتیب IGST محاسبه می‌شود و ثبت حسابداری هر دو طرف درست خواهد بود. e-way bill مربوط به Stock Entry برای جابه‌جایی با همان GSTIN و کار پیمانکاری است.

## تولید با خطا مواجه می‌شود

متن خطا از سامانهٔ دولتی e-way bill می‌آید. علت‌های رایج:

- **Place of Supply:** در جابه‌جایی bill-to/ship-to، محل عرضه بر اساس نشانی صورتحساب تعیین می‌شود، نه نشانی ارسال. اگر **GST Category** مشتری SEZ باشد، محل عرضه باید **96-Other Countries** باشد. پس از ثبت نهایی سند، Place of Supply را نمی‌توان تغییر داد؛ سند را اصلاح کنید.
- **کد HSN نامعتبر:** دولت مشخص نمی‌کند کدام ردیف اشتباه است. کد HSN هر کالا را با جست‌وجوی HSN در GST Portal بررسی کنید، آن را در کالا اصلاح و سند را اصلاح کنید.
- **کد PIN:** کد PIN نشانی باید با ایالت آن مطابقت داشته باشد. نشانی‌های صورتحساب، ارسال و مبدأ ارسال را بررسی کنید.
- **GSTIN حمل‌کننده:** برای شناسهٔ حمل‌کننده (از جمله شمارهٔ ثبت‌نام عمومی)، گزینهٔ **Is Transporter** را در تأمین‌کننده فعال و فیلد **Transporter GSTIN** را وارد کنید؛ از فیلد عادی GSTIN استفاده نکنید.
- **حمل ریلی:** اگر روش حمل Rail است، شمارهٔ سند حمل باید از قالب موردنیاز راه‌آهن پیروی کند.
- **خطاهای اعتبارنامه یا API:** [خطاهای GST API](/erpnext/gst-api-credentials-and-credits) را ببینید.

## GSTIN مقصد و دیگر قواعد تازهٔ دولت

وقتی دولت قواعد e-way bill را تغییر می‌دهد (برای نمونه، تغییر Ship-To GSTIN از 1 August 2026)، India Compliance این تغییر را برای همهٔ نسخه‌های پشتیبانی‌شده منتشر می‌کند. فقط کافی است برنامهٔ India Compliance را به‌روزرسانی کنید. تغییرها ابتدا در حالت sandbox فعال می‌شوند. خطاهای مربوط به جزئیات ارسال یا کد PIN پس از تغییر قاعده معمولاً نشان می‌دهند سایت از نسخهٔ قدیمی استفاده می‌کند.

## به‌روزرسانی Part B یا حمل‌کننده

از منوی **e-Waybill** در سند استفاده کنید:

- **Update Vehicle Info**: افزودن یا تغییر وسیلهٔ نقلیه (Part B).
- **Update Transporter**: تغییر حمل‌کننده.
- **Extend Validity**: تمدید اعتبار e-way bill پیش از انقضای آن.
- **Fetch Latest Data**: دریافت داده‌های فعلی، برای نمونه پس از آن‌که حمل‌کننده Part B را به‌روز کرد.

دولت اجازه می‌دهد نخستین به‌روزرسانی Part B فقط تا 15 روز پس از Part A انجام شود. پس از آن، e-way bill **باطل (discarded)** می‌شود. در سند **Mark as Cancelled** را انتخاب و سپس e-way bill تازه‌ای تولید کنید.

مدت اعتبار e-way bill فقط پس از افزودن Part B تعیین می‌شود. برای دیدن سندهایی که هنوز Part B ندارند، فهرست **e-Waybill Log** را باز و بر اساس خالی‌بودن **Valid Upto** فیلتر کنید.

## PDF مربوط به e-way bill یا e-Waybill Log وجود ندارد

1. اگر **Attach e-Waybill Print After Generation** در GST Settings فعال باشد، PDF پس از تولید به سند پیوست می‌شود. برای دیدنش سند را دوباره بارگذاری کنید.
2. اگر e-way bill در درگاه دولتی ایجاد شده است، آن را با **e-Waybill > Mark as Generated** ثبت کنید یا **Fetch if Generated** را به‌کار ببرید.
3. مشکل گزارش‌های مفقود و خطاهای چاپ پس از به‌روزرسانی در انتشارهای بعدی رفع شده است. India Compliance را به‌روزرسانی کنید.

## موضوعات مرتبط

- [GST هند، صورتحساب الکترونیکی و e-way bill: یافتن پاسخ](/erpnext/india-gst-help)
- [e-Waybill](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_waybill)
- [اعتبارسنجی تراکنش‌ها](https://docs.indiacompliance.app/docs/miscellaneous/transaction_validations)
- [رفع خطای e-Invoice، نبود IRN یا لغو نشدن صورتحساب](/erpnext/e-invoice-failed-or-cancel)
