---
title: "Employee Leave Balance Summary"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/reports/employee-leave-balance-summary"
updated: "2026-10-06"
---

The Employee Leave Balance Summary report shows the leave balance of each employee as on a date, with one column per leave type. It gives a quick view of how many leave days each employee has left across all leave types.

For opening balance, leaves allocated, taken, and expired per leave type, use the Employee Leave Balance report instead.

To access the report, go to:

> Home &gt; Leaves &gt; Reports &gt; Leave Balance Summary

## 1. Prerequisites

Before viewing the report, the following must exist:

- Leave Type
- Employee
- Submitted Leave Allocation covering the selected date

## 2. How to view the report

1. Go to Employee Leave Balance Summary.
2. Select the Date and Company.
3. Optionally filter by Employee, Department or Employee Status.



![](/files/imagee3dffc.webp)

## 3. Filters


| Filter          | Description                                                                                |
| :--------------- | :------------------------------------------------------------------------------------------ |
| Date            | Mandatory. Defaults to today. The balance is shown for the allocation active on this date. |
| Company         | Mandatory. Defaults to the user's default company.                                         |
| Employee        | Show one employee of the selected company.                                                 |
| Department      | Show employees of one department.                                                          |
| Employee Status | Active, Inactive, Suspended or Left. Defaults to Active.                                   |


## 4. Report columns


| Column                    | Description                                                                                              |
| :------------------------- | :-------------------------------------------------------------------------------------------------------- |
| Employee                  | Employee ID.                                                                                             |
| Employee Name             | Name of the employee.                                                                                    |
| Department                | The employee's department.                                                                               |
| One column per Leave Type | Leave balance for that leave type. A column is shown for every leave type in the system, sorted by name. |


## 5. How the balance is calculated

For each leave type, the report finds the employee's leave allocation that is active on the selected date and shows the remaining balance of that allocation:

- It starts with the total allocated leaves, including carry-forwarded leaves and leave adjustments.
- It deducts leaves taken across the whole allocation period, not just up to the selected date. Approved leave applications dated after the selected date, but within the same allocation, are also deducted.
- It deducts leaves that have expired, including carry-forwarded leaves past their expiry.

If there is no allocation for a leave type on the selected date, the balance is 0.

## 6. Access

The report is available to users with the Employee, Leave Approver, HR User or HR Manager role. User permissions on Employee apply, so employees and leave approvers see only the employees they have access to.

## 7. Related

- [Leave Allocation](/hr/leave-allocation)
- [Leave Application](/hr/leave-application)
- [Leave Ledger Report](/hr/leave-ledger-report)