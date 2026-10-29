---
title: "برون‌بُرد سفارشی‌سازی‌ها به برنامهٔ شما"
slug: "exporting-customizations"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/exporting-customizations"
source_id: "framework/user/en/guides/app-development/exporting-customizations"
source_version: "2489855acf3d21f763fdb37995cbcc1474868ec86b1e7dc365f27f2541352be3"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

یکی از کاربردهای رایج، گسترش DocType با **فیلدهای سفارشی** و تنظیم‌کننده‌های ویژگی (`Property Setters`) برای یک برنامهٔ مشخص است. برای ذخیرهٔ این تنظیمات در برنامه، **سفارشی‌سازی فرم** را باز کنید.

دکمهٔ **برون‌بُرد سفارشی‌سازی‌ها** را خواهید دید.

![دکمهٔ برون‌بُرد سفارشی‌سازی‌ها](https://docs.frappe.io/files/export-custom-1.png)

در این بخش می‌توانید ماژول را انتخاب کنید و تعیین کنید که آیا این سفارشی‌سازی‌ها پس از هر به‌روزرسانی همگام شوند یا نه.

سفارشی‌سازی‌ها در پوشهٔ تازهٔ `custom` در پوشهٔ ماژول برنامه صادر می‌شوند و با نام DocType ذخیره خواهند شد.

![پوشهٔ سفارشی‌سازی‌های صادرشده](https://docs.frappe.io/files/export-custom-2.png)

با اجرای `bench update` یا `bench migrate`، این سفارشی‌سازی‌ها با برنامه همگام می‌شوند.

> **هشدار:** هر بار که این قابلیت سفارشی‌سازی‌ها را همگام کند، همهٔ تنظیم‌کننده‌های ویژگی و مجوزهای سفارشیِ سایت با موارد تعریف‌شده در کد جایگزین می‌شوند. اگر این رفتار مطلوب نیست، از این قابلیت استفاده نکنید.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [برون‌بُرد سفارشی‌سازی‌ها به برنامهٔ شما](https://docs.frappe.io/framework/user/en/guides/app-development/exporting-customizations). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
