---
title: "The dock in Frappe Framework"
description: "How the Frappe Framework dock switches between an app's modules, how to keep it pinned or floating, how to arrange it for yourself or everyone, and how an app ships its dock."
space: "Framework"
url: "https://docs.frappe.io/framework/user/en/desk/navigation/dock"
updated: "2026-10-05"
---

Dock is the narrow column of icons at the far left edge of the desk. Each icon opens one [module](/framework/user/en/basics/doctypes/modules) of the app you are in, such as Selling or Stock in ERPNext. The app's logo sits at the top and your profile picture at the bottom.

Each [app](/framework/user/en/basics/apps) has its own dock. When you open Frappe HR, Dock changes to Frappe HR's modules, and arranging one app's dock does not change another's.

This page covers using Dock, choosing how it appears, arranging it for yourself or your whole site, and how an app ships its dock. For how Dock fits with the rest of the desk, see [Desk navigation](/framework/user/en/desk/navigation).

![The desk with the dock, the narrow column of module icons at the far left, highlighted.](/files/desk-nav-intro-dock.png)

## Before you begin

- **Anyone can arrange their own dock.** Nobody else sees those changes.
- **Arranging it for everyone needs the Workspace Manager role.** A System Manager does not get this role automatically. See [users and permissions](/framework/user/en/basics/users-and-permissions).
- **Dock only shows what you can open.** A module where you have no permission to open anything is never shown, whatever the arrangement says.

## Use Dock

1. Point at an icon to see the name of the module.
2. Select it. The module opens on the first entry in its [sidebar](/framework/user/en/desk/navigation/sidebar), and Sidebar changes to that module.

![The pointer resting on the Selling icon in the dock, with a tooltip reading Selling. The icon and its tooltip are highlighted.](/files/desk-nav-dock-module-tile.png)

- **The app logo** at the top goes back to the [desktop](/framework/user/en/desk/navigation/desktop).
- **Your profile picture** at the bottom opens the user menu: **Settings**, **Manage Dock**, **Reload** and **Logout**, plus **My Space** if you turned it on.

Dock is not shown in [My Space](/framework/user/en/desk/navigation/workspace#private-workspaces-and-my-space), because your private workspaces belong to no single app.

## Choose a pinned or floating dock

By default Dock is **Pinned**: it always sits beside Sidebar. Set it to **Floating** for more room: Dock stays out of sight and slides in when you move the pointer all the way to the left edge of the window.

1. Select your profile picture, then **Settings**.
2. Select **Appearance** and scroll to **Dock**.
3. Select **Pinned** or **Floating**. It applies straight away.

![The Appearance section of Settings, with the Dock setting and its Pinned and Floating options highlighted.](/files/desk-nav-settings-appearance-dock.png)

![A floating dock that has slid in over the left edge of the sidebar after the pointer reached the edge of the window. The dock is highlighted.](/files/desk-nav-dock-floating-revealed.png)

*A floating dock, highlighted, slides in over Sidebar when your pointer reaches the left edge.*

With a floating dock, your profile picture moves to the bottom of Sidebar so the user menu stays in reach. This is a personal setting; nobody else's dock changes.

## Arrange Dock

### Open Manage Dock

1. Open any module of the app whose dock you want to arrange.
2. Select your profile picture, then **Manage Dock**.

![The user menu open at the bottom of the dock, showing Settings, Manage Dock, Reload and Logout. Manage Dock is highlighted.](/files/desk-nav-user-menu-manage-dock.png)

The **Manage ERPNext Dock** window opens, with the modules under **Entries** and a **Preview** of the result. Workspace Managers see a switch in the top right corner: **For everyone** (the default for them) or **Just for me**. Without the role there is no switch, and every change is just for you.

![The Manage ERPNext Dock window listing Setup, Accounts, Selling, Buying, Stock, Manufacturing, Projects, Assets and Quality, with the For everyone switch highlighted.](/files/desk-nav-manage-dock-dialog.png)

### Reorder or hide modules

- **Reorder.** Drag a row by its handle. The top of the list is the top of Dock.
- **Take a module off Dock.** Select the eye. The row is grayed out and leaves the preview. Select the eye again to put it back.

![The Manage ERPNext Dock window with Assets taken off the dock: its row is grayed out, its eye is crossed out, and it is missing from the preview. The Assets row is highlighted.](/files/desk-nav-manage-dock-hide.png)

Taking a module off Dock does not take away anyone's access: its records still open from links, search and other modules. A row marked **app ships this off** is one the app hides by default; the eye still shows it.

### Add a module, workspace or website

1. Select **Add** above the list.
2. Under **What it opens**, choose **Module** (opens the module and its sidebar), **Workspace** (opens one [workspace](/framework/user/en/desk/navigation/workspace), in its module's sidebar) or **Web address** (opens a website outside the desk).
3. Choose the module or workspace, or paste the address.
4. Choose an **Icon** and type a **Title**, the name shown when someone points at the icon.
5. Select **Add**, then drag the new row where you want it.

![The Add to the dock window with What it opens set to Workspace. The What it opens field is highlighted.](/files/desk-nav-manage-dock-add.png)

### Save or undo

Select **Save**. A message confirms whether you saved for yourself (**Dock updated**) or for everyone (**Dock updated for everyone**).

- **Reset** clears the arrangement you are editing and removes shortcuts you added to it. Dock falls back to what everyone sees (on **Just for me**) or to what the app ships (on **For everyone**). Select **Save** to apply it.
- **Reset for everyone** is for Workspace Managers. It removes the site's arrangement **and every user's own arrangement** of this app's dock, so everyone is back on what the app ships. It asks you to confirm, applies immediately and cannot be undone.

![The Manage ERPNext Dock window with Reset for everyone highlighted.](/files/desk-nav-manage-dock-reset-everyone.png)

### When an app adds new modules

Once you have saved an arrangement, your dock stays exactly as you left it. A module that an app update or a newly installed app adds does **not** appear on its own. It is listed in **Manage Dock** after your entries with its eye crossed out; select the eye and save to add it.

This keeps a dock you arranged from changing under you. Sidebar works the other way: new entries from an app always appear there.

## For developers: ship your app's dock

An app's dock is a document the app ships. Only the modules and shortcuts it lists can appear on Dock, so list every module you want people to reach.

1. Turn on developer mode on a development site (`developer_mode: 1` in its [site_config.json](/framework/user/en/basics/sites)).
2. Open a module of your app, then **Manage Dock**.
3. In the switch, choose **Ship with the app**. This option only appears in developer mode.
4. Arrange Dock. Hiding a row here ships it off by default (the eye's tooltip reads **Ship this off by default**); sites and users can still show it.
5. Select **Save**. The message **Exported to the app** confirms it.

Your app's dock is written to `<app>/dock/<app>/<app>.json`. Commit it, and [bench migrate](/framework/user/en/bench/reference/migrate) imports it on every site. On the app's layer, the editor also tells you how many of your app's modules it does not list at all, so none is left out by accident.

If your app does not ship a dock yet, arrange it on **For everyone** and select **Export to app** at the bottom of the window. The arrangement is copied into a new dock in your app, and the site's own arrangement stays as it was.

For the icon that opens your app from Desktop, see [For developers: put your app on Desktop](/framework/user/en/desk/navigation/desktop#for-developers-put-your-app-on-desktop).

### Companion apps

Some apps add to another app rather than standing alone; a regional compliance app might add a few modules to ERPNext. Such an app can put its entries on the host app's dock by setting **Mount On** to the host app in its own shipped dock. It then has no dock or desktop icon of its own, and its workspaces open inside the host app's dock.

The mount only takes effect when the host app is installed, the host ships a dock, and the companion ships entries of its own. Otherwise the companion behaves like any other app. Only an app's own shipped dock can set **Mount On**; sites and users cannot move an app onto another app's dock.

## Troubleshooting

**A module is missing from my dock.** You may have no permission to open anything in it, it may be blocked under **Block Modules** on your user record, or it may be hidden. Open **Manage Dock** and look for it with its eye crossed out.

**A new app's modules are not on Dock.** Open **Manage Dock**, find them at the end of the list with the eye crossed out, select the eye and save. Or use **Reset** to go back to what the app ships.

**My arrangement was replaced.** A Workspace Manager used **Reset for everyone**.

**Dock disappeared.** It may be set to **Floating**: move your pointer to the left edge, or switch to **Pinned** under **Settings > Appearance**. Dock is also not shown in My Space.

**Manage Dock is missing from the user menu.** The page you are on belongs to no app, such as My Space. Open a module of the app first.

**A module never appears, even in Manage Dock.** The app's shipped dock does not list it. A developer needs to add it to the app's dock.

## Frequently asked questions

**Can I rename a module on Dock?**
No. Dock shows each module's own name. Shortcuts you add get your own **Title**.

**Can I put another app's module on this dock?**
No. You can add a **Workspace** or **Web address** shortcut instead.

**Does taking a module off Dock remove it from search?**
No. Its documents and reports are still found by search and still open from links.

## Related topics

- [Desk navigation](/framework/user/en/desk/navigation)
- [Sidebar](/framework/user/en/desk/navigation/sidebar)
- [Desktop](/framework/user/en/desk/navigation/desktop)
- [Migrating to the new navigation](/framework/user/en/desk/navigation/migrating-to-the-new-navigation)
- [Workspace](/framework/user/en/desk/navigation/workspace)
