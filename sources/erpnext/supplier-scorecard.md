---
title: "Supplier Scorecard | ERPNext Documentation"
description: "Measure supplier quality, delivery, and commercial performance with weighted criteria and controlled buying actions."
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/supplier-scorecard"
updated: "2026-10-22"
---

Imagine Nova Industries is choosing between two suppliers. Both quote similar prices, but one answers quickly, delivers on time, and sends very few defective parts. The other is cheaper on paper but causes delayed production and repeated inspection failures. If buyers remember only the latest price, they may keep choosing the more expensive supplier in practice.



A **Supplier Scorecard** turns delivery, quality, and responsiveness data into a comparable score. ERPNext evaluates each Supplier over weekly, monthly, or yearly periods, applies the weights and formulas you define, and can warn or stop a buyer when a supplier's standing becomes unacceptable.



![Supplier Scorecard showing the supplier, evaluation period, current score, and standing](https://docs.frappe.io/files/docs-20261022-docs-buying-supplier-scorecard-overview.png)

## Understand the scorecard structure


| Part               | Purpose                                             | Example                                            |
| ------------------ | --------------------------------------------------- | -------------------------------------------------- |
| Variable           | A measured value collected from transactions        | Total received quantity or total rejected quantity |
| Criterion          | A formula that converts variables into a score      | Accepted quantity divided by received quantity     |
| Weight             | The importance of one criterion in the period score | Quality 50%, delivery 30%, response 20%            |
| Period             | The interval being evaluated                        | Monthly                                            |
| Weighting function | How older periods influence the current score       | Recent months count more than older months         |
| Standing           | A named score range                                 | Preferred, Watch, or Blocked                       |
| Action             | A warning or restriction triggered by a standing    | Warn on RFQ and prevent Purchase Order             |


Create one scorecard for each Supplier. ERPNext does not allow several scorecards for the same Supplier.

## Before you begin

Create the [Supplier](/erpnext/supplier) and make sure its Purchase Orders and Purchase Receipts use consistent source links, dates, accepted quantities, and rejected quantities. The score is only as reliable as the underlying transaction data.

Decide what good performance means for your business before writing formulas. A manufacturer may prioritize quality and delivery reliability, while a professional-services company may prioritize response time and milestone completion.

## Create scorecard variables and criteria

ERPNext includes variables for values such as received Items, accepted Items, rejected Items, deliveries, and received amount. Review the available variables before creating custom logic.

Create a **Supplier Scorecard Criteria** for each dimension you want to measure. Set a maximum score, a formula, and a clear business meaning.

![Supplier Scorecard Criteria showing the quality formula and maximum score](https://docs.frappe.io/files/docs-20261022-docs-buying-supplier-scorecard-criterion.png)



For example, quality acceptance can be expressed as:

`({total_accepted_items} / {total_received_items}) * 100 if {total_received_items} > 0 else 100`



The condition matters. Without it, a period with no receipts tries to divide zero by zero and cannot be evaluated. Decide whether a period with no activity should receive a neutral score, a perfect score, or no contribution to the final score.

## Configure a Supplier Scorecard

1. Open **Supplier Scorecard** and create a new record.
2. Select the Supplier and evaluation period.
3. Set the weighting function used to combine historical periods.
4. Add scoring standings and define their minimum and maximum scores.
5. Add the criteria and their weights. The weights should total 100.
6. Add warning or blocking actions for the relevant standings.
7. Save the scorecard and generate any missing periods.

![Supplier Scorecard criteria table showing criteria and weights totalling 100](https://docs.frappe.io/files/docs-20261022-docs-buying-supplier-scorecard-criteria.png)

## Design useful criteria


| Criterion                | Example calculation                                  | What it reveals                                         |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------------- |
| Quality acceptance       | Accepted quantity / received quantity                | How much delivered stock passed inspection              |
| Delivery reliability     | On-time deliveries / total deliveries                | Whether the supplier meets promised dates               |
| Quotation responsiveness | Responses received within target time / RFQs sent    | How reliably the supplier participates in sourcing      |
| Commercial consistency   | Expected amount compared with actual received amount | Whether commercial performance matches the agreed basis |


Avoid combining too many ideas in one formula. A buyer should be able to explain why a Supplier received its score and which operational behavior needs improvement.

## Set standings and buying controls

Create score ranges that lead to clear actions. Nova could treat 85 to 100 as **Preferred**, 70 to 84 as **Approved**, 50 to 69 as **Watch**, and below 50 as **Blocked**.

![Scorecard standings showing score ranges and warning or blocking actions](https://docs.frappe.io/files/docs-20261022-docs-buying-supplier-scorecard-standings.png)

A warning lets the buyer continue after seeing the risk. A blocking action prevents new Request for Quotations or Purchase Orders for that Supplier. Use blocking carefully because an emergency purchase or sole-source part may need a controlled exception.

## Review the calculated result

ERPNext creates a scorecard period for each evaluation interval. The current score combines the period results through the weighting function. Generate missing periods when older transaction data exists but no period was created.

![Supplier Scorecard period history showing scores over time](https://docs.frappe.io/files/docs-20261022-docs-buying-supplier-scorecard-periods.png)

Treat the score as a decision aid, not an automatic verdict. A low score may reflect genuine supplier failure, incorrect receipt dates, missing Quality Inspections, or a formula that does not fit the business.

## Troubleshooting

### The criteria weights do not total 100

Review every criterion row and adjust the weights. ERPNext expects the complete score to be distributed across the criteria used for that Supplier.

### A formula fails for a quiet period

Protect division and conditional calculations against zero values. Decide explicitly what the criterion should return when no relevant transaction exists.

### The score does not reflect recent receipts

Check the receipt's Supplier, posting date, accepted quantity, rejected quantity, and source data. Then generate missing scorecard periods and review the weighting function.

### Buyers are blocked unexpectedly

Review the Supplier's current standing, the score range, and the action attached to that standing. Correct the underlying transaction or scoring setup rather than removing the control without investigation.

## Frequently asked questions

### Can one scorecard compare several suppliers?

One scorecard evaluates one Supplier. Compare current scores and standings through the Supplier list, reports, or a purchasing review.

### How often should a supplier be evaluated?

Choose a period that matches purchasing frequency. Monthly evaluation suits regular suppliers, weekly evaluation suits high-volume operations, and yearly evaluation suits low-frequency or strategic suppliers.

### Should price be part of the score?

It can be, but avoid letting price hide poor quality or late delivery. Use separate criteria and deliberate weights so the final score reflects the total cost and operational risk of the relationship.

### Can the formula use custom data?

ERPNext provides standard variables, and custom server-side variables can be added when your implementation requires them. Validate custom calculations on historical data before using them for blocking actions.

Build the relationship through [Supplier](/erpnext/supplier) and [Supplier Group](/erpnext/supplier-group). Score sourcing behavior from [Request for Quotation](/erpnext/request-for-quotation) and [Supplier Quotation](/erpnext/supplier-quotation), order performance through [Purchase Order](/erpnext/purchase-order), delivery through [Purchase Receipt](/erpnext/purchase-receipt), and billing through [Purchase Invoice](/erpnext/purchase-invoice). Use [Buying Reports](/erpnext/buying_reports), [Procurement Tracker](/erpnext/procurement-tracker-report), [Buying Settings](/erpnext/buying-settings), and [Workflow](/erpnext/workflow) to turn the score into a controlled review process.

## Related topics

- [Supplier](/erpnext/supplier)
- [Request for Quotation](/erpnext/request-for-quotation)
- [Supplier Quotation](/erpnext/supplier-quotation)
- [Purchase Order](/erpnext/purchase-order)
- [Purchase Receipt](/erpnext/purchase-receipt)
- [Quality Inspection](/erpnext/quality-inspection)