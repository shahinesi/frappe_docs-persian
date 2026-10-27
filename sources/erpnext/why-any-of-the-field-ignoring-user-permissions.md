---
title: "Why any of the Field Ignoring User Permissions?"
url: "https://docs.frappe.io/erpnext/why-any-of-the-field-ignoring-user-permissions"
updated: "2026-01-13"
---

In some cases, the Custodian field may ignore user permissions and allow users to access values that they should not see.

This usually happens because the Ignore User Permissions option is enabled for the field.

Steps to Fix

1. **Go to Customize Form**

* Open Customize Form from the search bar.
* In the customize form, select the Doctype where the field exists (e.g.,The custodian field exists in the Asset Doctype)
![](/files/Screenshot%202025-09-17%20at%205.05.33%E2%80%AFPM.png)

2. **Locate the Custodian Field**
* Search for Custodian in the field name column.
* Click on the Custodian field to expand the properties.
![](/files/Screenshot%202025-09-17%20at%205.06.31%E2%80%AFPM.png)

3. **Disable Ignore User Permissions**
* If the checkbox is enabled, uncheck it.
* Click Save.
![](/files/Screenshot%202025-09-18%20at%202.28.10%E2%80%AFPM.png)

4. **Reload and Verify**

* Reload the page.
* Test with a user who has restricted permissions.
* The Custodian field will now respect user permissions.