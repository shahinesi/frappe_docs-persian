---
title: "Accounts Receivable and Payable"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/accounts-receivable-and-payable"
updated: "2026-10-24"
---

Nova Electronics Trading has sold goods on credit to Northstar Retail and bought devices on credit from Apex Devices. The finance team needs to know how much customers still owe, what Nova must pay suppliers, which balances are overdue, and which invoices need attention first.



Accounts Receivable reports track outstanding customer invoices and credits. Accounts Payable reports track outstanding supplier invoices and debits. Both use the Payment Ledger to present invoice-level balances and ageing without requiring the reader to reconstruct every allocation from General Ledger rows.

## Accounts Receivable

Use Accounts Receivable to review customer exposure, follow up overdue invoices, investigate unapplied credits, and estimate incoming cash.

![Loaded Accounts Receivable report with Nova customer balances and ageing](https://novacompanies.m.frappe.cloud/files/docs-accounting-reports-20260814-accounts-receivable.png)

## Accounts Payable

Use Accounts Payable to plan supplier payments, protect cash flow, capture early-payment opportunities, and avoid overdue bills.

![Loaded Accounts Payable report with Nova supplier balances and ageing](https://novacompanies.m.frappe.cloud/files/docs-accounting-reports-20260814-accounts-payable.png)

## Run either report

1. Open Accounts Receivable or Accounts Payable.
2. Select the Company and reporting date.
3. Choose ageing based on Due Date or Posting Date according to the review.
4. Optionally filter by Party, Account, Territory, Supplier Group, Cost Center, Project, Finance Book, currency, or another available dimension.
5. Refresh the report and open significant invoice references.

## Understand ageing


| View               | Meaning                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| Current or not due | The invoice has an outstanding amount, but its due date has not passed.                        |
| Ageing buckets     | Outstanding amounts grouped by the configured number of days.                                  |
| Total outstanding  | Invoice amount remaining after allocated payments, credit notes, debit notes, and adjustments. |
| Payment-term view  | Outstanding split across the invoice's payment schedule rather than treated as one due amount. |


## From report to action


| Finding                                 | Next action                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Customer invoice is overdue             | Review communications, send a statement, create a [Dunning](/erpnext/dunning) record where appropriate, or record the payment. |
| Payment exists but invoice remains open | Review the [Payment Entry](/erpnext/payment-entry) reference or use [Payment Reconciliation](/erpnext/payment-reconciliation). |
| Supplier invoice is due                 | Create or review a Payment Entry, Payment Request, or Payment Order according to the approval process.                         |
| Balance is disputed                     | Open the invoice, credit or debit notes, and General Ledger before changing any transaction.                                   |


## Troubleshooting

### An invoice is missing

Confirm that it is submitted, has a non-zero outstanding amount, uses the selected receivable or payable account, and falls within the report filters.

### Ageing does not match expectations

Check whether ageing is based on Posting Date, Due Date, or Payment Terms. Also confirm the ageing ranges and report date.

### A payment has not reduced outstanding

The payment may be unallocated, allocated to another invoice, or posted to a different party account. Review the References table and Payment Ledger.

### The report does not match the General Ledger or Trial Balance

Accounts Receivable and Accounts Payable are built from the **Payment Ledger**, not from the General Ledger. Each invoice, payment and journal for a party makes a Payment Ledger Entry. The two usually agree. When they do not:

1. **Compare in the same currency.** For customers or suppliers in another currency, tick **In Party Currency** to compare with the party's account in its own currency. To compare in the company currency, tick **Revaluation Journals** so that Exchange Rate Revaluation entries are included.
2. **Use the same date.** The report shows outstanding **as on the Report Date**. Payments posted after that date are not counted unless you tick **Show Future Payments**.
3. **Check the accounts.** The report shows only receivable or payable accounts. Advances booked to a separate advance account (with **Book Advance Payments in Separate Party Account** on the Company) appear only after they are reconciled with invoices.
4. **Repair missing Payment Ledger Entries.** If a voucher is in the General Ledger but not in the report, its Payment Ledger Entries are missing or wrong. Open **Repost Payment Ledger**, select the **Company**, the **Voucher Type** and the vouchers (**Add Manually**), and submit. Wait until **Repost Status** is **Completed**.

![](/files/ar-report-filters.png)

### A party with zero balance shows outstanding

The report shows outstanding **per invoice**, not per party. If a payment or credit note was not allocated to the invoice, the invoice shows as outstanding and the payment shows as a negative amount, although the party's total is zero. Allocate them with **Payment Reconciliation**. Tiny amounts such as 0.001 come from the same cause.

### Credit notes and debit notes

- A credit note made against an invoice reduces that invoice's outstanding directly.
- With **Update Outstanding for Self** ticked on the credit note, the credit note keeps its own outstanding: both it and the invoice appear until you reconcile them in **Payment Reconciliation**. Its amount shows in **Paid Amount**.
- A debit note for a supplier works the same way in Accounts Payable.

### A cancelled or paid document still shows

- **A dimension filter** (Branch, Cost Center, Project): the invoice and its payment must have the same dimension value. If the payment or journal has no branch, filtering by branch shows the invoice as unpaid. Set the dimension on the payment.
- **The payment is dated after the Report Date**: see above.
- **A cancelled Payment Entry still appears**: its Payment Ledger Entries were not reversed. Update the site to the latest release, then use **Repost Payment Ledger** for the voucher. If it still appears, raise a support ticket with the voucher name.

### A filter or column is missing

The report has filters for **Cost Center**, **Project**, **Party**, **Customer Group**, **Territory**, **Sales Person** and others. To show other columns, use **Add Column** from the report menu, then save the report under a new name. The report's grouping (**Group By Customer**, **Group by Voucher**) cannot be changed to other fields.

## Frequently asked questions

### Why not create one receivable account for every customer?

ERPNext normally keeps one common receivable account and distinguishes balances by Customer. This keeps the Chart of Accounts manageable while preserving party-level detail.

### Do these reports include draft invoices?

Draft documents have not posted receivable or payable ledger entries and are not part of outstanding balances.

### Can I see balances in party currency?

Currency options depend on the account and report filters. Compare the account currency, party currency, and company base currency when reviewing foreign balances.

## Related topics

- [Sales Invoice](/erpnext/sales-invoice)
- [Purchase Invoice](/erpnext/purchase-invoice)
- [Payment Entry](/erpnext/payment-entry)
- [Payment Ledger](/erpnext/payment_ledger)
- [Process Statement of Accounts](/erpnext/process-statement-of-accounts)
- [Common Receivable Account](/erpnext/why-not-to-use-a-customer-specific-receivable-account)
