---
title: "ایجاد جدول تاریخ"
slug: "creating-date-table"
source_url: "https://docs.frappe.io/insights/articles/creating-date-table"
source_id: "insights/articles/creating-date-table"
source_version: "e00271bf731fa5db12d78990474804cc933785226da50207a318fcf31387418a"
source_updated: "2026-03-03"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [ایجاد جدول تاریخ](https://docs.frappe.io/insights/articles/creating-date-table)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

## ایجاد جدول تاریخ با ویرایشگر SQL

جدول تاریخ برای نمودارها یا گزارش‌های مبتنی بر زمان مفید است، به‌ویژه وقتی مجموعه‌داده تاریخ‌های پیوسته ندارد.

می‌توانید آن را مستقیماً در ویرایشگر SQL بسازید، بدون آن‌که جدولی در پایگاه داده ایجاد کنید.

> **توجه:** این روش فقط در **MariaDB 10.0+** کار می‌کند؛ این نسخه‌ها جدول‌های توالی داخلی دارند.

## روش

MariaDB جدول‌های توالی‌ای مانند موارد زیر دارد:

    seq_0_to_364
    seq_0_to_999
    seq_0_to_29584

این جدول‌ها عددهای پیاپی (<code>seq</code>) را از <code>0</code> نگه می‌دارند. با افزودن هر عدد به تاریخ شروع، می‌توان آن را به تاریخ تبدیل کرد.

## نمونه: تولید تاریخ‌های یک سال

    SELECT
        d AS Date,
        YEAR(d) AS Year,
        MONTH(d) AS Month,
        MONTHNAME(d) AS MonthName,
        CONCAT('Q', QUARTER(d)) AS Quarter,
        WEEK(d, 1) AS Week,
        DAYNAME(d) AS DayOfWeek,
        DAYOFWEEK(d) IN (1,7) AS IsWeekend
    FROM (
        SELECT DATE('2026-01-01') + INTERVAL seq DAY AS d
        FROM seq_0_to_364
    ) t;

**نحوهٔ کار**

- <code>seq_0_to_364</code> تعداد 365 ردیف تولید می‌کند.
- هر ردیف، مقدار <code>seq</code> را به‌صورت روز به تاریخ شروع اضافه می‌کند.
- نتیجه: برای هر تاریخ تقویمی یک ردیف.

## بازهٔ زمانی دلخواه

از جدول توالی بزرگ‌تری استفاده و بازهٔ موردنیاز را پالایش کنید:

    SELECT d AS Date
    FROM (
        SELECT DATE('1970-01-01') + INTERVAL seq DAY AS d
        FROM seq_0_to_29584
    ) t
    WHERE d BETWEEN '2026-01-01' AND '2026-12-31';

این روش با اتصال‌های فقط‌خواندنی به پایگاه داده نیز کار می‌کند و می‌توان آن را در پرس‌وجوهای مختلف Insights دوباره به‌کار برد.

---

**منبع:** [ایجاد جدول تاریخ](https://docs.frappe.io/insights/articles/creating-date-table). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
