---
title: "Remove a link you do not use from a workspace or the sidebar"
space: "Framework"
url: "https://docs.frappe.io/framework/desk-workspace/remove-a-link-you-do-not-use-from-a-workspace-or-the-sidebar"
updated: "2026-10-13"
---

You can remove a DocType link that your users do not need, such as **Material Request** in **Buying**. You do this in the settings. You do not need to change any code.

## **Before you start**

- You need the **Workspace Manager** role to change a workspace or a sidebar for all users. The **System Manager** role does not include it. Add it under **User → Roles**.
- The steps below are for Frappe v16.

## **Where the link shows**

A DocType link can show in two places in a module:

- **The left sidebar.** It is a separate record named **Workspace Sidebar**. Each module has one, for example **Buying**.
- **A card on the workspace.** This is the main page of the module, for example the **Buying** card under **Reports &amp; Masters**.

Each place has its own list of links. If you remove the link from one place, it stays in the other. To remove it completely, follow both sets of steps.

Removing a link only hides it. It does not delete the DocType, its records or the user permissions. Users can still open the list from the search bar or by its URL. To stop users from opening it, see [Hide it from some users only](https://claude.ai/epitaxy/local_69584d0b-08b3-4f37-9ba1-129b6b1eb4c5#hide-it-from-some-users-only).

## **Remove the link from a workspace card**

Watch the steps:



1. Open the module, for example **Buying**.
2. At the top right, click **···**, then click **Edit**. The workspace opens in edit mode.
3. Point to the card that has the link, for example **Buying**. Click the pencil icon on the card. The **Edit Links** dialog opens.
4. Under **Card Links**, click the pencil icon on the row of the link, for example **Material Request**. The **Editing Row** dialog opens.
5. Click **Delete**. The row is removed from **Card Links**.
6. Close the **Edit Links** dialog with its save button.
7. At the top right, click **Save**.

The card does not show the link anymore.

![](/files/Screen Recording 2026-10-13 at 4.39.59 PM.mov)

## **Related**

- [Workspace](https://docs.frappe.io/erpnext/workspace)
- [Users and permissions](https://docs.frappe.io/framework/user/en/basics/users-and-permissions)