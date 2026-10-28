---
title: "ساخت Custom Field هنگام نصب برنامه"
slug: "how-to-create-custom-fields-during-app-installation"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation"
source_id: "framework/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation"
source_version: "60f3bd797c91791b3799269068a48c974701794564bad54ceda210b113b86f46"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

برنامهٔ سفارشی شما می‌تواند هنگام نصب روی سایتی تازه، به‌طور خودکار **Custom فیلد**هایی را به DocTypeهای بیرون از برنامه اضافه کند.

برای این کار، با استفاده از برنامهٔ وب Frappe، Custom فیلدهای موردنیاز برنامه را بسازید.

در فایل `hooks.py` برنامه، DocType مربوط به فیلدهای سفارشی را به‌عنوان fixture معرفی کنید:

```python
fixtures = ["Custom Field"]
```

پیش از commit کردن برنامه، fixtureها را با فرمان زیر خروجی بگیرید:

```sh
bench --site mysite export-fixtures
```

این فرمان پوشه‌ای با نام `fixtures` در پوشهٔ برنامه می‌سازد و تعریف Custom فیلدهایی را که اضافه کرده‌اید در یک فایل `.csv` یا `.json` می‌نویسد.

این فایل هنگام نصب برنامه روی سایتی تازه یا به‌روزرسانی آن با `bench update` به‌طور خودکار وارد می‌شود.

**نکته:** می‌توانید DocTypeهای تکی مانند **تنظیمات وب سایت** را نیز به‌عنوان fixture اضافه کنید.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
