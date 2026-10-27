---
title: "DocType چیست و چگونه ساخته می‌شود؟"
slug: "doctype"
source_url: "https://docs.frappe.io/erpnext/doctype"
source_id: "erpnext/doctype"
source_version: "a263a44bedae32c84f3f5e36fa8b9c7fe45446afd8a3ed8540fff1f61c16141c"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/doctype)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

**DocType** سازهٔ اصلی هر برنامه‌ای است که بر پایهٔ Frappe Framework ساخته شده باشد.

DocType مدل و نمای داده‌ها را توصیف می‌کند: مشخص می‌کند چه فیلدهایی برای داده ذخیره شوند، چگونه با یکدیگر رفتار کنند و داده‌ها چگونه نام‌گذاری شوند. فرم‌هایی مانند Sales Order، Sales Invoice و Work Order در بخش پشتی به‌صورت DocType تعریف می‌شوند.

DocType به شما اجازه می‌دهد فرم‌های سفارشی موردنیازتان را در ERPNext بسازید.

برای ایجاد DocType جدید، به مسیر زیر بروید:

> Setup > Customize > DocType > New

## 1. ایجاد DocType جدید

1. **Name:** نام DocType جدید را وارد کنید.
2. **Module:** ماژولی را تعیین کنید که DocType جدید به آن افزوده می‌شود.
3. سند را ذخیره کنید.

![DocType سفارشی](https://docs.frappe.io/files/doctype-employee-transfer.png)

### 1.1. جزئیات تکمیلی

1. **Fields:** هر تعداد فیلد لازم است اضافه کنید. Label، Field Type، اجباری‌بودن فیلد و گزینه‌های مرتبط دیگر نیز در این بخش تنظیم می‌شوند. برای آشنایی بیشتر با انواع فیلد، [راهنمای Field Types](/erpnext/field-types) را ببینید.

   ![فیلدهای DocType سفارشی](https://docs.frappe.io/files/doctype-employee-transfer-fields.png)

2. **Naming:** تعیین کنید فرم‌های این DocType به‌طور خودکار نام‌گذاری شوند یا خیر. می‌توانید الگوی نام‌گذاری فرم‌ها را از میان فیلدی در DocType، Naming Series، Prompt، Naming Series تعریف‌شده یا نام مبتنی بر Format انتخاب کنید. برای نام‌گذاری می‌توانید Description و حالت نوشتاری نام (Title Case یا UPPER CASE) را نیز تنظیم کنید.

   ![تنظیم نام‌گذاری DocType سفارشی](https://docs.frappe.io/files/doctype-employee-transfer-naming.png)

3. **Form Settings:** تنظیمات تکمیلی فرم، فیلد تصویر، پیوست‌ها و Timeline را می‌توان در این بخش پیکربندی کرد. برای اطلاعات بیشتر دربارهٔ فرم، [Customize Form](/erpnext/customize-form) را ببینید.

   ![تنظیمات فرم DocType سفارشی](https://docs.frappe.io/files/doctype-employee-transfer-form-settings.png)

4. **View Settings:** تنظیمات نما مانند فیلدهای جست‌وجو، فیلد مرتب‌سازی پیش‌فرض و ترتیب پیش‌فرض مرتب‌سازی را تعیین کنید.
5. **Permission Rules:** قواعد مجوز DocType را تعریف کنید و مشخص کنید کدام کاربران می‌توانند از آن استفاده کنند یا تغییرش دهند. برای اطلاعات بیشتر، [Users and Permissions](/erpnext/users-and-permissions) را ببینید.

   ![مجوزهای DocType سفارشی](https://docs.frappe.io/files/doctype-employee-transfer-permissions.png)

6. **Web View:** مشخص کنید این DocType نمای وب داشته باشد یا نه. با فعال‌کردن Web View، کاربران وب‌سایت می‌توانند به فرم‌های آن دسترسی داشته باشند. دربارهٔ [Website Users](/erpnext/difference-between-system-user-and-website-user) بیشتر بخوانید.

### 1.2. ویژگی‌های بیشتر

1. **Is Submittable:** با فعال یا غیرفعال‌کردن این گزینه مشخص کنید DocType فقط ذخیره شود یا امکان ثبت نهایی نیز داشته باشد.
2. **Is Child Table:** مشخص کنید DocType جدید درون DocType دیگری به‌عنوان جدول فرزند استفاده شود یا نه. برای اطلاعات بیشتر، [Child Table](/erpnext/customizing-data-visibility-in-child-table) را ببینید.
3. **Is Single:** با فعال‌کردن این گزینه، DocType به فرمی تکی تبدیل می‌شود که کاربر نمی‌تواند چند نمونه از آن بسازد. برای نمونه، Selling Settings در ماژول Sales یک DocType تکی است.
4. **Is Tree:** بعضی DocTypeها ساختار درختی دارند و شامل DocTypeهای والد و فرزند می‌شوند. برای نمونه، Company به‌شکل درختی سازمان‌دهی می‌شود و شرکت‌های والد می‌توانند شرکت‌های فرزند (شرکت‌های تابعه) داشته باشند. اگر همین ساختار را برای DocType خود می‌خواهید، این گزینه را فعال کنید.

   ![نمای درختی DocType](https://docs.frappe.io/files/doctype-treeview.png)

5. **Quick Entry:** تعیین کنید ورود سریع برای این DocType فعال باشد یا نه. در این حالت فقط چند مقدار اجباری وارد و ذخیره می‌شوند تا رکورد از راه Quick Entry ایجاد شود. برای نمونه، Quick Entry را در [Journal Entry](/erpnext/journal-entry#11-quick-entry) ببینید.
6. **Track Changes:** اگر می‌خواهید تغییرات هر فرم ثبت شوند، این گزینه را فعال کنید. برای آشنایی بیشتر، [Document Versioning](/erpnext/document-versioning) را ببینید.
7. **Track Seen:** اگر می‌خواهید فهرست کاربرانی که فرم را دیده‌اند ثبت شود، این گزینه را فعال کنید.
8. **Track Views:** اگر می‌خواهید همهٔ دفعات مشاهدهٔ فرم توسط هر کاربر ثبت شود، این گزینه را فعال کنید.

   ![تنظیم رهگیری مشاهده‌های DocType](https://docs.frappe.io/files/doctype-track-views.png)

9. **Custom?:** هنگام افزودن DocType سفارشی، این گزینه به‌طور پیش‌فرض فعال است. اگر DocTypeای را که از قبل در سیستم وجود دارد سفارشی‌سازی کنید، به‌طور پیش‌فرض غیرفعال خواهد بود.

## 2. ویدئوها

[مشاهدهٔ ویدئوی آموزشی DocType در YouTube](https://www.youtube.com/watch?v=WSzkpPm3iIU&t=585s)
