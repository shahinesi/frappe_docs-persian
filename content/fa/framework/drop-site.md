---
title: "حذف سایت (bench drop-site)"
slug: "drop-site"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/drop-site"
source_id: "framework/user/en/bench/reference/drop-site"
source_version: "b1955c24720e57bd20fba1cee5ffde64a4cd09ed0c7cf362ad928253238f7f9e"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench drop-site [OPTIONS] SITE
```

## توضیح

یک سایت موجود را حذف می‌کند. در این عملیات، پایگاه داده حذف می‌شود و پوشهٔ سایت از `./sites` به `./archived_sites` در Bench منتقل می‌شود؛ مگر آنکه مسیر دیگری مشخص کنید. پیش از حذف، یک نسخهٔ پشتیبان کامل از سایت تهیه می‌شود.

> **هشدار:** این فرمان پایگاه داده را حذف می‌کند. پیش از اجرا، از داشتن نسخهٔ پشتیبانِ قابل‌بازیابی مطمئن شوید.

## گزینه‌ها

- `--db-root-username`: نام کاربری DBMS با مجوز حذف پایگاه داده؛ مقدار پیش‌فرض `root` است.
- `--db-root-password`: گذرواژهٔ کاربر DBMS.
- `--archived-sites-path`: مسیر مقصد برای انتقال پوشهٔ سایت.

## پرچم‌ها

- `--no-backup`: تهیهٔ نسخهٔ پشتیبان پیش از حذف سایت را رد می‌کند.
- `--force`: حذف سایت را حتی در صورت بروز خطا به‌زور ادامه می‌دهد.

## نمونه‌ها

1. با واردکردن گذرواژهٔ کاربر ریشه، از درخواست تعاملی صرف‌نظر کنید:

   ```bash
   bench drop-site {site} --db-root-password {db-root-pass}
   ```

2. حذف سایت بدون تهیهٔ نسخهٔ پشتیبان:

   ```bash
   bench drop-site {site} --no-backup
   ```

3. انتقال پوشهٔ سایت به مسیری غیر از `./archived_sites`:

   ```bash
   bench drop-site {site} --archived-sites-path {path/to/archive}
   ```

منبع: [حذف سایت](https://docs.frappe.io/framework/user/en/bench/reference/drop-site). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
