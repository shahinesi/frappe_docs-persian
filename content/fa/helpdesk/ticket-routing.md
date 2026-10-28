---
title: "مسیردهی تیکت‌ها"
slug: "ticket-routing"
source_url: "https://docs.frappe.io/helpdesk/ticket-routing"
source_id: "helpdesk/ticket-routing"
source_version: "c64fa11c9ec5c42df0f8b7d62b44e4b3507e9520dfe70dbaffd8402523b0f341"
source_updated: "2026-10-23"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/helpdesk/ticket-routing)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصاویر رابط کاربری صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

در Frappe Helpdesk می‌توانید با قابلیت **اسکریپت سرور** مسیردهی تیکت‌ها را خودکار کنید. DocType به‌نام `Server Script` اجازه می‌دهد کد Python سمت سرور بنویسید، بدون آنکه لازم باشد اپ سفارشی بسازید یا چیزی مستقر کنید. برای اطلاعات بیشتر به [مستندات اسکریپت سرور](https://docs.frappe.io/framework/user/en/desk/scripting/server-script) مراجعه کنید.

## 1. مسیردهی بر اساس نوع تیکت

نام فیلد `agent_group` در رابط کاربری به‌صورت **تیم** نمایش داده می‌شود.

```python
if (doc.ticket_type == "Bug"):
    doc.agent_group = "Frappe Cloud"
    
elif (doc.ticket_type == "Customization"):
    doc.agent_group = "Billing"

else:
    doc.agent_group = "Product Experts"
```

## 2. مسیردهی بر اساس ایمیل_حساب

```python 
if (doc.email_account == "Accounting"):
    doc.agent_group = "L1 Accounting"
    
elif (doc.email_account == "Warehouse"):
    doc.agent_group = "L2 Warehouse"

else:
    doc.agent_group = "L1"
```

## 3. مسیردهی بر اساس فیلدهای سفارشی

برای افزودن فیلد سفارشی، راهنمای [افزودن فیلد سفارشی](field-dependency.md#-adding-a-custom-field) را دنبال کنید. پس از افزودن فیلدها، می‌توانید با اسکریپتی مانند نمونهٔ زیر تیکت‌ها را بر اساس مقدار فیلد سفارشی مسیردهی کنید:

```python
if (doc.custom_category == "Frappe Cloud"):
    doc.agent_group = "Frappe Cloud"
    
elif (doc.custom_category == "Accounting"):
    doc.agent_group = "Billing"

else:
    doc.agent_group = "Product Experts"
```

---

**منبع:** [مستندات رسمی Frappe Helpdesk](https://docs.frappe.io/helpdesk/ticket-routing). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر اصلی در این مخزن بازنشر نشده‌اند.
