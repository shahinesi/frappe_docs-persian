---
title: "TDS Filing"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/india-payroll/tds-filing"
updated: "2026-08-31"
---

India Payroll files the quarterly salary TDS return for you. It reads the tax actually deducted on submitted Salary Slips, reconciles it against the challans you deposited, and then takes the return through validation, the TXT file, the FVU and e-filing, without you touching the RPU or the FVU utility.

The end result is a filed return with a provisional receipt number, the FVU and Form 27A stored on the record, and, for Q4, Form 16 certificates for every employee in the return.

## **Contents**

- [Setup](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#setup)
- [Recording challans](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#recording-challans)
- [Creating a return](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#creating-a-return)
- [Filing the return](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#filing-the-return)
- [Fetching the CSI file](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#fetching-the-csi-file)
- [Skipping validation](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#skipping-validation)
- [Submitting the return](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#submitting-the-return)
- [Revised returns](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#revised-returns)
- [Form 16](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#form-16)
- [Filing statuses](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#filing-statuses)
- [Troubleshooting](https://file+.vscode-resource.vscode-cdn.net/Users/deepesh/frappe/my-bench/apps/india_payroll/docs/tds-filing.md#troubleshooting)

## **Setup**

### **1. Sandbox credentials**

Go to **Payroll Settings &gt; TDS Filing**.

Sites hosted on Frappe Cloud have credentials provisioned for them, so there is nothing to enter: the section shows a note saying the credentials are managed for you. Every other site enters its own pair from a sandbox.co.in account:


| Field                        | Notes                                                                                           |
| :---------------------------- | :----------------------------------------------------------------------------------------------- |
| Enable TDS Return Filing     | Only appears once a credential pair is available.                                               |
| Use Sandbox Test Environment | Checked by default. Test keys only work against the test environment. Uncheck for real filings. |
| Sandbox API Key / Secret     | From your sandbox.co.in account.                                                                |
| Sandbox API Version          | Defaults to `1.0.0`.                                                                            |


### **2. Deductor details on Company**

**Company &gt; TDS Deductor Details**:


| Field                                       | Notes                                                                                             |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| TAN                                         | 10 characters, format `ABCD12345E`. Validated on save.                                            |
| Deductor Type                               | Company, Firm, Central Government and so on.                                                      |
| Responsible Person Name / PAN / Designation | The person responsible for deduction, as per income tax records. PAN format is validated on save. |


The company PAN is the existing **Tax ID** field on Company.

### **3. Salary component**

At least one enabled Deduction component must be marked **Is Income Tax Component** (or **Variable Based on Taxable Salary**). That is what the return reads to find the tax deducted on each salary slip.

### **4. Employee PAN**

Each employee in the return needs a valid PAN on their Employee record. Where a PAN genuinely does not exist, the placeholders `PANNOTAVBL`, `PANAPPLIED` and `PANINVALID` are accepted.

### **Permissions**

**TDS Return**, **TDS Challan** and **Form 16** are available to the **Payroll Manager** and **System Manager** roles.

## **Recording challans**

Create a **TDS Challan** for every deposit you made for the quarter. This is what the return reconciles against, and every deductee row has to point at one.


| Field                            | Notes                                                             |
| :-------------------------------- | :----------------------------------------------------------------- |
| Company, Financial Year, Quarter | Used to find the challans for a return.                           |
| Deposit Date                     | The date the challan was paid.                                    |
| BSR Code                         | Exactly 7 digits.                                                 |
| Challan Serial No                | As printed on the challan.                                        |
| Total Deposited                  | Must equal the sum of the breakup below, if a breakup is entered. |
| Amount Breakup                   | TDS, surcharge, education cess, interest, fee under 234E, others. |
| Deduction Month                  | The salary month this challan pays for.                           |


**Deduction Month** defaults from the deposit date: TDS for a month is deposited by the 7th of the next one, so a challan dated 7 May is taken to pay April's deduction. Set it explicitly when that is not true.

Challans must be **submitted** to be picked up by a return.

A challan may hold more tax than a single return draws from it. The balance stays available for another return, and only over-drawing is treated as an error.

## **Creating a return**

Create a **TDS Return**, pick the Company, Financial Year and Quarter, and save. TAN and deductor PAN are pulled from the Company. Only one return per TAN, financial year, quarter, form and return type is allowed.

### **Deductor and responsible person**

The return carries the full payer profile that NSDL asks for: address, contact, GSTIN, branch, plus the same for the responsible person, and the government deductor fields (state code, ministry, AIN) where they apply.

To avoid retyping, link an **Address** or **Contact** in the corresponding link field and the individual fields are filled from it. The link fields only offer records linked to the return's company. Anything the linked record cannot supply (post office, PAN, deductor type) is left for you to fill in.

### **Fetching deductees**

Click **Fetch from Payroll**. For the quarter, this finds every submitted Salary Slip of the company that carries an income tax deduction greater than zero, and creates one deductee row per employee and month with:

- PAN and deductee status
- Month, date of payment and date of deduction
- Amount paid (gross pay) and tax deducted
- The challan whose deduction month matches the row. Where a month has more than one challan the earliest wins; where the quarter has exactly one challan, every row maps to it.

The table is fully editable afterwards, so overrides, surcharge, cess, lower deduction certificates and the new regime flag can be set by hand.

Re-fetching clears and rebuilds the table, so any manual edits are lost.

The totals section shows the total amount paid, total tax deducted from the rows, and total tax deposited from the submitted challans for the period.

## **Filing the return**

All four steps live under the **File Return** button group, and they run in order:

```
1. Validate  ->  2. Generate TXT  ->  3. Generate FVU  ->  4. E-File

```

Each step runs in the background. Press the button, the status changes to show the step is running, and the return updates itself when the step finishes. A step cannot be started while the previous one is still running.

### **1. Validate**

Screens the return for the issues that typically trigger a departmental notice.

Before anything is sent, the return checks itself and reports any of these against your own data:

- **Deductee PANs.** Every row must carry a valid PAN or an accepted placeholder. Failures are listed by row number and employee name.
- **Deductor profile.** Any deductor or responsible person detail still missing is named.
- **Challan reconciliation.** Every deduction row must be linked to a challan, and what a challan has already given to earlier returns plus what this return claims cannot exceed the tax actually deposited on it. The message spells out the deposited amount, its breakup, what is already utilised and by how much the claim overshoots.
- **Deposit coverage.** Total tax deducted must not exceed total tax deposited through challans for the quarter.

When the step finishes, the report is attached to the return and its contents appear as **Validation issues** on the dashboard. Reported issues do not block the next step: the check is advisory, and it is for you to judge whether an issue matters.

### **2. Generate TXT**

Produces the NSDL text file, attached as **Form 24Q TXT**. Regenerating it clears the FVU and Form 27A, since they were derived from the previous TXT. The CSI file is left alone.

### **3. Generate FVU**

Needs the TXT and the CSI file. Attaches the FVU as **FVU File**, and the Form 27A PDF separately so it can be previewed and printed.

### **4. E-File**

Files the return. On success the return records the **Provisional Receipt Number**, the **Token Number** and the **Filing Date**, and attaches the receipt.

## **Fetching the CSI file**

The CSI (Challan Status Inquiry) file comes from OLTAS and is required alongside the TXT to produce the FVU. It is an OTP-verified download against the deductor's TRACES-registered mobile number.

Click **Fetch CSI** and:

1. Confirm the TRACES mobile number and the reason for the download (TRACES requires at least 20 characters). An OTP is sent to that number.
2. Enter the OTP. The CSI file is downloaded and attached to the return.

You can also skip this entirely and attach a CSI downloaded from the TIN OLTAS "Challan Status Inquiry" page directly to the **CSI File** field.

## **Skipping validation**

**Skip Validation** moves a return straight to TXT generation when the validation check cannot complete.

It skips that check only. The PAN and reconciliation checks still run. A reason is mandatory, and it is recorded on the return along with your username and shown in the validation issues panel.

## **Submitting the return**

A TDS Return can only be submitted once its filing status is **Filed** or **Accepted**. Submitting marks the return as final.

## **Revised returns**

Set **Return Type** to `Revised` and fill **Previous Receipt Number** with the provisional receipt number of the return being corrected. The TXT is then generated against that receipt, and the FVU is generated as a correction rather than a regular filing.

## **Form 16**

Once a **Q4** return is Filed or Accepted, a **Create Form 16** button appears. It creates one Form 16 record per employee in the return's annual annexure, carrying gross salary, total taxable income and total tax deducted. Employees who already have a Form 16 for that financial year are skipped.

On each Form 16:

- **Generate Part B** builds the salary and tax computation.
- **Request Part A (TRACES)** requests the TDS certificate from TRACES. It is only allowed once the linked Q4 return is filed.

Both run in the background. The certificates are attached as **Part A PDF** and **Part B PDF** when they are ready, and the status moves from `Requested` to `Available` (or `Failed`).

## **Filing statuses**


| Status             | Meaning                                                                               |
| :------------------ | :------------------------------------------------------------------------------------- |
| Draft              | Created, nothing filed yet.                                                           |
| Validating         | Validation is running.                                                                |
| Validated          | The validation check completed.                                                       |
| Validation Skipped | Validation was deliberately skipped, with a recorded reason.                          |
| Generating TXT     | The TXT is being generated.                                                           |
| TXT Generated      | TXT file attached.                                                                    |
| Generating FVU     | The FVU is being generated.                                                           |
| FVU Generated      | FVU and Form 27A attached.                                                            |
| Filing             | The return is being filed.                                                            |
| Filed              | Receipt number recorded. Ready to submit.                                             |
| Failed             | The last step failed. The filing log carries the reason.                              |
| Accepted           | Recognised as final. Set it yourself if you track departmental acceptance separately. |


The status also appears as a coloured indicator on the form: green for Filed and Accepted, red for Failed, orange for everything else.

## **Troubleshooting**

**The Filing Log is the first place to look.** Every step appends a row with the action, its status, the time and the message it came back with. It is the record of everything the return sent and received.

**"The background scheduler is disabled."** Filing steps cannot run without it. Ask your administrator to enable the scheduler, then try again.

**"'Generating TXT' is still in progress."** The previous step has not finished yet. Give it a few minutes.

**A step failed with an upload message.** Run the same step again; it starts a fresh attempt.

**A step is stuck.** Any step that has not finished in three hours is marked failed, so the return never sits waiting indefinitely. Run it again.

**Everything is kept on the return.** Alongside the TXT, FVU, Form 27A and CSI, the exact data submitted is attached for audit, together with any report that came back. Reports are copied onto the return rather than linked, so they stay available after the filing portal expires them.