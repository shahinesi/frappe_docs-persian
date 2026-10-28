---
title: "تغییرمسیرها"
slug: "redirects"
source_url: "https://docs.frappe.io/framework/user/en/guides/portal-development/redirects"
source_id: "framework/user/en/guides/portal-development/redirects"
source_version: "9095b97dd5ce62dae475a3fe172cd010a715a607bc60a9393262e1197c8606a0"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [تغییرمسیرها](https://docs.frappe.io/framework/user/en/guides/portal-development/redirects)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

برای افزودن تغییرمسیر، hook با نام `website_redirects` را اضافه کنید.

فیلد اختیاری `redirect_http_status` به شما اجازه می‌دهد کد وضعیت HTTP دلخواه را برای تغییرمسیر تعیین کنید. اگر آن را مشخص نکنید، مقدار پیش‌فرض 301 است.

### نمونه‌ها

```python
website_redirects = [
    # absolute location
    {"source": "/from", "target": "https://mysite/from"},

    # relative location
    {"source": "/from", "target": "/main", "redirect_http_status": 307},

    # use regex
    {"source": "/from/(.*)", "target": "/main/\1"}
]
```

---

**منبع:** [تغییرمسیرها](https://docs.frappe.io/framework/user/en/guides/portal-development/redirects). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
