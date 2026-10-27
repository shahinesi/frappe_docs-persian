---
title: "Email Notifications"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/email-notifications"
updated: "2026-10-23"
---

Some emails are sent by Helpdesk based on the activities carried out by the users. Currently, there are 4 kinds of emails:

- Share Feedback
- Acknowledgement
- Reply From Contact
- Reply From Agent

To customize the content and the related options associated with each kind of email, you can use the 'Email Notifications' tab of the settings view.

![email notification list](/files/email-notification-listb47594.png)

## Share Feedback

This email is sent to the user who has raised the ticket after the ticket is closed or resolved. The purpose of the email is to get feedback on the support experience. 

This **only works** for **tickets** raised via **Email**, as we already have provision to get feedback for the tickets raised via customer portal.

If **feedback** already **exists** for the ticket, the **email** will **not** be **sent**.

The available customizations are highlighted in the image below.

![share feedback customizations](/files/share-feedbackc4e5ff.png)

### Available variables (share feedback)

The content field supports Jinja templates. The dynamic variables that can be used with the template are listed below:

- `url`: `str`  
The url of the feedback form
- `doc`: `HDTicket`  
The support ticket document. All fields associated with the `HDTicket` [doctype](https://docs.frappe.io/framework/user/en/basics/doctypes) are available.

## Acknowledgement

This email is sent to the user right after creating an email ticket. The purpose of the email is to let the user know that a support ticket was created because of the sent email.

The available customizations are highlighted in the image below.

![acknowledgement customizations](/files/acknowledgement.png)

### Available variables (acknowledgement)

The content field supports Jinja templates. The dynamic variables that can be used with the template are listed below:

- `doc`: `HDTicket`  
The support ticket document. All fields associated with the `HDTicket` [doctype](https://docs.frappe.io/framework/user/en/basics/doctypes) are available.

## Reply From Contact

This email is sent to all of the assigned agents after a reply from one of the contacts. The purpose of this email is to let all of the assigned agents know that a contact has replied.

The available customizations are highlighted in the image below.

![reply from contact customizations](/files/reply-from-contact.png)

> The email content is used only for tickets raised via Portal.

### Available variables (reply from contact)

The content field supports Jinja templates. The dynamic variables that can be used with the template are listed below:

- `message`: `str`  
The content of the email reply.
- `ticket_url`: `str`  
The url of the support ticket.
- `doc`: `HDTicket`  
The support ticket document. All fields associated with the `HDTicket` [doctype](https://docs.frappe.io/framework/user/en/basics/doctypes) are available.

## Reply From Agent

This email is sent to all of the recipients associated with an agent reply. The purpose of this email is to let the recipients know that an agent has sent a message.

The available customizations are highlighted in the image below.

![reply from agent customizations](/files/reply-from-agent.png)

> The email content is used only for tickets raised via Portal.

### Available variables (reply from agent)

The content field supports Jinja templates. The dynamic variables that can be used with the template are listed below:

- `message`: `str`  
The content of the reply.
- `ticket_url`: `str`  
The url of the ticket on Customer portal.
- `doc`: `HDTicket`  
The support ticket document. All fields associated with the `HDTicket` [doctype](https://docs.frappe.io/framework/user/en/basics/doctypes) are available.

