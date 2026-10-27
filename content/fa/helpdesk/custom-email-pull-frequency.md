---
title: "تنظیم بازهٔ دریافت ایمیل‌ها"
slug: "custom-email-pull-frequency"
source_url: "https://docs.frappe.io/helpdesk/faq"
source_id: "helpdesk/faq"
source_version: "b6eb236293cb6c2fdfba35d87302f18924f52bed64c5b93ec892bbbbd723e15a"
source_updated: "2026-01-06"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/helpdesk/faq)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر صفحهٔ منبع بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

به‌صورت پیش‌فرض Helpdesk هر 10 دقیقه ایمیل‌ها را دریافت می‌کند. برای تغییر این بازه، یک Server Script کوچک بسازید.

## ساخت Server Script

در Desk به **Server Script** بروید و **Add Server Script** را انتخاب کنید. سپس این کد را در اسکریپت قرار دهید:

```python
frappe.call(
    "frappe.email.doctype.email_account.email_account.pull_emails",
    email_account="Sales"
)
```

`Sales` را با نام حساب ایمیل خود جایگزین کنید.

## پیکربندی زمان‌بندی

نوع اسکریپت را **Scheduler Event** انتخاب و تناوب اجرا را تنظیم کنید:

- **All:** دریافت ایمیل‌ها هر 4 دقیقه انجام می‌شود.
- **CRON:** برای دریافت هر `n` دقیقه، عبارت `*/n * * * *` را وارد کنید.

برای نمونه، عبارت `*/2 * * * *` ایمیل‌ها را هر 2 دقیقه دریافت می‌کند.

| تناوب دلخواه | عبارت CRON |
| --- | --- |
| هر 2 دقیقه | `*/2 * * * *` |
| هر 5 دقیقه | `*/5 * * * *` |
| هر 15 دقیقه | `*/15 * * * *` |

---

**منبع:** [مستندات رسمی Frappe Helpdesk](https://docs.frappe.io/helpdesk/faq). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصویر اصلی در این مخزن بازنشر نشده است.
