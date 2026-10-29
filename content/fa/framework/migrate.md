---
title: "به‌روزرسانی سایت (bench migrate)"
slug: "migrate"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/migrate"
source_id: "framework/user/en/bench/reference/migrate"
source_version: "ee611809e3b80f055f8ced85d680ba1f879736695b68e8f9d531381221822b31"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench migrate [OPTIONS]
```

## توضیح

فرمان `migrate` وضعیت سایت را با برنامه‌های در دسترس به‌روز می‌کند. این فرمان کارهای زیر را به‌ترتیب انجام می‌دهد:

- اجرای Hookهای `before_migrate`
- اجرای وصله‌های برنامه
- همگام‌سازی طرح‌وارهٔ پایگاه داده و کارهای پس‌زمینه
- همگام‌سازی داده‌های ثابت
- همگام‌سازی داشبوردها، نمادهای دسکتاپ و صفحه‌های وب
- به‌روزرسانی ترجمه‌ها
- بازسازی نمایهٔ جست‌وجو برای همهٔ مسیرها
- اجرای Hookهای `after_migrate`

این عملیات همچنین فایل `touched_tables.json` مربوط را به‌روزرسانی می‌کند و نسخه‌های برنامه را در DocType **برنامه‌های نصب‌شده** ثبت می‌کند.

## گزینه‌ها

- `--skip-failing`: وصله‌هایی را که اجرا نمی‌شوند رد می‌کند.
- `--skip-search-index`: نمایه‌سازی اسناد وب را رد می‌کند.

## نمونه‌ها

1. اجرای مهاجرت روی یک سایت موجود:

   ```bash
   bench --site {site} migrate
   ```

2. اجرای مهاجرت بدون بازسازی نمایهٔ جست‌وجوی اسناد وب:

   ```bash
   bench --site {site} migrate --skip-search-index
   ```

3. اجرای مهاجرت و ردکردن وصله‌های ناموفق:

   ```bash
   bench --site {site} migrate --skip-failing
   ```

> **توجه:** ردکردن وصله‌های ناموفق برای استفاده در محیط عملیاتی توصیه نمی‌شود.

منبع: [به‌روزرسانی سایت](https://docs.frappe.io/framework/user/en/bench/reference/migrate). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
