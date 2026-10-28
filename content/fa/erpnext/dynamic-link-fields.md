---
title: "فیلدهای پیوند پویا (Dynamic Link)"
slug: "dynamic-link-fields"
source_url: "https://docs.frappe.io/erpnext/dynamic-link-fields"
source_id: "erpnext/dynamic-link-fields"
source_version: "326efc16f8774543af41a2d1acfe85b93464114d31db924cb2729afc663d4e74"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/dynamic-link-fields)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها و تصویرهای متحرک در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

فیلد **Dynamic Link** می‌تواند مقدار مربوط به هر DocType را جست‌وجو و نگه‌داری کند. برای آشنایی با کارکرد آن، این مثال را در نظر بگیرید.

هنگام ایجاد فرصت فروش یا پیش‌فاکتور، باید مشخص کنیم که سند برای یک سرنخ است یا یک مشتری. بر اساس انتخاب (سرنخ یا مشتری)، فیلد پیوند دیگری ظاهر می‌شود تا سرنخ یا مشتری مشخص را انتخاب کنیم.

اگر فیلد دوم، یعنی فیلدی که سرنخ یا مشتری مشخص را در آن انتخاب می‌کنیم، از نوع Dynamic Link باشد، به‌طور خودکار به رکوردِ DocType انتخاب‌شده در فیلد نخست (یعنی Leads یا Customers) پیوند می‌خورد. در نتیجه، لازم نیست برای مشتری و سرنخ فیلدهای پیوند جداگانه بسازیم.

مراحل زیر برای افزودن یک فیلد پویا به‌صورت سفارشی است. در این نمونه، Dynamic Link را به ثبت در دفتر روزنامه اضافه می‌کنیم.

#### گام 1: افزودن فیلد Link برای DocType

ابتدا فیلد Linkای می‌سازیم که به DocType پیوند داشته باشد.

![فیلد Link سفارشی](https://docs.frappe.io/files/customize-dynamic-link-1.gif)

در این مثال، منظور از **DocType** در فیلد Option، DocType والد است. برای نمونه، پیش‌فاکتور یک DocType است و چندین پیش‌فاکتور به‌صورت رکوردهای آن وجود دارند. به همین ترتیب، DocType نیز یک DocType است که رکوردهای DocType دیگری مانند سفارش فروش، سفارش خرید و موارد دیگر را در خود نگه می‌دارد.

برخی از DocTypeها:

- سفارش فروش
- فاکتور خرید
- پیش‌فاکتور
- فاکتور فروش
- کارمند
- دستور کار
- و موارد دیگر

وقتی این فیلد را به DocType والد پیوند دهید، فهرست رکوردهای DocType برای انتخاب نمایش داده می‌شود.

![فیلد Link در Journal Voucher](https://docs.frappe.io/files/customize-dynamic-link.png)

#### گام 2: افزودن فیلد Dynamic Link

نوع این Custom فیلد را **Dynamic Link** قرار دهید. در فیلد Option، نام فیلد DocType Link را وارد کنید.

![فیلد Dynamic سفارشی](https://docs.frappe.io/files/customize-dynamic-link-2.gif)

این فیلد اجازه می‌دهد شناسهٔ سندی را انتخاب کنید که نوع آن بر اساس مقدار انتخاب‌شده در فیلد DocType Link تعیین می‌شود. برای نمونه، اگر در فیلد قبلی سفارش فروش را انتخاب کنیم، فیلد Dynamic Link شناسه‌های سفارش فروش را برای انتخاب نمایش می‌دهد.

![انتخاب شناسهٔ سند در فیلد Dynamic Link](https://docs.frappe.io/files/customize-dynamic-link-3.gif)

**سفارشی‌کردن گزینه‌های فیلد DocType Link**

به‌طور پیش‌فرض، فیلد DocType Link همهٔ فرم‌ها و DocTypeها را برای انتخاب نمایش می‌دهد. اگر می‌خواهید در نتایج جست‌وجوی این فیلد فقط DocTypeهای مشخصی دیده شوند، باید برای آن Custom Script بنویسید.
