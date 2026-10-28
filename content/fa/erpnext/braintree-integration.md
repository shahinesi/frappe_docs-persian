---
title: "راه‌اندازی Braintree"
slug: "braintree-integration"
source_url: "https://docs.frappe.io/erpnext/braintree-integration"
source_id: "erpnext/braintree-integration"
source_version: "f236909f52573872f0470b583552e812430ac3bd8deac74d2d7befac441abbeb"
---

برای راه‌اندازی Braintree به مسیر `Explore > Integrations > Braintree Settings` بروید.

## راه‌اندازی Braintree

برای فعال‌کردن Braintree در حساب ERPNext خود، پارامترهای زیر را پیکربندی کنید:

- Merchant ID
- Public Key
- Private Key

در صورت نیاز می‌توانید چند درگاه پرداخت Braintree راه‌اندازی کنید. انتخاب حساب درگاه پرداخت تعیین می‌کند که پرداخت از کدام حساب Braintree استفاده کند.

![تنظیمات Braintree](https://docs.frappe.io/files/braintree_account.png)

پس از فعال‌سازی سرویس، سامانه یک رکورد پرداخت Gateway و یک سرفصل حساب با نوع حساب بانک در درخت حساب‌ها ایجاد می‌کند.

![حساب Braintree در درخت حساب‌ها](https://docs.frappe.io/files/braintree_coa.png)

همچنین یک حساب درگاه پرداخت ایجاد می‌شود. در صورت نیاز می‌توانید حساب بانکی پیش‌فرض را تغییر دهید و برای درخواست پرداخت، الگو بسازید.

![حساب درگاه پرداخت Braintree](https://docs.frappe.io/files/payment_gateway_account_braintree.png)

پس از پیکربندی حساب درگاه پرداخت، سامانهٔ شما می‌تواند پرداخت‌های آنلاین را از طریق Braintree بپذیرد.

## ارزهای تراکنش پشتیبانی‌شده

```text
"AED","AMD","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB",
"BRL","BSD","BWP","BYN","BZD","CAD","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK",
"DOP","DZD","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD",
"HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF",
"KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","MAD","MDL","MKD","MNT","MOP","MUR",
"MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP",
"PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL",
"SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX",
"USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMK","ZWD"
```

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/braintree-integration). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
