---
title: "Sentry Integration"
space: "Framework"
url: "https://docs.frappe.io/framework/guides-integration/sentry-integration"
updated: "2026-10-16"
---

[Sentry](https://sentry.io) is an error-tracking and performance-monitoring service. Applications send it a report each time an error occurs. Sentry groups the same errors into one issue, shows the stack trace and context, and alerts the team when a new issue appears. You can use the hosted service at sentry.io or run it yourself. With Sentry, you find production errors in one place across all sites and do not have to search each site's **Error Log**.

## Overview

Frappe sends unexpected server errors and desk JavaScript errors to a Sentry project when you set one environment variable and the site opts in to telemetry. Optional variables add performance tracing, profiling and SQL spans.

- **One DSN per bench.** The DSN comes from the process environment, not from `site_config.json`. All sites served by the same web and worker processes report to the same Sentry project.
- **Two switches.** The DSN turns the Sentry SDK on for the process. The **System Settings** checkbox *Allow Sending Usage Data for Improving Applications* (`enable_telemetry`) decides, per site, whether anything is sent.
- **Errors follow the Error Log.** On the server, an event goes to Sentry when Frappe writes an **Error Log**. If you see an **Error Log**, Sentry should have it too.
- **Sites are told apart by name.** Every event sets the Sentry user ID to the site name, so you can filter by site in Sentry.



## Setup

Set `FRAPPE_SENTRY_DSN` for the web and worker processes, restart them, then enable telemetry on each site that should report.


| Variable                       | Value                             | Effect                                                                                                              |
| ------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `FRAPPE_SENTRY_DSN`            | Your project's DSN                | Required. Starts the Sentry SDK in the web server and in background workers, and loads the browser SDK in the desk. |
| `SENTRY_TRACING_SAMPLE_RATE`   | Float from 0.0 to 1.0, e.g. `0.1` | Optional. Sends performance traces for that share of web requests and jobs.                                         |
| `SENTRY_PROFILING_SAMPLE_RATE` | Float from 0.0 to 1.0             | Optional. Sends CPU profiles for that share of traced transactions. Needs tracing.                                  |
| `ENABLE_SENTRY_DB_MONITORING`  | Any non-empty value, e.g. `1`     | Optional. Records every SQL query as a span and every DB connect as a breadcrumb.                                   |


1. Create a project in Sentry (platform: Python) and copy its DSN.
2. Add the variables to the environment of the Frappe web server (gunicorn) and of every `bench worker` process. With supervisor, use the `environment=` line of each program. With Docker, set them on the backend and worker containers.
3. Restart the processes. Frappe reads the variables only at process start.
4. On each site, open **System Settings** and check *Allow Sending Usage Data for Improving Applications*. From the CLI: `bench --site <site> execute frappe.db.set_single_value --args "['System Settings', 'enable_telemetry', 1]"`.
5. Reload the desk in the browser so it loads the browser SDK.

If the DSN is set but `enable_telemetry` is off for a site, that site sends nothing: no server events, no browser events, and the desk does not load the SDK.

## What is captured

Sentry gets the errors that a developer can fix in code. Errors that Frappe shows to the user on purpose are left out.


| Source               | Sent to Sentry                                                                                                    | Not sent                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web requests         | Uncaught exceptions that end in HTTP 5xx. In developer mode, every error that Frappe logs.                        | `frappe.ValidationError`, `frappe.PermissionError` and their subclasses (e.g. `frappe.throw()` messages, mandatory-field errors). Normal 4xx responses. |
| Background jobs      | Jobs that fail and write an **Error Log**. Workers flush events after each job.                                   | Same exception filter as web requests.                                                                                                                  |
| `frappe.log_error()` | Every call from app code, as an exception event if one is active, else as a message with the title and traceback. | Calls where the **Error Log** insert itself fails.                                                                                                      |
| Desk (browser)       | Uncaught JavaScript errors and unhandled promise rejections on `/desk`.                                           | Errors raised by `frappe.throw()` in JS. Portal and website pages: the SDK loads only in the desk. Session tracking is off.                             |


The server SDK runs with Sentry's default integrations turned off. It does not hook Python `logging`, so `frappe.logger().error(...)` does not create Sentry events. Events from the `CSSUTILS` logger are dropped.

The release is the Frappe version (`frappe.__version__` on the server, `frappe.boot.versions.frappe` in the browser), so you can see which version introduced an error.

## Performance monitoring

Set `SENTRY_TRACING_SAMPLE_RATE` to see slow endpoints and jobs in Sentry. Start low (`0.01` to `0.1`) on busy sites, because each traced request is billed as a transaction.

- **Web requests.** Frappe wraps the WSGI app in Sentry's middleware. Transactions are named by endpoint: `/api/method/<dotted.path>` for RPC calls, else the URL path.
- **Background jobs.** Transactions are named by the job's method. Scheduled jobs use the scheduler job type instead. The job context holds the job ID, its arguments, whether it was scheduled, and its wait time in the queue (seconds).
- **SQL spans.** With `ENABLE_SENTRY_DB_MONITORING`, every `frappe.db.sql()` call becomes a span with the query text, and each DB connect adds a breadcrumb. This is how you find N+1 queries. It also adds overhead to every query, so measure before you enable it on a busy production bench.
- **Profiling.** `SENTRY_PROFILING_SAMPLE_RATE` is a share of the traced transactions, so `0.5` with a tracing rate of `0.1` profiles 5% of requests.

When any of these three variables is set, Frappe also tags the scope at the start of each request and job (transaction name, site, user, trace ID). This happens only on sites with telemetry enabled.

## Data and privacy

Error events can contain business and personal data. Treat your Sentry project like a production database and limit who can read it.


| Field in Sentry                   | Content                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| User ID                           | The site name, e.g. "erp.example.com"                                                                                      |
| Tag `frappe_user`                 | The logged-in user, e.g. "[jane@example.com](mailto:jane@example.com)", or "Guest"                                         |
| Tag `frappe_trace_id`             | The `X-Frappe-Request-ID` header, if the request had one                                                                   |
| Request                           | URL, method, query string and headers. The SDK strips `Cookie`, `Authorization` and other sensitive headers. No client IP. |
| Context "JSON Body" / "Form Data" | The full request payload, unfiltered. This can hold document data and personal data.                                       |
| Extra `job`                       | Job ID, method, all job arguments, queue wait time                                                                         |
| Stack trace                       | Code frames with their local variables (Sentry SDK default)                                                                |
| Message                           | For `frappe.log_error()` calls: the **Error Log** title and traceback                                                      |
| Modules, argv                     | Installed Python packages and the process command line                                                                     |
| SQL spans                         | Query text only. Query values are not sent.                                                                                |


**The telemetry checkbox does not cover performance data.** The opt-in check runs for error events and for scope tags. Tracing, profiling and SQL spans start for every request and job in the process. If one bench hosts sites that did not opt in, do not set the three performance variables on it.

Use Sentry's server-side data scrubbing for anything else you must not store, such as fields with national IDs or bank details.

## Troubleshooting


| Symptom                                             | Check                                                                                                                                                                                                           |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No events at all                                    | Is `FRAPPE_SENTRY_DSN` in the environment of the running process, not only your shell? Did you restart web and workers after you set it? Is `enable_telemetry` on for the site?                                 |
| An **Error Log** exists, but Sentry has nothing     | Is the exception a `ValidationError` or `PermissionError` subclass? Those are skipped on purpose.                                                                                                               |
| A 500 error is in Sentry, but no **Error Log**      | Check again after a few seconds. Request errors write the **Error Log** as a deferred insert.                                                                                                                   |
| Job errors are missing                              | Check that the worker process has the DSN. Workers start their own SDK at startup.                                                                                                                              |
| No browser errors                                   | Open the desk and check that `frappe.boot.sentry_dsn` has a value in the browser console. If it is empty, telemetry is off for the site. Content-Security-Policy rules must allow requests to your Sentry host. |
| Too many transactions or a high Sentry bill         | Lower `SENTRY_TRACING_SAMPLE_RATE` or remove it, then restart.                                                                                                                                                  |
| Errors from a script or `bench console` are missing | Only the web server and `bench worker` start the SDK. Other CLI commands do not report to Sentry.                                                                                                               |


The code lives in `frappe/utils/sentry.py`, `frappe/app.py` (web), `frappe/utils/background_jobs.py` (workers), `frappe/utils/error.py` (the `log_error` hook) and `frappe/public/js/sentry.bundle.js` (browser).