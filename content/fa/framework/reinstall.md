---
title: "نصب دوبارهٔ سایت (bench reinstall)"
slug: "reinstall"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/reinstall"
source_id: "framework/user/en/bench/reference/reinstall"
source_version: "13ec3a1d9dc60df4c4d7382918a7974ca02944b63debfcd1618402c2713f1f7f"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench reinstall [OPTIONS]
```

## توضیح

سایت را با برنامه‌های فعلی دوباره نصب می‌کند. این فرمان همهٔ داده‌های سایت را پاک می‌کند و آن را از نو راه می‌اندازد. چون این عملیات مخرب است، به‌طور پیش‌فرض پیش از اجرا تأیید تعاملی می‌گیرد.

> **توجه:** این قابلیت فعلاً فقط برای سایت‌های MariaDB وجود دارد. ممکن است در آینده پشتیبانی از PostgreSQL نیز به آن افزوده شود.

## گزینه‌ها

- `--admin-password`: گذرواژهٔ مدیر برای سایتِ نصب‌شدهٔ دوباره
- `--mariadb-root-username`: نام کاربری ریشه در MariaDB
- `--mariadb-root-password`: گذرواژهٔ ریشه در MariaDB

## پرچم‌ها

- `--yes`: تأیید را رد می‌کند و نصب دوباره را بی‌درنگ اجرا می‌کند.

## نمونه‌ها

1. نصب دوبارهٔ سایت بدون درخواست تأیید، گذرواژهٔ ریشهٔ MariaDB یا گذرواژهٔ مدیر:

   ```bash
   bench reinstall --site {site} --yes --mariadb-root-password {db-pass} --admin-password {admin-pass}
   ```

2. نصب دوبارهٔ سایت با کاربر جایگزینی که دسترسی *DBMS SUPER* دارد:

   ```bash
   bench reinstall --mariadb-root-username {db-user} --mariadb-root-password {db-pass}
   ```

منبع: [نصب دوبارهٔ سایت](https://docs.frappe.io/framework/user/en/bench/reference/reinstall). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
