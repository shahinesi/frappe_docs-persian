---
title: "Fetch value in a child table field from Master"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/fetch value in child table field"
updated: "2026-03-02"
---

### Sample Script to fetch expirydate field from Batch doctype to Sales Invoice Item table

Step 1: Create Custom Script for **Sales Invoice** (parent) doctype

Step 2: Script as below & Save

```javascript
frappe.ui.form.on("Sales Invoice Item", "batch_no", function(frm, cdt, cdn) {
 var d = locals[cdt][cdn];
 frappe.db.get_value("Batch", {"name": d.batch_no}, "expiry_date", function(value) {
 d.expiry_date = value.expiry_date;
 });
});
```

