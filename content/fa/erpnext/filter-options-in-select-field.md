---
title: "فیلترکردن گزینه‌های یک فیلد انتخاب"
slug: "filter-options-in-select-field"
source_url: "https://docs.frappe.io/erpnext/filter-options-in-select-field"
source_id: "erpnext/filter-options-in-select-field"
source_version: "4d74f14044cc0497ffa64b030ea56c8373e99f4abf9fe0c22e51859a9f707b8e"
source_updated: "2026-03-02"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
---

فرض کنید دو فهرست کشویی با برچسب‌های «ایالت» و «شهر» دارید. ایالت دو مقدار کارناتاکا و ماهاراشترا دارد و شهر چهار مقدار بنگلور، میسور، بمبئی و پونا. اگر می‌خواهید گزینه‌های شهر بر اساس ایالت انتخاب‌شده فیلتر شوند، می‌توانید اسکریپت سفارشی زیر را بنویسید:

```javascript
frappe.ui.form.on("Lead", "state", function(frm) {
  if(frm.doc.state == "Karnataka") {
    set_field_options("city", ["Bangalore","Mysore"])
  } else if(frm.doc.state == "Maharashtra") {
    set_field_options("city", ["Mumbai","Pune"])
  } else if(frm.doc.state == "") {
    set_field_options("city", ["","Bangalore","Mysore","Mumbai","Pune"])
  }
});
```

در کد، نام فیلدها و مقدارهایی که سامانه ذخیره می‌کند به همان شکل اصلی باقی مانده‌اند؛ برچسب فارسی آن‌ها در رابط می‌تواند «ایالت» و «شهر» باشد.

![نمونهٔ بازشدن فهرست کشویی با گزینه‌های فیلترشده](https://docs.frappe.io/files/filter_dropdown.gif)

نمونهٔ دیگری از اسکریپت سفارشی که گزینه‌های یک فیلد انتخاب را در جدول فرزند فیلتر می‌کند:

```javascript
frappe.ui.form.on('Parent DocType', {
    refresh: function (frm) {
        // اجرای این تابع هنگام تازه‌سازی یا بارگذاری دوبارهٔ فرم
        frm.fields_dict['child_table_fieldname'].grid.get_field('select_fieldname').get_query = function(doc, cdt, cdn) {
            return {
                filters: [
                    ['Some Field', '=', 'Some Value'] // معیار فیلتر را جایگزین کنید
                ]
            };
        };
    }
});
```

## نمونهٔ کاربرد

فرض کنید DocType والد **سفارش فروش** نام دارد و فیلد جدول فرزند آن `items` است. این جدول یک فیلد انتخاب با نام `itemcode` دارد و می‌خواهید فقط کالاهای یک گروه مشخص در گزینه‌ها نمایش داده شوند.

```javascript
frappe.ui.form.on('Sales Order', {
    refresh: function (frm) {
        frm.fields_dict['items'].grid.get_field('item_code').get_query = function(doc, cdt, cdn) {
            return {
                filters: [
                    ['Item Group', '=', 'Specific Category'] // معیار فیلتر را جایگزین کنید
                ]
            };
        };
    }
});
```

در این نمونه، `Sales Order`، `Item Group` و نام فیلدها شناسه‌های فنی‌اند؛ در رابط فارسی ERPNext، عنوان سفارش فروش و گروه کالا به‌صورت فارسی نمایش داده می‌شوند.

منبع: [فیلترکردن گزینه‌های فیلد انتخاب در ERPNext](https://docs.frappe.io/erpnext/filter-options-in-select-field). این صفحه ترجمهٔ غیررسمی است؛ مجوز محتوای نوشتاری منبع هنوز تأیید نشده است و تا زمان بررسی، بازنشر تحت شرایط CC BY-SA تأیید نمی‌شود. تصویر به فایل رسمی پیوند دارد و در این مخزن بازنشر نشده است.
