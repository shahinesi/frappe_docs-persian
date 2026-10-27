---
title: "Make Bank Entry from Payroll Entry"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/payroll-articles/make-bank-entry-from-payroll-entry"
updated: "2026-07-02"
---

After payroll is processed, companies usually need to record the actual salary payment made from the bank account. In Frappe HR, this can be done from the Payroll Entry by creating a Bank Entry.

A Bank Entry records the movement of money from the company's bank account to settle the payroll liability created during payroll processing.

## When to use this

Use Make Bank Entry when:

- Payroll Entry has been created for a payroll period.
- Salary Slips have been created and submitted.
- Payroll accounting entries have been posted.
- The company is ready to record payment of salaries through a bank account.

## Before you begin

Make sure the following setup is complete:

- Employees have valid salary structures and salary slips.
- Payroll Entry has been processed for the correct payroll period.
- Salary Slips are submitted.
- Payroll accounting has been posted.
- The company has a bank account configured in ERPNext.
- The payable account and bank account used for payroll are correct.

## How it works

When payroll is processed, ERPNext/Frappe HR records the salary expense and the amount payable to employees. The Bank Entry is then used to record the payment of that payable amount from the bank.

Simple flow:

```
Create Payroll Entry
        |
        v
Create Salary Slips
        |
        v
Submit Salary Slips
        |
        v
Post Payroll Accounting Entry
        |
        v
Make Bank Entry
        |
        v
Submit Bank Entry
        |
        v
Salary Payable is settled
```

## Steps to make a Bank Entry

1. Open the submitted Payroll Entry.
2. Check that the Salary Slips are created and submitted.
3. Check that the payroll accounting entry has been created.
4. Click Make Bank Entry from the Payroll Entry actions.
5. Review the generated Bank Entry.
6. Confirm the bank account, payable account, posting date, and amount.
7. Save and submit the Bank Entry.

Once submitted, the Bank Entry records the salary payment and reduces the outstanding payroll payable balance.

## What the Bank Entry represents

The Bank Entry usually records two sides of the transaction:

- Debit: Payroll payable or salary payable account
- Credit: Bank account from which salaries are paid

This means the liability created during payroll processing is reduced, and the bank balance is reduced by the salary payment amount.

## Things to check before submitting

Before submitting the Bank Entry, verify:

- The posting date matches the salary payment date.
- The bank account is correct.
- The payable account is correct.
- The amount matches the salary amount to be paid.
- The company and cost center details are correct, if applicable.

## Common mistakes

### Salary Slips are not submitted

The Bank Entry should be made only after salary slips are submitted and payroll accounting is posted.

### Wrong bank account selected

If the wrong bank account is selected, the accounting impact will be incorrect. Always review the bank account before submission.

### Payroll accounting not posted

If the salary payable entry has not been created, the Bank Entry may not correctly settle the payroll liability.

## Summary

Make Bank Entry from Payroll Entry is used to record salary payment after payroll has been processed. It connects payroll processing with accounting by settling the salary payable amount against the company's bank account.