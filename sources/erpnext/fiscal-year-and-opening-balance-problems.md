---
title: "Fiscal year errors and opening balances: what to check"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/fiscal-year-and-opening-balance-problems"
updated: "2026-10-27"
---

Every accounting entry must fall in a **Fiscal Year** of its company. When you start a new year, or go live with ERPNext in the middle of a year, most errors come from a missing or wrong fiscal year, or from opening balances that do not add up. This page explains each case.

## "… is not in any active Fiscal Year"

```
Date 01-04-2027 is not in any active Fiscal Year for Bombay Byte Systems Pvt Ltd
Posting Date 01-04-2027 is not in any active Fiscal Year
```

ERPNext found no fiscal year for that date and company. You can see this when you save an invoice, open a report, or even save a customer or supplier (when a field depends on the date).

1. Go to **Fiscal Year** and check that a year covers the date, and that it is not **Disabled**.
2. Open the year and check its **Companies** table. If the table lists companies, the year applies only to them. Add your company, or leave the table empty for all companies.
3. If no year covers the date, click **+ Add Fiscal Year** and enter the **Year Start Date**. The **Year End Date** is set one year later.

![Fiscal Year with Disabled, Is Short/Long Year and the Companies table](/files/fiscal-year-companies.png)

### New years are created automatically

Every day, ERPNext checks for a fiscal year that ends in 3 days, and creates the next one, with the same companies. If the next year was not created, check that the scheduler is running, or create it by hand. A short or long year (**Is Short/Long Year**) is not continued automatically.

### "Year start date or end date is overlapping with …"

Two fiscal years cannot cover the same dates for the same company. If two companies have different year ends (for example April–March and January–December), make one fiscal year for each, and add the right company to each year's **Companies** table.

## Can I change the dates of a fiscal year?

No. **Year Start Date** and **Year End Date** can be set only once. To use other dates:

- If the year has no transactions, delete it and create it again.
- If it has transactions, **Disable** it and create a new year for the dates you need, for the company that needs them.

For a first or last year that is not 12 months, turn on **Is Short/Long Year** before you save.

## "Accounting Period cannot be created for a future date"

An **Accounting Period** closes dates for posting, so its **End Date** must be today or earlier. Create it after the period ends. To stop users posting into the future, use the posting date permissions or a workflow instead.

## Opening balances when you start mid-year

Enter all balances as on the day before your go-live date, with **Is Opening** set to **Yes**:

| Balance | Use |
| --- | --- |
| Customer and supplier invoices not yet paid | **Opening Invoice Creation Tool** |
| Bank, cash, loans, capital, fixed asset accounts, other accounts | **Journal Entry** with **Is Opening** Yes |
| Stock | **Stock Reconciliation** with **Purpose** Opening Stock |
| Fixed asset records (for depreciation) | **Asset** with **Asset Type** Existing Asset; it makes no ledger entry, so its value is in the opening Journal Entry |

The invoices, the Journal Entry and the opening stock post their other side to the **Temporary Opening** account. When all balances are entered, the Temporary Opening account is zero.

### The Temporary Opening account still has a balance

The balance is the difference between what you entered on each side.

1. Open the **General Ledger** for the Temporary Opening account, with **Show Opening Entries** on.
2. Compare the total of each kind (invoices, journal, stock) with your old trial balance.
3. Correct the entry that differs. If you cancelled and amended an opening entry, check that its posting date is still the opening date.

See [Balance in Temporary Opening account](/erpnext/balance-in-temporary-account).

### The Opening Invoice Creation Tool created no invoices

- With 50 or more rows, the invoices are created in the background. Wait, and reload the tool.
- "You had … errors while creating opening invoices": open **Error Log** for the reason of each failed row, for example a missing party or default cost center.
- The invoices exist but you do not see them in the General Ledger: turn on **Show Opening Entries**. Opening invoices are in the Accounts Receivable and Payable reports as usual.

## Deferred revenue report: date not in a fiscal year

The **Deferred Revenue and Expense** report and the deferred entries need a fiscal year for every month of the service period. If an invoice's **Service End Date** is in a year not yet created, create that fiscal year.

## Related

- [Fiscal Year](/erpnext/fiscal-year)
- [Fiscal Year error](/erpnext/fiscal-year-error)
- [Opening Invoice Creation Tool](/erpnext/opening-invoice-creation-tool)
- [Opening balance](/erpnext/opening-balance)
