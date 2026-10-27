---
title: "تفاوت Lead، Contact و Customer"
slug: "difference-between-lead-contact-and-customer"
source_url: "https://docs.frappe.io/erpnext/difference_between_lead_contact_and_customer"
source_id: "erpnext/difference_between_lead_contact_and_customer"
source_version: "5c8f63f2c545bc2c31fe37276278392077132df863c436b1178a5e910df76053"
source_updated: "2026-07-23"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/difference_between_lead_contact_and_customer)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.

Lead، Contact و Customer در ERPNext بخش‌های متفاوتی از یک رابطهٔ تجاری را نشان می‌دهند. به‌جای آنکه این سه DocType را به‌جای یکدیگر به‌کار ببرید، رکورد متناسب با نقش فعلی طرف را انتخاب کنید.

## Lead

[Lead](/erpnext/lead) شخص یا سازمانی است که هنوز صلاحیت‌سنجی نشده و ممکن است به مشتری تبدیل شود. زمانی از Lead استفاده کنید که تیم فروش هنوز در حال بررسی نیاز، علاقه، زمان‌بندی یا تناسب طرف با محصول یا خدمت است.

Lead را می‌توان به Opportunity و در صورت لزوم به Customer تبدیل کرد.

## Contact

[Contact](/erpnext/contact) شخصی است که اطلاعات ارتباطی مانند نشانی‌های ایمیل و شماره‌های تلفن دارد. Contact را می‌توان به Customer، Supplier، Lead یا طرف دیگری پیوند داد.

ایجاد Contact به‌معنای ایجاد حساب مشتری یا رابطهٔ حسابداری نیست. از Contact برای نگهداری اطلاعات افرادی استفاده کنید که تیمتان در یک سازمان با آن‌ها در ارتباط است.

## Customer

[Customer](/erpnext/customer) طرف تجاری‌ای است که در تراکنش‌های فروش و حسابداری استفاده می‌شود. می‌توان Quotation، Sales Order، Delivery Note، Sales Invoice، قیمت‌گذاری، کنترل اعتبار، نشانی‌ها و Contactها را به Customer پیوند داد.

وقتی طرف به‌اندازهٔ کافی صلاحیت‌سنجی شده و فرایند شما به یک حساب مشتری قابل استفادهٔ مجدد نیاز دارد، Customer ایجاد کنید.

## مقایسه

| رکورد | نشان‌دهندهٔ | زمانی به‌کار ببرید که |
| --- | --- | --- |
| Lead | مشتری بالقوه‌ای که هنوز صلاحیت‌سنجی نشده است | علاقه ثبت شده، اما طرف هنوز باید ارزیابی شود. |
| Contact | یک شخص و اطلاعات ارتباطی او | لازم است فردی را که با او در ارتباط هستید ثبت کنید. |
| Customer | طرفی که به او کالا یا خدمت می‌فروشید | به تراکنش فروش، قیمت‌گذاری، تحویل، صورتحساب یا سابقهٔ حسابداری نیاز دارید. |

## گردش‌کار رایج

1. درخواست اولیه را به‌صورت Lead ثبت کنید.
2. نیاز را ارزیابی و یک [Opportunity](/erpnext/opportunity) ایجاد کنید.
3. هنگامی که حساب مشتری لازم است، Customer را ایجاد یا انتخاب کنید.
4. Contactها و [Address](/erpnext/address)های مربوط را به Customer پیوند دهید.
5. کار را با [Quotation](/erpnext/quotation) یا [Sales Order](/erpnext/sales-order) ادامه دهید.

همچنین می‌توانید مستقیماً برای Customer موجود Opportunity بسازید. اگر یک شخص واقعاً نمایندهٔ بیش از یک طرف باشد، Contact او را می‌توان به چند سازمان پیوند داد.

## موضوعات مرتبط

- [ثبت خودکار Lead](/erpnext/automate_lead_capturing)
- [Customer Group](/erpnext/customer-group)
- [CRM Settings](/erpnext/crm-settings)
