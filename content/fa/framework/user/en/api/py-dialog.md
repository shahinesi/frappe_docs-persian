---
title: "API پنجره‌های گفت‌وگو"
slug: "py-dialog"
source_url: "https://docs.frappe.io/framework/user/en/api/py-dialog"
source_id: "framework/user/en/api/py-dialog"
source_version: "091b1059b852d1f52796961d58e17b76acfb2f931c7e696587be2f21cb223a0d"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe مجموعه‌ای از پنجره‌های گفت‌وگوی استاندارد، تعاملی و انعطاف‌پذیر دارد که پیکربندی و استفاده از آن‌ها آسان است. برای JavaScript نیز [API پنجره‌های گفت‌وگو](https://docs.frappe.io/framework/user/en/api/dialog) کامل‌تری وجود دارد.

## `frappe.msgprint`

`frappe.msgprint(msg, title, raise_exception, as_table, as_list, indicator, primary_action, is_minimizable, wide, realtime)`

این متد فقط در چرخهٔ درخواست و پاسخ کار می‌کند. پیامی را به کاربری که وارد میزکار شده و درخواست را آغاز کرده است نشان می‌دهد.

آرگومان‌ها:

- `msg`: پیامی که باید نمایش داده شود.
- `title`: عنوان پنجرهٔ محاوره.
- `as_table`: اگر `msg` فهرستی از فهرست‌ها باشد، آن را به‌شکل جدول HTML نمایش می‌دهد.
- `as_list`: اگر `msg` فهرست باشد، آن را به‌شکل فهرست نامرتب HTML نمایش می‌دهد.
- `primary_action`: اقدام اصلی سمت سرور یا کارخواه را متصل می‌کند.
- `raise_exception`: استثنایی که باید ایجاد شود.
- `is_wide`: پنجرهٔ محاوره را عریض نمایش می‌دهد.
- `is_minimizable`: اجازه می‌دهد کاربر پنجره را کوچک کند.
- `realtime`: پیام را بی‌درنگ از طریق WebSocket منتشر می‌کند، به‌جای آن‌که به گزارش پیام‌های پاسخ افزوده شود.

```python
frappe.msgprint(
    msg='این فایل وجود ندارد',
    title='خطا',
    raise_exception=FileNotFoundError
)
```

![نمونهٔ frappe.msgprint](/files/dialog-api-msgprint-py.png)

`primary_action` می‌تواند شامل اقدام `server_action` **یا** `client_side` باشد که باید مسیر نقطه‌دار متدهای مربوط را داشته باشند. تابع JavaScript باید در دسترس عمومی باشد. همچنین می‌توانید `hide_on_success` را تعیین کنید تا پس از موفقیت اقدام، پیام بسته شود.

```python
# نمایش پیام همراه با اقدام سمت سرور و کارخواه
frappe.msgprint(
    msg='این فایل وجود ندارد',
    title='خطا',
    raise_exception=FileNotFoundError,
    primary_action={
        'label': _('اجرای اقدام'),
        'server_action': 'dotted.path.to.server.method',
        'client_action': 'dotted.path.to.client.method',
        'hide_on_success': True,
        'args': args
    }
)
```

![نمونهٔ frappe.msgprint همراه با اقدام اصلی](/files/dialog-api-msgprint-py-with-primary-action.png)

## `frappe.throw`

`frappe.throw(msg, exc, title, is_minimizable, wide, as_list, primary_action)`

این متد هم استثنا ایجاد می‌کند و هم پیامی در میزکار نشان می‌دهد. در اصل، پوششی پیرامون `frappe.msgprint` است.

می‌توانید استثنایی اختیاری را به `exc` بدهید. به‌طور پیش‌فرض، استثنای `ValidationError` ایجاد می‌شود.

```python
frappe.throw(
    title='خطا',
    msg='این فایل وجود ندارد',
    exc=FileNotFoundError
)
```

![نمونهٔ frappe.throw](/files/dialog-api-msgprint-py.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API پنجره‌های گفت‌وگو](https://docs.frappe.io/framework/user/en/api/py-dialog). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
