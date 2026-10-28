---
title: "نصب"
slug: "installation"
source_url: "https://docs.frappe.io/insights/get-started/installation"
source_id: "insights/get-started/installation"
source_version: "f648114dcb86b3295cb911b460e51a09d620fff3bfb7d1a8423b30c82e011fd0"
source_updated: "2026-01-06"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/insights/get-started/installation)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

Frappe Insights را می‌توان به چند روش، متناسب با نیازتان، نصب کرد: روی Frappe Cloud (نسخهٔ ابری مدیریت‌شدهٔ Frappe Insights) یا روی سرور خودتان. روش‌های نصب در بخش‌های زیر شرح داده شده‌اند.

## میزبانی مدیریت‌شده

با یک کلیک، [Frappe Insights را روی Frappe Cloud نصب کنید](https://frappecloud.com/insights/signup). Frappe Cloud پلتفرم میزبانی مدیریت‌شده‌ای است که نصب و نگه‌داری را آسان می‌کند. برای شروع از [این صفحه ثبت‌نام کنید](https://frappecloud.com/insights/signup). نمونهٔ شما در چند دقیقه آماده می‌شود. پیشنهاد می‌کنیم پیش از میزبانی روی سرور خودتان، Frappe Cloud را امتحان کنید.

اگر از قبل سایتی در Frappe Cloud دارید، می‌توانید Frappe Insights را از [بازارچهٔ Frappe Cloud](https://frappecloud.com/marketplace/apps/insights) نصب کنید.

## میزبانی روی سرور خودتان

### راه‌اندازی عملیاتی

1. ابتدا اسکریپت نصب را دریافت کنید:

    wget https://frappe.io/easy-install.py

2. برای نصب Frappe Insights این فرمان را اجرا کنید:

    python3 ./easy-install.py deploy \
        --project=insights_prod_setup \
        --email=your_email.example.com \
        --image=ghcr.io/frappe/insights \
        --version=stable \
        --app=insights \
        --sitename subdomain.domain.tld

در این فرمان دو مقدار را تغییر دهید:

- <code>your_email.example.com</code> را با نشانی ایمیل واقعی خود جایگزین کنید.
- <code>subdomain.domain.tld</code> را با نام دامنهٔ وب‌سایت خود جایگزین کنید.

راه‌اندازی حدود 5 دقیقه طول می‌کشد. پس از آن، نمونهٔ Frappe Insights آمادهٔ استفاده خواهد بود.

### راه‌اندازی توسعه

برای راه‌اندازی Frappe Insights با هدف توسعه، دستورالعمل‌های کامل را در [مخزن GitHub](https://github.com/frappe/insights/tree/develop#development-setup) ببینید.

## پرسش‌های متداول

### یک سایت ERPNext دارم که خودم میزبانی می‌کنم. چطور Frappe Insights را روی آن نصب کنم؟

می‌توانید Frappe Insights را مانند هر اپ دیگری از Frappe نصب کنید. برای دریافت و نصب اپ این فرمان‌ها را اجرا کنید:

    bench get-app insights --شاخه version-3
    bench --سایت your_سایت_name install-app insights

### هنگام نصب با مشکل روبه‌رو شده‌ام. چه کار کنم؟

اگر مشکلی پیش آمد، یک [درخواست پشتیبانی در GitHub](https://github.com/frappe/insights/issues) ثبت کنید و پیام خطا و مراحلی را که انجام داده‌اید بنویسید.

---

**منبع:** [مستندات رسمی Frappe Insights](https://docs.frappe.io/insights/get-started/installation). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
