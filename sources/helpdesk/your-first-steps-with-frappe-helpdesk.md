---
title: "Setup Guide"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/your-first-steps-with-frappe-helpdesk"
updated: "2026-10-23"
---

Welcome to Frappe Helpdesk. This guide takes you from a fresh site to answering your first customer emails in about 15 minutes.

## Finding your way around

Your team works in the **Agent portal**, which opens when you log in. Customers can also raise and follow tickets in the **Customer portal** at **/help/my-tickets**. Everything you need to set up lives in **Settings**, which you open by clicking your brand name at the top left.



![](/files/imagefa888a.webp)
*Ticket list in Agent Portal*



The first time you log in, Helpdesk asks a few quick questions about your team. Your organization's name becomes your brand name. After that, a **Getting Started** checklist in the sidebar walks you through the same steps as this guide, and ticks them off as you go.



![](/files/imagef9f27b.webp)
*Setup screen*



![](/files/imagebd3ae3.webp)
*Getting started checklist*

## 1. Connect your support email

Go to **Settings → Email Accounts → New** and pick your provider. For Gmail, Outlook, and most others, you'll need an **app password** instead of your regular one. The setup screen links to your provider's instructions.



Turn on **Enable Incoming** and **Enable Outgoing**, and mark the account as default for both. Helpdesk checks the login when you save, so you'll know right away if something's off.



![](/files/imagebf9cda.webp)
*Settings → Email Accounts → New*



A dedicated address like [support@yourcompany.com](mailto:support@yourcompany.com) works best, since Helpdesk pulls in recent emails from the inbox as tickets. You can add more than one address, and replies always go out from the one the customer wrote to.



**Test it.** Send an email to your support address from a personal account. It shows up in **Tickets** within a few minutes. Reply from Helpdesk, then reply back from your inbox, and you'll see the whole conversation stay in one ticket.



![](/files/image120ce9.webp)
*Back and forth via emails in ticket*



**Two settings worth turning on.** Both are off by default:

- **Acknowledgement email** lets customers know you got their email. Turn it on in **Settings → Email Notifications**.
- **Auto update status** moves a ticket to **Replied** when you answer, and back to **Open** when the customer writes back. Find it in **Settings → General → Ticket Settings**.

## 2. Bring in your team

### a. Invite your agents

Go to **Settings → Invite Agents**, add their emails, pick a role, and click **Send Invites**.

- **Agent** works on tickets
- **Manager** works on tickets and can change settings like teams, SLAs, and assignment rules
- **Admin** can change everything



![](/files/image33c5d7.webp)
*Invite agents*

### b. Set up teams

Teams group your agents, like Billing or Technical Support. You'll already have two to start with, **Billing** and **Product Experts**. Go to **Settings → Teams** to rename them or add your own, then add agents to each one.



Each team gets its own assignment rule automatically. When a ticket is set to a team, Helpdesk hands it to the next agent in that team, taking turns.



![](/files/image26be52.webp)
*Team members*

### c. Assign tickets automatically

Team rules cover the basics. If you want more, like sending every urgent ticket to your senior agents, go to **Settings → Assignment Rules → New**. Set a condition, pick the agents, and choose whether they take turns or tickets go to whoever has the fewest open. [Read more about assignment rules](https://docs.frappe.io/helpdesk/assignment-rule).



![](/files/image746e8f.webp)
*Set conditions in Assignment Rules*

![](/files/imagebc7223.webp)
*Set schedule in Assignment Rules*

![](/files/image24cb3b.webp)
*Add assignees to the rule*

## 3. Set response times

An SLA is your promise about how fast you'll reply and resolve. Helpdesk comes with one called **Standard** that's already on:


| Priority | First response | Resolution |
| -------- | -------------- | ---------- |
| Urgent   | 30 minutes     | 2 hours    |
| High     | 1 hour         | 4 hours    |
| Medium   | 8 hours        | 24 hours   |
| Low      | 24 hours       | 72 hours   |


Time only counts during working hours, Monday to Friday, 10 AM to 6 PM. Every ticket shows a timer, so your team can see what's due next.



Change the times, your working hours, or add public holidays in **Settings → SLA Policies** and **Settings → Business Holidays**. [Read more about SLAs](https://docs.frappe.io/helpdesk/service-level-agreement).



![](/files/image64c511.webp)
*Set your response times*

![](/files/image6f51c9.webp)
*Define work schedule and holidays*

## 4. Make your logo yours

Go to **Settings → General → Branding** and upload your logo and favicon. They show up for your team and your customers.



![](/files/image5357ec.webp)
*Branding and logo*

## 5. Working on tickets

Open any ticket and everything is in one place: the full email conversation, the SLA timer, and who it's assigned to.

- Click **Reply** to email the customer. It goes out from your support address.
- Click **Comment** to leave a note only your team can see. Mention a teammate with @ to pull them in.
- Change the priority, team, or assignee from the panel on the right.



![](/files/image5c24e0.webp)
*Ticket view*



A few things that save a lot of time:

- **Saved replies.** Save answers you send often. A saved reply can also update the ticket when you send it, like setting it to Resolved and adding a tag. Set them up in **Settings → Saved Replies**.
- **Cmd + K** (or Ctrl + K) opens a quick search to jump to any ticket or action.
- **Bulk actions.** Select several tickets in the list to reply to, edit, or assign them all at once. Handy when lots of people email about the same thing.
- **Away status.** Set yourself as Away from your profile menu and assignment rules will skip you.



![](/files/image7d9762.webp)
*Saved replies*

## 6. What next

Once email is running smoothly, a few things are worth a look:

- **[Knowledge Base](https://docs.frappe.io/helpdesk/knowledge-base):** Write help articles and share links in your replies. Customers using the portal will see them suggested as they type.
- **[Customer portal](https://docs.frappe.io/helpdesk/customer-portal):** Give customers a place to see all their tickets at **/help/my-tickets**.
- **Dashboard:** See how your team is doing on response times, open tickets, and feedback.
  ![](/files/image28bb36.webp)
  *Organization dashboard*
- **Integrations:** Explore [telephony](https://docs.frappe.io/helpdesk/twilio), the [ERPNext integration](https://docs.frappe.io/helpdesk/integration/erpnext), email signatures, and more.

## Resources

- [Documentation](https://docs.frappe.io/helpdesk/introduction?utm_source=setup_guide)
- [Support](https://support.frappe.io/helpdesk)
- [Other Frappe products](https://frappe.io/products?utm_source=setup_guide)