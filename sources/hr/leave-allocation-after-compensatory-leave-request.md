---
title: "Leave allocation after Compensatory Leave Request"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/leave-allocation-after-compensatory-leave-request"
updated: "2026-02-04"
---

**Use case:** If an employee works on a Holiday and wants to apply for a compensatory off, the following process is important in Frappe HR:

1) Create an **Employee** with the mandatory details and assign a **Holiday List** and a **Leave Policy** to it.

2) Attendance should be marked for the Employee, it is mandatory for the employee to be marked as present on the Holiday [this Holiday should be in the Holiday List.]

![](https://docs.erpnext.com/files/9NHbSR1.png)  


3) Create a **Leave allocation** for the **Employee**.

4) In the **Leave Type list**, for all the types that allow Compensatory off, tick the checkbox.

![](https://docs.erpnext.com/files/zO860kS.png)  


5) Now, create a **Compensatory Leave Request** for the employee.

![](https://docs.erpnext.com/files/QuIeV7V.png)  


6) Go back and check the **Leave allocation** for the leave added for the Employee.

![](https://docs.erpnext.com/files/PstYtuX.png)

