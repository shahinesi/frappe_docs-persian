---
title: "Why doesn't my purchase invoice match GSTR-2A or GSTR-2B?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/purchase-reconciliation-gstr-2b-mismatch"
updated: "2026-10-24"
---

You run the **Purchase Reconciliation Tool**, and an invoice that your supplier filed shows as **Only in 2A/2B**, **Only in Books** or **Mismatch**, or it is not in the list at all. This page explains how India Compliance matches invoices, and what to fix for each result. For how to use the tool step by step, see [Reconciling purchases](https://docs.indiacompliance.app/docs/purchase-reconciliation/reconciling_purchase) in the India Compliance documentation.

## How the matching works

The tool compares two lists for the company GSTIN and period you select:

- **2A/2B data**: the invoices your suppliers filed, which you download from the GST Portal. They are stored as **GST Inward Supply** records.
- **Books**: your submitted Purchase Invoices (and Bills of Entry).

An invoice in your books matches a 2A/2B invoice when these are the same: supplier GSTIN, company GSTIN, financial year, bill number, place of supply, reverse charge, taxable value and each tax amount (CGST, SGST, IGST, cess). The result is one of these statuses:


| Status              | Meaning                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Exact Match**     | Every field is the same.                                                                                                                            |
| **Suggested Match** | The bill number is similar but not identical (for example `BB/0045/25-26` and `45`), or the amounts differ by ₹1 or less. Check it, then accept it. |
| **Mismatch**        | The same supplier and bill, but other values differ.                                                                                                |
| **Manual Match**    | You linked the two yourself.                                                                                                                        |
| **Only in 2A/2B**   | The supplier filed it, but no Purchase Invoice in your books matches it.                                                                            |
| **Only in Books**   | You booked it, but it is not in the downloaded 2A/2B data.                                                                                          |


Bill numbers are compared after removing `/`, `-`, leading zeros and the financial year. Bill dates more than 10 days apart are not matched automatically.

## Nothing is listed, or the download fails

1. **Download the 2A/2B data first.** The tool only compares what was downloaded. Click **Download 2A/2B** (or **Upload 2A/2B** with the JSON file from the GST Portal) for the period.
2. **Credentials for Returns.** Downloading uses the **Returns** service, not the e-Waybill / e-Invoice one. In **GST Settings → Credentials**, add a row for the GSTIN with **Service** = Returns and the GST  Portal username. Also turn on API access on the GST Portal (**My Profile → Manage API Access**). See  [GST API errors](/erpnext/gst-api-credentials-and-credits).
3. **Error while downloading after an update.** Some download errors were fixed in later India Compliance releases (for example 16.3.0). Update the app.

## An invoice shows "Only in 2A/2B" or "Only in Books"

Check these on the Purchase Invoice, in this order:

1. **Bill No and Bill Date.** They must be the supplier's invoice number and date, not your own reference. Dates more than 10 days apart do not match.
2. **Supplier GSTIN and Company GSTIN.** The supplier's address must have the GSTIN that filed the invoice, and the invoice must use the right company GSTIN when you have more than one.
3. **Period.** The supplier may have filed in a different month than your posting date. Widen **Period**, or use **From Date** and **To Date**.
4. **Ignored invoices.** An invoice that someone marked **Ignore** is left out. Turn on **Include Ignored** to see it again.
5. **Journal Entries are never matched.** ITC booked through a Journal Entry (for example GST on bank charges) cannot be compared, because a Journal Entry has no supplier GSTIN or item tax details. Book such charges as a Purchase Invoice.

If the bill number or date was wrong, correct the Purchase Invoice (cancel and amend), then run the tool again.

## An invoice shows "Mismatch"

Compare the columns in the tool. The usual causes:

- **Taxable value differs because of nil-rated or exempted items.** Nil-rated, exempted and non-GST items are not part of the taxable value. If the supplier reported them in the B2B section, the totals differ. If the tax amounts match, accept the match.
- **Cess is missing.** Cess counts only when its account is set as the cess account in **GST Settings → Accounts**. Set the account, then amend the invoice.
- **Tax split differs.** CGST + SGST in your books and IGST in 2A/2B (or the opposite) means the place of supply differs. See [Why is GST wrong or missing on my invoice?](/erpnext/gst-wrong-on-invoice).
- **Rounding.** Differences up to ₹1 are suggested as a match. Larger differences need the invoice corrected.

To link two records yourself, select them and use **Actions → Link**. To undo a link, use **Unlink**.

## Accept, Pending and Ignore

These actions only record your decision in ERPNext. They do not change anything on the GST Portal:

- **Accept**: the match is correct. The Purchase Invoice's **Reconciliation Status** becomes Reconciled.
- **Pending**: you will check it later.
- **Ignore**: leave it out of the reconciliation.

A Purchase Invoice's **Reconciliation Status** is **Unreconciled** until it is linked to a 2A/2B record, **Match Found** when it is linked, and **Reconciled** after you accept it.

## Item details are empty in GST Inward Supply

GSTR-2B data from the GST Portal has no item-wise details. Only GSTR-2A has them. So a GST Inward Supply record downloaded from 2B has an empty item table. This is expected.

## Related

- [India GST, e-invoice and e-way bill: find your answer](/erpnext/india-gst-help)
- [Reconciling purchases](https://docs.indiacompliance.app/docs/purchase-reconciliation/reconciling_purchase)
- [Input tax credit, ITC Claim Period and GSTR-3B](/erpnext/input-tax-credit-and-gstr-3b)
- [GST API errors: credentials, GSTIN or "API credits exhausted"](/erpnext/gst-api-credentials-and-credits)
