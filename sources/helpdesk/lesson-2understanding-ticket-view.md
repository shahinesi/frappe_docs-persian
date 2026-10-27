---
title: "Understanding ticket view"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/lesson-2understanding-ticket-view"
updated: "2026-01-16"
---

![](/files/Ticket%20Basic%20Info.png)

- SLA information: Here you can see the SLA information, like when is the first response due or when is the resolution due, we will cover how to create & manage SLA's in the upcoming lessons.
- Description: Whatever we added as description (in above img) shows up as the first communication.
- Ticket Additional Info: Some more info regarding the ticket. We will cover how to show more fields here in the upcoming sections.

### Assigning tickets to agent

Let us try to assign this ticket to an agent, click on "Assign" button at the top

![](/files/Assign%20btn.png)

Once you click on the button, a dialog will open

![](/files/Screenshot%202025-04-21%20at%202.25.52%20AM.png)

When you click on "Select an option", you will see "No results found", this is because we now need to add agents to our system, follow this link to add agents, and get back here.

Now when you click on "Assign" button, the new agent will be populated, select the agent and the ticket will be assigned to that agent.

![](/files/Screenshot%202025-04-21%20at%202.48.35%20AM.png)

As you can see the ticket is assigned to the agent.

### Replying to a ticket

You can reply to tickets in two ways:

![](/files/Reply%20buttons.png)

1. Reply Button at bottom corner:

When you click on the reply button, a editor pops up.
As soon as you click on it the "To" field automatically gets filled up by the person who has raised the ticket.

This editor has various functionalities like:

- Autocomplete on adding new emails
- CC & BCC
- Text formatting
- Adding videos & images to the reply
- Adding attachments
- Auto applying canned responsed (email button), read more about it from here.

![](/files/Reply.png)

1. Reply Icon on each email:

Sometimes in a long conversation, agents wants to reply on a particular "email" from the customer.

Agents can click on the "reply icon" on an email, and all the context related to that email will be shown in the text editor. This saves the agent the hastle to manulalyt copying & pasting the replies and formatting them.

![](/files/Screenshot%202025-04-22%20at%2012.45.07%20AM.png)

### Adding a private note (comment)

Sometimes you need to jot down a quick thought or share internal info without the customer seeing it. That’s where private notes come in handy. You can add context, loop in teammates, or leave reminders—all right inside the ticket, just for your team’s eyes.

Comments are for internal team, they will never be displayed to the customer.

![](/files/Commentfdcacc.gif)

When you click on comment, you can mention any agent from your system, whoever you mention will receive an Email saying "you were mentioned in this comment, on this ticket".



You can also **react** to **comments**, read more about it from [here.](https://docs.frappe.io/helpdesk/helpdesk/other-features/comment-reactions)



### Ticket Statuses in Frappe Helpdesk

In Frappe Helpdesk, each support ticket moves through one of the following four statuses, the SLA applied on the ticket is used.

![](/files/Screenshot%202025-04-22%20at%201.28.53%20AM.png)

1. 🔴 **Open**
2. 🔵 **Replied**
3. 🟢 **Resolved**
4. ⚫️ **Closed**

Each status interacts with SLA timers differently. Here's how:

---

#### 🔴 Open

- SLA timers are **active**.
- Both **First Response Time** and **Resolution Time** are tracked based on the SLA applied to the ticket.

---

#### 🔵 Replied

- Can be set by an agent only, usually is markd when an agent replies to the customer.
- The system checks **First Response SLA**:
  - ✅ **Successful** if the first reply was within SLA time.
  - ❌ **Failed** if it was late.
- While in this status:
  - **Resolution SLA** is **paused**.
  - It stays paused until the customer replies again.
- On customer reply:
  - The ticket moves back to **Open**.
  - Assigned agents are notified by email.

---

#### 🟢 Resolved

- Set when the issue is considered solved by the agent.
- SLA evaluation happens:
  - If **First Response** hasn’t been marked yet, it’s evaluated now.
  - Both **First Response** and **Resolution** are marked:
    - ✅ If done within time → **Successful**
    - ❌ If delayed → **Failed**
- Customers can still reply to reopen the ticket.
  - Ticket status changes back to **Open** on reply.

---

#### ⚫️ Closed

- Final stage of the ticket.
- SLA evaluation rules:
  - If **First Response** not already marked, it's evaluated.
  - **Resolution** SLA is always checked:
    - ✅ Within SLA time → **Successful**
    - ❌ Delayed → **Failed**
- If **First Response** was already marked (Success/Fail), only **Resolution SLA** is re-evaluated.
- A ticket can be **Closed** in two ways:
  1. **Customer closes the ticket** – They are prompted to leave feedback (you can make feedback mandatory or optional via the **HD Settings** doctype).
  2. **Agent manually closes the ticket** from their side.
- Once a ticket is closed:
  - The **customer can no longer reply**.
  - Only agents can **reopen**, **reply**, or **add private comments** in a ticket.

---

#### 🕒 What does “First Response marked” mean?

A ticket is marked for **First Response** when an agent replies for the first time, and the system checks if the reply was sent within the **First Response Time** defined in the SLA. This helps measure how quickly the team acknowledges a customer issue.

---

You can read more about SLA's from here. This page will tell you about how SLA is calculated and how you can create one.

Next we’ll explore assigning tickets to teams and managing tickets.