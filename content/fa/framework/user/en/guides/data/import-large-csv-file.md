---
title: "راهنمای درون‌بُرد انبوه داده‌ها"
slug: "import-large-csv-file"
source_url: "https://docs.frappe.io/framework/user/en/guides/data/import-large-csv-file"
source_id: "framework/user/en/guides/data/import-large-csv-file"
source_version: "8ad0eb9a59f78015b139745695b00fac640e0985ecd29ce5afceed0c7cacade7"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

برای درون‌بُرد مجموعه‌داده‌های بسیار بزرگ (برای نمونه، بیش از 5,000 سند)، بهتر است به‌جای رابط وب از ابزار خط فرمان `bench data-import` استفاده کنید. این روش از پایان مهلت درخواست‌های وب جلوگیری می‌کند و فرایند درون‌بُرد را مطمئن‌تر می‌سازد.

## نمونهٔ دستور

> `bench --site test.erpnext.com data-import ~/Downloads/Activity_Type.csv`

## راهنمای دستور

> `bench data-import --help`

### شیوهٔ استفاده از دستور

> `bench data-import [OPTIONS]`

این دستور اسناد را به‌صورت انبوه و از فایل‌های CSV یا XLSX به سایت وارد می‌کند.

### گزینه‌ها

| گزینه | توضیح |
|---|---|
| `--file FILE` | مسیر فایل درون‌بُرد (`.csv` یا `.xlsx`). مسیرهای نسبی از پوشهٔ `sites` محاسبه می‌شوند. **الزامی** |
| `--doctype TEXT` | DocType مقصد برای درون‌بُرد. **الزامی** |
| `--type [Insert\|Update]` | `Insert` رکوردهای تازه را درج می‌کند و `Update` رکوردهای موجود را به‌روزرسانی می‌کند. |
| `--submit-after-import` | پس از درون‌بُرد، سندها را ثبت نهایی می‌کند. |
| `--mute-emails` | هنگام درون‌بُرد، ارسال ایمیل‌ها را متوقف می‌کند. |
| `--help` | این راهنما را نمایش می‌دهد و خارج می‌شود. |

### نکته

اگر مسیر فایل را به‌عنوان آرگومان جایگاهی وارد کنید، نیازی به گزینهٔ `--file` نیست.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [راهنمای درون‌بُرد انبوه داده‌ها](https://docs.frappe.io/framework/user/en/guides/data/import-large-csv-file). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
