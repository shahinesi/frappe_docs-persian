---
title: "برنامه‌ریزی ظرفیت بر اساس Work Order"
slug: "capacity-planning"
source_url: "https://docs.frappe.io/erpnext/capacity-planning"
source_id: "erpnext/capacity-planning"
source_version: "8509230ba4c72d1d8db304e5be0c0c6f5c52feddcdd41ff600cb9e03b76841b6"
---

قابلیت **Capacity Planning** به شما کمک می‌کند کارهای تولیدی تخصیص‌یافته به هر Workstation را پیگیری کنید.

![تنظیمات برنامه‌ریزی ظرفیت](https://docs.frappe.io/files/capacity-1.png)

برای استفاده از قابلیت Capacity Planning در حساب ERPNext خود، مراحل زیر را دنبال کنید.

## 1. عملیات

برای افزودن عملیات به مسیر زیر بروید:

`Manufacturing -> Bill of Materials -> Operations`

## 2. Workstation

هر Workstation را در حساب ERPNext خود از مسیر زیر اضافه کنید:

`Manufacturing -> Bill of Materials -> Workstation`

در اطلاعات پایهٔ Workstation می‌توانید عملیاتی را که در آن انجام می‌شوند، هزینه‌های مربوط و ساعت‌های کاری آن Workstation را تعریف کنید.

## 3. Bill of Materials (BOM)

در BOM، علاوه بر فهرست مواد اولیهٔ موردنیاز برای تولید، می‌توانید عملیات و Workstationهایی را نیز مشخص کنید که مواد اولیه در آن‌ها پردازش می‌شوند.

## 4. Work Order

با ثبت نهایی Work Order، برای عملیات Timesheet ایجاد می‌شود. به این ترتیب می‌توانید کارهای تولیدی را به هر Workstation تخصیص دهید و زمان واقعی صرف‌شده برای هر عملیات را نیز به‌روزرسانی کنید.

## خطای مربوط به Capacity Planning

**پرسش:** هنگام ثبت نهایی Work Order، پیام خطای زیر نمایش داده می‌شود.

![نمونهٔ خطای Capacity Planning](https://docs.frappe.io/files/capacity-2.png)

**پاسخ:** بررسی کنید که Working Hours را در اطلاعات پایهٔ Workstation تنظیم کرده باشید. اگر هنوز تنظیم نشده است، آن را وارد کنید و سپس ثبت نهایی Work Order را دوباره امتحان کنید.

هنگام ثبت نهایی Work Order، عملیات (طبق BOM) به Workstation تخصیص داده می‌شوند. هر عملیات باید در همان روز شروع و تمام شود. اگر سامانه نتواند زمانی در یک روز برای آن عملیات برنامه‌ریزی کند، از شما می‌خواهد کار را به عملیات کوچک‌تری تقسیم کنید تا بتواند آن‌ها را در یک روز تخصیص دهد.

اگر Working Hours را در Workstation تنظیم کرده‌اید اما همچنان با این خطا روبه‌رو می‌شوید، احتمالاً یکی از عملیات‌ها بیش از حد طولانی است و در یک روز تکمیل نمی‌شود. آن عملیات را به عملیات‌های کوچک‌تر تقسیم کنید تا روی Workstation تخصیص یابد و همان روز به پایان برسد.

## نادیده‌گرفتن ساعت‌های کاری Workstation

اگر می‌خواهید اعتبارسنجی بالا را نادیده بگیرید و اجازه دهید کار تولیدی فراتر از ساعت کاری Workstation برنامه‌ریزی شود، **اضافه‌کاری** را در Manufacturing Settings فعال کنید.

![تنظیم Overtime برای برنامه‌ریزی ظرفیت](https://docs.frappe.io/files/capacity-3.png)

برای غیرفعال‌کردن کامل قابلیت Capacity Planning، در Manufacturing Settings گزینهٔ **Disable Capacity Planning and Time Tracking** را علامت بزنید.

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/capacity-planning). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
