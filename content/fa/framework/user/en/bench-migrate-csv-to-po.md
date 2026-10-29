---
title: "انتقال ترجمه‌ها از CSV به PO"
slug: "bench-migrate-csv-to-po"
source_url: "https://docs.frappe.io/framework/user/en/bench-migrate-csv-to-po"
source_id: "framework/user/en/bench-migrate-csv-to-po"
source_version: "e54c1044493297c1c8db7e87830785280c10ae1ae084a1a9a30c57f4ab43e8c6"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

### کاربرد

```shell
bench migrate-csv-to-po [OPTIONS]
```

### پیش‌نیاز

مطمئن شوید برنامهٔ شما از قبل فایل POT دارد. اگر ندارد، [فایل الگوی ترجمه را تولید کنید](https://docs.frappe.io/framework/user/en/bench-generate-pot-file).

### توضیح

این دستور ترجمه‌های موجود در فایل‌های CSV را می‌خواند، آن‌ها را با فایل POT موجود تطبیق می‌دهد و نتیجه را در مسیر `[app_module]/locale/[locale].po` می‌نویسد.

این دستور فقط هنگام انتقال از سامانهٔ ترجمهٔ قدیمی به سامانهٔ جدید لازم است.

### گزینه‌ها

- `--app`: برنامه‌ای را مشخص می‌کند که ترجمه‌هایش باید منتقل شوند. مقدار پیش‌فرض همهٔ برنامه‌هاست.
- `--locale`: کد زبان و منطقهٔ ترجمه‌هایی را مشخص می‌کند که باید منتقل شوند. مقدار پیش‌فرض، انتقال ترجمه‌های همهٔ زبان‌ها و منطقه‌هاست.

### نمونه

انتقال ترجمه‌های آلمانی ERPNext از CSV به PO:

```shell
bench migrate-csv-to-po --app erpnext --locale de
```

این دستور ترجمه‌ها را از `apps/erpnext/erpnext/translations/de.csv` و رشته‌های قابل‌ترجمه را از `apps/erpnext/erpnext/locale/main.pot` می‌خواند. نتیجه در `apps/erpnext/erpnext/locale/de.po` ذخیره می‌شود. اگر نتیجه رضایت‌بخش بود، می‌توانید فایل CSV را حذف کنید.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [انتقال ترجمه‌ها از CSV به PO](https://docs.frappe.io/framework/user/en/bench-migrate-csv-to-po). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
