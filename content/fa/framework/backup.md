---
title: "تهیهٔ نسخهٔ پشتیبان (bench backup)"
slug: "backup"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/backup"
source_id: "framework/user/en/bench/reference/backup"
source_version: "da047298e05da0a9a16ad8159e2be133f69ca9c9b4401732faca59e96d90f485"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench backup [OPTIONS]
```

## توضیح

برای سایت‌های مشخص‌شده نسخهٔ پشتیبان تهیه می‌کند. اجرای معمولی فرمان از پایگاه داده خروجی می‌گیرد، آن را فشرده می‌کند و در مسیر پیش‌فرض `./sites/{site}/private/backups` ذخیره می‌کند.

اگر سایت جاری از قبل تعیین شده باشد، با اجرای سادهٔ `bench backup` از همان سایت نسخهٔ پشتیبان گرفته می‌شود.

## گزینه‌ها

- `--backup-path`: مسیر ذخیرهٔ همهٔ فایل‌های این عملیات را تعیین می‌کند.
- `--backup-path-db`: مسیر ذخیرهٔ فایل پایگاه داده را تعیین می‌کند.
- `--backup-path-conf`: مسیر ذخیرهٔ فایل پیکربندی را تعیین می‌کند.
- `--backup-path-files`: مسیر ذخیرهٔ فایل‌های عمومی را تعیین می‌کند.
- `--backup-path-private-files`: مسیر ذخیرهٔ فایل‌های خصوصی را تعیین می‌کند.
- `--exclude`، `-e`: DocTypeهایی را که نباید پشتیبان‌گیری شوند، با کاما از هم جدا کنید.
- `--only`، `--include`، `-i`: DocTypeهایی را که باید پشتیبان‌گیری شوند، با کاما از هم جدا کنید.

## پرچم‌ها

- `--ignore-backup-conf`: محدودیت‌های include و exclude تنظیم‌شده در پیکربندی را نادیده می‌گیرد.
- `--with-files`: فایل‌های عمومی و خصوصی را نیز همراه نسخهٔ پشتیبان می‌گیرد.
- `--compress`: فایل‌های عمومی و خصوصی را فشرده می‌کند.
- `--verbose`: جزئیات بیشتری از مراحل اجرا نمایش می‌دهد.

## نمونه‌ها

1. تهیهٔ نسخهٔ پشتیبان همراه فایل‌های عمومی و خصوصی سایت:

   ```bash
   bench --site {site} backup --with-files
   ```

2. در صورت نیاز، فشرده‌کردن فایل‌های عمومی و خصوصی. در این حالت فایل با قالب `tgz` ذخیره می‌شود، نه قالب پیش‌فرض `tar`:

   ```bash
   bench --site {site} backup --with-files --compress
   ```

3. تغییر مسیر ذخیرهٔ فایل‌های پشتیبان:

   ```bash
   bench --site {site} backup --backup-path {backup_path}
   ```

4. تغییر مسیر ذخیرهٔ یک فایل پشتیبان مشخص. هر مسیری که تعیین نکنید، در مسیر پیش‌فرض ذخیره می‌شود:

   ```bash
   bench --site {site} backup --with-files
      --backup-path-conf {conf_path}
      --backup-path-db {db_path}
      --backup-path-files {files_path}
      --backup-path-private-files {private_path}
   ```

5. نمایش جزئیات مرحله‌های مختلفی که در رابط خط فرمان Bench اجرا می‌شوند:

   ```bash
   bench --site {site} backup --verbose
   ```

6. پشتیبان‌گیری فقط از DocTypeهای مشخص‌شده:

   ```bash
   bench --site {site} backup --only 'ToDo,Note,Task,Project,Sales Invoice'
   ```

7. پشتیبان‌گیری از همهٔ جدول‌ها به‌جز DocTypeهای مشخص‌شده:

   ```bash
   bench --site {site} backup --exclude 'Error Log,Access Log,Activity Log,Version'
   ```

8. پشتیبان‌گیری کامل از سایت با نادیده‌گرفتن مقدارهای `frappe.conf.backup.*`، در صورت تنظیم‌شدن:

   ```bash
   bench --site {site} backup --ignore-backup-conf
   ```

اگر فرایند پشتیبان‌گیری با استثنا یا خطا شکست بخورد، فایل‌های ایجادشده حذف می‌شوند تا فضای دیسک بیهوده مصرف نشود.

منبع: [تهیهٔ نسخهٔ پشتیبان با Bench](https://docs.frappe.io/framework/user/en/bench/reference/backup). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
