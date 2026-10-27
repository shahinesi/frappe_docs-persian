---
title: "چرا نمی‌توانم Sales Order یا Sales Invoice را لغو، حذف یا تغییر دهم؟"
slug: "cancel-delete-or-change-sales-documents"
source_url: "https://docs.frappe.io/erpnext/cancel-delete-or-change-sales-documents"
source_id: "erpnext/cancel-delete-or-change-sales-documents"
source_version: "bc9cea803d4c214bf84a49edde910fc56d941113facfb933a873ad041cb0a5de"
---

Sales Order یا Sales Invoice ثبت‌نهایی‌شده بخشی از سوابق شماست؛ بنابراین ERPNext تغییرات مجاز را محدود می‌کند. این صفحه توضیح می‌دهد چه مواردی را می‌توان در همان سند تغییر داد، چه زمانی باید سند را لغو و اصلاح کنید و چرا گاهی لغو یا حذف ممکن نیست.

## تغییر Sales Order ثبت‌نهایی‌شده: Update Items

در Sales Order ثبت‌نهایی‌شده (که بسته یا تکمیل نشده است)، روی **Update Items** کلیک کنید. می‌توانید:

- مقدار، نرخ و تاریخ تحویل یک ردیف را تغییر دهید؛
- ردیف جدید اضافه کنید؛
- ردیفی را حذف کنید که تحویل، صورتحساب یا سفارش نشده است.

نمی‌توانید کد قلم یک ردیف را تغییر دهید (ردیف را حذف و ردیف جدیدی اضافه کنید)، مالیات‌ها، تخفیف در ردیف جدید یا انبار را تغییر دهید. ردیف جدید از انبار پیش‌فرض Item استفاده می‌کند. اگر نه Item و نه **Stock Settings** انبار پیش‌فرضی نداشته باشند، به‌روزرسانی ناموفق می‌شود؛ ابتدا انبار پیش‌فرض تعیین کنید.

برای تغییر موارد دیگر (مالیات‌ها، مشتری یا تخفیف)، Sales Order را لغو و اصلاح کنید.

## «نمی‌توان قلم را حذف کرد … چون از قبل در برابر این Sales Order سفارش شده است»

اگر برای ردیف اقدامی انجام شده باشد، نمی‌توان آن را با Update Items حذف کرد:

| پیام | علت |
| --- | --- |
| «…که قبلاً تحویل شده است» | برای ردیف، Delivery Note وجود دارد. |
| «…که قبلاً صورتحساب شده است» | برای ردیف، Sales Invoice وجود دارد. |
| «…که Work Order به آن اختصاص داده شده است» | برای ردیف، Work Order ساخته شده است. |
| «…که از قبل در برابر این Sales Order سفارش شده است» | برای ردیف Purchase Order یا Material Requestای که به Purchase Order تبدیل شده ساخته شده است. |

ابتدا سند بعدی را لغو کنید یا مقدار ردیف را به مقداری که تحویل یا سفارش شده کاهش دهید.

## لغو و اصلاح

1. روی **Cancel** کلیک کنید. ERPNext سندهای پیوندخورده‌ای را که باید لغو شوند فهرست می‌کند و امکان لغو همهٔ آن‌ها را می‌دهد.
2. در سند لغوشده روی **Amend** کلیک کنید. پیش‌نویسی با همان نام و پسوندی مانند `-1` باز می‌شود.
3. سند را اصلاح و ثبت نهایی کنید.

سند لغوشده را نمی‌توان دوباره فعال کرد. **Amend** تنها راه ادامه از آن مرحله است.

## لغو مسدود شده است

- **پرداختی به صورتحساب پیوند دارد.** اگر **Unlink Payment on cancellation of invoice** در **Accounts Settings** روشن باشد، پرداخت از صورتحساب جدا می‌شود و به‌صورت پیش‌پرداخت باقی می‌ماند. اگر خاموش باشد، ابتدا Payment Entry را لغو کنید.
- **سند بعدی به آن وابسته است**؛ مانند Delivery Note ساخته‌شده از صورتحساب، برگشت یا Packing Slip. ابتدا این سندها را به ترتیب معکوس، از جدیدترین، لغو کنید.
- **e-Invoice قابل‌لغو نیست** (در هند، بیش از 24 ساعت پس از ایجاد آن). [e-Invoice ناموفق است، IRN ندارد یا قابل‌لغو نیست](https://docs.frappe.io/erpnext/e-invoice-failed-or-cancel) را ببینید.
- **دوره بسته یا منجمد شده است.** [چطور سند حسابداری ثبت‌نهایی‌شده را اصلاح کنم؟](https://docs.frappe.io/erpnext/correct-a-submitted-accounting-entry) را ببینید.

## حذف سندهای آزمایشی

حذف، سند را برای همیشه پاک می‌کند. فقط برای داده‌های آزمایشی از آن استفاده کنید، نه برای تراکنش واقعی.

1. سندها را از جدیدترین به قدیمی‌ترین لغو کنید: ابتدا Payment Entry، سپس Sales Invoice، بعد Delivery Note و در پایان Sales Order.
2. آن‌ها را به همین ترتیب حذف کنید.

برای حذف صورتحساب یا پرداخت لغوشده، گزینهٔ **Delete Accounting and Stock Ledger entries on deletion of transaction** باید در **Accounts Settings** روشن باشد. اگر **Enable Immutable Ledger** فعال باشد، حذف امکان‌پذیر نیست.

برای حذف **همهٔ** تراکنش‌های یک شرکت آزمایشی، به‌جای آن از [Delete Company Transactions](https://docs.frappe.io/erpnext/delete_company_transactions) استفاده کنید.

شمارهٔ سند حذف‌شده در Naming Series دوباره استفاده نمی‌شود.

## موضوعات مرتبط

- [اصلاح Sales Order پس از Submit](https://docs.frappe.io/erpnext/amending-sales-order-after-submit)
- [چرا نمی‌توانم Sales Order یا Delivery Note را آن‌طور که انتظار دارم صورتحساب کنم؟](https://docs.frappe.io/erpnext/invoice-from-sales-order-or-delivery-note)
- [برگشت‌ها و Credit Noteها](https://docs.frappe.io/erpnext/sales-returns-and-credit-notes-problems)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/cancel-delete-or-change-sales-documents). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
