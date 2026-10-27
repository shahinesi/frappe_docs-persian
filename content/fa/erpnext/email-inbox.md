---
title: "صندوق ورودی ایمیل"
slug: "email-inbox"
source_url: "https://docs.frappe.io/erpnext/email-inbox"
source_id: "erpnext/email-inbox"
source_version: "1e72cbab5d7a295bf36cb9d93e373bf9bfb6d7057403e597c41b30114f9410c8"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/email-inbox)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

**پس از افزودن یک حساب ایمیل، صندوق ورودی ایمیل در دسترس قرار می‌گیرد.**

در کسب‌وکار، ایمیل‌های تراکنشی زیادی با مشتریان، تأمین‌کنندگان و همکاران ردوبدل می‌شود. قابلیت Email Inbox همهٔ ایمیل‌های کاری را به حساب ERPNext شما می‌آورد. با کنار هم قراردادن ایمیل‌های کاری و جزئیات تراکنش‌ها، ERPNext به بستری یکپارچه برای دسترسی به اطلاعات کسب‌وکار تبدیل می‌شود.

در ERPNext می‌توانید برای هر کاربر سامانه، Email Inbox جداگانه پیکربندی کنید. مراحل زیر نحوهٔ تنظیم صندوق ورودی برای یک کاربر را شرح می‌دهند.

## 1. ایجاد کاربر

Email Inbox را فقط می‌توان برای کاربر سامانه پیکربندی کرد. بنابراین مطمئن شوید خودتان و همکارانتان را به‌عنوان User افزوده و مجوزهای لازم را به آن‌ها داده‌اید.

برای آشنایی با افزودن کاربر جدید، به صفحهٔ [User](/erpnext/adding-users) بروید.

## 2. ایجاد Email Domain

Email Domain سرویس‌های زیر به‌صورت پیش‌فرض در دسترس است و می‌توانید مستقیماً به ایجاد [Email Account](/erpnext/email-account) بروید. اطلاعات بیشتر دربارهٔ [ایجاد Email Domain](/erpnext/email-domain) را ببینید.

- **Gmail**
- **Yahoo**
- **Sparkpost**
- **SendGrid**
- **Outlook.com**
- **Yandex.mail**

![سرویس‌های ایمیل](https://docs.frappe.io/files/email-service.png)

برای ارسال و دریافت ایمیل از سرویس‌های دیگر، مانند WebMail یا Gmail، در حساب ERPNext باید یک رکورد Email Domain بسازید. جزئیات درگاه ایمیل، مانند نشانی SMTP، شمارهٔ درگاه و مشخصات IMAP یا POP3، در این رکورد ذخیره می‌شوند. اگر پیش‌تر یک نرم‌افزار محلی ایمیل، مانند Outlook، پیکربندی کرده‌اید، اطلاعات Email Domain را نیز به شیوه‌ای مشابه وارد کنید.

برای افزودن Email Domain تازه، به مسیر زیر بروید:

> Home > Settings > Emails > Email Domain > New

![Email Domain](https://docs.frappe.io/files/email-domain.png)

اطلاعات بیشتر را در [مستندات Email Domain](/erpnext/email-domain) بخوانید. پس از پیکربندی Email Domain برای سرویس ایمیل، می‌توان از آن برای ایجاد حساب‌های ایمیل همهٔ کاربران حساب ERPNext استفاده کرد.

## 3. ایجاد Email Account

برای کاربر یک Email Account بر اساس Email ID او بسازید. برای هر کاربری که می‌خواهید حساب ایمیلش با ERPNext یکپارچه شود، باید یک رکورد Email Account ایجاد کنید.

اگر Email Account همکارتان را می‌سازید و گذرواژهٔ ایمیل او را نمی‌دانید، گزینهٔ **Awaiting Password** را فعال کنید. با این تنظیم، هنگام دسترسی کاربرِ مربوط به حساب ERPNext، از او خواسته می‌شود گذرواژهٔ ایمیل را وارد کند.

![گذرواژهٔ ایمیل](https://docs.frappe.io/files/email-password.png)

> اگر Email Account را برای Email Inbox یک کاربر می‌سازید، فیلد **Append To** را خالی بگذارید.

برای جزئیات بیشتر، [مستندات Email Account](/erpnext/email-account) را بخوانید.

## 4. پیوند دادن Email Account به رکورد User

پس از ایجاد Email Account برای کاربر، همان حساب را در رکورد User انتخاب کنید. به این ترتیب، ایمیل‌های دریافت‌شده در آن Email ID فقط برای همین کاربر در حساب ERPNext شما قابل‌دسترسی خواهند بود.

![پیوند ایمیل به کاربر](https://docs.frappe.io/files/email-user-link.png)

می‌توانید چند حساب ایمیل را به یک کاربر پیوند دهید.

## 5. استفاده از Email Inbox

اگر Email Inbox را طبق مراحل بالا درست پیکربندی کرده باشید، پس از ورود کاربر، آیکون Email Inbox نمایش داده می‌شود. با انتخاب آن، نمای Email Inbox در حساب ERPNext باز می‌شود. همهٔ پیام‌های دریافتی در آن حساب دریافت و در این نما فهرست می‌شوند. کاربر می‌تواند ایمیل‌ها را باز کند و اقدام‌های مختلفی روی آن‌ها انجام دهد.

### 5.1 پوشه‌ها

در ERPNext می‌توانید چند Email Account را به یک کاربر پیوند دهید. برای رفتن به صندوق ورودی حساب دیگری یا دسترسی به پوشه‌هایی مانند ایمیل‌های ارسالی، هرزنامه و زباله‌دان، در نوار کناری سمت چپ **Email Inbox** را انتخاب کنید.

![پوشه‌های ایمیل](https://docs.frappe.io/files/email-folders.png)

### 5.2 اقدام‌ها

روی ایمیل‌های صندوق ورودی می‌توانید اقدام‌هایی مانند Reply، Forward، Mark as Spam یا انتقال به Trash را انجام دهید.

![اقدام‌های ایمیل](https://docs.frappe.io/files/email-actions.png)

### 5.3 پیونددهی دوباره

با توجه به محتوای ایمیل، می‌توانید آن را دوباره به سندی مانند Issue، Lead یا Opportunity پیوند دهید. نوع سند و سپس خود سندی را که می‌خواهید ایمیل به آن پیوند بخورد انتخاب کنید.

![ایجاد سند از ایمیل](https://docs.frappe.io/files/make-from-email.png)

### 6. موضوعات مرتبط

- [Email Account](/erpnext/email-account)
- [ارسال ایمیل](/erpnext/sending-email)
- [Email Domain](/erpnext/email-domain)
