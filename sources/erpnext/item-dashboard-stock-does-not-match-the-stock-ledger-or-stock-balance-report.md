---
title: "Item Dashboard stock does not match the Stock Ledger or Stock Balance report"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/item-dashboard-stock-does-not-match-the-stock-ledger-or-stock-balance-report"
updated: "2026-10-25"
---

The **Stock Levels** on the Item dashboard can show a quantity that the **Stock Ledger** or **Stock Balance** report does not show. Or it shows "No Stock Available Currently" while the report shows stock. This page explains why the two can differ and how to make them match again.

Where to find **Stock Levels**: open the Item, then the **Inventory** tab (v16) or the **Dashboard** tab (v15).

## What you see

One of these:

- The Item dashboard shows stock, but the Stock Ledger is empty and the Stock Balance report shows nothing for the item.
- The Stock Balance report shows a balance, but the Item dashboard shows:

```
No Stock Available Currently
```

- The Item dashboard does not list all the warehouses that the Stock Balance report lists.
- **Repost Item Valuation** fails with:

```
combine() argument 2 must be datetime.time, not None
```

## Why this happens

ERPNext keeps stock in two places:

- **Stock Ledger Entry**: one row for each stock movement, with its posting date and time. The **Stock Ledger** and **Stock Balance** reports read these rows. They show the balance **as on the To Date** you select in the report filters.
- **Bin**: one record for each item and warehouse. It holds the current quantity: **Actual Qty**, **Reserved Qty**, **Ordered Qty**, **Projected Qty** and more. ERPNext updates the Bin each time you submit or cancel a stock transaction. The Item dashboard reads only the Bin.

The Bin takes **Actual Qty** from the last stock ledger entry, by posting date and time. That entry can be in the future. So the two can differ for these reasons:

1. **A future-dated entry.** If a stock transaction has a posting date after today, the Bin already shows the quantity after that entry. The Stock Balance report with today as **To Date** does not include it.
2. **The dashboard hides warehouses with zero quantity.** It lists a warehouse only when at least one quantity in the Bin is not zero. A warehouse with a balance today but zero after a future-dated entry does not show.
3. **The Bin is out of date.** The Bin was not updated after a change to the stock ledger. For example, someone deleted stock ledger entries directly in the database, a submission was interrupted, or a repost failed. ERPNext versions before v16.14.0 and v15.104.3 also had a bug: a repost did not reset the Bin to zero when no stock ledger entry was left for the item and warehouse.

Cases 1 and 2 are correct behavior. Case 3 needs a fix.

### Example: a future-dated entry

Al Noor Foodstuff Trading LLC receives 60 cartons of **Mango Juice 1 L Carton (Case of 12)** into **Jebel Ali Main Store - ANF** on 15-10-2026. Then the store keeper submits a Stock Reconciliation that sets the quantity to 0, but posts it on 02-11-2026 by mistake.

On 23-10-2026:

- The **Stock Balance** report, with **To Date** 23-10-2026, shows a balance of 60.
- The Item dashboard shows "No Stock Available Currently". The Bin already has the quantity after the 02-11-2026 reconciliation, which is 0.

![](/files/01-item-dashboard-no-stock.webp)

![](/files/02-stock-balance-shows-60.webp)

## How to fix it

### Step 1: Compare the Bin with the Stock Ledger

1. Open the **Stock Ledger** report.
2. Set **Item** and **Warehouse**. Set **From Date** to the first stock transaction of the item, and **To Date** to a date far in the future, for example 31-12-2027.
3. Look at the **Balance Qty** of the last row. This is the quantity the Bin must have.
4. Look at the **Posting Date** of the last rows. If a date is after today, you have case 1.

![](/files/03-stock-ledger-future-entry.webp)

5. Go to **Bin** (type "Bin List" in the search bar) and filter by **Item Code** and **Warehouse**.
6. Compare **Actual Qty** with the **Balance Qty** from step 3.

![](/files/04-bin-list-actual-qty.webp)

### Step 2: Check the Stock Ledger Variance report

The **Stock Ledger Variance** report finds stock ledger entries whose balance does not add up. For each item and warehouse, it adds the **Qty Change** and the **Change in Stock Value** of every entry, and compares the running total with the **Qty After Transaction** and **Balance Stock Value** stored on the entry. It shows the first entry where the two differ.

1. Go to **Stock** workspace → **Audit Reports** → **Stock Ledger Variance**, or type "Stock Ledger Variance" in the search bar.
2. Set **Company**. To check one item, also set **Item** and **Warehouse**.
3. Optional: set **Difference In** to see one type of difference only:
  - **Quantity (A - B)**: the balance quantity is wrong.
  - **Value (G - D)**: the balance value is wrong.
  - **Valuation (I - K)**: the valuation rate does not match the balance value divided by the balance quantity.
4. Look at the rows. Each row is one item and warehouse with a difference. A value in **A - B**, **G - D** or **I - K** that is not zero shows what is wrong. The **Posting Date**, **Voucher Type** and **Voucher No** show the first entry where it went wrong.

![](/files/05-stock-ledger-variance.webp)

If the report shows no row for the item, the stock ledger is correct. A wrong quantity on the Item dashboard then comes from the Bin or a future-dated entry: go to Step 3 or Step 4.

If the report shows a row for the item, the stock ledger itself is wrong. Fix it with Step 5. Then do Step 4 to update the Bin.

To see every entry of one item and warehouse with these checks, open the **Stock Ledger Invariant Check** report.

### Step 3: Fix a future-dated entry

If the last entry has a wrong future date:

1. Open the transaction from the **Voucher #** column of the Stock Ledger.
2. Cancel it and amend it.
3. Set the correct **Posting Date** and **Posting Time**. To change them, select **Edit Posting Date and Time** first.
4. Submit it.

The Item dashboard now shows the same quantity as the Stock Balance report for today.

If the date is correct, nothing is wrong. To see the same number in both places, set the **To Date** of the Stock Balance report to the date of the last entry.

### Step 4: Recalculate the Bin

If the Bin **Actual Qty** is different from the last **Balance Qty** in the Stock Ledger, recalculate the Bin:

1. Open the Bin record for the item and warehouse.
2. Click **Recalculate Values** (in v15: **Recalculate Bin Qty**).

![](/files/06-bin-recalculate-values.webp)

3. Check the message "Bin Values Recalculated" (in v15: "Bin Qty Recalculated"). Then reload the page to see the new values.

ERPNext sets **Actual Qty** from the last stock ledger entry. If there is no stock ledger entry, it sets **Actual Qty** to 0. It also recalculates the reserved, ordered, planned and projected quantities.

![](/files/07-bin-after-recalculate.webp)

4. Reload the Item and check **Stock Levels** on the **Inventory** tab (v15: **Dashboard** tab).

### Step 5: Repost the valuation if the ledger itself is wrong

If the Stock Ledger Variance report shows the item, or the **Balance Qty** or values in the Stock Ledger are wrong, run Repost Item Valuation (the job that recalculates the stock ledger and the accounting entries from a date). For example, this can happen after a backdated entry or a failed repost.

A repost changes the **Stock In Hand** and stock expense accounts in the Trial Balance and the **Balance Value** in the Stock Balance report.

**From the Stock Ledger Variance report:**

1. In the report, select the check box of each row to repost.
2. Click **Create Reposting Entries**.
3. Read the message and click **Yes**.

ERPNext makes one Repost Item Valuation for each row. It starts from the **Posting Date** and **Posting Time** of the first wrong entry. The message "Reposting entries created" lists them.

![](/files/08-stock-ledger-variance-create-reposting.webp)

4. Wait until each entry has **Status** **Completed**.
5. Run the Stock Ledger Variance report again. The item must not show now.
6. Do Step 4 again.

**Manually:**

1. Go to **Stock → Repost Item Valuation** and click **+ Add Repost Item Valuation**.
2. Set **Based On** to **Item and Warehouse**.
3. Set **Item Code**, **Warehouse** and **Company**.
4. Set **Posting Date** to the date of the first wrong entry. Also set **Posting Time**.
5. Click **Save**, then **Submit**.
6. Wait until **Status** is **Completed**. Then do Step 4 again.

If the repost fails with `combine() argument 2 must be datetime.time, not None`, the **Posting Time** is empty. Amend the entry, set **Posting Time**, and submit it again.

## How to prevent it

- Do not post stock transactions with a future date. If you must, tell your team, because the Item dashboard will show the quantity after that date.
- Do not delete Stock Ledger Entries, Bins or stock transactions directly in the database. To undo a transaction, cancel it.
- If you run your own server, keep ERPNext updated. Versions v16.14.0 and v15.104.3 fix a case where a repost left the old quantity in the Bin.
- Check **Repost Item Valuation** for entries with **Status** **Failed** and fix them.
- Run the **Stock Ledger Variance** report once a month, for example before you close the books.
- In v16.28.0 and later, you can let ERPNext do this check each week. Go to **Stock Reposting Settings** and select **Auto Repost Incorrect Valuation Entries (Weekly)**. ERPNext then scans the Stock Ledger Variance for the current fiscal year and makes the reposts for you.

## If this does not fix it

Raise a support ticket if:

- **Recalculate Values** does not change the Bin, or the quantity comes back after a few transactions.
- Repost Item Valuation fails with an error other than the one on this page.

Include:

- The item code and the warehouse.
- The quantity on the Item dashboard, the Bin **Actual Qty**, and the last **Balance Qty** in the Stock Ledger.
- A screenshot of the Stock Ledger report with the filters visible.
- A screenshot of the Stock Ledger Variance report for the item and warehouse.
- The name of the failed Repost Item Valuation entry and its **Error Log**, if any.
- Whether anyone changed stock data directly in the database or with a custom script.

## Related

- [Stock Ledger](https://docs.frappe.io/erpnext/stock-ledger)
- [Repost Item Valuation](https://docs.frappe.io/erpnext/repost-item-valuation)
- [Stock Reconciliation](https://docs.frappe.io/erpnext/stock-reconciliation)
- [Projected Quantity](https://docs.frappe.io/erpnext/projected-quantity)
- [Stock Reposting Settings](https://docs.frappe.io/erpnext/stock-reposting-settings)