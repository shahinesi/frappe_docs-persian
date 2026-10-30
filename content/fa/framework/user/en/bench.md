---
title: "Bench"
slug: "bench"
source_url: "https://docs.frappe.io/framework/user/en/bench"
source_id: "framework/user/en/bench"
source_version: "46e01002f5b6d11839e39b055bc1ff0e640306af647f39b090e14ce305cbe86a"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Bench ابزار خط فرمانی برای مدیریت استقرارهای Frappe است. این ابزار، راهکاری ساده برای راه‌اندازی و مدیریت چندین سایت و برنامهٔ مبتنی بر Frappe Framework فراهم می‌کند.

بااین‌حال، واژهٔ `bench` بسته به بافت می‌تواند به چیزهای متفاوتی اشاره کند. در این مستندات، «Bench» هم برای ابزار خط فرمان و هم برای پوشهٔ محیط به‌کار می‌رود؛ این موضوع گاهی باعث ابهام می‌شود:

> «Bench را به‌روزرسانی کردی؟»
>
> «بله، مهاجرت به نسخهٔ جدید این بار روان‌تر انجام شد.»
>
> «چی؟ منظورم ابزار خط فرمان بود!»
>
> «امیدوارم مشتریانمان نسخهٔ 13 را دوست داشته باشند.»

برای جلوگیری از چنین ابهامی، در این صفحه «Bench» را برای پوشهٔ محیط و «Bench CLI» را برای ابزار خط فرمان به‌کار می‌بریم.

برای نصب Bench CLI و راه‌اندازی محیط Frappe، [دستورالعمل نصب](https://docs.frappe.io/framework/user/en/installation) را دنبال کنید.

شاید تعجب کنید که بسیاری از فرمان‌های Bench را خود Frappe Framework فراهم می‌کند، نه Bench CLI. به‌طور کلی، این‌ها فرمان‌هایی هستند که روی یک سایت مشخص کار می‌کنند و می‌توانند از پارامتر `--site` استفاده کنند. حتی فرمان‌هایی مانند `bench update` نیز فقط پوشش‌های نازکی برای فرمان‌های Frappe Framework مثل `backup` و `migrate` فراهم می‌کنند و در کنار آن‌ها چند عملیات ضروریِ سطح Bench و سیستم را اجرا می‌کنند.

## منابع مرتبط

1. [فرمان‌های Bench](https://docs.frappe.io/framework/user/en/bench/bench-commands)
2. [فرمان‌های Frappe](https://docs.frappe.io/framework/user/en/bench/frappe-commands)
3. [مرجع دستورهای Bench](bench/reference.md)
4. [افزودن فرمان به خط فرمان Bench](../../extending-the-cli.md)

---

**منبع:** [Bench](https://docs.frappe.io/framework/user/en/bench). این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. محتوای نوشتاری تحت شرایط CC BY-SA بازنشر شده و با انتساب به منبع ارائه می‌شود؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
