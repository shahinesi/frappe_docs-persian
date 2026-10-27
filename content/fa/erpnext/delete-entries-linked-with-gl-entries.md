---
title: "حذف اسنادی که به ردیف‌های دفتر کل پیوند دارند"
slug: "delete-entries-linked-with-gl-entries"
source_url: "https://docs.frappe.io/erpnext/delete-entries-linked-with-gl-entries"
source_id: "erpnext/delete-entries-linked-with-gl-entries"
source_version: "e6d0900450dce5b9ee6151ef79c9a6387ce1ecdf6d64abcfba31b242808993c3"
source_updated: "2026-08-14"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/delete-entries-linked-with-gl-entries)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویر در این مخزن بازنشر نشده و پیوند آن به فایل میزبان منبع اشاره می‌کند.

ERPNext مانع حذف فاکتور لغوشدهٔ شرکت Nova Industries می‌شود، چون ردیف‌های دفتر کل حسابداری و موجودی بخشی از ردپای حسابرسی هستند. حذف تراکنش با لغوکردن آن فرق دارد و باید به‌ندرت انجام شود. ابتدا مشخص کنید آیا فقط می‌خواهید اثر تجاری را برگردانید؛ لغو سند همین کار را انجام می‌دهد.

## پیش از فعال‌کردن حذف

- مطمئن شوید سند لغو شده است و هیچ الزام قانونی یا حسابرسی برای نگهداری آن وجود ندارد.
- پشتیبان تهیه کنید و ابتدا در محیطی غیرعملیاتی آزمایش کنید.
- بدانید حذف ردیف‌های دفتر کل قابلیت ردیابی را کاهش می‌دهد و بسته به پیکربندی، ممکن است شمارهٔ سریال نام‌گذاری دوباره استفاده شود.

## فعال‌کردن تنظیم

1. **Accounts Settings** را باز کنید.
2. گزینهٔ **Delete Accounting and Stock Ledger Entries on deletion of Transaction** را پیدا کنید.
3. آن را فعال کنید، ذخیره کنید و صفحه را دوباره بارگذاری کنید.
4. فقط سند لغوشدهٔ موردنظر را حذف کنید.
5. اگر فعال‌سازی برای پاک‌سازی یک‌باره تأیید شده بود، پس از پایان کار تنظیم را دوباره غیرفعال کنید.

![گزینهٔ Accounts Settings برای حذف ردیف‌های مرتبط دفتر کل حسابداری و موجودی](https://novacompanies.m.frappe.cloud/files/final-accounting-20260814-delete-linked-ledger-setting.png)

## عیب‌یابی

### سند هنوز پیوند دارد

پیوندهای سند را باز کنید و رکوردهای وابسته، تخصیص‌ها، برگشت‌ها یا اصلاحیه‌ها را شناسایی کنید. وابستگی‌ها را به ترتیب درست تجاری حذف یا حل‌وفصل کنید. ردیف‌های پایگاه داده را مستقیم حذف نکنید.

## پرسش‌های متداول

### آیا باید فاکتور ثبت‌نهایی‌شدهٔ نادرست را حذف کنم؟

معمولاً آن را لغو و اصلاح کنید. این روش سند اصلی، ثبت معکوس و اصلاح را برای حسابرسی حفظ می‌کند.

## موضوعات مرتبط

- [مروری بر حسابداری](/erpnext/accounting/introduction)
- [Chart of Accounts](/erpnext/chart-of-accounts)
- [General Ledger](/erpnext/general-ledger)
- [Fiscal Year](/erpnext/fiscal-year)
