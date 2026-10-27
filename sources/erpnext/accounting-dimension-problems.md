---
title: "Accounting dimension missing, mandatory or different in the ledger"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/accounting-dimension-problems"
updated: "2026-10-26"
---

An accounting dimension (Cost Center, Project, or your own such as Branch or Business Unit) tags each General Ledger entry, so you can see reports by that dimension. This page explains where the ledger takes the value from, and how to fix a dimension that is missing or wrong.

## The ledger shows another value than the document header

On invoices, orders and receipts, the General Ledger takes the dimension from **each item row**, not from the header. The header value is a default for new rows.

- If you change the header after adding items, check the item rows too: open a row and look in its **Accounting Dimensions** section.
- A new row copies the dimension from the first row.
- On a document made from another (Sales Invoice from Sales Order, Purchase Invoice from Purchase Receipt), the rows keep the values of the source document's rows. Correct them on the source, or on each row.

After submit, you can change the dimension on the rows of an invoice or Journal Entry, and ERPNext reposts the ledger. See [How do I correct a submitted accounting entry?](/erpnext/correct-a-submitted-accounting-entry)

## "Accounting Dimension … is required"

```
Accounting Dimension Branch is required for 'Profit and Loss' account Sales - BBS.
Accounting Dimension Branch is required for 'Balance Sheet' account Debtors - BBS.
```

The dimension is set as **Mandatory For Profit and Loss Account** or **Mandatory For Balance Sheet** for the company, in the dimension's **Dimension Defaults** table.

1. Fill the dimension on each row of the document, and save again.
2. If the field is not on the form at all, it was deleted (in **Customize Form** or **Custom Field**). Open the **Accounting Dimension** and click **Save**. ERPNext adds the field back to every document where it is missing, in the background; reload the form after a minute.
3. Entries made by the system (exchange gain or loss, round off) take the **Default Dimension** of the company. Set it in **Dimension Defaults** so these entries do not fail.

## Set a default value per company

In the **Accounting Dimension**, add a row in **Dimension Defaults** with the **Company** and the **Default Dimension**. New documents of that company, and their rows, then start with this value.

## Only some values should be allowed for an account

Use **Accounting Dimension Filter**: select the dimension, the accounts, and the values that are allowed (or not allowed) with them. For example, only the Bengaluru branch may post to the Bengaluru rent account.

## Filter reports by a dimension

Each enabled dimension is added as a filter to the General Ledger, Trial Balance, Profit and Loss Statement, Balance Sheet, and Accounts Receivable and Payable. Click the filter area (or **⋯** for more filters) and select the value.

A Balance Sheet filtered by a dimension rarely balances, because many balance sheet entries do not carry the dimension. See [Why do my P&L, Balance Sheet or Trial Balance show unexpected numbers?](/erpnext/financial-statements-show-unexpected-numbers)

## Related

- [Accounting Dimensions](/erpnext/accounting-dimensions)
- [General Ledger](/erpnext/general-ledger)
- [Cost Center](/erpnext/cost-center)
