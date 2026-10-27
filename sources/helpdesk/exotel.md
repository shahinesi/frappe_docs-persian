---
title: "Exotel"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/exotel"
updated: "2026-05-21"
---

Exotel is a cloud telephony platform that enables businesses to manage voice calls, SMS, and communication workflows without traditional phone hardware. The integration with Frappe Helpdesk combines these communication capabilities with customer relationship management to provide a unified system for handling customer interactions.



Exotel setup
------------

To configure Exotel for use within the Helpdesk, follow these steps:

1. **Exotel Subscription:** Obtain an active Exotel subscription (refer to Exotel's documentation for details).
2. **Exotel Credentials:** From your Exotel account, retrieve your Account SID, Subdomain, API Key, API Token and Exotel Mobile Number (Exophones).
    ![](/files/Screenshot%202025-01-20%20at%206.51.13%E2%80%AFPM.png)
    ![](/files/Screenshot%202025-01-20%20at%206.56.49%E2%80%AFPM.png)
3. **Settings**: Click the dropdown menu on the top left logo and select "Settings."
    ![](/files/Screenshot%202025-08-19%20122908.png)
4. **Telephony Settings:** Navigate to Telephony Settings and enable Exotel. Add your Account SID, Subdomain, API Key, API Token, Webhook verify token (it can be anything it will be used later in Exotel incoming call flow configuration), exotel number and personal number also. You can also enable call recording at this point.
![](/files/exotel-telephony-settings.png)



Exotel incoming call flow configuration
------------------------

> By simply adding or removing this incoming call flow you can enable or disable incoming calls.

For your Helpdesk's API to connect with Exotel, perform the following configurations within Exotel:

1. Login to your Exotel account and go to App Bazar.
2. Create a new "App" for a new flow.
    ![](/files/Screenshot%202025-01-20%20at%207.02.50%E2%80%AFPM0a6a6d.png)
3. Setup the flow as you wish it to be.
    
    * [Dial Whom](https://support.exotel.com/support/solutions/articles/3000088074-working-with-connect-applet-dial-whom-)
    * [Passthru](https://support.exotel.com/support/solutions/articles/48283-working-with-passthru-applet)
    * Check the documentation to learn about all the applets in flow builder - [Link](https://developer.exotel.com/applet)
4. Set "Dial Whom" as user group. In user group there can be multiple agents. Incoming call will be redirected to agents in this group in the order they are added.
    ![](/files/Screenshot%202025-01-20%20at%207.19.44%E2%80%AFPM.png)
    ![](/files/Screenshot%202025-01-20%20at%207.37.38%E2%80%AFPM.png)
5. You can also set how you want to distribute calls.
    ![](/files/Screenshot%202025-01-20%20at%207.44.03%E2%80%AFPM.png)
6. In your connect API under "Create popup...", copy and paste URL (Callback API) mentioned below. Here use webhook verify token which was mentioned in **Exotel Setup (point 4)**.


    ```
    https://<yoursitename>/api/method/telephony.exotel.handler.handle_request?key=<webhook-verify-token>
    ```
    
    ![](/files/Screenshot%202025-01-20%20at%207.08.08%E2%80%AFPM.png)
7. After that add a "Passthru applet" under "After Call Conversation ends" and paste the same URL.
    
    ![](/files/Screenshot%202025-01-20%20at%207.20.05%E2%80%AFPM.png)
    ![](/files/Screenshot%202025-01-20%20at%207.20.46%E2%80%AFPM.png)
    > Note: Make sure to check "Make Passthru Async".

8. Similary, add another "Passthru applet" under "If nobody answers..." section and paste the same URL.
    ![](/files/Screenshot%202025-01-20%20at%207.20.14%E2%80%AFPM.png)
    ![](/files/Screenshot%202025-01-20%20at%207.24.51%E2%80%AFPM.png)
    > Note: Make sure to check "Make Passthru Async".

9. Save the flow.
10. Now assign this newly created "App" to your ExoPhone from which you receive your business calls.
    ![](/files/Screenshot%202025-01-20%20at%207.26.56%E2%80%AFPM.png)


Make call
-----------

* **Ticket page:** A call button is available in the right section above ticket details. Use this button to initiate a call, but ensure the **Mobile No** field in the **Person** section includes the country code.
    ![](/files/ticket-view-call.png)

> Make sure to complete your KYC on Exotel before making calls [docs](https://support.exotel.com/support/solutions/articles/110606-trial-accounts-how-do-i-test-outbound-calling-)

Call pop-up
-----------

Upon making or receiving a call, a pop-up window appears displaying:

* Caller name
* Mobile number
* Call status
* Call duration
* Action buttons (Close or Minimize)


![](/files/Diler.png)


This window can be minimized, allowing navigation to other screens, while remaining accessible in the far-right corner of the navbar.  

![](/files/diler-minimized.png)
