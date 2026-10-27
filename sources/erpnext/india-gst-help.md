---
title: "India GST FAQs: e-invoice and e-way bill"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/india-gst-help"
updated: "2026-10-24"
---

GST, e-invoice, e-way bill, TDS and the GST returns in ERPNext come from the **India Compliance** app. Its full documentation is at [docs.indiacompliance.app](https://docs.indiacompliance.app/docs/getting-started/introduction).  
This page lists the questions support receives most often, with a short answer and a link to the full one.

## Setup

**How do I set up GST?** Install India Compliance, then set the company's GSTIN on its address, the GST accounts in **GST Settings → Accounts**, and the tax templates.  

[GST setup](https://docs.indiacompliance.app/docs/configuration/gst_setup)

**How do I turn on e-invoice and e-way bill?** In **GST Settings → General**, turn on **Enable API Features**, **Enable e-Invoicing** and the e-way bill options, then add credentials.

[GST Settings](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/gst_settings)

**Do I pay for the GST APIs?** On Frappe Cloud, API access is included, as long as the site is not logged in to an India Compliance Account. On a self-hosted site, you buy credits.  

[GST API errors: credentials, GSTIN, "API credits exhausted"](/erpnext/gst-api-credentials-and-credits)

**One company with GST registrations in several states?** Add an address with its GSTIN for each state. Transactions pick the GSTIN from the company address.  

[GST for multiple branches](https://docs.frappe.io/erpnext/gst-for-multiple-branches)

**HSN codes, and the HSN validation?** Set the HSN/SAC code on each item. GST Settings can require it and check its length. [GST setup: HSN codes](https://docs.indiacompliance.app/docs/configuration/gst_setup)



**New Income Tax Act 2025 TDS and TCS sections?** Update India Compliance (16.3.1 or later). It renames your Tax Withholding Categories and maps them to the new section codes; suppliers keep their category.  
[TDS setup for India](https://docs.frappe.io/erpnext/tds-setup-india)

## GST on invoices

**Why is GST wrong, missing, or a few paisa off?** Usually Place of Supply, GST accounts, the Item Tax Template setting or rounding. [Why is GST wrong or missing on my invoice?](/erpnext/gst-wrong-on-invoice)



**Reverse charge (RCM) purchases?** Add the reverse charge accounts in GST Settings and mark the purchase invoice as reverse charge. [Reverse charge](https://docs.indiacompliance.app/docs/configuration/purchase_transaction)



**Ineligible input tax credit?** India Compliance moves ineligible GST to the company's **Default GST Expense Account**, or into the item's valuation for stock items.
[Input tax credit, ITC Claim Period and GSTR-3B](/erpnext/input-tax-credit-and-gstr-3b)



**Exports, SEZ, nil-rated and zero-rated supplies, or imports?** Turn on **Enable SEZ / Overseas Transactions** in GST Settings and set the GST Category on the customer's address to Overseas or SEZ.

Imports use a Bill of Entry. [Exports, SEZ and imports with GST](/erpnext/gst-exports-sez-and-imports)

**GST on advance payments, and reversal of ITC?** [Other GST transactions](https://docs.indiacompliance.app/docs/configuration/other_transaction)

**Input Service Distributor (ISD)?** [ISD](https://docs.indiacompliance.app/docs/configuration/input_service_distribution)

## e-Invoice

e-Invoice shows Failed, has no IRN, or cannot be cancelled after 24 hours?  
[e-Invoice shows Failed, has no IRN, or cannot be cancelled](/erpnext/e-invoice-failed-or-cancel)



How do I generate or cancel an e-invoice?  
[Generating e-Invoice](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_invoice)



Credentials or "API credits exhausted" errors? [GST API errors](/erpnext/gst-api-credentials-and-credits)

**Testing without real invoices?** Use sandbox mode.  
[Sandbox](https://docs.indiacompliance.app/docs/developer-guide/sandbox)

## e-Way bill

From a Delivery Note, Stock Entry (stock transfer, job work) or purchase return? Part B, errors, or a missing PDF? [e-Way bill problems](/erpnext/e-waybill-problems)

**How do I generate, extend or cancel an e-way bill?** [e-Waybill](https://docs.indiacompliance.app/docs/ewaybill-and-einvoice/generating_e_waybill)

## GST returns

**An invoice is missing from GSTR-1, or totals do not match?** [Why is my invoice missing from GSTR-1, or why don't the totals match?](/erpnext/gstr-1-missing-or-mismatch)



Generate, compare and file GSTR-1? [GSTR-1](https://docs.indiacompliance.app/docs/gst-reports/gstr1)

GSTR-3B, and why can't I change an invoice after GSTR-3B is filed? India Compliance sets the 



ITC Claim Period and blocks changes to periods already filed.  
[Input tax credit, ITC Claim Period and GSTR-3B](/erpnext/input-tax-credit-and-gstr-3b)



Purchase invoice does not match GSTR-2A or GSTR-2B?  
[Why doesn't my purchase invoice match GSTR-2A or GSTR-2B?](/erpnext/purchase-reconciliation-gstr-2b-mismatch)

Invoice Management System (IMS)? [GST IMS](https://docs.indiacompliance.app/docs/gst-reports/gst_ims)

**GSTR-9, GSTR-6 or GSTR-7?** Not generated by India Compliance. Use the GST reports (GST Sales Register, GST Purchase Register, GST Balance) as the base, and file on the GST Portal.  
[Which returns does India Compliance prepare?](/erpnext/input-tax-credit-and-gstr-3b)

## Errors after an update or a site move

**TypeError or other errors after updating ERPNext or India Compliance?** The apps must be on matching versions: update both to the latest release of the same major version (for example both version-16).  
[Errors after an update](https://support.frappe.io/helpdesk/kb-public/articles/lccj8lm36)

**Encryption key error after moving the site?** Enter the GST credentials again.  
[Encryption key error after moving a site](https://support.frappe.io/helpdesk/kb-public/articles/34o9v7121)

## Related

- [India Compliance app](https://docs.frappe.io/erpnext/india-compliance-app)
- [India Compliance documentation](https://docs.indiacompliance.app/docs/getting-started/introduction)
