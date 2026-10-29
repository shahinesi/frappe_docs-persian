---
title: "خدمات پس‌زمینه در محیط Frappe"
slug: "background-services"
source_url: "https://docs.frappe.io/framework/user/en/bench/resources/background-services"
source_id: "framework/user/en/bench/resources/background-services"
source_version: "76801bfde6ed2870b9dc84acac25e6af62334e451c780dff898debd164e20bf2"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

اجرای یک محیط فعال Frappe به چند خدمت سیستمی و فرایند Frappe نیاز دارد.

خدمات سیستمی، جدا از پایگاه داده و Redis انتخابی شما، به معماری و راهبرد استقرار بستگی دارند. فرایندهای Frappe در محیط توسعه در [فایل Procfile در Bench](bench-procfile.md) تعریف می‌شوند؛ در Benchهای عملیاتی نیز پیکربندی آن‌ها در `config/supervisor.conf` قرار دارد.

## فرایندهای سیستمی

این فرایندها در سطح سیستم مدیریت می‌شوند و پیکربندی‌شان ممکن است از طریق Bench یا ابزار دیگری برای مدیریت استقرار Frappe انجام شود:

- MariaDB یا PostgreSQL (پایگاه داده)
- Redis (صف کارگرهای پس‌زمینه و حافظهٔ نهان)
- NGINX (پراکسی معکوس در استقرار عملیاتی)
- Supervisor (مدیریت فرایندها در استقرار عملیاتی Bench که در کانتینر اجرا نمی‌شود)

## فرایندهای Frappe

این فرایندها را می‌توان دستی یا با مدیر فرایند اجرا کرد؛ بااین‌حال، در کد Frappe تعریف شده و همان سامانه آن‌ها را مدیریت می‌کند.

### سرور WSGI

سرور WSGI به درخواست‌های HTTP برای Frappe پاسخ می‌دهد. در محیط توسعه، `bench serve` یا `bench start` سرور Werkzeug را اجرا می‌کند. در استقرار عملیاتی، Bench از Gunicorn استفاده می‌کند و آن را خودکار در پیکربندی Supervisor می‌گنجاند.

### فرایندهای کارگر Redis

کارگرها کارهای پس‌زمینهٔ سامانهٔ Frappe را اجرا می‌کنند. این فرایندها با اجرای `bench start` خودکار آغاز می‌شوند؛ در محیط عملیاتی نیز در پیکربندی Supervisor تعریف شده‌اند.

### فرایند زمان‌بند

زمان‌بند، قرارگرفتن کارهای زمان‌بندی‌شده در صف اجرای Frappe را برنامه‌ریزی می‌کند. این فرایند با اجرای `bench start` خودکار آغاز می‌شود؛ در محیط عملیاتی نیز در پیکربندی Supervisor تعریف شده است.

منبع: [خدمات پس‌زمینه در محیط Frappe](https://docs.frappe.io/framework/user/en/bench/resources/background-services). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
