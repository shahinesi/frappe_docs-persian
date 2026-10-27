---
title: "Raw and network printing"
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/printing/raw-and-network-printing"
updated: "2026-10-10"
---

Most prints go through the browser's print dialog. Two other ways skip it:

- **Network printing** sends the PDF straight to a printer on your network through a print server (CUPS).
- **Raw printing** sends ESC/POS commands to thermal and label printers through QZ Tray on the user's computer.

Applies to Frappe v16 and later.

## Network printing

### Before you begin

- A CUPS print server your Frappe server can reach.
- The `pycups` Python package and the CUPS system library on the Frappe server. Install the library with your system's package manager, then run `bench pip install pycups` from the bench directory.

### Set it up

1. In [Print Settings](/framework/user/en/printing/print-settings), turn on **Enable Print Server**.
2. Open the **Network Printer Settings** list and add a printer with the server's **Server IP**, **Port** and **Printer Name**.
3. On the print page, open **⋯ > Select Network Printer** and pick it.

**Print** now sends the document to that printer, in the format and style you picked.

## Raw printing

### Before you begin

- [QZ Tray](https://qz.io) installed on each computer that prints.
- A print format with **Custom Format** and **Raw Printing** ticked, and the printer commands in **Raw Commands**. You can use Jinja in the commands.

### Set it up

1. In Print Settings, turn on **Enable Raw Printing**.
2. On the print page, choose the raw format.
3. Open **⋯ > Raw Printing Setting** and map the format to a printer that QZ Tray found.
4. Click **Print**.

The print page shows no preview for raw formats.

## Related topics

- [Print Settings](/framework/user/en/printing/print-settings)
- [Printing a document](/framework/user/en/printing/print-page)
