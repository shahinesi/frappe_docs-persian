---
title: "پیکربندی HTTPS برای Bench"
slug: "configuring-https"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/configuring-https"
source_id: "framework/user/en/bench/guides/configuring-https"
source_version: "a75b7f464d69e6642c9656228d29fcd24b692838ff263d16104722274b0f9b30"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## دریافت فایل‌های لازم

می‌توانید گواهی SSL را از یک مرجع صدور گواهی معتبر بگیرید یا خودتان بسازید. اگر گواهی خودامضا باشد، مرورگر هشدار می‌دهد که گواهی مورد اعتماد نیست. برای دریافت گواهی رایگان SSL از Let's Encrypt، [راه‌اندازی HTTPS با سرویس گواهی لتس‌انکریپت](lets-encrypt-ssl-setup.md) را ببینید.

فایل‌های لازم:

- گواهی، که معمولاً پسوند `.crt` دارد؛
- کلید خصوصی رمزگشایی‌شده.

## پیش‌نیازها

1. باید [راه‌اندازی چندمستاجری در Bench](setup-multitenancy.md) را راه‌اندازی کرده باشید.
2. سایت باید از طریق یک دامنهٔ معتبر در دسترس باشد.
3. باید مجوز ریشه روی سرور داشته باشید.
4. باید گواهی معتبری داشته باشید که از مرجع صدور گواهی معتبر گرفته شده یا خودامضا باشد.

برای ساخت فایل `.crt` از مرجع گواهی خصوصی، معمولاً باید یک درخواست امضای گواهی (CSR) بسازید. اگر از قبل فایل گواهی `.crt` دارید، می‌توانید این مرحله را رد کنید. برای ساخت CSR و فایل کلید متناظر، این فرمان را اجرا کنید:

```sh
openssl req -new -newkey rsa:2048 -nodes -keyout mydomain.com.key -out mydomain.com.csr
```

فایل CSR با پسوند `.csr` را برای مرجع صدور گواهی خصوصی، مانند GoDaddy یا ComodoSSL، بفرستید تا گواهی معتبر `.crt` متناظر را دریافت کنید.

اگر چند گواهی دارید، برای نمونه گواهی اصلی و میانی، آن‌ها را به هم بچسبانید:

```sh
cat your_certificate.crt CA.crt >> certificate_bundle.crt
```

همچنین مطمئن شوید فقط کاربر ریشه بتواند کلید خصوصی را بخواند:

```sh
chown root private.key
chmod 600 private.key
```

## انتقال فایل‌ها به مسیر مناسب

```sh
mkdir /etc/nginx/conf.d/ssl
mv private.key /etc/nginx/conf.d/ssl/private.key
mv certificate_bundle.crt /etc/nginx/conf.d/ssl/certificate_bundle.crt
```

## تنظیم پیکربندی Nginx

مسیر گواهی و کلید خصوصی سایت را تعیین کنید:

```sh
bench set-ssl-certificate site1.local /etc/nginx/conf.d/ssl/certificate_bundle.crt
bench set-ssl-key site1.local /etc/nginx/conf.d/ssl/private.key
```

## ساخت پیکربندی Nginx

```sh
bench setup nginx
```

## بارگذاری مجدد Nginx

```sh
sudo service nginx reload
```

یا در CentOS 7:

```sh
systemctl reload nginx
```

پس از پیکربندی SSL، همهٔ ترافیک HTTP به HTTPS هدایت می‌شود.

منبع: [پیکربندی HTTPS برای Bench](https://docs.frappe.io/framework/user/en/bench/guides/configuring-https). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
