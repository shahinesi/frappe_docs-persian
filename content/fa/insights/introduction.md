---
title: "معرفی"
slug: "معرفی"
source_url: "https://docs.frappe.io/insights/introduction"
source_id: "insights/introduction"
source_version: "a2570ba5d212b6f299e613e0ed8d790b9b153be16c75b3d49e6fdf4f657ded67"
source_updated: "2026-01-06"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/insights/introduction)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

## Insights چیست؟

Insights یک ابزار متن‌باز هوش تجاری (BI) است که تحلیل داده و گزارش‌گیری را برای همه، چه کاربران فنی و چه غیرفنی، در دسترس قرار می‌دهد. با Insights می‌توانید به پایگاه‌های داده متصل شوید، داده‌ها را تحلیل کنید و گزارش‌ها و داشبوردهای خوانا بسازید؛ همهٔ این‌ها بدون نوشتن پرس‌وجوهای پیچیدهٔ SQL.

## چرا Insights؟

[Frappe Framework](https://frappe.io/framework) بنیانی مناسب برای ساخت برنامه و نگه‌داری داده‌ها به‌شکلی ساخت‌یافته فراهم می‌کند. اما برای تحلیل این داده‌ها و تهیهٔ گزارش، معمولاً باید پرس‌وجوی SQL نوشت؛ کاری که برای آشنایان‌نبودگان با SQL دشوار است. Frappe Insights برای حل همین مسئله ساخته شده است: رابطی شهودی برای کاوش داده‌ها، ساخت گزارش و تهیهٔ داشبورد در اختیار اعضای تیم می‌گذارد.

## قابلیت‌های کلیدی

- **اتصال به چند منبع:** پایگاه‌های داده، فایل‌ها و صفحه‌گسترده‌های مختلف را یک‌جا گردآوری و داده‌های مرتبط را با هم تحلیل کنید.
- **سازندهٔ پرس‌وجو:** بدون آشنایی با SQL، با انتخاب جدول‌ها، افزودن پیوندها، اعمال فیلترها و انجام محاسبات پرس‌وجو بسازید.
- **مصورسازی و داشبورد:** نتیجهٔ پرس‌وجو را با نمودارهای گوناگون نمایش دهید. Insights نمودار مناسب را نیز پیشنهاد می‌کند. با رابط کشیدن‌و‌رهاکردن داشبورد بسازید و فیلترهایی اضافه کنید که روی نمودارها اعمال شوند.
- **پشتیبانی از پایگاه داده:** Insights در حال حاضر از MySQL، PostgreSQL، DuckDB و BigQuery پشتیبانی می‌کند. اتصال‌های بیشتری در آینده برنامه‌ریزی شده‌اند.

## زیرساخت فنی

- [**Frappe Framework**](https://github.com/frappe/frappe): فریم‌ورک وب تمام‌پشته.
- [**Frappe UI**](https://github.com/frappe/frappe-ui): کتابخانهٔ رابط کاربری مبتنی بر Vue برای ساخت رابط‌های مدرن.
- [**Ibis**](https://github.com/ibis-project/ibis): کتابخانه‌ای توانمند برای ساخت پرس‌وجوهای SQL با APIهای dataframe.
- [**eCharts**](https://github.com/apache/echarts): کتابخانهٔ تعاملی نمودار و مصورسازی داده.

## نصب

برای نصب و راه‌اندازی برنامه، [دستورالعمل‌های استقرار](https://github.com/frappe/insights/tree/develop?tab=readme-ov-file#production-setup) را دنبال کنید.

## یادگیری و جامعهٔ کاربری

- [گروه عمومی تلگرام](https://t.me/frappeinsights)
- [تالار گفت‌وگو](https://discuss.frappe.io/c/insights/74)
- [مستندات](https://docs.frappe.io/insights)
- [YouTube](https://www.youtube.com/@frappetech)
