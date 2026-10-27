---
title: "درخواست مرخصی جبرانی"
slug: "compensatory-leave-request"
source_url: "https://docs.frappe.io/hr/compensatory-leave-request"
source_id: "hr/compensatory-leave-request"
source_version: "22a00bcb1e9abbdf59c600816a96eb66c8c2f1e42b376a312f275452af05bb7b"
source_updated: "2026-02-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**مرخصی جبرانی** مرخصی‌ای است که در جبران اضافه‌کاری یا کار در روزهای تعطیل به کارمند داده می‌شود.

در Frappe HR، کارکنان می‌توانند با سند **Compensatory Leave Request** درخواست مرخصی جبرانی ثبت کنند. تاریخ‌های درج‌شده در درخواست باید در Holiday List پیش‌فرض باشند و حضور کارمند در آن روزها نیز باید **Present** ثبت شده باشد.

> **توجه:** فقط Leave Typeهایی را می‌توان در درخواست مرخصی جبرانی انتخاب کرد که گزینهٔ **Is Compensatory** برایشان فعال باشد.

برای دسترسی به Compensatory Leave Request، به این مسیر بروید:

> Home > Human Resources > Leaves > Compensatory Leave Request

## 1. پیش‌نیازها

پیش از ساخت درخواست مرخصی جبرانی، باید سندهای زیر را ایجاد کنید:

- [Employee](https://docs.frappe.io/hr/employee)
- [Leave Period](https://docs.frappe.io/hr/leave-period)
- [Leave Type](https://docs.frappe.io/hr/leave-type)
- [Leave Policy](https://docs.frappe.io/hr/leave-policy)
- [Leave Allocation](https://docs.frappe.io/hr/leave-allocation)
- [Holiday List](https://docs.frappe.io/hr/holiday-list)
- [Attendance](https://docs.frappe.io/hr/attendance)

## 2. ساخت درخواست مرخصی جبرانی

1. به فهرست Compensatory Leave Request بروید و روی **New** کلیک کنید.
2. **Employee ID** را انتخاب کنید. پس از انتخاب، Employee Name و Department به‌طور خودکار دریافت می‌شوند.
3. **Leave Type** را انتخاب کنید.
4. **Work From Date** و **Work End Date** را انتخاب کنید. این‌ها تاریخ روز یا روزهایی هستند که کارمند در روز تعطیل کار کرده است.
5. دلیل درخواست را وارد کنید.
6. سند را **Save** و سپس **Submit** کنید.

![درخواست مرخصی جبرانی](https://frappehr.com/files/compensatory-leave.png)

پس از ثبت نهایی درخواست، Frappe HR سند Leave Allocation مربوط به نوع مرخصی جبرانی را به‌روز می‌کند. سپس کارمند می‌تواند با توجه به تعداد روزهای باقی‌مانده، برای استفاده از این نوع مرخصی درخواست بدهد.

## 3. موضوعات مرتبط

1. [Leave Application](https://docs.frappe.io/hr/leave-application)
2. [Leave Encashment](https://docs.frappe.io/hr/leave-encashment)
3. [Leave Block List](https://docs.frappe.io/hr/leave-block-list)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/hr/compensatory-leave-request). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
