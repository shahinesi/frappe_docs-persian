---
title: "Sales returns and credit notes: price difference, wrong rate or warehouse"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/sales-returns-and-credit-notes-problems"
updated: "2026-10-24"
---

This page answers frequent questions about returns and credit notes for sales: how to credit a price difference without returning goods, why a return takes an unexpected rate or warehouse, and how a return changes the Sales Order and the outstanding amount.

For how to make a return, see [Sales Return](/erpnext/sales-return) and [Credit Note](/erpnext/credit-note).

## Credit a price difference without returning goods

From version 16, a return must have at least one item with a negative quantity. A credit note with quantity 0 gives "At least one item should be entered with negative quantity in return document".

To credit only a price difference:

1. Open the original Sales Invoice and click **Create → Return / Credit Note**.
2. Keep the rows for the items with the price difference, and delete the others.
3. In each row, enter the quantity as a negative number (for example −10 for 10 units), and set **Rate** to the price difference per unit (for example ₹200). The rate cannot be more than the original rate.
4. Keep **Update Stock** unticked, so no stock comes back.
5. Untick **Update Billed Amount in Sales Order**, so the order is not shown as unbilled again.
6. Save and submit.

The credit note reduces the invoice's outstanding amount by 10 × 200 = ₹2,000. No stock moves.

To **increase** the price instead, use **Is Rate Adjustment Entry (Debit Note)** on a new Sales Invoice against the original. It keeps the original quantity.

## The return uses the wrong rate

- A return made from the original document (**Create → Return / Credit Note**, or **Create → Sales Return** on a Delivery Note) uses the **original rate** for the price and the original **cost** for the stock.
- A return made without an original document uses the rate on the return for the price. For the stock cost, see [Why is the valuation rate wrong?](/erpnext/valuation-rate-wrong).

So make returns from the original document whenever you can.

## The return has the wrong warehouse

A return puts the stock back into the warehouse of the original row. To receive returns in a separate warehouse (for example to inspect them), set **Default Warehouse for Sales Return** on the **Company**. Returns then use that warehouse.

For serial number items, the serial number must be **Delivered** from that warehouse. If a return was cancelled and amended, check the serial number's status and warehouse before you try again.

## The order shows unbilled again after a credit note

**Update Billed Amount in Sales Order** on the credit note decides this:

- Ticked: the Sales Order's billed amount goes down, and the items can be invoiced again.
- Unticked: the Sales Order does not change.

Untick it for price corrections and for goods you will not sell again. If the order will not be delivered again, **Close** the Sales Order.

## The credit note's amount does not reduce the invoice outstanding

With **Update Outstanding for Self** ticked, the credit note keeps its own outstanding amount instead of reducing the original invoice. Allocate it to the invoice with **Payment Reconciliation**. Untick it if you want the credit note to reduce the invoice directly.

## Returns in reports

A return is reported on its own posting date in most reports. In the **Gross Profit** report, a return made against an invoice is shown with the original invoice, so the month of the invoice changes, not the month of the return.

## Related

- [Sales Return](/erpnext/sales-return)
- [Credit Note](/erpnext/credit-note)
- [Why can't I invoice a Sales Order or Delivery Note the way I expect?](/erpnext/invoice-from-sales-order-or-delivery-note)
- [Payment Reconciliation problems](/erpnext/payment-reconciliation-problems)
