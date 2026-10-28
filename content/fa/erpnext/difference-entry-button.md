---
title: "ثبت ردیف مابه‌التفاوت (Make Difference Entry)"
slug: "difference-entry-button"
source_url: "https://docs.frappe.io/erpnext/difference-entry-button"
source_id: "erpnext/difference-entry-button"
source_version: "c1716573a41f26739841d794839bffa68bf32008d0606447a7c6eec3419c4910"
source_updated: "2026-08-03"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/difference-entry-button)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرهای منبع در این مخزن بازنشر نشده‌اند و پیوند آن‌ها به فایل‌های میزبان منبع اشاره می‌کند.

عمل **Make Difference Entry** کمک می‌کند یک [راهنمای «Journal Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry) نامتوازن را تکمیل کنید. ERPNext اختلاف Total Debit و Total Credit را محاسبه می‌کند، ردیف حسابداری تازه‌ای به همان مبلغ می‌افزاید و فیلد Account را خالی می‌گذارد تا خودتان حساب را انتخاب کنید.

این ابزار فقط برای ترازکردن ارقام درون Journal Entry است؛ تراکنش جداگانه یا اصلاح خودکار نیست. باید علت اختلاف را بدانید و حسابی را انتخاب کنید که واقعاً آن را نشان می‌دهد. اگر مبلغ مبدأ، نرخ ارز، مالیات یا حساب اولیه نادرست است، همان مقدار را اصلاح کنید و خطا را در یک حساب مابه‌التفاوت پنهان نکنید.

در این مثال، شرکت Nova Electronics Trading مبلغ 1,000 دلار از حساب بانکی‌اش پرداخت می‌کند. هزینهٔ اصلی نگه‌داری دفتر 990 دلار است و بانک 10 دلار کارمزد دریافت می‌کند. بنابراین دو ردیف نخست تراز نیستند. عمل **Make Difference Entry** بدهکار 10 دلاریِ جاافتاده را اضافه می‌کند و سپس کاربر حساب **Bank Charges - NET** را انتخاب می‌کند.

| حساب | بدهکار | بستانکار | مفهوم |
| --- | ---: | ---: | --- |
| Office Maintenance Expenses | 990.00 دلار | 0.00 دلار | هزینهٔ اصلی پرداخت‌شده. |
| Bank Charges | 10.00 دلار | 0.00 دلار | کارمزدی که بانک جداگانه کسر کرده است. |
| Nova Operating Bank | 0.00 دلار | 1,000.00 دلار | کل کاهش ماندهٔ حساب بانکی. |
| **جمع** | **1,000.00 دلار** | **1,000.00 دلار** | Journal Entry تراز است. |

## پیش از شروع

موارد زیر را بررسی کنید:

1. علت نامتوازن‌بودن را می‌دانید و برای مبلغ مدرک دارید.
2. حساب درست در [Chart of Accounts](chart-of-accounts.md) شرکت وجود دارد. حسابی غیرگروهی را انتخاب کنید که به شرکت انتخاب‌شده تعلق دارد.
3. Posting Date باز است و به سال مالی و [دورهٔ حسابداری](accounting-period.md) موردنظر تعلق دارد.
4. Cost Center، Project، Finance Book یا [بُعد حسابداری](accounting-dimensions.md) دیگری که لازم است در دسترس باشد.
5. برای ثبت بانکی، شماره و تاریخ مرجع بانک را داشته باشید. برای دریافت یا پرداخت معمول مشتری یا تأمین‌کننده، بررسی کنید که آیا [راهنمای «Payment Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-entry) گردش‌کار مناسب‌تری است.

## اختلاف را پیدا کنید

1. یک Journal Entry در وضعیت Draft ایجاد یا باز کنید.
2. شرکت، Entry Type و Posting Date را انتخاب کنید.
3. ردیف‌های بدهکار و بستانکار معلوم را در بخش **Accounting Entries** اضافه کنید.
4. **Total Debit**، **Total Credit** و **Difference (Dr - Cr)** را بررسی کنید.

در مثال، بدهکار 990 دلار و بستانکار 1,000 دلار است. ERPNext اختلاف 10- دلار را نشان می‌دهد و عمل **Make Difference Entry** را در دسترس قرار می‌دهد.

![Journal Entry نامتوازن با برجسته‌شدن Make Difference Entry](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-balanced-journal-entry.png)

پیش از ادامه بررسی کنید که اختلاف واقعی و موجه است. کارمزد جاافتادهٔ بانک اختلافی موجه است؛ مبلغ جابه‌جا واردشده، ردیف تکراری، ارز نادرست یا نرخ ارز اشتباه باید در مبدأ اصلاح شود.

## ردیف مابه‌التفاوت را اضافه و تکمیل کنید

1. **Make Difference Entry** را انتخاب کنید.

ERPNext یک ردیف با مبلغ دقیق لازم برای برابرشدن Total Debit و Total Credit اضافه می‌کند. چون در این مثال بستانکار 10 دلار بیشتر است، ردیف بدهکار 10 دلاری افزوده می‌شود.

2. نماد مدادِ برجسته‌شده در ردیف جدید را انتخاب کنید.

![ردیف مابه‌التفاوت ایجادشده با نماد مداد](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-difference-row-added.png)

3. حسابی را انتخاب کنید که علت اختلاف را نشان می‌دهد. در این مثال **Bank Charges - NET** را انتخاب کنید.

![ویرایش ردیف مابه‌التفاوت و انتخاب حساب Bank Charges](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-difference-account-selected.png)

4. Cost Center، Project، Finance Book یا ابعاد دیگری را که سیاست حسابداری‌تان لازم می‌داند اضافه کنید.
5. ویرایشگر ردیف را ببندید و کل جدول را بازبینی کنید.

![Journal Entry تراز پس از انتخاب حساب مابه‌التفاوت](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-balanced-journal-entry.png)

اکنون Total Debit و Total Credit هر دو 1,000 دلار هستند. سند از نظر ریاضی تراز شده است، اما همچنان باید مطمئن شوید همهٔ حساب‌ها و مبالغ از نظر اقتصادی درست‌اند. برابر بودن جمع‌ها به‌تنهایی صحت حسابداری را ثابت نمی‌کند.

## ثبت نهایی کنید و نتیجه را بررسی کنید

1. شرکت، Posting Date، Entry Type، حساب‌ها، مبلغ‌ها، ارجاع‌ها، توضیحات، ارزها و ابعاد را بازبینی کنید.
2. Journal Entry را ذخیره و ثبت نهایی کنید.
3. مطمئن شوید سند ثبت‌نهایی‌شده ردیف‌های اولیه و ردیف مابه‌التفاوت تکمیل‌شده را دربر دارد.

![Journal Entry ثبت‌نهایی‌شده با هر سه ردیف حسابداری](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-submitted-difference-journal-entry.png)

4. **View > Ledger** را باز کنید یا گزارش [دفترکل](https://docs.frappe.io/erpnext/general-ledger) را با Journal Entry به‌عنوان فیلتر voucher اجرا کنید.
5. بدهکار و بستانکار هر حساب و صفر بودن ماندهٔ کل voucher را بررسی کنید.

![General Ledger با ردیف مابه‌التفاوت Bank Charges](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-difference-entry-difference-entry-general-ledger.png)

در مثال، دفتر کل بدهکار 990 دلاری Office Maintenance Expenses، بدهکار 10 دلاری Bank Charges و بستانکار 1,000 دلاری حساب عملیاتی بانک را نشان می‌دهد.

## فیلدها و عمل‌های مهم

| فیلد یا عمل | کاربرد |
| --- | --- |
| Total Debit | جمع مبلغ‌های بدهکار در ردیف‌های حسابداری. |
| Total Credit | جمع مبلغ‌های بستانکار در ردیف‌های حسابداری. |
| Difference (Dr - Cr) | Total Debit منهای Total Credit. مقدار منفی یعنی بدهکار بیشتری لازم است؛ مقدار مثبت یعنی بستانکار بیشتری لازم است. |
| Make Difference Entry | یک ردیف بدهکار یا بستانکار به‌اندازهٔ اختلاف فعلی اضافه می‌کند؛ حساب را انتخاب نمی‌کند و موجه‌بودن اختلاف را تأیید نمی‌کند. |
| Account | دفتری که اختلاف در آن ثبت می‌شود. حسابی را انتخاب کنید که رویداد اقتصادی واقعی را نشان می‌دهد. |
| Debit یا Credit | مبلغی که ERPNext برای ترازکردن voucher اضافه می‌کند؛ پیش از ثبت نهایی آن را بررسی کنید. |
| Account Currency و Exchange Rate | مقدارهای ارزی حساب و ارز شرکت را در [Journal Entry چندارزی](https://docs.frappe.io/erpnext/multi-currency-accounting) کنترل می‌کنند. |
| Reference Type و Reference Name | در صورت ارتباط واقعی تعدیل، ردیف حسابداری را به سند پشتیبانی‌شده پیوند می‌دهند. |
| Is Advance | مبلغ طرف حساب را به‌عنوان پیش‌دریافت مشخص می‌کند، وقتی به فاکتور مشخصی تخصیص نیافته باشد. |
| Cost Center و ابعاد دیگر | ثبت را برای گزارش مدیریتی دسته‌بندی می‌کنند؛ جایگزین حساب دفتر کل نیستند. |

## چه زمانی از Make Difference Entry استفاده نکنید؟

این عمل را فقط برای ناپدیدکردن یک خطا به‌کار نبرید.

- اگر فاکتور، پرداخت یا تراکنش موجودی اشتباه است، در صورت مجاز بودن سند مبدأ را لغو و اصلاح کنید؛ به‌جای آن ردیف ترازکنندهٔ نامرتبط نسازید.
- اگر دریافت یا پرداخت واقعی را ثبت می‌کنید، از گردش‌کار ویژهٔ پرداخت استفاده کنید تا تخصیص فاکتور، ماندهٔ طرف حساب، مرجع بانک و تطبیق بانکی روشن بماند.
- اگر اختلاف ناشی از تبدیل ارز خارجی است، ابتدا ارز حساب، نرخ ارز و مقدارهای ارز شرکت را بررسی کنید. اگر علت واقعی سود یا زیان ارز است، از فرایند پشتیبانی‌شدهٔ [سود یا زیان تسعیر ارز](/erpnext/managing-transactions-in-multiple-currency) استفاده کنید.
- اگر اختلاف اعشاری کوچک ناشی از دقت تنظیم‌شده است، ابتدا مقدارهای مبدأ و [راهنمای «System Settings | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/system-settings) را بررسی کنید. پس از وجود تراکنش‌های عملیاتی، دقت را بی‌ملاحظه تغییر ندهید.
- اگر این روش باید تکرار شود، به‌جای حدس‌زدن حساب ترازکننده، فرایند کنترل‌شده یا [راهنمای «Journal Entry Template | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry-template) بسازید.

## عیب‌یابی

| مسئله | مواردی که باید بررسی شوند |
| --- | --- |
| Make Difference Entry دیده نمی‌شود | ممکن است Journal Entry از قبل تراز باشد. Total Debit، Total Credit و Difference را بررسی کنید و مطمئن شوید سند هنوز Draft است. |
| ردیف ایجادشده حساب ندارد | این رفتار مورد انتظار است؛ ERPNext فقط مبلغ را تعیین می‌کند. ردیف را باز کنید و حسابی را انتخاب کنید که اختلاف را توضیح دهد. |
| سند تراز است، اما ثبت نهایی رد می‌شود | الزامات طرف حساب، ارجاع، ارز، Cost Center، مرجع بانک، نوع حساب و دورهٔ قفل‌شده را بررسی کنید. توازن ریاضی فقط یکی از اعتبارسنجی‌هاست. |
| اختلاف بسیار کوچک مرتب ظاهر می‌شود | مبلغ‌های واردشده، ارز حساب، نرخ ارز و دقت را بررسی کنید. پیش از استفاده از حساب گردکردن، محاسبهٔ مبدأ را اصلاح کنید. |
| ردیف به سمت نادرست اضافه شده است | علامت Difference را بررسی کنید. مقدار منفی یعنی بستانکار بیشتر است و ERPNext بدهکار اضافه می‌کند؛ مقدار مثبت یعنی بدهکار بیشتر است و بستانکار اضافه می‌شود. |

## پرسش‌های متداول

### آیا ERPNext حساب مابه‌التفاوت را خودکار انتخاب می‌کند؟

خیر. ERPNext یک ردیف بدهکار یا بستانکار لازم اضافه می‌کند و فیلد Account را خالی می‌گذارد. کاربر باید دفتر کل درستِ شرکت را انتخاب کند.

### آیا هر اختلاف کوچک را باید به حساب گردکردن برد؟

خیر. ابتدا علت را مشخص کنید تا معلوم شود واقعاً گردکردن است یا نه. مبلغ، نرخ ارز یا محاسبهٔ مالیات نادرست و هزینهٔ جاافتاده باید اصلاح شود یا در حسابی ثبت شود که رویداد واقعی را نشان می‌دهد.

### آیا Make Difference Entry اختلاف چندارزی را اصلاح می‌کند؟

این عمل می‌تواند جمع‌ها را در ارز شرکت تراز کند، اما درستی مبلغ‌های ارز حساب و نرخ ارز را ثابت نمی‌کند. پیش از استفاده، هر دو ارز را بررسی کنید.

### چرا ممکن است Journal Entry تراز همچنان رد شود؟

ERPNext افزون بر توازن، شرکت، نوع حساب، طرف حساب، ارجاع، ارز، ابعاد، محدودیت تاریخ ثبت و مقدارهای اجباری دیگر را نیز اعتبارسنجی می‌کند. برابر بودن جمع‌ها فقط آزمون توازن بدهکار و بستانکار را برآورده می‌کند.

### آیا می‌توانم ردیف ایجادشده را ویرایش یا حذف کنم؟

بله، تا وقتی Journal Entry در وضعیت Draft است. می‌توانید حساب آن را انتخاب کنید، در صورت توجیه ردیف را تغییر دهید، یا آن را حذف کنید و ردیف‌های اولیه را اصلاح کنید.

## موضوعات مرتبط

- [راهنمای «Journal Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry)
- [Understanding Debit and Credit](/erpnext/understanding-debit-and-credit)
- [Chart of Accounts](chart-of-accounts.md)
- [دفترکل](https://docs.frappe.io/erpnext/general-ledger)
- [راهنمای «Payment Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-entry)
- [راهنمای «Multi Currency Accounting | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/multi-currency-accounting)
- [راهنمای «Journal Entry Template | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry-template)
