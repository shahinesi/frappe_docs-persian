---
title: "جریان رویدادها"
slug: "event-streaming"
source_url: "https://docs.frappe.io/framework/help/event-streaming"
source_id: "framework/help/event-streaming"
source_version: "ec900549d43d752862e2af552fc68f9f8e26e07bca8c83edf70e1f550681314c"
source_updated: "2026-07-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/help/event-streaming)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

Event Streaming قابلیتی در Frappe بود که تغییرات سندها را از یک سایت Frappe منتشر می‌کرد تا سایتی دیگر آن‌ها را دریافت کند. این قابلیت زمانی مفید بود که لازم بود DocTypeهای منتخب میان سایت‌ها همگام شوند، بی‌آنکه برای هر نوع رکورد یکپارچه‌سازی جداگانه‌ای ساخته شود.

## سازوکار Event Streaming

در پیکربندی معمول، یک سایت نقش **Event Producer** و سایت دیگر نقش **Event Consumer** را داشت. هنگامی که سندهای انتخاب‌شده در سایت تولیدکننده ایجاد یا به‌روز می‌شدند، رویدادها ثبت و سپس در سایت دیگر دریافت می‌شدند. به این ترتیب می‌شد داده‌های پایه، تراکنش‌ها یا DocTypeهای سفارشی را میان سایت‌های Frappe تکثیر کرد.

## وضعیت در نسخهٔ 15 و جدیدتر

از نسخهٔ 15 به بعد، Event Streaming به‌عنوان قابلیتی که در هسته نگهداری شود پشتیبانی نمی‌شود. در نسخهٔ 14 فریم‌ورک Frappe، کد Event Streaming در مسیر `frappe/event_streaming` قرار داشت. در نسخهٔ 15، Frappe وصله‌ای برای حذف ماژول Event Streaming و DocTypeهای آن افزود؛ از جمله Event Producer، Event Consumer، Event به‌روزرسانی Log و DocTypeهای نگاشت مرتبط.

## برنامهٔ جداگانه

این قابلیت به برنامه‌ای مستقل منتقل شد: [frappe/event_streaming](https://github.com/frappe/event_streaming). بااین‌حال، برنامه به‌طور فعال نگهداری نمی‌شود. Frappe مخزن GitHub آن را در 6 دسامبر 2024 بایگانی کرد؛ مخزن اکنون فقط‌خواندنی است و نسخهٔ منتشرشده‌ای ندارد. برای پیاده‌سازی‌های تازهٔ عملیاتی، آن را پشتیبانی‌نشده در نظر بگیرید؛ مگر اینکه تیم شما آماده باشد مستقلاً آن را آزمایش و نگهداری کند.

## جایگزین‌های پیشنهادی

- **REST API:** برای یکپارچه‌سازی‌های صریح میان ERPNext و سامانه‌های دیگر از REST API در Frappe استفاده کنید.
- **Webhooks:** هنگامی از webhook استفاده کنید که سامانه‌ای دیگر باید پس از ایجاد یا به‌روزرسانی سند آگاه شود.
- **کارهای پس‌زمینه:** برای منطق همگام‌سازی‌ای که به تلاش مجدد، گزارش‌ها و رسیدگی به خطا نیاز دارد، از کارهای زمان‌بندی‌شده یا صف‌شده استفاده کنید.
- **برنامه‌های یکپارچه‌سازی سفارشی:** اگر نگاشت داده، مدیریت تعارض یا قواعد کسب‌وکار باید با دقت کنترل شوند، برنامه‌ای سفارشی بسازید.

## موارد احتیاط

برای نسخهٔ 15 یا جدیدتر، پیاده‌سازی تازه را بر پایهٔ Event Streaming برنامه‌ریزی نکنید. برای یکپارچه‌سازی‌های فعلی ERPNext، APIها، webhookها و صف‌های ویژهٔ یکپارچه‌سازی را ترجیح دهید تا مسئولیت نگهداری، رفتار تلاش مجدد و مدیریت شکست روشن باشد.

## موضوعات مرتبط

- [frappe/event_streaming در GitHub](https://github.com/frappe/event_streaming)
- [وصلهٔ حذف Event Streaming در نسخهٔ 15 فریم‌ورک Frappe](https://github.com/frappe/frappe/blob/version-15/frappe/patches/v15_0/remove_event_streaming.py)
- [REST API در Frappe](https://docs.frappe.io/framework/user/en/api/rest)
- [راهنمای «Webhooks» در Frappe Framework](https://docs.frappe.io/framework/user/en/guides/integration/webhooks)
- [کارهای پس‌زمینه](https://docs.frappe.io/framework/user/en/api/background_jobs)

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/help/event-streaming). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
