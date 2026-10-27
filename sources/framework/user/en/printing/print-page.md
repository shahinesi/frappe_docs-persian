---
title: "Printing a document"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/print-page"
updated: "2026-10-12"
---

The print page shows a live preview of a document as it will print. From here you print it, download a PDF, and change the format, language and letter head.

Applies to Frappe v16 and later.

## Open the print page

- From a document: click the printer icon in the toolbar, or press **Ctrl+P** (**Cmd+P** on a Mac).
- From a list: select documents, then **Actions > Print** to print several at once.

## The toolbar

| Button | What it does |
|--------|--------------|
| **Print** | Opens the browser print dialog. With a network printer set up, sends the job to that printer instead. |
| **PDF** | Downloads the document as a PDF |
| **Full Page** | Opens the print in a new tab |
| **Refresh** | Reloads the preview |
| Form icon | Back to the document |
| **⋯** | **Print Settings**, **Customize**, and printer settings when raw or network printing is enabled |

Press **Shift+R** to refresh the preview.

## The sidebar

| Option | What it does |
|--------|--------------|
| **Print Format** | The layout to print. Leave it empty to use the document type's default, or Standard. |
| **Language** | Prints labels and values in this language. Defaults to the document's language, then the format's default language, then yours. |
| **Letter Head** | The header and footer printed on each page. Leave it empty for no letter head. |

Some document types add their own options below these. For example, Sales Invoice has **Compact Item Print**.

The look of the Standard format comes from the **Print Style** set in [Print Settings](/framework/user/en/printing/print-settings). See [Print Styles](/framework/user/en/printing/print-styles).

## Customize the format

Open **⋯ > Customize**:

- A format made in the editor opens in the [Print Format Editor](/framework/user/en/printing/print-format-editor).
- Your own HTML format opens its form.
- A standard HTML format shipped by an app is copied first, so your changes survive updates.
- For Standard, a **New Custom Print Format** dialog asks for a name. Click **Start** and the new format opens in the editor, based on Standard.

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| "Not allowed to print draft documents" | Turn on **Allow Print for Draft** in [Print Settings](/framework/user/en/printing/print-settings) |
| "Not allowed to print cancelled documents" | Turn on **Allow Print for Cancelled** in Print Settings |
| The footer is missing | Turn on **Repeat Header and Footer** in Print Settings. The sidebar warns you when it is off. |
| Pop-up blocked when downloading a PDF | Allow pop-ups for your site in the browser |

## Related topics

- [Print Format Editor](/framework/user/en/printing/print-format-editor)
- [Print Styles](/framework/user/en/printing/print-styles)
- [Raw and network printing](/framework/user/en/printing/raw-and-network-printing)
