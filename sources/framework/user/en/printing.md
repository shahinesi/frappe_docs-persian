---
title: "Printing"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing"
updated: "2026-10-12"
---

Every document in Frappe can be printed, saved as a PDF, or emailed as a PDF. What the printout looks like comes from a **Print Format**. This page explains the pieces and where to change each one.

Applies to Frappe v16 and later.

## The pieces

| Piece | What it controls | Where |
|-------|------------------|-------|
| **Print Format** | The layout: which fields print, in what order, in which sections and columns | Print Format list, or the [Print Format Editor](/framework/user/en/printing/print-format-editor) |
| **Print Style** | The look of the Standard format: tables, section headings, borders | [Print Styles](/framework/user/en/printing/print-styles) |
| **Letter Head** | The company header and footer at the top and bottom of the printout | [Letter Head](/framework/user/en/printing/letter-head) |
| **Print Heading** | A different title on the printout, for example "Proforma Invoice" instead of "Sales Invoice" | [Print Heading](/framework/user/en/printing/print-heading) |
| **Print Settings** | Site-wide defaults: paper size, PDF engine, draft printing, network printers | [Print Settings](/framework/user/en/printing/print-settings) |

## Kinds of print formats

| Kind | When to use it | How it is made |
|------|----------------|----------------|
| **Standard** | You have not made a format yet. Every document type has one. | Built automatically from the document's fields, in form order. Fields marked **Print Hide** are left out. |
| **Editor format** | You want your own layout without writing code. This is the right choice for most formats. | Drag and drop in the [Print Format Editor](/framework/user/en/printing/print-format-editor) |
| **HTML format** | You need full control and know HTML and Jinja | Written by hand. See [HTML print formats](/framework/user/en/printing/html-print-formats) |
| **Raw format** | You print to a thermal or label printer | ESC/POS commands. See [Raw and network printing](/framework/user/en/printing/raw-and-network-printing) |

## Print a document

1. Open the document.
2. Click the printer icon in the toolbar, or press **Ctrl+P** (**Cmd+P** on a Mac).
3. Pick a **Print Format**, **Letter Head** and **Language** in the sidebar.
4. Click **Print** or **PDF**.

The [print page](/framework/user/en/printing/print-page) has the full list of options.

## Change how a document prints

- **Hide a field everywhere:** open **Customize Form** for the document type, open the field and tick **Print Hide**. See [Making fields visible in print](/erpnext/making-fields-visible-in-print-format).
- **Change the look without making a format:** set a **Print Style** in Print Settings. See [Print Styles](/framework/user/en/printing/print-styles).
- **Make your own layout:** create a format in the [Print Format Editor](/framework/user/en/printing/print-format-editor).
- **Make it the default:** open the format and click **Set as Default**.

## Which format prints

When you open the print page, Frappe picks the format in this order:

1. The format you choose in the sidebar.
2. The **Default Print Format** set for the document type (in Customize Form).
3. **Standard**.

## Related topics

- [Print Format Editor](/framework/user/en/printing/print-format-editor)
- [Print Settings](/framework/user/en/printing/print-settings)
- [PDF generation](/framework/user/en/printing/pdf-generation)
