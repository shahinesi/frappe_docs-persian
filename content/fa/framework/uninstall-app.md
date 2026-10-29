---
title: "حذف برنامه از سایت (bench uninstall-app)"
slug: "uninstall-app"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/uninstall-app"
source_id: "framework/user/en/bench/reference/uninstall-app"
source_version: "fd2c245185e2fd9e4cda862ee2f0b93a23894c759d9e7532d7d9b5ccf9e3b244"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench uninstall-app [OPTIONS] APP
```

## توضیح

برنامه و DocTypeها و ماژول‌های پیوندخورده به آن را از سایت حذف می‌کند. اجرای معمولی فرمان پیش از حذف ماژول‌ها و DocTypeها بررسی می‌کند که برنامه در سایت وجود داشته باشد. برای اجرای فرمان `uninstall-app` لازم نیست برنامه حتماً روی Bench نصب شده باشد.

> **هشدار:** حذف برنامه می‌تواند DocTypeها و ماژول‌های مربوط به آن را از سایت پاک کند. پیش از تأیید عملیات، مواردی را که قرار است حذف شوند بررسی و از سایت نسخهٔ پشتیبان تهیه کنید.

## گزینه‌ها

- `-y`، `--yes`: درخواست تأیید پیش از حذف برنامه را رد می‌کند.
- `--dry-run`: فهرست DocTypeهایی را نشان می‌دهد که حذف خواهند شد.
- `--no-backup`: از سایت نسخهٔ پشتیبان تهیه نمی‌کند.
- `--force`: برنامه را به‌زور از سایت حذف می‌کند.

## نمونه‌ها

1. پیش‌نمایش نتیجهٔ اجرای فرمان روی یک سایت مشخص:

   ```bash
   bench --site {site} uninstall-app {app} --dry-run
   ```

2. حذف برنامه بدون تهیهٔ نسخهٔ پشتیبان:

   ```bash
   bench --site {site} uninstall-app {app} --no-backup
   ```

3. حذف اجباری برنامه از سایت:

   ```bash
   bench --site {site} uninstall-app {app} --force
   ```

4. حذف برنامه بدون درخواست تأیید تعاملی:

   ```bash
   bench --site {site} uninstall-app {app} --yes
   ```

منبع: [حذف برنامه از سایت](https://docs.frappe.io/framework/user/en/bench/reference/uninstall-app). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
