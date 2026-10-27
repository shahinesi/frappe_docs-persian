---
title: "Overview"
space: "Insights"
url: "https://docs.frappe.io/insights/permissions-access-control/overview"
updated: "2026-01-06"
---

#### This guide explains how to control data access in Insights using teams, permissions and row-level security

> Note: Make sure you have `Insights Admin` role in order to configure user permissions 
> 
> 

Insights provides three levels of access control:

1. **Application-level**: Role-based access (Insights Admin, Insights User)
2. **Resource-level**: Team-based access to data sources, tables, dashboards, charts
3. **Row-level**: Filter-based restrictions on table data (e.g., show only assigned customers)

### Permission Hierarchy

```
User → Team(s) → Resources (Data Sources/Tables) → Row Filters
```

- Users are assigned to one or more teams
- Teams are granted access to specific resources
- Resources can have row-level filters applied
