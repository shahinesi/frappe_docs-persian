---
title: "دریافت مقدار فیلد از DocType پیوندشده"
slug: "updating-a-field-from-a-linked-doctype"
source_url: "https://docs.frappe.io/framework/guides-app-development/updating-a-field-from-a-linked-doctype"
source_id: "framework/guides-app-development/updating-a-field-from-a-linked-doctype"
source_version: "c92308a29fda74201bab302248e5974426185d878aef7864155dabe56596cd1c"
source_updated: "2026-07-05"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

در ERPNext می‌توانید با ویژگی **Fetch From** مقداری را از یک سند پیوندشده به فیلدی دیگر منتقل کنید. این ویژگی زمانی کاربرد دارد که فیلدی باید اطلاعات رکورد پیوندشدهٔ انتخاب‌شده را به‌طور خودکار نشان دهد.

برای نمونه، وقتی کاربر یک **Customer** را انتخاب می‌کند، ممکن است بخواهید قلمرو، شناسهٔ مالیاتی، گروه مشتری یا فیلد دیگری از پروندهٔ اصلی مشتری به‌طور خودکار نمایش داده شود. به‌جای نوشتن Client Script، می‌توانید این کار را در تنظیمات فیلد و با **Fetch From** پیکربندی کنید.

[تماشای ویدئوی آموزشی](https://www.youtube.com/watch?v=78Yp_OdXnBI)

## سازوکار Fetch From

Fetch From با فیلد **Link** کار می‌کند.

قالب مقدار آن چنین است:

```text
link_fieldname.field_to_fetch
```

در این قالب:

- `link_fieldname` نام فنی فیلد Link در DocType جاری است.
- `field_to_fetch` نام فیلدی است که باید از DocType پیوندشده دریافت شود.

وقتی کاربر مقداری را در فیلد Link انتخاب می‌کند، ERPNext سند پیوندشدهٔ انتخاب‌شده را می‌خواند و مقدار فیلد مشخص‌شده را در فیلد جاری کپی می‌کند.

## نمونه

فرض کنید در **Sales Order** یک فیلد سفارشی با نام **Customer Territory** دارید و می‌خواهید قلمرو را به‌طور خودکار از Customer انتخاب‌شده دریافت کنید.

در این مثال:

- فیلد Link در Sales Order برابر `customer` است.
- فیلدی که باید از Customer دریافت شود `territory` است.
- مقدار **Fetch From** باید چنین باشد:

```text
customer.territory
```

وقتی کاربر در Sales Order یک Customer انتخاب کند، ERPNext مقدار Territory مشتری را می‌خواند و در فیلد Customer Territory قرار می‌دهد.

## مراحل پیکربندی Fetch From

1. به **Customize Form** بروید.
2. DocTypeای را انتخاب کنید که می‌خواهید مقدار دریافت‌شده در آن نمایش داده شود.
3. فیلد مقصدی را که مقدار باید در آن قرار بگیرد اضافه یا انتخاب کنید.
4. در تنظیمات فیلد، مقدار **Fetch From** را با این قالب وارد کنید:

   ```text
   link_fieldname.field_to_fetch
   ```

5. سفارشی‌سازی را ذخیره کنید.
6. فرم را دوباره بارگذاری کنید و با انتخاب یک سند پیوندشده، نتیجه را بیازمایید.

## نمونهٔ دیگر

اگر می‌خواهید **Supplier Group** تأمین‌کنندهٔ انتخاب‌شده را در فیلد سفارشی‌ای در Purchase Order دریافت کنید:

- فیلد Link: `supplier`
- فیلدی که دریافت می‌شود: `supplier_group`
- مقدار **Fetch From**:

```text
supplier.supplier_group
```

پس از انتخاب Supplier، ERPNext مقدار Supplier Group را در فیلد مقصد قرار می‌دهد.

## نکته‌های مهم

- Fetch From فقط وقتی کار می‌کند که فیلد مبدأ در DocType پیوندشده موجود باشد.
- از **نام فنی فیلد** استفاده کنید، نه برچسب آن. برای نمونه، `customer_group` درست است، نه `Customer Group`.
- نوع فیلد مقصد باید با مقدار دریافتی سازگار باشد. برای نمونه، متن را در فیلد Data، تاریخ را در فیلد Date و رکورد پیوندشده را، در صورت مناسب‌بودن، در فیلد Link قرار دهید.
- Fetch From برای دریافت ساده و یک‌طرفه مناسب است. اگر مقدار به شرط‌های پیچیده، محاسبه یا چند به‌روزرسانی وابسته نیاز دارد، به‌جای آن Client Script بنویسید.
- اگر مقدار سند پیوندشده بعداً تغییر کند، ممکن است سندهای موجود خودکار به‌روز نشوند؛ مگر آنکه فیلد Link تغییر کند یا فرم طبق رفتار خودش دوباره بارگذاری و ذخیره شود.

## خطاهای رایج

- **استفاده از برچسب به‌جای نام فنی فیلد:** مقدار `customer.Customer Group` کار نمی‌کند؛ از `customer.customer_group` استفاده کنید.
- **استفاده از فیلد Link نادرست:** بخش اول باید نام فنی فیلد Link در فرم جاری باشد.
- **دریافت از فیلدی که وجود ندارد:** DocType پیوندشده را بررسی کنید تا نام فنی دقیق فیلد را بیابید.
- **انتظار منطق پیچیده:** Fetch From فقط یک مقدار را کپی می‌کند و جایگزین منطق کسب‌وکار یا اعتبارسنجی نیست.

## چه زمانی از Fetch From استفاده کنیم؟

از Fetch From استفاده کنید اگر:

- فیلدی باید مقداری را از Customer، Supplier، Item، Employee، Project یا رکورد پیوندشدهٔ دیگری نمایش دهد.
- مقدار صرفاً برای اطلاع‌رسانی است و باید با رکورد پیوندشدهٔ انتخاب‌شده هماهنگ باشد.
- می‌خواهید بدون کدنویسی و به‌جای Client Script آن را پیکربندی کنید.
- قاعدهٔ دریافت ساده است و به شرط یا محاسبه نیاز ندارد.

## موضوعات مرتبط

- [Customize Form](https://docs.frappe.io/erpnext/customize-form)
- [Custom Field](https://docs.frappe.io/erpnext/custom-field)
- [Client Script](https://docs.frappe.io/erpnext/customization/custom-scripts)
- [DocType](https://docs.frappe.io/framework/user/en/basics/doctypes)
- [Link Field](https://docs.frappe.io/framework/user/en/basics/doctypes/fieldtypes)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/guides-app-development/updating-a-field-from-a-linked-doctype). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
