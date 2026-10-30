---
title: "فراخوانی AJAX در Frappe"
slug: "frappe-ajax-call"
source_url: "https://docs.frappe.io/framework/user/en/guides/basics/frappe_ajax_call"
source_id: "framework/user/en/guides/basics/frappe_ajax_call"
source_version: "4b857dddb10e2ab5b7819e92ef9b235736f6e8034a4338d8704f015bfe5867bf"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

در Frappe Framework می‌توانید فراخوانی‌های AJAX را با `frappe.call` مدیریت کنید. این تابع به‌صورت ناهمگام کار می‌کند؛ یعنی درخواست را می‌فرستد و پاسخ را از طریق سازوکار تابع بازگشتی (callback) پردازش می‌کند.

## ساختار `frappe.call`

```js
frappe.call({
 method: "",
 type: "POST",
 args: {},
 success: function(r) {},
 error: function(r) {},
 always: function(r) {},
 btn: opts.btn,
 freeze: false,
 freeze_message: "",
 async: true,
 url: "" || frappe.request.url,
});
```

#### شرح پارامترها

- `method`: مسیر نقطه‌ای متد سمت سرور که با `@frappe.whitelist()` مجاز شده است.
- `type`: رشته‌ای برای نوع درخواست HTTP؛ یکی از `GET`، `POST`، `PUT` یا `DELETE`. مقدار پیش‌فرض `POST` است.
- `args`: آرایهٔ انجمنیِ آرگومان‌هایی که همراه درخواست فرستاده می‌شوند.
- `success`: تابعی که پس از اجرای موفق درخواست فراخوانی می‌شود.
- `error`: تابعی که در صورت شکست درخواست اجرا می‌شود.
- `always`: تابعی که در هر دو حالت موفقیت یا شکست اجرا می‌شود.
- `btn`: شیء دکمه‌ای که درخواست را آغاز کرده است.
- `freeze`: مقدار بولی؛ اگر فعال باشد، صفحه تا دریافت پاسخ قفل می‌شود.
- `freeze_message`: رشته‌ای که هنگام قفل‌بودن صفحه نمایش داده می‌شود.
- `async`: مقدار بولی با پیش‌فرض `true`؛ بنابراین هر فراخوانی `frappe.call` ناهمگام است. برای اجرای همگام، آن را `false` قرار دهید.
- `url`: نشانی‌ای که درخواست به آن فرستاده می‌شود.

## استفاده از `frappe.call`

### فراخوانی API استاندارد

```js
frappe.call({
 method: 'frappe.client.get_value',
 args: {
 'doctype': 'Item',
 'filters': {'name': item_code},
 'fieldname': [
 'item_name',
 'web_long_description',
 'description',
 'image',
 'thumbnail'
 ]
 },
 callback: function(r) {
 if (!r.exc) {
 // کدِ اجراشونده در صورت موفقیت
 }
 }
});
```

شرح پارامترها:

- `doctype`: نام DocTypeای که اطلاعاتش را می‌خواهید دریافت کنید.
- `filters`: شرط‌هایی که نتیجه را پالایه می‌کنند.
- `fieldname`: می‌توانید نام فیلدهایی را که باید در پاسخ برگردند، در آرایه مشخص کنید.

### فراخوانی متدهای مجازشده

در سمت کارخواه، `method` سمت سرور را مشخص می‌کنیم که باید اجرا شود. این مقدار مسیر نقطه‌ای در ماژول‌های Python سمت سرور است و بخش پایانی آن نام متد است.

```js
frappe.call({
 method: "frappe.core.doctype.user.user.get_all_roles", // مسیر نقطه‌ای متد سمت سرور
 callback: function(r) {
 // کدِ اجراشونده پس از پاسخ
 }
 });
```

درخواست بالا متد سمت سرور `get_all_roles` را فراخوانی می‌کند که در فایل `$MY_BENCH/apps/frappe/frappe/core/doctype/user/user.py` قرار دارد:

```python
@frappe.whitelist()
def get_all_roles():
    # منطق کسب‌وکار
    return value
```

> **نکته:** برای دسترسی به هر متد سمت سرور از طریق `frappe.call()`، باید آن را با دکوراتور `@frappe.whitelist()` مجاز کنید.

> **یادداشت مترجم:** این صفحه در فهرست پارامترها از `success` نام می‌برد، اما نمونه‌ها از `callback` استفاده می‌کنند. برای امضای API و الگوی جاری، [فراخوانی‌های سرور (AJAX)](../../../../user/en/api/server-calls.md) را ببینید.

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [فراخوانی AJAX در Frappe](https://docs.frappe.io/framework/user/en/guides/basics/frappe_ajax_call). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
