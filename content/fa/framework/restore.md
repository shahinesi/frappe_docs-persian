---
title: "بازیابی سایت از نسخهٔ پشتیبان (bench restore)"
slug: "restore"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/restore"
source_id: "framework/user/en/bench/reference/restore"
source_version: "075dcfbc49db3582aea61200a8fd442ffe7a378370285e446a7ea9a368dc91f4"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench restore [OPTIONS] SQL_FILE_PATH
```

## توضیح

از رابط خط فرمان Bench می‌توانید برای بازگرداندن یک سایت موجود به وضعیت پیشین استفاده کنید. فرمان `bench restore` سایت را از پایگاه داده و فایل‌های پشتیبان مشخص‌شده بازیابی می‌کند. پایین‌آوردن نسخه برای سایت‌های Frappe پشتیبانی نمی‌شود؛ اگر چنین چیزی تشخیص داده شود، پیش از آغاز بازیابی پیامی تعاملی برای تأیید نمایش داده می‌شود.

حداقل شرط بازیابی، داشتن فایل پایگاه داده در سیستم فایل محلی است. مسیر فایل می‌تواند نسبت به پوشهٔ Bench یا `sites` باشد، اما معمولاً استفاده از مسیر مطلق مطمئن‌تر است.

پسوند فایل پشتیبان پایگاه داده می‌تواند `sql.gz` یا `sql` باشد. آرشیوهای فایل‌های عمومی و خصوصی به‌طور پیش‌فرض با قالب `tar` هستند؛ از نسخهٔ 13، آرشیوهای فشرده با پسوند `tgz` نیز پشتیبانی می‌شوند.

> **توجه:** این فرمان امکان بازیابی فایل‌ها به‌تنهایی را ندارد.

## آرگومان‌ها

- `SQL_FILE_PATH`: مسیر فایل منبع پایگاه داده. مسیر می‌تواند نسبت به ریشهٔ پوشهٔ Bench یا پوشهٔ `sites` باشد، یا به‌صورت مسیر مطلق وارد شود. برای آشنایی با مسیرهای نسبی و مطلق، [مدخل مسیر مطلق و نسبی در ویکی‌پدیا](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) را ببینید.

## گزینه‌ها

- `--db-root-username`: نام کاربری ریشه برای MariaDB یا PostgreSQL
- `--db-root-password`: گذرواژهٔ کاربر ریشه برای MariaDB یا PostgreSQL
- `--db-name`: نام پایگاه دادهٔ سایت، اگر سایت تازه باشد
- `--admin-password`: گذرواژهٔ مدیر برای سایت تازه
- `--install-app`: نصب برنامه پس از پایان بازیابی
- `--with-public-files`: بازیابی فایل‌های عمومی سایت از آرشیو مشخص‌شده
- `--with-private-files`: بازیابی فایل‌های خصوصی سایت از آرشیو مشخص‌شده

## پرچم‌ها

- `--force`: در صورت لزوم هشدار پایین‌آوردن نسخه را نادیده می‌گیرد. اگر از پیامدهای آن کاملاً آگاه نیستید، استفاده از این گزینه **توصیه نمی‌شود**.

## نمونه‌ها

1. بازیابی سایت همراه فایل‌ها:

   ```bash
   bench --site {site} restore {path/to/database/file}
   --with-public-files {path/to/public/archive}
   --with-private-files {path/to/private/archive}
   ```

2. ردکردن درخواست تعاملی اطلاعات ریشهٔ DBMS با تعیین مقدار گزینه‌ها:

   ```bash
   bench --site {site} restore {path/to/database/file}
   --db-root-username {db-user}
   --db-root-password {db-pass}
   ```

3. تعیین برنامه‌ای برای نصب پس از بازیابی سایت:

   ```bash
   bench --site {site} restore {path/to/database/file}
   --install-app {app}
   ```

4. تعیین نام سفارشی پایگاه داده برای سایت بازیابی‌شده:

   ```bash
   bench --site {site} restore {path/to/database/file}
   --db-name {custom-db-name}
   ```

5. بازنشانی گذرواژهٔ مدیر سایت بازیابی‌شده:

   ```bash
   bench --site {site} restore {path/to/database/file}
   --admin-password {admin-pass}
   ```

منبع: [بازیابی سایت از نسخهٔ پشتیبان](https://docs.frappe.io/framework/user/en/bench/reference/restore). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
