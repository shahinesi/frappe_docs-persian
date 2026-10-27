---
title: "Overview"
url: "https://docs.frappe.io/insights/data-sources/overview"
updated: "2026-01-13"
---



A data source is a connection to a database or a file that you want to query data from to create reports and dashboards. You can add multiple data sources to a single Insights instance.

## Adding a Data Source

To add a new data source, go to the **Data Sources** tab, and click on **New**.

![New Data Source](/files/insights-new-data-source.png)
*New Data Source*

## Supported Databases

### MySQL/MariaDB

You can connect to a MySQL or MariaDB database by providing the following details:

- The **hostname** of the server where your database is (leave empty for localhost)
- The **port** of the database server (leave empty for default port)
- The **database name** of the database you want to connect to
- The **username** you use for the database (preferably a user with read-only privileges)
- The **password** you use for the database

### PostgreSQL

You can connect to a PostgreSQL database by providing the following details:

- The **hostname** of the server where your database is
- The **port** of the database server
- The **database name** of the database you want to connect to
- The **username** you use for the database (preferably a user with read-only privileges)
- The **password** you use for the database

> If you are connecting to a remote database hosted on a different server, it is recommended to check 'Use Secure Connection'

> If your site is hosted on Frappe Cloud, check out these [instructions](#) get the database credentials.

## Other Data Sources

### CSV
You can upload a CSV file to Insights to query data from it. The CSV file should have a header row with column names. The uploaded file will be imported into a private DuckDB database file for querying. You can find the uploaded file data in the "Uploads" data source.

## Pre-configured Data Sources

Insights comes with two standard data sources:

- **Demo Data** - This data source contains a sample dataset of an ecommerce store. It has multiple tables that contain data about the orders, customers, products, etc.
- **Site Database** - This data source contains the data from your site's database. You can use this data source to analyze the data from your site.

## Syncing Database Tables

Once you have added a data source, Insights will automatically sync the tables of the database. You can click on the Data Source to view the list of tables.

You can also manually sync the schema by clicking on the **Update Tables** button under the 3-dot menu.

If you have connected to a database of a Frappe/ERPNext site, then you will also have an option to sync the links between tables by clicking on the **Update Table Links** button under the 3-dot menu. This will create links between tables based on the DocType metadata of the Frappe/ERPNext site. These links will be automatically used in queries when you join tables.

![Update Table](/files/insights-update-tables.png)


