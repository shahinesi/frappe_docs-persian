---
title: "نوع استخدام"
slug: "نوع-استخدام"
source_url: "https://docs.frappe.io/hr/employment-type"
source_id: "hr/employment-type"
source_version: "2c807ebce931be49689b3e151832f51d74f3b58b5a3063d4ad461c5f2345a9fe"
---

**نوع استخدام** دسته‌بندی‌ای است که شرایط دستمزد و استحقاق مرخصی فرد را مشخص می‌کند. در Frappe HR می‌توانید یکی از نوع‌های استخدام ازپیش‌تعریف‌شده را انتخاب کنید یا بر اساس نیاز خود نوع جدیدی بسازید.

برای دسترسی به Employment Type بروید به:

> **Home > Human Resources > Employee > Employment Type**

## ساخت نوع استخدام

1. فهرست Employment Type را باز و **New** را انتخاب کنید.
2. نام نوع استخدام را وارد کنید.
3. ذخیره کنید.

## کاربردهای نوع استخدام

نوع استخدام را می‌توان به اطلاعات اصلی [Employee](https://docs.frappe.io/hr/employee) پیوند داد. این مقدار در بخش‌های زیر کاربرد دارد:

- **ساختار حقوق:** در فیلدهای Condition و Formula از [Salary Component](https://docs.frappe.io/hr/salary-component)، نوع استخدام را با نام فیلد `employment_type` به‌عنوان متغیر به‌کار ببرید. با این کار مؤلفهٔ حقوق فقط برای دستهٔ مشخصی از کارکنان اعمال می‌شود. برای نمونه، شرط `employment_type=="Intern"` مؤلفه را فقط برای کارکنانی اعمال می‌کند که نوع استخدامشان Intern است.
- **استخدام:** نوع استخدام را می‌توان در [Job Opening](https://docs.frappe.io/hr/job-opening) و الگوی آن تعیین کرد. این مقدار در درگاه فرصت‌های شغلی به نامزدها نمایش داده می‌شود و می‌تواند فیلتر باشد. هنگام استخدام متقاضی، نوع استخدام از [Job Applicant](https://docs.frappe.io/hr/job-applicant) به [Employee](https://docs.frappe.io/hr/employee) منتقل می‌شود.
- **ابزارها:** در [Employee Attendance Tool](https://docs.frappe.io/hr/employee-attendance-tool) می‌توان با نوع استخدام فیلتر کرد تا حضور و غیاب دستهٔ مشخصی از کارکنان ثبت شود.

## موضوعات مرتبط

1. [Employee](https://docs.frappe.io/hr/employee)
2. [Employment Type](https://docs.frappe.io/hr/employment-type)
3. [Branch](https://docs.frappe.io/hr/branch)
4. [Department](https://docs.frappe.io/hr/department)
5. [Designation](https://docs.frappe.io/hr/designation)
6. [Employee Grade](https://docs.frappe.io/hr/employee-grade)

---
منبع: [مستندات رسمی Frappe HR](https://docs.frappe.io/hr/employment-type). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
