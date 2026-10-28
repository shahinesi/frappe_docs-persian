---
title: "قالب‌بندی فیلدهای پیوند"
slug: "formatter_for_link_fields"
source_url: "https://docs.frappe.io/framework/user/en/guides/desk/formatter_for_link_fields"
source_id: "framework/user/en/guides/desk/formatter_for_link_fields"
source_version: "26a9ec91e489f694a63df31eb678dcd6d59d67addc3c035bd596650fd2d89208"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/desk/formatter_for_link_fields)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

اگر برای یک موجودیت هم کد و هم نام نگهداری می‌شود (برای نمونه، برای کارمند ممکن است کارمند Code و کارمند نام داشته باشیم) و بخواهیم هر دو را در فیلد پیوند نمایش دهیم، می‌توانیم برای آن قالب‌ساز تعریف کنیم.

#### نمونه

```
frappe.form.link_formatters['Employee'] = function(value, doc) {
    if(doc.employee_name && doc.employee_name !== value) {
        return value + ': ' + doc.employee_name;
    } else {
        return value;
    }
}
```

نکته‌ها:

1. هم کلید اصلی (`name`) و هم نام توصیفی (برای نمونه `employee_name`) باید در سند وجود داشته باشند. فیلد نام توصیفی می‌تواند پنهان باشد.
2. این کد باید پیش از بارگذاری سند بار شود و می‌توان آن را برای همهٔ فرم‌ها دوباره استفاده کرد. همچنین می‌توانید آن را در `build.json` اضافه کنید.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/guides/desk/formatter_for_link_fields). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
