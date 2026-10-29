---
title: "معرفی REST API در Frappe"
slug: "rest-api"
source_url: "https://docs.frappe.io/framework/user/en/guides/integration/rest_api"
source_id: "framework/user/en/guides/integration/rest_api"
source_version: "36308b347eb90699cd073ba97a91c5656f460ba057322d8001a594c9adee7296"
source_updated: "2026-05-10"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe یک API مبتنی بر HTTP ارائه می‌کند که به دو دسته تقسیم می‌شود: فراخوانی رویهٔ راه‌دور (RPC) برای اجرای متدهای مجازشده، و انتقال حالت بازنمایی‌شده (REST) برای کار با منابع.

نشانی پایه `https://{your frappe instance}` است. هر درخواستی که در این راهنما می‌بینید باید به انتهای نشانی پایه افزوده شود. برای نمونه، اگر نشانی نمونهٔ شما `demo.erpnext.com` باشد، `GET /api/resource/User` معادل `GET https://demo.erpnext.com/api/resource/User` است.

# API نسخهٔ 1

همهٔ endpointهای نسخهٔ 1 پیشوند `/api/` دارند. از Frappe Framework نسخهٔ 15 به بعد می‌توان به‌جای آن‌ها از پیشوند `/api/v1/` نیز استفاده کرد.

## RPC

درخواست به endpointای مانند `/api/method/dotted.path.to.method`، متد مجازشدهٔ Python را اجرا می‌کند.

برای نمونه، `GET /api/method/frappe.auth.get_logged_user` تابع [`get_logged_user` در ماژول احراز هویت Frappe](https://github.com/frappe/frappe/blob/28b909435320e3d6d1a3b2e7c02f286984dc39b3/frappe/auth.py#L347-L349) را اجرا می‌کند:

```python
@frappe.whitelist()
def get_logged_user():
 return frappe.session.user
```

پاسخ:

```json
{
 "message": "Administrator"
}
```

## REST

همهٔ سندهای Frappe از طریق API مبتنی بر REST و با پیشوند `/api/resource/` در دسترس‌اند. می‌توانید عملیات ایجاد، خواندن، به‌روزرسانی و حذف (CRUD) را روی آن‌ها انجام دهید:

- **ایجاد:** با فرستادن درخواست `POST` به endpoint `/api/resource/{doctype}` سند بسازید.
- **خواندن:** با endpoint `/api/resource/{doctype}/{name}` سندی را بر اساس نام آن دریافت کنید.
- **به‌روزرسانی:** با فرستادن درخواست `PUT` به endpoint `/api/resource/{doctype}/{name}` سند را به‌روزرسانی کنید. این درخواست مانند `PATCH` عمل می‌کند؛ بنابراین لازم نیست کل سند را بفرستید و کافی است بخش‌هایی را ارسال کنید که تغییر می‌دهید.
- **حذف:** با فرستادن درخواست `DELETE` به endpoint `/api/resource/{doctype}/{name}` سندی را بر اساس نام آن حذف کنید.

# API نسخهٔ 2

> API نسخهٔ 2 از Frappe Framework نسخهٔ 15 به بعد در دسترس است.

همهٔ endpointهای نسخهٔ 2 پیشوند `/api/v2/` دارند.

## RPC نسخهٔ 2

endpointهای RPC نسخهٔ 2 نیز با پیشوند `/api/v2/method/` در دسترس‌اند:

- `/api/v2/method/login` — ورود کاربر (ضمنی)
- `/api/v2/method/logout` — خروج کاربر جاری
- `/api/v2/method/ping` — بررسی وضعیت سرور
- `/api/v2/method/upload_file` — بارگذاری فایل
- `/api/v2/method/dotted.path.to.method` — اجرای هر متد مجازشده
- `/api/v2/method/<doctype>/<method>` — اجرای متد مجازشده از کنترل‌گر DocType
- `/api/v2/method/run_doc_method` — اجرای متد مجازشده روی سند

## REST نسخهٔ 2

API نسخهٔ 2 رابطی سازگارتر با REST دارد و از پیشوندهای `/api/v2/document/` و `/api/v2/doctype/` استفاده می‌کند. عملیات زیر پشتیبانی می‌شوند.

### عملیات سند

- **ایجاد:** با فرستادن درخواست `POST` به `/api/v2/document/{doctype}` سند بسازید.
- **خواندن:** سند را با درخواست `GET` به `/api/v2/document/{doctype}/{name}/` دریافت کنید.
- **به‌روزرسانی:** سند را با درخواست `PATCH` یا `PUT` به `/api/v2/document/{doctype}/{name}/` به‌روزرسانی کنید.
- **حذف:** سند را با درخواست `DELETE` به `/api/v2/document/{doctype}/{name}/` حذف کنید.
- **کپی:** با درخواست `GET` به `/api/v2/document/{doctype}/{name}/copy` یک نسخهٔ پاک از سند دریافت کنید.
- **اجرای متد:** با درخواست `GET` یا `POST` به `/api/v2/document/{doctype}/{name}/method/{method}` متدی را روی سند اجرا کنید.

مقدارهای رایج برای `method` عبارت‌اند از `add_comment?text=hello`، `submit`، `cancel` و `rename?name=newname`.

### عملیات DocType

- **دریافت فراداده:** فرادادهٔ DocType را با درخواست `GET` به `/api/v2/doctype/{doctype}/meta` دریافت کنید.
- **دریافت تعداد:** تعداد کل رکوردها را با درخواست `GET` به `/api/v2/doctype/{doctype}/count` دریافت کنید.
- **فهرست سندها:** با درخواست `GET` به `/api/v2/document/{doctype}` فهرست سندها را دریافت کنید. صفحه‌بندی و انتخاب فیلدها از طریق پارامترهای پرس‌وجو پشتیبانی می‌شوند.

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [معرفی REST API در Frappe](https://docs.frappe.io/framework/user/en/guides/integration/rest_api). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
