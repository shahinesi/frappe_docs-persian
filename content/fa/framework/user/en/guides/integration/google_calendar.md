---
title: "یکپارچه‌سازی با Google Calendar"
slug: "google-calendar"
source_url: "https://docs.frappe.io/framework/user/en/guides/integration/google_calendar"
source_id: "framework/user/en/guides/integration/google_calendar"
source_version: "e932514cafdbcb73f564b03159429bf0ef0a304239b23564e5e7e3c2eb878d36"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe امکان یکپارچه‌سازی با Google Calendar را فراهم می‌کند تا همهٔ کاربران بتوانند رویدادهایشان را همگام‌سازی کنند.

## راه‌اندازی

برای همگام‌سازی با Google Calendar، باید برنامهٔ خود را در [پلتفرم Google Cloud](https://cloud.google.com/) به این سرویس متصل کنید و سپس برای هر کاربر یک حساب بسازید:

1. در پلتفرم Google Cloud پروژه‌ای تازه بسازید و اطلاعات اعتبارنامهٔ OAuth 2.0 را دریافت کنید.
2. `https://{yoursite}` را به مبدأهای مجاز JavaScript (Authorized JavaScript origins) اضافه کنید.
3. نشانی `https://{yoursite}?cmd=frappe.integrations.doctype.gcalendar_settings.gcalendar_settings.google_callback` را به‌عنوان URI مجاز بازگشت (Authorized redirect URI) اضافه کنید.
4. شناسهٔ کارخواه و رمز محرمانهٔ کارخواه (شناسه کلاینت و سیکرت کلاینت) را در مسیر **ماژول‌ها ← یکپارچه‌سازی‌ها ← تقویم Google ← تنظیمات GCalendar** (`GCalendar Settings`) وارد کنید.

پس از تکمیل موفق این مرحله، هر کاربر می‌تواند از مسیر **تقویم Google ← حساب GCalendar** (`GCalendar Account`) حساب خودش را بسازد. از او خواسته می‌شود به برنامهٔ Google شما اجازه دهد به اطلاعات تقویمش دسترسی پیدا کند؛ سپس به صفحهٔ موفقیت هدایت می‌شود.

## قابلیت‌ها

1. **ساخت تقویم در Google Calendar**
   - هر کاربر می‌تواند نامی اختصاصی برای تقویم Google خود انتخاب کند.
2. **همگام‌سازی رویدادها از Frappe به Google Calendar**
   - همهٔ رویدادهایی که در Frappe ساخته می‌شوند، در Google Calendar نیز ساخته می‌شوند.
   - رویدادهای تکرارشونده در Google Calendar نیز به‌صورت تکرارشونده ساخته می‌شوند.
   - در صورت نیاز، می‌توانید پیوند کنفرانس Google Meet را به رویداد اضافه کنید.
   - همهٔ شرکت‌کنندگان (نشانی ایمیل کاربران) به رویداد افزوده می‌شوند.
   - رویدادهایی که در Frappe ویرایش می‌شوند، در Google Calendar نیز به‌روزرسانی می‌شوند.
   - رویدادهایی که در Frappe حذف می‌شوند، در Google Calendar نیز حذف می‌شوند.
3. **همگام‌سازی رویدادها از Google Calendar به Frappe**
   - رویدادهایی که در Google Calendar ساخته می‌شوند، در Frappe نیز ساخته می‌شوند.
   - رویدادهایی که در Google Calendar به‌روزرسانی می‌شوند، در Frappe نیز به‌روزرسانی می‌شوند.

ماژول همگام‌سازی از قاعدهٔ مجوزدهی Frappe پیروی می‌کند: رویداد فقط زمانی همگام‌سازی می‌شود که عمومی باشد یا کاربر مالک آن باشد.

## محدودیت‌ها

در حال حاضر، اگر نمونه‌ای از یک رویداد تکرارشونده در Google Calendar لغو شود، این تغییر در Frappe منعکس نمی‌شود.

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [یکپارچه‌سازی با Google Calendar](https://docs.frappe.io/framework/user/en/guides/integration/google_calendar). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
