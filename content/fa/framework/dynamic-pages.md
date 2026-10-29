---
title: "صفحه‌های پویا"
slug: "dynamic-pages"
source_url: "https://docs.frappe.io/framework/user/en/guides/portal-development/context"
source_id: "framework/user/en/guides/portal-development/context"
source_version: "e39a3ce0734577958cf18b2a06cab25453dd85edb27d6f40b7a39b3a0e28eae9"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

با زبان قالب‌سازی Jinja می‌توانید صفحه‌ها را به‌صورت پویا نمایش دهید. برای پرس‌وجو از داده‌ها، شیء `context`ای را که به قالب می‌فرستید به‌روزرسانی کنید.

برای این کار، فایلی با پسوند `.py` و هم‌نام فایل صفحه بسازید؛ برای نمونه، برای `index.md` فایلی به نام `index.py` بسازید و متد `get_context` را در آن تعریف کنید.

### نمونه

فرض کنید می‌خواهید صفحه‌ای برای نمایش کاربران بسازید. در پوشهٔ `www/` دو فایل `users.html` و `users.py` ایجاد کنید.

در فایل `users.py`:

```python
import frappe
def get_context(context):
 context.users = frappe.get_list("User", fields=["first_name", "last_name"])
```

در فایل `users.html`:

```html
### فهرست کاربران



{% for user in users %}
 2. {{ user.first_name }} {{ user.get("last_name", "") }}

{% endfor %}


```

منبع: [صفحه‌های پویا](https://docs.frappe.io/framework/user/en/guides/portal-development/context). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
