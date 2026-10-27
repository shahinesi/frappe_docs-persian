---
title: "Why can't I cancel, delete or change a Sales Order or Sales Invoice?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/cancel-delete-or-change-sales-documents"
updated: "2026-10-24"
---

A submitted Sales Order or Sales Invoice is part of your records, so ERPNext limits what you can change. This page explains what you can change in place, when you must cancel and amend, and why cancelling or deleting is sometimes blocked.

## Change a submitted Sales Order: Update Items

On a submitted Sales Order (not closed, not completed), click **Update Items**. You can:

- change the quantity, rate and delivery date of a row;
- add a new row;
- remove a row that has not been delivered, billed or ordered.

You cannot change the item code of a row (remove it and add a new row instead), the taxes, a discount on a new row, or the warehouse. A new row takes the item's default warehouse. If neither the item nor **Stock Settings** has a default warehouse, the update fails: set a default warehouse first.

For anything else (taxes, customer, discount), cancel the Sales Order and amend it.

## "Cannot delete item … which is already ordered against this Sales Order"

A row cannot be removed with Update Items if something was already done for it:

| Message | Cause |
| --- | --- |
| "…which has already been delivered" | a Delivery Note exists for the row |
| "…which has already been billed" | a Sales Invoice exists for the row |
| "…which has work order assigned to it" | a Work Order was made for the row |
| "…which is already ordered against this Sales Order" | a Purchase Order (or a Material Request that became one) was made for the row |

Cancel the later document first, or reduce the row's quantity to what was delivered or ordered.

## Cancel and amend

1. Click **Cancel**. ERPNext lists the linked documents that must be cancelled too, and offers to cancel them all.
2. Click **Amend** on the cancelled document. A draft copy opens with the same name and a suffix (`-1`).
3. Correct it and submit.

A cancelled document cannot be made active again. **Amend** is the only way back.

## Cancelling is blocked

- **A payment is linked to the invoice.** With **Unlink Payment on cancellation of invoice** on in **Accounts Settings**, the payment is unlinked and stays as an advance. With it off, cancel the Payment Entry first.
- **A later document depends on it**: a Delivery Note made from the invoice, a return, or a Packing Slip. Cancel those first, newest first.
- **The e-invoice cannot be cancelled** (India, more than 24 hours after it was generated). See [e-Invoice shows Failed, has no IRN, or cannot be cancelled](/erpnext/e-invoice-failed-or-cancel).
- **The period is closed or frozen.** See [How do I correct a submitted accounting entry?](/erpnext/correct-a-submitted-accounting-entry).

## Delete test documents

Delete removes a document permanently. Use it only for test data, never for real transactions.

1. Cancel the documents, newest first: Payment Entry, then Sales Invoice, then Delivery Note, then Sales Order.
2. Delete them in the same order.

Deleting a cancelled invoice or payment needs **Delete Accounting and Stock Ledger entries on deletion of transaction** on in **Accounts Settings**. With **Enable Immutable Ledger** on, deleting is not possible.

To remove **all** transactions of a test company, use [Delete Company Transactions](/erpnext/delete_company_transactions) instead.

A deleted document's number is not reused by the naming series.

## Related

- [Amending a Sales Order after submit](/erpnext/amending-sales-order-after-submit)
- [Why can't I invoice a Sales Order or Delivery Note the way I expect?](/erpnext/invoice-from-sales-order-or-delivery-note)
- [Returns and credit notes](/erpnext/sales-returns-and-credit-notes-problems)
