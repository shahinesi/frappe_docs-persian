---
title: "تنظیمات CRM"
slug: "crm_settings"
source_url: "https://docs.frappe.io/erpnext/crm_settings"
source_id: "erpnext/crm_settings"
source_version: "4031ea0a3ad6af9f3ca125973b66d2d48b0115b4b5853c00e7307c7f61814554"
source_updated: "2026-07-23"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/crm_settings)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویرهای صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

> این قابلیت در نسخهٔ 14 معرفی شد.

CRM Settings امکان پیکربندی سرنخها، فرصت فروشها، Quotationها و ارتباطات را متناسب با نیاز کسب‌وکار فراهم می‌کند.

برای دسترسی به CRM Settings، به این مسیر بروید:

> صفحهٔ اصلی > CRM > Settings > CRM Settings

## سرنخ

### Campaign Naming By

این گزینه با تولید خودکار نام کمپین‌های جدید بر اساس قواعد یا الگوهای ازپیش‌تعیین‌شده، نام‌گذاری یکدست را در سازمان تضمین می‌کند. به کاربران کمک می‌کند کمپین‌های یکتا بسازند و نگهداری کنند و اثربخشی آن‌ها را پیگیری کنند.

### Allow سرنخ Duplication based on Emails

اگر این گزینه فعال باشد، سامانه به کاربران اجازه می‌دهد هم‌زمان چند سرنخ با نشانی ایمیل یکسان ایجاد کنند.

### Auto Creation of Contact

سامانه هنگام ایجاد سرنخ به‌طور خودکار یک Contact جدید می‌سازد.

## فرصت فروش

### Close Replied فرصت فروش After Days

اگر فرصت فروشهای زیادی وضعیتی غیر از Open داشته باشند، در صورت انجام‌نشدن هیچ اقدامی، پس از تعداد روزهای تعیین‌شده در این فیلد به‌طور خودکار بسته می‌شوند.

## Quotation

### Default Quotation Validity Days

می‌توانید اعتبار Quotationهای مشتری را به تعداد روز مشخصی محدود کنید. در خود Quotation می‌توانید Valid Till Date را دستی به‌روز کنید. به‌طور پیش‌فرض، تاریخ Valid Till برابر با 30 روز پس از Posting Date مربوط به Quotation تنظیم می‌شود. با توجه به نیاز کسب‌وکارتان، تعداد روزها را در این فیلد تغییر دهید.

## سایر تنظیمات

### Carry Forward Communication and Comments

اگر این گزینه فعال باشد، هنگام تبدیل سرنخ به فرصت فروش و فرصت فروش به Quotation، سامانه ایمیل‌ها و دیدگاه‌های سند مبدأ را به‌طور خودکار کپی می‌کند.
