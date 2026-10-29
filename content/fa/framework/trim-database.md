---
title: "پاک‌سازی جدول‌های اضافی پایگاه داده (bench trim-database)"
slug: "trim-database"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/trim-database"
source_id: "framework/user/en/bench/reference/trim-database"
source_version: "6eac002b9675e62354f480f75db62a10962395dc9496f1ffee20aec0fd553dd8"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench trim-database [OPTIONS]
```

## توضیح

حذف DocTypeها از نمای فهرست ممکن است جدول‌های متناظر آن‌ها را از پایگاه داده پاک نکند. گاهی مهاجرت‌ها نیز جدول‌های یتیم در پایگاه دادهٔ سایت باقی می‌گذارند. این جدول‌ها ممکن است برای افزونگی یا بازیابی اطلاعات پس از خرابی یا ازدست‌رفتن داده نگه داشته شده باشند، یا باقی‌ماندنشان نتیجهٔ خطای انسانی باشد.

این فرمان جدول‌هایی را که به نظر می‌رسد از چنین مواردی باقی مانده‌اند حذف می‌کند. پیش از حذف، تلاش می‌کند از جدول‌ها نسخهٔ پشتیبان جزئی بگیرد. اگر جدولی به اشتباه حذف شد و به آن نیاز داشتید، می‌توانید آن را با [بازیابی بخشی](partial-restore.md) به پایگاه دادهٔ سایت برگردانید.

> **هشدار:** این فرمان جدول‌ها را از پایگاه داده حذف می‌کند. پیش از اجرای واقعی، با گزینهٔ `--dry-run` مواردی را که حذف می‌شوند بررسی کنید.

## گزینه‌ها

- `--format`، `-f`: قالب خروجی را تعیین می‌کند. گزینه‌های موجود JSON و جدول هستند؛ مقدار پیش‌فرض جدول است.

## پرچم‌ها

- `--dry-run`: مواردی را که حذف می‌شدند نشان می‌دهد، بی‌آنکه حذفشان کند.
- `--no-backup`: پیش از پاک‌سازی از سایت نسخهٔ پشتیبان نمی‌گیرد.

## نمونه‌ها

1. برای دیدن داده‌هایی که فرمان حذف خواهد کرد، از `--dry-run` استفاده کنید:

   ```bash
   bench --site {site} trim-database --dry-run
   ```

2. اگر می‌خواهید خروجی را در برنامه‌ای دیگر و به‌شکل قابل‌پردازش ماشینی استفاده کنید، قالب را روی JSON بگذارید:

   ```bash
   bench --site {site} trim-database --format json
   ```

منبع: [پاک‌سازی جدول‌های اضافی پایگاه داده](https://docs.frappe.io/framework/user/en/bench/reference/trim-database). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
