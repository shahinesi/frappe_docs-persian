---
title: "اتصال Outlook به Frappe Helpdesk با OAuth"
slug: "setting-up-outlook-for-frappe"
source_url: "https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe"
source_id: "helpdesk/faq/setting-up-outlook-for-frappe"
source_version: "ca6dba3d372d6f303d39b871220c7211d6aae11c154ac78fe33872a6c79c176a"
source_updated: "2026-09-23"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصاویر رابط کاربری صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

می‌توانید صندوق Microsoft 365 / Outlook را به‌جای گذرواژه با OAuth به Frappe وصل کنید. OAuth روش پیشنهادی است، چون Microsoft در حال کنارگذاشتن احراز هویت پایه (با گذرواژه) برای Exchange Online است و Frappe می‌تواند بدون ذخیرهٔ گذرواژهٔ صندوق ایمیل شما، ایمیل بفرستد و دریافت کند. راه‌اندازی در دو بخش انجام می‌شود: ابتدا در **Microsoft Entra شناسه** (Azure) برنامه‌ای ثبت می‌کنید، سپس **برنامه متصل** و **حساب کاربری ایمیل** را در Frappe به آن متصل می‌کنید.

## پیش از شروع

- سایت Frappe باید از طریق **HTTPS** ارائه شود؛ سایت توسعهٔ محلی روی `localhost` نیز قابل‌قبول است.
- به حساب Microsoft 365 با **دسترسی مدیریتی به Azure / Microsoft Entra شناسه** نیاز دارید.
- برای ساخت برنامه متصل به دسترسی مدیر در سایت Frappe نیاز دارید.

## بخش 1: ثبت برنامه در Microsoft Entra شناسه

### گام 1: ساخت App Registration

1. وارد [Azure Portal](https://portal.azure.com) شوید و **Microsoft Entra شناسه → App registrations** را باز کنید.
2. روی **جدید registration** کلیک کنید.
3. نامی برای برنامه انتخاب کنید؛ برای نمونه `Frappe Email App`. نوع حساب‌های پشتیبانی‌شده را روی مقدار پیش‌فرض بگذارید و **Register** را بزنید. نشانی redirect را بعداً، پس از ساخت آن توسط Frappe، اضافه می‌کنید.
4. پس از تکمیل فرم، روی دکمهٔ **Register** در پایین آن کلیک کنید.

### گام 2: افزودن مجوزهای API

1. برنامهٔ تازه را باز کنید و به **API permissions → Add a مجوز** بروید.
2. گزینهٔ **Microsoft Graph** و سپس **Microsoft Graph → Delegated permissions** را انتخاب کنید.
3. روی **Grant admin consent for** کلیک و آن را تأیید کنید. وضعیت هر مجوز باید با علامت سبز نشان داده شود.

> **یادداشت منبع:** snapshot متنی صفحه می‌گوید «مجوزهای زیر را اضافه کنید»، اما نام مجوزها در متن Markdown واکشی‌شده درج نشده است. برای فهرست دقیق، تصویرها و راهنمای رسمی مرتبط با ثبت برنامه را در [صفحهٔ منبع](https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe) بررسی کنید؛ در این ترجمه نام مجوزها حدس زده نشده است.

### گام 3: ساخت سیکرت کلاینت

1. به **Certificates & secrets → جدید سیکرت کلاینت** بروید یا در **بررسی اجمالی** روی **Add a secret** کلیک کنید.
2. توضیحی بنویسید، زمان انقضا را انتخاب و **افزودن** را بزنید.
3. فوراً **مقدار** مربوط به secret را کپی و در جای امن نگهداری کنید.

> **توجه:** مقدار **مقدار** را کپی کنید، نه **Secret شناسه** را. مقدار فقط یک‌بار نمایش داده می‌شود و پس از ترک صفحه دیگر قابل‌بازیابی نیست.

### گام 4: دریافت شناسه‌ها و endpoint

در صفحهٔ **بررسی اجمالی** برنامه، این موارد را کپی کنید:

- **Application (client) شناسه**
- **Directory (tenant) شناسه**
- **OpenID Connect Metadata سند شناسه** (در بخش endpoints)

نشانی پیکربندی OpenID این قالب را دارد؛ آن را برای بخش بعد نگه دارید:

```text
https://login.microsoftonline.com/your_tenant_id/v2.0/.well-known/openid-configuration
```

## بخش 2: ساخت برنامه متصل در Frappe

1. در Frappe به **برنامه متصل** بروید و **جدید** را انتخاب کنید (`/app/connected-app/new`).
2. نشانی پیکربندی OpenID را در فیلد **پیکربندی OpenID** جای‌گذاری کنید و روی **دریافت پیکربندی OpenID** کلیک کنید. Frappe endpointهای authorization، token و revocation را خودکار پر می‌کند. سپس نام Provider را **Outlook** وارد کنید.
3. **Client شناسه** و مقدار **سیکرت کلاینت مقدار** را که در بخش 1 ذخیره کردید وارد کنید.
4. **دامنه‌ها** لازم را اضافه کنید:

   ```text
   https://outlook.office365.com/.default
   ```

   ```text
   offline_access
   ```

5. برنامه متصل را **ذخیره** کنید.

> **توجه:** دامنه برابر `.default` به Microsoft می‌گوید همهٔ مجوزهایی را که در گام 2 تأیید کرده‌اید اعطا کند؛ بنابراین لازم نیست دوباره تک‌تک آن‌ها را اینجا وارد کنید.

پس از ذخیره، Frappe در برنامه متصل یک **URI تغییر مسیر** می‌سازد. قالب آن چنین است:

```text
https://your_site.com/api/method/frappe.integrations.doctype.connected_app.connected_app.callback
```

این مقدار را کپی کنید، به برنامهٔ Azure برگردید، **Authentication → Add a platform → Web** را باز کنید، آن را به‌عنوان URI تغییر مسیر وارد و **ذخیره** کنید.

در پایان روی **Connect به Provider** کلیک کنید تا به Frappe اجازه دهید بر اساس دامنههای تعیین‌شده به منابع Outlook دسترسی پیدا کند.

## بخش 3: اتصال حساب کاربری ایمیل

پیش از تأیید دسترسی، در Frappe با **کاربر واقعی صندوق ایمیل** وارد شوید، نه ادمین؛ اتصال به کاربری اعطا می‌شود که در همان لحظه وارد شده است.

1. به **حساب کاربری ایمیل** بروید و حساب تازه‌ای بسازید یا حساب موجودی را باز کنید.
2. **ایمیل Address** صندوق را وارد کنید.
3. سرورهای ورودی و خروجی را تنظیم کنید:

   ```text
   Incoming (IMAP):  outlook.office365.com   port 993, SSL
   Outgoing (SMTP):  smtp.office365.com      port 587, TLS
   ```

4. گزینهٔ **Use OAuth** را فعال و **برنامه متصل** ساخته‌شده در بخش 2 را پیوند دهید.
5. **ذخیره** را بزنید و سپس **مجوز دسترسی به API** را انتخاب کنید. Microsoft از شما می‌خواهد وارد شوید و درخواست را تأیید کنید. پس از تأیید، به Frappe بازمی‌گردید و حساب متصل می‌شود.
6. در صورت نیاز حساب را **Default ورودی** و/یا **خروجی پیش‌فرض** کنید. برای احراز هویت از گزینهٔ Use OAuth استفاده و سپس **مجوز دسترسی به API** را بزنید.

اگر همه‌چیز درست تنظیم شده باشد، به صفحهٔ Outlook هدایت می‌شوید تا حسابی را که می‌خواهید به آن دسترسی بدهید انتخاب کنید. پس از تأیید، اتصال ایمیل به Frappe کامل است.

## احراز هویت Service Principal

حساب کاربری ایمیل برای دسترسی به یک کاربر نیاز دارد. به همین دلیل استفاده از Shared Mailbox اختصاصی Frappe دشوار بود؛ چون باید به کاربری که وارد Frappe می‌شود مجوز **Full Access** داده می‌شد.

این قابلیت به Frappe اجازه می‌دهد خودش را برای نمونه به Exchange Online احراز هویت کند و از Shared Mailbox ایمیل بفرستد و دریافت کند، بدون آنکه لازم باشد به هر کاربری که به Frappe دسترسی دارد مجوز Full Access واگذار شود.

برای استفاده از این روش، گزینهٔ مربوط به آن در `Email Account` وجود دارد.

## عیب‌یابی

- **ایمیل خروجی ارسال نمی‌شود:** حتی با OAuth، گزینهٔ **SMTP AUTH** باید برای صندوق در Exchange admin center فعال باشد. وضعیت آن را در [راهنمای SMTP AUTH](https://aka.ms/smtp_auth_disabled) بررسی کنید.
- **احراز هویت مسدود می‌شود:** اگر سازمان از Microsoft **Security Defaults** استفاده می‌کند (که احراز هویت قدیمی را مسدود می‌کند)، مطمئن شوید SMTP AUTH برای همان حساب فعال است.
- **خطای «Admin consent required»:** به **API permissions** در Azure برگردید و بررسی کنید **Grant admin consent** برای همهٔ مجوزها انتخاب شده باشد.
- **حساب نادرست وصل شده است:** درحالی‌که با کاربر نهایی موردنظر، نه ادمین، وارد Frappe هستید دوباره مجوزدهی کنید.

## منابع

- [آموزش اتصال Frappe/ERPNext به سرویس‌های ایمیل Microsoft 365 با OAuth](https://discuss.frappe.io/t/tutorial-connecting-frappe-erpnext-to-microsoft-365-mail-services-oauth/106003)
- [نصب](installation.md)
- [ارتباط ایمیلی](email-communication.md)

---

**منبع:** [اتصال Outlook به Frappe Helpdesk با OAuth](https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر اصلی در این مخزن بازنشر نشده‌اند.
