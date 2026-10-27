---
title: "Setting up Outlook for Frappe Helpdesk"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe"
updated: "2026-09-23"
---

You can connect a Microsoft 365 / Outlook mailbox to Frappe using OAuth instead of a password. OAuth is the recommended method because Microsoft is retiring basic (password) authentication for Exchange Online, and it lets Frappe send and receive mail without ever storing your mailbox password. Setup happens in two places: you register an app in **Microsoft Entra ID** (Azure), then point a **Connected App** and **Email Account** in Frappe at it.

## Before you begin

- Your Frappe site must be served over **HTTPS** (a local `localhost` dev site is fine).
- You need a Microsoft 365 account with **admin access to Azure / Microsoft Entra ID**.
- You need administrator access to your Frappe site to create a Connected App.

## Part 1: Register an app in Microsoft Entra ID

### Step 1: Create the app registration

1. Sign in to the [Azure Portal](https://portal.azure.com) and open **Microsoft Entra ID → App registrations**.  
![](/files/imageff427d.png)
2. Click **New registration**.  
![](/files/image56b32e.png)  
*New app registration button*
3. Give it a name (for example, `Frappe Email App`), leave the supported account type as default, and click **Register**. You will add the redirect URI later, once Frappe generates it.  
![](/files/imagefd693d.png)
4. Once done successfully click on the register button below the form.

### Step 2: Add API permissions

1. Open your new app and go to **API permissions → Add a permission**  
![](/files/imagea4cec0.png)  
*Guide to API Permissions*  
![](/files/imaged7d057.png)  
*Add Permission*
2. Add the following Permissions under select Microsoft Graph option and inside go to  **Microsoft Graph → Delegated permissions**.  
![](/files/image476ca7.png)
3. Click **Grant admin consent for**   and confirm. Each permission should show a green check under **Status**.  
![](/files/image3483b7.png)  
*Click Grant admin consent*  
![](/files/image6f40bf.png)  
*Updated status message*

### Step 3: Create a client secret

1. Go to **Certificates &amp; secrets → New client secret** or in **Overview** click **Add a secret**.  
![](/files/image3454e8.png)  
![](/files/imagee26167.png)
2. Add a description, choose an expiry, and click **Add**.  
![](/files/image7b6a71.png)
3. Copy the secret **Value** immediately and store it safely.  
![](/files/image0ec9c5.png)

> **Note:** Copy the **Value**, not the **Secret ID**. The value is shown only once and cannot be retrieved again after you leave the page.

### Step 4: Collect your IDs and endpoint

From the app's **Overview** page, copy:

- **Application (client) ID**
- **Directory (tenant) ID**
- **OpenID Connect Metatdata Document ID** (Under endpoints)

![](/files/acb494e027c6e635843dee5bd28bff95f89eb228.png)

Your OpenID configuration URL follows this format — keep it for the next part:

```text
https://login.microsoftonline.com/your_tenant_id/v2.0/.well-known/openid-configuration
```

## Part 2: Create a Connected App in Frappe

1. In Frappe, go to **Connected App** and click **New** (`/app/connected-app/new`).
  ![](/files/image150cfa.png)
2. Paste your OpenID configuration URL into the **OpenID Configuration** field, then click **Get OpenID Configuration**. Frappe auto-fills the authorization, token, and revocation endpoints.
  ![](/files/imagee2cc0c.png)

  

  On clicking **Get OpenID Configuration**, the field values will be filled automatically. Add the Provider name as Outlook.  
  ![](/files/imagecde89d.png)
3. Enter the **Client ID** and the **client secret Value** from Part 1 which you have stored from the overview section.
  ![](/files/imagef6c1d2.png)
4. Add the required **Scopes**:
  ![](/files/image227dc0.png)









```
https://outlook.office365.com/.default
```

```
offline_access
```

5. **Save** the Connected App.

> **Note:** The `.default` scope tells Microsoft to grant every permission you consented to in Step 2, so you don't have to list each one again here.

After saving, Frappe generates a **Redirect URI** on the Connected App. It looks like this:

![](/files/image0d15cf.png)

```text
https://your_site.com/api/method/frappe.integrations.doctype.connected_app.connected_app.callback
```

Copy that value, go back to your Azure app, open **Authentication → Add a platform → Web**, paste it as a redirect URI, and **Save**.



![](/files/imageee4504.png)

![](/files/image08eb8c.png)
*add your redirect URI and then configure*

Lastly click on the Connect to Provider button to grant permissions for frappe to access resources from your outlook based on the scope defined.

![](/files/image418979.png)



## Part 3: Connect your Email Account

Log in to Frappe as the **actual mailbox user** (not Administrator) before authorizing — the connection is granted for whoever is signed in.

1. Go to **Email Account** and create a new one (or open an existing account).
2. Enter the **Email Address** for the mailbox.
3. Set the incoming and outgoing servers:
  ```text
    Incoming (IMAP):  outlook.office365.com   port 993, SSL
    Outgoing (SMTP):  smtp.office365.com      port 587, TLS
  ```
4. Enable **Use OAuth**, then link the **Connected App** you created in Part 2.
5. **Save**, then click **Authorize API Access**. Microsoft will ask you to sign in and approve the request. Once approved, you're returned to Frappe and the account is connected.
6. Mark the account as **Default Incoming** and/or **Default Outgoing** as needed, Use OAuth option for authentication and then click **Authorize API Access**.

![](/files/image988c3d.png)

If everything is correctly done you will be taken to the outlook page where you select the account you want to gain access to. On approval you have then successfully connected your email account to Frappe.



## Service Principal Authentication

Email Accounts require access as a User. This disallowed the use of Shared Mailboxes dedicated to Frappe, as Full Access permissions would need to be granted to the user signing into Frappe.

This feature lets Frappe authenticate itself to e.g. Exchange Online, so it can send and receive emails from the Shared Mailbox, without having to delegate Full Access permissions to each user that accesses Frappe.

If you wish to authenticate using this method, there's a checkbox available in `Email Account`

![](/files/894RQqE.png)

## Troubleshooting

- **Outgoing mail fails:** Even with OAuth, **SMTP AUTH must be enabled** for the mailbox in the Exchange admin center. Check it at [aka.ms/smtp\_auth\_disabled](https://aka.ms/smtp_auth_disabled).
- **Authorization is blocked:** If your organization uses Microsoft **Security Defaults** (which block legacy auth), confirm SMTP AUTH is enabled for the specific account.
- **"Admin consent required" error:** Return to **API permissions** in Azure and make sure **Grant admin consent** was clicked for every permission.
- **Wrong account connected:** Re-authorize while logged in to Frappe as the intended final user, not Administrator.

**Sources:**

- [Tutorial: Connecting Frappe/ERPNext to Microsoft 365 Mail Services (OAuth)](https://discuss.frappe.io/t/tutorial-connecting-frappe-erpnext-to-microsoft-365-mail-services-oauth/106003)
- [Frappe Helpdesk — Installation](https://docs.frappe.io/helpdesk/installation)
- [Frappe Helpdesk — Email Communication](https://docs.frappe.io/helpdesk/email-communication)

---