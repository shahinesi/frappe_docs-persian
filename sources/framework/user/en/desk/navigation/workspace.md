---
title: "Workspaces in Frappe Framework"
description: "Create and edit Frappe Framework workspaces with shortcuts, cards, charts, number cards and quick lists, control who can see them, keep private pages in My Space, and ship standard workspaces with an app."
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/desk/navigation/workspace"
updated: "2026-10-05"
---

A workspace is a page that gathers what a team needs in one place: shortcuts to the lists they open every day, cards of links, charts, number cards and short lists of recent records. A sales team might have a **Showroom** workspace with buttons for a new quotation, open orders and customers.

Every workspace belongs to one [module](/framework/user/en/basics/doctypes/modules) and appears as an entry in that module's [sidebar](/framework/user/en/desk/navigation/sidebar). Most modules have one at the top of their sidebar, usually called **Home**. For how workspaces fit with the rest of the desk, see [Desk navigation](/framework/user/en/desk/navigation).

![The Showroom workspace in the Selling module, with shortcuts for New Quotation, Open Orders, Customers and Showroom Stock.](/files/desk-nav-workspace-page.png)

## Before you begin

- **Anyone allowed to create workspaces can make a private one** that only they can see.
- **Shared workspaces need the Workspace Manager role**: creating, editing or deleting a workspace other people see, and moving other people's workspaces. A System Manager does not get this role automatically. See [users and permissions](/framework/user/en/basics/users-and-permissions).
- **Workspaces an app ships are marked Standard.** A site can change them, but its changes are stored separately so app updates keep arriving. See [Standard workspaces](#standard-workspaces-and-reset-to-standard).

## The workspace menu

Every workspace has a menu behind the **...** button in its top right corner:

- **Edit** switches the page to edit mode, where you add and arrange blocks.
- **New** creates another workspace.
- **Manage** opens **Manage Workspaces**, where you move, share and delete workspaces.
- **Reset to Standard** appears on a standard workspace this site has changed.

![The workspace menu open in the top right corner, showing Edit, New and Manage. Edit is highlighted.](/files/desk-nav-workspace-menu-edit.png)

## Create a workspace

1. Open the module where the workspace should appear.
2. Select **...** in the top right corner of any workspace, then **New**.
3. Type a **Title**, for example **Dispatch Board**.
4. Choose a **Type**:
   - **Workspace** for a page of blocks (the usual choice);
   - **Link** for a sidebar entry that opens a document list, page or report directly;
   - **URL** for a sidebar entry that opens a website.
5. Under **Access**, choose who can see it: **Only to you**, **To a group of users** (then pick the roles) or **To everyone**. Without the Workspace Manager role, only **Only to you** is offered.
6. Check **Module**. It starts on the module you are in, and decides which sidebar the workspace appears in.
7. Optionally choose an **Icon**, then select **Create**.

![The New Workspace window with Dispatch Board typed as the title. The Access field, set to Only to you, and the Module field, set to Selling, are highlighted.](/files/desk-nav-workspace-new.png)

The new workspace opens with a short welcome message. Next, add blocks to it.

## Edit a workspace

1. Select **...**, then **Edit**. The page switches to edit mode, with **Settings**, **Discard** and **Save** at the top.
2. Add, change and arrange blocks as described below.
3. Select **Save** to keep your changes, or **Discard** to throw them away.

![A workspace in edit mode, with the Settings, Discard and Save buttons at the top right highlighted.](/files/desk-nav-workspace-edit-mode.png)

### Work with blocks

Point at a block to show its controls:

- **+** on its left adds a new block after it;
- the **pencil** changes the block's settings;
- the **handle** lets you drag the block to a new position;
- **...** opens more actions.

![A shortcut block in edit mode with the plus button on its left highlighted, and the pencil, drag handle and more-actions buttons highlighted.](/files/desk-nav-workspace-block-controls.png)

The **...** menu offers **Delete**, **Expand** and **Shrink** (to make the block wider or narrower), **Move Up**, **Move Down** and **Duplicate**.

![The more-actions menu of a block open, listing Delete, Expand, Shrink, Move Up, Move Down and Duplicate. The menu is highlighted.](/files/desk-nav-workspace-block-more.png)

### Add a block

Select **+** beside a block, then pick a block type from **Templates**. A block that needs settings, such as a shortcut or a chart, opens a dialog to fill them in.

![The Templates menu listing Heading, Text, Card, Chart, Shortcut, Spacer, Onboarding, Quick List, Number Card and Custom Block. The menu is highlighted.](/files/desk-nav-workspace-add-block.png)

| Block | What it shows |
|---|---|
| **Heading** | A title for a section, in sizes from H1 to H6 |
| **Text** | A paragraph, with bold, italic and links |
| **Card** | A titled group of links to document types, reports or pages |
| **Chart** | A **Dashboard Chart**, picked from the charts on the site |
| **Shortcut** | A button that opens a document type, report, page, dashboard or URL, optionally with a live count |
| **Spacer** | Empty space, to separate blocks or push one along a row |
| **Onboarding** | A **Module Onboarding** checklist that walks new users through their first steps |
| **Quick List** | The most recently updated records of a document type, with optional filters. Users can refresh it, change its filters, create a record or open the full list from it |
| **Number Card** | A **Number Card**, picked from the cards on the site |
| **Custom Block** | A **Custom HTML Block**, for anything the other blocks do not cover |

### Shortcut settings

A shortcut can do more than open a list. Select its pencil to set:

- **DocType View**: whether it opens the **List**, **Report Builder**, **Dashboard** or a **New** record form;
- **Count Filter**: filters that both narrow the list it opens and drive a count shown on the shortcut;
- **Color** and **Format** for that count, for example `{} Open`.

![The Edit Shortcut window for New Quotation, with the DocType View field and the Count Filter area highlighted.](/files/desk-nav-workspace-shortcut-edit.png)

### Workspace settings

**Settings** in edit mode opens the workspace's own record. It lists every link card, shortcut, chart, number card, quick list and custom block on the page, and holds fields such as **Is Hidden** and **Module Onboarding**. Add and arrange blocks on the page itself, not from this record: the record does not know where on the page a new block should go.

![The Workspace record for Showroom, with tabs for Number Cards, Dashboards, Shortcuts, Link Cards, Quick Lists, Custom Blocks and Roles. The Is Hidden checkbox is highlighted.](/files/desk-nav-workspace-record.png)

## Who can see a workspace

The desk checks these in order, and no arrangement can grant access they do not allow:

1. **Module.** A user who cannot open anything in the workspace's module, or has the module under **Block Modules** on their user record, does not see the module's sidebar, so the workspace is not shown to them.
2. **Access.** **Only to you** shows it to its owner alone. **To a group of users** shows it to anyone with one of its roles. **To everyone** shows it to everyone who reaches the module.
3. **Is Hidden.** A Workspace Manager can tick **Is Hidden** on the workspace record to take it out of everyone else's sidebar. Workspace Managers still see it, with a note at the top explaining why.

Blocks follow the user's permissions too: a chart or number card a user cannot read is left out for them.

## Move, share or delete a workspace

1. Select **...** on any workspace, then **Manage**.
2. Select a module on the left. Its workspaces are listed on the right, with who can see each one.
3. Select a workspace, then change its **Title**, **Module**, **Icon**, **Access** or **Roles**.
4. Select **Save**. **Delete** removes the workspace after you confirm, and cannot be undone.

![Manage Workspaces with Selling selected in the module list on the left, showing its two workspaces, Showroom and Selling. The Selling module is highlighted.](/files/desk-nav-manage-workspaces.png)

![The settings for the Showroom workspace: Title, Module set to Selling (ERPNext), Icon, Access set to To a group of users, and a Roles table listing Sales Manager and Showroom Sales Executive. The Module and Access fields are highlighted.](/files/desk-nav-workspace-settings.png)

Workspace Managers see every workspace here, including other users' private ones, so they can tidy up a site. Everyone else sees only the workspaces they can manage. The **Access** column reads **Standard**, **Everyone** (including workspaces limited to roles), **Private**, or **Shared** for a workspace that is neither public nor owned by anyone.

## Standard workspaces and Reset to Standard

A workspace an app ships is **Standard**. You can change its icon, who sees it, and its layout, but its title and module belong to the app.

Changes to a standard workspace are saved as a separate customization, not into the app's copy, so the app can keep updating it. Saving a new **layout** is the one change with a cost: the first time, the desk warns that the app's later layout changes will stop appearing on this site, and asks you to confirm with **Save Layout**. Its roles, icon and visibility keep following the app either way.

To undo every change and go back to what the app ships, select **...** and then **Reset to Standard**. This needs the Workspace Manager role.

## Private workspaces and My Space

A workspace with **Only to you** access is yours alone. It appears in the chosen module's sidebar, but only for you.

**My Space** gathers all your private workspaces into one sidebar, whatever module each is filed under:

1. Select your profile picture, then **Settings**.
2. Under **Preferences**, turn on **Show My Space**.

   ![The Preferences section of Settings, with the Show My Space switch highlighted.](/files/desk-nav-settings-show-my-space.png)

3. Select **My Space** at the top of your user menu.

   ![The user menu with My Space at the top, highlighted, above Settings, Manage Dock, Reload and Logout.](/files/desk-nav-user-menu-my-space.png)

![My Space open on a private workspace called Board Pack. The sidebar header reads Private and is highlighted, and the only entry is Board Pack.](/files/desk-nav-my-space-shell.png)

My Space has no [dock](/framework/user/en/desk/navigation/dock), because your pages belong to no single app. Select **All apps** in its header menu to leave.

## Default workspace

**Default Workspace** on a user's record decides which module's sidebar the desk falls back to when a link does not name one. Left empty, the desk picks the module holding most of what that user can open. It does not change what opens after login; that is **Default App**, on the [Desktop](/framework/user/en/desk/navigation/desktop) page.

## A workspace that belongs to no module

A workspace with no module has no sidebar to appear in, so it can only be found by search. This mostly happens to workspaces carried over from an older version. When someone opens one, the desk offers to **Add** it to a module if they can place it, and otherwise explains that it is not in any app. A Workspace Manager can also fix these in bulk from **Manage Workspaces**. See [Migrating to the new navigation](/framework/user/en/desk/navigation/migrating-to-the-new-navigation#workspaces-are-filed-into-modules).

## For developers: ship a workspace with your app

1. Turn on developer mode on your development site (`developer_mode: 1` in its [site_config.json](/framework/user/en/basics/sites)).
2. Create or open the workspace, set its **Module** to one of your app's modules, and tick **Standard** on its record.
3. Build the page in edit mode and select **Save**.

In developer mode, saving a standard workspace edits the app's own copy and exports it as JSON into the module's folder in your app. Commit the file, and [bench migrate](/framework/user/en/bench/reference/migrate) installs or updates it on every site. To make the workspace an entry in your module's sidebar or a shortcut on your app's dock, see [Ship your app's sidebars](/framework/user/en/desk/navigation/sidebar#for-developers-ship-your-apps-sidebars) and [Ship your app's dock](/framework/user/en/desk/navigation/dock#for-developers-ship-your-apps-dock).

## What changed from earlier versions

If you used workspaces in Version 14 or 15:

- Workspaces no longer have their own **PUBLIC** and **MY WORKSPACES** sidebar sections. Each workspace is an entry in its module's sidebar, and your private ones are gathered in My Space.
- Child workspaces (a **Parent** page) are no longer offered. Use sections in Sidebar to group entries.
- Workspace details are changed in **Manage Workspaces**, not by dragging in Sidebar. Reorder workspaces with **Edit Sidebar**.
- There is a tenth block type, **Custom Block**, and blocks can be duplicated.

## Troubleshooting

**My new workspace is not in Sidebar I expected.** Check its **Module** in **Manage Workspaces**.

**Other people cannot see a workspace I shared.** If its access is **To a group of users**, they need one of its roles. They also need to reach its module, and it must not be marked **Is Hidden**.

**I cannot change a standard workspace's title or module.** They belong to the app that ships it.

**The app's new layout for a workspace does not appear on our site.** Someone saved a layout for it here. Select **...** and then **Reset to Standard** to follow the app again.

**Only to you is the only option under Access.** Sharing workspaces needs the Workspace Manager role.

**A block I added from the workspace record does not show.** Add blocks from edit mode on the page instead.

## Frequently asked questions

**Can a workspace appear in two sidebars?**
A workspace belongs to one module. To reach it from another, add a link to it with **Edit Sidebar**, or pin it to Dock with **Manage Dock**.

**Can Workspace Managers see my private workspaces?**
They can see that they exist in **Manage Workspaces**. Nobody else sees them in their sidebar.

**Do I need My Space to use private workspaces?**
No. They always appear in their module's sidebar for you. My Space just collects them in one place.

## Related topics

- [Desk navigation](/framework/user/en/desk/navigation)
- [Sidebar](/framework/user/en/desk/navigation/sidebar)
- [Dock](/framework/user/en/desk/navigation/dock)
- [Migrating to the new navigation](/framework/user/en/desk/navigation/migrating-to-the-new-navigation)
