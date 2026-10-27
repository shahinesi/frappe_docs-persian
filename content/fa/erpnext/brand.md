---
title: "برند"
slug: "brand"
source_url: "https://docs.frappe.io/erpnext/brand"
source_id: "erpnext/brand"
source_version: "2cfbd036f4e22633bd5bbbc8bc609149b2a07f79eb7f27de9ef4856fb8ba141a"
---

**Brand (برند) نامی مشخص برای شناسایی اقلام است.**

معمولاً Brand نام تولیدکننده یا بسته‌بندی‌کنندهٔ محصولی مشخص است. برای مثال، Apple برندی است که لپ‌تاپ تولید می‌کند. Brand لزوماً [Manufacturer](https://docs.frappe.io/erpnext/manufacturer) یک قلم نیست؛ فقط نامی است که محصول با آن فروخته می‌شود. برای نمونه، اگر فنجان پلاستیکی تولید می‌کنید، ممکن است مجوز فروش آن را به برندی بزرگ بدهید تا محصول را با نام همان Brand عرضه کند.

در ERPNext می‌توان Brand را به اقلام اختصاص داد تا آن‌ها شناسایی شوند و برخی مقادیر پیش‌فرض برایشان تنظیم شود.

برای دسترسی به فهرست Brand به مسیر زیر بروید:

> Home > Selling > Sales > Brand

## 1. ایجاد Brand

1. به فهرست Brand بروید و روی **New** کلیک کنید.
2. نام Brand را وارد کنید و در صورت نیاز توضیحی بنویسید.
3. سند را ذخیره کنید.

![فرم Brand](https://docs.frappe.io/files/brand.png)

اکنون می‌توانید این Brand را به اقلام مختلف اختصاص دهید.

![فیلد Brand در قلم](https://docs.frappe.io/files/item_brand.png)

## 2. قابلیت‌ها

### 2.1 تنظیم پیش‌فرض برای اقلام این Brand

![مقادیر پیش‌فرض Brand](https://docs.frappe.io/files/brand_defaults.png)

می‌توانید مقادیر پیش‌فرض زیر را برای Brand تنظیم کنید. پس از اختصاص Brand به یک قلم، هنگام انجام تراکنش فروش یا خرید با آن قلم، مقادیر پیش‌فرض دریافت می‌شوند.

- **Default Warehouse:** انباری که بسته به نوع تراکنش، قلم از آن تأمین یا در آن ذخیره می‌شود.
- **Default Price List:** فهرست قیمت تنظیم‌شده در اینجا، در تراکنش‌های خرید و فروش دریافت می‌شود.

#### پیش‌فرض‌های خرید

هنگام انجام تراکنش خرید مانند Purchase Order، Purchase Receipt یا Purchase Invoice، با انتخاب قلمی از این Brand، مقادیر پیش‌فرض زیر دریافت می‌شوند:

- Default Buying Cost Center
- Default Supplier
- Default Expense Account

#### پیش‌فرض‌های فروش

هنگام انجام تراکنش فروش مانند Sales Order، Delivery Note یا Sales Invoice، با انتخاب قلمی از این Brand، مقادیر پیش‌فرض زیر دریافت می‌شوند:

- Default Selling Cost Center
- Default Income Account

## 3. موضوعات مرتبط

1. [Purchase Order](https://docs.frappe.io/erpnext/purchase-order)
2. [Sales Order](https://docs.frappe.io/erpnext/sales-order)
3. [Purchase Receipt](https://docs.frappe.io/erpnext/purchase-receipt)
4. [Delivery Note](https://docs.frappe.io/erpnext/delivery-note)
5. [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
6. [Purchase Invoice](https://docs.frappe.io/erpnext/purchase-invoice)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/brand). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
