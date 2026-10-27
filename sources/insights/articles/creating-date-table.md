---
title: "Creating Date Table"
space: "Insights"
url: "https://docs.frappe.io/insights/articles/creating-date-table"
updated: "2026-03-03"
---

## Creating a Date Table with SQL Editor

A date table is useful for time-based charts or reports where your dataset does not contain continuous dates.

You can generate one directly in the SQL Editor without creating tables in your database.

> **Note:** This method works only with **MariaDB 10.0+**, which provides built-in sequence tables.

---

## Method

MariaDB includes sequence tables such as:

```
seq_0_to_364
seq_0_to_999
seq_0_to_29584
```

These tables contain sequential numbers (`seq`) starting from `0`.  
Each number can be converted into a date by adding it to a start date.

---

## Example: Generate Dates for One Year

```sql
SELECT
    d AS Date,
    YEAR(d) AS Year,
    MONTH(d) AS Month,
    MONTHNAME(d) AS MonthName,
    CONCAT('Q', QUARTER(d)) AS Quarter,
    WEEK(d, 1) AS Week,
    DAYNAME(d) AS DayOfWeek,
    DAYOFWEEK(d) IN (1,7) AS IsWeekend
FROM (
    SELECT DATE('2026-01-01') + INTERVAL seq DAY AS d
    FROM seq_0_to_364
) t;
```

**How it works**

- `seq_0_to_364` generates 365 rows
- Each row adds `seq` days to the start date
- Result: one row per calendar date

---

## Custom Time Period

Use a larger sequence and filter the required range:

```sql
SELECT d AS Date
FROM (
    SELECT DATE('1970-01-01') + INTERVAL seq DAY AS d
    FROM seq_0_to_29584
) t
WHERE d BETWEEN '2026-01-01' AND '2026-12-31';
```

This works with read-only database connections and can be reused across Insights queries.