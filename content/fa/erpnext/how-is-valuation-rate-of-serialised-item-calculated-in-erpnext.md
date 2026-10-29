---
title: "محاسبهٔ نرخ ارزش‌گذاری کالای سریال‌دار"
slug: "how-is-valuation-rate-of-serialised-item-calculated-in-erpnext"
source_url: "https://docs.frappe.io/erpnext/how-is-valuation-rate-of-serialised-item-calculated-in-erpnext"
source_id: "erpnext/how-is-valuation-rate-of-serialised-item-calculated-in-erpnext"
source_version: "421880a450a003876ed0c0203291630349385d805dcecbab406c228dbc00a2f5"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "توضیح نحوهٔ تعیین نرخ ارزش‌گذاری کالای سریال‌دار در برابر تنظیم روش ارزش‌گذاری کالا و انبار."
---

در ERPNext، **نرخ ارزش‌گذاری** موجودی کالا هنگام ثبت تراکنش‌های زیر به‌روزرسانی می‌شود:

1. **رسید خرید**
2. **سند موجودی (ثبت موجودی)** از نوع **رسید کالا (رسید مواد)**
3. **تطبیق موجودی** برای به‌روزرسانی ماندهٔ افتتاحیهٔ موجودی

ERPNext از دو روش ارزش‌گذاری پشتیبانی می‌کند: **فایفو (FIFO)** و **میانگین متحرک**. می‌توانید روش را بر اساس چگونگی محاسبهٔ ارزش کالا انتخاب کنید. روش را می‌توان برای هر کالا به‌صورت جداگانه یا به‌طور سراسری برای همهٔ کالاها در **تنظیمات انبار (تنظیمات موجودی)** تعیین کرد.

![روش‌های ارزش‌گذاری در تنظیمات انبار](https://docs.frappe.io/files/Ecw7uZV.png)

نرخ ارزش‌گذاری کالا بر اساس روش تنظیم‌شده برای آن محاسبه می‌شود؛ اما در مورد **کالای سریال‌دار** این تنظیم‌ها نادیده گرفته می‌شوند. کالای زیر، «Macbook Pro»، سریال‌دار است و نرخ ارزش‌گذاری آن از رکورد اصلی کالا دریافت نمی‌شود؛ بلکه نرخ نخستین ثبت ورودی موجودی، یعنی 199.80 روپیه، مبنای نرخ قرار می‌گیرد. سپس با توجه به تراکنش‌های بعدی همان کالا به‌روزرسانی می‌شود.

رکورد اصلی کالا:

![نرخ ارزش‌گذاری کالای Macbook Pro](https://docs.frappe.io/files/SD7TwWD.png)

![اطلاعات سریال کالای Macbook Pro](https://docs.frappe.io/files/yhdnL5S.png)

دفتر موجودی:

![ثبت‌های موجودی کالای سریال‌دار در دفتر موجودی](https://docs.frappe.io/files/cXFcuOu.png)

برای آشنایی بیشتر با [راهنمای ماژول انبار ERPNext](https://erpnext.com/docs/user/manual/en/stock) مراجعه کنید.

منبع: [محاسبهٔ نرخ ارزش‌گذاری کالای سریال‌دار](https://docs.frappe.io/erpnext/how-is-valuation-rate-of-serialised-item-calculated-in-erpnext). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است. تصویرها به فایل‌های رسمی پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
