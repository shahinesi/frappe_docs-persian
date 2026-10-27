---
title: "کارزار ایمیلی"
slug: "email-campaign"
source_url: "https://docs.frappe.io/erpnext/email-campaign"
source_id: "erpnext/email-campaign"
source_version: "10954eb8a9d218c80983db0a33882834f727ffc76b0fb99f3b42d747946cbe84"
source_updated: "2026-07-23"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/email-campaign)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

**Email Campaign** مجموعه‌ای هماهنگ از ایمیل‌هاست که طبق برنامه‌ای مشخص برای سرنخ‌ها یا مخاطبان ارسال می‌شود.

کارزارهای ایمیلی همچنان از راه‌های مؤثر برای ارتباط با مشتریان، مخاطبان یا سرنخ‌ها و حفظ تعامل آن‌ها هستند. برای نمونه، می‌توانید برای معرفی محصول به مشتریان کارزاری بسازید که در هر ایمیل یکی از قابلیت‌های جالب محصول را معرفی کند.

برای ایجاد Email Campaign، به مسیر زیر بروید:

> Home > CRM > Campaign > Email Campaign

## پیش‌نیازها

پیش از ایجاد و استفاده از Email Campaign، موارد زیر را بسازید:

- [Campaign](/erpnext/campaign)
- [Lead](/erpnext/lead)، [Contact](/erpnext/contact) یا [Email Group](/erpnext/email_group)

## ایجاد Email Campaign

- فهرست Email Campaign را باز و **New** را انتخاب کنید.
- [Campaign](/erpnext/campaign)ای را انتخاب کنید که می‌خواهید برای آن Email Campaign بسازید.
- **Start Date** کارزار را تعیین کنید.
- در **Email Campaign For** مشخص کنید کارزار برای Lead، Contact یا Email Group باشد تا بتوانید به چند مخاطب ایمیل بفرستید.
- در **Recipient**، Lead، Contact یا Email Group موردنظر را انتخاب کنید.
- در **Sender**، کاربر سامانه‌ای را انتخاب کنید که ایمیل‌ها را می‌فرستد.
- سند را ذخیره کنید.

![سند Email Campaign](https://docs.frappe.io/files/email-campaign.png)

کارزار ایمیلی بالا به برنامهٔ زیر برای Campaign وابسته است:

![برنامهٔ زمانی Campaign](https://docs.frappe.io/files/campaign-email-schedule.png)

> **یادداشت:** فیلد **Send After (days)** در Campaign مشخص می‌کند ایمیل چند روز پس از **Start Date** کارزار ارسال شود. متن منبع می‌گوید **End Date** نمونه `26-07-2019` و 4 روز پس از **Start Date** برابر `22-07-2029` است؛ این دو تاریخ با فاصلهٔ اعلام‌شده سازگار نیستند.

### ایجاد چند Email Campaign برای یک Campaign

همچنین می‌توانید از طریق داشبورد Campaign، برای سرنخ‌ها یا مخاطبان متفاوت و برای یک Campaign واحد، چند Email Campaign ایجاد کنید.

- Campaignای را باز کنید که می‌خواهید برایش Email Campaign بسازید.
- برای ایجاد کارزار تازه، علامت + کنار Email Campaigns را انتخاب کنید.

![ایجاد Email Campaign از داشبورد](https://docs.frappe.io/files/campaign-dashboard.png)

## قابلیت‌ها

### ارتباط پیوندخورده

هنگامی که ایمیل برای سرنخ یا مخاطب مربوط ارسال می‌شود، Communication به سند Email Campaign پیوند می‌خورد. می‌توانید همهٔ ایمیل‌های ارسال‌شده را در سند مشاهده کنید.

![ارتباط پیوندخورده با کارزار ایمیلی](https://docs.frappe.io/files/email-campaign-linked-comm.png)

### لغو اشتراک از Email Campaign

اگر Lead یا Contact دیگر نخواهد ایمیل‌های مربوط به کارزار را دریافت کند، می‌تواند با پیوند لغو اشتراکی که در ایمیل آمده است از Email Campaign خارج شود.

![پیوند لغو اشتراک](https://docs.frappe.io/files/unsubscribe-link.png)

پس از لغو اشتراک، وضعیت سند Email Campaign به **Unsubscribed** تغییر می‌کند.

![وضعیت لغو اشتراک](https://docs.frappe.io/files/email-campaign-unsubscribed.png)

### استفاده از فیلدهای Lead یا Contact در قالب ایمیل

قالب ایمیل به سندی دسترسی دارد که در فیلد **Email Campaign For** مشخص کرده‌اید. برای نمایش فیلدهای سند Lead یا Contact در قالب، از الگوی `doc.fieldname` استفاده کنید.

برای نمونه، اگر **Email Campaign For** برابر Contact باشد، می‌توانید نام کوچک مخاطب را در قالب ایمیل با `doc.first_name` درج کنید؛ همان‌طور که در تصویر زیر آمده است:

![داده‌های سند در قالب ایمیل](https://docs.frappe.io/files/email-template-doc.png)

ایمیل‌های ارسالی به این شکل خواهند بود:

![داده‌های سند در ایمیل کارزار](https://docs.frappe.io/files/email-campaign-doc-data.png)

### نمایش وضعیت

وضعیت، مرحلهٔ کارزار ایمیلی را نشان می‌دهد:

- **Scheduled**: کارزار هنوز آغاز نشده و برای **Start Date** آینده زمان‌بندی شده است.
- **In Progress**: در فاصلهٔ **Start Date** تا **End Date** کارزار.
- **Completed**: پس از **End Date** وضعیت به Completed تغییر می‌کند.
- **Unsubscribed**: Lead یا Contact اشتراک خود را از کارزار لغو کرده است.

![وضعیت Email Campaign](https://docs.frappe.io/files/email-campaign-status.png)

## موضوعات مرتبط

- [Campaign](/erpnext/campaign)
- [Lead](/erpnext/lead)
- [Contact](/erpnext/contact)

بعدی: [Newsletter](/erpnext/newsletter)
