---
title: "DocType تکی"
slug: "single-doctype"
source_url: "https://docs.frappe.io/framework/user/en/basics/doctypes/single-doctype"
source_id: "framework/user/en/basics/doctypes/single-doctype"
source_version: "43567029048285a57a74045782758d9aeeae953d9f123aec970cd81016a31932"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/basics/doctypes/single-doctype)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر رابط کاربری منبع از نشانی اصلی نمایش داده می‌شود و در این مخزن بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

DocType تکی نوعی DocType است که فقط یک نمونه از آن در پایگاه داده وجود دارد. چنین DocTypeی برای نگهداری مواردی مانند *تنظیمات سیستم* مناسب است؛ چون داشتن چند رکورد از آن‌ها معنایی ندارد.

![DocType تکی](https://docs.frappe.io/files/single-doctype.png)

```python
>>> settings = frappe.get_doc('System Settings')
>>> settings.notification_frequency
'Daily'
```

### ساختار پایگاه داده

DocTypeهای تکی در جدول `tabSingles` پایگاه داده ذخیره می‌شوند و هر ویژگی رکورد جداگانهٔ خود را دارد.

ستون‌ها:

- `doctype`
- `field`
- `value`

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/basics/doctypes/single-doctype). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
