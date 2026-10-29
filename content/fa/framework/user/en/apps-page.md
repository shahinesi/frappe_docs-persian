---
title: "صفحهٔ برنامه‌ها"
slug: "apps-page"
source_url: "https://docs.frappe.io/framework/user/en/apps-page"
source_id: "framework/user/en/apps-page"
source_version: "5be6cd3fae1f2aa12283ab3ccbe0b35a5d51a122a45edd4385037a70c5351376"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

صفحهٔ برنامه‌ها راهی سریع برای رفتن به همهٔ برنامه‌های نصب‌شده روی سایت فراهم می‌کند. به‌طور پیش‌فرض، تمام برنامه‌های Frappe نصب‌شده در سایت در این صفحه نمایش داده می‌شوند.

![صفحهٔ برنامه‌ها](https://docs.frappe.io/files/Apps%20Page.png)

## چگونه برنامه‌های سفارشی را در صفحهٔ برنامه‌ها نمایش دهیم؟

برای افزودن برنامهٔ سفارشی، پیکربندی زیر را در فایل `hooks.py` برنامه قرار دهید. نمونهٔ زیر از برنامهٔ Frappe CRM است.

در اینجا از گزینهٔ `has_permission` برای نمایش یا پنهان‌کردن نماد برنامه بر اساس منطق تجاری همان برنامه استفاده می‌شود؛ برای نمونه، می‌توان نماد را از کاربر وب‌سایت پنهان کرد.

```python
# هر عضو این فهرست به‌صورت یک برنامه در صفحهٔ برنامه‌ها نمایش داده می‌شود
add_to_apps_screen = [{
    "name": "crm",
    "logo": "/assets/crm/logo.png",
    "title": "CRM",
    "route": "/crm",
    "has_permission": "crm.api.check_app_permission"
}]
```

این قابلیت از نسخهٔ 15 به بعد پشتیبانی می‌شود.

## تنظیم برنامهٔ پیش‌فرض

می‌توانید یک برنامه را به‌عنوان پیش‌فرض تنظیم کنید تا کاربر پس از ورود به سایت مستقیماً به همان برنامه برود. اگر برنامهٔ پیش‌فرضی تعیین نشده باشد، صفحهٔ برنامه‌ها به‌طور پیش‌فرض نمایش داده می‌شود.

### برنامهٔ پیش‌فرض را می‌توان در دو سطح تنظیم کرد:

1. **سطح کاربر:** هر کاربر می‌تواند برنامهٔ پیش‌فرض دلخواه خود را تعیین کند.

   ![تنظیم برنامهٔ پیش‌فرض در سطح کاربر](https://docs.frappe.io/files/SetAsDefault.png)

   ![تنظیم برنامهٔ پیش‌فرض در نمای کاربر](https://docs.frappe.io/files/UserLevel.jpeg)

2. **سطح سامانه:** یک برنامهٔ پیش‌فرض سراسری برای همهٔ کاربران تعیین می‌شود.

   ![تنظیم برنامهٔ پیش‌فرض در سطح سامانه](https://docs.frappe.io/files/SystemLevel.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [صفحهٔ برنامه‌ها](https://docs.frappe.io/framework/user/en/apps-page). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
