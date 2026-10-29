---
title: "تنظیمات Google"
slug: "google_settings"
source_url: "https://docs.frappe.io/erpnext/google_settings"
source_id: "erpnext/google_settings"
source_version: "41e73c1f78ad308037ee27b089e81ae830dc9e0902e855b4e86bb73fc480cdcb"
source_updated: "2026-02-26"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "تنظیم دسترسی OAuth و کلید API برای یکپارچه‌سازی‌های Google در ERPNext."
---

برای فعال‌کردن یکپارچه‌سازی‌های Google، ERPNext باید به APIای دسترسی داشته باشد که داده‌ها از طریق آن همگام می‌شوند. این دسترسی با پروتکل احراز هویت OAuth 2.0 برقرار می‌شود.

## راه‌اندازی تنظیمات Google

### برای Google Calendar، Google Contacts، درایو گوگل و Google Indexing

برای همگام‌سازی با هر یک از سرویس‌های بالا، باید به ERPNext اجازه دهید داده‌ها را از Google دریافت کند. مراحل زیر، راه‌اندازی یکپارچه‌سازی Google Contacts را نمونه قرار می‌دهد:

1. در Google Cloud Platform پروژه‌ای تازه بسازید و اعتبارنامه‌های OAuth 2.0 جدید ایجاد کنید.

![ساخت پروژه در Google Cloud برای مخاطبان](https://docs.frappe.io/files/google_contacts_project_creation.gif)

2. در کتابخانهٔ APIها، دسترسی API لازم برای یکپارچه‌سازی موردنظر را فعال کنید:
   - Google Calendar: **Calendar API**
   - Google Contacts: **People API**
   - درایو گوگل: **Drive API**
   - Google Indexing: **Indexing API**

![فعال‌کردن API در کتابخانهٔ APIها](https://docs.frappe.io/files/api.gif)

3. در **APIها و سرویس‌ها ← اعتبارنامه‌ها (API & Services > Credentials)** یک اعتبارنامه بسازید و **ساخت شناسهٔ کارخواه OAuth (Create مشتری OAuth ID)** را انتخاب کنید.
4. **برنامهٔ وب (Web Application)** را به‌عنوان نوع برنامه برگزینید.
5. `https://{yoursite}` را به مبدأهای مجاز JavaScript اضافه کنید.
6. برای Google Calendar، نشانی زیر را به‌عنوان URI تغییرمسیر مجاز اضافه کنید:

   `https://{yoursite}?cmd=frappe.integrations.doctype.google_calendar.google_calendar.google_callback`

7. برای باقی سرویس‌ها، این URI تغییرمسیر را اضافه کنید:

   `https://{yoursite}/api/method/frappe.integrations.google_oauth.callback`

![ایجاد اعتبارنامهٔ OAuth برای Google Contacts](https://docs.frappe.io/files/google_contacts_oauth.gif)

8. شناسهٔ کارخواه و رمز کارخواه خود را در تنظیمات Google ERPNext وارد کنید: **صفحهٔ اصلی ← یکپارچه‌سازی‌ها ← سرویس‌های Google ← تنظیمات Google (Home > یکپارچه سازی‌ها > Google Services > تنظیمات گوگل)**.

### برای Google Maps

> تنظیم **کلید API** فقط وقتی لازم است که بخواهید از Directions API استفاده کنید؛ برای نمونه، در **سفر تحویل** در ERPNext. برای قابلیت‌های دیگر نیازی به آن نیست.

برای استفاده از Google Maps باید کلید API بسازید؛ Google Maps برای این کار به دسترسی به داده‌های حساب Google نیاز ندارد.

1. در Google Cloud Platform پروژه‌ای تازه بسازید و کلید API جدید ایجاد کنید.
2. در کتابخانهٔ APIها دسترسی Directions API را فعال کنید و کلید API را در تنظیمات Google ERPNext وارد کنید: **صفحهٔ اصلی ← یکپارچه‌سازی‌ها ← سرویس‌های Google ← تنظیمات Google**.

![ساخت کلید API برای Google Maps](https://docs.frappe.io/files/api_key.gif)

منبع: [تنظیمات Google](https://docs.frappe.io/erpnext/google_settings). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است.
