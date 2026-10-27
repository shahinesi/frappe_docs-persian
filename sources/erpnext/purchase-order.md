---
title: "Purchase Order | ERPNext Documentation"
description: "Create, submit, receive, bill, and track a supplier commitment through the complete ERPNext purchase cycle."
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/purchase-order"
updated: "2026-10-22"
---

Nova Industries has compared the supplier responses and selected Keystone Cables to supply 200 USB-C power adapters at $18 each. Until now, the records described an internal need and a supplier's offer. Nova still needs a formal document that states exactly what it is committing to buy, where it should be delivered, and under which terms.



A **Purchase Order** is that commercial commitment. Purchase Order carries the accepted rate from Supplier Quotation, sets delivery to Receiving Warehouse - NET by 5 November, and has a total of $3,600. Submitting it does not receive stock or post a General Ledger entry. It establishes what later [Purchase Receipts](/erpnext/purchase-receipt) and [Purchase Invoices](/erpnext/purchase-invoice) should be checked against.



![Purchase Order supplier, required date, and target warehouse highlighted](/files/docs-20261022-buying-purchase-order-overview.png?v=20261022)

## Before you begin

Create the [Supplier](/erpnext/supplier), Items, warehouses, taxes, and payment terms. When a Supplier Quotation exists, create the order from it so the accepted rate and source reference are carried forward. When the order comes directly from an internal requirement, pull items from the [Material Request](/erpnext/material-request).



Review [Buying Settings](/erpnext/buying-settings) because they can require a Purchase Order before receipt or invoice, enforce the same rate through the purchase cycle, limit over-ordering, and define supplier or transaction exceptions.

## Create a Purchase Order from a Supplier Quotation

1. Open the submitted [Supplier Quotation](/erpnext/supplier-quotation).
2. Select **Create &gt; Purchase Order**.
3. Confirm the Supplier, Company, Order Date, and Required By date.
4. Select the target warehouse.
5. Review Items, quantities, UOMs, rates, taxes, discounts, and source references.
6. Add payment terms, Incoterm, shipping details, and Terms and Conditions as needed.
7. Save the draft and obtain the required approval.
8. Submit the Purchase Order.



You can also create a draft manually and use **Get Items From** to fetch a Material Request or Supplier Quotation. Fetching the source is better than typing the same lines because ERPNext can update ordered quantities and maintain the procurement trail.

![Purchase Order item table with quantity, rate, amount, and warehouse highlighted](/files/docs-20261022-buying-purchase-order-items.png?v=20261022)



The example order contains 200 adapters at $18 each. The green dot before the Item Code means the item is currently in stock; a red dot means it is out of stock. That signal does not replace the purchase requirement, but it helps the buyer notice when an item may already be available.



![Purchase Order item editor with Item, Quantity, and Rate highlighted](/files/docs-20261022-buying-purchase-order-item-details.png?v=20261022)

Open the item row to review the stock UOM, price-list rate, last purchase rate, discount, target warehouse, Material Request or Supplier Quotation reference, project, cost center, tax template, and Required By date. This is also where you maintain a different purchase UOM and its conversion factor.

## Important fields and what they mean


| Field                   | What it controls                                   | Nova example                                |
| ----------------------- | -------------------------------------------------- | ------------------------------------------- |
| Supplier                | Identifies the party receiving the order           | Keystone Cables                             |
| Order Date              | Records when Nova places the order                 | 24 October 2026                             |
| Required By             | Sets the expected delivery date                    | 5 November 2026                             |
| Set Target Warehouse    | Applies the receiving warehouse to item rows       | Receiving Warehouse - NET                   |
| Quantity                | States how much Nova commits to buy                | 200 Nos                                     |
| Rate                    | States the agreed price per purchase UOM           | $18                                         |
| Supplier Quotation      | Preserves the accepted offer on the item row       | PUR-SQTN-2026-00003                         |
| Material Request        | Preserves the originating internal requirement     | MAT-MR-2026-00002                           |
| Project and Cost Center | Attribute the purchase where reporting requires it | Optional for project or departmental buying |


Use **Update Rate as per Last Purchase** only when the last transaction is a valid basis for the new order. The most recent price can be stale, exceptional, or based on another quantity. Use **Link to Material Request** when the draft order was created first and eligible request lines must be connected afterward.

## Handle UOM and quantity correctly

An Item can be stocked in one UOM and purchased in another. For example, Nova may stock adapters as Nos but buy them in Boxes of 20. Set the purchase UOM and conversion factor so 10 Boxes becomes 200 Nos.



Incorrect conversion changes both the commercial quantity and the stock quantity. Check it before submission, especially when the supplier quotation used a different UOM.



Buying Settings can allow a Purchase Order to exceed its Material Request by a controlled percentage. That allowance handles genuine pack sizes or supplier minimums. It should not be used to hide an unapproved increase.

## Add taxes, charges, and discounts

Use a [Purchase Taxes and Charges Template](/erpnext/purchase-taxes-and-charges-template) for reusable tax structures. Review whether a charge adds to the total, is included in the rate, or affects valuation. A Tax Category can select the appropriate template for the Supplier and transaction.



Use Additional Discount when the supplier grants a document-level discount. State whether it applies to Net Total or Grand Total. Use a Shipping Rule for standard freight conditions, and record [Incoterms](/erpnext/incoterm) and Named Place for international deliveries.



Taxes and charges that affect valuation change the cost assigned to received stock. Confirm the basis before submission instead of correcting inventory value later.

## Set payment terms and commercial conditions

Use a [Payment Terms Template](/erpnext/payment-terms-template) to divide the order into due dates or milestones. Payment terms on the Purchase Order help plan cash flow and can carry into the Purchase Invoice, but the invoice creates the payable.



Use Terms and Conditions for delivery, warranty, inspection, penalties, or other agreed clauses. Select a Letter Head and Print Heading when sending the order to the Supplier.

## Submit and continue the purchase cycle

After submission, an order awaiting both delivery and invoice shows **To Receive and Bill**. Create the appropriate downstream document from the Create menu.

![Purchase Order Create menu showing receipt, invoice, payment, and payment-request actions](/files/docs-20261022-buying-purchase-order-create-menu.png?v=20261022)

A Purchase Receipt records what physically arrived and increases stock for stock Items. A Purchase Invoice records the supplier bill and creates the payable and other accounting entries. If the supplier sends the invoice with the goods and your control permits it, both documents can be created in the appropriate order from the source transaction.



A [Payment Entry](/erpnext/payment-entry) settles money paid. A Payment Request or Payment Order may support an approval or collection workflow, but creating payment directly from an order should follow your accounting policy because an order is not itself a supplier invoice.

## Understand received and billed status


| Status              | Meaning                                   |
| ------------------- | ----------------------------------------- |
| To Receive and Bill | Neither receipt nor billing is complete   |
| To Receive          | Billing is complete but receipt remains   |
| To Bill             | Receipt is complete but billing remains   |
| Completed           | Required receipt and billing are complete |
| On Hold             | Processing is temporarily blocked         |
| Closed              | Remaining quantity will not be processed  |
| Cancelled           | The submitted order was cancelled         |


Partial receipts and invoices update the percentage received and billed. The order remains open for the balance. Use Connections and the item-row received and billed quantities to understand what remains.

## Update, hold, close, or amend an order

Use **Update Items** for changes ERPNext permits after submission, such as dates or quantities within the supported rules. Use Hold when work should pause temporarily. Use Close when the remaining balance will never be received or billed.



Closing an order does not reverse stock or accounting already posted by downstream documents. Cancel or return those documents separately when the underlying transaction must be reversed.



For a material commercial change, use the supported cancel-and-amend process rather than editing the history through workarounds. Check linked receipts and invoices first because they may prevent cancellation.

## Subcontracting and inter-company orders

For subcontracting, the Purchase Order identifies the service Item and subcontracted output, then continues through the [Subcontracting](/erpnext/subcontracting) workflow for raw-material transfer and receipt.



For an internal supplier, ERPNext can connect the buying transaction to the other company's selling transaction. Configure the supplier-customer relationship and company defaults carefully so the inter-company documents use the intended accounts, warehouses, and currencies.

## Troubleshooting

### The Purchase Order cannot be created from the quotation

Confirm that the Supplier Quotation is submitted, valid for the selected Company, and still has eligible quantity. Verify Purchase Order permissions. Alternatively, open a draft Purchase Order and use Get Items From Supplier Quotation.

### The order rate differs from the accepted quotation

Check the source link, UOM conversion, currency, Price List, Pricing Rules, taxes, and discount. If Buying Settings enforces the same rate, an unauthorized difference may be stopped or warned.

### The Material Request still shows quantity to order

Open the Purchase Order item details and confirm the Material Request and Material Request Item references. A manually typed line does not update the source request.

### The status is To Bill after all goods arrived

Receipt is complete, but the Purchase Invoice has not covered the full order quantity. Open linked invoices and compare billed quantity with the order.

### The order is Completed but the supplier has not been paid

Purchase Order completion tracks receipt and billing, not settlement. Check the Purchase Invoice outstanding amount and the supplier's Accounts Payable report.

## Frequently asked questions

### Does submitting a Purchase Order affect stock or the General Ledger?

It records the commercial commitment only. Purchase Receipt affects stock, Purchase Invoice affects accounting and the supplier payable, and Payment Entry records settlement.

### Can a Purchase Invoice be created without a Purchase Order?

ERPNext can allow it, but Buying Settings may require an order. Supplier-level exceptions can support approved direct-invoice cases such as utilities or services.

### Can one Purchase Order be received or billed in parts?

Several Purchase Receipts and Purchase Invoices can cover portions of the same order. ERPNext updates received and billed percentages until the eligible quantity is complete.

### Should a service Purchase Order have a Purchase Receipt?

Pure services normally have no stock receipt. Use a Purchase Order for approval and commitment, then create the Purchase Invoice directly when the service is accepted, subject to company policy.

### Can the same Item appear on more than one row?

Buying Settings controls whether duplicate Items are allowed. Separate rows can be useful for different warehouses, dates, projects, or rates, but accidental duplicates make receiving and billing harder to review.

## Related topics

- [Introduction to Buying](/erpnext/buying)
- [Material Request](/erpnext/material-request)
- [Request for Quotation](/erpnext/request-for-quotation)
- [Supplier Quotation](/erpnext/supplier-quotation)
- [Purchase Receipt](/erpnext/purchase-receipt)
- [Purchase Invoice](/erpnext/purchase-invoice)
- [Buying Settings](/erpnext/buying-settings)