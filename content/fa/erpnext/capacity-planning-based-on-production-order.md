---
title: "برنامه‌ریزی ظرفیت بر اساس Production Order"
slug: "capacity-planning-based-on-production-order"
source_url: "https://docs.frappe.io/erpnext/capacity-planning-based-on-production-order"
source_id: "erpnext/capacity-planning-based-on-production-order"
source_version: "a80d4ed52fdcb96292a3294795dc6f79c717c826dd9710811efadea601a42bae"
---

قابلیت **Capacity Planning** به شما کمک می‌کند کارهای تولیدی تخصیص‌یافته به هر Workstation را پیگیری کنید.

![برنامه‌ریزی ظرفیت در ERPNext](https://docs.frappe.io/files/Screen%20Shot%202017-01-30%20at%208.06.24%20PM.png)

برای استفاده از قابلیت Capacity Planning در حساب ERPNext خود، مراحل زیر را دنبال کنید.

## Operations

برای افزودن عملیات به مسیر زیر بروید:

**Manufacturing > Bill of Materials > Operations**

## Workstation

هر Workstation را از این مسیر در حساب ERPNext خود اضافه کنید:

**Manufacturing > Bill of Materials > Workstation**

در اطلاعات پایهٔ Workstation می‌توانید عملیات قابل‌انجام در آن، هزینه‌های مربوط و ساعت‌های کاری آن را تعریف کنید.

## Bill of Materials (BOM)

در BOM، علاوه بر فهرست مواد اولیهٔ موردنیاز برای تولید، می‌توانید عملیات و Workstationهایی را که مواد اولیه در آن‌ها پردازش می‌شوند نیز مشخص کنید.

## Production Order

هنگام ثبت نهایی Production Order، برای عملیات Timesheet ایجاد می‌شود. این کار امکان می‌دهد کارهای تولیدی را به هر Workstation تخصیص دهید و زمان واقعی صرف‌شده برای هر عملیات را نیز به‌روزرسانی کنید.

---

**پرسش:** هنگام ثبت نهایی Production Order، پیام خطای زیر نمایش داده می‌شود.

![نمونهٔ خطای Capacity Planning](https://docs.frappe.io/files/Screen%20Shot%202017-01-30%20at%208.12.40%20PM.png)

**پاسخ:** بررسی کنید که Working Hours را در اطلاعات پایهٔ Workstation به‌روز کرده باشید. اگر این کار را نکرده‌اید، ساعت‌های کاری را وارد و سپس Production Order را دوباره ثبت نهایی کنید. هنگام ثبت نهایی Production Order، عملیات (طبق BOM) به Workstation تخصیص داده می‌شوند. هر عملیات باید در همان روز شروع و تمام شود. اگر سامانه نتواند برای عملیاتی در یک روز زمان‌بندی کند، از شما می‌خواهد آن را به کارهای کوچک‌تر تقسیم کنید تا بتواند عملیات کوچک‌تر را در همان روز تخصیص دهد.

اگر Working Hours را در Workstation به‌روز کرده‌اید اما همچنان این خطا را می‌بینید، احتمالاً یکی از عملیات‌ها بیش از حد طولانی است و در یک روز تکمیل نمی‌شود. آن عملیات را به عملیات‌های کوچک‌تر تقسیم کنید تا روی Workstation تخصیص یابد و همان روز به پایان برسد.

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/capacity-planning-based-on-production-order). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
