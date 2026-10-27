---
title: "How do I post Job Openings to LinkedIn or Indeed?"
space: "Frappe HR"
url: "https://docs.frappe.io/hr/recruitment/help-articles/how-do-i-post-job-openings-to-linkedin-or-indeed"
updated: "2026-10-24"
---

Frappe HR does not post a Job Opening to LinkedIn, Indeed or other job boards by itself. But you can publish the opening on your own job portal, post it on the job board with a link back to your site, and get every application in Frappe HR as a Job Applicant.

## Why there is no direct posting

A Job Opening in Frappe HR is published only on your own site `https://<your-site>/jobs`. Frappe HR has no connector for LinkedIn, Indeed, Naukri, or other job boards. When you set a Job Opening to **Open**, nothing is sent to these sites.

Job boards let you send candidates to an application page on your own website. So the job board shows the job, and your Frappe HR site collects the applications.

For example, Bluepeak Technologies hires a Senior Python Developer. The HR Manager posts the job on LinkedIn and Indeed. Candidates click **Apply** on the job board, fill in the Job Application form on the Bluepeak site, and each application comes in as a Job Applicant with the **Source** set to LinkedIn or Indeed.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Create the Job Opening first. See [Job Opening](https://docs.frappe.io/hr/job-opening).
- Your site must be open to the public, so candidates can open the job page without signing in.

## Steps

### 1. Publish the Job Opening on your job portal

1. Go to **Recruitment → Job Opening** and open the job.
2. Make sure **Status** is **Open**.
3. Select **Publish on website**. The **Route** fills in, for example `jobs/bluepeak_technologies_pvt_ltd/senior-python-developer`.
4. Click **Save**.

![](/files/imagef44008.webp)

5. In the sidebar, under **Links**, click **See on Website**. The public job page opens with an **Apply Now** button. Copy this page's address from the browser.

![](/files/02-job-page-apply-now.webp)

The job also shows on your job portal at `https://<your-site>/jobs`. See [Job Portal](https://docs.frappe.io/hr/job-portal).

### 2. Add the job boards as Job Applicant Sources

Do this once. The **Source** of each Job Applicant then tells you which job board the candidate came from.

1. In the search bar, type `Job Applicant Source` and open the **Job Applicant Source** list.
2. Click **Add Job Applicant Source**.
3. In **Source Name**, enter `LinkedIn`.
4. Click **Save**.
5. Do the same for `Indeed` and every other job board you use.

![](/files/03-applicant-source.webp)

### 3. Make one application link for each job board

The Job Application form fills in the fields that you put in its address. Use this to make one link for each job board:

```
https://<your-site>/job_application/new?job_title=<Job Opening ID>&source=LinkedIn
```

- Replace `<your-site>` with your site address.
- Replace `<Job Opening ID>` with the ID of the Job Opening, for example `HR-OPN-2026-0001`. The ID shows in the sidebar of the Job Opening form.
- Write the source exactly as the **Source Name** you saved in step 2, with the same capital letters.
- If you set an **Application Web Form Route** in the Job Opening, use that route instead of `job_application`.

For the example above, the two links are:

```
https://bluepeak.example.com/job_application/new?job_title=HR-OPN-2026-0001&source=LinkedIn
https://bluepeak.example.com/job_application/new?job_title=HR-OPN-2026-0001&source=Indeed
```

Open each link in a private browser window to check it. The form opens with the **Job Opening** and the **Source** already filled in.

![](/files/imagea7d5b7.webp)

### 4. Post the job on LinkedIn and Indeed

1. Create the job post on the job board. Copy the job title, description, location and salary range from the Job Opening.
2. In the job board's application settings, select the option that sends candidates to an external website.
3. Paste the link for that job board from step 3.
4. Publish the job post.

The name and place of this setting change from time to time, and some job boards offer it only on some plans. If you cannot find it, check the job board's help pages.

### 5. Review the applications

When a candidate submits the form, Frappe HR creates a Job Applicant linked to the Job Opening.

1. Go to **Recruitment → Job Applicant**.
2. Click **Filters** and add the filter **Source** = **LinkedIn**. You now see only the candidates who came from LinkedIn.

![](/files/image35bc4c.webp)

The number of applications for each Job Opening also shows in the **Job Applicant** count at the top of the Job Opening form.

## Related

- [Job Opening](https://docs.frappe.io/hr/job-opening)
- [Job Portal](https://docs.frappe.io/hr/job-portal)
- [Job Applicant](https://docs.frappe.io/hr/job-applicant)
- [REST API](https://docs.frappe.io/framework/user/en/api/rest)