---
title: "آیکن ماژول سفارشی"
slug: "custom-module-icon"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/custom-module-icon"
source_id: "framework/user/en/guides/app-development/custom-module-icon"
source_version: "1ec56ba3835addddc641010bd44d911924503d488c538f9f479cd9d0c26a243b"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/app-development/custom-module-icon)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

برای ساخت آیکن اختصاصی ماژول، یک فایل SVG برای آن بسازید و مسیر فایل را در `desktop/config.py` برنامهٔ خود تنظیم کنید.

این آیکن نخستین بار با AJAX بارگذاری و سپس نمایش داده می‌شود.

نمونه:

```py
from frappe import _

def get_data():
    return {
        "Frappe Apps": {
            "color": "orange",
            "icon": "assets/frappe/images/frappe.svg",
            "label": _("Frappe.io Portal"),
            "type": "module"
        }
    }
```

> **یادداشت مترجم:** تورفتگی نمونه در منبع رسمی ناهماهنگ بود؛ در اینجا فقط برای معتبرشدن نحو Python یکدست شده است.
>
> یادداشت منبع: [Noun پروژه](http://thenounproject.com/) به‌عنوان جایی برای خرید ارزان آیکن‌های SVG پیشنهاد شده است.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/guides/app-development/custom-module-icon). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
