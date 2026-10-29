---
title: "برنامه‌های Frappe"
slug: "apps"
source_url: "https://docs.frappe.io/framework/user/en/guides/basics/apps"
source_id: "framework/user/en/guides/basics/apps"
source_version: "3859e1d023cccc584df8c0762aeeb515e2f59c5446ff01a0ec202ac9b6e5cbc0"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

برنامه‌های Frappe بسته‌های Python هستند که از بستر Frappe استفاده می‌کنند. این بسته‌ها می‌توانند در هر مسیری از [مسیر جست‌وجوی ماژول‌های Python](https://docs.python.org/3/tutorial/modules.html#the-module-search-path) قرار بگیرند و باید در فایل `apps.txt` ثبت شوند.

### ساخت برنامه

Frappe برای ساخت برنامهٔ تازه، اسکلت اولیه‌ای در اختیار می‌گذارد. فرمان `bench new-app app-name` یک پوستهٔ تعاملی باز می‌کند و ساخت برنامه را آغاز می‌کند.

```text
 % bench new-app sample_app
 App Name: sample_app
 App Title: Sample App
 App Description: This is a sample app.
 App Publisher: Acme Inc.
 App Icon: icon-linux
 App Color: #6DAFC9
 App Email: info@example.com
 App URL: http://example.com
 App License: MIT
```

فرمان بالا برنامه‌ای با ساختار پوشه‌ای زیر می‌سازد:

```text
 sample_app
 ├── license.txt
 ├── MANIFEST.in
 ├── README.md
 ├── sample_app
 │   ├── __init__.py
 │   ├── sample_app
 │   │   └── __init__.py
 │   ├── config
 │   │   ├── desktop.py
 │   │   └── __init__.py
 │   ├── hooks.py
 │   ├── modules.txt
 │   ├── patches.txt
 │   └── templates
 │   ├── generators
 │   │   └── __init__.py
 │   ├── __init__.py
 │   ├── pages
 │   │   └── __init__.py
 │   └── statics
 └── setup.py
```

این اسکلت فقط فایل‌های لازم را دارد تا نماد برنامه در [پیشخوان Frappe](https://docs.frappe.io/framework/user/en/desk) نمایش داده شود.

### فایل‌های برنامه

#### `hooks.py`

فایل `hooks.py` فرادادهٔ برنامه و نقاط اتصال آن به بخش‌های دیگر Frappe یا برنامه‌های Frappe را تعریف می‌کند. برای نمونه، این نقاط اتصال می‌توانند زمان‌بندی کارها یا شنود تغییرات سندهای گوناگون در سامانه باشند. در آغاز، این فایل فقط اطلاعاتی را نگه می‌دارد که هنگام ساخت برنامه وارد کرده‌اید.

```python
 app_name = "sample-app"
 app_title = "Sample App"
 app_publisher = "Acme Inc."
 app_description = "This is a sample app."
 app_icon = "fa-linux"
 app_color = "black"
 app_email = "info@example.com"
 app_url = "http://example.com"
 app_version = 0.0.1
```

#### `modules.txt`

ماژول‌ها به سازمان‌دهی DocTypeها در Frappe کمک می‌کنند و در فایل `modules.txt` برنامه تعریف می‌شوند. هر [آشنایی با نوع سند (DocType)](https://docs.frappe.io/framework/user/en/basics/doctypes) باید به یک ماژول تعلق داشته باشد. به‌طور پیش‌فرض، ماژولی هم‌نام برنامه ساخته می‌شود. هر ماژول نمادی نیز در پیشخوان دارد. برای نمونه، برنامهٔ [معرفی ERPNext](../../../../../erpnext/introduction.md) در ماژول‌های زیر سازمان‌دهی شده است:

```text
accounts
buying
home
hr
manufacturing
projects
selling
setup
stock
support
utilities
contacts
```

### افزودن برنامه به یک سایت

پس از ساخت یا دریافت برنامه، آن را با Git دریافت کنید:

```shell
bench get-app https://github.com/org/app_name
```

سپس برنامه را روی سایت خود نصب کنید:

```shell
bench --site site_name install-app app_name
```

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [برنامه‌های Frappe](https://docs.frappe.io/framework/user/en/guides/basics/apps). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
