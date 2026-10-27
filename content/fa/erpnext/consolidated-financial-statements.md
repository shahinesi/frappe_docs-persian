---
title: "صورت‌های مالی تلفیقی شرکت‌های گروه"
slug: "consolidated-financial-statements"
source_url: "https://docs.frappe.io/erpnext/consolidated-financial-statements"
source_id: "erpnext/consolidated-financial-statements"
source_version: "db6911fdce50d02a378a57fdcd73838a500b965b11d7922a8908b07a3f7dfc0a"
source_updated: "2026-10-24"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/consolidated-financial-statements)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> این صفحه تصویر ندارد.

اگر چند شرکت را در یک سایت ERPNext اداره می‌کنید، گزارش **Consolidated Financial Statement** ترازنامه، سود و زیان یا جریان وجوه نقد آن‌ها را در کنار هم و با جمع کل گروه نمایش می‌دهد. این صفحه توضیح می‌دهد چگونه شرکت‌ها را تنظیم کنید تا گزارش درست جمع بزند و چه کارهایی از آن برنمی‌آید.

## راه‌اندازی گروه

1. یک شرکت برای گروه ایجاد کنید؛ برای نمونه **Bombay Byte Group**؛ و گزینهٔ **Is Group** را علامت بزنید.
2. هر شرکت عضو گروه را باز کنید، **Parent Company** را روی شرکت گروه بگذارید و ذخیره کنید.
3. در همهٔ شرکت‌ها از **Chart of Accounts** یکسان استفاده کنید. گزارش، حساب‌ها را وقتی در یک ردیف می‌آورد که **نام حساب** و **شمارهٔ حساب** یکسان باشند؛ پسوند مخفف شرکت نادیده گرفته می‌شود. بنابراین `Debtors - BBS` و `Debtors - BBR` با هم جمع می‌شوند، اما `Debtors` و `Trade Receivables` در دو ردیف نمایش داده می‌شوند. ساده‌ترین روش این است که هنگام ایجاد شرکت جدید، **Create Chart Of Accounts Based On** را روی **Existing Company** تنظیم کنید و شرکتی را انتخاب کنید که نمودار حساب‌های موردنظرتان را دارد.

## اجرای گزارش

1. **Consolidated Financial Statement** را باز کنید.
2. شرکت گروه را در **Company** انتخاب کنید. شرکت‌های زیرمجموعهٔ آن نیز لحاظ می‌شوند.
3. **Report** را انتخاب کنید: **Balance Sheet**، **Profit and Loss Statement** یا **Cash Flow**.
4. با **Filter Based On** و تاریخ‌ها یا سال‌های مالی، دوره را انتخاب کنید.

گزارش برای هر شرکت یک ستون و یک ستون جمع کل دارد.

## شرکت‌ها با ارزهای متفاوت

- گزینهٔ **Accumulated Values in Group Company** را علامت بزنید تا مبلغ هر شرکت زیرمجموعه به ارز شرکت گروه تبدیل شود. تبدیل با نرخ ارز در **End Date** انجام می‌شود.
- یا یک **Currency** انتخاب کنید تا همهٔ مبلغ‌ها با همان ارز نمایش داده شوند.

اگر هیچ‌کدام را انتخاب نکنید، مبلغ‌های ارزهای متفاوت بدون تبدیل با هم جمع می‌شوند و جمع کل معنایی نخواهد داشت.

برای هر جفت ارز در End Date، مطمئن شوید نرخ **Currency Exchange** موجود است.

## کارهایی که گزارش انجام نمی‌دهد

- **حذف معاملات بین‌شرکتی:** فروش‌ها، خریدها، مطالبات و بدهی‌های میان شرکت‌های گروه حذف نمی‌شوند. هنگام تهیهٔ حساب‌های تلفیقی، حذف را با Journal Entry در شرکت گروه (یا بیرون از ERPNext) ثبت کنید.
- **سهم اقلیت و سال‌های مالی متفاوت:** این موارد پشتیبانی نمی‌شوند. در همهٔ شرکت‌های گروه از سال مالی یکسان استفاده کنید.

## گزارش خطا می‌دهد یا اعداد نادرست نشان می‌دهد

- اگر در ردیف افتتاحیه پیام **"Previous Financial Year is not closed"** می‌بینید، برای یک شرکت از سال مالی قبل Period Closing Voucher ثبت نشده است. سال‌ها را به‌ترتیب ببندید یا در Accounts Settings گزینهٔ **Ignore Account closing balance** را فعال کنید. [Period Closing Voucher](/erpnext/period-closing-voucher) را ببینید.
- اگر مبلغ یک شرکت نمایش داده نمی‌شود، بررسی کنید **Parent Company** آن شرکت روی شرکت گروه تنظیم شده باشد.
- اگر گزارش برای یک دوره اجرا نمی‌شود، ممکن است تراکنشی از حساب متعلق به شرکت دیگری استفاده کرده باشد. گزارش را برای دوره‌های کوتاه‌تر اجرا کنید تا مورد را پیدا کنید و سپس تراکنش را اصلاح کنید.

## مطالب مرتبط

- [Period Closing Voucher](/erpnext/period-closing-voucher)
- [Chart of Accounts](/erpnext/chart-of-accounts)
- [General Ledger](/erpnext/general-ledger)
