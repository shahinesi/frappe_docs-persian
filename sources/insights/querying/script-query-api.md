---
title: "Script Query API"
space: "Insights"
url: "https://docs.frappe.io/insights/querying/script-query-api"
updated: "2026-08-31"
---

A script query runs Python through Frappe's `safe_exec`, the Server Script sandbox. Set `"server_script_enabled": 1` in `common_site_config.json` to enable it.

A script query is read-only. Any database change made by the script is rolled back after the run.

## Insights


| Class      | APIs                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Output     | `results` — the rows to return. Starts as `[]`. Takes a list of dicts, a list of lists, or a `DataFrame`. |
| Dataframes | `pandas.DataFrame`, `pandas.read_csv`, `pandas.json_normalize`                                            |
| Variables  | One name per query variable, added from **⋯ → Variables**. Always a string.                               |
| Logs       | `print()` — writes to **⋯ → Logs**, with the row count, the run time and any error line.                  |


## Frappe


| Class         | APIs                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| Documents     | `frappe.get_doc`, `get_cached_doc`, `get_last_doc`, `get_meta`                                       |
| Database      | `frappe.db.get_list`, `get_all`, `get_value`, `get_single_value`, `exists`, `count`, `sql`, `escape` |
| Query builder | `frappe.qb`                                                                                          |
| HTTP          | `frappe.make_get_request`                                                                            |
| Errors        | `frappe.throw`, `frappe.log_error`                                                                   |
| Session       | `frappe.session.user`, `frappe.user`, `frappe.lang`                                                  |
| Settings      | `frappe.get_system_settings`                                                                         |


## `frappe.utils`


| Class      | APIs                                                                                                                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dates      | `getdate`, `get_datetime`, `now`, `now_datetime`, `nowdate`, `today`, `add_days`, `add_months`, `add_years`, `add_to_date`, `date_diff`, `month_diff`, `time_diff_in_seconds`, `time_diff_in_hours`                     |
| Periods    | `get_first_day`, `get_last_day`, `get_first_day_of_week`, `get_last_day_of_week`, `get_quarter_start`, `get_quarter_ending`, `get_year_start`, `get_year_ending`, `get_weekday`, `get_month`, `get_timespan_date_range` |
| Time zones | `get_system_timezone`, `convert_utc_to_system_timezone`, `get_datetime_in_timezone`                                                                                                                                     |
| Numbers    | `flt`, `cint`, `cstr`, `floor`, `ceil`, `rounded`, `safe_div`                                                                                                                                                           |
| Strings    | `strip`, `strip_html`, `unique`                                                                                                                                                                                         |
| JSON       | `parse_json`                                                                                                                                                                                                            |


## Python


| Class     | APIs                                                                                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Built-ins | `abs`, `all`, `any`, `bool`, `dict`, `enumerate`, `isinstance`, `list`, `max`, `min`, `range`, `set`, `sorted`, `sum`, `tuple`, `len`, `str`, `int`, `float`, `round`, `zip` |
| JSON      | `json.loads`, `json.dumps`, `as_json`, `_dict`                                                                                                                               |


## Notes

- This page lists the common APIs. All read APIs from the framework's Server Script sandbox are also available — see the [Server Script API docs](https://docs.frappe.io/framework/user/en/desk/scripting/script-api).
- `frappe.db.sql` runs `select` and `explain` only.
- Results are cached for 5 minutes. The cache key includes the code, the variable values and the runtime filters. Use **Force Run** to skip the cache.

## Example

```python
results = frappe.db.get_all(
    "Sales Order",
    filters={"docstatus": 1},
    fields=["customer", "transaction_date", "grand_total"],
    limit_page_length=0,
)
```

From an external API:

```python
payload = frappe.make_get_request("https://api.example.com/v1/rates")
results = pandas.json_normalize(payload["rates"])
```