---
title: "Employee Provident Fund (EPF)"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/india-payroll/employee-provident-fund"
updated: "2026-07-09"
---

The Employees' Provident Fund is a mandatory retirement-savings scheme governed by the **Employees' Provident Funds & Miscellaneous Provisions Act, 1952**, administered by the EPFO. Every covered employee and their employer contribute a share of the employee's monthly wages towards the fund.

India Payroll computes the employee's EPF and Voluntary Provident Fund (VPF) deductions automatically on each salary slip, tracks the employer's statutory split (EPF, EPS, EDLI and admin charges), and produces the **Employee Provident Fund Register** along with a ready-to-upload **ECR** (Electronic Challan-cum-Return) file for the EPFO portal.

## **How contributions are split**

Both the employee and the employer contribute **12% of PF wages**. The employer's 12% is not a single deposit — statute splits it across four accounts:


| Contribution                               | Account | Rate                                        | Paid by  | Appears on slip? |
| ------------------------------------------ | ------- | ------------------------------------------- | -------- | ---------------- |
| Provident Fund (EPF)                       | A/c 1   | 12% of PF wages                             | Employee | Yes — deduction  |
| Voluntary Provident Fund (VPF)             | A/c 1   | Optional, over and above 12%                | Employee | Yes — deduction  |
| Employer Provident Fund                    | A/c 1   | 12% of PF wages **minus** the EPS diversion | Employer | No — part of CTC |
| Employer Pension Scheme (EPS)              | A/c 10  | 8.33% of capped PF wages                    | Employer | No — part of CTC |
| Employees' Deposit Linked Insurance (EDLI) | A/c 21  | 0.5% of capped PF wages                     | Employer | No — part of CTC |
| EPF Admin Charges                          | A/c 2   | 0.5% of PF wages                            | Employer | No — part of CTC |


Only the **employee-side** components (Provident Fund and VPF) are posted to the salary slip as deductions and reduce net pay. The **employer-side** contributions are configured as *Employer Contribution* components on the Salary Structure, rolled into CTC by the Salary Structure Assignment, and reconstructed for statutory reporting — they never touch gross or net pay.

## **Setup**

### **1. Enable EPF in Payroll Settings**

1. Go to **Payroll Settings → India Payroll** tab.
2. Expand the **Employee Provident Fund** section.
3. Tick **Enable EPF Deduction**.
4. Optionally enter your **EPF Establishment Code** — the EPFO code for your establishment, used when filing the ECR.
5. **Save**.

When EPF is disabled, any Provident Fund and VPF rows previously injected onto salary slips are removed on the next save.

### **2. Set the employee's UAN**

On each **Employee** record, open the **India Payroll** section and fill in:

- **UAN** — the 12-digit Universal Account Number issued by EPFO.
- **Name as per UAN** — the employee's name as registered with EPFO. This can differ from the HR name and is the name written to the ECR file.

The UAN is mandatory for the ECR export. Generating the file will fail with a list of the affected employees if any in-scope employee is missing a UAN.

### **3. Opt the employee into EPF on the Salary Structure Assignment**

EPF configuration lives on the **Salary Structure Assignment (SSA)** so it can be set per employee and revised mid-year. Open the assignment, switch to the **India Payroll** tab, and use the **Employee Provident Fund** section:

- **EPF Applicable** — opts this employee into EPF for this assignment. The system defers entirely to this flag rather than applying a wage-based eligibility test, so you stay in control of who is covered.
- **Contribute on Actual PF Wage** — see [Wage ceiling](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/epf/employee-provident-fund.md#wage-ceiling-and-the-actual-wage-option) below.
- **VPF Mode / VPF Percentage / VPF Amount** — see [Voluntary Provident Fund](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/epf/employee-provident-fund.md#voluntary-provident-fund-vpf) below.

If **EPF Applicable** is unticked, no EPF or VPF rows are added and the employee is excluded from the EPF Register.

## **How the deduction is calculated**

When a salary slip is saved, India Payroll applies EPF as follows:

1. **PF wage** is the sum of every earning component on the slip. Because slip amounts are already prorated for Loss of Pay (LOP) and payment days, the PF wage automatically reflects non-contributing period (NCP) days.
2. The **EPF base** is derived from the PF wage using the wage-ceiling rule below.
3. **Employee EPF** = 12% of the EPF base, rounded to the nearest rupee.
4. **VPF** (if elected) is added as a second deduction.

All amounts are rounded to the nearest whole rupee using EPFO's half-up convention (for example, 8.33% × ₹15,000 = ₹1,249.50 becomes ₹1,250).

### **Wage ceiling and the actual-wage option**

The statutory PF wage ceiling is **₹15,000 per month**. By default, contributions are computed on the PF wage **capped at ₹15,000**.

Tick **Contribute on Actual PF Wage** on the assignment to compute the employee and employer EPF shares on the *actual* PF wage when it exceeds ₹15,000. Note that **EPS and EDLI always remain capped at ₹15,000 by law**, regardless of this setting.


| Scenario                               | EPF base       | EPS / EDLI base |
| -------------------------------------- | -------------- | --------------- |
| PF wage ≤ ₹15,000                      | Actual PF wage | Actual PF wage  |
| PF wage > ₹15,000, actual-wage **off** | ₹15,000        | ₹15,000         |
| PF wage > ₹15,000, actual-wage **on**  | Actual PF wage | ₹15,000         |


### **Pension Scheme (EPS) eligibility**

India Payroll assumes all employees are EPF members who joined on or after **1 September 2014**. Under that rule, a member whose PF wage exceeds ₹15,000 receives **no EPS diversion** — the employer's entire 12% goes to the Provident Fund account (A/c 1) instead of being split with the pension account (A/c 10).

## **Voluntary Provident Fund (VPF)**

VPF is an optional employee contribution *over and above* the mandatory 12%. The employer does not match it. Configure it per assignment with **VPF Mode**:

- **Amount** (default) — a fixed monthly rupee amount (**VPF Amount**). It is prorated by payment days ÷ total working days so LOP months don't over-deduct.
- **Percentage** — a percentage (**VPF Percentage**) of the EPF base, which already follows the capping / actual-wage rule and slip proration.

When VPF Mode is left unset on older assignments, it falls back to **Amount** mode with an amount of 0, so no VPF is ever deducted for employees who never opted in.

## **Reporting**

### **Employee Provident Fund Register**

Go to **Employee Provident Fund Register** (query report). Only employees with **EPF Applicable** ticked on their effective assignment appear.

**Filters**

- **Company** (required)
- **Year** (required)
- **Month** — a single month
- **Contribution Period** — `Apr-Sep` or `Oct-Mar`; overrides the Month filter when set

**Columns** include the UAN and name-as-per-UAN, gross wages, PF / EPS / EDLI wage bases, the employee EPF and VPF contributions, the employer EPS and EPF shares, and non-contributing period (NCP) days.

### **ECR file export**

From the report toolbar, click **Download ECR Text File** to generate the EPFO Electronic Challan-cum-Return payload for the selected period. The file is plain text — one line per member, no header — with eleven `#~#`-separated fields per member in EPFO's prescribed order:

> UAN, Member Name, Gross Wages, EPF Wages, EPS Wages, EDLI Wages, Employee EPF, EPS Contribution, Employer EPF–EPS difference, NCP Days, Refund of Advances

All amounts are reported as whole rupees. If any in-scope employee is missing a UAN, the export stops and lists those employees so you can update their master records and retry — an incomplete ECR file would be rejected by the portal anyway.

## **Salary components installed**

Installing India Payroll creates these EPF-scheme salary components automatically:

- **Provident Fund** (PF) — employee deduction, 12% of PF wages.
- **Voluntary Provident Fund** (VPF) — optional employee deduction over 12%.
- **Employer Provident Fund** (EREPF) — employer contribution, part of CTC.
- **Employer Pension Scheme** (EREPS) — employer contribution, part of CTC.
- **Employees Deposit Linked Insurance** (EDLI) — employer contribution, part of CTC.
- **EPF Admin Charges** (EPFADM) — employer contribution, part of CTC.

If any employee-side component is missing when a slip is saved, India Payroll alerts you to reinstall the app or create the components manually.