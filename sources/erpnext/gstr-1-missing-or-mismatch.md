---
title: "Why is my invoice missing from GSTR-1, or why don't the totals match?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/gstr-1-missing-or-mismatch"
updated: "2026-10-24"
---

You run GSTR-1 for a month and an invoice is not listed, sits in a section you did not expect, or the totals differ from your sales register or the e-invoice portal. Most of the time GSTR-1 is right: it groups invoices the way the GST Portal does. This page explains where each kind of invoice goes, and what to fix when the data is wrong.

## Where to see GSTR-1

India Compliance has two places:

- **GSTR-1** (search "GSTR-1" in the awesome bar): generates the return for a company, GSTIN and period, compares it with the GST Portal, and uploads or files it. Use this to file.
- **GST Sales Register**: one line per invoice, with its GSTR-1 section. Use this to find a single invoice.

See [GSTR-1 in India Compliance](https://docs.indiacompliance.app/docs/gst-reports/gstr1).

## An invoice is not listed under its own number

| The invoice is | It appears in |
| --- | --- |
| A sale to an unregistered customer (B2C), within your state or below the B2CL limit | **B2C (Others)**, table 7, as one total per place of supply and rate, not invoice by invoice |
| An inter-state sale to an unregistered customer above the B2CL limit (₹1,00,000 from 1 Aug 2024, ₹2,50,000 before) | **B2C (Large)**, table 5 |
| A credit or debit note to a registered customer | **Credit/Debit Notes (Registered)**, table 9B, not with the invoices |
| A credit or debit note to an unregistered customer | **Credit/Debit Notes (Unregistered)**, table 9B |
| A sale to an SEZ unit or a deemed export | **B2B, SEZ, DE**, table 4 |
| An export | **Exports**, table 6A, split by with or without payment of tax |
| Nil-rated, exempted or non-GST | **Nil-Rated, Exempted, Non-GST**, table 8 |

To find one invoice, open **GST Sales Register** for the period and filter by the invoice number.

## An invoice is missing completely

1. **No GST on the invoice.** An invoice without GST rows in its taxes table has no GST details, so GSTR-1 cannot classify it. Add the right tax template, amend the invoice, then generate GSTR-1 again.
2. **Wrong GSTIN or period.** GSTR-1 is per GSTIN. If the company has more than one GSTIN, check the invoice's **Company GSTIN** and select that GSTIN. Check the invoice's posting date is in the period.
3. **Draft or cancelled.** Only submitted invoices are included.
4. **Data changed after generating.** GSTR-1 keeps the data from when it was generated. After you change invoices, generate it again (or use **Reset** on the GSTR-1 page) so it recomputes.

## Totals do not match

- **Two GSTINs combined.** Reports run without a GSTIN filter add up all GSTINs of the company. Filter every report by the same GSTIN.
- **Returns.** The HSN summary includes invoices and credit notes together. The B2B section does not include credit notes (they are in 9B). So the two totals differ by the credit notes.
- **Zero-value invoices** with a tax rate add rows with zero amounts to the HSN summary.
- **GST applied twice.** If an invoice has the same GST account in two tax rows, the GST is counted twice. Fix the tax template, then amend the invoice.

## Generating or uploading GSTR-1 fails

- **Credentials error:** uploading uses the Returns API. See [GST API errors](/erpnext/gst-api-credentials-and-credits).
- **HSN code errors:** an HSN code with a space or the wrong length fails the GST Portal's checks. Fix the HSN code on the item and on the affected invoices, then generate again.
- **After restoring or moving a site:** the stored GST Portal session and passwords cannot be read with the new encryption key. Enter the credentials again.
- **Old app version:** several GSTR-1 generation errors were fixed in India Compliance releases during 2025 and 2026. Update the app, and make sure the site uses a stable branch (for example `version-16`), not a beta branch.

## Related

- [India GST, e-invoice and e-way bill: find your answer](/erpnext/india-gst-help)
- [GSTR-1 in India Compliance](https://docs.indiacompliance.app/docs/gst-reports/gstr1)
- [GST reports: Sales Register, Purchase Register, GST Balance](https://docs.indiacompliance.app/docs/gst-reports/miscellaneous_reports)
