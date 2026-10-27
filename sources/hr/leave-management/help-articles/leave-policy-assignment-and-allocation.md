---
title: "Leave Policy Assignment and Allocation"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-management/help-articles/leave-policy-assignment-and-allocation"
updated: "2026-09-29"
---

**Leave Policy Assignment** determines the period for which a Leave Policy applies to an Employee. The assignment window can be based on the **Leave Period**, the Employee's **Joining Date**, or manually defined using effective dates.

The **Assignment Based On** field on the Leave Policy Assignment form controls how **Effective From** and **Effective To** are populated. You can select *Leave Period*, *Joining Date*, or leave it blank to enter dates manually.


| **Leave Period**                                                                                                                                                           | **Joining Date**                                                                                                                                                           | **Blank**                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| When **Leave Period** is selected, both **Effective From** and **Effective To** are taken from the selected Leave Period; manual changes to these dates are not permitted. | Sets **Effective From** to the employee’s Date of Joining. **Effective To** automatically defaults to 12 months from the joining date unless a date is manually specified. | Allows full manual entry for both dates. |


### **Leave Allocation Rule**

Once the date window is fixed, Leave Allocation differs based on the leave type.

- **Casual Leave** is a non-earned leave type and is granted upfront when the Leave Policy Assignment is submitted. The entitlement is prorated based on the number of days in the assignment window and rounded to the nearest whole day.
- **Privilege Leave** is an earned leave type with a monthly earning frequency. Its annual entitlement is divided into 12 monthly portions. For example, 12 days per year results in **1 day per month**. These monthly entitlements are added to the **Earned Leave Schedule** and released month by month by the scheduler.



Now, let us consider three use cases for Leave Allocation based on the Leave Period and the Employee Joining Date.



**Leave Period:** 01-Jan-2026 to 31-Dec-2026

**Date of Joining:** 01-Apr-2026

**Privilege Leave:** 12 days/year, Earned Monthly

**Casual Leave:** 24 days/year

### **Based on Leave Period**

01-Jan-2026 to 31-Dec-2026

The Leave Period covers the full calendar year, and the Employee Joining Date falls within it. As a result, both leave types are prorated using different methods.

**Casual Leave (Prorated):** Since the employment duration for this cycle is 275 days (01-Apr through 31-Dec), the employee's prorated casual leave balance is **18 days**. The employee can access these days as soon as you submit your request.

`Calculation:24 × 275 / 365 = 18.08 → 18`

**Privilege Leave (Monthly Accrual):** The employee will earn **9 days** of privilege leave over 9 months from April to December, accruing at a rate of 1.0 day per month. While the annual leave cycle begins on 01-Jan, accrual officially starts on the employee's joining date.

`Calculation: 9 months(Apr-Dec) × 1.0 = 9`

### **Based on Joining Date**

01-Apr-2026 to 31-Mar-2027

The system automatically defaulted the end date to 12 months from the joining date. As a result, both leave types are awarded their full annual entitlement.

**Casual Leave (Non-Prorated):** The full **24 days** are granted upon submission without proration, as the joining date aligns with or predates the start of the assignment window.

`Calculation: Joining date = Window start → No Proration`

**Privilege Leave (Monthly Accrual):** Entitlement of **12 days** distributed evenly across a 12-month period (Apr-2026 to Mar-2027). The system generates 12 complete accrual rows in the schedule for each month.

`Calculation: 12 months(Apr26-Mar27) × 1.0 = 12`

### **Based on Joining Date, with Effective To overridden**

01-Apr-2026 to 31-Dec-2026

In this configuration, the policy uses the employee's *Joining Date* as the start point, but the **Effective To** date is manually shortened to match the end of the official Leave Period. The goal is to align with the company year.

**Casual Leave (Non-Prorated):** The system grants the complete **24 days** instead of a prorated 18 days. Because the employee's joining date matches the start of the assignment window, the proration guard evaluates the employee as active from day one, skipping proration entirely, even though the window itself spans only nine months.

`Calculation: Joining date = Window start → No Proration`

**Privilege Leave (Month Accrual):** Allocates **9 days** total via 9 monthly schedule rows (1.0 day/month) from April to December. Reducing the window size proportionally decreases the accrued earned leave.

`Calculation: 9 months(Apr-Dec) × 1.0 = 9`

### Summary


|                        | Leave Period           | Joining Date           | Joining Date + To Date |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| Window                 | 01-Jan-26 to 31-Dec-26 | 01-Apr-26 to 31-Mar-27 | 01-Apr-26 to 31-Dec-26 |
| Casual Leave           | 18 · Prorated          | 24 · Full              | 24 · Full              |
| Privilege Leave        | 9 · Apr–Dec            | 12 · Apr–Mar           | 9 · Apr–Dec            |
| Accrual pattern        | 1 / month              | 1 / month              | 1 / month              |
| Aligns to Leave Period | **Yes**                | **No**                 | **Yes**                |