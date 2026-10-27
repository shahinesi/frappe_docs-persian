---
title: "S3 file storage"
space: "Framework"
url: "https://docs.frappe.io/framework/help/can-i-store-my-files-on-s3-gcs-or-google-drive-instead-of-the-server"
updated: "2026-10-13"
---

## Can I store my files on S3, GCS or Google Drive instead of the server?

Not directly. Frappe does not have a built-in setting that sends newly uploaded file attachments to  
Amazon S3, Google Cloud Storage (GCS) or Google Drive. Every file a user uploads through the attach  
dialog is saved to the site's local file storage, not to an external object store.

This question comes up most from teams whose attachments are growing fast, for example scanned  
receipts, customer-uploaded videos, or product images, and who want to move them off the site's disk  
before it runs out of space.

## Why it is not available

Frappe's file storage writes directly to local disk by design, for speed and simplicity. Sending new  
uploads to an external object store would need a change to how Frappe reads and writes files, not just  
a setting, so there is no supported way to do this today.

The **Google Drive** integration in Frappe Framework is often mistaken for this feature. It is not the  
same thing: it only lets you browse your own Google Drive and attach a *link* to a file that already  
exists there. It does not change where new uploads from your users are stored, and it does not move  
existing site files to Drive.

## The closest way

### If the file already exists outside Frappe

If a file is already hosted on S3, GCS, Google Drive or any other service, attach a link to it instead  
of uploading a copy:

1. Open the document and go to **Attachments** in the sidebar.
2. Click **+**, then choose **Link**.
3. Paste the file's URL into **Attach a web link** and click **Upload**.

![](attach-web-link.png)

Frappe stores the link, not the file, so the attachment uses none of the site's storage.

### If you want new uploads to go to S3 automatically

A community-maintained marketplace app, **Frappe S3 Attachment**, redirects new uploads to an S3  
bucket. It is not built or maintained by Frappe:

- Frappe support cannot troubleshoot issues in the app or guarantee it works with your site's version.  
Check the app's own listing for the Frappe versions it currently supports before you install it.
- It is built and tested against AWS S3. An S3-compatible provider such as Oracle Object Storage or  
MinIO may work with the same bucket name, access key, secret key, region and a custom endpoint URL,  
but this is not confirmed, and any issues with it are yours to resolve.

## Limits of this workaround

- Neither option gives automatic folder structure, for example by document type, customer or date.  
That needs custom development through a Frappe Partner or your own team.
- The web link option only works for files you already host elsewhere. It does not reduce the space  
used by files already uploaded to Frappe.
- If moving file storage off the server matters to your team, raise it as a feature request on  
[GitHub](https://github.com/frappe), or ask in the [community forum](https://discuss.frappe.io)  
whether another developer has already built something you can reuse.

## Related

- [Attachments](https://docs.frappe.io/framework/user/en/desk/attachments)
- [Google Drive](https://docs.frappe.io/framework/user/en/integration/google_drive)
- [Upload Backups to Amazon S3](https://docs.frappe.io/erpnext/aws_s3)