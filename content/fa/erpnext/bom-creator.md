---
title: "ایجادکنندهٔ BOM چندسطحی"
slug: "bom-creator"
source_url: "https://docs.frappe.io/erpnext/bom-creator"
source_id: "erpnext/bom-creator"
source_version: "17e8bdca24ceb9d177f904bebd189e86e53e0258daee2082a72231d88cdd6e6b"
---

ابزار **BOM Creator** به کاربران امکان می‌دهد BOMهای چندسطحی را در یک صفحه ایجاد کنند.

![درخت BOM Creator](https://docs.frappe.io/files/bom_creator_tree.png)

### چرا از BOM Creator استفاده کنیم؟

کاربران گاهی می‌پرسند چرا برای ایجاد BOM به ابزار جداگانه‌ای نیاز است. دلیل آن حذف رفت‌وبرگشت‌های غیرضروری است. در صفحهٔ استاندارد BOM، ابتدا باید BOM همهٔ زیرمونتاژها و سپس BOM محصول نهایی را ایجاد کنید. این فرایند معمولاً به رفت‌وبرگشت زیادی نیاز دارد. همچنین گاهی مشاهدهٔ سلسله‌مراتب کامل در صفحهٔ استاندارد BOM دشوار است.

برای رفع این مشکلات، BOM Creator ارائه شده است. در این ابزار می‌توانید با مؤلفهٔ درختی، BOM چندسطحی بسازید.

روند کار به این شکل است:

- محصول نهایی را انتخاب و رکورد را ذخیره کنید.

![فرم BOM Creator](https://docs.frappe.io/files/bom-creator.png)

- در فرم، گزینه‌هایی برای افزودن مواد اولیه و اقلام زیرمونتاژِ مرتبط با محصول نهایی در اختیار دارید.

![نوار ابزار BOM Creator](https://docs.frappe.io/files/toolbar_bom_creator.png)

- برای تبدیل مواد اولیه به اقلام زیرمونتاژ، ابتدا قلم را انتخاب و سپس دکمهٔ **Convert to Sub-Assembly** را کلیک کنید.

![تبدیل قلم به زیرمونتاژ](https://docs.frappe.io/files/convert_to_sub_assembly.gif)

- مقدار را در صورت نیاز ویرایش کنید.

### مرحلهٔ پایانی

پس از ساختاردهی BOM با مؤلفهٔ درختی، باید BOM Creator را ثبت نهایی کنید. با ثبت نهایی BOM Creator، سامانه BOMها را در یک کار پس‌زمینه ایجاد می‌کند.

![ثبت نهایی BOM Creator](https://docs.frappe.io/files/submit-bom.gif)

منبع: [ایجادکنندهٔ BOM چندسطحی](https://docs.frappe.io/erpnext/bom-creator). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر و فایل متحرک به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
