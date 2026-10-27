---
title: "My workspaces or desktop icons disappeared after updating to v16"
space: "Framework"
url: "https://docs.frappe.io/framework/help/my-workspaces-or-desktop-icons-disappeared-after-updating-to-v16"
updated: "2026-10-22"
---

After you update a site from v15 to v16, or move to a later v16 release, a workspace or desktop icon you rely on can look different: a custom layout reverts to the default, an icon is missing from the desktop, or a whole workspace is gone. These are three different situations with three different fixes, so start by telling them apart.

## **What you see**



- A workspace you customized (added cards, number cards, or an HTML block to a standard workspace like **Home**, **Accounting**, or **Stock**) shows the new default layout instead, with your additions gone.
- A workspace or desktop icon you created yourself — not one that shipped with an app — is missing completely: it is not in the **Workspace** list, not in the desktop icon grid, and not in the sidebar.
- A workspace still exists but looks emptied out: the cards and links you remember are gone, with only a shortcuts panel left.
- A desktop icon you created is missing, but the **Workspace** it links to still exists.

## **Why this happens**



v16 changed two things at once: it redesigned the standard workspaces every app ships (so **Home**, **Accounting**, and similar built-in workspaces look different from v15 on purpose), and it moved many doctype and report links that used to live inside the workspace body into the left sidebar instead. Neither of those deletes your data, but they can make a workspace look stripped if you had customized it.

Separately, updating a site runs `bench migrate`, which re-imports every standard workspace from its app's JSON file and removes any workspace, desktop icon, or sidebar row that the update's cleanup step cannot match to a file in an installed app — treating it as an app fixture nobody owns anymore. A workspace you built yourself through the desk is supposed to be excluded from this cleanup, but on some v16 releases, a site-created public workspace that migrate had stamped with an app or module tag was swept up and deleted by mistake. Frappe has fixed several cases of this across v16 patch releases; staying on a current patch is the best protection against hitting an unfixed one.

These two things combine into three distinct cases:

1. **A standard workspace's customization was overwritten, not deleted.** The old layout is still in that workspace's edit history.
2. **A workspace or icon you created was deleted outright.** It is gone from the live list, but may still exist as a **Deleted Document** or in a backup.
3. **Nothing was deleted or overwritten — it moved, or it is hidden from you.** The content is in the sidebar now, or a permission or role is filtering the icon out.

## **How to check which case you are in**



1. Open the **Workspace** list (search "Workspace" in the Awesome Bar) and look for the workspace by name.
  - If it is there but looks different: go to [If a standard workspace was overwritten](https://claude.ai/epitaxy/local_1fab296d-2fea-4300-bcd3-1a7785841c93#if-a-standard-workspace-was-overwritten).
  - If it is not there at all: continue to step 2.
2. Search "Deleted Document" in the Awesome Bar, and filter **Deleted Doctype** to `Workspace`, `Desktop Icon`, or `Workspace Sidebar`. If you find a row with the missing name, it was deleted — go to [If it was deleted](https://claude.ai/epitaxy/local_1fab296d-2fea-4300-bcd3-1a7785841c93#if-it-was-deleted).
3. If a desktop icon is missing but its **Workspace** still exists in the list, the icon's link may have been filtered out rather than deleted. Check:
  - The icon's **Hidden** field, in the **Desktop Icon** list.
  - Whether the icon or its workspace carries a role (**Has Role**) that your user does not have.
  - Whether the workspace is **Private** — a private workspace, and any icon that links to it, is only visible to the user who owns it.
4. If none of the above explains it, clear your cached desktop state: log out and log back in, or ask a System Manager to run `bench clear-cache` on the site.

## **If a standard workspace was overwritten**



On **v16.50 and later**, Frappe can replay the edit for you:

1. Search "Restore Workspace" in the Awesome Bar. This page needs the **Workspace Manager** role — ask a System Manager to grant it if you do not have it.
2. The page lists every standard workspace this site edited before an update overwrote it, with when it was last edited and by whom.
3. Click **Restore** next to the workspace. This writes your old layout back as a site customization, so the workspace shows it again at its usual address.
4. If the page lists a warning instead of restoring everything, read it — some edits (for example, a change to a shipped card's existing row, rather than a new one) cannot be carried into a customization and need to be redone by hand.

If your site is on an earlier v16 release, this page does not exist yet. Either update the site to v16.50 or later and use it, or recreate the layout by hand — add the cards, links, or HTML block back through **Edit Workspace**, using a before/after screenshot if you have one.

## **If it was deleted**



1. Open the **Deleted Document** record you found and click **Restore**. This recreates the document with its original name and content. You need create permission on the restored doctype (`Workspace`, `Desktop Icon`, or `Workspace Sidebar`) for this to work.
2. If the related rows were deleted together (for example, a workspace and its sidebar and desktop icon, all at once), restore each one — restoring the workspace alone does not bring back its icon or sidebar.
3. If nothing shows up in **Deleted Document** either, or you need the site exactly as it was before the update, restore the site from a backup taken before the update instead. On Frappe Cloud, use the site's **Backups** tab in the dashboard; on a self-hosted bench, `bench --site [site-name] restore [backup-file]`. Restoring a database backup replaces all data on the site since that backup, not only the workspace, so confirm with whoever manages the site before you do this.
4. Once the workspace or icon is back, update the site to the latest patch of your v16 line before you let it migrate again. If the deletion was caused by the migrate-time cleanup described above, staying current is the only way to avoid it happening again with certainty — clearing the workspace's **App** or **Module** field is not a confirmed fix on every release, since on at least one site that field reset itself on save.

## **How to prevent it**



- Avoid customizing a standard (app-shipped) workspace in place. Build your own workspace instead, or expect to need **Restore Workspace** (v16.50+) or a manual redo after the next update.
- Keep anything you build yourself as a **Private** workspace where it only needs to be visible to you. A private workspace is never a candidate for the migrate-time fixture cleanup described above.
- Keep the site on the latest patch release of its v16 line. Most of the deletion cases above were fixed within a later patch.
- Take a backup, or at least a screenshot of your workspace layouts, before any update.

## **If this does not fix it**



Raise a support ticket with: the site name, the Frappe and app versions from **Help → About** before and after the update, the exact name of the missing or changed workspace/icon, whether it is standard or one you created, whether it affects every user or one user, and whether you found a matching row in **Deleted Document** (include its name and deletion timestamp if so). If the update ran automatically (a shared Frappe Cloud bench), also note the date so support can match it against the site's update log.

## **Related**

- [Workspace](https://docs.frappe.io/framework/user/en/desk/workspace)
- [Workspace Customization](https://docs.frappe.io/framework/user/en/desk/workspace/customization)
- [Workspace Access](https://docs.frappe.io/framework/user/en/desk/workspace/access)