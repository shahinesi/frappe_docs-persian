---
title: "ساخت سایت تازه (bench new-site)"
slug: "new-site"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/new-site"
source_id: "framework/user/en/bench/reference/new-site"
source_version: "a8d12a2ab1142c3bc48ba91fcd54af71b594520ee7d55dfbfd29d2c859047284"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench new-site [OPTIONS] SITE
```

## توضیح

یک سایت تازهٔ Frappe می‌سازد. این عملیات پوشه‌ای تازه در `./sites` ایجاد می‌کند که اطلاعات سایت را در خود نگه می‌دارد و در DBMS نیز پایگاه داده‌ای تازه می‌سازد و همهٔ ماژول‌ها و DocTypeهای Frappe را در آن نصب می‌کند.

پیکربندی سایت در `./sites/{site}/site_config.json` قرار دارد و وضعیت سایت را نگه می‌دارد. برای اطلاعات بیشتر، [معرفی](https://docs.frappe.io/framework/introduction) را ببینید.

اگر ساخت سایت به هر دلیلی شکست بخورد، از شما پرسیده می‌شود که آیا تغییرات انجام‌شده بازگردانده شوند یا نه. بازگردانی شامل حذف پوشهٔ سایت، پایگاه داده و کاربر پایگاه داده‌ای است که در این عملیات ساخته شده‌اند.

## گزینه‌ها

- `--db-name`: نام پایگاه دادهٔ سایت تازه را تعیین می‌کند. اگر نام کاربری جداگانه‌ای مشخص نشود، همین مقدار برای نام کاربری پایگاه داده هم استفاده می‌شود.
- `--db-user`: از نسخهٔ 16 به بعد، نام کاربری پایگاه داده را تعیین می‌کند یا ترکیب نام کاربری و گذرواژهٔ کاربر موجود را می‌پذیرد.
- `--db-password`: گذرواژهٔ پایگاه دادهٔ تازه یا گذرواژهٔ کاربر موجودِ مشخص‌شده را تعیین می‌کند.
- `--db-type`: نوع پایگاه داده را انتخاب می‌کند؛ مقدارهای ممکن `postgres` و `mariadb` هستند. مقدار پیش‌فرض `mariadb` است.
- `--db-host`: میزبان پایگاه دادهٔ سایت را تعیین می‌کند.
- `--db-port`: درگاه پایگاه دادهٔ سایت را تعیین می‌کند.
- `--db-root-username`: نام کاربری ریشه برای MariaDB یا PostgreSQL را مشخص می‌کند.
- `--db-root-password`: گذرواژهٔ کاربر ریشه برای MariaDB یا PostgreSQL را مشخص می‌کند.
- `--admin-password`: گذرواژهٔ مدیر سایت تازه را تعیین می‌کند.
- `--source_sql`: پایگاه داده را با یک فایل SQL مقداردهی اولیه می‌کند.
- `--install-app`: پس از نصب سایت، برنامهٔ مشخص‌شده را نصب می‌کند.

## پرچم‌ها

- `--no-mariadb-socket`: میزبان MariaDB را روی `%` می‌گذارد و به‌جای سوکت UNIX از اتصال TCP/IP استفاده می‌کند.
- `--verbose`: جزئیات بیشتری نمایش می‌دهد.
- `--force`: بازیابی را با وجود موجودبودن سایت یا پایگاه داده‌ای هم‌نام ادامه می‌دهد.

## نمونه‌ها

1. ساخت سایت تازه:

   ```bash
   bench new-site {site}
   ```

2. ساخت سایت تازه با PostgreSQL:

   ```bash
   bench new-site {site} --db-type postgres
   ```

3. ساخت سایت بدون درخواست تعاملی برای گذرواژهٔ مدیر سایت و گذرواژهٔ ریشهٔ MariaDB:

   ```bash
   bench new-site {site}
      --admin-password {admin-password}
      --db-root-password {mariadb-password}
   ```

4. ساخت سایت با مقدارهای غیراستاندارد یا تولیدشده برای پایگاه داده:

   ```bash
   bench new-site {site} --db-type {type}
      --db-name {name}
      --db-user {user}
      --db-password {pass}
      --db-host {host}
      --db-port {port}
   ```

5. ساخت سایت با کاربر غیرریشهٔ MariaDB که مجوز ساخت پایگاه داده دارد:

   ```bash
   bench new-site {site}
      --db-root-username {user}
      --db-root-password {pass}
   ```

6. ساخت سایت و نصب برنامه‌ای که در Bench جاری موجود است:

   ```bash
   bench new-site {site} --install-app {app}
   ```

منبع: [ساخت سایت با bench new-site](https://docs.frappe.io/framework/user/en/bench/reference/new-site). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
