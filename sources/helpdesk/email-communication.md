---
title: "Email Communication"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/email-communication"
updated: "2026-05-28"
---

This feature allows you to seamlessly exchange emails with your customers directly from the Ticket page within the system. All email interactions are conveniently stored and accessible, promoting efficient communication and record-keeping.

**Sending Emails**
------------------

1. **Locate the Reply Button:** On the Ticket page, find the "Reply" button, typically situated at the bottom of the page.
2. **Compose Your Email:** A new email composition window will appear. Here, you can:

![Screenshot 2024-07-05 at 11.04.39 AM](/files/Screenshot 2024-07-05 at 11.04.39 AM.png)  



	* **Subject:** Craft a clear and concise subject line that summarizes the email's purpose.
	* **To:** Enter the recipient's email address in the "To" field.
	* **Cc & Bcc (Optional):** Utilize the "Cc" (Carbon Copy) field to include additional recipients who should be informed but not required to respond. The "Bcc" (Blind Carbon Copy) field allows you to send a copy to recipients without revealing their addresses to other recipients.
	* **Message Body:** Compose the main content of your email. You can leverage formatting options for better readability and include attachments if necessary.
3. **Leverage Canned Responses (Optional):** Streamline communication by incorporating pre-defined Canned Responses. Click on the "Canned Responses" icon and select the desired message from the available list. This pre-populates the message body, saving you time and ensuring consistency.

![Screenshot 2024-07-05 at 11.06.47 AM](/files/Screenshot 2024-07-05 at 11.06.47 AM.png)
4. **Hit Submit:** Once you've crafted your email, click the "Submit" button to send it to the recipient(s).

**Viewing Email Communication**
-------------------------------

All email interactions related to a specific Ticket are consolidated within the system.

![Screenshot 2024-07-05 at 10.58.40 AM](/files/Screenshot 2024-07-05 at 10.58.40 AM.png)  


**Email Account Setup**
-----------------------

You can sync your email account with Frappe Helpdesk to send and receive emails from Frappe Helpdesk.

You can manage multiple incoming and outgoing Email Accounts in Frappe Helpdesk. There has to be at least one default outgoing account and one default incoming account. If you are on the Frappe Helpdesk cloud, the default outgoing email is set by us.

To access Email Accounts, go to Email Account Master from the desk.

### **1. Prerequisites**

Before creating an Email Account, you need an Email Domain. However, you can skip creating an Email Domain if you're using one of the services listed [here](https://docs.erpnext.com/docs/user/manual/en/email-inbox#2-create-an-email-domain).


> **For detailed Email Account setup you can check ERPNext documentation** [**here**](https://docs.erpnext.com/docs/user/manual/en/email-account)
> 
> 

### **2. How to create an Email Account**

1. Go to the Email Account list, and click on New.
2. Enter the email address with the domain. Domains need to be created to create an email account. You don't need to create a domain if you're syncing an email from certain providers as listed [here](https://docs.erpnext.com/docs/user/manual/en/email-inbox#2-create-an-email-domain).
3. Enter the email account password.
4. Save. If the credentials are correct, the email account will be synced.


> **For some services like Gmail, you may need to enable 2FA and use** [**App Passwords**](https://myaccount.google.com/u/0/apppasswords)**.**
> 
> 

### **3. Additional options when creating an Email Account**

1. **Use Different Email Login ID**: To use an alternative email login and password to access this account. For example, if you have [notifications@example.com](mailto:notifications@example.com) and you want users to access this email with an alternate email ID, they should tick this checkbox. The recipients will see [notifications@example.com](mailto:notifications@example.com) as the sender.
2. **Awaiting password**: If you're creating this account on behalf of someone and the password is unknown, tick this checkbox. When the other user logs in, they'll be prompted to enter the password.
3. **Use ASCII encoding for the password**: Ticking this will use ASCII encoding for the password.
