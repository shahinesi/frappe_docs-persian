---
title: "PDF generation"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/pdf-generation"
updated: "2026-10-14"
---

Frappe turns a print format into a PDF with one of three engines.

Applies to Frappe v16 and later.

| Engine | Used for | Notes |
|--------|----------|-------|
| **Chromium** | Formats made in the editor (default), Standard, and HTML formats when Print Settings says **chrome** | Lays out modern HTML and CSS correctly. Downloaded into the bench's `chromium` folder the first time it is needed, or ahead of time with `bench setup-chrome`. |
| **Typst** | Formats made in the editor with **PDF renderer** set to **Typst (fast)** | Experimental. Much faster, useful for bulk printing. Supports a subset of features. |
| **wkhtmltopdf** | HTML formats when Print Settings says **wkhtmltopdf** | Not maintained. Cannot lay out multi-column or flexbox layouts. Kept for old HTML formats. |

> **Note:** wkhtmltopdf is removed in version 17. Every PDF is made with Chromium, and formats set to wkhtmltopdf switch to Chromium when you migrate.

## Which engine prints a format

1. A format made in the editor uses its own **PDF renderer** setting: Chromium, or Typst.
2. Any other format uses its own **PDF Generator** if set.
3. Otherwise, the **PDF Generator** in [Print Settings](/framework/user/en/printing/print-settings).

## What Typst cannot print

The editor checks a format before you can pick Typst, and lists anything that blocks it:

- Custom HTML blocks and field templates
- Custom CSS on the format or on fields that Typst cannot translate
- Barcodes other than QR codes
- Images loaded from a web address
- Colours that are not hex codes
- Letter heads with custom CSS, HTML or a web image

If a format with Typst gains one of these later, printing fails with a clear message instead of silently switching engines.

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| Columns stack on top of each other in the PDF | The format is printed with wkhtmltopdf. Set **PDF Generator** to **chrome** in Print Settings. |
| The first PDF takes a long time | Chromium is being downloaded. Later PDFs are fast. |
| PDF fails on a server without internet | Chromium cannot be downloaded. Run `bench setup-chrome` where internet is available, or set `chromium_path` in `common_site_config.json` to an installed Chromium. |
| Fonts look different in the PDF | Use a Google Font name in the format's **Font**, so the PDF engine can load it. |

## Related topics

- [Print Format Editor](/framework/user/en/printing/print-format-editor)
- [Print Settings](/framework/user/en/printing/print-settings)
