---
title: "Setup Two Factor Authentication (v17+)"
space: "ERPNext"
url: "https://docs.frappe.io/erpnext/setup-new-2fa"
updated: "2026-10-20"
---

Two Factor Authentication (2FA) adds a second step to the login. After a user enters the password, they must also enter a verification code. The code comes from an authenticator app, an SMS or an email.

> This page describes version 17 and later.

## 1. Enable Two Factor Authentication

1. Go to **System Settings** &gt; *Login* tab &gt; *Two Factor Authentication* section.
2. Check *Enable Two Factor Auth*.
3. In *Two Factor Authentication method*, select one of these methods:
  - "OTP App": The user gets the code from an authenticator app, such as Google Authenticator, Microsoft Authenticator or 1Password. The code changes every 30 seconds (TOTP).
  - "SMS": The user gets the code in a text message.
  - "Email": The user gets the code by email.
4. In *OTP Issuer Name*, enter the name that users see in their authenticator app, for example "My Company ERP".
5. If you selected "SMS", you can change the text of the message in *OTP SMS Template*. Use `{{ otp }}` as the placeholder for the code.
6. Save.

## 2. Set up code delivery

Every method needs one of these setups:

- **OTP App** and **Email**: Set up an outgoing **Email Account**. With "OTP App", the first login sends a verification code by email. The user must enter this code before they can set up the app.
- **SMS**: Set up **SMS Settings**. You cannot save the "SMS" method without an SMS gateway URL.

## 3. Select the roles that use 2FA

When you enable 2FA, the system turns on *Two Factor Authentication* for the role "All". All users must then enter a code, including the Administrator.

To use 2FA only for some users:

1. Open the **Role** "All" and uncheck *Two Factor Authentication*.
2. Open each role that must use 2FA, for example "System Manager", and check *Two Factor Authentication*.

A user must enter a code if one or more of their roles has *Two Factor Authentication* checked.

2FA does not apply to API requests that use an API key and API secret.

## 4. Optional: Restricted IP addresses

You can set *Restrict IP* on a **User** to allow logins only from specific IP addresses. Two settings in **System Settings** control how this works together with 2FA:

- *Bypass Two Factor Auth for users who login from restricted IP Address*: Users who log in from their restricted IP address do not have to enter a code.
- *Bypass restricted IP Address check If Two Factor Auth Enabled*: Users can log in from any IP address if they use 2FA. You can also set this for one user in the **User** form.



## First login with OTP App

On the first login, the user sets up their authenticator app on the login screen.

1. Enter your username and password, and click *Login*.
2. The system sends a verification code to your email address. Enter this code in *Verification Code* and click *Verify*. This step makes sure that only the owner of the email address can set up the app.
  ![Enter the verification code from the email](https://github.com/user-attachments/assets/a19acf0e-800e-44ef-a447-90eb29ac3de9)
3. The login screen shows a QR code. Open your authenticator app and scan the QR code. If you cannot scan it, add the account manually in the app and enter the setup key that shows below the QR code.
4. The app shows a 6-digit code. Enter this code in *Verification Code* and click *Verify*.
  ![Scan the QR code and enter the code from the app](https://github.com/user-attachments/assets/4292c15d-6611-40ad-9a27-c041cf8ea5b5)

You must complete these steps within 5 minutes. If the time expires, refresh the page and log in again.

The QR code shows only one time. On the next logins, you only enter the code from your authenticator app.

## Login with SMS or Email

1. Enter your username and password, and click *Login*.
2. The system sends a verification code to your mobile number or email address.
3. Enter the code in *Verification Code* and click *Verify*.

The code is valid for 5 minutes.

## Lost or new device

If a user loses their phone or wants to use a different authenticator app, reset their OTP secret:

1. Open the **User**.
2. Click *Password* &gt; *Reset OTP Secret*.

The system sends an email to the user to tell them about the reset. On the next login, the user sets up the authenticator app again, as described in [First login with OTP App](#first-login-with-otp-app).

Users can also reset their own OTP secret in their **User** form. A System Manager can reset it for all users.

## Upgrade from version 16

- The setup link email and the `/qrcode` page no longer exist. Setup links in old emails do not work. Users who did not complete the setup do it on the login screen at their next login.
- The setting *Expiry time of QR Code Image Page* no longer exists.
- The upgrade deletes old QR code images from the *Home/Barcodes* folder. These images contained the OTP secrets of users.
- Users who already set up their authenticator app do not have to do anything.

## FAQ

### I set up the OTP App, but I cannot log in

The code from the app depends on the time on your device. Make sure that the time on your device is correct and synchronized automatically. A difference of more than 30 seconds to the server time can make the code invalid.

### I did not get the email with the verification code

Make sure that the outgoing **Email Account** works, and look in your spam folder. If the code expired, refresh the page and log in again to get a new code.