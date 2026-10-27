---
title: "Queries"
url: "https://docs.frappe.io/insights/workbooks/queries"
updated: "2026-01-13"
---

A query contains a set of instructions to retrieve and manipulate data from a data source. You can perform operations such as filtering, grouping, and joining to obtain the desired results.

### Creating a Query
When you create a new workbook, a query is automatically added, and a modal to select the source table appears.

![Source Table Selector](/files/insights-new-query.png)

After selecting a source table, the first 100 rows will appear, with a single **Source** operation displayed on the right. Additional steps can be added by clicking **Add Operation**.

### Operations

Operations are transformation steps applied to the data. Each builds on the result of the previous step, allowing complex queries to be built progressively.

- **Source**: Retrieves data from the source table.
- **Join Table**: Combines data with another table based on a common value.
- **Append Table**: Adds rows from another table with matching columns.
- **Filter Rows**: Filter rows based on a specified condition.
- **Choose Columns**: Select columns to include in the results.
- **Add New Column**: Creates a new column using an expression.
- **Group & Summarise**: Groups data by a column and aggregates values.
- **Custom Operation**: Write custom Ibis expressions for complex transformations.

All operations you perform are displayed in the **right panel**. You can **click** on any operation to **restore** the query to the state it was in when that operation was executed. To **modify** the active operation, simply **double-click** on it. Additionally, you have the option to add a new operation after the active one.

![Query Operations](/files/insights-query-operations49c4d1.png)
*Query Operations*

Let's go through each operation in detail:

#### Select Source

The first step in a query is to choose a source table. If you have already created a query in the workbook, you can also use that query as your source table. Once you select the source table, you will see the first 100 rows displayed from that table.

#### Choose Columns

After selecting the source table, you can choose which columns you want to include in the results. You can rearrange the columns by dragging them to your preferred order. If you remove a column, it will no longer be available for any subsequent operations. However, you can return to this step at any time to include the column again if needed.

![Select](/files/insights-operation-select2384a3.png)

#### Filter Rows

To filter rows based on specific criteria, you can use a filter operation. First, ensure that the column you want to filter is included in the current results; if it's not, you may need to adjust previous operations to include it.

You can apply multiple filters simultaneously, using either AND or OR logical operators. Additionally, you have the option to create custom expressions for filtering rows. To do this, click on the three-dot menu in the filter row and select "Convert to Expression."

![Filter](/files/insights-operation-filter.png)

You can also apply filters directly from the three-dot menu located in the column header.


#### Join Table

You can join a table to pull data from another table. You need to make sure that there is a column with common values in both tables to join them. Select the matching columns from both tables to join or click on the curly braces icon to write a custom join condition. 

You can perform following types of joins:

- **Inner Join**: Keep only rows that have matching values in both tables
- **Left Join**: Keep all existing rows and include matching rows from the new table
- **Right Join**: Keep all rows from the new table and include matching rows from the existing table
- **Full Join**: Keep all rows from both tables

Finally, you can select the columns you want to include in the results from the joined table.

![Join](/files/insights-operation-join.png)

#### Append Table

If you have two tables that contain similar columns and data, you can combine the data from one table into the other. The resulting table will include only the columns that are common to both tables. You also have the option to remove duplicates by selecting the "Drop Duplicates" checkbox.

#### Add New Column

You can calculate a new column based on current columns by adding a new column operation. You can write custom expressions to calculate the new column. You can also use the available functions to perform calculations.

![Mutate](/files/insights-operation-mutate.png)

#### Group & Summarise

You can group the data based on a column and aggregate the values. You can choose the columns you want to group by and the columns you want to aggregate. You can perform the following types of aggregations: count, count distinct, sum, avg, min, max.

#### Custom Operation

You can write custom ibis expressions to perform complex operations that are not possible with the available operations or functions. You can write any valid ibis expression in the editor. You can also use the available functions to perform calculations.


### Expressions

The expression/formula language in Insights is based on python syntax. The underlying library used for query building is `ibis`, you can check the documentation [here](https://ibis-project.org/tutorials/ibis-for-sql-users) to know more.

Following are the list of helper functions that make it easier to write expressions in Insights:

#### Aggregate Functions

1. Count
   - Syntax: `count(column)`
   - Description: Returns the count of non-null values in the column.
   - Example: `count(sales)`
   - Returns: 100

2. Count Distinct
   - Syntax: `distinct_count(column)`
   - Description: Returns the count of distinct values in the column.
   - Example: `distinct_count(customer_id)`
   - Returns: 50

3. Sum
   - Syntax: `sum(column)`
   - Description: Returns the sum of values in the column.
   - Example: `sum(sales)`
   - Returns: 10000

4. Average
   - Syntax: `avg(column)`
   - Description: Returns the average of values in the column.
   - Example: `avg(sales)`
   - Returns: 100

5. Minimum
	 - Syntax: `min(column)`
	 - Description: Returns the minimum value in the column.
	 - Example: `min(sales)`
	 - Returns: 50

6. Maximum
	 - Syntax: `max(column)`
	 - Description: Returns the maximum value in the column.
	 - Example: `max(sales)`
	 - Returns: 200

7. Group Concat
	 - Syntax: `group_concat(column)`
	 - Description: Concatenates the values in the column.
	 - Example: `group_concat(product_name)`
	 - Returns: "Product A, Product B, Product C"

8. Sum if
	 - Syntax: `sum_if(condition, column)`
	 - Description: Returns the sum of values in the column that satisfy the condition.
	 - Example: `sum_if(sales > 1000, sales)`
	 - Returns: 5000

9. Count if
	 - Syntax: `count_if(condition, column)`
	 - Description: Returns the count of values in the column that satisfy the condition.
	 - Example: `count_if(sales > 1000, sales)`
	 - Returns: 5

10. Distinct Count if
	 - Syntax: `distinct_count_if(condition, column)`
	 - Description: Returns the count of distinct values in the column that satisfy the condition.
	 - Example: `distinct_count_if(sales > 1000, customer_id)`
	 - Returns: 3

#### Conditional Functions

1. If Else
	 - Syntax: `if_else(condition, true_value, false_value)`
	 - Description: Returns the true_value if the condition is true, else returns the false_value.
	 - Example: `if_else(sales > 1000, "High", "Low")`
	 - Returns: "High"

2. Case
	 - Syntax: `case(condition1, value1, condition2, value2, ..., default_value)`
	 - Description: Returns the value corresponding to the first true condition. If no condition is true, returns the default_value.
	 - Example: `case(sales > 1000, "High", sales > 500, "Medium", "Low")`
	 - Returns: "High"

3. Coalesce
	 - Syntax: `coalesce(column1, column2, ..., default_value)`
	 - Description: Returns the first non-null value from the columns. If all columns are null, returns the default_value.
	 - Example: `coalesce(product_name, product_code, "Unknown")`
	 - Returns: "Product A"

#### String Functions

1. Lower
	 - Syntax: `lower(column)`
	 - Description: Converts the column values to lowercase.
	 - Example: `lower(product_name)`
	 - Returns: "product a"

2. Upper
	 - Syntax: `upper(column)`
	 - Description: Converts the column values to uppercase.
	 - Example: `upper(product_name)`
	 - Returns: "PRODUCT A"

3. Concat
	 - Syntax: `concat(column1, column2, ..., separator)`
	 - Description: Concatenates the columns with the separator.
	 - Example: `concat(first_name, last_name, " ")`
	 - Returns: "John Doe"

4. Replace
	 - Syntax: `replace(column, old_value, new_value)`
	 - Description: Replaces the old_value with the new_value in the column.
	 - Example: `replace(product_name, "A", "B")`
	 - Returns: "Product B"

5. Substring
	 - Syntax: `substring(column, start, length)`
	 - Description: Returns a substring of the column starting from the start index with the specified length.
	 - Example: `substring(product_name, 0, 7)`
	 - Returns: "Product"

6. Contains
	 - Syntax: `contains(column, substring)`
	 - Description: Returns true if the column contains the substring, else false.
	 - Example: `contains(product_name, "Product")`
	 - Returns: True

7. Not Contains
	 - Syntax: `not_contains(column, substring)`
	 - Description: Returns true if the column does not contain the substring, else false.
	 - Example: `not_contains(product_name, "A")`
	 - Returns: False

8. Starts With
	 - Syntax: `starts_with(column, prefix)`
	 - Description: Returns true if the column starts with the prefix, else false.
	 - Example: `starts_with(product_name, "Product")`
	 - Returns: True

9. Ends With
	 - Syntax: `ends_with(column, suffix)`
	 - Description: Returns true if the column ends with the suffix, else false.
	 - Example: `ends_with(product_name, "A")`
	 - Returns: True

10. Length
	 - Syntax: `length(column)`
	 - Description: Returns the length of the column.
	 - Example: `length(product_name)`
	 - Returns: 10

#### Numeric Functions

1. Abs
	 - Syntax: `abs(column)`
	 - Description: Returns the absolute value of the column.
	 - Example: `abs(sales)`
	 - Returns: 100

2. Round
	 - Syntax: `round(column, decimals)`
	 - Description: Rounds the column to the specified number of decimals.
	 - Example: `round(sales, 2)`
	 - Returns: 100.50

3. Floor
	 - Syntax: `floor(column)`
	 - Description: Returns the largest integer less than or equal to the column.
	 - Example: `floor(sales)`
	 - Returns: 100

4. Ceil
	 - Syntax: `ceil(column)`
	 - Description: Returns the smallest integer greater than or equal to the column.
	 - Example: `ceil(sales)`
	 - Returns: 101


#### Date Functions

1. Year
	 - Syntax: `year(column)`
	 - Description: Returns the year part of the date column.
	 - Example: `year(order_date)`
	 - Returns: 2022

2. Quarter
	 - Syntax: `quarter(column)`
	 - Description: Returns the quarter part of the date column.
	 - Example: `quarter(order_date)`
	 - Returns: 3

3. Month
	 - Syntax: `month(column)`
	 - Description: Returns the month part of the date column.
	 - Example: `month(order_date)`
	 - Returns: 10

4. Week of Year
	 - Syntax: `week_of_year(column)`
	 - Description: Returns the week of the year of the date column.
	 - Example: `week_of_year(order_date)`
	 - Returns: 41

5. Day of Year
	 - Syntax: `day_of_year(column)`
	 - Description: Returns the day of the year of the date column.
	 - Example: `day_of_year(order_date)`
	 - Returns: 288

6. Day of Week
	 - Syntax: `day_of_week(column)`
	 - Description: Returns the day of the week (0-6) of the date column.
	 - Example: `day_of_week(order_date)`
	 - Returns: 4

7. Day
	 - Syntax: `day(column)`
	 - Description: Returns the day part of the date column.
	 - Example: `day(order_date)`
	 - Returns: 15

8. Hour
	 - Syntax: `hour(column)`
	 - Description: Returns the hour part of the date column.
	 - Example: `hour(order_date)`
	 - Returns: 10

9. Minute
	 - Syntax: `minute(column)`
	 - Description: Returns the minute part of the date column.
	 - Example: `minute(order_date)`
	 - Returns: 30

10. Second
	 - Syntax: `second(column)`
	 - Description: Returns the second part of the date column.
	 - Example: `second(order_date)`
	 - Returns: 45

11. Microsecond
	 - Syntax: `microsecond(column)`
	 - Description: Returns the microsecond part of the date column.
	 - Example: `microsecond(order_date)`
	 - Returns: 500000

12. Date Diff
	 - Syntax: `date_diff(column1, column2, unit)`
	 - Description: Returns the difference between two date columns in the specified unit. Units can be "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond".
	 - Example: `date_diff(order_date, delivery_date, "day")`
	 - Returns: 5

13. Format Date
	 - Syntax: `format_date(column, format)`
	 - Description: Formats the date column according to the specified format. The format should be a valid ANSI `strftime` format.
	 - Example: `format_date(order_date, "%Y-%m-%d")`
	 - Returns: "2022-10-15"

15. Now
	 - Syntax: `now()`
	 - Description: Returns the current date and time.
	 - Example: `now()`
	 - Returns: "2022-10-15 10:30:00"

16. Today
	 - Syntax: `today()`
	 - Description: Returns the current date.
	 - Example: `today()`
	 - Returns: "2022-10-15"



#### Boolean Functions

1. Is in
	 - Syntax: `is_in(column, value1, value2, ...)`
	 - Description: Returns true if the column value is in the list of values, else false.
	 - Example: `is_in(product_name, "Product A", "Product B")`
	 - Returns: True

2. Is Not in
	 - Syntax: `is_not_in(column, value1, value2, ...)`
	 - Description: Returns true if the column value is not in the list of values, else false.
	 - Example: `is_not_in(product_name, "Product A", "Product B")`
	 - Returns: False

3. Is Set
	 - Syntax: `is_set(column)`
	 - Description: Returns true if the column value is not null, else false.
	 - Example: `is_set(product_name)`
	 - Returns: True

4. Is Not Set
	 - Syntax: `is_not_set(column)`
	 - Description: Returns true if the column value is null, else false.
	 - Example: `is_not_set(product_name)`
	 - Returns: False

5. Is Between
	 - Syntax: `is_between(column, start, end)`
	 - Description: Returns true if the column value is between the start and end values, else false.
	 - Example: `is_between(sales, 1000, 5000)`
	 - Returns: True

6. Is Not Between
	 - Syntax: `is_not_between(column, start, end)`
	 - Description: Returns true if the column value is not between the start and end values, else false.
	 - Example: `is_not_between(sales, 1000, 5000)`
	 - Returns: False


#### Utility Functions

1. USD to INR
	 - Syntax: `to_inr(currency_column, amount_column, rate=83)`
	 - Description: Converts the values in the amount column from USD to INR based on the rate. If the currency is not USD, the amount is returned as is. Default rate is 83.
	 - Example: `to_inr(currency, amount, 83)`
	 - Returns: 8300

2. INR to USD
	 - Syntax: `to_usd(currency_column, amount_column, rate=83)`
	 - Description: Converts the values in the amount column from INR to USD based on the rate. If the currency is not INR, the amount is returned as is. Default rate is 83.
	 - Example: `to_usd(currency, amount, 83)`
	 - Returns: 100

3. Row Number
	 - Syntax: `row_number()`
	 - Description: Returns the row number of the current row.
	 - Example: `row_number()`
	 - Returns: 1

4. Previous Period Value
	 - Syntax: `previous_period_value(column, date_column, offset=1)`
	 - Description: Returns the value of the column for the previous period based on the date column. Offset specifies the number of periods to go back.
	 - Example: `previous_period_value(sales, order_date, 1)`
	 - Returns: 1000

5. Next Period Value
	 - Syntax: `next_period_value(column, date_column, offset=1)`
	 - Description: Returns the value of the column for the next period based on the date column. Offset specifies the number of periods to go forward.
	 - Example: `next_period_value(sales, order_date, 1)`
	 - Returns: 2000

6. Percentage Change
	 - Syntax: `percentage_change(column, date_column, offset=1)`
	 - Description: Returns the percentage change in the value of the column compared to the previous period based on the date column. Offset specifies the number of periods to go back.
	 - Example: `percentage_change(sales, order_date, 1)`
	 - Returns: 10

7. Is First Row
	 - Syntax: `is_first_row(group_by, order_by, sort_order="asc")`
	 - Description: Returns 1 if the current row is the first row in the group, else 0. Sort order can be "asc" or "desc".
	 - Example: `is_first_row(customer_id, order_date, "asc")`
	 - Returns: 1

8. Create Buckets
	 - Syntax: `create_buckets(column, num_buckets)`
	 - Description: Creates buckets based on the values in the column. The number of buckets specifies the number of buckets to create.
	 - Example: `create_buckets(sales, 5)`
	 - Returns: "1000-2000"
