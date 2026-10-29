---
title: "UAE VAT 201 shows zero or wrong amounts, and ZATCA for Saudi Arabia"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/uae-vat-201-and-saudi-zatca-questions"
updated: "2026-10-27"
---

ERPNext has UAE VAT built in: invoice fields for the emirate, zero-rated and exempt items, reverse charge, and the **UAE VAT 201** report that follows the FTA return boxes. These fields are added when the company's **Country** is United Arab Emirates. This page explains how the report gets its numbers, so you can find why an amount is missing.

## Set up UAE VAT

1. In the **Company**, set **Country** to United Arab Emirates, and add a company address with its **Emirate**.
2. Go to **UAE VAT Settings**, add a record for your company, and list your VAT accounts (output and input VAT) in **UAE VAT Accounts**.
3. On items that are zero-rated or exempt, turn on **Is Zero Rated** or **Is Exempt**.
4. Use a **Sales Taxes and Charges Template** and a **Purchase Taxes and Charges Template** with your VAT accounts.

## How the VAT 201 report gets each box

| Box | Comes from |
| --- | --- |
| 1a–1g Standard rated supplies per emirate | Submitted Sales Invoice item rows, grouped by the invoice's **VAT Emirate**, without zero-rated and exempt rows |
| 2 Tourist refunds | **Tax Refund provided to Tourists (AED)** on Sales Invoices |
| 3 Reverse charge supplies | Purchase Invoices with **Reverse Charge Applicable** Y |
| 4 Zero rated | Sales Invoice item rows marked **Is Zero Rated** (exports are marked automatically) |
| 5 Exempt | Sales Invoice item rows marked **Is Exempt** |
| 9 Standard rated expenses | **Recoverable Standard Rated Expenses (AED)** that you enter on each Purchase Invoice |
| 10 Reverse charge recoverable | **Recoverable Reverse Charge (Percentage)** on reverse charge Purchase Invoices |

## Sales VAT is zero or missing in box 1

- **VAT Emirate is empty.** It is fetched from the **Emirate** of the company address on the invoice. Set the emirate on the address, then on the invoices.
- **The VAT account is not in UAE VAT Settings.** The item's **Tax Amount** is worked out only from tax rows whose account is listed there. Add the account. Invoices saved before the change keep a zero tax amount; cancel and amend them, or correct the filing figure by hand.
- **The invoice is treated as an export.** When the customer address is in another country, rows are zero-rated and go to box 4.

## The amount and the VAT in box 1 do not match 5%

The **Amount** is the item net amount in AED, and the **VAT Amount** is the sum of each item's **Tax Amount**. They differ from exactly 5% when:

- an invoice is in another currency: the amount is converted to AED, but the item **Tax Amount** stays in the invoice currency, or
- some rows have a different tax rate (for example rows with no VAT that are not marked zero-rated or exempt).

Open the **Sales Register** for the period and compare invoice by invoice.

## Purchase VAT (box 9) is zero

Box 9 is not calculated from your input VAT account. Enter the recoverable VAT of each Purchase Invoice in **Recoverable Standard Rated Expenses (AED)** (in the invoice's VAT details). For a reverse charge invoice, leave it empty and set **Recoverable Reverse Charge (Percentage)** instead; both on one invoice give "Recoverable Standard Rated expenses should not be set when Reverse Charge Applicable is Y".

## UAE e-invoicing and the FTA audit file

ERPNext covers the VAT return. UAE e-invoicing (the FTA e-invoicing programme) is provided by apps from Frappe partners in the UAE, not by ERPNext. Look for a UAE compliance app on the **Frappe Cloud Marketplace**, or contact a Frappe partner in the UAE.

## ZATCA e-invoicing for Saudi Arabia

ERPNext does not include ZATCA (Fatoora) e-invoicing. Setting the country to Saudi Arabia does not add it. Install a ZATCA app from the **Frappe Cloud Marketplace**; its developer supports its setup, certificates and errors.

## Related

- [UAE VAT 201 report](/erpnext/uae-vat-201-report)
- [United Arab Emirates](/erpnext/united_arab_emirates)
- [Sales Taxes and Charges Template](/erpnext/sales-taxes-and-charges-template)
