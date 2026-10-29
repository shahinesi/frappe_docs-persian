---
title: "افزودن دامنه‌های سفارشی به سایت"
slug: "adding-custom-domains"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/adding-custom-domains"
source_id: "framework/user/en/bench/guides/adding-custom-domains"
source_version: "091efb07cb899d63496a54f73a9a11d8a6f09f2b5b3355d59656a08e72b1c75b"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

برای سایت خود چند دامنهٔ سفارشی اضافه کنید. کافی است دستور زیر را اجرا کنید:

```sh
bench setup add-domain [desired-domain]
```

پس از اجرای دستور، از شما پرسیده می‌شود دامنهٔ سفارشی را برای کدام سایت تنظیم کنید.

همچنین می‌توانید با گزینه‌های زیر گواهی SSL را برای دامنهٔ سفارشی تنظیم کنید:

```text
--ssl-certificate [path-to-certificate]
--ssl-certificate-key [path-to-certificate-key]
```

نمونه:

```sh
bench setup add-domain custom.erpnext.com --ssl-certificate /etc/letsencrypt/live/erpnext.cert --ssl-certificate-key /etc/letsencrypt/live/erpnext.key
```

پیکربندی دامنه در فایل `site_config.json` همان سایت ذخیره می‌شود:

```json
"domains": [
  {
    "ssl_certificate": "/etc/letsencrypt/live/erpnext.cert",
    "domain": "erpnext.com",
    "ssl_certificate_key": "/etc/letsencrypt/live/erpnext.key"
  }
],
```

برای اعمال دامنهٔ سفارشی، باید پیکربندی Nginx را دوباره بسازید و سرویس Nginx را بارگذاری مجدد کنید:

```sh
bench setup nginx
sudo service nginx reload
```

منبع: [افزودن دامنه‌های سفارشی به سایت](https://docs.frappe.io/framework/user/en/bench/guides/adding-custom-domains). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
