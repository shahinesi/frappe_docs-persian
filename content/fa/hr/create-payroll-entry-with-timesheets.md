---
title: "ثبت حقوق بر پایهٔ برگه‌های زمان‌کار"
slug: "create-payroll-entry-with-timesheets"
source_url: "https://docs.frappe.io/hr/create-payroll-entry-with-timesheets"
source_id: "hr/create-payroll-entry-with-timesheets"
source_version: "30a578694359d84ed02d5939b5aa855150a22e5a2e3923d99a084eb23248d56b"
source_updated: "2026-02-04"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**کاربرد:** اضافه‌کاری کارمند با Timesheet ثبت شده و لازم است در زمان پردازش حقوق و دستمزد، افزون بر حقوق معمول، بابت آن به کارمند پرداخت شود.

## مراحل

1. یک کارمند بسازید.
2. یک مؤلفهٔ حقوق با نام **اضافه‌کاری** و از نوع **درآمد** بسازید.

   ![ساخت مؤلفهٔ حقوق اضافه کاری](https://docs.erpnext.com/files/IKY5KnC.png)

3. یک ساختار حقوق بسازید و **اضافه‌کاری** را با مبلغ 0 در آن بگنجانید.
4. در خود ساختار حقوق، گزینهٔ **فیش حقوق بر اساس برگهٔ زمان‌کار** را علامت بزنید، **اضافه‌کاری** را به‌عنوان مؤلفهٔ حقوق انتخاب کنید و **نرخ ساعتی** را وارد کنید.

   ![تنظیم نرخ ساعتی برای اضافه‌کاری](https://docs.erpnext.com/files/RSBGOUP.png)

5. ساختار حقوق را ثبت نهایی کنید و از طریق تخصیص ساختار حقوق آن را به کارمند اختصاص دهید.

   ![تخصیص ساختار حقوق و دستمزد به کارمند](https://docs.erpnext.com/files/qj9KVAu.png)

6. با استفاده از DocType مربوط به Timesheet برای این کارمند Timesheet بسازید.

   ![ساخت Timesheet](https://docs.erpnext.com/files/xtdKq6i.png)

   ![جزئیات Timesheet](https://docs.erpnext.com/files/W7vYYWt.png)

   در نمونهٔ بالا، کارمند در مجموع 8 ساعت طی ماه ژانویه اضافه‌کاری کرده است.

7. برای ماه ژانویه یک سند پردازش حقوق و دستمزد جدید بسازید و گزینهٔ **فیش حقوق بر اساس برگهٔ زمان‌کار** را علامت بزنید. ذخیره کنید، سپس **دریافت کارمندان** و بعد **ایجاد فیش‌های حقوقی** را بزنید.

فیش حقوق کارمند همهٔ Timesheetهایی را که او برای همان ماه ساخته است دریافت می‌کند و بر همان اساس مؤلفهٔ اضافه‌کاری را در فیش حقوق محاسبه می‌کند.

![محاسبهٔ مؤلفهٔ اضافه کاری در فیش حقوق](https://docs.erpnext.com/files/oZ1rr5x.png)

![فیش حقوق محاسبه‌شده بر اساس Timesheet](https://docs.erpnext.com/files/1QoJVGc.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [ساخت ثبت حقوق و دستمزد با Timesheet](https://docs.frappe.io/hr/create-payroll-entry-with-timesheets). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
