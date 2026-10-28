---
title: "چرا سررسید یا برنامهٔ پرداخت صورتحسابم اشتباه است؟"
slug: "due-date-and-payment-terms-problems"
source_url: "https://docs.frappe.io/erpnext/due-date-and-payment-terms-problems"
source_id: "erpnext/due-date-and-payment-terms-problems"
source_version: "f84aee70ba4a9082ec649f1eba780c39ab18bc02fe680b92b2fe782eb6926b7f"
source_updated: "2026-10-26"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/due-date-and-payment-terms-problems)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.

فیلد **Due Date** و جدول **Payment Schedule** در صورتحساب از **Payment Terms Template** می‌آیند. ERPNext این الگو را از سفارش، مشتری یا تأمین‌کننده، یا گروه مشتری یا تأمین‌کننده می‌گیرد و تاریخ سررسید هر قسط را از یک تاریخ مبنا محاسبه می‌کند. اگر سررسید با انتظار شما مطابقت ندارد، معمولاً علت یکی از این سه مورد است: الگوی استفاده‌شده، تاریخ مبنا یا یکی از قواعد **Accounts Settings**.

## الگو از کجا گرفته می‌شود؟

ERPNext نخستین مورد از فهرست زیر را که دارای الگو باشد انتخاب می‌کند:

1. **سفارش فروش**، **سفارش خرید** یا **Quotation**، اگر گزینهٔ **Automatically fetch Payment Terms from Order/Quotation** در **Accounts Settings** فعال باشد. برنامهٔ پرداخت سفارش، از جمله تاریخ‌های سررسید آن، عیناً کپی می‌شود.
2. مشتری یا تأمین‌کننده، از فیلد **Payment Terms Template**.
3. گروه مشتری یا گروه تأمین‌کننده.
4. شرکت، از فیلد **Default Payment Terms Template**.

## سررسید پیش از تاریخ صورتحساب است

احتمالاً گزینهٔ **Automatically fetch Payment Terms from Order/Quotation** فعال است و تاریخ‌های سررسید از سفارش کپی شده‌اند. اگر سفارش چند ماه پیش از صورتحساب ثبت شده باشد، ممکن است سررسیدهایش گذشته باشند.

- برای محاسبهٔ سررسیدها از تاریخ صورتحساب، این گزینه را در **Accounts Settings > Invoice and Billing** غیرفعال کنید. صورتحساب‌های جدید همچنان الگوی سفارش را به‌کار می‌برند، اما تاریخ‌ها از تاریخ صورتحساب محاسبه می‌شوند.

  ![گزینهٔ Automatically fetch Payment Terms from Order/Quotation در زبانهٔ Invoice and Billing در Accounts Settings](https://docs.frappe.io/files/accounts-settings-fetch-terms.png)

- برای یک صورتحساب مشخص، دوباره **Payment Terms Template** را در خود صورتحساب انتخاب کنید. ERPNext برنامه را از نو و بر اساس تاریخ ثبت صورتحساب محاسبه می‌کند.

## چرا با وارد کردن تاریخ صورتحساب تأمین‌کننده، سررسید Purchase Invoice عوض می‌شود؟

این رفتار مورد انتظار است. در **Purchase Invoice**، اگر **تأمین‌کننده Invoice Date** را وارد کنید، سررسید از همان تاریخ محاسبه می‌شود؛ در غیر این صورت، **Posting Date** مبنا قرار می‌گیرد. مهلت اعتباری از روزی آغاز می‌شود که تأمین‌کننده صورتحساب را صادر کرده است.

## تاریخ هر سررسید چگونه محاسبه می‌شود؟

هر ردیف الگو گزینه‌ای به نام **Due Date Based On** دارد:

| Due Date Based On | نمونه: صورتحساب در 10 Oct، مقدار 30 |
| --- | --- |
| روز(ها) پس از تاریخ صورتحساب | 9 Nov |
| روز(ها) پس از پایان ماه صورتحساب | 30 Nov (31 Oct + 30 روز) |
| ماه(ها) پس از پایان ماه صورتحساب | با مقدار 1: ‏30 Nov |

برای دریافت پیش‌پرداخت و تسویهٔ مانده (برای نمونه، 30% اکنون و 70% پس از 30 روز)، دو ردیف بسازید: **Invoice Portion** برابر 30 با 0 روز و **Invoice Portion** برابر 70 با 30 روز. به [راهنمای «Payment Terms Template | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-terms-template) مراجعه کنید.

## هنگام ذخیره یا ثبت نهایی خطا می‌گیرم

```text
Due Date cannot be before Posting Date
Due Date cannot be after 09-11-2026
Total Payment Amount in Payment Schedule must be equal to Grand / Rounded Total
```

- **Due Date cannot be before Posting Date** (یا **تأمین‌کننده Invoice Date**): یکی از تاریخ‌های سررسید برنامه یا مقدار فیلد **Due Date** پیش از تاریخ صورتحساب است. الگو را دوباره انتخاب کنید یا تاریخ را اصلاح کنید.
- **Due Date cannot be after …**: سررسیدی وارد کرده‌اید که از محدودهٔ مجاز الگو دیرتر است. فقط کاربرانی که نقش تعیین‌شده در **Accounts Settings > نقش allowed to bypass credit limit** را دارند می‌توانند تاریخ دیرتری ذخیره کنند؛ برای آن‌ها به‌جای خطا، یادداشتی نمایش داده می‌شود. در غیر این صورت، الگو را اصلاح کنید.
- **Total Payment Amount in Payment Schedule must be equal to Grand / Rounded Total**: پس از ساخت برنامه، اقلام یا مالیات‌ها را تغییر داده‌اید. الگو را دوباره انتخاب کنید یا ستون **Payment Amount** را اصلاح کنید تا جمع آن با کل مبلغ برابر شود.

اگر فیلد **Due Date** را دستی تغییر دهید، ERPNext می‌پرسد: «برای اعمال تاریخ سررسید جدید، می‌خواهید الگوی فعلی Payment Terms و برنامهٔ پرداخت پاک شود؟» برای نگه‌داشتن تاریخ واردشده، **Yes** را انتخاب کنید. اگر برنامه فقط یک ردیف داشته باشد، ERPNext تاریخ همان ردیف را بدون پرسش تغییر می‌دهد.

## چرا شرایط پرداخت به صورتحساب منتقل نشده‌اند؟

- وضعیت **Accounts Settings > Automatically fetch Payment Terms from Order/Quotation** را بررسی کنید. اگر غیرفعال باشد، الگوی صورتحساب از مشتری یا تأمین‌کننده گرفته می‌شود، نه از سفارش.
- اگر سفارش الگو داشته باشد اما جدول **Payment Schedule** آن خالی باشد، چیزی برای کپی‌کردن وجود ندارد. سفارش را باز کنید و جدول را بررسی کنید.

## آیا شرایط پرداخت بر اساس مبلغ خالص محاسبه می‌شوند؟

خیر. درصد **Invoice Portion** از **Grand Total** (یا **Rounded Total**) محاسبه می‌شود و مالیات را هم در بر می‌گیرد. برای دریافت مالیات در قسط نخست، مقدار **Payment Amount** ردیف اول را دستی افزایش دهید یا پیش‌پرداخت را به‌صورت صورتحساب جداگانه ثبت کنید.

## موضوعات مرتبط

- [راهنمای «Payment Terms Template | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-terms-template)
- [راهنمای «Payment Terms | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-terms)
- [حساب‌های دریافتنی و پرداختنی](accounts-receivable-and-payable.md)
