---
title: "Email Account shows \u201cInvalid credentials\u201d or an SMTP/IMAP authentication error"
space: "Framework"
url: "https://docs.frappe.io/framework/help/email-account-shows-invalid-credentials-or-an-smtpimap-authentication-error"
updated: "2026-10-22"
---

When you save an Email Account, or when Frappe sends and receives mail through one, the mail server can reject the login. You see this as a save error, a disabled Email Account, or emails stuck in the queue.

## **The error**

You see one of these, depending on where the login is rejected:

On Save, from the outgoing server

```
Incorrect Configuration
Invalid credentials for Email Account
```

```
Incorrect Configuration
Invalid Outgoing Mail Server or Port: Connection unexpectedly closed
```

On a scheduled sync, from the incoming server

```
Authentication failed while receiving emails from Email Account: <name>.
Message from server: b'[AUTHENTICATIONFAILED] Invalid credentials (Failure)'
```

From a third-party SMTP relay, in the Error Log

```
smtplib.SMTPSenderRefused: (502, b'5.7.0 Please authenticate first', ...)
```

What the dialog looks like on Save — wording after the colon depends on what rejected the connection.

All four mean the same thing: the server did not accept the login ID and password you gave it. The exact wording depends on whether the failure happens on **Save** (outgoing) or during a scheduled sync (incoming), and on how your provider reports it.

## **Why this happens**

When you save an Email Account, Frappe connects to the mail server with the login ID, password, server, port and encryption (TLS or SSL) you entered, and tries to authenticate. The server accepts the login only if every one of these matches what it expects. A wrong password, a port that does not match the encryption method, or a login flow the provider no longer allows for a plain password (Gmail and Microsoft both require this now) all come back as the same kind of rejection.

If the Email Account was already working and starts failing later, the usual cause is that the password changed on the provider's side, or 2-factor authentication (2FA) was turned on, which invalidates the account password for apps like Frappe.

## **How to fix it**

### **1. Check the basic settings**

1. Open the **Email Account** and scroll to the **Authentication** section (or **Outgoing (SMTP) Settings** for the server fields).
2. If the account logs in with a different address than the one it sends as, check **Use different Email ID** and enter the real login in **Alternative Email ID**.
3. Re-enter the **Password**. A copy-pasted password can carry a trailing space or a line break that causes the same error as a wrong password.
4. Check **Outgoing Server** (or **Email Server**) and **Port** against what your provider publishes.
5. Check **Use TLS** and **Use SSL** — only one of them should be checked, and it must match the port:
  - Port 587 → **Use TLS** checked, **Use SSL** unchecked.
  - Port 465 → **Use SSL for Outgoing** checked, **Use TLS** unchecked.

  Both checked, or both unchecked, at the same port is a common cause of this error on its own.

![Outgoing SMTP Settings section with Use TLS and Port highlighted](https://bae306c0-b177-4126-b1db-65c2d51ec878.frame.claudeusercontent.com/_f/1792065955-22fa/smtp-invalid-credentials-outgoing-settings.png)

Outgoing (SMTP) Settings — Use TLS and Port boxed, the pair most often mismatched.

If **Use TLS** and **Use SSL** are greyed out and you cannot change them, the Email Account is linked to an **Email Domain**. The outgoing settings come from that Email Domain, not from the account. Open the linked Email Domain to change them, or clear the **Domain** field on the Email Account to unlock the fields there instead.

### **2. For Gmail or Google Workspace**

Google no longer accepts your normal account password for Frappe, or any app that is not a Google product. Set **Service** to **GMail** — this fills in the IMAP/SMTP server, port and encryption for you — then use one of:

![Email Account form with Service set to GMail](https://bae306c0-b177-4126-b1db-65c2d51ec878.frame.claudeusercontent.com/_f/1792065955-22fa/smtp-invalid-credentials-gmail-service.png)

Setting Service to GMail presets the server, port and encryption.

- **An app password.** Turn on 2-Step Verification on the Google account at [myaccount.google.com/security](https://myaccount.google.com/security), then generate an app password from the same page and use that as the Email Account **Password**, not your login password. An app password only works once 2-Step Verification is on. If 2FA is off, Google will not let you generate one, and the account keeps rejecting the plain password.
- **OAuth**, if you do not want to store a password at all. This needs a Connected App set up in Google Cloud and selected as the Email Account's authentication **Method**. The setup follows the same pattern as [Microsoft Office365 Email OAuth](https://docs.frappe.io/framework/user/en/microsoft-email-oauth) — a Connected App, a redirect URI, and the mail scopes for IMAP and SMTP.

### **3. For a third-party SMTP provider (SMTP2Go, Brevo, Sendgrid and similar)**

These providers do not use your email inbox password at all. They issue their own SMTP username and an API key, separate from any account login:

1. In the provider's dashboard, find (or generate) the **SMTP username** and **SMTP password / API key** for sending mail. For Sendgrid, for example, the SMTP username is literally `apikey` and the password is the generated API key, not an account password.
2. On the Email Account, check **Use different Email ID** and enter the provider's SMTP username there.
3. Enter the API key as the **Password**.
4. Enter the outgoing server and port exactly as the provider documents them, and match **Use TLS** / **Use SSL** to that port as in step 1.

If you are using **Brevo** specifically and still get `(502, b'5.7.0 Please authenticate first')` after matching every setting above, your site may need the `smtp_no_ehlo_after_auth` site config key — some relays reject the extra EHLO command Python's SMTP client sends after login. This is fixed by default from Frappe v16.17.0 onward. On an earlier version, raise a support ticket and reference this error.

### **4. Test the credentials outside Frappe**

Before you save the Email Account again, confirm the login works on its own:

- In your email client (Outlook, Thunderbird, the Gmail or Outlook web app), add the same account with the same server, port, encryption and password. If it fails there too, the problem is the credentials or the provider, not Frappe.
- If you have shell access, test the SMTP login directly:
  ```
  openssl s_client -connect smtp.gmail.com:587 -starttls smtp
  ```

  then issue `EHLO`, `AUTH LOGIN`, and the base64-encoded login ID and password. A `235` response means the login succeeded. A `535` or `534` response means the server rejected it.

Once the login works outside Frappe, go back to the Email Account and save it again with the same values.

## **Check what happened after the failure**

A failed login does not always show up immediately as a dialog. Two places to check:

- **Email Queue**: open the Email Queue list and filter by **Status = Error**. Open a failed row to see the server's rejection message against that specific email.
- **Error Log**: if the Email Account was disabled automatically (this happens after repeated authentication failures on a scheduled sync), search the Error Log list around the time it was disabled for the full traceback, then re-enable the Email Account once the credentials are fixed.

## **How to prevent it**

- Turn on 2FA and switch to an app password (or OAuth) for Gmail and Microsoft accounts before the provider forces the change on you.
- When a provider's password or API key is rotated, update the Email Account the same day — a stale password keeps the account disabled and silently stops notifications, welcome emails and alerts.

## **If this does not fix it**

If the login succeeds outside Frappe but still fails on the Email Account, raise a support ticket and attach: the exact error text, the Email Account name, and whether the failure is on **Save**, on **outgoing** send, or on **incoming** sync.

## **Related**

- [Email Account](https://docs.frappe.io/erpnext/email-account)
- [Email Domain](https://docs.frappe.io/erpnext/email-domain)
- [Setting up Sendgrid SMTP Email in ERPNext](https://docs.frappe.io/erpnext/setting-up-sendgrid-smtp-email-in-erpnext)
- [Microsoft Office365 Email OAuth](https://docs.frappe.io/framework/user/en/microsoft-email-oauth)