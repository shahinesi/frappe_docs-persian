---
title: "Ticket Status"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/ticket-status"
updated: "2026-10-23"
---

## Overview
The `HD Ticket Status` DocType defines the lifecycle states of helpdesk tickets in the system. It lets administrators control how statuses appear to agents and end-users, how SLAs behave depending on the status, and how statuses are visually represented (e.g., with colors). This DocType helps keep ticket handling, SLA tracking, and reporting consistent.


## How to Navigate to **HD Ticket Status**
1. Go to **Desk**.
2. Click on **Search**, type **HD Ticket Status**, and open the first result.
3. If you can’t find it, open this URL directly in your browser:  
   `<site_name>/app/hd-ticket-status`


## Key Properties

| Field | Type | Description |
|---|---|---|
| **enabled** | Check (Default: 1) | Whether the status is active and available for use. |
| **label_agent** | Data (Required, Unique) | Internal name of the status shown to helpdesk agents. |
| **order** | Int | Sequence in which statuses appear in lists. |
| **different_view** | Check | If enabled, end users will see a different label than agents. |
| **label_customer** | Data | Label shown to end users (mandatory when `different_view` is enabled). |
| **category** | Select (Open / Paused / Resolved) | Controls SLA timer behavior: Open = continues, Paused = paused, Resolved = stops. |
| **color** | Select | Optional color tag for visually distinguishing statuses. |



Setting up a ticket status:
![](/files/Screenshot%202025-08-25%20at%2012.42.11%E2%80%AFPM.png)


---


## Helpdesk Settings (HD Settings)
Global settings define status behavior when tickets are created or reopened:

- **Default Ticket Status** — Status assigned when a ticket is first created.  
- **Reopen Ticket Status** — Status assigned when a ticket is reopened.

These apply system-wide unless an SLA overrides them.


![](/files/HD%20Settings.png)



## Per-SLA Level Configuration
You can set **Default** and **Reopen** statuses per SLA. Preference order:

1. **SLA-level configuration** (highest priority)  
2. **HD Settings** (fallback)

This allows different SLAs (e.g., team A vs team B) to have distinct creation/reopen workflows while maintaining a global default.


![](/files/HD%20SLA.png)

---

## Permissions
Only users with the **System Manager** / **Agent Manager** role can create, modify, or delete ticket statuses.

Available permissions: Create, Read, Write, Delete.

---


## Behavioural Rules
- **Closed** is read-only: only **color** and **order** can be changed.  Closed status is also of the category "Resolved". It can't be deleted.
- If **different_view** is enabled, `label_customer` is mandatory.  
- **category** directly affects SLA timers (Open = continues, Paused = paused, Resolved = stops).
- The system must always have at least one enabled status in each category (Open, Paused, and Resolved). 


This is how status looks like on the Agent Side:


![](/files/TV.png)



