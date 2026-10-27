---
title: "Add Data Source"
space: "Insights"
url: "https://docs.frappe.io/insights/connect-data/add-data-source"
updated: "2026-01-06"
---

## Prerequisites
Before connecting a data source, make sure you have the following information (ask your database admin if needed):
Field
Description
Host
Server address (e.g. db.mycompany.com or localhost)
Port
Connection port (e.g. 3306 for MariaDB, 5432 for PostgreSQL)
Database Name
The database to connect to
Username
Login username
Password
Login password
SSL (optional)
Whether to use a secure connection

> Note: Make sure you have `Insights Admin` role in order to add a database as datasource
> 
> 

## Quick Start: Adding a Data Source

### Step 1: Access Data Sources
Click Data Sources in the sidebar.

Click + Add Data Source.

Choose your database type.

### Step 2: Enter Connection Details

For example, connecting to MariaDB:
Title: A friendly name (e.g. “Production Database”)


Host: Server address (localhost, db.mycompany.com, etc.)


Port: Usually 3306 for MariaDB (prefilled)

Database Name: Exact database name

Username / Password: Database credentials

Use SSL: Check if required

### Step 3: Add and Test

Click Add Data Source once details are entered.

Insights will save your connection, load tables, and make them available for querying.

### CSV / Excel Upload
Ideal for quick data imports, smaller datasets, or testing Insights without a database.
How to Upload:
Click + Add Data Source → Upload CSV or Excel

Choose or drag-and-drop the file

Preview data (check columns and types)

Edit table name if needed

Click Import Table

Supported Formats:
* CSV (.csv)
* Excel (.xlsx)

File size limit: 50MB (check with admin)

Tips:
First row should be headers
Keep column names simple
Use consistent date formats
Remove empty rows at the end

### Site Database (Auto-Configured)

What is this? 

If you're running Insights on the same site as other Frappe backend apps, it automatically connects to your site's database. This gives you instant access to all your ERPNext, Frappe or custom app data!

Features:

Auto-configured, always active
No credentials needed
All DocTypes available as tables
Relationship links preconfigured

#### Common Issues:

##### Connection refused: 
Check host and port

##### Access denied: 
Verify username and password

##### Unknown database: 
Check spelling