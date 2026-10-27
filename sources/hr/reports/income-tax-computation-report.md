---
title: "Income Tax Computation"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/reports/income-tax-computation-report"
updated: "2026-10-06"
---

The Income Tax Computation report shows, for each employee, the projected annual taxable income for a payroll period, the exemptions applied, the tax payable as per the employee's Income Tax Slab, the tax already deducted through salary slips, and the balance tax still to be deducted.

It is useful for reviewing annual tax liability mid-year, before finalising tax deductions in the last months of a payroll period.

To access the Income Tax Computation report, go to:

> Home &gt; Tax &amp; Benefits &gt; Reports &gt; Income Tax Computation

## 1. Prerequisites

Before viewing the report, the following must exist:

- Payroll Period for the company
- Income Tax Slab (submitted and not disabled)
- Salary Structure
- Salary Structure Assignment (submitted) with both a Salary Structure and an Income Tax Slab set

Optional records that change the result:

- Submitted Salary Slips in the payroll period
- Employee Tax Exemption Proof Submission or Employee Tax Exemption Declaration for the payroll period
- Employee Other Income for the payroll period

Employees without a submitted Salary Structure Assignment that has an Income Tax Slab are left out. If no employee qualifies, the report shows the message "No employees found with selected filters and active salary structure".

## 2. How to view the report

1. Go to Income Tax Computation.
2. Select the Company and the Payroll Period.
3. Optionally narrow the list by Employee, Department or Employee Status.
4. Check Consider Tax Exemption Declaration to also count declared amounts for employees who have not submitted proofs.



![](/files/imageaffd7e.webp)
*Income Tax Computation Report*

## 3. Filters


| Filter                             | Description                                                                                                                                                               |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Company                            | Mandatory. Defaults to the user's default company.                                                                                                                        |
| Payroll Period                     | Mandatory. The period for which tax is computed.                                                                                                                          |
| Employee                           | Show a single employee. When set, Department and Employee Status are ignored.                                                                                             |
| Department                         | Show employees of one department. When set, Employee Status is ignored.                                                                                                   |
| Employee Status                    | Active, Inactive, Suspended or Left. Defaults to Active.                                                                                                                  |
| Consider Tax Exemption Declaration | When checked, uses submitted Employee Tax Exemption Declarations for employees who have no submitted proof for the period. Proofs always take priority over declarations. |


## 4. Report columns


| Column                                                            | Description                                                                                                                                                        |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Employee, Employee Name, Department, Designation, Date of Joining | Employee details.                                                                                                                                                  |
| Income Tax Slab                                                   | The slab from the employee's latest Salary Structure Assignment.                                                                                                   |
| Gross Earnings                                                    | Gross pay for the full payroll period. See How values are calculated.                                                                                              |
| Other Income                                                      | Total of submitted Employee Other Income records for the payroll period.                                                                                           |
| One column per non-taxable earning or tax-exempt deduction        | For example Professional Tax. Shown for salary components that are earnings with Is Tax Applicable unchecked, or deductions with Exempted from Income Tax checked. |
| One column per Employee Tax Exemption Category                    | For example 80C, 80D. Shown for every active category.                                                                                                             |
| HRA                                                               | Eligible HRA exemption from the proof submission, or from the declaration when that option is checked.                                                             |
| Standard Tax Exemption                                            | The standard exemption amount set on the employee's Income Tax Slab.                                                                                               |
| Total Exemption                                                   | Sum of all exemption columns above.                                                                                                                                |
| Total Taxable Amount                                              | Annual taxable income after exemptions.                                                                                                                            |
| Income Tax (Slab Based)                                           | Tax as per the slab rates.                                                                                                                                         |
| Other Taxes and Charges                                           | Taxes and charges defined in the slab, such as cess or surcharge.                                                                                                  |
| Total Applicable Tax                                              | Income Tax (Slab Based) plus Other Taxes and Charges.                                                                                                              |
| Total Tax Deducted                                                | Tax already deducted in submitted salary slips of the period, plus any opening Tax Deducted Till Date. Shown only when an income tax deduction component exists.   |
| Payable Tax                                                       | Total Applicable Tax minus Total Tax Deducted. Never below zero.                                                                                                   |


## 5. How values are calculated

### Gross Earnings

Gross Earnings is the sum of:

- the opening Taxable Earnings Till Date on the Salary Structure Assignment, counted only when the assignment starts within the payroll period,
- the base gross pay of submitted salary slips in the payroll period, and
- projected gross pay for the remaining months.

For the remaining months, the report previews a salary slip for each pay cycle after the last submitted slip up to the end of the payroll period (or the relieving date). These previews are not saved. If the last submitted slip already ends on the payroll period end date, nothing is projected.

### Exemptions

Exemption columns are filled only if the employee's Income Tax Slab has Allow Tax Exemption checked.

- Category amounts come from submitted Employee Tax Exemption Proof Submissions for the payroll period. Each category is capped at the Max Amount set on the Employee Tax Exemption Category.
- When Consider Tax Exemption Declaration is checked, declarations are used only for employees who have no submitted proof.
- Non-taxable earnings and tax-exempt deductions are totalled from submitted salary slips plus the projected slips.

The Standard Tax Exemption is added for every employee, based on their Income Tax Slab.

### Tax

Total Taxable Amount starts from the annual taxable amount computed on the latest salary slip of the period (the submitted slip if it closes the period, otherwise the first projected slip). The exemptions already applied on that slip are added back, and the report's own Total Exemption is deducted instead, so the result reflects the proof or declaration choice made in the filters.

Tax is then computed on Total Taxable Amount using the employee's Income Tax Slab, including any slab conditions. If the active income tax component has Round to the Nearest Integer checked, the tax amounts are rounded.

## 6. Related

- [Payroll Period](/hr/payroll-period)
- [Income Tax Slab](/hr/income-tax-slab)
- [Salary Structure Assignment](/hr/salary-structure-assignment)
- [Employee Tax Exemption Declaration](/hr/employee-tax-exemption-declaration)
- [Employee Tax Exemption Proof Submission](/hr/employee-tax-exemption-proof-submission)
- [Income Tax Deductions](/hr/reports/income-tax-deductions)