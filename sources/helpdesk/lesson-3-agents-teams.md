---
title: "Agents & Teams"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/lesson-3-agents-teams"
updated: "2026-01-06"
---

In Helpdesk, the way tickets are handled depends on three key concepts: Roles, Agents, and Teams. 
### 1. Roles

Roles define what a user can do in the system. There are three main roles:

- **Admin**  
  Has full access across the system — including all tickets, settings, teams, and configurations.

- **Agent Manager**  
  - Work on tickets  
  - Delete tickets  
  - Create custom views and manage [public views](https://docs.frappe.io/helpdesk/custom-views) 
  - Manage Knowledge Base articles
  - Manage Dashboard and get an overview of other agents in your team

- **Agent**  
  - Work on tickets  
  - Create custom views and manage private views
  - Manage Knowledge Base articles
  - Manage Dashboard only for themselves

These roles help control permissions and ensure each user sees and does only what they’re meant to.

---

### 2. Agents

Agents are the users responsible for working on support tickets. They’re assigned to tickets directly or through teams. Read [more](https://docs.frappe.io/helpdesk/agent) about agents.

- They can belong to one or more teams.
- Their workload is managed either manually or automatically through assignment rules.

---

### 3. Teams (Agent Groups)

Teams, also referred to as **Agent Groups** in single ticket view, are used to group agents for ticket distribution and assignment.

- A team consists of one or more agents.
- When a new team is created, an [Assignment Rule](https://docs.frappe.io/helpdesk/assignment-rule) is automatically created in the system.
- This rule ensures that when a ticket is assigned to that team, the system will pick one of the team members and assign the ticket to them — based on round-robin, load balancing, or some other logic.

You can manage the members of a team anytime — adding or removing agents immediately affects who gets assigned tickets.


Helpdesk creates two teams for you by default. Try adding members in each team and then try to assign a ticket to another team. You will notice that on changing the team (Agent Group), the ticket gets re-assigned to the agent of the selected team.


![](/files/Auto%20Assignment.gif)

#### Custom Assignment Logic

You can also define your own assignment logic using [Server Scripts](https://docs.frappe.io/framework/user/en/desk/scripting/server-script).

For example, assign tickets to different teams based on priority:

This server script below ensures that based on priority, the teams & agents are assigned automatically.

Here is an example of auto agent group assignment:


![](/files/Server%20Script%20Assg.gif)


![](/files/Screenshot%202025-04-22%20at%205.08.05%20PM.png)

```
if doc.priority == "Low":
    doc.agent_group = "Team A"
else:
    doc.agent_group = "Team B"
```


Now let us understand how you can reduce your ticket count and provide your customers with resolution faster using Knowledge Base.


