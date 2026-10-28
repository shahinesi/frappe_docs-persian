---
title: "مراحل سادهٔ راه‌اندازی Workflow"
slug: "easy-steps-to-setup-workflow"
source_url: "https://docs.frappe.io/erpnext/easy-steps-to-setup-workflow"
source_id: "erpnext/easy-steps-to-setup-workflow"
source_version: "371be1d2afb1135e9d7c222f85cd62af1eba2f78b297b298642e8e5e18dc5502"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/easy-steps-to-setup-workflow)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

اگر یک شرکت برای تأیید یک سند چند سطح دارد، می‌توان برای آن یک گردش‌کار تعریف کرد. در ERPNext به فهرست گردش‌کار بروید، **Create جدید** را انتخاب کنید، نام گردش‌کار را تعیین و موارد زیر را تعریف کنید:

1. وضعیت‌ها (States)
2. قواعد انتقال (Transition Rules)

## وضعیت‌ها

هنگامی که سند برای تأیید از چند سطح عبور می‌کند، برای هر سطح و نقش کاربرِ مربوط، وضعیتی تعریف می‌شود.

![تعریف وضعیت‌ها در گردش‌کار](https://docs.frappe.io/files/Y3TzzU2.png)

## قواعد انتقال

برای نمونه، کاربر فروش فقط اجازه دارد پیش‌فاکتور بسازد و آن را در وضعیت **پیش‌نویس** ذخیره کند. سپس می‌توان آن را برای تأیید به **مدیر فروش** فرستاد. کاربری که این نقش را دارد می‌تواند پیش‌فاکتور را **Approve** یا **Reject** کند. در صورت ردشدن، سند می‌تواند به وضعیت **پیش‌نویس** برگردد و در صورت تأیید، به وضعیت نهایی **Approved** برود.

![نمونهٔ قواعد انتقال در گردش‌کار](https://docs.frappe.io/files/xJUtkGy.png)

## پیام خطا

**A سند cannot be Cancelled before it is Submitted.**

این خطا معمولاً زمانی رخ می‌دهد که وضعیت سند به‌اشتباه روی Cancelled تعریف شده باشد، پیش از آن‌که سند ثبت نهایی شود. مقدار **Doc Status 1** یعنی سند در آن وضعیت ثبت نهایی می‌شود؛ بنابراین وضعیتی با **Doc Status 2** باید فقط در قاعدهٔ انتقالی تعریف شود که از وضعیتی با **Doc Status 1** آغاز می‌شود.

برای شروع، یک گردش‌کار ساده راه‌اندازی کنید و بازخورد خود را دربارهٔ گردش‌کارها با تیم Frappe در میان بگذارید.
