---
title: "خروجی‌گرفتن از داده‌ها (Data Export)"
slug: "data-export"
source_url: "https://docs.frappe.io/erpnext/data-export"
source_id: "erpnext/data-export"
source_version: "e8ffe721d75074424a3b731973f2fd4a20df8c809cdbd6b179688dbfb945f4da"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/data-export)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر صفحهٔ منبع بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

**Data Export** به شما کمک می‌کند داده‌های هر DocType را با قالب CSV یا Excel استخراج کنید.

برای دسترسی به Data Export، به این مسیر بروید:

> Home > Data Export

## روش استفاده از Data Export

1. DocTypeِ **Data Export** را باز کنید.
2. DocTypeای را انتخاب کنید که می‌خواهید داده‌هایش استخراج شوند.
3. قالب فایل را از میان CSV و Excel انتخاب کنید.
4. اگر می‌خواهید داده‌ها بدون یادداشت‌های سرستون و توضیحات ستون‌ها خروجی گرفته شوند، کادر انتخاب را علامت بزنید.
5. فیلدهای موردنظر برای خروجی را انتخاب کنید؛ فیلدهای قرمز اجباری‌اند.
6. در صورت نیاز فیلتر اضافه کنید تا فقط داده‌های مشخصی انتخاب شوند. برای نمونه، فیلتر `Territory = Asia` همهٔ Customerهایی را خروجی می‌گیرد که Territory آن‌ها روی `Asia` تنظیم شده است.
7. برای دریافت فایل، **Export** را انتخاب کنید.

پس از خروجی‌گرفتن از داده‌ها، می‌توانید از همان فایل برای واردکردن داده با [Data Import](/erpnext/data-import) استفاده کنید.
