---
title: "واکشی مقدار به فیلد جدول فرزند"
slug: "fetch-value-in-child-table-field"
source_url: "https://docs.frappe.io/erpnext/fetch%20value%20in%20child%20table%20field"
source_id: "erpnext/fetch%20value%20in%20child%20table%20field"
source_version: "c3d689f9a9fb125f470ef18c79b987f4e97b9b3fc676661bc3a5083ca18feb7e"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
---

### نمونه‌اسکریپت برای واکشی فیلد تاریخ انقضا (`expiry_date`) از سند پایهٔ «دسته» به جدول آیتم‌های فاکتور فروش

1. برای DocType **فاکتور فروش**، یک اسکریپت سفارشی بسازید.
2. اسکریپت زیر را وارد و ذخیره کنید:

```javascript
frappe.ui.form.on("Sales Invoice Item", "batch_no", function(frm, cdt, cdn) {
 var d = locals[cdt][cdn];
 frappe.db.get_value("Batch", {"name": d.batch_no}, "expiry_date", function(value) {
 d.expiry_date = value.expiry_date;
 });
});
```

این اسکریپت با تغییر شمارهٔ دسته در یکی از ردیف‌های فاکتور فروش، تاریخ انقضای سند «دسته» را می‌خواند و در فیلد `expiry_date` همان ردیف قرار می‌دهد. نام DocTypeها و فیلدها در کد شناسه‌های فنی‌اند و باید با همین صورت باقی بمانند.

منبع: [واکشی مقدار به فیلد جدول فرزند از سند پایه در ERPNext](https://docs.frappe.io/erpnext/fetch%20value%20in%20child%20table%20field). این صفحه ترجمهٔ غیررسمی است؛ مجوز محتوای منبع هنوز تأیید نشده است و تا زمان بررسی، بازنشر تحت شرایط CC BY-SA تأیید نمی‌شود.

