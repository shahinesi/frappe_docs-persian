---
title: "کامپایل فایل‌های PO به MO"
slug: "bench-compile-po-to-mo"
source_url: "https://docs.frappe.io/framework/user/en/bench-compile-po-to-mo"
source_id: "framework/user/en/bench-compile-po-to-mo"
source_version: "5919ddb2b1658dfb07e91dc91d80544c1de48e0e8d3ed02fb90ba4567b6b8360"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

### کاربرد

```shell
bench compile-po-to-mo [OPTIONS]
```

### پیش‌نیاز

در پوشهٔ `locale` برنامه باید فایل‌های POای وجود داشته باشند که ترجمهٔ دست‌کم یک زبان را دربرمی‌گیرند.

### توضیح

فایل‌های PO ترجمه‌ها را در قالبی خوانا برای انسان نگه می‌دارند. پیش از استفادهٔ برنامه از ترجمه‌ها، باید آن‌ها را به فایل‌های دودویی MO کامپایل کرد. فایل‌های دودویی در پوشهٔ `sites/assets/locale` مربوط به Bench ذخیره می‌شوند.

برای افزایش سرعت، اگر فایل MO موجود از فایل PO جدیدتر باشد، این دستور از کامپایل دوباره صرف‌نظر می‌کند.

این دستور همراه با `bench build` و `bench update` به‌طور خودکار اجرا می‌شود. در محیط توسعه نیز می‌توانید پس از افزودن ترجمه‌ها آن را جداگانه اجرا کنید تا نتیجه را در رابط کاربری ببینید.

### گزینه‌ها

- `--app`: برنامه‌ای را مشخص می‌کند که فایل‌های PO آن باید کامپایل شوند. مقدار پیش‌فرض همهٔ برنامه‌هاست.
- `--locale`: کد زبان و منطقهٔ فایل PO را مشخص می‌کند. مقدار پیش‌فرض، همهٔ فایل‌های PO است.
- `--force`: حتی اگر فایل‌های PO تغییر نکرده باشند، کامپایل را به‌اجبار تکرار می‌کند.

### نمونه

کامپایل ترجمه‌های آلمانی ERPNext:

```shell
bench compile-po-to-mo --app erpnext --locale de
```

این دستور ترجمه‌ها را از `apps/erpnext/erpnext/locale/de.po` می‌خواند و به قالب دودویی تبدیل می‌کند. نتیجه در `sites/assets/locale/de/LC_MESSAGES/erpnext.mo` ذخیره می‌شود.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [کامپایل فایل‌های PO به MO](https://docs.frappe.io/framework/user/en/bench-compile-po-to-mo). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
