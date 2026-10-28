---
title: "مهاجرت تغییرات DocType به محیط عملیاتی"
slug: "how-to-migrate-doctype-changes-to-production"
source_url: "https://docs.frappe.io/framework/user/en/guides/deployment/how-to-migrate-doctype-changes-to-production"
source_id: "framework/user/en/guides/deployment/how-to-migrate-doctype-changes-to-production"
source_version: "43d438030b6c462d76bd09566706f76445df83a78bc7e6ef5b004df41c556c5d"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/deployment/how-to-migrate-doctype-changes-to-production)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

#### 1. تغییرات DocType و schema

اگر `developer_mode` فعال باشد، فایل‌های `.json` مربوط به هر **DocType** به‌طور خودکار به‌روز می‌شوند.

وقتی محیط عملیاتی را با `--latest` یا `bench update` به‌روز کنید، تغییرات در schema سایت نیز اعمال می‌شوند.

#### 2. مجوزها

مجوزها به‌طور خودکار به‌روز نمی‌شوند، چون ممکن است کاربر آن‌ها را تغییر داده باشد. برای به‌روزرسانی مجوزها می‌توانید در فایل `patches.txt` برنامهٔ خود وصله‌ای تازه اضافه کنید:

```text
execute:frappe.permissions.reset_perms("[docype]")
```

> **یادداشت مترجم:** نمونهٔ کد بالا عیناً از منبع رسمی برداشته شده است. جای‌نگهدار `[docype]` در منبع احتمالاً غلط تایپی دارد؛ پیش از استفاده، آن را با نام DocType موردنظر تطبیق دهید.

---

**منبع:** [مهاجرت تغییرات DocType به محیط عملیاتی](https://docs.frappe.io/framework/user/en/guides/deployment/how-to-migrate-doctype-changes-to-production). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
