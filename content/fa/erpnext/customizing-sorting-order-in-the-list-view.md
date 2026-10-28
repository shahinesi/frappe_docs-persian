---
title: "ترتیب مرتب‌سازی در نمای فهرست"
slug: "customizing-sorting-order-in-the-list-view"
source_url: "https://docs.frappe.io/erpnext/customizing-sorting-order-in-the-list-view"
source_id: "erpnext/customizing-sorting-order-in-the-list-view"
source_version: "6ca9af63914edd0eab1949554279f6a4de6aa3ab305cc995b990c4ef6de5601f"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/customizing-sorting-order-in-the-list-view)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویرهای صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

**پرسش:** می‌خواهم رکوردهای فهرست کالا بر اساس کد کالا و به‌ترتیب نزولی مرتب شوند.

**پاسخ:** مراحل زیر ترتیب ترتیب مرتب‌سازی را برای اطلاعات پایهٔ کالا سفارشی می‌کند. همین مراحل را می‌توان برای سفارشی‌کردن ترتیب مرتب‌سازی اسناد دیگر نیز به‌کار برد.

#### گام 1: رفتن به سفارشی‌سازی فرم

> صفحهٔ اصلی > Customization > Form Customization > سفارشی‌سازی فرم

#### گام 2: انتخاب DocType

نوع سندی را انتخاب کنید که می‌خواهید ترتیب مرتب‌سازی آن را سفارشی کنید.

#### گام 3: به‌روزرسانی جزئیات مرتب‌سازی

در سفارشی‌سازی فرم این فیلدها را خواهید دید:

1. **فیلد مرتب‌سازی**: فیلدی را انتخاب کنید که مرتب‌سازی بر اساس آن انجام می‌شود. در این نمونه، فیلد `Item_Code` است.
2. **ترتیب مرتب‌سازی**: یکی از دو گزینه را انتخاب کنید: **Asc** برای ترتیب صعودی یا **Desc** برای ترتیب نزولی.
