---
title: "Print Heading"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/print-heading"
updated: "2026-10-10"
---

A Print Heading changes the title printed on a document. For example, a Quotation can print as "Proposal", or a Sales Invoice as "Proforma Invoice".

Applies to Frappe v16 and later.

## Create a print heading

1. Open the **Print Heading** list and click **Add Print Heading**.
2. Enter the title in **Print Heading**, for example "Proforma Invoice".
3. Save.

## Use it

Documents that support it have a **Print Heading** field, usually in a **Print Settings** section of the form. Pick the heading there and save. The printout shows that title instead of the document type's name.

The field lists every Print Heading on the site, for all document types. Give headings clear names, and delete the ones nobody uses so the list stays short.

To print a heading only for one print, without changing the document, use an HTML print format or a format made in the editor with a **Text** block instead.

![The Print Heading field on a Sales Invoice.](/files/printing-v16-print-heading-field.png)

![The printout with the title Proforma Invoice.](/files/printing-v16c-print-heading-print.png)
