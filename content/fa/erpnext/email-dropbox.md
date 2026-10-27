---
title: "دریافت ایمیل در اسناد با Email Dropbox"
slug: "email-dropbox"
source_url: "https://docs.frappe.io/erpnext/email-dropbox"
source_id: "erpnext/email-dropbox"
source_version: "0e31ed90e7c97f674d7278b1ad4263c6e2b001de85915cc4dcfa6b420b2a7222"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/email-dropbox)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

وقتی از سرنخ‌ها، مشتریان، تأمین‌کنندگان یا دیگر شرکای کسب‌وکار ایمیل دریافت می‌کنید، شاید بخواهید آن را به رکورد مرتبط در ERPNext پیوست کنید. یک راه این است که ایمیل را ذخیره و به‌عنوان پیوست بارگذاری کنید، اما این کار ممکن است دست‌وپاگیر شود. قابلیت **Email Dropbox** در ERPNext روش ساده‌تری برای این کار فراهم می‌کند.

با فعال‌بودن این قابلیت، هر رکورد در ERPNext نشانی ایمیل یکتای خودش را خواهد داشت و می‌توانید ایمیل را به آن نشانی Forward کنید. با انتخاب نشانی، می‌توانید آن را در کلیپ‌بورد کپی کنید و در فیلد **To**، **Cc** یا **Bcc** ایمیلی که می‌فرستید قرار دهید.

## 1. فعال‌کردن Email Dropbox

در [Email Account](/erpnext/email-account)، گزینهٔ **Enable Email Dropbox** را فعال کنید.

![فعال‌کردن Email Dropbox](https://docs.frappe.io/files/enable_email_dropbox.png)

## 2. کپی‌کردن نشانی ایمیل یکتا از یک رکورد

پس از فعال‌کردن Email Dropbox، نشانی ایمیل یکتا در همهٔ رکوردها نمایش داده می‌شود. با انتخاب آن، نشانی در کلیپ‌بورد کپی می‌شود. سپس می‌توانید آن را در فیلد **To**، **Cc** یا **Bcc** قرار دهید و ایمیل را بفرستید.

![نشانی ایمیل یکتا در رکورد](https://docs.frappe.io/files/unique_email_address_dropbox.png)

## 3. نمایش ایمیل در Timeline

پس از دریافت ایمیل، ERPNext آن را به رکورد مرتبط پیوست می‌کند و در Timeline همان رکورد نمایش می‌دهد.

![ایمیل در Timeline رکورد](https://docs.frappe.io/files/email_in_timeline.png)

### موضوعات مرتبط

- [Email Domain](/erpnext/email-domain)
- [Email Account](/erpnext/email-account)
- [Email Inbox](/erpnext/email-inbox)
