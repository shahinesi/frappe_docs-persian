---
title: "تغییر تنظیمات جدول‌های پایگاه داده (bench transform-database)"
slug: "transform-database"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/transform-database"
source_id: "framework/user/en/bench/reference/transform-database"
source_version: "0814600bbea269c8c6145c9b13fe46ce3f269cbd179a914d0a6d983dc8445b16"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این فرمان در نسخهٔ 14 افزوده شد و فقط از MariaDB پشتیبانی می‌کند.

## کاربرد

```text
bench transform-database [OPTIONS] table
```

## توضیح

فرمان `transform-database` به شما امکان می‌دهد تنظیمات جدول‌های سایت را مدیریت کنید. در حال حاضر می‌توانید موتور پایگاه داده و قالب سطر را برای جدول‌های انتخاب‌شده در پایگاه دادهٔ سایت تغییر دهید.

> MariaDB 10.6 قالب سطر فشرده (`COMPRESSED`) را که مدت زیادی گزینهٔ پیش‌فرض Frappe بود، منسوخ کرد. این فرمان برای مدیریت ارتقا به نسخه‌های جدیدتر MariaDB افزوده شد. جزئیات بیشتر را در [درخواست تغییر 13954 در مخزن Frappe](https://github.com/frappe/frappe/pull/13954) ببینید.

## گزینه‌ها

- `--table`: نام جدول‌ها را با کاما از هم جدا کنید. برای تبدیل همهٔ جدول‌ها، مقدار `all` را بدهید. **این گزینه الزامی است.**
- `--engine`: موتور ذخیره‌سازی جدول‌ها را انتخاب می‌کند. گزینه‌ها `InnoDB` و `MyISAM` هستند.
- `--row_format`: پارامتر `ROW_FORMAT` را برای جدول‌ها تنظیم می‌کند. گزینه‌ها `DYNAMIC`، `COMPACT`، `REDUNDANT` و `COMPRESSED` هستند.

## پرچم‌ها

- `failfast`: با رخ‌دادن نخستین خطا، فرمان را متوقف می‌کند.

## نمونه‌ها

1. فرض کنید می‌خواهید موتور جدول `tabAccess Record` را به `MyISAM` تغییر دهید. این کار ممکن است برای جدول گزارش‌گیری مناسبی باشد که نوشتن‌های بسیار و خواندن‌های اندکی دارد:

   ```bash
   bench --site {site} transform-database --table 'tabAccess Record' --engine 'MyISAM'
   ```

2. اگر MariaDB سرور را از نسخهٔ 10.3 به 10.7 ارتقا داده‌اید و می‌خواهید قالب سطر جدول‌هایی را که از `COMPRESSED` استفاده می‌کنند به مقدار پیش‌فرض جدید، یعنی `DYNAMIC`، تغییر دهید، این فرمان را اجرا کنید:

   ```bash
   bench --site {site} transform-database --table 'all' --row_format 'DYNAMIC'
   ```

منبع: [تغییر تنظیمات جدول‌های پایگاه داده](https://docs.frappe.io/framework/user/en/bench/reference/transform-database). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
