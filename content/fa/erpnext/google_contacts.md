---
title: "یکپارچه‌سازی با Google Contacts"
slug: "google_contacts"
source_url: "https://docs.frappe.io/erpnext/google_contacts"
source_id: "erpnext/google_contacts"
source_version: "6a5142581a69cdfb307081b5d56bfa287e0d9f03a083f30e923301ef1fedb264"
source_updated: "2026-02-28"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "همگام‌سازی مخاطبان میان ERPNext و Google Contacts با دسترسی مجاز OAuth."
---

ERPNext با Google Contacts یکپارچه می‌شود تا کاربران بتوانند مخاطبان Google Contacts را با ERPNext همگام‌سازی کنند.

## راه‌اندازی یکپارچه‌سازی با Google Contacts

برای همگام‌سازی باید به ERPNext اجازه دهید داده‌های مخاطبان را از Google دریافت کند. مراحل راه‌اندازی:

- از طریق [تنظیمات Google](https://docs.frappe.io/erpnext/google_settings)، اعتبارنامه‌های OAuth 2.0 را ایجاد کنید.
- در فهرست **Google Contacts** روی **جدید** کلیک کنید. نشانی ایمیل حساب Google موردنظر برای همگام‌سازی را وارد و ذخیره کنید. سپس **مجازکردن دسترسی به مخاطبان (Authorize Contacts Access)** را بزنید تا ERPNext اجازهٔ دریافت داده‌های مخاطبان از Google را بگیرد.

## استفاده از یکپارچه‌سازی با Google Contacts

### ساخت مخاطب در ERPNext

- پس از راه‌اندازی موفق، اگر گزینهٔ `Push to Google Contacts` فعال باشد، همهٔ مخاطبانی که در ERPNext می‌سازید همگام می‌شوند.

ساخت مخاطب در ERPNext:

![ساخت مخاطب در ERPNext](https://docs.frappe.io/files/google_contacts_create_contact.gif)

مخاطب در Google Contacts نمایش داده می‌شود:

![نمایش مخاطب در Google Contacts](https://docs.frappe.io/files/google_contacts_create_contact_!.gif)

### همگام‌سازی مخاطبان از Google Contacts

- پس از راه‌اندازی موفق، اگر گزینهٔ `Pull from Google Contacts` فعال باشد، همهٔ مخاطبان Google Contacts همگام می‌شوند.

![همگام‌سازی مخاطبان Google Contacts با ERPNext](https://docs.frappe.io/files/google_contacts_contact_sync.gif)

منبع: [یکپارچه‌سازی با Google Contacts](https://docs.frappe.io/erpnext/google_contacts). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است.
