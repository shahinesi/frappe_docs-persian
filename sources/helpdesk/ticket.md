---
title: "Ticket"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/ticket"
updated: "2026-08-03"
---

In Frappe Helpdesk, a Ticket represents a digital record used to manage and track customer support and service requests. These tickets can be created by customers using Portal or by sending an email to the email address specified by admin.  
  
A Ticket can have an [SLA](https://docs.frappe.io/helpdesk/service-level-agreement) attached to it, which gets updated based on interaction with the customer. Where a ticket has one, both the agent and customer are aware of the expectations of ticket resolution. A ticket that [matches](https://docs.frappe.io/helpdesk/service-level-agreement#sla-assignment-conditions) no SLA policy has none, and shows no response or resolution target![Screenshot 2024-07-17 at 11.52.05 PM](/files/Screenshot 2024-07-17 at 11.52.05 PM.png)  
  


Investigating Ticket
--------------------

A ticket takes the subject and description of the issue from the user and assigns default Status, Priority, SLA, and Type to the Ticket.  
  
A ticket page has everything an agent needs for investigation such as detailed description, customer information, ETA for First Response to the Customer, and Ticket Resolution.  
An agent after investigating the ticket, updates these fields accordingly and based on Type and Priority, an appropriate SLA is set

Screenshot 2024-07-18 at 12.21.32 AM
------------------------------------

Solving Issue
-------------

An agent can solve issues and respond to customers using the [Email](https://docs.frappe.io/helpdesk/email-communication) feature and mark the ticket as resolved. If the customer is satisfied with the solution, he can mark the ticket as closed and give feedback to his liking.  
  
If the customer is not satisfied with the solution, he can reopen the ticket by responding to the agent. If the agent has any queries related to the ticket, he can interact with the customer to gather more information. If the need arises agent can assign the ticket to another agent or escalate it to another team and the next eligible agent will be assigned and can take things forward.

An agent can use the [Comment](https://docs.frappe.io/helpdesk/comment) feature to document his findings which might be helpful for other agents who might work on this ticket or other similar tickets  
  
  


