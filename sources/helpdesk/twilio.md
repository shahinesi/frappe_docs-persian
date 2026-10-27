---
title: "Twilio"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/twilio"
updated: "2026-05-21"
---

Twilio is a cloud communications platform that allows businesses to integrate voice, video, messaging, and authentication functionalities into their applications. This integration enables you to make calls directly from various pages within the Helpdesk.

## Twilio setup

To configure Twilio for use within the Helpdesk, follow these steps:

1. **Twilio Subscription:** Obtain an active Twilio subscription (refer to Twilio's documentation for details).
2. **Twilio Credentials:** From your Twilio account, retrieve your Account SID, Auth Token, and Twilio Mobile Number.
3. **Settings**: Click the dropdown menu on the top left logo and select "Settings."
  ![](/files/Screenshot%202025-08-19%20122908.png)
4. **Telephony Settings:** Navigate to Telephony Settings, enable Twilio and add your Account SID, Auth Token and twilio number. You can also enable call recording at this point.

![](/files/telephony-settings.png)

## Twilio API configuration

For your Helpdesk's API to connect with Twilio, perform the following configurations within Twilio:

1. **Incoming Call API URL:** Under **Phone Numbers** -> **Manage** -> **Active Numbers**, select your mobile number. Locate the **Voice Configuration** form and within the "**A call comes in**" section, add the following **URL** to the URL field:
  ```
    "https://<yoursitename>/api/method/telephony.twilio.api.twilio_incoming_call_handler"
  ```

![](/files/twilio-voice-config.png)

```
This URL is responsible for handling incoming calls. 
```

> By simply adding or removing this incoming call handler you can enable or disable incoming calls.

2. **Outgoing Call API URL:** Navigate to **Phone Numbers** -> **Manage** -> **TwiML apps** and select your app. In the **Voice Configuration** -> **Request URL** field, enter the following URL:
  ```
    "https://<yoursitename>/api/method/telephony.twilio.api.voice"
  ```

![](/files/twilio-app-voice-config.png)

```
This URL is used for making outbound calls.
```

> Please refer to Twilio's official guide for any additional Twilio configuration requirements.



## Make call

- **Ticket page:** A call button is available in the right section above ticket details, use this button to initiate a call.
  ![](/files/ticket-view-call.png)

## Call pop-up

Upon making or receiving a call, a pop-up window appears displaying:

- Caller name
- Mobile number
- Call status
- Call duration
- Mute button
- Action buttons (Accept, Reject, Cancel Call)

![](/files/Diler.png)

This window can be minimized, allowing navigation to other screens, while remaining accessible in the far-right corner of the navbar.  

![](/files/diler-minimized.png)

