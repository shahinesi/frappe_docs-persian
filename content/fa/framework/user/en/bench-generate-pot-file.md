---
title: "تولید فایل الگوی ترجمه با Bench"
slug: "bench-generate-pot-file"
source_url: "https://docs.frappe.io/framework/user/en/bench-generate-pot-file"
source_id: "framework/user/en/bench-generate-pot-file"
source_version: "0d1470124f53341379ce22d8744efb02d649503d9e2ab4b8090f478d6a008c15"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

### کاربرد

```shell
bench generate-pot-file [OPTIONS]
```

### توضیح

این دستور فایل الگویی برای ترجمه می‌سازد که همهٔ رشته‌های قابل‌ترجمهٔ یک برنامه را دربرمی‌گیرد، اما ترجمه‌ها را شامل نمی‌شود. فایل الگو در مسیر `[app_module]/locale/main.pot` نوشته می‌شود.

در بسیاری از برنامه‌های Frappe، این دستور به‌طور خودکار و منظم با GitHub Actions اجرا می‌شود.

### گزینه‌ها

- `--app`: برنامه‌ای را مشخص می‌کند که فایل POT آن باید ساخته شود. مقدار پیش‌فرض، همهٔ برنامه‌هاست.

### نمونه

ساخت دوبارهٔ فایل POT برای ERPNext:

```shell
bench generate-pot-file --app erpnext
```

این دستور همهٔ رشته‌های قابل‌ترجمه را از `apps/erpnext` استخراج و در `apps/erpnext/erpnext/locale/main.pot` می‌نویسد.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [تولید فایل الگوی ترجمه با Bench](https://docs.frappe.io/framework/user/en/bench-generate-pot-file). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
