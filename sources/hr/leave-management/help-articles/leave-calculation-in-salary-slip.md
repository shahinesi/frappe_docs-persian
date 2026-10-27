---
title: "Leave Calculation in Salary Slip"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-management/help-articles/leave-calculation-in-salary-slip"
updated: "2026-07-05"
---

Frappe HR calculates leave impact in the Salary Slip by reducing the employee's payable days for the payroll period. This is mainly controlled by Leave Without Pay, Partially Paid Leave, attendance records, holidays, and the employee's joining or relieving date.

The calculation decides two important values in the Salary Slip:

- **Total Working Days**
- **Payment Days**

The salary components that depend on payment days are calculated based on the final Payment Days.

## How Leave Affects Salary Slip

When a Salary Slip is created, Frappe HR checks the payroll period and calculates how many days the employee should be paid for.

In simple terms:

```text
Payment Days = Eligible Working Days - Leave Without Pay - Absent Days
```

The exact calculation can change depending on payroll settings, holiday settings, attendance records, and leave type settings.

## Leave Without Pay

If an employee has an approved Leave Application for a Leave Type marked as **Leave Without Pay**, those days reduce the Payment Days in the Salary Slip.

For example, if the payroll period has 30 working days and the employee has 2 days of Leave Without Pay:

```text
Payment Days = 30 - 2 = 28
```

Salary components that depend on payment days are then calculated for 28 days instead of 30.

## Partially Paid Leave

Frappe HR also supports **Partially Paid Leave**. In this case, the leave does not reduce the full day's salary. It reduces salary based on the fraction configured in the Leave Type.

For example, if a leave type pays 50% of daily salary for one day, the Salary Slip treats it as a partial reduction instead of a full Leave Without Pay day.

Use Partially Paid Leave when employees should receive part of their salary during a leave period.

## Calculation Based On Leave Application Or Attendance

Payroll can be calculated based on either leave applications or attendance records, depending on the payroll configuration.

### Based On Leave Application

When payroll is based on leave applications, Frappe HR checks approved leave records during the Salary Slip period.

It considers:

- Leave Without Pay
- Partially Paid Leave
- Half-day leave
- Whether the Leave Type includes holidays

### Based On Attendance

When payroll is based on attendance, Frappe HR checks submitted Attendance records for the Salary Slip period.

It considers:

- Absent days
- Half-day attendance
- Attendance marked on holidays, depending on settings
- Leave Type used in attendance records
- Unmarked attendance, depending on payroll settings

If unmarked attendance is configured to be treated as absent, those unmarked days can also reduce Payment Days.

## Half-Day Leave And Half-Day Attendance

Half-day leave or half-day attendance reduces salary based on the half-day fraction configured in payroll settings.

For example, if the daily wages fraction for half day is 0.5, then one half-day Leave Without Pay reduces Payment Days by 0.5.

## Holidays In Salary Slip Calculation

Holiday handling depends on payroll settings and the employee's holiday list.

If holidays are included in total working days, holidays are part of the working day count.

If holidays are not included, holidays are removed from Total Working Days before Payment Days are calculated.

Some Leave Types can also be configured to include holidays. If holidays are included for that Leave Type, leave falling on holidays may be considered in the leave calculation.

## Joining Date And Relieving Date

Salary Slip calculation also considers the employee's joining and relieving dates.

If an employee joins in the middle of the payroll period, Payment Days are calculated from the joining date.

If an employee leaves in the middle of the payroll period, Payment Days are calculated only up to the relieving date.

This prevents salary from being calculated for dates before joining or after relieving.

## Example

Suppose the payroll period is from 1 April to 30 April.

- Total days in period: 30
- Holidays excluded from working days: 4
- Total Working Days: 26
- Leave Without Pay: 2
- Half-day Leave Without Pay: 0.5

The Payment Days will be:

```text
26 - 2 - 0.5 = 23.5
```

Salary components that depend on payment days are calculated for 23.5 payment days.

## Why The Salary Amount May Look Different

If the salary amount in the Salary Slip is not what you expected, check:

- Whether payroll is based on Attendance or Leave Application.
- Whether the Leave Application is submitted and approved.
- Whether the Leave Type is marked as Leave Without Pay or Partially Paid Leave.
- Whether holidays are included in Total Working Days.
- Whether the Leave Type includes holidays.
- Whether attendance is marked for the full period.
- Whether unmarked attendance is treated as absent.
- Whether the employee joined or left during the payroll period.
- Whether the salary component depends on payment days.

## Components That Depend On Payment Days

Only salary components configured to depend on payment days are reduced based on leave calculation.

If a component does not depend on payment days, it may remain the same even when Payment Days are reduced.

Check the Salary Component and Salary Structure configuration if a particular earning or deduction is not changing as expected.

## Related Topics

- [Salary Slip](https://docs.frappe.io/hr/salary-slip)
- [Payroll Settings](https://docs.frappe.io/hr/payroll-settings)
- [Leave Application](https://docs.frappe.io/hr/leave-application)
- [Leave Type](https://docs.frappe.io/hr/leave-type)
- [Attendance](https://docs.frappe.io/hr/attendance)
- [Holiday List](https://docs.frappe.io/hr/holiday-list)
- [Salary Component](https://docs.frappe.io/hr/salary-component)
- [Salary Structure](https://docs.frappe.io/hr/salary-structure)