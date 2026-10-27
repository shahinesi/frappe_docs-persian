---
title: "افزودن کنش سفارشی به فیلد پیوند"
slug: "custom_action_link_field"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/custom_action_link_field"
source_id: "framework/user/en/guides/app-development/custom_action_link_field"
source_version: "e0ace907d6adb129943e0e9c79e51c5637583540087c2b9304614808692b6273"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/guides/app-development/custom_action_link_field)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصویر نمونه در مخزن این مستندات بازنشر نشده است؛ مجوز جداگانهٔ آن تأیید نشده است.

با تعریف تابع در فضای نام `frappe.ui.form.ControlLink.link_options` می‌توانید گزینهٔ پیوند سفارشی تازه‌ای به فیلد پیوند استاندارد اضافه کنید.

درون `frappe.ui.form.ControlLink.link_options` به شیء فیلد پیوند دسترسی دارید.

### 1. افزودن گزینهٔ سفارشی

```js
frappe.ui.form.ControlLink.link_options = function(link) {
 return [
 {
 html: ""
 + " "
 + __("Custom Link Option")
 + "",
 label: __("Custom Link Option"),
 value: "custom__link_option",
 action: () => {}
 }
 ];
}
 
```

پس از آن‌که تابعی به `frappe.ui.form.ControlLink.link_options` نسبت دهید، فیلد پیوند گزینهٔ تازه‌ای خواهد داشت:

![گزینهٔ پیوند سفارشی](https://user-images.githubusercontent.com/7310479/182354398-c1fc9f55-4464-4683-bb74-982ec2546f71.png)

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/guides/app-development/custom_action_link_field). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
