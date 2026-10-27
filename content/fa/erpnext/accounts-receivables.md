---
title: "حساب‌های دریافتنی"
slug: "حساب‌های-دریافتنی"
source_url: "https://docs.frappe.io/erpnext/accounts-receivables"
source_id: "erpnext/accounts-receivables"
source_version: "b2594b62ad4f0bd6fd69325548ba1cf04c0e08467ab4cc748e7a8185a70922bd"
---

Nova Industries برای چند مشتری فاکتور صادر و آن‌ها را Submit کرده است. جمع فروش نشان می‌دهد چه مبلغی صورتحساب شده، اما تیم وصول پاسخ دیگری می‌خواهد: چه کسانی هنوز بدهکارند، کدام فاکتورها سررسید گذشته‌اند و کدام پرداخت یا بستانکاری موجود به‌درستی تخصیص نیافته است؟

گزارش **Accounts Receivable** همهٔ دریافتنی‌های باز از مشتریان را در یک نما گرد می‌آورد. مبلغ اصلی فاکتور، پرداخت‌ها و Credit Noteهای تخصیص‌یافته، مبلغ تسویه‌نشدهٔ باقی‌مانده، تاریخ سررسید و مدت بازماندن مانده را نشان می‌دهد.

برای نمونه، گزارش ممکن است نشان دهد Northstar Retail هنوز بخشی از یک فاکتور را بدهکار است، درحالی‌که مشتری دیگری پیش‌پرداخت تخصیص‌نیافته دارد. از این گزارش برای اولویت‌بندی پیگیری وصول، بررسی تخصیص‌های ناهماهنگ و برآورد وجه دریافتی استفاده کنید؛ سپس فاکتور یا پرداختی را که نیاز به رسیدگی دارد باز کنید.

## پیش از شروع

[Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)های خود را Submit و دریافت‌های مشتری را با [Payment Entry](https://docs.frappe.io/erpnext/payment-entry) ثبت کنید. تراکنش‌های Draft بر ماندهٔ دریافتنی اثر نمی‌گذارند. همچنین تاریخ گزارش و Company را بررسی کنید.

## اجرای گزارش

1. **Accounts Receivable** را جست‌وجو کنید.
2. **Company** و **Posting Date** را انتخاب کنید.
3. برای محدودکردن نتیجه، در صورت نیاز فیلترهایی مانند Customer، Receivable Account، Cost Center، Project، Territory یا Customer Group اضافه کنید.
4. ردیف‌های فاکتور و کل مبلغ تسویه‌نشده را بررسی کنید.

![گزارش Accounts Receivable با مانده‌های مشتریان](https://novacompanies.m.frappe.cloud/files/accounts-receivables-accounts-receivable-report575529.png)

## درک ستون‌ها

| ستون | معنا |
|---|---|
| Posting Date | تاریخی که ثبت حسابداری در آن انجام شده است. |
| Party | مشتری‌ای که مبلغ را بدهکار است. |
| Voucher No | Sales Invoice، Journal Entry یا تراکنش مبدأ دیگر. |
| Due Date | تاریخی که پرداخت تا آن موعد انتظار می‌رود. |
| Invoiced Amount | مبلغ اصلی دریافتنی که Voucher ایجاد کرده است. |
| Paid Amount | مبلغی که تاکنون در برابر Voucher تخصیص یافته است. |
| Credit Note | بستانکاری‌ای که قبلاً در برابر Voucher تخصیص یافته است. |
| Outstanding Amount | مبلغی که پس از پرداخت‌ها و بستانکاری‌ها همچنان باز است. |
| Age (Days) | تعداد روزهای استفاده‌شده برای محاسبهٔ سن مانده. |
| Ageing buckets | گروه‌بندی مبلغ تسویه‌نشده در بازه‌هایی مانند 0–30 و 31–60 روز. |

اگر مشتری پیش‌پرداخت یا بستانکاریِ تخصیص‌نیافته داشته باشد، گزارش می‌تواند ماندهٔ منفی نشان دهد. همچنین اگر پرداختی وجود داشته باشد اما به فاکتور تخصیص نیافته باشد، ممکن است فاکتور قدیمی را همچنان تسویه‌نشده نمایش دهد.

## خلاصهٔ Accounts Receivable

وقتی به‌جای جزئیات هر فاکتور، یک ردیف تجمیعی برای هر مشتری می‌خواهید، از **Accounts Receivable Summary** استفاده کنید. این گزارش برای جلسه‌های پیگیری وصول و بررسی ریسک اعتباری در سطح مشتری مفید است. پیش از اقدام، به گزارش جزئیات برگردید تا Voucherهای دقیق را شناسایی کنید.

## پیگیری مانده‌های سررسیدگذشته

- برای بررسی برنامهٔ پرداخت، Sales Invoice را از **Voucher No** باز کنید.
- برای فرستادن صورت‌حساب به چند مشتری، از [Process Statement of Accounts](https://docs.frappe.io/erpnext/process-statement-of-accounts) استفاده کنید.
- اگر برای فاکتور سررسیدگذشته یادآوری رسمی همراه با بهره یا کارمزد لازم است، [Dunning](https://docs.frappe.io/erpnext/dunning) بسازید.
- اگر رسید یا بستانکاری وجود دارد اما به فاکتور درست تخصیص نیافته، از [Payment Reconciliation](https://docs.frappe.io/erpnext/payment-reconciliation) استفاده کنید.
- برای برگشت تأییدشده یا کاهش مبلغ فاکتور، [Credit Note](https://docs.frappe.io/erpnext/credit-note) بسازید.

## مشکلات رایج

**پرداخت Submitشده مبلغ فاکتور را کاهش نمی‌دهد**

بررسی کنید Payment Entry به همان فاکتور ارجاع داده باشد. اگر پرداخت تخصیص نیافته است، آن را با فاکتور تطبیق دهید.

**گزارش با General Ledger مطابقت ندارد**

فیلترهای Company، تاریخ، ارز، طرف تجاری و حساب دریافتنی را تأیید کنید. گزارش Accounts Receivable بر اساس Voucher سازمان‌دهی شده، درحالی‌که [General Ledger](https://docs.frappe.io/erpnext/general-ledger) ثبت‌های منفرد دفترکل را نشان می‌دهد.

**فاکتور در بازهٔ سنی نادرست نمایش داده می‌شود**

بررسی کنید سن مطالبات بر اساس Due Date محاسبه می‌شود یا Posting Date؛ سپس برنامهٔ پرداخت فاکتور را مرور کنید.

## موضوعات مرتبط

- [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
- [Payment Entry](https://docs.frappe.io/erpnext/payment-entry)
- [Credit Note](https://docs.frappe.io/erpnext/credit-note)
- [Process Statement of Accounts](https://docs.frappe.io/erpnext/process-statement-of-accounts)
- [Sales Interest / Dunning](https://docs.frappe.io/erpnext/dunning)
- [گزارش Accounts Receivable and Payable](accounts-receivable-and-payable.md)

---
منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/accounts-receivables). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
