---
title: "فهرست برنامه‌ها (bench list-apps)"
slug: "list-apps"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/list-apps"
source_id: "framework/user/en/bench/reference/list-apps"
source_version: "589145171000f4f3f497404b83e87cf1e34da1fd2162589f5c7de6c453c852c2"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench list-apps [OPTIONS]
```

## توضیح

همهٔ برنامه‌های Frappe نصب‌شده روی سایت مشخص‌شده را فهرست می‌کند. اطلاعات این دستور از DocType **برنامه‌های نصب‌شده** گرفته می‌شود؛ این DocType آخرین نسخه‌ای را ثبت می‌کند که سایت به آن مهاجرت کرده است. اگر این اطلاعات در دسترس نباشد، مقدار پیش‌فرض سراسری `installed_apps` به‌کار می‌رود.

پشتیبانی از چندسایتی در نسخهٔ 13 افزوده شد. برای دیدن خلاصهٔ همهٔ سایت‌ها، مقدار سایت را `all` قرار دهید.

## گزینه‌ها

- `--format`، `-f`: قالب فهرست برنامه‌های نصب‌شده در سایت مشخص‌شده را تعیین می‌کند. مقدارهای ممکن `text` و `json` هستند؛ مقدار پیش‌فرض `json` است.

## نمونه‌ها

1. فهرست برنامه‌های نصب‌شده در همهٔ سایت‌ها:

   ```bash
   bench --site all list-apps
   ```

2. فهرست برنامه‌های همهٔ سایت‌ها در قالب JSON قابل‌پردازش:

   ```bash
   bench --site all list-apps --format json
   ```

3. فهرست برنامه‌های یک سایت مشخص در قالب متنی:

   ```bash
   bench --site {site} list-apps --format text
   ```

   شکل کوتاه گزینه نیز همین نتیجه را می‌دهد:

   ```bash
   bench --site {site} list-apps -f text
   ```

   با حذف گزینهٔ قالب، قالب پیش‌فرض JSON نمایش داده می‌شود:

   ```bash
   bench --site {site} list-apps
   ```

منبع: [فهرست برنامه‌ها](https://docs.frappe.io/framework/user/en/bench/reference/list-apps). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
