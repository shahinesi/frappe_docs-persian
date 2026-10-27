---
title: "Period Closing Voucher"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/period-closing-voucher"
updated: "2026-10-24"
---

At year end, Nova Industries has finished invoicing, posted depreciation and accruals, reconciled its bank accounts, and reviewed receivables and payables. Its income and expense accounts still contain the year’s activity. A Period Closing Voucher transfers their net balance to an equity account so the next period starts with fresh Profit and Loss balances while Balance Sheet balances continue.



The voucher does not erase history or stop backdated entries. It creates balanced General Ledger entries. Use an [Accounting Period](/erpnext/accounting-period) or [Accounts Frozen Upto](/erpnext/freeze-accounting-entries) when the closed period must also be protected from later changes.

## Before you begin

- Complete bank, payment, stock, tax, depreciation, deferred accounting, accrual, and correction entries.
- Review the [Profit and Loss Statement](/erpnext/profit-and-loss-report), [Balance Sheet](/erpnext/balance-sheet), Trial Balance, Accounts Receivable, and Accounts Payable.
- Confirm the closing account with your accountant. It is commonly a Retained Earnings, Reserves and Surplus, or owner’s equity account.
- Take a backup and close only after the period’s adjustments are approved.

## Create a Period Closing Voucher

1. Open **Period Closing Voucher** and click **Add Period Closing Voucher**.
2. Select the company and the fiscal year being closed.
3. Set the posting date to the last day of the period.
4. Select the closing account that will receive the net profit or loss.
5. Enable **Book Cost Center Wise Profit/Loss** when retained earnings must preserve the cost center split.
6. Add a clear remark, save, review, and submit.

![Period Closing Voucher with the fiscal year and closing account highlighted](https://novacompanies.m.frappe.cloud/files/final-accounting-20260814-period-closing-voucher9ebf10.png)



## What submission posts


| Result for the period | Debit                                      | Credit                                     |
| --------------------- | ------------------------------------------ | ------------------------------------------ |
| Net profit            | Net balance of income and expense accounts | Closing equity account                     |
| Net loss              | Closing equity account                     | Net balance of income and expense accounts |


The entries reduce the period’s income and expense balances to zero and move the difference to equity. They do not close receivable, payable, bank, stock, asset, liability, or other Balance Sheet accounts.

![General Ledger showing the accounting effect of period closing](https://novacompanies.m.frappe.cloud/files/accounting-entries-20260802-accounting-entries-period-closing.png)



## If entries are posted after closing

ERPNext does not silently rewrite the submitted voucher. Complete the new approved adjustments and submit another Period Closing Voucher for the same fiscal year. The later voucher transfers only the remaining Profit and Loss balance.



Do not create a new opening entry every year. Opening entries are for migration or first-time setup. The previous year’s Balance Sheet balances carry forward through the ledger.



## Troubleshooting

### The closing balance is not what you expected

Run Profit and Loss with the same company, dates, Finance Book, and dimensions. Check draft or missing adjustments, unusual income and expense accounts, and entries posted after the earlier closing voucher.

### The voucher takes too long

Review the [Period Closing Voucher controller](/erpnext/legacy-controller-for-period-closing-voucher). Large ledgers can use batched background processing instead of one large database transaction.

### GL Entry Processing Status is In Progress or Failed

After submit, the closing entries are made in the background. **GL Entry Processing Status** shows the result. If it says **Failed**, read **Error Message** on the voucher. The usual causes:

- **A disabled account** still has a balance, for example a round-off account. Enable it, or move its balance with a Journal Entry, then submit again.
- **An account set up as a GST account but of type Expense.** With India Compliance, GST accounts must be asset or liability accounts. Correct the GST Settings accounts.
- **A timeout** ("Task exceeded maximum timeout value"). The closing makes one balance for each combination of account and accounting dimension. A dimension with many values (for example Sales Invoice or Work Order as a dimension) makes millions of combinations. Disable such dimensions, or raise a support ticket.

### The voucher cannot be submitted


| Message                                                                                                                                  | What to do                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Previous Year is not closed, please close it first"                                                                                     | Close the fiscal years in order, oldest first.                                                                                                                                                                           |
| "You cannot … this document because another Period Closing Entry … exists after …"                                                       | Cancel the later Period Closing Vouchers first, newest first.                                                                                                                                                            |
| "Closing Account … must be of type Liability / Equity"                                                                                   | Select a non-group equity account, such as Retained Earnings, as **Closing Account Head**. A group account cannot be selected.                                                                                           |
| "Stock Value Mismatch: The closing balance … of the Stock Asset accounts does not match the closing value … of the Stock Balance report" | Version 16, with perpetual inventory: the stock accounts must equal the stock value at the period end. See [Why is my stock value different from the trial balance?](/erpnext/stock-value-different-from-trial-balance). |
| "Create a Stock Closing Entry for the entire company with To Date as … before submitting the Period Closing Voucher"                     | Version 16: make a **Stock Closing Entry** for the company up to the period end date, and wait until it is completed. If stock transactions changed after it, regenerate it.                                             |


### Trial Balance or Balance Sheet differs from the General Ledger after closing

- **After closing, income and expense accounts show zero.** The closing voucher moves their balances to the Closing Account Head. A report run with the closing included shows the moved balance there, not in each account. This is expected.
- **Years were closed out of order, or a year was skipped.** Reports read the stored closing balances. If a year in between was not closed, the opening values are wrong. Cancel the Period Closing Vouchers from the newest, then submit them again from the oldest, one year at a time. Wait until each shows **Completed** before the next.
- **You do not close every year.** Turn on **Ignore Account closing balance** in **Accounts Settings**. Financial reports are then built from the GL entries, not from closing balances.
- **A small difference such as 0.47 in Provisional Profit/Loss** comes from rounding in the closing entries. Check that no entries were posted after the closing for the same period.

## Frequently asked questions

### Does a Period Closing Voucher lock the year?

It transfers Profit and Loss balances. Use Accounting Period or the frozen-accounts date to restrict later postings.

### Can I close monthly or quarterly?

You can, but confirm the policy with your accountant. Year-end closing is the most common use, and extra vouchers add audit activity.

## Related topics

- [Accounting overview](/erpnext/accounting/introduction)
- [Chart of Accounts](/erpnext/chart-of-accounts)
- [General Ledger](/erpnext/general-ledger)
- [Fiscal Year](/erpnext/fiscal-year)