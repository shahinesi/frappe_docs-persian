---
title: "Letter Head"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/letter-head"
updated: "2026-10-10"
---

A Letter Head is your company's header and footer, printed at the top and bottom of the printout. It repeats on every page when **Repeat Header and Footer** is on in [Print Settings](/framework/user/en/printing/print-settings).

Applies to Frappe v16 and later.

## Create a letter head

1. Open the **Letter Head** list and click **Add Letter Head**.
2. Enter a **Letter Head Name**.
3. Set **Letter Head Based On**:
   - **Image**: upload a header image and set its height, width and alignment. Simplest for a logo or a designed banner.
   - **HTML**: write the header in HTML. You can use Jinja, for example `{{ doc.company }}`.
4. Set up the footer the same way under **Footer Based On**.
5. Tick **Default Letter Head** to use it whenever no other is chosen.
6. Save.

![A letter head based on an image.](/files/printing-v16c-letter-head-image.png)

The letter head prints exactly what you put in it, so check the address, email and phone number before making it the default.

Keep **Letter Head For** as **DocType** for documents. Choose **Report** for a letter head used on report prints.

## Use a letter head

- On the print page, pick it in **Letter Head**. Leave it empty to print without one.
- In the [Print Format Editor](/framework/user/en/printing/print-format-editor), set **Letter head** in the page settings to save it with the format. Click the letter head on the page to change its image, alignment or size.
- A document with its own **Letter Head** field uses that one.

![A printed page with the letter head at the top.](/files/printing-v16c-letter-head-print.png)

## Header and footer on every page

The header and footer repeat on every page only when **Repeat Header and Footer** is on in [Print Settings](/framework/user/en/printing/print-settings). When it is off, the footer prints once at the end, and the print page shows a warning next to **Letter Head**.

## Tips

- Use an image at least twice the size it prints at, so it stays sharp.
- Leave room for the header in the format's top margin.
- HTML letter heads with custom CSS cannot be printed with the Typst renderer.
