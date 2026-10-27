---
title: "حقوق اضافی"
slug: "additional-salary"
source_url: "https://docs.frappe.io/hr/additional-salary"
source_id: "hr/additional-salary"
source_version: "5d7548e653c42b2631d3053fda2e2647ee076a661262f34d8cddfa1a5424b9f9"
source_updated: "2026-02-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**حقوق اضافی** مبلغی است که کارمند از شرکتی که در آن کار می‌کند، افزون بر حقوق معمول خود دریافت می‌کند.

در Frappe HR می‌توانید هنگام پردازش حقوق و دستمزد، مبلغی موردی را برای کارمند مشخصی به‌عنوان پرداخت اضافه کنید یا از حقوقش کسر کنید. پاداش عملکرد، فوق‌العادهٔ مأموریت، معوقات، مشوق‌ها و تعدیل‌های دیگر نمونه‌هایی از حقوق اضافی هستند.

برای دسترسی به حقوق اضافی، به این مسیر بروید:

> Home > Human Resources > Payroll > Additional Salary

## 1. پیش‌نیازها

پیش از ایجاد حقوق اضافی، بهتر است موارد زیر را ایجاد کرده باشید:

- [Employee](https://docs.frappe.io/hr/employee)
- [Salary Component](https://docs.frappe.io/hr/salary-component)

## 2. ایجاد حقوق اضافی

1. به فهرست Additional Salary بروید و روی **New** کلیک کنید.
2. **Employee** را انتخاب کنید.
3. **Salary Component** را انتخاب کنید.
4. مقدار **Amount** را وارد کنید.
5. **Payroll Date** را وارد کنید. اگر Payroll Date حقوق اضافی در بازه‌ای باشد که حقوق و دستمزد پردازش می‌شود، مبلغ به درآمدها یا کسورات اضافه خواهد شد.
6. سند را **Save** و سپس **Submit** کنید.

اگر می‌خواهید مبلغ مؤلفهٔ حقوق اضافی جایگزین مبلغ آن در Salary Structure شود، گزینهٔ **Overwrite Salary Structure Amount** را علامت بزنید. همچنین اگر باید کل مالیات مؤلفهٔ حقوق اضافی در همان تاریخ پرداخت کسر شود، گزینهٔ **Deduct Full Tax on Selected Payroll Date** را انتخاب کنید.

![حقوق اضافی در Frappe HR](https://frappehr.com/files/additional-salary.png)

## 3. قابلیت‌ها

### 3.1 حقوق اضافی تکرارشونده

این قابلیت امکان ایجاد حقوق اضافی را برای یک بازهٔ زمانی ثابت فراهم می‌کند. اگر **Is Recurring** را علامت بزنید، باید مقدارهای **From Date** و **To Date** را وارد کنید. مبلغ حقوق اضافی در بازهٔ انتخاب‌شده به حقوق همین کارمند اضافه یا از آن کسر می‌شود و در Salary Slip او نمایش می‌یابد. این مبلغ هر ماه در فاصلهٔ بین From Date و To Date تکرار خواهد شد.

## 4. موضوعات مرتبط

1. [Retention Bonus](https://docs.frappe.io/hr/retention-bonus)
2. [Employee Incentive](https://docs.frappe.io/hr/employee-incentive)
3. [Salary Structure](https://docs.frappe.io/hr/salary-structure)
4. [Salary Structure Assignment](https://docs.frappe.io/hr/salary-structure-assignment)
5. [Payroll Entry](https://docs.frappe.io/hr/payroll-entry)
6. [Payroll Period](https://docs.frappe.io/hr/payroll-period)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/hr/additional-salary). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
