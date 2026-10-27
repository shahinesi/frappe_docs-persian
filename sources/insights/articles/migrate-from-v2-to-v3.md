---
title: "Migrate from v2 to v3"
space: "Insights"
url: "https://docs.frappe.io/insights/articles/migrate-from-v2-to-v3"
updated: "2026-10-24"
---

Insights v3.50 removes Insights v2, the old interface with its own queries and dashboards. Before you update to v3.50, copy your v2 dashboards to v3 with the **Migrate from v2** page in Insights v3.13 to v3.15.1.



You do not have to hurry. Stay on Insights v3.15 for as long as you need.

:::note[Frappe Cloud]
For any help with the migration, raise a [support ticket](https://frappe.io/support).
:::

### You need this guide if:

- **Your team still uses v2 dashboards.** Open Insights as an Insights Admin and click **Settings** in the sidebar. If you see **Migrate from v2**, your site has v2 data.
- **The update to v3.50 stopped** with "Insights v2 has been removed — update blocked". Someone used a v2 dashboard in the last 30 days, and it is not migrated. The check runs before Insights changes any data.

If you do not need your v2 dashboards, go to [Update without migrating](#update-without-migrating).

## Step 1: Get Insights on v3.13 or later

Find your Insights version:

- **Private Bench:** open your bench group in the dashboard, then open its **Apps** tab.
- **Public Bench:** open your site in the dashboard, then open the **Apps** tab. The version is in the Insights commit message.
- **Self-hosted:** check from insights commit history.



On &gt;=v3.13, go to Step 2. 



On an earlier version:

- **Frappe Cloud:** raise a [support ticket](https://frappe.io/support) and ask to move your site to Insights v3.15.1.
- **Self-hosted:** follow the steps below.

### Self-hosted: check out v3.15.1

`bench update` brings the latest release, which can be v3.50. You need to check out to `v3.15.1` tag instead. From the bench directory, run:

```bash
bench --site all backup --with-files
cd apps/insights
git fetch --tags
git checkout v3.15.1
cd ../..
bench setup requirements --python
bench build --app insights
bench --site all migrate
bench restart
```

:::caution
Do not run `bench update` until Step 3. While Insights is on a tag, `bench update` pulls the wrong branch.
:::

If `bench update` already stopped at the v2 check, run the same commands. Then turn off the maintenance mode that the failed update left on:

```bash
bench set-config -g maintenance_mode 0
bench set-config -g pause_scheduler 0
```

## Step 2: Migrate your dashboards

You must have the **Insights Admin** role.

1. Open Insights: add `/insights` to your site's address, for example `example.frappe.cloud/insights`.
2. In the sidebar, click **Settings**, then **Migrate from v2**. Insights lists your v2 dashboards with a status.
3. Click a dashboard to see what is on it and what changes.
4. Select one dashboard and click **Migrate**. Open the new workbook and compare it with the v2 dashboard.
5. Select the other dashboards and click **Migrate**.


| Status            | Meaning                                                                         |
| ----------------- | ------------------------------------------------------------------------------- |
| Ready to migrate  | The dashboard migrates without changes.                                         |
| Needs review      | Some parts do not migrate as they are. Click the dashboard to see which.        |
| Could not be read | Insights cannot read part of this dashboard. Migrate it alone to see the error. |
| Could not migrate | The migration failed and changed nothing. Click **Migrate** again.              |
| Migrated          | The dashboard has a v3 copy.                                                    |


:::tip[Safe to repeat]
The migration does not change your v2 dashboards. If you migrate a dashboard again, Insights skips it, and your edits to the v3 copy stay.
:::

After each migration, Insights compares the numbers of each new query with the numbers v2 got, for example "4 of 4 queries return the same numbers as v2." If a chart shows different numbers, click the dashboard, then **Open in v3**.



Insights does not compare script queries, Query Store queries, or pivot queries. Check these yourself.

- The page lists the 500 most recently changed v2 dashboards. If your site has more, raise a [support ticket](https://frappe.io/support).
- On a self-hosted site, the migration runs in background jobs. If a status does not change, make sure the bench workers run.

## Step 3: Update to v3.50

Update when all the v2 dashboards you want to keep are migrated.

- **Frappe Cloud:** update your site from the dashboard.
- **Self-hosted:** go back to the `version-3` branch, then update:

```bash
cd apps/insights
git checkout version-3
cd ../..
bench update
```

The update stops only for v2 dashboards that someone used in the last 30 days and that are not migrated. It shows how many there are. Migrate them, then update again.

:::caution
A v2 dashboard that nobody used in 30 days does not stop the update, but it is not carried over. Migrate it too if you want to keep it.
:::

## What migrates

Each v2 dashboard becomes one v3 workbook with the same title and owner. The workbook has:

- The queries of the dashboard, and the Query Store queries that they read.
- The charts, filters, and text of the dashboard, in the same layout.
- The variables of script queries.

Insights uses the v3 data source with the same name as the v2 data source. If there is none, Insights makes one from the v2 connection details.

## What does not migrate

- **v2 queries that are not on a dashboard.** To keep one, add it to a v2 dashboard before you migrate.
- **Public links.** A public v2 dashboard is private in v3. Publish it again.
- **Sharing.** Share the workbook again with your team.
- **Chart types that v3 does not have.** Insights skips these charts and tells you why.
- **Query steps that v3 does not have.** Insights keeps the SQL that v2 ran, or removes the step and tells you. If Insights removes a filter, the chart shows more rows than in v2.

## Update without migrating

:::danger
After the update, you cannot open or migrate v2 queries and dashboards. To get them back, you must restore a backup on Insights v3.15.1 and migrate there.
:::

If you do not need your v2 dashboards, set `insights_allow_legacy_v2_upgrade` to `1` in the site config. The update to v3.50 then does not stop.

- **Frappe Cloud:** raise a [support ticket](https://frappe.io/support) and ask for it to be set.
- **Self-hosted:** run this for each site:

```bash
bench --site <your-site> set-config insights_allow_legacy_v2_upgrade 1
```

## Get help

- **Frappe Cloud:** raise a [support ticket](https://frappe.io/support) for any help with the migration.
- **Everyone:** ask in the [Insights Telegram group](https://t.me/frappeinsights).