---
title: "کارزار بازاریابی"
slug: "campaign"
source_url: "https://docs.frappe.io/erpnext/campaign"
source_id: "erpnext/campaign"
source_version: "e8aebe861554e45abf04faf1f5122b42aa965f3974df4a3513862139a9862402"
---

**Campaign (کارزار) اجرای جامعی از یک راهبرد فروش برای ترویج محصول یا خدمت است.**

در CRMِ ERPNext، کارزار به ابتکار بازاریابی ساختاریافته‌ای گفته می‌شود که برای رسیدن به هدف‌های مشخص کسب‌وکار طراحی شده است؛ مانند جذب سرنخ، افزایش فروش یا تقویت آگاهی از برند.

قابلیت Campaign به کاربران اجازه می‌دهد فعالیت‌های بازاریابی را در ماژول CRM به‌طور مؤثر برنامه‌ریزی، اجرا و پایش کنند. با استفاده از این قابلیت، سازمان‌ها می‌توانند تلاش‌های بازاریابی را هماهنگ کنند، مخاطبان مناسب را با پیام‌های متناسب هدف بگیرند، عملکرد کارزار را بسنجند و در نهایت از راه بازاریابی مؤثر، رشد کسب‌وکار را پیش ببرند.

کارزار در بخش مشخصی از بازار و در محدودهٔ جغرافیایی معین اجرا می‌شود تا هدف‌های تعیین‌شده را محقق کند.

برای دسترسی به Campaign به مسیر زیر بروید:

> صفحهٔ اصلی > CRM > Campaign > Campaign

![صفحهٔ Campaign](https://docs.frappe.io/files/campaign.png)

## ایجاد Campaign

- به فهرست Campaign بروید و ایجاد مورد جدید را انتخاب کنید.
- نامی برای کارزار وارد کنید.
- توضیحی دربارهٔ موضوع کارزار بنویسید.
- ذخیره کنید.

## قابلیت‌ها

### برچسب‌گذاری Campaign در سرنخ، فرصت فروش و Quotation

وقتی کارزار بازاریابی باعث ایجاد سرنخ یا فرصت فروش می‌شود، هنگام ایجاد [سرنخ](https://docs.frappe.io/erpnext/lead) یا [فرصت فروش](https://docs.frappe.io/erpnext/opportunity) می‌توانید Campaign را به آن پیوند دهید. Campaign را می‌توان در [راهنمای «Quotation | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/quotation) نیز مشخص کرد.

این کار با محاسبهٔ بازگشت سرمایه (ROI)، سنجش اثربخشی کارزار بازاریابی را ممکن می‌کند.

![Campaign در Lead](https://docs.frappe.io/files/campaign-in-lead.png)

### مشاهدهٔ سرنخهای ایجادشده از یک Campaign

- در Campaign، دکمهٔ **View Leads** را انتخاب کنید.

![Campaign - View Leads](https://docs.frappe.io/files/campaign-view-leads.png)

- فهرستی فیلترشده از سرنخهای ایجادشده برای آن کارزار نمایش داده می‌شود.
- با کلیک روی **جدید** می‌توانید سرنخهای جدیدی نیز برای همان کارزار بسازید.

![Campaign - New Lead](https://docs.frappe.io/files/campaign-new-lead.png)

### تنظیم زمان‌بندی ایمیل برای Email Campaign

اگر می‌خواهید از طریق ایمیل برای سرنخها یا مخاطبان خود کارزار اجرا کنید، از [کارزار ایمیلی](email-campaign.md) استفاده کنید.

برای Campaign باید زمان‌بندی تنظیم کنید. برای افزودن مورد به برنامهٔ کارزار، **Add Row** را انتخاب کنید.

![زمان‌بندی Campaign](https://docs.frappe.io/files/campaign-email-schedule.png)

- در **Email Template**، الگوی ایمیلی را انتخاب کنید که می‌خواهید برای سرنخ یا مخاطب ارسال شود. می‌توانید الگو را به روش زیر بسازید:

![Campaign - Email Template](https://docs.frappe.io/files/email-template.png)

- در **Send After (days)**، تعداد روزهایی را مشخص کنید که پس از آن ایمیل مربوطه ارسال می‌شود. با استفاده از این فیلد، روز ارسال نسبت به **Start Date** در **Email Campaign** محاسبه می‌شود.

### داشبورد

داشبورد Campaign همهٔ Email Campaignها و پست‌های شبکه‌های اجتماعیِ پیوندخورده با Campaign را نشان می‌دهد. همچنین از همین‌جا می‌توانید Email Campaign یا Social Media Post جدیدی بسازید.

![داشبورد Campaign](https://docs.frappe.io/files/campaign-dashboard.png)

## موضوعات مرتبط

- [سرنخ](https://docs.frappe.io/erpnext/lead)
- [فرصت فروش](https://docs.frappe.io/erpnext/opportunity)
- [راهنمای «Quotation | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/quotation)
- [کارزار ایمیلی](email-campaign.md)

بعدی: [کارزار ایمیلی](email-campaign.md)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/campaign). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
