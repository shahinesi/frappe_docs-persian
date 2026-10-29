---
title: "راه‌اندازی GoCardless"
slug: "gocardless-integration"
source_url: "https://docs.frappe.io/erpnext/gocardless-integration"
source_id: "erpnext/gocardless-integration"
source_version: "0aba6fdbc6657f3dd2097fa0ab80a429e6f61eab2840f15ef4190543ca1eb15e"
source_updated: "2026-02-26"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "پیکربندی درگاه GoCardless برای دریافت آنلاین پرداخت‌های بانکی و پردازش مجوزهای SEPA."
---

برای راه‌اندازی GoCardless، به **کاوش ← یکپارچه‌سازی‌ها ← تنظیمات GoCardless (Explore > یکپارچه سازی‌ها > GoCardless Settings)** بروید.

## تنظیم GoCardless

برای فعال‌کردن GoCardless در حساب ERPNext خود، پارامترهای لازم و **توکن دسترسی (Access Token)** را تنظیم کنید. افزودن **کلید محرمانهٔ وب‌هوک (Webhooks Secret Key)** اختیاری است، اما قویاً توصیه می‌شود.

در صورت نیاز می‌توانید چند درگاه پرداخت GoCardless بسازید. حساب درگاه انتخاب‌شده تعیین می‌کند پرداخت از کدام حساب GoCardless انجام شود.

![تنظیمات GoCardless](https://docs.frappe.io/files/gocardless_account.png)

با فعال‌کردن سرویس، سامانه یک رکورد **درگاه پرداخت** و یک حساب درخت حساب‌ها با نوع **بانک** می‌سازد.

![درگاه پرداخت GoCardless در درخت حساب‌ها](https://docs.frappe.io/files/gocardless_coa.png)

همچنین یک حساب درگاه پرداخت ایجاد می‌شود. در صورت نیاز می‌توانید حساب بانکی پیش‌فرض را تغییر دهید و برای درخواست پرداخت یک الگو بسازید.

![حساب درگاه پرداخت GoCardless](https://docs.frappe.io/files/payment_gateway_account_gocardless.png)

پس از پیکربندی حساب درگاه پرداخت، سامانه می‌تواند پرداخت آنلاین را از طریق GoCardless بپذیرد.

## گردش پرداخت‌های SEPA

هنگام آغاز پرداخت جدید SEPA، از مشتری خواسته می‌شود IBAN (یا شمارهٔ حساب محلی) خود را وارد و مجوز SEPA را تأیید کند.

پس از تأیید مجوز، درخواست پرداخت به GoCardless ارسال و پردازش می‌شود.

اگر مشتری از قبل مجوز معتبر SEPA داشته باشد، به‌جای ارسال درخواست پرداخت برای تأیید دوبارهٔ مشتری، درخواست مستقیماً به GoCardless فرستاده می‌شود. مشتری فقط ایمیل تأیید GoCardless را دریافت می‌کند که اطلاع می‌دهد پرداخت انجام شده است.

## لغو مجوز پرداخت

می‌توانید در GoCardless وب‌هوکی تنظیم کنید تا مجوزهای لغوشده یا منقضی‌شده را خودکار در ERPNext غیرفعال کند.

نشانی نقطهٔ پایانی وب‌هوک:

`https://yoursite.com/api/method/erpnext.erpnext_integrations.doctype.gocardless_settings.webhooks`

در این صورت، **کلید محرمانهٔ وب‌هوک (Webhooks Secret Key)** را هم در تنظیمات حساب GoCardless خود در ERPNext وارد کنید.

## ارزهای تراکنش پشتیبانی‌شده

EUR، DKK، GBP و SEK

منبع: [راه‌اندازی GoCardless](https://docs.frappe.io/erpnext/gocardless-integration). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است.
