---
title: "Introduction"
space: "Drive"
url: "https://docs.frappe.io/drive/introduction"
updated: "2026-01-06"
---

## What is Frappe Drive?

You dislike domination of Google and closed-source cloud solutions. Given the sensitivity of this structure, you expect that there is some good open source solution.

To your horror, you click through them all - NextCloud, OwnCloud - and none of them satisfy you. They are slow. The UI is subpar. They feel flaky.

And then you discover Frappe Drive.
![](/files/Frappe%20Drive%20Image.png)


Aesthetic. Powerful. Reliable. 

Sign up on [Frappe Cloud](frappecloud.com/) now.

## Why Frappe Drive?

The idea of building a drive-like application has been floating around in Frappe since atleast [2015](https://github.com/frappe/frappe/issues/8723#issuecomment-164223523). While Frappe Framework has rather robust file handling itself, the need arose for building a standalone solution. As we dug deeper, what began as a simple file-sharing platform evolved into a comprehensive collaboration tool.

## Key Features

Core — the file manager

- Large file uploads using multi-part uploads
- Folder uploads to maintain your structure in Drive
- Preview files directly in your browser, [supported file previews](https://docs.frappe.io/drive/previews)
- Stream videos directly from the server
- Search for all your files and files shared shared with you
- View activity logs of a file to glance at the changes in permissions and file metadata
- Share files and folders with users, groups, everyone on the site or publish publicly
- Add guest users who have limited and controlled access to your site
- Pool storage of all users together or assign a quota of storage to each user

Writer — the document editor

- Collaborate with other users or guests in real time
- Annotate, resolve and reply to other users to give suggestions
- Manually version your documents to always be able to go back to an older version
- Automatic versioning to make sure you never lose data
- Import docx documents into the editor


<details>
<summary><em>More screenshots</em></summary>

![Image Preview](https://github.com/user-attachments/assets/993cbd87-a96c-4e5c-8737-0c03c9222723)

![File Sharing Dialog](https://github.com/user-attachments/assets/acb1a542-53d1-4d0e-b2e2-6c9b87f04e69)

![Editor](https://github.com/user-attachments/assets/fe87dfd1-3f55-42df-94b9-f7baed03a391)

![Editor with real time editing](https://github.com/user-attachments/assets/f89a2fab-e618-4d7d-90a6-aaa2cf45fa55)

</details>

## Under the Hood

- [**Frappe Framework**](https://github.com/frappe/frappe): A full-stack web application framework written in Python and Javascript. The framework provides a robust foundation for building web applications, including a database abstraction layer, user authentication, and a REST API.

- [**Frappe UI**](https://github.com/frappe/frappe-ui): A Vue-based UI library, to provide a modern user interface. The Frappe UI library provides a variety of components that can be used to build single-page applications on top of the Frappe Framework.

- [**TipTap**](https://github.com/ueberdosis/tiptap): Tiptap is a wrapper over ProseMirror that provides some friendlier APIs and defaults.

- [**ProseMirror**](https://github.com/prosemirror): ProseMirror is a flexible, extensible toolkit for building rich-text editors with precise control over document structure and behavior.

- [**YJS**](https://github.com/yjs/yjs): The Content Free Replicated Data type (CRDT) at the core of the real time collaboration in both the document and annotation system.


## Installation
Go [here](/drive/quick-start) for installation.

## Learn and Connect

- [Website](https://frappe.io/drive)
- [Telegram Public Group](https://t.me/frappedrive)
- [Discuss Forum](https://discuss.frappe.io/)
- [Documentation](https://docs.frappe.io/drive/quick-start)