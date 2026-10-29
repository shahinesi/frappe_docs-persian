---
title: "بازیابی بخشی (bench partial-restore)"
slug: "partial-restore"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/partial-restore"
source_id: "framework/user/en/bench/reference/partial-restore"
source_version: "7aa34127ed5517c87f7b8783c5748f1555ca1f2d612b81a1ca9ef7c7a357fa89"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench partial-restore [OPTIONS] SQL_FILE_PATH
```

## توضیح

گاهی لازم است فقط جدول‌های مشخصی را که از یک سایت پشتیبان گرفته‌اید بازیابی کنید. احتمالاً هنگام تهیهٔ پشتیبان جزئی، از گزینه‌های `--only` یا `--exclude` در دستور `bench backup` استفاده کرده‌اید.

فرمان `partial-restore` برای بازیابی سایت از پشتیبان‌های جزئی به‌کار می‌رود. فایل پشتیبان جزئی می‌تواند با gzip فشرده شده یا یک فایل SQL معمولی باشد. در واقع، این فرمان هر داده‌ای را که در فایل‌های SQL باشد بازیابی می‌کند.

## آرگومان‌ها

- `SQL_FILE_PATH`: مسیر فایل منبع پایگاه داده. مسیر می‌تواند نسبت به ریشهٔ پوشهٔ bench یا پوشهٔ `sites` باشد، یا به‌صورت مسیر مطلق وارد شود. برای توضیح مسیرهای نسبی و مطلق، [مدخل مسیر مطلق و نسبی در ویکی‌پدیا](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) را ببینید.

## گزینه‌ها

- `-v`، `--verbose`: جزئیات بیشتری از روند اجرا نمایش می‌دهد.

## نمونه

بازیابی از پشتیبان جزئی در یک سایت:

```bash
bench --site {site} partial-restore -v {/path/to/sql/file}
```

منبع: [بازیابی بخشی](https://docs.frappe.io/framework/user/en/bench/reference/partial-restore). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
