---
title: "مهاجرت‌های پایگاه داده"
slug: "migrations"
source_url: "https://docs.frappe.io/framework/user/en/guides/deployment/migrations"
source_id: "framework/user/en/guides/deployment/migrations"
source_version: "bf0c5ac9836110719bb937230a024b8054c1536ac667fb8bc89c7907dd4fc6f7"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

در طول عمر یک پروژه، معمولاً طرح‌وارهٔ پایگاه داده تغییر می‌کند. گاهی لازم است داده‌های موجود نیز با وصله اصلاح شوند. Frappe ابزارهایی برای مدیریت این وضعیت‌ها فراهم می‌کند.

پس از دریافت به‌روزرسانی هر برنامهٔ Frappe، از جمله خود Frappe، باید `bench migrate` را اجرا کنید تا تغییرهای طرح‌واره و در صورت وجود، مهاجرت‌های داده اعمال شوند.

## تغییرهای طرح‌واره

می‌توانید یک DocType را ویرایش کنید و فیلدهایی به آن بیفزایید، از آن حذف کنید یا تغییر دهید. با ذخیرهٔ DocType، فایل JSONای شامل داده‌های آن به درخت مبدأ برنامه افزوده می‌شود. هنگام افزودن برنامه به یک سایت، DocTypeها با استفاده از همین فایل JSON نصب می‌شوند. برای ایجاد تغییر در طرح‌واره، باید `developer_mode` را در پیکربندی فعال کنید.

هنگام همگام‌سازی با اجرای `bench migrate`، DocTypeهای سامانه با جدیدترین نسخه‌ای که در فایل‌های JSON برنامه‌ها قرار دارد همگام می‌شوند.

> **نکته:** فیلدها به‌صورت نرم حذف می‌شوند؛ یعنی ستون‌هایشان از جدول پایگاه داده برداشته نمی‌شود، اما دیگر در سندها دیده نمی‌شوند. این کار برای جلوگیری از ازدست‌رفتن احتمالی داده‌ها انجام می‌شود و امکان نوشتن مهاجرت‌های مرتبط با داده را فراهم می‌کند؛ این مهاجرت‌ها ممکن است به مقدارهای فیلد حذف‌شده نیاز داشته باشند.

> **نکته:** Frappe از مهاجرت معکوسِ طرح‌واره پشتیبانی نمی‌کند.

## مهاجرت داده‌ها

هنگام ایجاد تغییری مرتبط با داده، ممکن است بخواهید اسکریپتی یک‌باره اجرا کنید تا داده‌های موجود با انتظارهای کد تازه سازگار شوند.

برای افزودن مهاجرت داده به کد، تابع `execute` را در یک ماژول Python بنویسید و مسیر آن را به فایل `patches.txt` برنامه اضافه کنید. روش دیگر این است که با فرمان زیر، وصله‌ای تازه را به‌صورت تعاملی بسازید:

```text
$ bench create-patch
Select app for new patch (frappe, hrms, ecommerce_integrations, erpnext): frappe
Provide DocType name on which this patch will apply: User
Describe what this patch does: Improve Indexing
Provide filename for this patch [improve_indexing.py]:
Patch folder '/home/ankush/benches/develop/apps/frappe/frappe/core/doctype/user/patches' doesn't exist, create it? [Y/n]: y
Created /home/ankush/benches/develop/apps/frappe/frappe/core/doctype/user/patches/improve_indexing.py and updated patches.txt
```

متن promptهای خروجی خط فرمان در نمونه عیناً حفظ شده است. معنای آن‌ها به‌ترتیب چنین است: انتخاب برنامه، واردکردن نام DocType، شرح کار وصله و تعیین نام فایل وصله.

توصیه می‌شود فایل وصله را در بسته‌ای به نام `patches` در برنامه قرار دهید و شماره و نام وصله را در مسیر آن بیاورید. سپس مسیر نقطه‌ای ماژول وصله را به `patches.txt` اضافه کنید.

ساختار پوشه‌ها در Frappe به این شکل است:

```text
frappe
└── patches
    └── 4_0
        └── my_awesome_patch.py
```

برای افزودن وصله به `patches.txt`، خطی مانند زیر اضافه کنید:

```text
frappe.patches.4_0.my_awesome_patch
```

فراداده، از جمله DocTypeای که در تابع `execute` در دسترس است، جدیدترین نسخهٔ موجود در فایل‌های JSON برنامه‌ها خواهد بود. بااین‌حال، به فرادادهٔ هیچ‌یک از وضعیت‌های پیشین سامانه دسترسی نخواهید داشت.

#### دستورهای یک‌بارهٔ Python

می‌توانید با این نگارش، دستورهای یک‌بارهٔ Python را نیز در `patches.txt` قرار دهید:

```text
execute:{python statement}
```

برای نمونه:

```python
execute:frappe.get_doc("User", "Guest").save()
```

> **نکته:** همهٔ خط‌های `patches.txt` باید یکتا باشند. اگر لازم است خطی را دوباره اجرا کنید، با افزودن توضیحی یکتا آن را از خط قبلی متمایز کنید.

برای نمونه:

```python
execute:frappe.installer.make_site_dirs() #2014-02-19
```

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مهاجرت‌های پایگاه داده](https://docs.frappe.io/framework/user/en/guides/deployment/migrations). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
