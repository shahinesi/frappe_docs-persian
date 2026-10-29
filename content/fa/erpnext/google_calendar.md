---
title: "یکپارچه‌سازی با Google Calendar"
slug: "google_calendar"
source_url: "https://docs.frappe.io/erpnext/google_calendar"
source_id: "erpnext/google_calendar"
source_version: "0630790f107dfca45b6636f1163c2521ba132d13a804f1aa804d3bb9d9c51c75"
source_updated: "2026-02-28"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "همگام‌سازی رویدادهای Google Calendar با رویدادهای ERPNext از طریق دسترسی مجاز OAuth."
---

ERPNext با Google Calendar یکپارچه می‌شود تا کاربران بتوانند رویدادهای تقویم Google را با ERPNext همگام‌سازی کنند.

## راه‌اندازی یکپارچه‌سازی با Google Calendar

برای همگام‌سازی، باید به ERPNext اجازه دهید داده‌های رویدادهای تقویم را از Google دریافت کند. مراحل راه‌اندازی:

- از طریق [تنظیمات Google](google_settings.md)، اعتبارنامه‌های OAuth 2.0 را ایجاد کنید.
- در فهرست **Google Calendar** روی **جدید** کلیک کنید. نام تقویم و کاربری را که می‌خواهید تقویمش همگام شود وارد و ذخیره کنید.
- با توجه به جهت همگام‌سازی موردنیاز، یکی از گزینه‌ها را انتخاب کنید:
  - **دریافت از Google Calendar (Pull from Google Calendar):** همهٔ رویدادها از Google Calendar به ERPNext منتقل می‌شوند.
  - **ارسال به Google Calendar (Push to Google Calendar):** همهٔ رویدادها از ERPNext به Google Calendar منتقل می‌شوند.
- **مجازکردن دسترسی به تقویم (Authorize Calendar Access)** را بزنید تا ERPNext اجازهٔ دریافت داده‌های رویدادهای تقویم را بگیرد.
- پس از مجازشدن، می‌توانید رویدادهای تقویم Google را دستی همگام‌سازی کنید. (متن منبع در همین جمله به همگام‌سازی روزانهٔ مخاطبان Google اشاره می‌کند.)

## استفاده از یکپارچه‌سازی با Google Calendar

### ساخت رویداد در ERPNext

- پس از راه‌اندازی موفق، اگر گزینهٔ `Push to Google Calendar` فعال باشد، همهٔ رویدادهایی که در ERPNext می‌سازید همگام می‌شوند.
- ساخت رویداد در ERPNext:

![ساخت رویداد در ERPNext](https://docs.frappe.io/files/erpnext-gc.gif)

- حذف رویداد در ERPNext:

![حذف رویداد در ERPNext](https://docs.frappe.io/files/gc-erpnext.gif)

### همگام‌سازی رویدادها از Google Calendar

- پس از راه‌اندازی موفق، اگر گزینهٔ `Pull from Google Calendar` فعال باشد، همهٔ رویدادهای Google Calendar همگام می‌شوند.
- همگام‌سازی رویدادها از Google Calendar به ERPNext:

![همگام‌سازی رویدادها از Google Calendar به ERPNext](https://docs.frappe.io/files/gc-sync.gif)

منبع: [یکپارچه‌سازی با Google Calendar](https://docs.frappe.io/erpnext/google_calendar). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است.
