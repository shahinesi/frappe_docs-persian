---
title: "ارسال با ERPNext"
slug: "erpnext_shipping"
source_url: "https://docs.frappe.io/erpnext/erpnext_shipping"
source_id: "erpnext/erpnext_shipping"
source_version: "d7ef8e0bb5551ab95e7104ae79bd7ab0106ba0fd18fd0ca6cdb85b0bdb3a3cd5"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [ارسال با ERPNext](https://docs.frappe.io/erpnext/erpnext_shipping)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها و تصویر متحرک در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

> این برنامه از نسخهٔ 13 معرفی شده است.

**برنامهٔ ERPNext Shipping** امکان مقایسهٔ نرخ‌های ارسال ارائه‌شده از سوی چند شرکت خدماتی، تولید برچسب و پیگیری وضعیت محموله‌ها را فراهم می‌کند.

یکپارچه‌سازی با ارائه‌دهندگان خدمات زیر در دسترس است:

1. [LetMeShip](https://www.letmeship.com/en/)
2. [SendCloud](https://www.sendcloud.com)

> برای استفاده از این قابلیت‌ها، باید برنامهٔ **ERPNext Shipping** را روی سایت خود نصب کنید. برنامه را می‌توانید از [GitHub](https://github.com/frappe/erpnext-shipping/tree/master)، [بازارگاه Frappe Cloud](https://cloud.frappe.io/marketplace/apps/erpnext_shipping) دریافت کنید یا از ارائه‌دهندهٔ میزبانی خود بخواهید آن را نصب کند.

## 1. راه‌اندازی

برای عملکرد درست برنامه، باید دست‌کم از یکی از پلتفرم‌های بالا کلید API بگیرید. راهنمای تنظیم هرکدام:

### 1.1 SendCloud

1. در [SendCloud](https://panel.sendcloud.sc/accounts/signup/) ثبت‌نام کنید.
2. برای تولید **کلید عمومی** و **Secret Key**، [این مراحل](https://support.sendcloud.com/hc/en-us/articles/360024967612-Service-points-for-API-Integrations#step-1-) را دنبال کنید.
3. در Awesome Bar عبارت **SendCloud** را جست‌وجو کنید.
4. **کلید عمومی** را در فیلد **کلید API** و **Secret Key** را در فیلد **API Secret** در DocTypeِ SendCloud وارد کنید.
5. گزینهٔ **فعال** را فعال کنید.
6. ذخیره کنید.

![API مربوط به SendCloud](https://docs.frappe.io/files/sendcloud_api.png)

### 1.2 LetMeShip

1. در [LetMeShip](https://www.letmeship.com/en/) ثبت‌نام کنید.
2. برای تولید **API ID** و **API Password**، [این مراحل](https://www.letmeship.com/en-de/shipping-api/) را دنبال کنید.
3. در Awesome Bar عبارت **LetMeShip** را جست‌وجو کنید.
4. **API ID** و **API Password** را در DocTypeِ LetMeShip وارد و گزینهٔ **فعال** را فعال کنید.
5. ذخیره کنید.

![API مربوط به LetMeShip](https://docs.frappe.io/files/letmeship_api.png)

## 2. قابلیت‌ها

### 2.1 مقایسهٔ نرخ‌های ارسال

پس از ثبت نهایی [حمل و نقل](https://docs.frappe.io/erpnext/shipment)، اگر برنامه نصب شده باشد، دکمهٔ **Fetch Shipping Rates** ظاهر می‌شود. با انتخاب آن، فهرستی از سرویس‌ها به‌همراه ارائه‌دهندگان و نرخ‌هایشان نمایش داده می‌شود.

![دریافت نرخ‌های ارسال](https://docs.frappe.io/files/fetch_rates.png)

همچنین می‌توانید از طریق **Parcel Service Type** سرویس‌های پراستفاده را به **Preferred Services** اضافه کنید:

1. فرض کنید سرویس مشخص‌شده در تصویر را زیاد استفاده می‌کنید؛ آن را به **Preferred Services** بیفزایید.

   ![سرویس موردنظر برای افزودن به فهرست ترجیحی](https://docs.frappe.io/files/service_highlight.png)

2. به **Parcel Service Type > جدید** بروید و یک **Parcel Service** جدید بسازید؛ برای نمونه، `TNT`.
3. یک **Parcel Service Type** اضافه کنید؛ برای نمونه، `Economy`.
4. `Economy` را به جدول **Parcel Service Type Alias** نیز اضافه کنید.
5. در صورت تمایل، توضیحی وارد کنید.
6. گزینهٔ **Show in Preferred Services List** را فعال و ذخیره کنید.

اکنون با انتخاب دکمهٔ **Fetch Shipping Rates**، سرویس انتخاب‌شده را در بخش **Preferred Services** خواهید دید.

![سرویس ترجیحی](https://docs.frappe.io/files/preferred_service.png)

### 2.2 ایجاد حمل و نقل

پس از مقایسهٔ نرخ‌ها، برای استفاده از یکی از سرویس‌ها، در ردیف مربوط دکمهٔ **انتخاب کردن** را بزنید. در نتیجه حمل و نقل به‌طور خودکار در پلتفرم ارائه‌دهندهٔ سرویس ایجاد می‌شود.

بخش **اطلاعات حمل و نقل** با توجه به حمل و نقل ایجادشده خودکار به‌روزرسانی خواهد شد.

![ایجاد حمل و نقل](https://docs.frappe.io/files/create_shipment.gif)

همچنین می‌توانید با فیلد **شناسه حمل و نقل** تراکنش را در پلتفرم ارائه‌دهندهٔ سرویس جست‌وجو کنید.

### 2.3 چاپ برچسب

برای نمایش دکمهٔ **Print Shipping Label**، ابتدا باید **شناسه حمل و نقل** در رکورد فعلی تولید شده باشد.

![دکمهٔ چاپ برچسب ارسال](https://docs.frappe.io/files/print_label_button.png)

سپس می‌توانید با انتخاب آن، برچسب ارسال را تولید کنید.

![نمونهٔ برچسب ارسال](https://docs.frappe.io/files/dummy_shipping_label.png)

برای پیگیری وضعیت حمل و نقل نیز **View > Track Status** را انتخاب کنید.

> **یادداشت:** ممکن است پلتفرم‌های یکپارچه‌شده در منطقهٔ شما خدمات ارائه نکنند. برای بررسی، پیوند مربوط به هر پلتفرم را ببینید.
