---
title: "Restoring System Manager Role"
space: "Framework"
url: "https://docs.frappe.io/framework/help/restore-access-after-removing-your-own-system-manager-role"
updated: "2026-10-21"
---

If you remove the System Manager role, or all your roles, from your own user account, you lose access to Users, Roles, and every other screen that needs System Manager. In most cases, you can get access back yourself, without raising a ticket.

## **Why this happens**

Frappe checks your roles on every page. Screens like **User List**, **Role**, and **Role Permission Manager** are visible only to users who hold the System Manager role. If you edit your own User record and uncheck System Manager, or uncheck every role, the next page you open is one you can no longer see. Frappe does not warn you before you save a change that locks you out.

For example, Ayesha Khan at Bluepeak Technologies opens her own **User** record to clean up roles she no longer needs, and unchecks **System Manager** along with them.

roles-tab-uncheck-system-manager.png

Captured live on dev16.localhost: the User form's **Roles &amp; Permissions** tab for Ayesha Khan, with the **System Manager** checkbox at the bottom of the role list cleared and the form showing "Not Saved". Verified end to end: unchecking this box and saving reproduces the lockout, and the User list for that account drops from 16 rows to 0.

After she saves, the **Settings** workspace disappears from her sidebar. If she opens **User List** directly, the list loads with no rows. If she opens a page that needs System Manager, such as **Role Permission Manager**, she sees:

**Error**

```
Not permitted to view Role Permission Manager
```

The **Administrator** user is the one exception: Frappe always grants it every permission, whatever roles the Has Role table shows for it. Every option below uses this, directly or indirectly, to get your access back.

## **Fix it yourself**

Use the first option below that applies to you.

### **Another user still has System Manager**

Ask that user to:

1. Go to **User List** and open your User record.
2. Open the **Roles &amp; Permissions** tab.
3. Check **System Manager**.
4. Click **Save**.

Log out and log back in to pick up the change.

### **Add the role back from bench console**

**Terminal**

```
bench --site yoursite.com console
```

At the `In [1]:` prompt, run:

**Python**

```
user = frappe.get_doc("User", "your-email@example.com")
user.add_roles("System Manager")
```

Log out of the site and log back in.

If you would rather not touch your own user record, create a second, temporary System Manager user from the command line instead, then use it to fix your main account through the UI:

**Terminal**

```
bench --site yoursite.com add-system-manager temp-admin@example.com \
  --first-name Temp --password "a-strong-password"
```

### **Use SSH into the bench group**

SSH access needs a private bench group with your SSH key added first. See [SSH Access](https://docs.frappe.io/cloud/benches/ssh). Once you can SSH in, run the same `bench --site yoursite.com console` command and `user.add_roles("System Manager")` as in option 2, then log out and log back in to your site.

### **Use Database Access**

Go to **Site Dashboard → Actions → Access site Database**, and if you have not used it before, click **Enable Access**. Connect with the MariaDB command line client using the credentials shown, then run:

**SQL**

```
INSERT INTO `tabHas Role`
  (name, creation, modified, modified_by, owner, docstatus,
   idx, parent, parentfield, parenttype, role)
VALUES
  (UUID(), NOW(), NOW(), 'Administrator', 'Administrator', 0,
   1, 'your-email@example.com', 'roles', 'User', 'System Manager');
```

Changes made this way skip Frappe's normal save step, so they do not take effect for an already open session. Log out of your site and log back in for the role to apply. *(Verified: a role added directly in the database only appears after a fresh login — the running session keeps the old role list until then.)*

### **Reset the Administrator password**

This works self-hosted, or on Frappe Cloud once you have console or SSH access as in option 2 or 3:

**Terminal**

```
bench --site yoursite.com set-admin-password "a-strong-new-password"
```

Log in with the user **Administrator** and the password you just set. Administrator always has full access, so you can now open your own User record and check **System Manager** again through the normal **Roles &amp; Permissions** tab.

user-list-access-restored.png

Captured live on dev16.localhost: the **User List** for Ayesha Khan's account right after her System Manager role was restored and she logged back in — the list shows all 16 users again (up from 0 while locked out), and the **+ Add** button is back in the top right.

## **If none of these apply to you**

If your site is on a shared Frappe Cloud bench, you have no Database Access, no other System Manager user, and no saved Administrator password, raise a ticket on [support.frappe.io](https://support.frappe.io/). Support will ask you to approve a site access request from your Frappe Cloud dashboard (**Access Request** in the side menu) before they can restore your role.

## **How to prevent it**

- Keep a second user with the System Manager role on every site, as a standing backup admin. If you lock out one account, you can fix it from the other in under a minute.
- Before you remove a role from your own user, check whether it is the last System Manager account.
- Save the Administrator password somewhere safe when the site is created. It is your fallback even if every other System Manager account is gone.

## **Related**

- [Users and Permissions](https://docs.frappe.io/framework/user/en/basics/users-and-permissions)
- [Permission Types](https://docs.frappe.io/framework/permission-types)
- [SSH Access](https://docs.frappe.io/cloud/benches/ssh)
- [Database Access](https://docs.frappe.io/cloud/sites/database-access)