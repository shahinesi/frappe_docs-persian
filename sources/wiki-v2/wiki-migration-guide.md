---
title: "Wiki Migration Guide"
space: "Wiki"
url: "https://docs.frappe.io/wiki-v2/wiki-migration-guide"
updated: "2026-01-13"
---

Sidebar Migration
-----------------

Wiki v2 uses a simpler sidebar structure with a parent (Wiki Group) and child (Wiki Page) structure, unlike the earlier version which allows unlimited nesting. Every Wiki Group (nested or not) will be un-nested after migration. Due to the changes in the data structure we need to ensure some things for smooth migration.

1. Make sure there are no Wiki Sidebars with duplicate names (or every item will be under those Wiki Groups will be grouped under a single Wiki Group)
2. Make sure that title fields of `Wiki Sidebar` are not empty

  


