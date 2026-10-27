---
title: "Assignment Rule"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/assignment-rule"
updated: "2026-05-28"
---

Assignment Rules automate the process of assigning tickets to specific agents based on predefined conditions. This streamlines your workflow and ensures tickets are directed to the most qualified agents for faster resolution and improved customer experience.

**Creating an Assignment Rule**
-------------------------------

1. **Open settings modal:** Click on top left dropdown and click "Settings"


![settings dropdown](/files/Screenshot%202025-08-19%20122908.png)

2. **Open Assignment Rules tab:** Click on "Assignment Rules" in the sidebar and click on "Create new"


![](/files/Screenshot%202025-08-19%20123014.png)

3. **Define the Rule:** Fill in the following mandatory fields:



- **Name:** Give your rule a descriptive name for easy identification.
- **Description:** Describe in short what does the rule do
- **Assignment condition:** Define condition using the conditions builder for the assignment rule, complex nested conditions are also supported 
![](/files/Screenshot%202025-08-19%20125226.png)

- **Users:** Choose the user(s) to whom tickets meeting the condition will be assigned.

**Ticket Routing**
---------

Assignment Rules offer two rules for assigning tickets:

1. **Auto-rotate:** This method distributes tickets evenly among the selected users. Each user receives one assignment at a time, and the cycle repeats once all users have been assigned.
2. **Assign by workload:** This method assigns tickets to the user with the least workload, ensuring a fair distribution and preventing any single user from being overloaded.


**Additional Fields**
---------------------

**Unassignment condition:** Define condition using the conditions builder for the unassignment rule, complex nested conditions are also supported. This will be used to unassign a ticket based on the condition specified

**Assignment Schedule:** Select the days you want the assignment rule to be active

---

By effectively utilizing Assignment Rules, you can significantly improve the efficiency and organization of your ticket management process.

