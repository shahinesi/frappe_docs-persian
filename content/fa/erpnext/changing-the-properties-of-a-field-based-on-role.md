---
title: "مدیریت مجوز سطح فیلد بر پایهٔ نقش"
slug: "changing-the-properties-of-a-field-based-on-role"
source_url: "https://docs.frappe.io/erpnext/changing-the-properties-of-a-field-based-on-role"
source_id: "erpnext/changing-the-properties-of-a-field-based-on-role"
source_version: "567289a3f8f92f23de2cddeff154c19b5afb0f67d94deb28f1767cf260e08c7e"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

محدودکردن دسترسی به یک فیلد بر اساس نقش را می‌توان با **Perm Level** پیکربندی کرد؛ قابلیتی که بیشتر سازمان‌ها به آن نیاز دارند. برای تعیین Perm Level، فرم مربوطه را باز و آن را با Customize Form سفارشی کنید.

فرض کنید سازمان نمی‌خواهد کارمند دارای نقش **Accounts User** هنگام ساخت **Sales Invoice** بتواند **Item Rate** را ویرایش کند. برای این کار، می‌توان فیلد **Item Rate** را فقط‌خواندنی کرد.

#### مرحلهٔ 1: سفارشی‌سازی فرم

برای این کار، **Customize Form** را باز کنید، در **DocType** مقدار **Sales Invoice Item** را انتخاب کنید، به فیلد **Item Rate** بروید و بخش آن را باز کنید.

![بازکردن تنظیمات Item Rate در Customize Form](/files/6eFVMRc.gif)

#### مرحلهٔ 2: تعیین Perm Level

فیلد **Perm Level** را پیدا کنید، عدد موردنظر (0، 1، 2، 3 و مانند آن) را وارد کنید و ذخیره کنید.

![تنظیم سطح مجوز فیلد](/files/6VNnxII.png)

#### مرحلهٔ 3: تعریف قاعدهٔ مجوز

پس از ذخیره، در **Role Permission Manager** روی **Add a New Rule** کلیک کنید و Document Type و Role را انتخاب کنید؛ در این مثال، **Accounts User**. مقدار Perm Level را روی 2 بگذارید و برای کارمند دسترسی **Read** اعطا کنید.

![افزودن قاعدهٔ مجوز برای نقش](/files/jACnHrX.png)

پس از ساخت قاعده‌ای با Perm Level برابر 2، Role Permissions Manager آن را به این شکل نمایش می‌دهد:

![قاعدهٔ جدید در Role Permissions Manager](/files/qCYWDfK.png)

#### مرحلهٔ 4: بررسی نما

اکنون در Sales Invoice، کاربر می‌تواند فیلد Item Rate را فقط بخواند؛ مقدار این فیلد به‌طور خودکار از Price List دریافت می‌شود.

![نمای Item Rate به‌صورت فقط‌خواندنی در Sales Invoice](/files/86CqBf1.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/changing-the-properties-of-a-field-based-on-role). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
