---
title: "همگام‌سازی فایل‌های ترجمهٔ PO"
slug: "bench-update-po-files"
source_url: "https://docs.frappe.io/framework/user/en/bench-update-po-files"
source_id: "framework/user/en/bench-update-po-files"
source_version: "6002e2c91b2471184b163c93ad093171b0428ee6e552725e57fcded75433edbc"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

### کاربرد

```shell
bench update-po-files [OPTIONS]
```

### پیش‌نیازها

در پوشهٔ `locale` برنامه باید فایل POT و فایل‌های PO موجود باشند.

### توضیح

این دستور فایل‌های ترجمهٔ موجود را با فایل POT همگام می‌کند. فایل POT همهٔ رشته‌های قابل‌ترجمه را نگه می‌دارد؛ این دستور رشته‌های منسوخ را حذف و رشته‌های تازه را اضافه می‌کند.

پس از ساخت دوبارهٔ فایل POT حاوی رشته‌های قابل‌ترجمه، این دستور را اجرا کنید. اگر از سکوی اختصاصی مدیریت ترجمه استفاده می‌کنید، ممکن است خود آن سکو این مرحله را انجام دهد و دیگر نیازی به اجرای این دستور نباشد.

### گزینه‌ها

- `--app`: برنامه‌ای را مشخص می‌کند که فایل‌های PO آن باید به‌روزرسانی شوند. مقدار پیش‌فرض همهٔ برنامه‌هاست.
- `--locale`: کد زبان و منطقهٔ فایلی را مشخص می‌کند که باید به‌روزرسانی شود. مقدار پیش‌فرض، همهٔ فایل‌های PO است.

### نمونه

همگام‌سازی رشته‌های قابل‌ترجمهٔ ERPNext با فایل ترجمهٔ آلمانی:

```shell
bench update-po-files --app erpnext --locale de
```

این دستور ترجمه‌ها را از `apps/erpnext/erpnext/locale/de.po` و رشته‌های قابل‌ترجمه را از `apps/erpnext/erpnext/locale/main.pot` می‌خواند و نتیجه را در `apps/erpnext/erpnext/locale/de.po` ذخیره می‌کند.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [همگام‌سازی فایل‌های ترجمهٔ PO](https://docs.frappe.io/framework/user/en/bench-update-po-files). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
