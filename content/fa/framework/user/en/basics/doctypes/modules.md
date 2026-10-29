---
title: "ماژول‌ها در Frappe"
slug: "modules"
source_url: "https://docs.frappe.io/framework/user/en/basics/doctypes/modules"
source_id: "framework/user/en/basics/doctypes/modules"
source_version: "59e972d8f732a6cddc3faf52be3d5d3e704053a8e0809f013a07c1452a303685"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

هر DocType به یک ماژول تعلق دارد تا گروه‌بندی مدل‌های مرتبط آسان‌تر شود.

Frappe چند ماژول داخلی دارد. برای نمونه:

1. **هسته** (`Core`): شامل DocTypeهایی مانند `DocType`، `DocField`، گزارش (`Report`) و تنظیمات سامانه (`System Settings`) است.
2. **پیشخوان** (`Desk`): شامل DocTypeهایی مانند فهرست انجام کار (`ToDo`)، رویداد (`Event`)، یادداشت (`Note`) و تختهٔ کانبان (`Kanban Board`) است.
3. **ایمیل** (`Email`): شامل DocTypeهایی مانند حساب ایمیل (`Email Account`)، خبرنامه (`Newsletter`) و گروه ایمیل (`Email Group`) است.

ماژول‌ها همچنین فایل‌های کد را در پوشه‌های جداگانه گروه‌بندی می‌کنند. فایل‌های کنترل‌گری که با ساخت DocType تولید می‌شوند، در پوشهٔ ماژول مربوط به همان DocType قرار می‌گیرند.

```
frappe
├── commands
├── config
├── core
│   ├── doctype
│   │   ├── doctype
│   │   ├── docfield
│   │   ├── report
│   │   ├── system_settings
│   │   ├── ...
│   │   └── ...
│   ├── page
│   ├── report
│   └── web_form
├── desk
│   ├── doctype
│   │   ├── ...
│   │   ├── event
│   │   ├── kanban_board
│   │   ├── note
│   │   └── todo
│   ├── form
│   ├── page
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [ماژول‌ها در Frappe](https://docs.frappe.io/framework/user/en/basics/doctypes/modules). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
