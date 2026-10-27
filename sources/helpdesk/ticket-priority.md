---
title: "Ticket Priority"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/ticket-priority"
updated: "2026-10-23"
---

## Overview

The `HD Ticket Priority` DocType defines the urgency levels used to classify helpdesk tickets. Priority determines which tickets need faster attention and, together with the [SLA](https://docs.frappe.io/helpdesk/service-level-agreement), drives the **first response** and **resolution time** targets for every ticket.

## How to Navigate to **HD Ticket Priority**

1. Go to **Desk**.
2. Click on **Search**, type **HD Ticket Priority**, and open the first result.
3. If you can’t find it, open this URL directly in your browser:
  `<site_name>/app/hd-ticket-priority`

## Default Priorities

Helpdesk ships with four priorities out of the box, ordered from most to least urgent:

- Urgent
- High
- Medium
- Low

## Key Properties


| Field           | Type                                                    | Description                                                                      |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **name**        | Data (set on creation)                                  | The priority’s name shown to agents (e.g. `Urgent`, `High`).                     |
| **level**       | Select — Urgent / High / Medium / Low (Default: Medium) | Severity level used to rank the priority and render its icon in the ticket list. |
| **description** | Small Text                                              | Optional note describing when this priority should be used.                      |
| **disabled**    | Check (Default: 0)                                      | If enabled, the priority is hidden and can no longer be assigned to tickets.     |


## Adding a Ticket Priority

1. Navigate to **Desk** and open **HD Ticket Priority** (see above).
2. Click **+ Add HD Ticket Priority**.
3. Enter a **name**, choose a **level**, and optionally add a **description**.
4. Save.

## Why it's important

Ticket Priority is closely tied to [SLA](https://docs.frappe.io/helpdesk/service-level-agreement) (Service Level Agreement) behavior. When a ticket is created, an SLA is applied to it if one matches, and each SLA defines a different **first response** and **resolution time** for every priority.

If the ticket priority is updated later, the SLA is recalculated based on the new priority, and the **first response** and **resolution time** are updated accordingly. If no SLA covers the new priority, the ticket is left without an SLA and its targets are cleared.

> **A priority only gets targets from the SLAs that list it.**  
> An SLA sets response and resolution targets *per priority*, and applies to a ticket only if it includes that ticket's priority. A priority that no SLA lists is still usable — tickets on it simply have no SLA and no targets. When you add a new priority, add it to whichever SLAs should cover it.

## Use Cases

- Automatically escalate critical issues by assigning higher priorities.
- Control response deadlines with different SLAs for each priority level.
- Trigger custom workflows or automations using server scripts based on priority.