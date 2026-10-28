---
title: "نصب"
slug: "نصب"
source_url: "https://docs.frappe.io/helpdesk/installation"
source_id: "helpdesk/installation"
source_version: "7e0092a440bb666bbc2d301e8532631b4c0f8cee641968188a3dc0cd57b7876d"
source_updated: "2026-01-06"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [نصب](https://docs.frappe.io/helpdesk/installation)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

Frappe Helpdesk را می‌توان بسته به نیازتان به چند روش نصب کرد: روی Frappe Cloud به‌عنوان سرویس ابری مدیریت‌شده یا روی سرور خودتان. روش‌های نصب در بخش‌های بعد توضیح داده شده‌اند.

## میزبانی مدیریت‌شده

با یک کلیک، Frappe Helpdesk را روی [Frappe Cloud](https://frappecloud.com/helpdesk/signup) نصب کنید. Frappe Cloud بستر میزبانی مدیریت‌شده‌ای است که نصب و نگه‌داری را آسان می‌کند. برای شروع از [اینجا ثبت‌نام کنید](https://frappecloud.com/helpdesk/signup)؛ نمونهٔ شما ظرف چند دقیقه آماده می‌شود. پیشنهاد می‌کنیم پیش از میزبانی روی سرور خودتان، Frappe Cloud را امتحان کنید.

اگر از قبل سایتی روی Frappe Cloud دارید، می‌توانید Frappe Helpdesk را از [بازارگاه Frappe Cloud](https://frappecloud.com/marketplace/apps/helpdesk) نصب کنید.

## میزبانی روی سرور خودتان

### راه‌اندازی عملیاتی

1. ابتدا اسکریپت نصب را دریافت کنید:

    ```bash
    wget https://frappe.io/easy-install.py
    ```

2. برای نصب Frappe Helpdesk این فرمان را اجرا کنید:

    ```bash
    python3 ./easy-install.py deploy \
        --project=helpdesk_prod_setup \
        --email=your_email.example.com \
        --image=ghcr.io/frappe/helpdesk \
        --version=stable \
        --app=helpdesk \
        --sitename subdomain.domain.tld
    ```

در این فرمان باید دو مقدار را عوض کنید:

- `your_email.example.com` را با نشانی ایمیل خود جایگزین کنید.
- `subdomain.domain.tld` را با دامنهٔ وب‌سایت خود جایگزین کنید.

راه‌اندازی حدود 5 دقیقه طول می‌کشد. پس از آن، نمونهٔ Frappe Helpdesk آمادهٔ استفاده است.

### راه‌اندازی توسعه

برای راه‌اندازی Frappe Helpdesk در محیط توسعه، دستورالعمل‌های بخش [Development Setup مخزن GitHub](https://github.com/frappe/helpdesk/tree/develop#development-setup) را ببینید.

## پرسش‌های متداول

### یک سایت ERPNext خودمیزبان دارم. چطور Frappe Helpdesk را روی آن نصب کنم؟

Frappe Helpdesk را مانند هر برنامهٔ Frappe دیگری نصب کنید. فرمان‌های دریافت و نصب برنامه:

```bash
bench get-app helpdesk --branch main
bench --site your_site_name install-app helpdesk
```

### هنگام نصب با مشکل روبه‌رو شده‌ام. چه‌کار کنم؟

اگر با خطا روبه‌رو شدید، لطفاً در [مخزن GitHub](https://github.com/frappe/helpdesk/issues) یک درخواست پشتیبانی ثبت کنید و پیام خطا و مراحلی را که انجام داده‌اید بنویسید.
