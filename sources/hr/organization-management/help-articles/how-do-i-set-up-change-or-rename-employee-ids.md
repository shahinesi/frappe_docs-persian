---
title: "How do I set up, change or rename Employee IDs?"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/organization-management/help-articles/how-do-i-set-up-change-or-rename-employee-ids"
updated: "2026-10-13"
---

The Employee ID is the name of the Employee record, for example `HR-EMP-00001`. You choose how the system makes it in **HR Settings**. You can change the series, reset its counter, and rename an ID that already exists.

## How the Employee ID is made

Go to **HR Settings → Employee Naming By**. This field has three options:


| Option              | The Employee ID is                                        | Use it when                                        |
| ------------------- | --------------------------------------------------------- | -------------------------------------------------- |
| **Naming Series**   | A prefix and a running number, for example `HR-EMP-00001` | You want the system to number employees            |
| **Employee Number** | The value you type in the **Employee Number** field       | Your company already has its own ID numbers        |
| **Full Name**       | The employee's full name                                  | You have few employees and all names are different |


The system makes the ID once, when you save a new Employee. If you change **Employee Naming By** later, old employees keep their IDs. Only new employees use the new method.

## Set up the naming method

1. Go to **HR Settings**.
2. In **Employee Naming By**, select the option you need.
3. Click **Save**.



Before you select **Employee Number**, read these rules:

- You must fill **Employee Number** on every new Employee. If it is empty, the system cannot make an ID and does not save the record.
- The system does not check that **Employee Number** is unique in the field itself. Two employees with the same number get the same ID, and the second one is not saved.

Before you select **Full Name**, know that two employees with the same name get the same ID. The second one is not saved.

## Change the series prefix

The default series is `HR-EMP-`. To use your own prefix, such as `BT-`:

1. Search for **Document Naming Settings** in the search bar and open it.
2. In **Select Transaction**, select **Employee**.
3. In **Series List for this Transaction**, write each series on its own line. For example, `BT-.####`. Each `#` is one digit of the number.
4. Click **Update**.
5. Open a new Employee and check that **Series** shows the new prefix.

The first employee in the new series gets number 1, for example `BT-0001`.

## Fix "already exists" and set the counter

The series keeps a counter for each prefix. The next ID is the counter plus one. If the counter is lower than the highest number in use, the system makes an ID that already exists. The new Employee is not saved, and you see an error that the ID is a duplicate.

```
(To check) the exact error text from a new Employee that uses a number that already exists

```

This happens most often after you import employees with their own IDs (for example `HR-EMP-00150`) and the counter is still at 20.

1. Open the **Employee** list. Sort by **ID**, descending. Note the highest number for the prefix. In the example, this is 150.
2. Go to **Document Naming Settings**.
3. Open the **Update Series Counter** section.
4. In **Prefix**, enter the prefix without the number, for example `HR-EMP-`.
5. In **Current Value**, enter the highest number in use. In the example, enter 150.
6. Click **Update Series Number**.

The next employee gets `HR-EMP-00151`. You need the **System Manager** role for this.

## Rename an Employee ID

You can rename an ID that already exists. For example, a company changes its numbering and wants `BT-0001` instead of `HR-EMP-00001`.

1. Open the Employee.
2. Click **Menu → Rename**.
3. Enter the new ID.
4. Click **Rename**. The system changes the ID in the Employee and in every document that links to it. This includes Attendance, Leave Application, Salary Slip, and Employee Check-in.



Rename takes longer for employees with many linked documents. Do it when no one is working on that employee's records, and take a backup before you rename many employees.

You cannot reuse an ID that belongs to another Employee. The system stops you.

Renaming the ID does not change the **Employee Number** field. If you use **Employee Number** as the naming method, change the **Employee Number** by hand as well, so the two stay the same.

## Related

- [HR Settings](https://docs.frappe.io/hr/hr-settings) 
- [Document](https://docs.frappe.io/framework/user/en/document-naming-settings) [Naming](https://docs.frappe.io/erpnext/document-naming-settings) [Settings](https://docs.frappe.io/framework/user/en/document-naming-settings) 
- [Employee](https://docs.frappe.io/hr/employee)