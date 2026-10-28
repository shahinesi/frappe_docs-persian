---
title: "ثبت TDS کسرشده توسط مشتری در Payment Entry در ERPNext"
slug: "booking-customer-deducted-tds-in-payment-entry-in-erpnext"
source_url: "https://docs.frappe.io/erpnext/booking-customer-deducted-tds-in-payment-entry-in-erpnext"
source_id: "erpnext/booking-customer-deducted-tds-in-payment-entry-in-erpnext"
source_version: "ddda35cda5e616335c7d6a6cfc98c119572266bf61fb91817f0b0b2adabbe827"
---

:::tip
برای کسب‌وکارهای هندی، TDS (Tax Deducted at Source) معادل Tax Withholding است؛ این قابلیت به‌صورت استاندارد در ERPNext وجود دارد.
:::

مشتری هنگام پرداخت، TDS (مالیات کسرشده در مبدأ) را کسر کرده و مبلغ کسرشده را در درگاه مالیات بر درآمد، به نام PAN تأمین‌کننده واریز کرده است. بر اساس فرایند حسابداری سازمان:

- TDS باید هنگام دریافت وجه ثبت شود.
- مبلغ کسرشده باید به حساب **TDS Receivable** منتقل شود.
- ماندهٔ بدهی مشتری باید به‌طور کامل تسویه شود.

بااین‌حال، کاربران روش درست ثبت کسری TDS در Payment Entry در ERPNext را پیدا نمی‌کنند.

# راهکار

در ERPNext، می‌توان TDS کسرشده توسط مشتری را مستقیماً هنگام ثبت Payment Entry، در بخش **Deductions** ثبت کرد.

فرض کنید یک Sales Invoice ثبت‌نهایی‌شده به مبلغ 1,00,000 وجود دارد.

**اکنون سازمان می‌خواهد TDS کسرشده را در Payment Entry ثبت کند.**

### مراحل ثبت Payment Entry

یک Payment Entry ایجاد کنید:

- **Payment Type:** Receive
- **Party Type:** مشتری
- **Party:** مشتری را انتخاب کنید.

### واردکردن مبلغ واقعی دریافتی

اگر مشتری پیش از پرداخت TDS را کسر می‌کند، از این مثال استفاده کنید:

- مبلغ صورتحساب: ₹1,00,000
- TDS کسرشده توسط مشتری: ₹10,000
- مبلغ واریزشده به بانک: ₹90,000

**مقدار Paid Amount را برابر ₹90,000 وارد کنید.**

![واردکردن مبلغ واقعی دریافتی در Payment Entry](https://docs.frappe.io/files/Screenshot%202026-05-29%20at%2010.50.47%20AM.png)

### افزودن TDS به جدول Deductions &amp; Loss

![افزودن TDS در جدول Deductions & Loss](https://docs.frappe.io/files/Screenshot%202026-05-29%20at%2010.51.31%20AM.png)

| حساب | مبلغ |
| --- | ---: |
| TDS Receivable | ₹10,000 |

این تعدیل، صورتحساب را به‌طور خودکار بابت کل مبلغ تسویه می‌کند.

# اثر حسابداری

پس از ثبت نهایی Payment Entry، سندهای حسابداری زیر ایجاد می‌شوند.

![سندهای حسابداری پس از ثبت Payment Entry](https://docs.frappe.io/files/Screenshot%202026-05-29%20at%2010.51.59%20AM.png)

# نتیجه

پس از ثبت نهایی Payment Entry:

- ماندهٔ بدهی مشتری صفر می‌شود.
- مبلغ TDS به‌طور جداگانه در **TDS Receivable** پیگیری می‌شود.
- بانک فقط وجه خالص را دریافت می‌کند.

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/booking-customer-deducted-tds-in-payment-entry-in-erpnext). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
