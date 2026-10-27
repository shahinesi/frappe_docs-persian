---
title: "Half Day Leave and Attendance"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-management/help-articles/half-day-leave-and-attendance"
updated: "2026-09-29"
---

Frappe HR records a Half Day Leave as a single Attendance record for the date rather than two separate records. One half is marked based on the Leave Application, while the other half is determined by Auto Attendance or an Attendance Request.

The Attendance record tracks the two halves of the day using two fields:

- **Status**: set to Half Day.
- **Status for Other Half**: Set to either Present or Absent.

The Monthly Attendance Sheet uses both fields to determine the day's contribution to **Total Present**, **Total Leaves**, and **Total Absent**.

## **How Half Day Leave Creates Attendance**

When a Leave Application includes a half-day date and is submitted, Frappe HR creates or updates the Attendance record for that date as follows:

```xml
Status                    = Half Day
Status for Other Half     = Present
```

The other half is initially marked as **Present**, and the Attendance record is marked as **Provisional** `modify_half_day_status = 1`. This indicates that the employee is assumed to be present for the other half until a Check-in or subsequent attendance update determines the actual status.

The **Provisional** flag allows other attendance processes to update the record. Once the other half is settled, the flag is cleared, preventing further automatic changes to the record.

## **Auto Attendance and the Other Half**

Auto Attendance determines the status of the other half of the day when the Shift Type processes the Employee's Check-ins

### **When the Other Half Is Available**

If Check-ins are available for the shift, Auto Attendance updates the existing provisional Half Day Attendance record instead of creating a second record. It updates the record with the working hours, In Time, Out Time, Late Entry, and Early Exit details from the Check-ins.

The other half remains **Present**, and the Provisional flag is cleared `modify_half_day_status = 0`. 

The date contributes **0.5 Present** and **0.5 Leave**.

```xml
Status                    = Half Day
Status for Other Half     = Present
Monthly Attendance Sheet  = HD/P
```

### **When the Other Half Is Missing**

If no Check-ins are available for the shift, Auto Attendance performs a separate step after processing the Check-ins. It identifies provisional Half Day Attendance records for the Shift Type and marks the other half as **Absent,** and the Provisional flag is cleared `modify_half_day_status = 0`.  The date contributes **0.5 Leave** and **0.5 Absent**.

```xml
Status                    = Half Day
Status for Other Half     = Absent
Monthly Attendance Sheet  = HD/A
```

A comment is added to the Attendance record indicating that the Employee was marked absent for the other half due to missing Check-ins. 

## Attendance Request for the Other Half of a Half Day Leave

An Attendance Request can be used to correct the other half after Auto Attendance has marked it as absent, or to record the other half as **Present** for a valid attendance scenario.

Create an Attendance Request for the same date as the Leave Application and enable **Half Day**.

On submission, Frappe HR updates the existing Attendance record. Since the record is already marked as **Half Day**, only the other half is changed from **Absent** to **Present**, while the leave half remains unchanged.

```xml
Status                    = Half Day
Status for Other Half     = Present
Monthly Attendance Sheet  = HD/P
```

The Attendance Request is linked to the Attendance record, and a comment records the change for audit purposes. The Leave Application remains unchanged, and the half-day leave continues to be deducted from the Leave Balance.

## Order of Operations

The order in which these processes occur is important. The Leave Application establishes the initial Half Day Attendance record in a provisional state, which allows Auto Attendance to resolve the other half.

1. **Leave Application submitted**: An Attendance record is created or updated as **Half Day**, with the other half set to **Present** and the record marked as **Provisional**.
2. **Auto Attendance runs**: Auto Attendance determines the status of the other half based on the available Check-ins. It marks the other half as **Present** when Check-ins are available or **Absent** when they are not, then clears the Provisional flag.
3. **Attendance Request submitted, if required**: An Attendance Request can correct the other half after Auto Attendance has processed the record. It updates the existing Attendance record directly rather than creating a new one.

## Half-Day Leave Applied After Auto Attendance

When Attendance was marked before the Leave Application was submitted, the Leave Application updates the existing Attendance record instead of creating a new one. If Auto Attendance had already marked the other half as **Absent** due to missing Check-ins, submitting the Leave Application changes it back to **Present**. The date contributes **0.5 Present** and **0.5 Leave**.

```xml
Status                    = Half Day
Status for Other Half     = Present
Monthly Attendance Sheet  = HD/P
```