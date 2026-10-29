---
title: "نقش‌های پورتال"
slug: "portal-roles"
source_url: "https://docs.frappe.io/framework/user/en/guides/portal-development/portal-roles"
source_id: "framework/user/en/guides/portal-development/portal-roles"
source_version: "959240c4cc4b570c0fe9473a8936c9ee0d4c23a1fa24810d881b7d182921e8e4"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

نسخه: 7.1 و بالاتر

می‌توان به **کاربران وب‌سایت** نقش اختصاص داد. این کاربران بر اساس نقش خود، گزینه‌های منو را می‌بینند.

1. می‌توان یک نقش پیش‌فرض را در **تنظیمات پورتال** تعیین کرد.
2. برای هر **مورد منوی پورتال** می‌توان نقشی در نظر گرفت. اگر نقشی تعیین شده باشد، فقط کاربرانی که آن نقش را دارند آن گزینهٔ منو را می‌بینند.
3. می‌توان با استفاده از هوک‌ها، قاعده‌هایی برای نقش‌های پیش‌فرض تعریف کرد تا این نقش‌ها به کاربران پیش‌فرض اختصاص یابند.

![تنظیمات پورتال](https://docs.frappe.io/files/portal-settings.png)

#### قواعد نقش پیش‌فرض

برای نمونه، اگر نشانی ایمیل با شناسهٔ یک مخاطب مطابقت داشته باشد، نقش مشتری یا تأمین‌کننده را اختصاص دهید:

```python
default_roles = [
 {'role': 'Customer', 'doctype':'Contact', 'email_field': 'email_id',
 'filters': {'ifnull(customer, "")': ('!=', '')}},
 {'role': 'Supplier', 'doctype':'Contact', 'email_field': 'email_id',
 'filters': {'ifnull(supplier, "")': ('!=', '')}},
 {'role': 'Student', 'doctype':'Student', 'email_field': 'student_email_id'}
 ]
```

نام نقش‌ها و DocTypeهای `Customer`، `Supplier`، `Student` و `Contact` در کد شناسه‌های فنی‌اند و باید بدون تغییر باقی بمانند.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [نقش‌های پورتال](https://docs.frappe.io/framework/user/en/guides/portal-development/portal-roles). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
