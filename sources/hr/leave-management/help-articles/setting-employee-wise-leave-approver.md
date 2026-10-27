---
title: "Setting Employee Wise Leave Approver"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-management/help-articles/setting-employee-wise-leave-approver"
updated: "2026-09-29"
---

Frappe HR supports more than one way to decide who should approve an employee's leave application. The right method depends on whether the approver is specific to one employee, shared by a department, or selected while creating the leave application.

## 1. Set Leave Approver In Employee Master

Use this when an employee should always have a specific default leave approver.

Steps:

1. Open the employee record from **Employee**.
2. Go to the **Attendance and Leave Details** section.
3. Select the **Leave Approver** for that employee.
4. Save the employee record.

When the employee creates a **Leave Application**, Frappe HR automatically fetches this approver as the default **Leave Approver**.

This is the best option when approvals are handled by each employee's reporting manager or by a specific HR person.

## 2. Set Leave Approvers In Department

Use this when all employees in a department should be approved by one or more department-level approvers.

Steps:

1. Open the relevant **Department**.
2. Add one or more users in the **Leave Approvers** table.
3. Save the department.

When an employee from that department applies for leave, the department leave approvers are available on the Leave Application.

If both employee-wise and department-wise approvers are configured, the approver set in the employee master is used as the default approver, while department approvers can also be available for selection.

## 3. Select The Leave Approver On Leave Application

The **Leave Approver** field is also available on the **Leave Application** itself.

When creating a leave application:

1. Select the employee.
2. Select the leave type and dates.
3. Check the **Leave Approver** field.
4. Change the approver if another eligible approver should approve this specific request.

This is useful for exceptions, temporary reporting changes, or cases where a leave request should go to a different approver than usual.

## 4. Use User Permissions For Department-Level Access

Setting the approver decides who can be selected as the approver. Access can be controlled separately using **User Permissions**.

For example, if a department manager should only see and approve leave applications from their own department, configure User Permissions for that approver based on:

- Company
- Department
- Employee

This keeps the approval process clean and prevents approvers from seeing leave applications outside their permitted scope.

## Which Method Should You Use?

Use employee-wise approver when each employee has a fixed manager or approver.

Use department-wise approver when the same approver or approver group handles leaves for an entire department.

Use the Leave Application approver field when the approver needs to be changed for a specific request.

Use User Permissions when you also need to restrict what leave records an approver can access.

## Important Notes

- The approver must be a valid Frappe user.
- The approver should have the **Leave Approver** role.
- Employee-wise approver is treated as the default when both employee and department approvers are configured.
- Department approvers are useful for shared approval responsibility.
- User Permissions control access; they do not replace setting the approver.

## Related Topics

- [Setting Employee-wise Leave Approver](https://docs.frappe.io/hr/setting-employee-wise-leave-approver)
- [Department-wise Leave Approval in ERPNext](https://docs.frappe.io/hr/department-wise-leave-approval-in-erpnext)
- [Leave Application](https://docs.frappe.io/hr/leave-application)
- [Employee](https://docs.frappe.io/hr/employee)
- [Department](https://docs.frappe.io/hr/department)
- [HR Settings](https://docs.frappe.io/hr/hr-settings)