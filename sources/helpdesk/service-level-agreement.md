---
title: "Service Level Agreement"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/service-level-agreement"
updated: "2026-10-23"
---

A **Service Level Agreement (SLA)** is a formal agreement between a service provider and a customer that defines the level of service expected. It sets clear expectations by outlining key metrics such as response times, resolution times, service availability, and responsibilities. SLAs help ensure accountability by establishing measurable standards and consequences if those standards are not met. 
In helpdesk systems, SLAs are critical for tracking how quickly and efficiently support teams handle customer issues, maintaining service quality, and improving customer satisfaction.

Creating an SLA
---------------

1. **Go to settings:** Click on logo at top left corner and click settings option
![](/files/Screenshot%202025-07-03%20110517.png)

2. **SLA Policies:** Click on "SLA Policies" in the left sidebar and click "New" at top right corner
![](/files/Screenshot%202025-07-03%20110645.png)

3. **Define SLA Details:** Fill the form with all required details
![](/files/Screenshot%202025-07-03%20111322.png)

Each SLA is linked to the `HD Ticket` doctype and includes:

- **Default Priority**: Used when a ticket doesn’t have a priority set.
- **Enabled**: Ensures the SLA is active.
- **Valid From / To**: Optional start and end date for this SLA.

---

### Response and Resolution

You can define different **First Response Time** and **Resolution Time** for each [priority](https://docs.frappe.io/helpdesk/ticket-priority):

| Priority | First Response Time | Resolution Time |
|----------|---------------------|-----------------|
| Low      | 24h                 | 72h             |
| Medium   | 8h                  | 24h             |
| High     | 1h                  | 4h              |
| Urgent   | 30m                 | 2h              |


### Status-based Triggers

#### SLA Fulfilled On:
These statuses indicate the SLA has been fulfilled:

- **Resolved**
- **Closed**

#### SLA Paused On:
These statuses pause the SLA timer:

- **Replied**

When a ticket is in "Replied" state, the resolution timer is paused until the customer responds.

---

### Working Hours

SLAs respect your business hours, which you can define in the **Working Hours** section:

| Workday    | Start Time | End Time   |
|------------|------------|------------|
| Monday     | 10:00 AM   | 6:00 PM    |
| Tuesday    | 10:00 AM   | 6:00 PM    |
| Wednesday  | 10:00 AM   | 6:00 PM    |
| Thursday   | 10:00 AM   | 6:00 PM    |
| Friday     | 10:00 AM   | 6:00 PM    |

Tickets created or due outside of these hours will have their SLA timers paused until working hours resume.

---

---

### Holiday List

You can link a **Holiday List** to exclude specific dates from SLA time tracking (e.g., public holidays). SLA timers will automatically pause on the dates included in the selected Holiday List. 

#### Creating an Holiday list

1. **Go to settings:** Click on logo at top left corner and click settings option
![](/files/Screenshot%202025-07-03%20110517.png)
2. **Business holidays:** Click on "Business holidays" in the left sidebar and click "New" at top right corner
![](/files/Screenshot%202025-07-03%20121953.png)
3. **Define Business holidays Details:** Fill the form with all required details
![](/files/Screenshot%202025-07-03%20122153.png)

##### Recurring holidays
![](/files/Screenshot%202025-07-03%20133310.png)
Recurring holidays such as weekends can be added from Recurring holidays section, these holidays will be auto generate for duration of "From date" and "To date" set for the respective holiday list

##### Calendar view for holidays
![](/files/Screenshot%202025-07-03%20133620.png)
Holidays and recurring holiday can be viewed from calendar view, where holiday dates are represented by light yellow and orange background, recurring holidays are represented by grey background.
You can click on any date on the calendar to add holiday directly or by clicking on "Add Holiday" button at the bottom of the page

##### List view for holidays
![](/files/Screenshot%202025-07-03%20134234.png)
By clicking on list icon above calendar view you can toggle between calendar and list view

Example:  
If a holiday falls on a Tuesday, and a ticket is created on Monday evening with an 8h SLA, the SLA timer will resume on Wednesday morning (assuming Tuesday is a holiday).

---


### SLA Assignment Conditions

Frappe Helpdesk lets you assign SLAs to tickets dynamically using **conditions**.

An SLA applies to a ticket only when **both** are true:

1. its **condition** matches the ticket, and
2. its priority table **includes the ticket's priority**.

A policy whose condition matches but which does not list the ticket's priority is skipped, and the next one is tried.

#### Condition-based SLA

Each SLA can define a condition using the UI in Assignment conditions section. These conditions are evaluated against ticket fields using the `doc` object.

**Example Condition:**

In the image below, conditions defined in the UI will be automatically converted into the condition string and store it in the backend
![](/files/Screenshot%202025-07-03%20112s024.png)
Converted condition string:
```python
doc.agent_group == 'Billing' and doc.ticket_type == 'Bug' and (doc.custom_app == 'FC' or doc.resolution_date == '2025-07-22 11:41:31' or doc.priority == 'Low')
```
Also as you can see in the above image, at any level at a time, same type of conjunction (and,or) can be used, one level cannot have both the conjunctions at the same time.

#### Rank

When more than one SLA matches, **Rank** decides which is tried first. A lower rank wins. `0` means unranked and is applied last, so an unranked policy never overtakes one you have deliberately ranked. Policies on the same rank are tried oldest first, so adding a new SLA never silently takes over tickets an existing one already handles.

The SLA Policies list in Settings is sorted the same way, so what you see top to bottom is the order Helpdesk tries them in.

#### Default SLA

An SLA marked **Default** needs no condition and is always considered **last**, after every conditional policy. It still only applies if it includes the ticket's priority.

Marking an SLA as Default is optional — you can untick it, disable it, or delete it.

#### Tickets without an SLA

If no policy matches, the ticket has no SLA: no first response or resolution target is set. This is a normal state, not an error.

A ticket can also lose its SLA later — its priority changes to one the policy does not cover, its condition stops matching, or the policy is disabled. The targets are cleared on the ticket's next update, but a breach that already happened is kept, so a ticket that failed still shows **Failed**.

If it matches a policy again later, targets are recalculated from when the SLA first attached — the clock does not restart.

### How is SLA calclulated?



Some definitions:

1. First Response Due: The time at which the first response should be made, considering working hours and holidays.
2. Resolution Due: The time by which the ticket should be resolved, also considering working hours and holidays.

While calculating these 2, the factors which are considers are:
1. Working Hours
2. Holiday list
3. Total hold time of the ticket (for how long the ticket was in "Replied" state)

Some points we are assuming before doing calculations

1. Working Hours: The company operates between 10:00 AM and 6:00 PM from Monday to Friday.
2. Holiday List: Every Saturday & Sunday is a holiday, and SLA timers pause during holidays.


### Scenario 1: Ticket Created with High priority on a Tuesday (working day)
#### Ticket Created: Tuesday, 5:00 PM  
- **SLA for First Response**: 4 hours (High priority)  
- **SLA for Resolution**: 8 hours (High priority)  
- **Holiday List**: All Saturdas & Sundays are holidays.  
- **Working Hours**: 10:00 AM to 6:00 PM (Monday to Friday)  
- **Status**: `Resolved` (SLA fulfilled once status changes)

#### First Response Calculation:
- **First Response Time** is 4 hours.
- Created at 5:00 PM on Tuesday.
- The timer will run for 1 hour on Tuesday (5:00 PM to 6:00 PM).
- The remaining 3 hours will be counted from Wednesday, starting at 10:00 AM.
- **First Response Due**: Wednesday, 1:00 PM.

#### Resolution Calculation:
- **Resolution Time** is 8 hours.
- 1 hour used from 5:00 PM to 6:00 PM on Tuesday.
- The remaining 7 hours will be counted from Wednesday, starting at 10:00 AM.
- **Resolution Due**: Wednesday, 5:00 PM.

---



### Scenario 2: Ticket Created Before a Holiday (On Friday)

#### Ticket Created: Friday, 4:00 PM  

- **SLA for First Response**: 8 hours (Medium priority)  
- **SLA for Resolution**: 24 hours (Medium priority)  
- **Holiday List**: All Saturdas & Sundays are holidays.  
- **Working Hours**: 10:00 AM to 6:00 PM (Monday to Friday)  
- **Status**: `Replied` (Resolution timer paused until customer response)

#### First Response Calculation:
- **First Response Time** is 8 hours.
- Created at 4:00 PM on Friday.
- The timer will run for 2 hours on Friday (4:00 PM to 6:00 PM).
- The remaining 6 hours will be counted from Monday, starting at 10:00 AM.
- **First Response Due**: Monday, 4:00 PM.

#### Resolution Calculation:
- **Resolution Time** is 24 hours.
- 2 hours used from 4:00 PM to 6:00 PM on Friday.
- The remaining 22 hours will be counted from Monday, starting at 10:00 AM.
- **Resolution Due**: Wednesday, 4:00 PM.

---

### Scenario 3: Ticket Created on Saturday(Holiday) with Low Priority.
#### Ticket Created: Saturday, 3:00 PM  
- **SLA for First Response**: 8 hours (Low priority)  
- **SLA for Resolution**: 24 hours (Low priority)  
- **Holiday List**: All Saturdas & Sundays are holidays.  
- **Working Hours**: 10:00 AM to 6:00 PM (Monday to Friday)  
- **Status**: `Replied` (Resolution timer paused until customer response)

#### First Response Calculation:
- **First Response Time** is 8 hours.
- Created at 3:00 PM on Saturday.
- Saturday is a holiday, so no hours are counted on that day.
- The first 8 hours will count from **Monday**, starting at **10:00 AM**.
- The full 8 hours will be completed by **Monday at 6:00 PM**.
- **First Response Due**: Monday, 6:00 PM.

#### Resolution Calculation:
- **Resolution Time** is 24 hours.
- Since the first response is completed by **Monday at 6:00 PM**, the resolution timer will begin immediately after that.
- The full 24 hours will be counted from **Tuesday at 10:00 AM**, considering the holiday on Sunday.
- The full 24 hours will complete by **Wednesday at 6:00 PM**.
- **Resolution Due**: Wednesday, 6:00 PM.

---



### All Scenarios in tabular form:

| **Scenario** | **Ticket Created**    | **First Response Due** | **Resolution Due**   |
|--------------|-----------------------|------------------------|----------------------|
| **1**        | Tuesday, 5:00 PM      | Wednesday, 1:00 PM     | Wednesday, 5:00 PM   |
| **2**        | Friday, 4:00 PM       | Monday, 4:00 PM        | Wednesday, 4:00 PM   |
| **3**        | Saturday, 3:00 PM     | Monday, 6:00 PM        | Wednesday, 6:00 PM   |

---


















