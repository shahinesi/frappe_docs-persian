---
title: "نمایش پیکربندی سایت (bench show-config)"
slug: "show-config"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/show-config"
source_id: "framework/user/en/bench/reference/show-config"
source_version: "16b3c51e46967d4b46096d8aabd26f6eebf5cedd5970bb89154fe66e23e47627"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```text
bench show-config [OPTIONS]
```

## توضیح

پیکربندی نهایی هر سایت از ترکیب `common_site_config.json` در پوشهٔ bench و فایل `site_config.json` همان سایت به دست می‌آید. Bench راهی برای مشاهدهٔ مقدارهای اعمال‌شدهٔ `frappe.conf` در سایت‌ها فراهم می‌کند. می‌توانید این اطلاعات را به شکل جدولی یا JSON ببینید.

برای آشنایی بیشتر با پیکربندی سایت و اولویت کلیدها، به [پیکربندی سایت](https://docs.frappe.io/framework/user/en/basics/site_config) مراجعه کنید.

## گزینه‌ها

- `-f`، `--format`: قالب فهرست‌کردن برنامه‌های نصب‌شده روی سایت مشخص‌شده را انتخاب می‌کند. مقدارهای ممکن `text` و `json` هستند؛ مقدار پیش‌فرض `text` است.

## نمونه‌ها

1. نمایش پیکربندی همهٔ سایت‌ها در قالب JSON:

   ```sh
   bench --site all show-config -f json
   ```

2. نمایش پیکربندی سایت به‌شکل جدول:

   ```sh
   bench --site {site} show-config --format text
   ```

   این دستور را می‌توان به شکل کوتاه‌تر نیز اجرا کرد:

   ```sh
   bench --site {site} show-config -f text
   ```

   اگر گزینهٔ قالب را مشخص نکنید، قالب پیش‌فرض استفاده می‌شود:

   ```sh
   bench --site {site} show-config
   ```

منبع: [bench show-config](https://docs.frappe.io/framework/user/en/bench/reference/show-config). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.

