---
title: "Introduction"
space: "Insights"
url: "https://docs.frappe.io/insights/introduction"
updated: "2026-01-06"
---

## What is Insights?

Insights is a completely open-source Business Intelligence (BI) tool. It makes data analysis and reporting accessible to everyone, whether they are technical or non-technical users. With Insights, you can connect to your databases, analyze data, and create beautiful reports and dashboards - all without writing complex SQL queries.

<img src="https://raw.githubusercontent.com/frappe/insights/refs/heads/develop/.github/hero-image.png" alt="Hero Image" />

## Why Insights?

The [Frappe Framework](https://frappe.io/framework) provides a great foundation for building applications and storing data in a structured way. However, when it comes to analyzing this data and creating reports, users often need to write SQL queries. This can be challenging for those who aren't familiar with SQL. We built Frappe Insights to solve this problem. It provides an intuitive interface for exploring data, building reports, and creating dashboards that anyone on your team can use.

## Key Features

- **Connect Multiple Sources**: You can integrate data from multiple databases, files and spreadsheets. Getting all your data into one place helps you analyse interconnected data.
- **Query Builder**: You can use the query builder to create queries without any SQL knowledge. The interface provides a step-by-step approach for building queries, allowing users to easily select tables, add joins, apply filters, perform calculations, and more.
- **Visualizations and Dashboards**: You can visualize the query results using a variety of charts and graphs. Frappe Insights also suggests the best chart for a given result set. You can create dashboards using a drag-and-drop interface and add filters on the dashboard to apply to the charts.
- **Database Support**: Frappe Insights currently supports MySQL, PostgreSQL, DuckDB, and BigQuery databases. More database integrations are planned for the future.


## Under the Hood

- [**Frappe Framework**](https://github.com/frappe/frappe): A full-stack web application framework.
- [**Frappe UI**](https://github.com/frappe/frappe-ui): A Vue-based UI library, to provide a modern user interface.
- [**Ibis**](https://github.com/ibis-project/ibis): A powerful library to compose SQL queries with dataframe APIs.
- [**eCharts**](https://github.com/apache/echarts): An interactive charting and data visualization library.


## Installation

To install/setup the app, follow the [guidelines here](https://github.com/frappe/insights/tree/develop?tab=readme-ov-file#production-setup).


## Learning and Community

- [Telegram Public Group](https://t.me/frappeinsights)
- [Discuss Forum](https://discuss.frappe.io/c/insights/74)
- [Documentation](https://docs.frappe.io/insights)
- [YouTube](https://www.youtube.com/@frappetech)

