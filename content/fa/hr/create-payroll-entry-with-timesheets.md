---
title: "ساخت Payroll Entry با Timesheet"
slug: "create-payroll-entry-with-timesheets"
source_url: "https://docs.frappe.io/hr/create-payroll-entry-with-timesheets"
source_id: "hr/create-payroll-entry-with-timesheets"
source_version: "30a578694359d84ed02d5939b5aa855150a22e5a2e3923d99a084eb23248d56b"
source_updated: "2026-02-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**کاربرد:** اضافه‌کاری کارمند با Timesheet ثبت شده و لازم است در زمان پردازش حقوق و دستمزد، افزون بر حقوق معمول، بابت آن به کارمند پرداخت شود.

## مراحل

1. یک Employee بسازید.
2. یک Salary Component با نام **Overtime** و از نوع **Earning** بسازید.

   ![ساخت مؤلفهٔ حقوق Overtime](https://docs.erpnext.com/files/IKY5KnC.png)

3. یک Salary Structure بسازید و **Overtime** را با مبلغ 0 در آن بگنجانید.
4. در خود Salary Structure، گزینهٔ **Salary Slip Based on Timesheet** را علامت بزنید، **Overtime** را به‌عنوان Salary Component انتخاب کنید و **Hour Rate** را وارد کنید.

   ![تنظیم Hour Rate برای Overtime](https://docs.erpnext.com/files/RSBGOUP.png)

5. Salary Structure را ثبت نهایی کنید و از طریق Salary Structure Assignment آن را به Employee اختصاص دهید.

   ![تخصیص Salary Structure به Employee](https://docs.erpnext.com/files/qj9KVAu.png)

6. با استفاده از DocType مربوط به Timesheet برای این کارمند Timesheet بسازید.

   ![ساخت Timesheet](https://docs.erpnext.com/files/xtdKq6i.png)

   ![جزئیات Timesheet](https://docs.erpnext.com/files/W7vYYWt.png)

   در نمونهٔ بالا، Employee در مجموع 8 ساعت طی ماه January اضافه‌کاری کرده است.

7. برای ماه January یک Payroll Entry جدید بسازید و گزینهٔ **Salary Slip Based on Timesheet** را علامت بزنید. ذخیره کنید، سپس **Get Employees** و بعد **Create Salary Slips** را بزنید.

Salary Slip کارمند همهٔ Timesheetهایی را که او برای همان ماه ساخته است دریافت می‌کند و بر همان اساس مؤلفهٔ Overtime را در فیش حقوق محاسبه می‌کند.

![محاسبهٔ مؤلفهٔ Overtime در فیش حقوق](https://docs.erpnext.com/files/oZ1rr5x.png)

![Salary Slip محاسبه‌شده بر اساس Timesheet](https://docs.erpnext.com/files/1QoJVGc.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/hr/create-payroll-entry-with-timesheets). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
