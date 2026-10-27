---
title: "Data Store"
url: "https://docs.frappe.io/insights/data-sources/data-store"
updated: "2026-01-13"
---

By default, Insights retrieves data by sending queries directly to the connected database. While this method is effective in most situations, there are certain scenarios where it can become limiting.

- **Slow or Failing Queries**: When there are multiple joins between tables, and the columns used for joining lack proper indexes, the query may take a long time to execute or may even fail.
  
- **Impact on Primary Database Performance**: If the connected database is a primary database, long-running queries can negatively affect its performance, potentially leading to database downtime.
  
- **Limitations in Cross-Database Queries**: It is not possible to combine data from different databases until a data warehouse is established.


To tackle these challenges, Insights provides an integrated **Data Store** feature. This feature enables you to store data from connected databases in a private DuckDB database, specifically designed for analytical workloads.

### Enable Data Store

For each query, you can choose to enable the Data Store. When you activate this option, all tables referenced in the query will be stored in the Data Store. The data is saved in Parquet files, which are highly compressed files optimized for analysis. Enabling the Data Store can lead to a performance improvement, with queries running 5 to 10 times faster.

![Enable Data Store](/files/insights-enable-data-store654bf3.png)

Once you have enabled the Data Store for a query, the data from the tables will take some time to sync. During this process, you may not see the data until the sync is completed. You can check the status of the syncing job in the **Insights Table Import Log** doctype.

Please note that only 1 million rows are imported from the table to ensure optimal performance.

### Benefits

- **Improved Query Performance**: Queries run 5-10 times faster when the Data Store is enabled. This is due to the optimized storage format and the efficient querying capabilities of DuckDB.
- **Cross-Database Joins**: You can store tables from different databases in the Data Store and join them in your queries.
- **Reduced Impact on Primary Database**: By storing data in the Data Store, you reduce the load on the primary database, ensuring its performance is not affected.
- **Enhanced Query Capabilities**: The Data Store enables you to perform complex queries that may not be feasible with direct database queries.