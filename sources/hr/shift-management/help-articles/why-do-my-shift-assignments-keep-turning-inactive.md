---
title: "Why do my Shift Assignments keep turning Inactive?"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/shift-management/help-articles/why-do-my-shift-assignments-keep-turning-inactive"
updated: "2026-10-13"
---

A Shift Assignment changes to **Inactive** by itself when its **End Date** has passed. If you set it back to **Active** and it flips again, the **End Date** is still in the past, or another active assignment overlaps it.

## What you see

- A Shift Assignment that was **Active** now shows **Inactive** in the list, and you did not cancel it.
- You change **Status** to **Active**, and the next day it is **Inactive** again.
- You get this error when you try to reactivate it:

```
Employee Arjun Reddy already has an active Shift General Shift: HR-SHA-2026-00012 that overlaps within this period.

```

- The employee's check-ins no longer get a shift, so they are marked **Off-shift**, and auto attendance skips them.

## Why this happens

A Shift Assignment tells the system which shift an employee works from the **Start Date** to the **End Date**. **Status** shows if the assignment is in use. Only **Active** assignments are used to find the employee's shift.

A scheduled job runs once a day. It finds every submitted Shift Assignment that is **Active** and has an **End Date** before yesterday, and sets **Status** to **Inactive**. A Shift Assignment with a blank **End Date** is never changed by this job.

When you set **Status** back to **Active** on an old assignment, the **End Date** is still in the past. The job finds it again on its next run and sets it to **Inactive**.

Overlap is the second cause. The system does not allow two **Active** assignments for the same employee on the same dates if the shift timings overlap. So the system stops you from setting **Status** to **Active** when a newer assignment already covers the same dates. By default, it also stops two assignments on the same date, even when the timings do not overlap. Allow this in **HR Settings** with **Allow Multiple Shift Assignments for Same Date**.

Assignments can also have an **End Date** you did not type:

- When a **Shift Request** is approved, the assignment ends on the request's **To Date**.
- A **Shift Schedule Assignment** creates assignments for the days of the schedule. If you do not give an end date, it creates them for the next 90 days.

For example, Vikram Desai at Bluepeak Technologies assigns General Shift to Sneha Iyer from 1 July 2026 to 30 September 2026. On 2 October, the job sets this assignment to **Inactive**. Sneha's check-ins on 5 October have no shift. If Vikram only sets **Status** to **Active**, the job reverts it the next day.

## How to fix it

1. Go to **Shift Assignment** and open the **Inactive** assignment.
2. Look at **End Date**. If it is in the past, this is the cause.
3. Change **End Date** to a future date. To make the assignment open-ended, clear the **End Date**.
4. Set **Status** to **Active**.
5. Click **Update**.
6. If you see the error **Overlapping Shifts**, open the assignment named in the error. Either change its **End Date** to the day before this assignment starts, or set its **Status** to **Inactive**. Then repeat steps 3 to 5.

If you only need a new shift from today, create a new Shift Assignment instead of changing an old one. This keeps the shift history for past attendance.

## How to prevent it

- Leave **End Date** blank for employees who work the same shift all the time.
- Before a long assignment ends, extend its **End Date** or create the next one.
- For rotating shifts, set an end date on the **Shift Schedule Assignment** that covers the whole period, so assignments do not stop after 90 days.
- To see assignments that will end soon, open the **Shift Assignment** list and filter **End Date** for the next 30 days.