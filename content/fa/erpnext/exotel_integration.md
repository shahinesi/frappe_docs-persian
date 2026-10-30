---
title: "یکپارچه‌سازی Exotel"
slug: "exotel_integration"
source_url: "https://docs.frappe.io/erpnext/exotel_integration"
source_id: "erpnext/exotel_integration"
source_version: "e1ffa65bd50eecd363520ffee066af0dac6f5dfde2b89cecdfac36fc85131edc"
source_updated: "2026-02-26"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [یکپارچه‌سازی Exotel](https://docs.frappe.io/erpnext/exotel_integration)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

این یکپارچه‌سازی به شما امکان می‌دهد Exotel را به حساب ERPNext خود وصل کنید. سرنخ‌ها و شماره‌تلفن‌هایشان که از طریق Exotel دریافت می‌شوند، مستقیماً در ERPNext ذخیره خواهند شد.

> **یادداشت نسخه:** در ERPNext v15، یکپارچه‌سازی Exotel از مخزن ERPNext جدا و به برنامه‌ای مستقل منتقل شد؛ این تغییر در [تغییر جایگاه Exotel در راهنمای مهاجرت ERPNext v15](https://github.com/frappe/erpnext/wiki/Migration-Guide-to-ERPNext-version-15#separating-modules-from-erpnext-to-new-apps) نیز آمده است. در نسخهٔ جاری، ابتدا [مخزن رسمی برنامهٔ یکپارچه‌سازی Exotel](https://github.com/frappe/exotel_integration) را نصب کنید. این مخزن برای تنظیم اعتبارنامه‌ها سه فیلد دارد: شناسهٔ حساب، کلید API و توکن API. مسیرهای API و بخشی از نام گزینه‌ها در ادامه از صفحهٔ قدیمی مستندات نقل شده‌اند؛ برای مسیرهای نسخهٔ نصب‌شده، به راهنمای نصب و پیکربندی همان برنامه را ببینید.

## 1. قابلیت‌ها

- ثبت تماس‌های ورودی در حساب ERPNext.
- هنگام دریافت تماس ورودی، نمایش پنجرهٔ بازشو برای کارکنان شامل اطلاعات موجود سرنخ یا مشتری.

## 2. راه‌اندازی

### 2.1 تنظیم حساب Exotel

- وارد حساب Exotel شوید و به بازار اپلیکیشن‌ها بروید.
- برای گردش‌کاری تازه، برنامه‌ای بسازید.
- جریان را مطابق نیاز خود تنظیم کنید.
- در رابط API، در بخش «ساخت پنجرهٔ بازشو...» نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_incoming_call
```

![تنظیم اپلت اتصال](https://docs.frappe.io/files/connect_applet.png)

![بخش پنجرهٔ بازشو برای تماس](https://docs.frappe.io/files/create_popup_section.png)

> **یادداشت:** `<your-site>` را در نشانی با نام سایت خود جایگزین کنید. برای نمونه، اگر نام سایت **frappe.erpnext.com** است، نشانی چنین خواهد بود:

```text
https://frappe.erpnext.com/api/method/erpnext.erpnext_integrations.exotel_integration.handle_incoming_call
```

- سپس در بخش «پس از پایان مکالمهٔ تماس» یک اپلت انتقال تماس اضافه و نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_end_call
```

![بخش پس از پایان مکالمه](https://docs.frappe.io/files/after_conversation_ends_section.png)

![بخش اپلت انتقال تماس پس از پایان مکالمه](https://docs.frappe.io/files/passthru_end_call.png)

> **یادداشت:** گزینهٔ **اجرای ناهمگام اپلت انتقال تماس** را حتماً فعال کنید.

- به همین ترتیب، در بخش «اگر کسی پاسخ نداد...» یک اپلت انتقال تماس اضافه و نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_missed_call
```

![بخش بی‌پاسخ](https://docs.frappe.io/files/no_response.png)

![بخش اپلت انتقال تماس برای تماس بی‌پاسخ](https://docs.frappe.io/files/passthru_missed_call.png)

> **یادداشت:** گزینهٔ **اجرای ناهمگام اپلت انتقال تماس** را حتماً فعال کنید.

- جریان را ذخیره کنید.
- اکنون برنامهٔ تازه‌ساخته‌شده را به دستگاه ExoPhone اختصاص دهید که تماس‌های کاری را از آن دریافت می‌کنید.

### 2.2 تنظیم در ERPNext

- از نوار جست‌وجوی سراسری به **تنظیمات Exotel** بروید.
- شناسهٔ حساب، کلید API و توکن API را در **تنظیمات Exotel** وارد کنید. این مقادیر را از [تنظیمات API در داشبورد Exotel](https://my.exotel.com/apisettings/site#api-credentials) دریافت کنید.
- به **رسانهٔ ارتباطی** بروید.
- دستگاه ExoPhone خود را در رسانهٔ ارتباطی اضافه و برای آن برنامهٔ زمان‌بندی تعیین کنید. کارکنان بر اساس این برنامه پنجرهٔ بازشو را دریافت می‌کنند.
