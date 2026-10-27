---
title: "How to Sanction Leave Encashment Amount in Salary Slip"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-management/help-articles/how-to-sanction-leave-encashment-amount-in-salary-slip"
updated: "2026-09-29"
---

Leave Encashment is used to pay an employee for unused leaves. In Frappe HR, this amount can be paid through a **Salary Slip** or through a separate **Payment Entry**.

This article explains how to sanction the leave encashment amount through Salary Slip.

## When To Use This

Use this method when the encashment amount should be paid along with the employee's regular payroll.

For example, if an employee has unused earned leaves at the end of the year, you can create a Leave Encashment record and include the encashment amount in the employee's Salary Slip for that payroll period.

## Prerequisites

Before creating Leave Encashment, make sure the following are configured:

- The employee has an active **Salary Structure Assignment**.
- The **Leave Type** is marked as encashable.
- The Leave Type has an **Earning Component** set for encashment.
- The employee has a submitted **Leave Allocation** for that Leave Type.
- The employee has unused leave balance available for encashment.
- The per-day encashment amount is set in the Salary Structure or Salary Structure Assignment.

## Step 1: Enable Encashment In Leave Type

Open the relevant **Leave Type** and enable **Allow Encashment**.

You can also configure limits such as:

- Non-encashable leaves
- Maximum encashable leaves
- Earning Component

The Earning Component is important because it decides which salary component will be used when the encashment amount is added to payroll.

## Step 2: Set Leave Encashment Amount Per Day

Open the employee's **Salary Structure** or **Salary Structure Assignment** and set the leave encashment amount per day.

Frappe HR uses this amount to calculate:

```text
Encashment Amount = Encashment Days x Leave Encashment Amount Per Day
```

If the per-day amount is not set, the encashment amount may be calculated as zero.

## Step 3: Create Leave Encashment

Go to:

```text
Home > Human Resources > Leaves > Leave Encashment
```

Create a new Leave Encashment record and select:

- Leave Period
- Employee
- Leave Type
- Encashment Date

The system fetches the employee's leave balance and calculates the encashable days and encashment amount.

## Step 4: Pay Through Salary Slip

To pay the amount through Salary Slip, keep **Pay Via Payment Entry** unchecked.

When the Leave Encashment is submitted, Frappe HR creates an **Additional Salary** record for the employee. This Additional Salary record is linked to the Leave Encashment and uses the earning component selected in the Leave Type.

## Step 5: Process Payroll

Create the **Payroll Entry** or **Salary Slip** for the payroll period that includes the encashment date.

When the Salary Slip is created, the Additional Salary from the Leave Encashment is included in the employee's earnings.

Review the Salary Slip and check that:

- The encashment earning component is visible.
- The amount is correct.
- The total earnings include the encashment amount.

Submit the Salary Slip to sanction and pay the amount through payroll.

## Example

An employee has 5 earned leaves available for encashment.

The leave encashment amount per day is set to 1,000.

```text
5 x 1,000 = 5,000
```

When the Leave Encashment is submitted, Frappe HR creates an Additional Salary for 5,000. The amount is then added to the Salary Slip for the payroll period that includes the encashment date.

## Common Checks

If the encashment amount is not appearing in the Salary Slip, check the following:

- The Leave Encashment is submitted.
- **Pay Via Payment Entry** is not checked.
- The encashment date falls within the Salary Slip or Payroll Entry period.
- The Additional Salary record was created.
- The Additional Salary payroll date is within the payroll period.
- The Leave Type has an earning component.
- The employee has an active Salary Structure Assignment.
- The leave encashment amount per day is configured.

## Salary Slip Or Payment Entry?

Use **Salary Slip** when the encashment should be part of payroll and paid along with salary.

Use **Payment Entry** when the encashment should be paid separately and accounted for directly through accounts.

## Related Topics

- [Leave Encashment](https://docs.frappe.io/hr/leave-encashment)
- [Leave Type](https://docs.frappe.io/hr/leave-type)
- [Salary Structure](https://docs.frappe.io/hr/salary-structure)
- [Salary Structure Assignment](https://docs.frappe.io/hr/salary-structure-assignment)
- [Salary Slip](https://docs.frappe.io/hr/salary-slip)
- [Payroll Entry](https://docs.frappe.io/hr/payroll-entry)
- [Additional Salary](https://docs.frappe.io/hr/additional-salary)