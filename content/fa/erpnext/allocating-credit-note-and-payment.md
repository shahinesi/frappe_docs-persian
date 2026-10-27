---
title: "تخصیص بستانکاری و پرداخت"
slug: "تخصیص-بستانکاری-و-پرداخت"
source_url: "https://docs.frappe.io/erpnext/allocating-credit-note-and-payment"
source_id: "erpnext/allocating-credit-note-and-payment"
source_version: "f67353fe32ac7791f28480396b66ca33e860f3dfada079ab65cbe7f4d7a1d02f"
---

وقتی Credit Note یا پرداخت تخصیص‌نیافته باید یک Sales Invoice مشخص را تسویه کند، آن را تخصیص دهید. تخصیص، مانده‌های تسویه‌نشده را به‌روز می‌کند، بی‌آن‌که فروش یا پرداخت دیگری ایجاد کند.

## پیش از شروع

تأیید کنید Sales Invoice، Credit Note و Payment Entry برای یک Customer، Company، ارز و حساب دریافتنی Submit شده باشند. بستانکاری یا پرداخت باید هنوز مبلغ تخصیص‌نیافته داشته باشد.

## تخصیص با Payment Reconciliation

1. **Payment Reconciliation** را جست‌وجو کنید.
2. Company، نوع طرف **Customer**، Customer و حساب دریافتنی را انتخاب کنید.
3. پرداخت‌ها و فاکتورهای تخصیص‌نیافته را واکشی کنید.
4. در بخش پرداخت‌ها، Credit Note یا Payment Entry را انتخاب کنید.
5. در بخش فاکتورها، Sales Invoice را انتخاب کنید.
6. مبلغی را که باید تخصیص یابد وارد کنید.
7. مبلغ‌های تخصیص‌نیافته و تسویه‌نشدهٔ باقی‌مانده را بررسی کنید.
8. **Reconcile** را انتخاب کنید.

ابزار Payment Reconciliation فاکتورهای باز و پرداخت‌ها یا Credit Noteهای قابل‌استفاده را کنار هم نمایش می‌دهد. پیش از تخصیص مبلغ، فقط مواردی را انتخاب کنید که باید با هم تطبیق داده شوند.

[تصویر Payment Reconciliation با Sales Invoiceهای باز و پرداخت تخصیص‌نیافتهٔ مشتری](https://novacompanies.m.frappe.cloud/files/sales-receivables-allocating-credit-note-and-payment-payment-reconciliation.png)

می‌توانید یک پرداخت را میان چند فاکتور تقسیم کنید یا چند بستانکاری را با یک فاکتور تطبیق دهید؛ به‌شرط آن‌که مبلغ تخصیص از مبلغ قابل‌استفاده یا ماندهٔ تسویه‌نشده بیشتر نشود.

## بررسی نتیجه

گزارش [Accounts Receivable](accounts-receivables.md) را باز و این موارد را تأیید کنید:

- مبلغ تسویه‌نشدهٔ Sales Invoice کاهش یافته است؛
- مبلغ تخصیص‌نیافتهٔ Credit Note یا Payment Entry کاهش یافته است؛
- تخصیص به‌تنهایی ماندهٔ کل Customer را تغییر نداده است.

تخصیص، ثبت‌های بدهکار و بستانکار موجود را با هم تطبیق می‌دهد. درآمد، مالیات، موجودی یا حرکت نقدی جدیدی ثبت نمی‌کند.

## چه زمانی از Journal Entry استفاده کنیم؟

فقط زمانی از Journal Entry استفاده کنید که تعدیل حسابداری را نتوان با Payment Reconciliation انجام داد. Customer را به‌عنوان Party وارد کنید و Sales Invoice یا Credit Note درست را در **Reference Type** و **Reference Name** انتخاب کنید. اگر ارجاع‌ها وارد نشوند، Voucherها باز می‌مانند؛ حتی اگر ماندهٔ حساب درست به‌نظر برسد.

## عیب‌یابی

**بستانکاری یا فاکتور در فهرست نیست**

وضعیت Submit، Customer، Company، ارز، حساب دریافتنی و مبلغ باقی‌ماندهٔ تخصیص‌نیافته یا تسویه‌نشده را بررسی کنید.

**دفترکل تراز است، اما فاکتور پرداخت‌نشده مانده است**

احتمالاً ارجاع فاکتور در ثبت وجود ندارد. پرداخت را تطبیق دهید یا Journal Entry دارای ارجاع را اصلاح کنید.

**تخصیص اشتباه انجام شده است**

در صورت وجود، از اقدام پشتیبانی‌شدهٔ لغو تطبیق استفاده و سپس Voucherهای درست را تطبیق دهید. سندهای فروش نامرتبط را لغو نکنید.

## موضوعات مرتبط

- [Credit Note](https://docs.frappe.io/erpnext/credit-note)
- [Payment Entry](https://docs.frappe.io/erpnext/payment-entry)
- [Payment Reconciliation](https://docs.frappe.io/erpnext/payment-reconciliation)
- [Accounts Receivables](accounts-receivables.md)
- [Journal Entry](https://docs.frappe.io/erpnext/journal-entry)

---
منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/allocating-credit-note-and-payment). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصویر اصلی فقط به فایل رسمی پیوند داده شده و در مخزن بازنشر نشده است.
