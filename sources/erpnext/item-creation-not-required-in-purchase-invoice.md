---
title: "Purchase invoice for Services | ERPNext Documentation"
description: "Record a supplier invoice for services with a non-stock Item and verify its expense and payable accounting."
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/item-creation-not-required-in-purchase-invoice"
updated: "2026-10-22"
---

Imagine Nova Industries hires a consultant to redesign a warehouse process. Nothing physical enters stock, but Nova still needs to approve the service, record the expense, recognize the supplier payable, and track the cost against the operations team.

Use a **Purchase Invoice** with a non-stock service Item. A service purchase normally does not require a Purchase Receipt and must not update stock. The important controls are the Supplier, service description, expense account, Cost Center or Project, taxes, due date, and evidence that the work was accepted.

## Create a service Item

1. Create an Item for the recurring service, such as **Warehouse Process Consulting**.
2. Place it in a suitable service Item Group.
3. Leave **Maintain Stock** disabled.
4. Enable purchase use.
5. Set an appropriate UOM, such as Hour, Day, or Job.
6. Set the default expense account and tax template when consistent.
7. Save the Item.

![Service Item showing Maintain Stock disabled and purchase use enabled](https://docs.frappe.io/files/docs-20261022-docs-buying-service-invoice-item.png)

Using an Item is preferable to typing free text because it standardizes the description, account defaults, UOM, taxes, and reporting.

## Create the Purchase Invoice

1. Open Purchase Invoice and create a new record.
2. Select the Company and Supplier.
3. Enter the Supplier Invoice Number, posting date, and due date.
4. Add the service Item, quantity, UOM, and rate.
5. Open the item row and confirm the Expense Account, Cost Center, Project, and Accounting Dimensions.
6. Add taxes and payment terms.
7. Leave **Update Stock** disabled.
8. Attach or reference the service acceptance evidence when your process requires it.
9. Save and submit.

![Purchase Invoice for consulting services with the non-stock item and Update Stock disabled](https://docs.frappe.io/files/docs-20261022-docs-buying-service-invoice-overview.png)

## Understand the accounting effect

For a $5,000 consulting invoice without tax, a typical submission posts:

| Account | Debit | Credit |
| --- | ---: | ---: |
| Consulting Expense | $5,000 | |
| Creditors | | $5,000 |

The Cost Center, Project, and Accounting Dimensions help Nova see which team or initiative consumed the service. They do not replace the expense account.

![General Ledger for the submitted service Purchase Invoice](https://docs.frappe.io/files/docs-20261022-docs-buying-service-invoice-ledger.png)

## Use a Purchase Order when control is needed

A service does not need a Purchase Receipt, but Nova may still use a Purchase Order to approve scope, price, milestones, and terms before the work begins. Create the Purchase Invoice from that order so billed quantity and amount can be matched to the commitment.

For milestone billing, use partial invoices against the service order. For time-based work, choose a UOM and supporting evidence that makes quantity meaningful.

## Troubleshooting

### ERPNext asks for a Purchase Receipt

Check Buying Settings and Supplier transaction controls. If your policy permits service invoices without receipt, configure a controlled exception rather than enabling Update Stock.

### The service appears in stock reports

Review the Item's Maintain Stock setting and the invoice's Update Stock setting. A pure service should not create Stock Ledger entries.

### The expense posts to the wrong account

Check Company-specific defaults on the Item, Item Group, and invoice row. Correct the account before submission or use an approved adjustment for a submitted invoice.

### Project or Cost Center reporting is missing the expense

Confirm that the values are present on the item row and that the selected expense account supports the required dimensions.

## Frequently asked questions

### Can I create a service invoice without an Item?

Use a non-stock service Item for consistent accounting and reporting. It avoids uncontrolled descriptions and account selection on every invoice.

### Do services require a Purchase Order?

Not technically in every setup. Many companies require one for approval and contract control. Buying Settings and Supplier-level rules determine the system requirement.

### Should Update Stock ever be enabled for a service?

A pure service should not use Update Stock. That option is for physical Items whose quantity and value belong in inventory.

### How do I record prepaid or multi-period services?

Use deferred expense settings when the benefit spans future periods, then process the expense according to the configured schedule and accounting policy.

Define the service through [Item](/erpnext/item), approve it with [Purchase Order](/erpnext/purchase-order), and record the liability in [Purchase Invoice](/erpnext/purchase-invoice). Allocate the expense through [Cost Center](/erpnext/cost-center), [Project](/erpnext/project), and [Accounting Dimensions](/erpnext/accounting-dimensions), then settle it through [Payment Entry](/erpnext/payment-entry). Use [Deferred Expense](/erpnext/deferred-expense) for multi-period benefits, [Buying Settings](/erpnext/buying-settings) for document requirements, and [Accounts Payable](/erpnext/accounts-receivable-and-payable) for outstanding supplier balances.

## Related topics

- [Purchase Invoice](/erpnext/purchase-invoice)
- [Purchase Order](/erpnext/purchase-order)
- [Item](/erpnext/item)
- [Cost Center](/erpnext/cost-center)
- [Accounting Dimensions](/erpnext/accounting-dimensions)
- [Deferred Expense](/erpnext/deferred-expense)

