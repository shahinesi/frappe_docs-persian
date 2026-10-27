---
title: "Inviting agents"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/inviting-agents"
updated: "2026-01-06"
---

> Note: This feature is available only on the `develop` branch

The Invite Agents tab in the settings modal can be used to invite new or existing (haven't been invited yet) users to Helpdesk.

![invite agents tab in the settings modal](/files/Screenshot%202025-08-12%20at%201.11.50%E2%80%AFPM.png)

## Steps to invite

1. List out the emails you wish to invite in a comma-separated format.
    
    
    !['invite by email' field filled example](/files/Screenshot%202025-08-12%20at%201.23.22%E2%80%AFPM.png)

2. Select a suitable role.
    
    > If you are a `Manager`, you will be only shown `Agent` or `Manager` options

    
    !['role' field select expanded example](/files/Screenshot%202025-08-12%20at%201.26.35%E2%80%AFPM.png)

3. Trigger the invitation action using the 'Send Invites' button.
    
    
    ![invites sent example](/files/Screenshot%202025-08-12%20at%205.11.42%E2%80%AFPM.png)

All of the email addresses that were successfully invited will receive an invitation email with a link to accept the invitation. The sent invitations auto-expire in 3 days. Once an invitation expires, an email will be sent to the sender of the invitation.

## Cancel an invitation

To cancel a pending invitation, you can trigger the cancel invitation action using the 'Cancel Invitation' button in the UI.


![cancel a pending invitation](/files/Screenshot%202025-08-12%20at%205.20.45%E2%80%AFPM.png)

Once the invitation is cancelled, an email is sent to let the invitee know that the invitation was cancelled.

## Accept an invitation

To accept an invitation, use the link present in the invitation email. The link will redirect the invitee to a page that can be used to set/update the password **if a new [Framework](https://docs.frappe.io/framework/user/en/introduction) user was created because of accepting the invitation**.

To disable redirecting the invitee to set a password, you can disable username/password login present under the System Settings section of the Desk view.


![system settings](/files/Screenshot%202025-08-12%20at%205.42.02%E2%80%AFPM.png)
