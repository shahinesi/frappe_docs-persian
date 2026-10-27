---
title: "Input tax credit in ERPNext: ineligible ITC, ITC Claim Period and GSTR-3B"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/input-tax-credit-and-gstr-3b"
updated: "2026-10-24"
---

This page explains how India Compliance handles input tax credit (ITC) on purchases: why some GST is posted as an expense, why an invoice goes to another GSTR-3B month, why you cannot change an invoice after GSTR-3B is filed, and why GST in a Journal Entry is not in GSTR-3B.

## Why is GST posted to an expense account?

Some GST cannot be claimed as input tax credit. India Compliance then reverses it from the input tax account and posts it as a cost. This happens when:

- The item is marked **Is Ineligible for Input Tax Credit** (on the Item, copied to the purchase rows). The reason is **Ineligible As Per Section 17(5)**.
- The place of supply is in another state than the company GSTIN, so ITC is not allowed. The reason is **ITC restricted due to PoS rules**.

Where the ineligible GST goes:


| Item                      | Ineligible GST is posted to                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| Expense item (non-stock)  | The company's **Default GST Expense Account**                          |
| Stock item or fixed asset | The item's valuation rate (so it becomes part of stock or asset value) |


So in the General Ledger the input tax account (for example `Input Tax CGST`) shows the amount on the debit side and again on the credit side. This is the reversal, and it is expected.

If you get "Please set **Default GST Expense Account** in Company", set that account on the Company.



If the GST should have been claimable, the setup is wrong: clear **Is Ineligible for Input Tax Credit** on the item, or correct the **Place of Supply**, then cancel and amend the Purchase Receipt and Purchase Invoice.

See [Purchase transactions: ineligible ITC](https://docs.indiacompliance.app/docs/configuration/purchase_transaction).

## ITC Claim Period: why is a March invoice in April's report?

Each Purchase Invoice and Bill of Entry has an **ITC Claim Period**: the GSTR-3B month in which you claim its ITC. India Compliance sets it:

- From the posting date, by default.
- From your action in the **GST Invoice Management System** (IMS), when you use it. If you mark the invoice Pending or Rejected there, the claim is **Deferred** to a later period.
- If the posting-date month already has GSTR-3B filed, from the next month that is not filed.

GST reports for purchases can use the ITC Claim Period instead of the posting date. That is why an invoice posted in March can appear in April. To see the report by posting date, change the report filter. To claim it in another month, change **ITC Claim Period** on the invoice.

## Why can't I change an invoice after GSTR-3B is filed?

When GSTR-3B for a month is marked **Filed**, India Compliance blocks changes to invoices whose ITC Claim Period is that month. This keeps your books the same as what you filed.

If you must change one, open the **GSTR-3B Report** for that month and click **Mark as Unfiled**. Make the change, then click **Mark as Filed** again. Correct the return on the GST Portal too, if the change affects it.

## Why isn't GST in my Journal Entry in GSTR-3B?

GSTR-3B is built from Sales Invoices, Purchase Invoices and Bills of Entry. A Journal Entry has no supplier GSTIN or item tax details, so its GST is not in GSTR-3B, and it cannot be matched in Purchase Reconciliation.



Book GST you want to claim as a **Purchase Invoice**. For example, bank charges with GST: the bank is a supplier with a GSTIN, and it issues a GST invoice (usually monthly). Make a Purchase Invoice for the charges against the bank as supplier, and record the deduction from your bank account as the payment of that invoice.

## Why doesn't GSTR-3B match my ledger?

- **Wrong company GSTIN on an invoice.** An invoice whose company GSTIN does not belong to the company is left out. Amend it.
- **Journal Entries** are not included (see above).
- **ITC Claim Period** differs from the posting date (see above).
- **Ineligible ITC** is shown separately from claimable ITC.

To see the invoices behind each figure, use **GST Purchase Register** and **GST Sales Register**.

## Which returns does India Compliance prepare?


| Return                 | In India Compliance                                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| GSTR-1                 | Yes: generate, compare with the GST Portal, upload and file. See [GSTR-1](/erpnext/gstr-1-missing-or-mismatch).                                |
| GSTR-3B                | Yes: the **GSTR-3B Report** (sections for tax payment and the credit and cash ledgers are not included, because ERPNext does not record them). |
| GSTR-2A / 2B           | Download and match in the **Purchase Reconciliation Tool**. See [Purchase Reconciliation](/erpnext/purchase-reconciliation-gstr-2b-mismatch).  |
| GSTR-9, GSTR-6, GSTR-7 | No. GSTR-9 on the GST Portal is filled from your GSTR-1 and GSTR-3B. Use the GST reports as working papers.                                    |


## Related

- [India GST, e-invoice and e-way bill: find your answer](/erpnext/india-gst-help)
- [GSTR-3B](https://docs.indiacompliance.app/docs/gst-reports/gstr3b)
- [Why doesn't my purchase invoice match GSTR-2A or GSTR-2B?](/erpnext/purchase-reconciliation-gstr-2b-mismatch)
- [Why is GST wrong or missing on my invoice?](/erpnext/gst-wrong-on-invoice)
