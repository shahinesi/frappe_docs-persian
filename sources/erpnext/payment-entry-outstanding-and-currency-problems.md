---
title: "Payment Entry: wrong outstanding, \"already fully paid\", accounts and currency differences"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/payment-entry-outstanding-and-currency-problems"
updated: "2026-10-24"
---

This page answers frequent problems with Payment Entry: an invoice that shows the wrong outstanding or "already fully paid", advances that do not reduce the outstanding as expected, accounts that cannot be selected, and small differences with foreign currencies.

## "… has already been fully paid" for an unpaid invoice

The Payment Entry reads the outstanding amount from the **Payment Ledger**, not from the invoice form. If the invoice's Payment Ledger Entries are missing, ERPNext thinks nothing is outstanding.

1. Open **Accounts Receivable** (or **Accounts Payable**) for the party. If the invoice is not listed there either, its Payment Ledger Entries are missing.
2. Open **Repost Accounting Ledger**, add the invoice, and submit. This makes its ledger entries again.
3. Make the Payment Entry again.

## The outstanding in the references table is wrong

- **Enter the Paid Amount first.** **Get Outstanding Invoices** and **Get Outstanding Orders** fetch only after you enter the paid or received amount.
- **Filters in the dialog** (dates, cost center) limit what is fetched. Clear them to see all.
- **An advance was already allocated to the invoice** (in the invoice's **Advances** table, or through Payment Reconciliation). The outstanding shown is after that advance.

## Advance Paid on the order looks wrong

**Advance Paid** on a Sales Order or Purchase Order is the total of payments made against the order. It goes down when an advance is allocated to an invoice. A value higher than the order total was a bug in older releases: update the site. If it is still wrong, the order's payments were linked twice; check the order's **Connections** for Payment Entries.

## An account cannot be selected

| Field | Accounts it lists |
| --- | --- |
| **Account Paid From** (Receive) / **Account Paid To** (Pay) | Bank and Cash accounts |
| The party side | Receivable accounts for customers, Payable for suppliers, the account type of the party type for others |
| **Advance Taxes and Charges** | Accounts of type **Tax** or **Chargeable** (set **Account Type** on the account) |

Select the **Party Type** and **Party** first: the party account is filled only then. With **Book Advance Payments in Separate Party Account** on in the Company, an advance (a payment without invoice references) goes to the company's or the party's default advance account, and you cannot change it on the payment.

## Payments in another currency

When the invoice and the bank account are in different currencies, the Payment Entry has two amounts (**Paid Amount** and **Received Amount**) and two exchange rates.

- Enter the amount that left or reached your bank, and the actual exchange rate. ERPNext calculates the other amount.
- The **Difference Amount (Company Currency)** comes from the difference between the invoice's exchange rate and the payment's. ERPNext posts it to the company's **Exchange Gain/Loss Account** as a separate Journal Entry (**View Exchange Gain/Loss Journals**). Set a default cost center on the company, because these journals need one.
- If the Difference Amount looks wrong after you change a rate, clear the exchange rate field and enter it again, so that both amounts are recalculated.

## A small amount (0.01) remains outstanding

Amounts are rounded to the currency's precision. With foreign currencies, converting each line can leave a cent or a few units of a small currency outstanding.

1. In the Payment Entry, add a row in **Deductions or Loss** for the small difference, with your round-off or write-off account. The invoice is then fully paid.

   ![](/files/pe-deductions-round-off.png)

2. For an invoice that is already paid, reconcile the small amount with a Journal Entry to the write-off account, then use **Payment Reconciliation**.

## Related

- [Payment Entry](/erpnext/payment-entry)
- [Payment Reconciliation: invoice or payment missing, errors, closed periods](/erpnext/payment-reconciliation-problems)
- [Manage foreign exchange difference](/erpnext/manage-foreign-exchange-difference)
- [Accounts Receivable and Payable](/erpnext/accounts-receivable-and-payable)
