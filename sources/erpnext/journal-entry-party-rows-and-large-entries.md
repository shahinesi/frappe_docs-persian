---
title: "Journal Entry: party rows, copied rows and large entries"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/journal-entry-party-rows-and-large-entries"
updated: "2026-10-26"
---

A Journal Entry posts debits and credits to any accounts. When a row is for a customer, supplier or employee, it also needs a **Party Type** and **Party**, so that the amount shows in that party's ledger and in Accounts Receivable or Payable. This page answers common questions about these rows.

## When do I need a Party Type and Party?

A row needs a party when its account has **Account Type** **Receivable** or **Payable** (for example Debtors or Creditors). Without it, you get:

```
Row 1: Party Type and Party is required for Receivable / Payable account Debtors - BBS
```

| Party Type | Account Type of the account |
| --- | --- |
| Customer | Receivable |
| Supplier, Employee, Shareholder | Payable |

- Select a customer only on a **Receivable** account, and a supplier or employee only on a **Payable** account. A customer on a payable account does not show correctly in Accounts Receivable.
- Other accounts (bank, expense, income) take no party.
- You cannot add a new Party Type. To track amounts by another kind of record (for example a contractor or a vehicle), use an [accounting dimension](/erpnext/accounting-dimensions) instead.

## Why does a new row copy the previous row?

When you add a row, ERPNext copies the **Account**, **Party Type** and **Party** from a row that has a party, and fills the difference between debit and credit as the amount. This is on purpose: it saves time when you post one amount against many parties, for example many supplier bills in one entry.

If the new row is for another account, change the **Account** and clear the **Party**. To start with an empty row, add the row before you fill a party in the first row.

## A Journal Entry with many rows is slow or times out

- An entry with more than 100 rows is submitted and cancelled in the background. You see a message that it is queued; check its status in **Submission Queue**. The entry shows as submitted when the job completes.
- Very large entries (thousands of rows) take long because each row makes General Ledger entries. Split them, for example one entry per month or per branch, or use **Data Import** to import several smaller Journal Entries.
- Some slowness with many rows was fixed in version 16 releases. Update the site to the latest release.

## Related

- [Journal Entry](/erpnext/journal-entry)
- [How do I correct a submitted accounting entry?](/erpnext/correct-a-submitted-accounting-entry)
- [Accounting Dimensions](/erpnext/accounting-dimensions)
