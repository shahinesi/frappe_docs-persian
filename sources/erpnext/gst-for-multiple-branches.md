---
title: "GST for Multiple Branches"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/gst-for-multiple-branches"
updated: "2026-10-24"
---

If your company has GST registrations in more than one state, you can keep **one company** in ERPNext and use a separate GSTIN for each branch. The India Compliance app then applies CGST and SGST, or IGST, on each invoice based on the branch you bill from and the customer's state.

This page explains the setup. It assumes India Compliance is installed and GST is set up for the company. See [India Compliance](/erpnext/india-compliance-app) and [GST setup](https://docs.indiacompliance.app/docs/configuration/gst_setup).

## How it works

Each sales or purchase document has:

- a **Company Address**, which gives the **Company GSTIN** of the branch;
- a **Place of Supply**, which comes from the customer's (or supplier's) address.

India Compliance compares the state code of the Company GSTIN (the first two digits) with the Place of Supply. If they are the same, it is an intra-state supply and the **In-State** taxes template (CGST and SGST) is applied. If they differ, it is inter-state and the **Out-State** template (IGST) is applied.

So the branch you select on the document decides the tax. You do not need separate tax categories or tax templates for each state.

## Step 1: Add an address with GSTIN for each branch

For every state where you are registered, add an **Address** for the company:

1. Go to **Address** and click **New**, or open the Company and add an address from there.
2. Enter the branch address, and select the **State/Province**.
3. In **GSTIN / UIN**, enter the GSTIN of that registration. **GST State** and **GST State Number** are filled from the GSTIN.
4. Tick **Is Your Company Address** and link the address to your **Company** in the **Links** table.
5. Save.

![](/files/gst-branch-address.png)

Check that your customers' and suppliers' addresses also have the correct state and GSTIN, because the Place of Supply comes from them.

## Step 2: Check the GST accounts

In **GST Settings → Accounts**, each company has one row per **Account Type** (Input, Output, Purchase Reverse Charge, Sales Reverse Charge), with its CGST, SGST / UTGST, IGST and Cess accounts. All branches of the company use these accounts.

![](/files/gst-settings-accounts-branches.png)

Separate GST accounts for each state are not needed. GST reports and returns are made per GSTIN: select the **Company GSTIN** in GSTR-1, GSTR-3B and the GST registers. If you also want branch-wise balances in the accounts, add the branch as an accounting dimension (for example **Branch** or **Cost Center**) and set it on each document.

## Step 3: Set the GST rate on items

India Compliance creates Item Tax Templates for the standard rates, for example **GST 18%**, for each company. Each has a **GST Treatment** (Taxable, Nil-Rated, Exempted, Non-GST) and a **GST Rate**, and rows for the company's GST accounts. Click **Fetch GST Accounts** to fill the rows if you made a new template.

![](/files/gst-item-tax-template-18.png)

On each **Item**, add the right template in the **Taxes** table, and set the **HSN/SAC** code. The same template works for every branch.

## Step 4: Check the In-State and Out-State tax templates

Each company needs one **Sales Taxes and Charges Template** and one **Purchase Taxes and Charges Template** for each case, linked to India Compliance's tax categories:

| Template | Tax Category | Taxes |
| --- | --- | --- |
| Output GST In-state | In-State | CGST and SGST |
| Output GST Out-state | Out-State | IGST |
| Input GST In-state / Out-state | In-State / Out-State | the input accounts |

India Compliance creates these when GST is set up. Leave the rates in these templates as they are: the rate of each item comes from its Item Tax Template.

![](/files/gst-template-out-state-category.png)

Do not create a pair of tax categories per state, and do not set a **Tax Category** on customers, suppliers or their addresses. A tax category on the document overrides India Compliance's choice, and then the same template is used for every branch.

## Step 5: Select the branch on each document

On a Sales Invoice, Sales Order, Delivery Note, Purchase Invoice or other transaction:

1. Select the customer or supplier. **Place of Supply** is set from their address.
2. On the **Address & Contact** tab, select the branch in **Company Address Name**. **Company GSTIN** changes to that branch's GSTIN.
3. The taxes template is selected again for that branch. Check the **Taxes and Charges** table.

![](/files/gst-invoice-company-gstin.png)

To save time, set a default company address per user or per naming series, or make the address of your main branch the preferred billing address. Use a separate naming series for each GSTIN, as GST rules require. See [Naming series as per GST rules](/erpnext/naming-series-as-per-gst-rules).

### Example 1: same state (CGST and SGST)

Bombay Byte Retail LLP sells to Koramangala Render Farm Pvt Ltd in Karnataka from its **Bengaluru** branch (Company GSTIN 29AAKFB4321L1ZA). Place of Supply 29-Karnataka is the same state, so **Output GST In-state** is applied, with CGST 9% and SGST 9%.

![](/files/gst-invoice-in-state.png)

### Example 2: different state (IGST)

The same customer is billed from the **Mumbai** branch (Company GSTIN 27AAKFB4321L1ZE). Place of Supply 29-Karnataka is a different state, so **Output GST Out-state** is applied, with IGST 18%.

![](/files/gst-invoice-out-state.png)

## Common problems

- **The wrong tax is applied.** Check the **Company Address Name** on the document: the branch decides the tax. Then check the Place of Supply and the customer's address.
- **The same template is used for every branch.** A **Tax Category** is set on the customer, supplier, address or document. Clear it.
- **GSTR-1 is missing a branch's invoices.** GSTR-1 is per GSTIN. Select that branch's GSTIN. See [Why is my invoice missing from GSTR-1?](/erpnext/gstr-1-missing-or-mismatch)
- **Moving stock between branches.** A transfer between GSTINs is a supply: use a Sales Invoice to the other branch (as an internal customer) and a Purchase Invoice there. See [Stock transfer with GST](/erpnext/stock-transfer-with-gst).

## Set up with an older version?

Older ERPNext versions set this up with a pair of tax categories per state and a **Source State**. Such a setup keeps working, because a tax category on the document takes precedence. For a new setup, or when you move to India Compliance's defaults, remove the state-wise tax categories from your masters and let India Compliance choose the template.

## Related

- [India GST, e-invoice and e-way bill: find your answer](/erpnext/india-gst-help)
- [Why is GST wrong or missing on my invoice?](/erpnext/gst-wrong-on-invoice)
- [GST setup](https://docs.indiacompliance.app/docs/configuration/gst_setup)
