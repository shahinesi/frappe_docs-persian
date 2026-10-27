---
title: "Why does the Gross Profit report differ from my P&L or Sales Register?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/gross-profit-report-differences"
updated: "2026-10-26"
---

The **Gross Profit** report shows, for each sales invoice line, the selling amount, the buying amount (the cost of the goods sold) and the gross profit. It works from the **invoice items**, while the Profit and Loss Statement works from the **General Ledger**. So the two reports measure the same thing in different ways, and they rarely match exactly.

## Where the buying amount comes from

| Invoice line | Buying amount |
| --- | --- |
| Stock item, invoice with **Update Stock**, or made from a Delivery Note | The stock value of the outgoing entry (Stock Ledger) |
| Stock item, no stock entry linked | The item's average valuation rate on the invoice date |
| Drop-shipped item (Delivered By Supplier) | The supplier's Purchase Invoice for the linked Purchase Order |
| Non-stock item, with a Project or Cost Center | The last purchase rate of the item |

## Why it differs from the Profit and Loss Statement

- **Other income and expenses.** The P&L includes every income and expense account: freight, discounts posted by Journal Entry, write-offs, stock adjustments. The Gross Profit report includes only sales invoice lines.
- **Dates.** The P&L books the cost of goods sold on the Delivery Note's date; the Gross Profit report lists it on the invoice's date.
- **Repost pending.** After a backdated stock entry, ERPNext recalculates later stock values in the background (**Repost Item Valuation**). Until those are **Completed**, the buying amounts are old. Wait for the reposts, or check **Repost Item Valuation** for **Failed** entries.

## The buying amount or valuation rate is zero

- The item had no stock value on the invoice date (stock received later, or received with zero rate). Check the **Stock Ledger** for the item and warehouse.
- A non-stock item without a Project or Cost Center has no buying amount.
- A Repost Item Valuation for the item is still **Queued**.

## Gross profit is negative

The selling rate is lower than the valuation rate. Open the **Stock Ledger** for the item to see the valuation rate on that date. A negative value is often correct (a discount, or a sale below cost), or it shows a purchase entered at the wrong rate.

## Returns and credit notes

- A **return against an invoice** (Return Against filled) is netted into the original invoice: its quantity and amounts reduce the original line.
- A **stand-alone credit note** (no Return Against) is listed separately, with negative values, when **Include Returned Invoices (Stand-alone)** is on (the default). Turn it off to leave them out.

If you filter by the return's own number in **Sales Invoice**, the report shows the return's values.

## Columns, grouping and totals

- **Group By** changes the rows: Invoice, Item Code, Item Group, Brand, Warehouse, Customer, Customer Group, Territory, Sales Person, Project, Cost Center, Monthly, Payment Term.
- To add a column from the invoice, the invoice item or a linked document, click **⋯ → Add Column**, then **⋯ → Save** to keep it as your own report.
- The total row is calculated by the report. When you sort a column, the total row moves with the sort. Sort the data in an export instead.
- A column you need that is not in the report (for example a custom field): make a **Report Builder** or a custom report.

## Related

- [Profit and Loss Statement](/erpnext/profit-and-loss-report)
- [Why do my P&L, Balance Sheet or Trial Balance show unexpected numbers?](/erpnext/financial-statements-show-unexpected-numbers)
- [Stock reposting](/erpnext/repost-item-valuation)
