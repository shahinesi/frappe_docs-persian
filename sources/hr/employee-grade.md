---
title: "Employee Grade"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/employee-grade"
updated: "2026-10-07"
---

**An Employee Grade is a grouping of employees with similar positions or values in order to assign compensation rates and salary structures.**

Frappe HR allows you to configure Employee Grades, helping you to easily categorize employees based on seniority or any other criteria.

Employee Grade also helps you fetch Employee records in bulk based on their grades while processing payroll, allocating leaves, etc.

To access Employee Grade, go to:

> **Home &gt; Human Resources &gt; Employee &gt; Employee Grade**
>
>

## **1. Prerequisites**

Before creating an Employee Grade, it is advisable to create the following:

- [Salary Structure](https://docs.frappe.io/hr/salary-structure)

## **2. How to create an Employee Grade**

1. Go to Employee Grade list, click on New.
2. Enter the Name of the Employee Grade.
3. Select the Default [Salary Structure](https://docs.frappe.io/hr/salary-structure) for that Grade.
4. Enter the Default Base Pay for that Grade.
5. Save.

![](/files/image0924eb.webp)

Shown below are the different Employee Grades created.

![](/files/image24f475.webp)

You can also access [Employee](https://docs.frappe.io/hr/employee), [Employee Onboarding Template,](https://docs.frappe.io/hr/employee-onboarding) and [Employee Separation Template](https://docs.frappe.io/hr/employee-separation).

## 3. Features

### 3.1 Default Salary Structure

The Default Salary Structure is the Salary Structure assigned to Employees of this Grade. Only submitted and active Salary Structures can be selected.

When assigning a Salary Structure through [**Salary Structure Assignment**](https://docs.frappe.io/hr/salary-structure-assignment), the Salary Structure is automatically set based on the Default Salary Structure configured for the Employee's Grade. You can change the Salary Structure for an individual Employee before submitting the assignment.

### 3.2 Default Base Pay

The Default Base Pay is the base salary amount for Employees of this Grade in the selected Currency.

When assigning a Salary Structure through [**Salary Structure Assignment**](https://docs.frappe.io/hr/salary-structure-assignment), the Base amount for each Employee is automatically set based on the Default Base Pay of their Grade. You can change the Base amount for an individual Employee before submitting the assignment.

This allows you to define a standard compensation amount at the Grade level instead of setting it separately for each Employee.

## **4. Related Topics**

1. [**Employee**](https://docs.frappe.io/hr/employee)
2. [**Salary Structure**](https://docs.frappe.io/hr/salary-structure)
3. [**Salary Structure Assignment**](https://docs.frappe.io/hr/salary-structure-assignment)