---
title: "How do I send a Statement of Accounts to customers?"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/statement-of-accounts-problems"
updated: "2026-10-26"
---

A Statement of Accounts lists a customer's invoices, payments and balance for a period, as a PDF. In ERPNext you make it with **Process Statement of Accounts**: one record holds the period, the customers and the email settings, and can send the statements once or on a schedule.

## Make and send statements

1. Go to **Process Statement of Accounts** and click **+ Add Process Statement of Accounts**.
2. Select the **Company** and the **Report**:
   - **General Ledger**: every transaction from **From Date** to **To Date**, with a running balance.
   - **Accounts Receivable**: the open invoices on the **Posting Date**, with ageing.
3. Add the customers: type them in the **Customers** table, or set **Select Customers By** (Customer Group, Territory, Sales Partner, Sales Person) and **Recipient**, and click **Fetch Customers**.
4. Save. Click **Download** to get the PDFs, or **Send Emails** to email each customer their statement.

For one customer only, you can also open the **General Ledger** or **Accounts Receivable** report, filter by the customer, and use **⋯ → Print** or **PDF**.

## Customers are missing after Fetch Customers

**Send To Primary Contact** is on by default. ERPNext then leaves out every customer without a primary email (the **Email Id** on the customer, from its primary contact).

- Turn **Send To Primary Contact** off, and click **Fetch Customers** again. Statements then go to the contact marked **Is Billing Contact**; or
- Add a primary contact with an email to each missing customer.

![Process Statement of Accounts: Select Customers By and Send To Primary Contact](/files/psoa-customers520082.png)

"No Customers found with selected options." means that no customer has this group, territory or sales partner as its default, or none of them has a primary email.

## Statements are not sent automatically

Turn on **Enable Auto Email**, and select the **Frequency** (Daily, Weekly, Biweekly, Monthly, Quarterly). ERPNext checks once a day and sends the statements on the day that equals the **To Date** (General Ledger) or the **Posting Date** (Accounts Receivable). After sending, it moves those dates on by the frequency.

So, if the **To Date** is already in the past, nothing is sent. Set **Start Date** or the **To Date** to the next day you want the statements to go.

- "No primary email found for customer: …" or "No billing email found for customer: …": add an email to that customer's contact, or take the customer out of the table.
- Emails stay in the **Email Queue**: check that the **Sender** email account can send.

## The Account field lists payable accounts too

This is on purpose. A customer can have entries in accounts other than the receivable account (inter-company or deferred revenue entries). Leave **Account** empty for all the customer's entries, or select your receivable account.

## Related

- [Process Statement of Accounts](/erpnext/process-statement-of-accounts)
- [Accounts Receivable and Payable](/erpnext/accounts-receivable-and-payable)
- [Why is the due date or payment schedule on my invoice wrong?](/erpnext/due-date-and-payment-terms-problems)
