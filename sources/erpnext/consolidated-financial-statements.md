---
title: "Consolidated Financial Statements for Group Companies"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/consolidated-financial-statements"
updated: "2026-10-24"
---

If you run several companies in one ERPNext site, the **Consolidated Financial Statement** report shows their Balance Sheet, Profit and Loss or Cash Flow side by side, with a total for the group. This page shows how to set up the companies so the report adds them up correctly, and what it does not do.

## Set up the group

1. Create a company for the group, for example **Bombay Byte Group**, and tick **Is Group**.
2. Open each company of the group, set **Parent Company** to the group company, and save.
3. Use the **same chart of accounts** in every company. The report puts accounts on one row when their **account name** and **account number** are the same; the company abbreviation at the end is ignored. So `Debtors - BBS` and `Debtors - BBR` are added together, but `Debtors` and `Trade Receivables` are shown as two rows. The easiest way: when you create a new company, set **Create Chart Of Accounts Based On** to **Existing Company** and choose a company that has the chart you want.

## Run the report

1. Go to **Consolidated Financial Statement**.
2. Select the group company in **Company**. Its child companies are included.
3. Select **Report**: **Balance Sheet**, **Profit and Loss Statement** or **Cash Flow**.
4. Select the period with **Filter Based On** and the dates or fiscal years.

The report has a column for each company and a total column.

## Companies in different currencies

- Tick **Accumulated Values in Group Company** to convert each child company's amounts to the group company's currency. The conversion uses the exchange rate on the **End Date**.
- Or select a **Currency** to show every amount in that currency.

Without either, amounts in different currencies are added as they are, and the total has no meaning.

Make sure a **Currency Exchange** rate exists for each currency pair on the End Date.

## What the report does not do

- **Inter-company elimination.** Sales, purchases, receivables and payables between group companies are not removed. Make the elimination as a Journal Entry in the group company (or outside ERPNext) when you prepare the consolidated accounts.
- **Minority interest and different fiscal years.** These are not handled. Use the same fiscal year in all companies of the group.

## The report shows an error or wrong numbers

- **"Previous Financial Year is not closed"** in the opening row: a company has no Period Closing Voucher for an earlier year. Close the years in order, or turn on **Ignore Account closing balance** in Accounts Settings. See [Period Closing Voucher](/erpnext/period-closing-voucher).
- **One company's amounts are missing:** check that its **Parent Company** is the group company.
- **The report fails for a period:** a transaction may use an account of another company. Run the report for smaller periods to find it, then correct the transaction.

## Related

- [Period Closing Voucher](/erpnext/period-closing-voucher)
- [Chart of Accounts](/erpnext/chart-of-accounts)
- [General Ledger](/erpnext/general-ledger)