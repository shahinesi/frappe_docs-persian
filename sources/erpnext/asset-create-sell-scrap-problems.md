---
title: "Asset FAQ: Creating from a purchase, selling, scrapping and status"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/asset-create-sell-scrap-problems"
updated: "2026-10-24"
---

This page answers frequent problems with fixed assets in ERPNext: creating assets from a purchase, entering existing assets, selling or scrapping, a status that looks wrong, and Asset Capitalization or Asset Repair errors. For depreciation, see [Why is my asset depreciation not what I expect?](/erpnext/asset-depreciation-problems).

## Creating assets from a Purchase Receipt or Invoice

For an item with **Is Fixed Asset** ticked and an **Asset Category**:

- With **Auto create assets on purchase** on the item, submitting the Purchase Receipt (or Purchase Invoice with **Update Stock**) creates draft assets, one per unit (or one for the row, with **Create Grouped Asset** on the item). Open each asset, check it, and submit it.
- Otherwise, create the Asset yourself and select the **Purchase Receipt** or **Purchase Invoice**.
- 

If the receipt fails with an account error, set **Asset Received But Not Billed** in the Company's **Fixed Asset Defaults**, and the accounts on the **Asset Category** for this company. With **Capital Work In Progress** accounting, also set the category's **Capital Work In Progress Account**.

The asset's purchase date comes from the linked receipt's or invoice's posting date.

## Existing assets (opening balances)

For assets bought before you started using ERPNext:

1. Create the Asset with **Asset Type** = **Existing Asset**. No purchase document is needed.
2. Enter the gross amount, **Opening Accumulated Depreciation** and **Opening Number of Booked Depreciations**.
3. Submit. The asset itself posts no accounting entry.
4. Post the opening balances of the fixed asset and accumulated depreciation accounts with your opening Journal Entry, as for other accounts.

Do not post an opening Journal Entry to the Capital Work In Progress account for existing assets: ERPNext does not move it to the asset later.

## Selling or scrapping

- **Sell:** on the submitted asset, click **Sell Asset** (or make a Sales Invoice with the asset on an item row). The invoice removes the asset's gross value and accumulated depreciation, and posts the gain or loss to the company's **Gain/Loss Account on Asset Disposal**. A Sales Order or Delivery Note is not needed.
- **Scrap:** click **Scrap Asset**. A Journal Entry removes the asset and posts the remaining value as a loss.

Depreciation is posted up to the sale or scrap date first, so the GL shows a debit to Accumulated Depreciation and a credit to the Fixed Asset account, plus the gain or loss. A scrapped asset can be brought back with **Restore Asset**.

## The status looks wrong


| Status                | Meaning                                                  |
| --------------------- | -------------------------------------------------------- |
| Draft                 | Not submitted (assets created from a receipt start here) |
| Work In Progress      | A composite asset not yet capitalized                    |
| Submitted             | Submitted, no depreciation yet                           |
| Partially Depreciated | Some depreciation posted                                 |
| Fully Depreciated     | Value has reached the salvage value                      |
| Sold / Scrapped       | Disposed                                                 |


For an imported asset, the status depends on the posted entries and the salvage value. If all depreciation is posted but the status is Partially Depreciated, check that the value after depreciation equals the **Salvage Value** of the default finance book.

## Composite assets and Asset Capitalization

A **Composite Asset** collects costs (stock items, services, other assets) through **Asset Capitalization**:

1. Create the asset with **Asset Type** = **Composite Asset**. Its status is Work In Progress.
2. Make an **Asset Capitalization** that consumes the stock items and assets, and adds service costs.
3. Submit it. The composite asset gets its value and can be depreciated.

If the Asset Capitalization does not submit:

- Fill every mandatory accounting dimension in the item rows too, not only in the header.
- For stock items, the warehouse must have stock at the posting date and time.
- An item reconciled with a Stock Reconciliation just before can give a debit and credit mismatch; update the site, then try again.

A composite asset cannot be split. To split an ordinary asset with several units, use **Split Asset**.

## Asset Repair

- The **Asset** list shows only submitted assets of the company.
- The **Purchase Invoice** list shows only invoices for the repair's company that have the repair expense.
- The repair cost is taken from the invoice's net total, without tax. If the GST is ineligible for input tax credit, add it to the repair cost yourself.

## Related

- [Purchasing an asset](/erpnext/purchasing-an-asset)
- [Selling an asset](/erpnext/selling-an-asset)
- [Asset Capitalization](/erpnext/asset-capitalization)
- [Asset Repair](/erpnext/asset-repair)
- [Why is my asset depreciation not what I expect?](/erpnext/asset-depreciation-problems)