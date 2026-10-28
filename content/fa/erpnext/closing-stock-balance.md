---
title: "موجودی پایان دوره"
slug: "closing-stock-balance"
source_url: "https://docs.frappe.io/erpnext/closing-stock-balance"
source_id: "erpnext/closing-stock-balance"
source_version: "9dc530175ea99b2931e3705291eca1863797bddd0fd917ae1f8837b5c7a082cd"
source_updated: "2026-03-02"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> توجه: در نسخهٔ v16 نام **Closing Stock Balance** به [راهنمای «Stock Closing Entry» در ERPNext](https://docs.frappe.io/erpnext/stock-closing-entry) تغییر کرده است.

#### گزارش Stock Balance چگونه آماده می‌شود؟

گزارش Stock Balance ابزار مهمی است که به کسب‌وکارها کمک می‌کند سطح موجودی را پایش و بر اساس آن تصمیم‌گیری کنند. این گزارش چهار ستون اصلی دارد: **Opening Stock**، **In Stock**، **Out Stock** و **Balance Stock**. مقدار Balance Stock با این فرمول محاسبه می‌شود:

```text
Opening Stock + In Stock - Out Stock
```

یکی از چالش‌های اصلی تهیهٔ گزارش Stock Balance، محاسبهٔ Opening Stock است. برای تعیین آن، سیستم همهٔ ردیف‌های جدول Stock Ledger Entry را که پیش از فیلتر **از تاریخ** قرار دارند می‌خواند. اگر فیلتر کد کالا یا انبار تعیین نشده باشد و جدول Stock Ledger Entry رکوردهای بسیار زیادی داشته باشد، این کار ممکن است فرایند را به‌طور چشمگیری کند و مشکلات کارایی ایجاد کند.

#### موجودی پایان دوره (Closing Stock Balance)

![فرم Closing Stock Balance](/files/QqWv6uJ.png)

برای رفع این مشکل، قابلیت **Closing Stock Balance** معرفی شده است. این قابلیت موجودی افتتاحیه را از پیش آماده می‌کند و زمان تولید گزارش Stock Balance را کاهش می‌دهد.

برای استفادهٔ مؤثر از آن:

1. **ساخت Closing Stock Balance:** پس از پایان سال مالی و تکمیل حسابرسی‌های لازم آن سال، Closing Stock Balance را برای تاریخ پایانی همان سال مالی بسازید. برای نمونه، اگر سال مالی 2022-2023 مدنظر است، تاریخ پایان همان سال را مشخص کنید.
2. **آماده‌سازی داده‌ها:** پس از ثبت نهایی Closing Stock Balance، سیستم برای آماده‌سازی داده‌ها به زمان نیاز دارد. در این مرحله، مقدارهای Opening Stock محاسبه و برای استفادهٔ بعدی ذخیره می‌شوند.
3. **استفاده از Closing Stock Balance:** پس از آماده‌شدن داده‌های موجودی پایان دوره، سیستم از آن‌ها برای تولید کارآمد گزارش Stock Balance استفاده می‌کند. بنابراین هر بار که کاربری گزارش Stock Balance را باز کند، مقدارهای Opening Stock موردنیاز را سریع از Closing Stock Balance می‌خواند.
4. **ثبت سالانه:** پس از بستن هر سال مالی، هر سال یک Closing Stock Balance بسازید تا مقدارهای Opening Stock برای هر دورهٔ گزارش‌گیری به‌روز و دقیق باشند.

با اجرای این روش پیشنهادی و استفاده از قابلیت Closing Stock Balance، حتی در صورت وجود حجم زیادی داده در Stock Ledger Entry می‌توانید کارایی و سرعت تولید گزارش‌های موجودی را به‌طور محسوسی بهتر کنید.

---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/closing-stock-balance). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
