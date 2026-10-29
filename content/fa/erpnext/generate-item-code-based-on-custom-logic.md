---
title: "تولید کد کالا بر پایهٔ منطق سفارشی"
slug: "generate-item-code-based-on-custom-logic"
source_url: "https://docs.frappe.io/erpnext/generate-item-code-based-on-custom-logic"
source_id: "erpnext/generate-item-code-based-on-custom-logic"
source_version: "c1f22a5d647f4ce3658e1539cdce0804ea52d1e0df091c323b6e3d13bec735f0"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
description: "ساخت خودکار کد کالا با اسکریپت سفارشی بر اساس گروه کالا و برند."
---

این **اسکریپت سفارشی** را در اسکریپت‌های **کالا (Item)** قرار دهید تا کد کالای جدید درست پیش از ذخیرهٔ رکورد ساخته شود.

```javascript
 cur_frm.cscript.customvalidate = function (doc) {
  // clear itemcode (name is from itemcode)
  doc.itemcode = "";

  // first 2 characters based on itemgroup
  switch (doc.itemgroup) {
    case "Test A":
      doc.itemcode = "TA";
      break;
    case "Test B":
      doc.itemcode = "TB";
      break;
    default:
      doc.itemcode = "XX";
  }

  // add next 2 characters based on brand
  switch (doc.brand) {
    case "Brand A":
      doc.itemcode += "BA";
      break;
    case "Brand B":
      doc.itemcode += "BB";
      break;
    default:
      doc.itemcode += "BX";
  }
};
```

منبع: [تولید کد کالا بر پایهٔ منطق سفارشی](https://docs.frappe.io/erpnext/generate-item-code-based-on-custom-logic). این صفحه ترجمهٔ غیررسمی است و محتوای مستندات تحت شرایط CC BY-SA با انتساب به منبع بازنشر شده است.
