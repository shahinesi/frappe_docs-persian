---
title: "معماری Frappe Framework"
slug: "architecture"
source_url: "https://docs.frappe.io/framework/user/en/basics/architecture"
source_id: "framework/user/en/basics/architecture"
source_version: "1abcad2bd1829e126919ea5da6757749d1fb98df5841a5426bb971b5f2cb7f19"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe Framework یک چارچوب وب تمام‌پشته است و همهٔ ابزارهای لازم برای استقرار عملیاتی یک سایت را در اختیار می‌گذارد. پایگاه داده، حافظهٔ نهان، کارهای پس‌زمینه، اعلان‌های بلادرنگ و موارد دیگر هنگام راه‌اندازی سایت Frappe پیکربندی می‌شوند.

Frappe Framework بر پایهٔ Python ساخته شده است؛ بنابراین برای ایجاد محیط‌های ایزوله با نسخه‌های مختلف Python از `virtualenv` استفاده می‌کند. با این ابزار می‌توانید سایت‌هایی با نسخه‌های متفاوت Frappe نیز مستقر کنید.

نمودار زیر ساختار پوشهٔ `frappe-bench` و ارتباط آن با بخش‌های گوناگون پشتهٔ نرم‌افزار را نشان می‌دهد.

![معماری Frappe Framework](/files/architecture.png)

برای راه‌اندازی یک سایت مبتنی بر Frappe، ابتدا باید Bench را نصب کنید. اگر هنوز آن را نصب نکرده‌اید، صفحهٔ [نصب](https://docs.frappe.io/framework/user/en/installation) را ببینید.

برای ایجاد یک محیط تازهٔ `frappe-bench`، دستور زیر را اجرا کنید:

```sh
bench init frappe-bench
```

این دستور کارهای زیر را انجام می‌دهد:

1. پوشهٔ `frappe-bench` و پوشه‌های `frappe-bench/sites` و `frappe-bench/apps` را درون آن ایجاد می‌کند.
2. یک محیط مجازی Python در `frappe-bench/env` راه‌اندازی می‌کند.
3. پوشهٔ `frappe-bench/config` را برای نگهداری فایل‌های پیکربندی Redis ایجاد می‌کند.
4. برنامهٔ `frappe` را دریافت و با `pip install` نصب می‌کند.
5. بسته‌های Node.js را نصب می‌کند.
6. دارایی‌های JavaScript و CSS را می‌سازد.

هر محیط `frappe-bench` فرایندهای وب، Redis و Node.js خودش را اجرا می‌کند.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [معماری Frappe Framework](https://docs.frappe.io/framework/user/en/basics/architecture). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
