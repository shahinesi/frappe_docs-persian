---
title: "یکپارچه‌سازی Exotel"
slug: "exotel_integration"
source_url: "https://docs.frappe.io/erpnext/exotel_integration"
source_id: "erpnext/exotel_integration"
source_version: "e1ffa65bd50eecd363520ffee066af0dac6f5dfde2b89cecdfac36fc85131edc"
source_updated: "2026-02-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/exotel_integration)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

این یکپارچه‌سازی به شما امکان می‌دهد Exotel را به حساب ERPNext خود وصل کنید. سرنخ‌ها و شماره‌تلفن‌هایشان که از طریق Exotel دریافت می‌شوند، مستقیماً در ERPNext ذخیره خواهند شد.

## 1. قابلیت‌ها

- ثبت تماس‌های ورودی در حساب ERPNext.
- هنگام دریافت تماس ورودی، نمایش پنجرهٔ بازشو برای کارکنان شامل اطلاعات موجود سرنخ یا مشتری.

## 2. راه‌اندازی

### 2.1 تنظیم حساب Exotel

- وارد حساب Exotel شوید و به App Bazar بروید.
- برای یک جریان کاری تازه، App جدیدی بسازید.
- جریان را مطابق نیاز خود تنظیم کنید.
- در Connect API، زیر بخش **Create popup...** نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_incoming_call
```

![تنظیم Connect Applet](https://docs.frappe.io/files/connect_applet.png)

![بخش Call Popup](https://docs.frappe.io/files/create_popup_section.png)

> **یادداشت:** `<your-site>` را در نشانی با نام سایت خود جایگزین کنید. برای نمونه، اگر نام سایت **frappe.erpnext.com** است، نشانی چنین خواهد بود:

```text
https://frappe.erpnext.com/api/method/erpnext.erpnext_integrations.exotel_integration.handle_incoming_call
```

- سپس در بخش **After Call Conversation ends** یک Passthru applet اضافه و نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_end_call
```

![بخش After Conversation Ends](https://docs.frappe.io/files/after_conversation_ends_section.png)

![بخش Passthru پس از پایان تماس](https://docs.frappe.io/files/passthru_end_call.png)

> **یادداشت:** گزینهٔ **Make Passthru Async** را حتماً فعال کنید.

- به همین ترتیب، در بخش **If nobody answers...** یک Passthru applet اضافه و نشانی زیر را وارد کنید:

```text
https://<your-site>/api/method/erpnext.erpnext_integrations.exotel_integration.handle_missed_call
```

![بخش No Response](https://docs.frappe.io/files/no_response.png)

![بخش Passthru برای تماس بی‌پاسخ](https://docs.frappe.io/files/passthru_missed_call.png)

> **یادداشت:** گزینهٔ **Make Passthru Async** را حتماً فعال کنید.

- جریان را ذخیره کنید.
- اکنون App تازه‌ساخته‌شده را به ExoPhoneای اختصاص دهید که تماس‌های کاری را از آن دریافت می‌کنید.

### 2.2 تنظیم در ERPNext

- از Awesome Bar به **Exotel Settings** بروید.
- **Exotel SID** و **Exotel Token** را وارد کنید. کلید API و Token مربوط به Exotel را در [داشبورد Exotel](https://my.exotel.com/apisettings/site#api-credentials) می‌یابید.
- به **رسانه ارتباطی** بروید.
- ExoPhone خود را اضافه و برای آن برنامهٔ زمان‌بندی تعیین کنید. کارکنان بر اساس این برنامه پنجرهٔ بازشو را دریافت می‌کنند.
