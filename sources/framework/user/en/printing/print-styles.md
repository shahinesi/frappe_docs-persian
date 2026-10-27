---
title: "Print Styles"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/print-styles"
updated: "2026-10-12"
---

A Print Style changes how the **Standard** print format looks: tables, section headings and borders. You set one in Print Settings, so you get a different look without building a format.

Applies to Frappe v16 and later.

## Built-in styles

| Style | Looks like |
|-------|------------|
| **Redesign** | The default look: label above value, light table header, ruled section headings |
| **Modern** | Open and light, with quiet section headings |
| **Classic** | Boxed sections and tables with full borders |
| **Monochrome** | Black text and lines only, no fills |

## Set the default style

Open [Print Settings](/framework/user/en/printing/print-settings) and set **Print Style**. This style is used whenever no style is picked, including scheduled emails and notifications.

## Make your own style

1. Open the **Print Style** list and click **Add Print Style**.
2. Enter a **Print Style Name**.
3. Write the CSS. Scope rules to the Standard layout so they do not affect formats made in the editor:

```css
.print-format-doc.print-format-doc--standard .section-label {
	color: #1f4e79;
	border-bottom: 2px solid #1f4e79;
}
```

4. Save, then select it as **Print Style** in Print Settings.

Useful classes in the Standard layout:

| Class | Element |
|-------|---------|
| `.print-format-doc` | The whole document |
| `.print-format-doc--standard` | Present only on the Standard format |
| `.print-heading` | The document title and number at the top |
| `.section`, `.section-label` | A section and its heading |
| `.field .label`, `.field .value` | A field's label and value |
| `.child-table .table th`, `td` | Child table header cells and cells |

To hide a style without deleting it, tick **Disabled**.

## Styles and other formats

- Formats made in the editor have their own design, so the style does not change them.
- HTML formats get the style's CSS, but only rules written for their classes (for example `.print-format`) have an effect.

## Related topics

- [Printing a document](/framework/user/en/printing/print-page)
- [Print Format Editor](/framework/user/en/printing/print-format-editor)
