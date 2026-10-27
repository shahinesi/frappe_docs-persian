---
title: "Attendance Guide: Create and Verify Records | Frappe HR"
description: "Create and verify Frappe HR Attendance records, mark unrecorded days in bulk, understand statuses, and check how attendance can affect payroll."
space: "Frappe HR"
url: "https://docs.frappe.io/hr/attendance"
updated: "2026-10-23"
---

**Attendance records indicate whether an employee was present, absent, on leave, on a half day, or working from home on a particular date.** Payroll uses attendance records to calculate payable days, so missing or incorrect records can affect an employee's salary. 

> Home &gt; Human Resources &gt; Attendance

## 1. Prerequisites

Before you mark attendance, create:

- [**Employee**](https://docs.frappe.io/hr/employee): Active, with a **Date of Joining**. You cannot mark attendance before the joining date or for an Inactive employee.
- [**Shift Type**](https://docs.frappe.io/hr/shift-type) (optional): needed only if the employee works in shifts or you use automatic attendance.
- [**Holiday List**](https://docs.frappe.io/hr/holiday-list) (optional): needed if you want to skip holidays when marking attendance in bulk.

## 2. How to Create an Attendance

1. Go to the Attendance list and click **New**.
2. Select the **Employee**. **Employee Name**, **Company,** and **Department** are fetched.
3. Set the **Attendance Date**. It defaults to today.
4. Select the **Status**: **Present**, **Absent**, **On Leave**, **Half Day,** or **Work From Home**.
5. If the status is **On Leave** or **Half Day**, select the **Leave Type**.
6. If the status is **Half Day**, set **Status for Other Half** to **Present** or **Absent**.
7. Optionally select a **Shift**. The system fills it from the employee's active Shift Assignment, or from the **Default Shift** on the Employee, when you choose the employee and date.
8. Optionally check **Late Entry** or **Early Exit**.
9. **Save** and **Submit**.

![](/files/Attendance-Create-Manually.mp4)

### 2.1 Automatically from Employee Checkins

If employees check in through the HRMS app or a biometric device, a Shift Type can create Attendance from the check-in and check-out logs.

1. Open the **Shift Type** and check **Enable Auto Attendance**.
2. Set **Process Attendance After** to the date from which logs should be processed.
3. Employees check in and out. The system creates and submits an Attendance for each employee and date, and links it to the Employee Checkin records. The linked records appear in the **Employee Checkin** connection on the Attendance.

The system sets **Working Hours**, **In Time**, **Out Time**, **Late Entry** and **Early Exit** from the logs. Working hours below the Shift Type thresholds give **Absent** or **Half Day**. The system also marks **Absent** for working days in the shift that have no logs. See the Auto Attendance page for the shift settings.

### 2.2 From an Attendance Request or Leave Application

- When an **Attendance Request** is submitted, the system creates an Attendance for each day, or updates the status of an existing one. The **Attendance Request** field links back to it.
- When a **Leave Application** is approved and submitted, the system sets the Attendance for those days to **On Leave** (or **Half Day**). The **Leave Application** field links back to it.

### 2.3 In Bulk for One Employee

Use this to fill in a month of missing attendance.

1. Go to the Attendance list and click **Mark Attendance**.
2. Select **For Employee**. The dialog shows **Start** and **End** dates. **Start** defaults to the first day of the current month (the previous month on the 1st). **End** defaults to today.
3. Select a **Status**: **Present**, **Absent**, **Half Day** or **Work From Home**.
4. Optionally select a **Shift**.
5. Optionally check **Exclude Holidays**.
6. The **Unmarked Attendance for days** list shows only dates that have no Attendance yet. All are ticked. Untick the days you want to skip.
7. Click **Mark Attendance** and confirm.
  ![](/files/Attendance-Bulk-Marking-for-One-Employee.mp4)



If you select more than 10 days, the system marks them in a background job. A message links to the **RQ Job** so you can follow it. Days that fail validation, such as a duplicate, are skipped without stopping the rest.

:::note
The list leaves out days before the employee's **Date of Joining** and after their **Relieving Date**.
:::

For several employees on one day, use the [Employee Attendance Tool](https://docs.frappe.io/hr/employee-attendance-tool). For a spreadsheet import, use [Upload Attendance](https://docs.frappe.io/hr/upload-attendance).

## 3. Features

### 3.1 Status


| Status             | Meaning                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| **Present**        | The employee worked the full day.                                                                       |
| **Absent**         | The employee did not work and has no approved leave.                                                    |
| **On Leave**       | The employee has an approved Leave Application for the date.                                            |
| **Half Day**       | The employee worked or was on leave for half the day. **Status for Other Half** records the other half. |
| **Work From Home** | The employee worked remotely.                                                                           |


Colours in the list view: green for **Present** and **Work From Home**, red for **Absent** and **On Leave**, orange for **Half Day**.

### 3.2 Leave Type and Leave Application

**Leave Type** is mandatory when the status is **On Leave** or **Half Day**. On save, the system looks for an approved, submitted Leave Application covering the date and then:

- sets the **Leave Type** and **Leave Application** from it;
- changes the status to **Half Day** if the date is the application's half-day date, otherwise to **On Leave**.

If the status is **On Leave** or **Half Day** and no leave exists, the system sets **Status for Other Half** to **Absent** and shows a warning. If the status is any other value, the system clears **Leave Type** and **Leave Application**.

### 3.3 Shift and Timings

The **Shift** links to a Shift Type. **In Time** and **Out Time** appear once a shift is set. They are read-only and filled from the Employee Checkins. **Working Hours** is also filled automatically.

An employee can have more than one Attendance on a date only for different, non-overlapping shifts. The system blocks a second Attendance for the same date and shift, or for a shift whose timings overlap an existing one.

### 3.4 Overtime

The **Overtime** section appears only when the Attendance was created by Auto Attendance from a shift that has **Allow Overtime** enabled and the status is **Present**. It shows the **Overtime Type**, **Standard Working Hours** and **Actual Overtime Duration**. All are read-only. Overtime Slips use them to calculate overtime pay.

## 4. Validations

- Attendance date cannot be earlier than the employee's **Date of Joining**.
- You cannot mark attendance for an Inactive employee.
- An employee cannot have two Attendance records for the same date unless the shifts differ and do not overlap. Cancelled records do not count.
- **Employee**, **Status**, **Attendance Date,** and **Company** are mandatory.