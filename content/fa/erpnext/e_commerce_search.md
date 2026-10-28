---
title: "جست‌وجو در فروشگاه اینترنتی"
slug: "e_commerce_search"
source_url: "https://docs.frappe.io/erpnext/e_commerce_search"
source_id: "erpnext/e_commerce_search"
source_version: "55b4206177ea1df836a69dc8da6a1ef521339943850ac8dc0461093226525646"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [جست‌وجو در فروشگاه اینترنتی](https://docs.frappe.io/erpnext/e_commerce_search)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

در همهٔ صفحه‌های فهرست محصولات، **Search bar** وجود دارد تا کاربران بتوانند محصولات وب‌سایت یا گروه‌های کالا را سریع جست‌وجو کنند. جست‌وجوهای اخیر نیز ذخیره می‌شوند و با انتخاب هرکدام می‌توان دوباره همان جست‌وجو را اجرا کرد.

![جست‌وجوی فروشگاه اینترنتی](https://docs.frappe.io/files/e-commerce-search.png)

## RediSearch

> **آزمایشی:** به Redis 6 یا بالاتر نیاز دارد.

ERPNext به‌طور پیش‌فرض جست‌وجوی ساده‌ای در پایگاه داده انجام می‌دهد؛ اما در صورت تمایل می‌توانید به‌جای آن از [RediSearch](https://redis.com/modules/redis-search/) برای جست‌وجوی بسیار سریع استفاده کنید. برای نصب، به [مستندات نصب RediSearch در ERPNext](https://docs.frappe.io/erpnext/installing_redisearch_to_enable_super_fast_e_commerce_search) مراجعه کنید.

به **E Commerce Settings > کالا Search Settings** بروید و **Enable Redisearch** را علامت بزنید.

![تنظیمات جست‌وجوی کالا با RediSearch فعال](https://docs.frappe.io/files/item-search-settings-enabled.png)

#### تنظیمات در نبود RediSearch

اگر RediSearch نصب نشده باشد، **کالا Search Settings** چنین نمایش داده می‌شود:

![تنظیمات جست‌وجوی کالا بدون RediSearch](https://docs.frappe.io/files/item-search-settings.png)

#### فیلدهای قابل‌تنظیم

علاوه بر جست‌وجوی سریع، می‌توانید فیلدهایی را تعیین کنید که جست‌وجو در آن‌ها انجام شود. نام فیلدها را با کاما در کادر متنی **فیلدهای نمایهٔ جست‌وجو** وارد کنید تا قابل جست‌وجو شوند.

برای نمونه، اگر **brand** را به این فهرست اضافه کنید، می‌توان بر اساس برند جست‌وجو کرد. با واردکردن نام برندی مانند **Apple**، نتیجه‌هایی که مقدار فیلد brand آن‌ها Apple است نمایش داده می‌شوند.

نتایج بر اساس مقدارهای همهٔ فیلدهای واردشده در **فیلدهای نمایهٔ جست‌وجو** به دست می‌آیند.

> فیلدهایی از نوع‌های زیر پشتیبانی می‌شوند: **پیوند**، **جدول MultiSelect**، **داده‌ها**، **متن کوتاه** و **ویرایشگر متن**.
