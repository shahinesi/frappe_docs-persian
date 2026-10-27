---
title: "اقلام تأمین‌شده از سوی مشتری"
slug: "customer-provided-items"
source_url: "https://docs.frappe.io/erpnext/customer-provided-items"
source_id: "erpnext/customer-provided-items"
source_version: "444a775fd8a36fdabc096e2a4aa0b0381e8204027ecee52d0f321d89ed34988b"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/customer-provided-items)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویرهای صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

در تولید قراردادی، گاهی Customer برخی اقلام مشخص را به‌عنوان یک یا چند جزء BOM فراهم می‌کند. نمی‌توان این اقلام را از طریق «چرخهٔ خرید» دریافت کرد؛ چون در آن صورت باید Customer را هم‌زمان Supplier نیز تعریف کنید. همچنین کل DocTypeهای چرخهٔ خرید طی می‌شوند.

در این قابلیت، قلم تأمین‌شده از سوی Customer از طریق **Stock Entry** با نوع **Material Receipt** و بر مبنای **Material Request** از نوع **Customer Provided** دریافت می‌شود. این قابلیت زمانی به‌کار می‌رود که شخصی فرایند تولید را به شما برون‌سپاری کرده و مواد اولیه را خودش تأمین می‌کند.

## پیکربندی قلم Customer Provided

1. به [DocTypeِ Item](/erpnext/stock) بروید و یک قلم تازه با عنوان **Customer Provided** اضافه کنید.

   > Home > Stock > Items and Pricing > Item

2. در بخش **Purchase, Replenishment Details**، گزینهٔ **Is Customer Provided** را علامت بزنید و یک Customer پیش‌فرض تعیین کنید. توجه داشته باشید برای استفاده از این قابلیت باید **Is Purchase Item** غیرفعال باشد.

## دریافت قلم تأمین‌شده از سوی مشتری

1. اگر از **Production Plan** استفاده می‌کنید، **Material Request** این قلم می‌تواند خودکار ساخته شود. ابتدا قلمی را که باید تولید شود از طریق Sales Order یا Material Request دریافت کنید؛ سپس با دکمهٔ **Get Items for Work Order**، اقلام Work Order را دریافت کنید و دکمهٔ **Get Raw Materials for Production** را بزنید.
2. وقتی یکی از اجزای BOM به‌صورت **Customer Provided** تنظیم شده باشد و **Material Request** از **Production Plan** ساخته شود، هم Material Request از نوع **Purchase** و هم Material Request از نوع **Customer Provided** ایجاد می‌شوند. سپس می‌توان از روی آن‌ها **Stock Entry** با هدف **Material Receipt** ساخت.
3. یک **Material Request** می‌تواند چند **Stock Entry** از نوع Material Receipt داشته باشد. وضعیت Material Request این دریافت‌ها را منعکس می‌کند.
4. Customer می‌تواند **Material Request**های خود را در بخش **Material Requests** پرتال وب پیگیری کند. فیلتر پورتال فقط Material Requestهای همان Customer را نشان می‌دهد.
