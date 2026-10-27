---
title: "Employment Type"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/employment-type"
updated: "2026-10-07"
---

**You can employ people under a number of categories each having their own wage and leave entitlements. This is called an Employment Type.**

Frappe HR allows you to select an Employment Type from a pre-defined list or even create a new Employment Type based on your requirements.

To access the Employment Type, go to:

> **Home &gt; Human Resources &gt; Employee &gt; Employment Type**
>
>

## **1. How to create an Employment Type**

1. Go to the Employment Type list, click on New.
2. Enter the Name of the Employment Type.
3. Save.

![](/files/image108cfc.webp)

## 2. Where the Employment Type is used

The Employment Type can be linked to the [Employee](https://docs.frappe.io/hr/employee) master, and is then used in the following places:

- **Salary Structure:** Employment Type can be used as a variable in the Condition and Formula fields of a [Salary Component](https://docs.frappe.io/hr/salary-component) using the field name `employment_type`. This allows a Salary Component to be applied only to a specific category of Employees. For example, the condition `employment_type=="Intern"` applies the component only to Employees with the Employment Type set to Intern.
- **Recruitment:** Employment Type can be set in a [Job Opening](https://docs.frappe.io/hr/job-opening) and Job Opening Template. It is displayed to candidates on the Jobs portal, where it can also be used as a filter. When an applicant is hired, the Employment Type is fetched from the [Job Applicant](https://docs.frappe.io/hr/job-applicant) to the [Employee](https://docs.frappe.io/hr/employee).
- **Tools:** Employment Type is available as a filter in the [Employee Attendance Tool](https://docs.frappe.io/hr/employee-attendance-tool), allowing attendance to be marked for a specific category of Employees.

## **3. Related Topics**

1. [Employee](https://docs.frappe.io/hr/employee)
2. [Employment Type](https://docs.frappe.io/hr/employment-type)
3. [Branch](https://docs.frappe.io/hr/branch)
4. [Department](https://docs.frappe.io/hr/department)
5. [Designation](https://docs.frappe.io/hr/designation)
6. [Employee Grade](https://docs.frappe.io/hr/employee-grade)