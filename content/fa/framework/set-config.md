---
title: "تنظیم مقدارهای پیکربندی (bench set-config)"
slug: "set-config"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/set-config"
source_id: "framework/user/en/bench/reference/set-config"
source_version: "53ab15d71cd8b143301f8e9c4fa6fc98b2703bab16a5c252567a24b3867a72f2"
source_updated: "2026-09-21"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench set-config [OPTIONS] KEY VALUE
```

## توضیح

Bench فرمانی پوششی برای افزودن یا به‌روزرسانی مقدارها در فایل‌های پیکربندی سایت فراهم می‌کند. با همین فرمان می‌توانید هم `site_config.json` یک سایت و هم `common_site_config.json` پوشهٔ Bench را تغییر دهید.

برای آشنایی بیشتر با پیکربندی سایت و اولویت کلیدها، به [راهنمای پیکربندی سایت](https://docs.frappe.io/framework/user/en/basics/site_config) مراجعه کنید.

## پرچم‌ها

- `-g`، `--global`: مقدار را در پیکربندی مشترک سایت‌های Bench قرار می‌دهد.
- `-p`، `--parse`: مقدار داده‌شده را تجزیه می‌کند، نه اینکه آن را رشته در نظر بگیرد. برای تنظیم مقدارهای دیکشنری و فهرست از آن استفاده کنید. در نسخه‌های پیشین این گزینه `--as-dict` نام داشت.

> **نکته:** `bench set-config` مقدارهای `true` و `false` با حروف کوچک را به‌عنوان مقدار بولی تشخیص می‌دهد. مقدارهای `1` و `0` نیز شناسایی می‌شوند، اما به شکل عدد صحیح ذخیره خواهند شد. بسیاری از تنظیم‌های بولی `1` و `0` را هم مانند `true` و `false` می‌پذیرند؛ بااین‌حال، نوشتن `true` و `false` با حروف کوچک نوع موردنظر را روشن‌تر می‌کند. از `True` و `False` با حروف بزرگ استفاده نکنید، مگر آنکه `--parse` را به‌کار ببرید؛ در غیر این صورت ممکن است به‌صورت رشته ذخیره شوند.

## نمونه‌ها

1. فعال‌کردن آزمون‌ها برای یک سایت:

   ```bash
   bench --site {site} set-config allow_tests true
   ```

2. فعال‌کردن آزمون‌ها برای همهٔ سایت‌ها:

   ```bash
   bench --site all set-config allow_tests true
   ```

با فرمان بالا، کلید و مقدار `"allow_tests": true` در `site_config.json` هر سایت قرار می‌گیرد و اجرای آزمون‌ها را در همهٔ سایت‌ها ممکن می‌کند.

برای ثبت همین مقدار در پیکربندی مشترک Bench اجرا کنید:

```bash
bench set-config -g allow_tests true
```

با اجرای این فرمان، کلید و مقدار `"allow_tests": true` در `common_site_config.json` پوشهٔ Bench قرار می‌گیرد. به این ترتیب آزمون‌ها برای هر سایت آن Bench اجرا می‌شوند، مگر آنکه همان کلید در `site_config.json` آن سایت مقدار جداگانه‌ای داشته باشد.

3. تنظیم مقدار دیکشنری در `frappe.conf` سایت:

   ```bash
   bench --site {site} set-config backup '{"includes": ["Not", "ToDo"]}' --parse
   ```

سپس می‌توانید از کد به فهرست مقدارها دسترسی پیدا کنید:

```python
frappe.conf.backup.get("includes")
```

منبع: [تنظیم مقدارهای پیکربندی](https://docs.frappe.io/framework/user/en/bench/reference/set-config). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
