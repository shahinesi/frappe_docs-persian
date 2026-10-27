---
title: "حذف سند ثبت‌نهایی‌شده"
slug: "delete-submitted-document"
source_url: "https://docs.frappe.io/erpnext/delete-submitted-document"
source_id: "erpnext/delete-submitted-document"
source_version: "153f263d5c7e4ce8860955a6d011b288789967346e18f9d840c477dc20b5ebb1"
source_updated: "2026-03-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/delete-submitted-document)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های سایت رسمی اشاره می‌کند.

برای حذف سندی که ثبت نهایی شده است، ابتدا باید آن را لغو کنید. مراحل حذف سند ثبت‌نهایی‌شده در ادامه آمده است.

این مراحل با این فرض نوشته شده‌اند که مجوزهای لازم برای لغو و حذف سند موردنظر را دارید.

#### گام 1: لغو سند ثبت‌نهایی‌شده

دکمهٔ **Cancel** را در گوشهٔ بالا و سمت راست سند ثبت‌نهایی‌شده پیدا کنید.

![دکمهٔ لغو سند](https://docs.frappe.io/files/Screenshot%202023-12-27%20at%2012.24.48%20PM.png)

#### گام 2: حذف سند

پس از لغو سند، دکمهٔ **Amend** نمایان می‌شود و وضعیت سند **Cancelled** خواهد بود. این وضعیت نشان می‌دهد سند با موفقیت لغو شده است.

برای حذف سند، **Menu** و سپس **Delete** را انتخاب کنید. سند انتخاب‌شده حذف می‌شود.

![گزینهٔ حذف سند](https://docs.frappe.io/files/Screenshot%202023-12-27%20at%2012.39.59%20PM.png)

**توجه:** برای لغو و حذف هم‌زمان چند سند ثبت‌نهایی‌شده، آن‌ها را در نمای فهرست انتخاب کنید و سپس عملیات لغو و حذف را انجام دهید.

![انتخاب چند سند در فهرست](https://docs.frappe.io/files/Screenshot%202023-12-27%20at%2012.34.25%20PM.png)

اگر سند به اسناد دیگری پیوند داشته باشد، پیش از حذف سند والد باید اسناد وابسته را لغو کنید.

![لغو سند وابسته پیش از سند والد](https://docs.frappe.io/files/Screenshot%202023-12-27%20at%2012.37.51%20PM.png)

سندهای حذف‌شده از DocType مربوط ناپدید می‌شوند، اما در بخش **Deleted Documents** قابل مشاهده‌اند. از آنجا می‌توان آن‌ها را برای همیشه حذف کرد یا بازیابی کرد.

![فهرست اسناد حذف‌شده](https://docs.frappe.io/files/Screenshot%202023-12-27%20at%2012.53.50%20PM.png)

سندهای بازیابی‌شده در Deleted Documents مشخص شده‌اند.

![نمایش سندهای بازیابی‌شده در Deleted Documents](https://docs.frappe.io/files/Screenshot%202024-08-26%20at%204.53.00%20PM.png)
