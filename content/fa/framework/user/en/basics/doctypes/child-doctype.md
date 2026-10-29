---
title: "نوع سند فرزند و جدول فرزند"
slug: "child-doctype"
source_url: "https://docs.frappe.io/framework/user/en/basics/doctypes/child-doctype"
source_id: "framework/user/en/basics/doctypes/child-doctype"
source_version: "83756adc3f2f59d7f4d352fc642fbcc7d761e939ca45648b9406d425d7f7eec5"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

تا اینجا فقط DocTypeهایی را دیده‌ایم که هر فیلدشان یک مقدار می‌پذیرد. اما گاهی لازم است چند رکورد را به یک رکورد پیوند دهید؛ این رابطه را «چندبه‌یک» می‌نامند. **نوع سند فرزند** (`Child DocType`) فقط می‌تواند به یک DocType والد پیوند داشته باشد. برای ساخت آن، هنگام ایجاد DocType گزینهٔ **جدول فرزند است** (`Is Child Table`) را فعال کنید.

![نوع سند فرزند](https://docs.frappe.io/files/child-doctype.png)

برای پیوند نوع سند فرزند به والد، در DocType والد ردیف تازه‌ای اضافه کنید؛ نوع فیلد را **جدول** (`Table`) و گزینهٔ نمایشی را **جدول فرزند** (مقدار فنی `Child Table`) قرار دهید.

![فیلد جدول فرزند](https://docs.frappe.io/files/child-table-field.png)

رکوردهای نوع سند فرزند مستقیماً به سند والد متصل‌اند.

```python
>>> person = frappe.get_doc('Person', '000001')
>>> person.as_dict()
{
 'first_name': 'John',
 'last_name': 'Doe',
 'qualifications': [
 {'title': 'Frontend Architect', 'year': '2017'},
 {'title': 'DevOps Engineer', 'year': '2016'},
 ]
}
```

## ویژگی‌های سند فرزند

سندهای فرزند ویژگی‌های ویژه‌ای دارند که رابطه‌شان با سند والد را مشخص می‌کند:

- `parent`: نام سند والد.
- `parenttype`: DocType سند والد.
- `parentfield`: فیلدِ سند والد که این فرزند را به آن پیوند می‌دهد.
- `idx`: شمارهٔ ردیف در ترتیب فهرست.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [نوع سند فرزند و جدول فرزند](https://docs.frappe.io/framework/user/en/basics/doctypes/child-doctype). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
