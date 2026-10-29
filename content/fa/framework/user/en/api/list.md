---
title: "نمای فهرست"
slug: "list"
source_url: "https://docs.frappe.io/framework/user/en/api/list"
source_id: "framework/user/en/api/list"
source_version: "50f163622d265a8820a8fc5ef78cffae441909db58bc9a79d7ec28523638566e"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

نمای فهرست برای همهٔ DocTypeها، به‌جز جدول‌های فرزند و DocTypeهای تکی، ساخته می‌شود.

نمای فهرست قابلیت‌های زیادی دارد؛ از جمله:

- پالایه‌ها
- مرتب‌سازی
- صفحه‌بندی
- پالایه بر اساس برچسب‌ها
- تغییر نما به گزارش، تقویم، گانت، کانبان و موارد دیگر

![نمای فهرست](/files/list-view.png)

## JavaScript استاندارد نمای فهرست

برای سفارشی‌کردن نمای فهرست، باید فایل `{doctype}_list.js` را در پوشهٔ DocType داشته باشید. گزینه‌های قابل سفارشی‌سازی در ادامه آمده‌اند.

برای نمونه، اگر بخواهید DocType «یادداشت» را سفارشی کنید، فایلی به نام `note_list.js` با محتوای زیر بسازید:

```js
frappe.listview_settings['Note'] = {
    // فیلدهایی که باید دریافت شوند
    add_fields: ['title', 'public'],
    // پالایه‌های پیش‌فرض
    filters: [
        ['public', '=', 1]
    ],
    hide_name_column: true, // ستون آخر را که name را نشان می‌دهد پنهان می‌کند
    hide_name_filter: true, // پالایهٔ پیش‌فرض ستون name را پنهان می‌کند
    onload(listview) {
        // پیش از بارگذاری فهرست، یک‌بار اجرا می‌شود
    },
    before_render() {
        // پیش از هر بار نمایش رکوردهای فهرست اجرا می‌شود
    },

    // اگر true باشد، تابع نشانگر برای سندهای پیش‌نویس هم اجرا می‌شود
    has_indicator_for_draft: false,

    get_indicator(doc) {
        // رنگ نشانگر را سفارشی می‌کند
        if (doc.public) {
            return [__('عمومی'), 'green', 'public,=,Yes'];
        } else {
            return [__('خصوصی'), 'darkgrey', 'public,=,No'];
        }
    },
    primary_action() {
        // هنگام انتخاب اقدام اصلی اجرا می‌شود
    },
    get_form_link(doc) {
        // مسیر فرم این سند را بازنویسی می‌کند
    },
    // برای هر ردیف یک دکمهٔ سفارشی اضافه می‌کند
    button: {
        show(doc) {
            return doc.reference_name;
        },
        get_label() {
            return __('مشاهده');
        },
        get_description(doc) {
            return __('مشاهدهٔ {0}', [`${doc.reference_type} ${doc.reference_name}`])
        },
        action(doc) {
            frappe.set_route('Form', doc.reference_type, doc.reference_name);
        }
    },
    // شیوهٔ نمایش مقدار فیلد را قالب‌بندی می‌کند
    formatters: {
        title(val) {
            return val.bold();
        },
        public(val) {
            return val ? 'Yes' : 'No';
        }
    }
}
```

## JavaScript سفارشی نمای فهرست

می‌توانید نمای فهرست را با ساخت **اسکریپت کارخواه** در سامانه نیز سفارشی کنید. اگر منطق فقط برای سایت خودتان است، از اسکریپت کارخواه استفاده کنید. برای اشتراک‌گذاری سفارشی‌سازی میان چند سایت، آن را از طریق برنامه‌ها اضافه کنید.

برای ساخت اسکریپت کارخواه، به این مسیر بروید:

**صفحهٔ اصلی > سفارشی‌سازی > اسکریپت کارخواه > جدید**

![ساخت اسکریپت کارخواه برای نمای فهرست](/files/client-script-list.png)

نتیجهٔ سفارشی‌سازی بالا، نمای فهرستی شبیه تصویر زیر است:

![نمای فهرست سفارشی‌شده](/files/list-view-customized.png)

## چند دکمه در JavaScript نمای فهرست

> این قابلیت در نسخهٔ [توسعه](https://github.com/frappe/frappe/tree/develop) موجود است.

با اسکریپت کارخواه نمای فهرست می‌توانید در منوی کشوییِ ردیف‌های فهرست چند دکمه قرار دهید. این قابلیت دسترسی به اقدام‌های گوناگون را مستقیماً از نمای فهرست آسان می‌کند.

```js
frappe.listview_settings["ToDo"] = {
    hide_name_column: true,
    add_fields: ["reference_type", "reference_name"],

    button: {
      show: function(doc) {
        return doc.reference_name;
      },
      get_label: function() {
        return __("باز کردن", null, "Access");
      },
      get_description: function(doc) {
        return __("باز کردن {0}", [
          `${__(doc.reference_type)}: ${doc.reference_name}`
        ]);
      },
      action: function(doc) {
        frappe.set_route("Form", doc.reference_type, doc.reference_name);
      },
    },
    dropdown_button: {
      get_label: __("فهرست کشویی"),
      buttons: [{
          get_label: __("دکمهٔ 1"),
          show: function(doc) {
            return true;
          },
          get_description: function(doc) {
            return "باز کردن دکمهٔ 1 " + doc.reference_name;
          },
          action: function(doc) {
            frappe.msgprint("دکمهٔ 1 از فهرست کشویی انتخاب شد " +
              doc.reference_name);
          }
        },
        {
          get_label: __("دکمهٔ 2"),
          show: function(doc) {
            return doc.status != "Closed";
          },
          get_description: function(doc) {
            return "باز کردن دکمهٔ 2 " + doc.reference_name;
          },
          action: function(doc) {
            frappe.msgprint("دکمهٔ 2 از فهرست کشویی انتخاب شد " +
              doc.reference_name);
          }
        },
        {
          get_label: __("دکمهٔ 3"),
          show: function(doc) {
            return doc.status != "Cancelled";
          },
          get_description: function(doc) {
            return "باز کردن دکمهٔ 3 " + doc.reference_name;
          },
          action: function(doc) {
            frappe.msgprint("دکمهٔ 3 از فهرست کشویی انتخاب شد " +
              doc.reference_name);
          }
        },
      ]
    }
  };
```

![نمونهٔ دکمه‌های چندگانه در نمای فهرست](/files/w7DupHw.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [نمای فهرست](https://docs.frappe.io/framework/user/en/api/list). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
