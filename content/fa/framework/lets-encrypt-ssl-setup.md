---
title: "راه‌اندازی HTTPS با سرویس گواهی لتس‌انکریپت"
slug: "lets-encrypt-ssl-setup"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/lets-encrypt-ssl-setup"
source_id: "framework/user/en/bench/guides/lets-encrypt-ssl-setup"
source_version: "4f4b98af2a619422bc974acaf171b6f0978f78d3f6de602638bf39990cb18588"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## پیش‌نیازها

1. باید [راه‌اندازی چندمستاجری در Bench](setup-multitenancy.md) را راه‌اندازی کرده باشید.
2. سایت باید از طریق دامنه‌ای معتبر در دسترس باشد.
3. باید مجوز ریشه روی سرور داشته باشید.

> **اعتبار گواهی:** نسخهٔ منبع این راهنما می‌گوید گواهی‌های Let's Encrypt هر سه ماه منقضی می‌شوند. طبق اطلاعات رسمی فعلی، اعتبار پیش‌فرض گواهی‌ها 90 روز است؛ Let's Encrypt اعلام کرده که تا سال 2028 این مدت به‌تدریج به 45 روز کاهش می‌یابد. برای دیدن وضعیت جاری، [پرسش‌های فنی Let's Encrypt دربارهٔ مدت اعتبار گواهی‌ها](https://letsencrypt.org/docs/faq/#what-is-the-lifetime-for-lets-encrypt-certificates-for-how-long-are-they-valid) را ببینید.

## راه‌اندازی با فرمان Bench

برای دریافت و نصب گواهی با یک فرمان اجرا کنید:

```sh
sudo -H bench setup lets-encrypt [site-name]
```

به پرسش‌های تعاملی پاسخ دهید. این فرمان همچنین، با مجوزهای مدیریتی لازم، در crontab کاربر ریشه ورودی‌ای می‌افزاید که هر ماه برای تمدید خودکار گواهی تلاش می‌کند.

### دامنه‌های سفارشی

می‌توانید Let's Encrypt را برای [افزودن دامنه‌های سفارشی به سایت](adding-custom-domains.md) نیز تنظیم کنید. برای این کار گزینهٔ `--custom-domain` را به‌کار ببرید:

```sh
sudo -H bench setup lets-encrypt [site-name] --custom-domain [custom-domain]
```

### تمدید گواهی

برای تمدید دستی گواهی اجرا کنید:

```sh
sudo bench renew-lets-encrypt
```

## روش دستی قدیمی (تاریخی)

**این بخش، روش قدیمی مبتنی بر `certbot-auto` در نسخهٔ منبع را نگه می‌دارد. آن را برای نصب تازه به‌کار نبرید:** Certbot این روش بسته‌بندی‌شده را کنار گذاشته است. برای دستورالعمل‌های جاری، [راهنمای نصب Certbot برای سیستم‌عامل و وب‌سرور خود](https://certbot.eff.org/instructions?os=pip&ws=nginx) را دنبال کنید.

### دریافت Certbot

نسخهٔ منبع می‌گوید اسکریپت `certbot-auto` را در `/opt` قرار دهید و از نشانی [صفحهٔ اصلی Certbot](https://certbot.eff.org/) دریافت کنید. این روش قدیمی است؛ بخش‌های بعدی فقط برای مراجعه به دستورالعمل تاریخی آمده‌اند.

### توقف Nginx

```sh
sudo service nginx stop
```

### اجرای Certbot قدیمی

در دستور زیر مسیر با `/opt` شروع می‌شود تا با محل دریافت اسکریپت در مرحلهٔ قبل سازگار باشد:

```sh
/opt/certbot-auto certonly --standalone
```

پس از آغاز فرایند Let's Encrypt، چند پرسش نمایش داده می‌شود. متن دقیق آن‌ها ممکن است بسته به سابقهٔ استفاده‌تان متفاوت باشد؛ در نخستین اجرا، Certbot شما را در مراحل راهنمایی می‌کند.

نشانی ایمیلی را وارد کنید تا برای اعلان‌ها و بازیابی کلید ازدست‌رفته به‌کار رود:

![فرم واردکردن نشانی ایمیل برای گواهی](https://assets.digitalocean.com/articles/letsencrypt/le-email.png)

سپس توافق‌نامهٔ Let's Encrypt را بپذیرید:

![صفحهٔ پذیرش توافق‌نامهٔ Let's Encrypt](https://assets.digitalocean.com/articles/letsencrypt/le-agreement.png)

نام دامنه یا دامنه‌ها را وارد کنید. اگر می‌خواهید یک گواهی برای چند نام دامنه کار کند، مانند `example.com` و `www.example.com`، همهٔ آن‌ها را وارد کنید:

![فرم واردکردن نام دامنه‌ها برای گواهی](https://assets.digitalocean.com/articles/letsencrypt/le-domain.png)

### فایل‌های گواهی

پس از دریافت گواهی، فایل‌های PEM زیر را خواهید داشت:

- `cert.pem`: گواهی دامنهٔ شما
- `chain.pem`: گواهی زنجیرهٔ Let's Encrypt
- `fullchain.pem`: ترکیب `cert.pem` و `chain.pem`
- `privkey.pem`: کلید خصوصی گواهی

این گواهی‌ها در پوشهٔ `/etc/letsencrypt/live/example.com` ذخیره می‌شوند.

### تنظیم گواهی برای سایت‌ها

به پوشهٔ سایت در Bench بروید:

```sh
cd frappe-bench/sites/{{site_name}}
```

دو خط زیر را به `site_config.json` بیفزایید:

```json
"ssl_certificate": "/etc/letsencrypt/live/example.com/fullchain.pem",
"ssl_certificate_key": "/etc/letsencrypt/live/example.com/privkey.pem"
```

### بازسازی پیکربندی Nginx

```sh
bench setup nginx
```

### راه‌اندازی دوبارهٔ Nginx

```sh
sudo service nginx restart
```

## تمدید خودکار (آزمایشی)

به‌عنوان کاربر ریشه یا کاربری با دسترسی superuser وارد شوید، `crontab -e` را اجرا کنید و این ورودی را اضافه کنید:

```cron
# renew letsencrypt certificates on 1st monday of every month and get an email if it gets executed
MAILTO="mail@example.com"
0 0 1-7 * * [ "$(date '+\%a')" = "Mon" ] && sudo service nginx stop && /opt/certbot-auto renew && sudo service nginx start
```

این نمونه نیز به `certbot-auto` وابسته است و آزمایشی/قدیمی محسوب می‌شود؛ برای نصب تازه، راهنمای جاری Certbot را دنبال کنید.

منبع: [راه‌اندازی HTTPS با Let's Encrypt](https://docs.frappe.io/framework/user/en/bench/guides/lets-encrypt-ssl-setup). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.


