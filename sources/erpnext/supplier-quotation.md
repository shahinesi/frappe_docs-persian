---
title: "Supplier Quotation | ERPNext Documentation"
description: "Record, compare, approve, and convert a supplier's commercial offer into a Purchase Order in ERPNext."
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/supplier-quotation"
updated: "2026-10-22"
---

Keystone Cables replies to Nova Industries with an offer to supply 200 USB-C power adapters at $18 each, valid until 6 November. The email attachment is useful evidence, but leaving the price only in an inbox means the buyer must retype it later and reviewers cannot compare it consistently with another supplier's offer.



A **Supplier Quotation** records the supplier's commercial offer in structured fields. Nova can enter Keystone's offer directly, including the quoted quantity, rate, validity, delivery details, and commercial terms. The structured offer is easier to compare and can become a [Purchase Order](/erpnext/purchase-order) without re-entry. Submitting it does not move stock or create a General Ledger entry.



![Supplier Quotation supplier, date, and validity highlighted](/files/docs-20261022-buying-supplier-quotation-overview.png?v=20261022)

## Before you begin

Create the [Supplier](/erpnext/supplier) and Items. When the quote is a response to a [Request for Quotation](/erpnext/request-for-quotation), create it from that RFQ so the response and source requirement remain connected. Keep the supplier's original quotation as an attachment when your audit process requires it.

## Create a Supplier Quotation from an RFQ

1. Open the submitted RFQ.
2. Select **Create &gt; Supplier Quotation**.
3. Select the supplier whose response you are recording.
4. Enter the supplier's quotation number, quotation date, and **Valid Till** date.
5. Review each Item, quantity, rate, delivery date, UOM, and warehouse.
6. Add taxes, freight, discount, payment terms, and commercial conditions from the supplier's offer.
7. Save, compare the quotation with the source and attachment, then submit it.

![Supplier Quotation item, rate, amount, and total highlighted](/files/docs-20261022-buying-supplier-quotation-items.png?v=20261022)



The Nova example records 200 adapters at $18, for a total of $3,600 before any additional tax or charge. Do not compare only the rounded total. Check whether each supplier used the same quantity, UOM, tax basis, delivery scope, and currency.



![Supplier Quotation item editor with Item, Quantity, and Rate highlighted](/files/docs-20261022-buying-supplier-quotation-item-details.png?v=20261022)



Open the item row to review the rate basis, stock UOM conversion, expected delivery date, warehouse, manufacturer or supplier part number, and source references. The RFQ reference belongs on the item row, which is why a quotation created from the RFQ is safer than manual re-entry.

## Other ways to create a Supplier Quotation

A buyer can create one manually and select a Supplier, then add Items. A draft can also pull eligible items through **Get Items From** using a [Material Request](/erpnext/material-request) or RFQ. If a supplier responds through the portal, ERPNext creates a draft Supplier Quotation for internal review.



Use a direct quotation when the supplier sent an offer without a formal RFQ. Use a linked quotation when Nova initiated the request and needs to track which suppliers replied.

## Important fields and what they mean


| Field                   | What it controls                                           | Nova example                       |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------- |
| Supplier                | Identifies who made the offer                              | Keystone Cables                    |
| Date                    | Records when the quotation was received or issued          | 23 October 2026                    |
| Valid Till              | Shows the last date the supplier says the offer is valid   | 6 November 2026                    |
| Quotation Number        | Stores the supplier's own reference                        | KC-Q-2026-184                      |
| Item Quantity           | Records how much the supplier quoted                       | 200 Nos                            |
| Rate                    | Records the price per selected UOM                         | $18 per adapter                    |
| Expected Delivery Date  | Captures the supplier's promised delivery at item level    | Before Nova's campaign requirement |
| Currency and Price List | Define the quotation currency and rate context             | USD in this example                |
| Warehouse               | Carries the intended receipt location into later documents | Receiving Warehouse - NET          |


The Valid Till date helps reviewers avoid ordering against an expired offer, but it is not a guarantee that stock remains available. Confirm current availability if approval happens near or after the validity date.

## Add taxes, charges, and discounts

Use a [Purchase Taxes and Charges Template](/erpnext/purchase-taxes-and-charges-template) when the supplier's tax structure is reusable. Review the charge type and account for every row. A [Tax Category](/erpnext/tax-category) can select an appropriate template based on supplier and transaction context.



Use a [Shipping Rule](/erpnext/shipping-rule) when freight follows a standard rule. Use Additional Discount for a discount applied after the item values, and record whether it applies to Net Total or Grand Total. If the supplier quotes a landed price, make sure freight and tax are not entered again.



For an international offer, record the [Incoterm](/erpnext/incoterm) and Named Place. These fields clarify where delivery risk and cost responsibility change hands. They do not calculate customs or freight automatically.

## Compare quotations before choosing

Use [Supplier Quotation Comparison](/erpnext/supplier-quotation-comparison) to compare responses for the same item and quantity. A meaningful comparison includes price, tax, freight, delivery date, validity, warranty, payment terms, quality, and supplier reliability.



Nova invited Keystone Cables and Horizon Distribution. Keystone's $18 price becomes useful only after the buyer confirms it covers the correct adapter, 200-unit quantity, acceptable delivery, and agreed commercial terms. Record the choice by creating the Purchase Order from the accepted Supplier Quotation.



Do not mark an offer as selected merely because it is cheapest. The objective is the best compliant offer for the business need.

## Submit and create the Purchase Order

Submitting freezes the quotation as the recorded supplier offer. From a submitted quotation, select **Create &gt; Purchase Order**. ERPNext carries the Supplier, Items, quantities, source references, rates, and other mapped values into a draft order.



Review the Purchase Order independently before submission. The quotation is what the supplier offered; the order is what Nova commits to buy. A buyer may order less than quoted, change the delivery warehouse, or omit an optional item, but changes should remain within company approval policy.



A Supplier Quotation can also support a customer-facing Quotation in make-to-order or trading scenarios. Keep the buying and selling parties clear: the Supplier Quotation comes from the vendor; the sales Quotation goes to the customer.

## Use Auto Repeat only for genuinely recurring offers

[Auto Repeat](/erpnext/auto-repeat) can generate documents on a schedule, but supplier prices and validity often change. Use it only when a standing arrangement is reviewed regularly. A [Blanket Order](/erpnext/blanket-order) is usually clearer when the business has agreed a long-term quantity or rate framework.

## Troubleshooting

### The Create Purchase Order action is missing

Confirm that the Supplier Quotation is submitted and not cancelled or closed. Also verify Purchase Order permissions. If the offer originated from an RFQ, retain the item references rather than recreating an unrelated quotation.

### The Purchase Order does not show the quotation connection

Create the order from the Supplier Quotation or use Get Items From Supplier Quotation in the draft Purchase Order. Typing an Item and rate manually does not create the source link.

### The total is different from the supplier's PDF

Compare quantity, UOM conversion, currency, tax inclusion, freight, rounding, and discount basis. Attach the original quotation and resolve the difference before submission.

### A portal response is still Draft

Portal entry creates a record for internal review. Check the supplier identity, quoted values, attachments, and terms, then submit it through your approval process.

## Frequently asked questions

### Is a Supplier Quotation a commitment to buy?

It records the supplier's offer. The Purchase Order is Nova's commitment to buy under the accepted terms.

### Can one RFQ have several Supplier Quotations?

Each invited supplier can produce its own quotation against the same RFQ. That one-to-many relationship is what supports comparison.

### Can one Supplier Quotation create more than one Purchase Order?

ERPNext can carry eligible quantities into orders, but your team should avoid ordering more than the accepted requirement. Check ordered quantities and Connections before creating another order.

### Should expired quotations be deleted?

Keep them as historical sourcing evidence. Do not use an expired rate without reconfirming it or obtaining a new quotation.

### Does a submitted Supplier Quotation affect stock or accounting?

It has no stock or General Ledger effect. Those effects occur through later receipt, invoice, and payment documents.

## Related topics

- [Introduction to Buying](/erpnext/buying)
- [Material Request](/erpnext/material-request)
- [Request for Quotation](/erpnext/request-for-quotation)
- [Supplier Quotation Comparison](/erpnext/supplier-quotation-comparison)
- [Purchase Order](/erpnext/purchase-order)
- [Purchase Receipt](/erpnext/purchase-receipt)
- [Purchase Invoice](/erpnext/purchase-invoice)