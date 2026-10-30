---
title: "قالب‌های Google Docs با یکپارچه‌سازی قدیمی GSuite"
slug: "google-gsuite"
source_url: "https://docs.frappe.io/framework/user/en/guides/integration/google_gsuite"
source_id: "framework/user/en/guides/integration/google_gsuite"
source_version: "950af7a19b4c0466850cc310d8224e394052ce0449247238d804250adaff8833"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe به شما امکان می‌دهد از اسناد Google به‌عنوان قالب استفاده کنید و بر پایهٔ آن‌ها سند تازه‌ای بسازید که در پوشه‌ای دلخواه قرار می‌گیرد. می‌توان در بدنه و نام سند، متغیرهایی با قالب استاندارد Jinja2 قرار داد. سند ساخته‌شده به‌صورت پیوست به DocType مربوط باقی می‌ماند.

سند Google با اجرای قابلیت «پیوست فایل» (Attach File) در هر DocType ساخته می‌شود.

یکی از کاربردهای رایج این قابلیت، ساخت قرارداد بر پایهٔ اطلاعات مشتری، کارمند یا تأمین‌کننده است.

> **یادداشت سازگاری:** این راهنما نام‌ها و مسیرهای رابط نسخهٔ قدیمی یکپارچه‌سازی `GSuite` را حفظ می‌کند. Google نام G Suite را به مجموعهٔ فضای کاری Google تغییر داده و رابط Apps Script نیز عوض شده است. مراحل زیر مستندات تاریخی Frappe را بازتاب می‌دهند؛ برای استقرار فعلی Apps Script از [مراحل استقرار وب‌اپ در مستندات Apps Script](https://developers.google.com/apps-script/guides/web) پیروی کنید. برای یک دامنهٔ عمومی، URI مجاز بازگشت OAuth باید از HTTPS استفاده کند؛ نشانی HTTP نمونه در متن قدیمی را عیناً برای استقرار امروزی به کار نبرید. جزئیات را در [قواعد رسمی اعتبارسنجی URI بازگشت OAuth گوگل](https://developers.google.com/identity/protocols/oauth2/web-server#uri-validation) ببینید.

## 1. فعال‌کردن یکپارچه‌سازی با Google

### 1.1 انتشار Google Apps Script

*اگر از اسکریپت پیش‌فرض استفاده می‌کنید، به بخش 1.2 بروید.*

1. به [وب‌سایت Google Apps Script](https://script.google.com) بروید.
2. پروژه‌ای تازه بسازید. در راهنمای قدیمی مسیر منو `File > New > Project` آمده است.
3. کد را از مسیر قدیمی Frappe، یعنی `Desk > Explore > Integrations > GSuite Settings > Google Apps Script`، کپی کنید و در فایل خالی `Code.gs` در `script.google.com` قرار دهید.
4. پروژه را ذخیره کنید. راهنمای قدیمی مسیر `File > Save > Enter new project name` را ذکر می‌کند.
5. برنامه را منتشر کنید. راهنمای قدیمی مسیر `Publish > Deploy as web app` را به کار می‌برد. در رابط فعلی Apps Script، از منوی `Deploy > New deployment` نوع `Web app` را انتخاب و تنظیمات استقرار را تکمیل کنید.
6. مقدار `Current web app URL` را در مسیر قدیمی `Desk > Explore > Integrations > GSuite Settings > Script URL` وارد کنید.
7. روی `OK` کلیک کنید؛ پنجرهٔ اسکریپت را نبندید.

### 1.2 پیکربندی دسترسی Google

1. به [کنسول Google Cloud](https://console.cloud.google.com/) بروید و پروژه‌تان را انتخاب کنید یا پروژه‌ای بسازید.
2. در بخش کتابخانهٔ API، `Google Drive API` را پیدا و فعال کنید.
3. در بخش اعتبارنامه‌ها، یک شناسهٔ کارخواه OAuth ایجاد کنید؛ در راهنمای قدیمی مسیر `Credentials > Create Credentials > OAuth Client ID` آمده است.
4. نوع برنامه را `Web application` انتخاب کنید و URI مجاز بازگشت را وارد کنید:

   ```text
   http://{{ yoursite }}/?cmd=frappe.integrations.doctype.gsuite_settings.gsuite_settings.gsuite_callback
   ```

   این نشانی عیناً از منبع قدیمی نقل شده است. برای دامنهٔ عمومی باید از `https://` استفاده شود و مقدار ثبت‌شده در کنسول باید دقیقاً با URI‌ای که برنامه می‌فرستد مطابقت داشته باشد. به یادداشت سازگاری بالا رجوع کنید.

5. شناسه و رمز محرمانهٔ کارخواه را در مسیر قدیمی `Desk > Explore > Integrations > GSuite Settings > Client ID and Client Secret` وارد کنید.
6. تنظیمات `GSuite Settings` را ذخیره کنید.

### 1.3 آزمایش اسکریپت

1. روی `Allow GSuite Access` کلیک کنید. به صفحه‌ای هدایت می‌شوید که در آن کاربر را انتخاب می‌کنید و دسترسی را می‌دهید. اگر خطایی دیدید، URI مجاز بازگشت را بررسی کنید. نشانی کامل مقصد را می‌توانید در انتهای URL صفحهٔ خطا ببینید. طرح نشانی (`http://` یا `https://`) باید با نشانی ثبت‌شده یکسان باشد و برای دامنهٔ عمومی HTTPS لازم است.
2. روی `Run Script test` کلیک کنید. باید درخواست اجازهٔ دسترسی نمایش داده شود.

## 2. قالب‌های Google

### 2.1 استفاده از سند Google به‌عنوان قالب

1. سندی تازه بسازید یا سندی را که دارید انتخاب کنید و متغیرهای لازم را در آن قرار دهید. متغیرها با قالب `{{VARIABLE}}` نوشته می‌شوند و `VARIABLE` نام فیلدی در DocType است.

   برای نمونه، اگر سند برای کارمند استفاده می‌شود و DocType فیلدی به نام `name` دارد، در Google Docs از `{{name}}` استفاده کنید.

2. شناسهٔ سند را از URL آن بردارید. برای نمونه، در نشانی زیر شناسهٔ سند بخش میان `/d/` و `/edit` است:

   ```text
   https://docs.google.com/document/d/1Y2_btbwSqPIILLcJstHnSm1u5dgYE0QJspcZBImZQso/edit
   ```

   شناسه: `1Y2_btbwSqPIILLcJstHnSm1u5dgYE0QJspcZBImZQso`

3. شناسهٔ پوشه‌ای را که می‌خواهید اسناد ساخته‌شده در آن قرار بگیرند بردارید. اگر می‌خواهید آن‌ها در ریشهٔ درایو گوگل ذخیره شوند، می‌توانید از این مرحله بگذرید.

   برای نمونه، در URL پوشهٔ زیر، شناسه بعد از `folders/` قرار دارد:

   ```text
   https://drive.google.com/drive/u/0/folders/0BxmFzZZUHbgyQzVJNzY5eG5jbmc
   ```

   شناسه: `0BxmFzZZUHbgyQzVJNzY5eG5jbmc`

### 2.2 اتصال قالب به DocType

1. در میزکار Frappe، از مسیر قدیمی `Desk > Explore > Integrations > GSuite Templates > New` یک قالب تازه بسازید.
2. فیلدها را تکمیل کنید:
   - نام الگو، برای نمونه `قرارداد کارمند`
   - نوع سند مرتبط، برای نمونه `کارمند`
   - شناسهٔ قالب: شناسهٔ سند Google Docs که در مرحلهٔ قبل برداشتید؛ برای نمونه `1Y2_btbwSqPIILLcJstHnSm1u5dgYE0QJspcZBImZQso`
   - نام سند: نام فایل‌های تازه. می‌توانید از فیلدهای DocType استفاده کنید؛ برای نمونه `قرارداد کارمند {name}`
   - شناسهٔ مقصد: شناسهٔ پوشه‌ای که فایل‌های ساخته‌شده در آن قرار می‌گیرند؛ برای نمونه `0BxmFzZZUHbgyQzVJNzY5eG5jbmc`

## 3. ساخت سند

1. سندی را باز کنید که برای DocType آن قالبی ساخته‌اید؛ برای نمونه `Employee > John Doe`.
2. روی «پیوست فایل» (Attach File) کلیک کنید.
3. در بخش `GSuite Document` قالب را انتخاب کنید و روی `Attach` بزنید.
4. سند ساخته و به رکورد پیوست می‌شود.
5. با کلیک روی پیوست، سند در Google باز می‌شود.

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [راهنمای اصلی Google GSuite](https://docs.frappe.io/framework/user/en/guides/integration/google_gsuite). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.

