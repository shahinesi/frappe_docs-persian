---
title: "Why is my asset depreciation not what I expect?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/asset-depreciation-problems"
updated: "2026-10-24"
---

This page explains how ERPNext builds an asset's depreciation schedule and posts the entries, and what to check when the amounts, the number of periods or the entries are not what you expect.

## How the schedule is built

With **Calculate Depreciation** ticked, each row of the asset's **Finance Books** table makes a schedule from:

- **Depreciation Method**: Straight Line, Double Declining Balance, Written Down Value, or Manual;
- **Total Number of Depreciation Entries** and **Frequency of Depreciation (Months)**: for example, 60 entries every 1 month for five years;
- **Depreciation Posting Date**: the date of the first entry. Later entries follow every frequency period;
- **Salvage Value** (or **Salvage Value Percentage**): the value left at the end;
- for Written Down Value, **Rate of Depreciation (%)**, calculated from the salvage value if you do not enter it.
- 

The first period runs from the **Available for Use Date** to the first posting date. If that is not a full period, the first entry is pro-rated, and an extra entry at the end covers the rest. So a 5-year asset bought in February with a March posting date has 6 yearly entries: a short first one, four full ones, and a short last one. This is expected.

With **Depreciate based on daily pro-rata**, each entry is calculated on the exact number of days in its period, so months of different length get different amounts. Without it, every full period has the same amount.

## Written Down Value differs from my spreadsheet

ERPNext applies the rate to the value at the start of each **asset year** (counted from the Available for Use Date), and pro-rates the first year. Spreadsheets often apply the rate per fiscal year, or the Income Tax half-year rule. Both are valid methods, but they give different numbers.

- To follow a different rule, use **Depreciation Method** = **Manual** and enter the amounts, or adjust with an **Asset Value Adjustment**.
- If you set both **Rate of Depreciation (%)** and **Salvage Value**, they must agree. Clear one and let ERPNext calculate it.

## Depreciation entries are not created

Entries are posted by a daily background job on each schedule date, when **Book Asset Depreciation entry is automatically** on in **Accounts Settings**. If entries are missing:

1. **Accounts for the company.** The asset's **Asset Category** must have, for the asset's company, a **Fixed Asset Account**, **Accumulated Depreciation Account** and **Depreciation Expense Account**. A missing account makes the job fail for every asset of that category. Users with **Role to Notify on Depreciation Failure** get an email when this happens.
2. **Closed period.** Entries dated in a closed Accounting Period or before the Accounts Frozen Till Date are not posted.
3. **The setting is off.** Post the entries yourself: open the asset's depreciation schedule and use the **Make Depreciation Entry** button for each due row.

## The schedule is empty or cannot be changed

- **Calculate Depreciation** is off: no schedule is made. Tick it before you submit the asset.
- The Finance Book on the schedule comes from the asset and cannot be changed on the schedule.
- To change the schedule after depreciation has been posted, use **Asset Value Adjustment** or adjust the asset's life (**Increase In Asset Life (Months)**). Otherwise, cancel the asset and make it again.

## Amounts change after a sale, scrap or value adjustment

- **Sale or scrap:** depreciation is posted up to the sale or scrap date, pro-rated for the last period. Later schedule rows are cancelled.
- **Finance Book "For Income Tax"** (India): an asset sold or scrapped in the year it is used gets no depreciation for that year in that book. This is handled by the India Compliance app.
- **Asset Value Adjustment:** the remaining schedule is calculated again from the new value.

## Reports show different values

The **Asset Depreciations and Balances** and **Fixed Asset Register** reports read depreciation from the accounts set on the **Asset Category**. If the category's **Accumulated Depreciation Account** or **Depreciation Expense Account** was changed after entries were posted, older entries are not counted. Keep the accounts unchanged, or report on the old account with the **General Ledger**.

## Existing assets with depreciation already booked

For an asset bought before you started using ERPNext, set **Asset Type** = **Existing Asset**, and enter **Opening Accumulated Depreciation** and **Opening Number of Booked Depreciations**. The schedule then starts from the remaining value. These values cannot be changed after submission; if they are wrong, cancel the asset and create it again.

## Related

- [Asset Depreciation](/erpnext/asset-depreciation)
- [Depreciation methods](/erpnext/depreciation-methods)
- [Daily depreciation](/erpnext/daily-depreciation)
- [Asset reports](/erpnext/asset-reports)
- [Asset: create, sell, scrap and status problems](/erpnext/asset-create-sell-scrap-problems)
