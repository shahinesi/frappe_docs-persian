---
title: "راه‌اندازی نسخهٔ پشتیبان در Dropbox"
slug: "dropbox-backup"
source_url: "https://docs.frappe.io/erpnext/dropbox-backup"
source_id: "erpnext/dropbox-backup"
source_version: "089b229d964e2990f1c2e5796d5d7fc727952dbbbebdc3e3bf69f5acee74982a"
source_updated: "2026-03-06"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [راه‌اندازی نسخهٔ پشتیبان در Dropbox](https://docs.frappe.io/erpnext/dropbox-backup)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

همیشه توصیه می‌شود از داده‌های ERPNext نسخهٔ پشتیبان نگه دارید. نسخهٔ پشتیبان پایگاه داده به‌صورت فایل SQL بارگیری می‌شود و در صورت نیاز می‌توان آن را در حساب ERPNext دیگری نیز بازیابی کرد.

می‌توانید بارگیری نسخهٔ پشتیبان پایگاه دادهٔ حساب ERPNext را در حساب Dropbox خودکار کنید.

> **یادداشت:** اگر از Frappe Cloud استفاده می‌کنید، نسخه‌های پشتیبان محلی و خارج از سایت به‌طور خودکار برایتان ایجاد می‌شوند. [اطلاعات بیشتر دربارهٔ پشتیبان‌گیری در Frappe Cloud](https://frappecloud.com/docs/sites/backups)

برای راه‌اندازی پشتیبان‌گیری در Dropbox، به **صفحهٔ اصلی > Integrations > Dropbox Settings** بروید.

#### گام 1: ورود به بخش توسعه‌دهندگان Dropbox

[بخش برنامه‌های Dropbox](https://www.dropbox.com/developers/apps)

#### گام 2: ساخت برنامهٔ جدید در Dropbox

![ساخت برنامهٔ جدید](https://docs.frappe.io/files/dropbox-open-3.png)

#### گام 3: وارد کردن اطلاعات برنامه

![انتخاب Dropbox API و نوع App Folder](https://docs.frappe.io/files/dropbox-open-1.png)

![تعیین نام برنامه](https://docs.frappe.io/files/dropbox-open-2.png)

![تنظیمات برنامهٔ Dropbox](https://support.frappe.io/files/nBdh7wu.png)

#### گام 4: وارد کردن نشانی بازگشت با دامنهٔ اختصاصی

URI زیر را به‌عنوان Redirect URI وارد کنید:

```text
https://{yourwebsite.com}/api/method/frappe.integrations.doctype.dropbox_settings.dropbox_settings.dropbox_auth_finish
```

![تنظیم نشانی Redirect](https://docs.frappe.io/files/dropbox_redirect_uri.png)

#### گام 5: باز کردن صفحهٔ Dropbox Settings در نصب ERPNext

صفحهٔ تنظیمات Dropbox را در پنجره‌ای تازه باز کنید.

#### گام 6: تعیین تناوب پشتیبان‌گیری و ایمیل

تناوب بارگذاری نسخه‌های پشتیبان سایت در حساب Dropbox را تعیین کنید.

![تعیین تناوب پشتیبان‌گیری](https://docs.frappe.io/files/setup-backup-frequency.png)

#### گام 7: وارد کردن کلیدهای برنامهٔ Dropbox

در صفحهٔ تنظیمات Dropbox در ERPNext، کلید برنامه و رمز برنامه (با نمایش مقدار) را از صفحهٔ برنامهٔ Dropbox وارد کنید.

همچنین می‌توانید مقادیر را به‌صورت دستی در فایل `sites/{sitename}/site_config.json` وارد کنید:

```json
{
  "db_name": "demo",
  "db_password": "<رمز پایگاه داده>",
  "dropbox_access_key": "ACCESSKEY",
  "dropbox_secret_key": "SECRETKEY"
}
```

#### گام 8: پیش از ادامه، ذخیره را بزنید

#### گام 9: پس از ذخیره، انتخاب کنید «Allow Dropbox Access»

صفحهٔ ورود Dropbox در زبانه‌ای تازه باز می‌شود. ممکن است لازم باشد بازشدن پنجره‌های بازشو را برای حساب ERPNext خود مجاز کنید.

#### گام 11: اجازهٔ دسترسی Dropbox را صادر کنید

پس از ورود موفق، پیام تأییدی نمایش داده می‌شود. گزینهٔ **اجازه** را انتخاب کنید تا حساب ERPNext به حساب Dropbox شما دسترسی داشته باشد.

![اجازهٔ دسترسی Dropbox](https://docs.frappe.io/files/dropbox-3.png)

#### گام 12: بررسی عملکرد پشتیبان‌گیری

در صفحهٔ Dropbox در ERPNext، **Take Backup Now** را انتخاب کنید و سپس فایل‌های Dropbox خود را بررسی کنید. باید پوشه‌ای به نام `Apps` و درون آن پوشهٔ برنامهٔ جدیدتان را ببینید. داخل این پوشه، نسخه‌های پشتیبان فایل‌ها و پایگاه داده قرار دارند. برای برنامه‌ای با نام `erpnext`، مسیرها چنین‌اند:

```text
فایل‌های پایگاه داده: /Apps/erpnext/database
فایل‌های عمومی: /Apps/erpnext/files
فایل‌های خصوصی: /Apps/erpnext/private/files
```

> **یادداشت:** اگر اندازهٔ نسخهٔ پشتیبان فشرده از 1GB (گیگابایت) بیشتر باشد، سیستم به‌جای ساخت نسخهٔ تازه، آخرین نسخهٔ پشتیبان موجود را در Dropbox بارگذاری می‌کند.
