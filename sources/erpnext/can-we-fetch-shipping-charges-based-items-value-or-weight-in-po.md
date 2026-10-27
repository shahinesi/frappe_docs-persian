---
title: "Fetch shipping charges based item's value or weight | ERPNext Documentation"
description: "Use a Shipping Rule to fetch purchase shipping charges from transaction value or weight ranges."
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/can-we-fetch-shipping-charges-based-items-value-or-weight-in-po"
updated: "2026-10-22"
---

Imagine Nova Industries pays a fixed $40 delivery charge for small orders, $70 when the order value is higher, and a weight-based charge for bulky equipment. Buyers should not remember the thresholds or type freight manually on every Purchase Order.

A **Shipping Rule** applies a configured charge when a transaction falls within a net-total or net-weight range. ERPNext adds the charge to the Taxes and Charges table so the buyer can review it before submission.

## Create the Shipping Rule

1. Open **Shipping Rule** and create a new record.
2. Choose whether the calculation is based on **Net Total** or **Net Weight**.
3. Set the Company and the countries or conditions where the rule applies.
4. Add non-overlapping minimum and maximum ranges.
5. Enter the shipping amount for each range.
6. Select the account and cost center used for the charge.
7. Save the rule.

![Shipping Rule showing Net Total basis and value ranges](https://docs.frappe.io/files/docs-20261022-docs-buying-shipping-rule-ranges.png)

For a weight-based rule, every Item needs an accurate weight and Weight UOM. Missing or inconsistent Item weights make the result unreliable.

## Apply the rule to a Purchase Order

1. Create the Purchase Order and add the Items.
2. Review Net Total or total weight.
3. Select the Shipping Rule.
4. Confirm that ERPNext adds the correct Taxes and Charges row.
5. Review the account, amount, tax treatment, Grand Total, and valuation behavior.

![Purchase Order showing the selected Shipping Rule and fetched shipping charge](https://docs.frappe.io/files/docs-20261022-docs-buying-shipping-rule-purchase-order.png)

If the order moves into another range, refresh or reselect the rule and confirm the updated charge. Do not assume that an earlier amount is still correct after changing Items, quantities, discounts, currency, or UOM.

## Design ranges carefully

| From | To | Charge | Example meaning |
| --- | --- | --- | --- |
| $0 | $999.99 | $40 | Small order |
| $1,000 | $4,999.99 | $70 | Standard order |
| $5,000 | No upper limit | $0 | Free shipping threshold |

Avoid gaps and unintended overlaps. Document whether boundary values belong to the lower or higher range and test transactions exactly at each threshold.

## Troubleshooting

### No shipping charge is fetched

Check the rule's Company, calculation basis, country conditions, range, currency, and active state. For weight-based rules, verify Item weights and Weight UOM.

### The wrong range is selected

Review overlapping boundaries, discounts, currency conversion, and whether the rule uses Net Total or Net Weight. Test the transaction at the exact boundary value.

### The amount appears but posts incorrectly

Check the Taxes and Charges row's Account Head, Cost Center, and whether it affects Total, Valuation, or both.

### Changing quantity does not refresh the charge

Reapply or refresh the Shipping Rule after the transaction total or weight changes, then review the recalculated row before submission.

## Frequently asked questions

### Can the same rule be used for sales and purchases?

Configure and test the rule for the transaction type and accounts your implementation supports. Do not reuse a selling charge blindly in buying when the accounting destination differs.

### Can the rule calculate a percentage?

Shipping Rule normally selects configured charges by range. Use the Taxes and Charges table or a supported customization when the commercial rule requires another formula.

### Does the fetched charge automatically include tax?

Not necessarily. Add or configure the relevant tax row and calculation basis, then verify the result.

Combine the [Shipping Rule](/erpnext/shipping-rule) with [Item](/erpnext/item), [UOM](/erpnext/uom), and [Supplier](/erpnext/supplier) setup. Apply and verify the charge in [Purchase Order](/erpnext/purchase-order), [Purchase Receipt](/erpnext/purchase-receipt), and [Purchase Invoice](/erpnext/purchase-invoice). Use a [Purchase Taxes and Charges Template](/erpnext/purchase-taxes-and-charges-template) for reusable tax rows, a [Landed Cost Voucher](/erpnext/landed-cost-voucher) for costs known after receipt, and [Buying Settings](/erpnext/buying-settings) for transaction controls.

## Related topics

- [Shipping Rule](/erpnext/shipping-rule)
- [Purchase Order](/erpnext/purchase-order)
- [Purchase Taxes and Charges Template](/erpnext/purchase-taxes-and-charges-template)
- [Calculating Freight in Taxes](/erpnext/calculatin-freight-in-taxes-in-erpnext)
- [Item](/erpnext/item)

