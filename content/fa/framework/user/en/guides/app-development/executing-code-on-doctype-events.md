---
title: "اجرای کد هنگام رخدادهای DocType"
slug: "executing-code-on-doctype-events"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/executing-code-on-doctype-events"
source_id: "framework/user/en/guides/app-development/executing-code-on-doctype-events"
source_version: "9fde71ddcea351789b478046eb8f8917f53a3b94ac08a173c2046cf59a3507e4"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

برای اجرای کد هنگام درج، اعتبارسنجی (پیش از ذخیره)، به‌روزرسانی، ثبت نهایی، لغو یا حذف یک DocType، باید کد را در ماژول کنترل‌گر همان DocType بنویسید.

#### 1. ماژول کنترل‌گر

ماژول کنترل‌گر در پوشهٔ `doctype`، داخل ماژول DocType قرار دارد. برای نمونه، کنترل‌گر DocType `ToDo` (فهرست انجام کار) در نسخهٔ 5 در مسیر `frappe/desk/doctype/todo/todo.py` است. هنگام ساخت DocType، الگویی برای کنترل‌گر ایجاد می‌شود که ساختارش چنین است:

```python
from __future__ import unicode_literals

import frappe
from frappe.model.document import Document

class CustomType(Document):
    pass
```

#### 2. ویژگی‌های سند

همهٔ فیلدها و جدول‌های فرزند به‌صورت ویژگی‌های کلاس در دسترس‌اند. برای نمونه، ویژگی `name` را می‌توان با `self.name` خواند.

#### 3. افزودن متدها

در این ماژول می‌توانید متدهای استانداردی به کلاس اضافه کنید که هنگام رخدادهای مربوط به سند اجرا می‌شوند. متدهای استاندارد عبارت‌اند از:

1. `autoname`: هنگام نام‌گذاری اجرا می‌شود. می‌توانید مقدار ویژگی `self.name` را در این متد تعیین کنید.
2. `before_insert`: پیش از درج سند اجرا می‌شود.
3. `validate`: پیش از ذخیرهٔ سند اجرا می‌شود. اگر نمی‌خواهید سند ذخیره شود، می‌توانید استثنا ایجاد کنید.
4. `on_update`: پس از درج یا به‌روزرسانی سند در پایگاه داده اجرا می‌شود.
5. `on_submit`: پس از ثبت نهایی سند اجرا می‌شود.
6. `on_cancel`: پس از لغو سند اجرا می‌شود.
7. `on_trash`: پس از حذف سند اجرا می‌شود.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [اجرای کد هنگام رخدادهای DocType](https://docs.frappe.io/framework/user/en/guides/app-development/executing-code-on-doctype-events). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
