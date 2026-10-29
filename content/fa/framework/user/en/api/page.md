---
title: "API صفحه"
slug: "page"
source_url: "https://docs.frappe.io/framework/user/en/api/page"
source_id: "framework/user/en/api/page"
source_version: "998ad8d7cf2e497c128e243a2d17e1df3a2a4ee749110491b6553b106f1e1c9a"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

هر صفحه در میزکار درون یک شیء `frappe.ui.Page` نمایش داده می‌شود.

## `frappe.ui.make_app_page`

صفحه‌ای تازه می‌سازد و آن را به `parent` متصل می‌کند.

```js
let page = frappe.ui.make_app_page({
    title: 'صفحهٔ من',
    parent: wrapper // عنصر DOM در HTML یا شیء jQuery
    single_column: true // صفحه را بدون نوار کناری می‌سازد
})
```

![صفحهٔ تازه](/files/new-page.png)

## متدهای صفحه

این بخش متدهای رایج شیء نمونهٔ صفحه را فهرست می‌کند.

### `page.set_title`

عنوان صفحه و عنوان سند را تنظیم می‌کند. عنوان سند در زبانهٔ مرورگر نمایش داده می‌شود.

```js
page.set_title('صفحهٔ من')
```

![عنوان صفحه](/files/page-set-title.png)

### `page.set_title_sub`

عنوان فرعی صفحه را تنظیم می‌کند. این عنوان در سمت راست سربرگ صفحه نمایش داده می‌شود.

```js
page.set_title_sub('عنوان فرعی')
```

![عنوان فرعی صفحه](/files/page-set-title-sub.png)

### `page.set_indicator`

برچسب و رنگ نشانگر را تنظیم می‌کند.

```js
page.set_indicator('در انتظار', 'orange')
```

![نشانگر صفحه](/files/page-set-indicator.png)

### `page.clear_indicator`

برچسب و رنگ نشانگر را پاک می‌کند.

```js
page.clear_indicator()
```

### `page.set_primary_action`

برچسب و تابع اجراکنندهٔ دکمهٔ اقدام اصلی را تنظیم می‌کند. آرگومان سوم، کلاس آیکونی است که در نمای تلفن همراه نمایش داده می‌شود.

```js
let $btn = page.set_primary_action('جدید', () => create_new(), 'octicon octicon-plus')
```

![اقدام اصلی صفحه](/files/page-primary-action.png)

### `page.clear_primary_action`

دکمهٔ اقدام اصلی و تابع اجراکنندهٔ آن را پاک می‌کند.

```js
page.clear_primary_action()
```

### `page.set_secondary_action`

برچسب و تابع اجراکنندهٔ دکمهٔ اقدام ثانویه را تنظیم می‌کند. آرگومان سوم، کلاس آیکونی است که در نمای تلفن همراه نمایش داده می‌شود.

```js
let $btn = page.set_secondary_action('بازخوانی', () => refresh(), 'octicon octicon-sync')
```

![اقدام ثانویهٔ صفحه](/files/page-secondary-action.png)

### `page.clear_secondary_action`

دکمهٔ اقدام ثانویه و تابع اجراکنندهٔ آن را پاک می‌کند.

```js
page.clear_secondary_action()
```

### `page.add_menu_item`

گزینه‌ای به منوی کشویی **منو** اضافه می‌کند.

```js
// افزودن گزینهٔ عادی به منو
page.add_menu_item('ارسال ایمیل', () => open_email_dialog())

// افزودن گزینهٔ استاندارد به منو
page.add_menu_item('ارسال ایمیل', () => open_email_dialog(), true)
```

![منوی کشویی صفحه](/files/page-menu-dropdown.png)

### `page.clear_menu`

منوی کشویی **منو** و گزینه‌های آن را حذف می‌کند.

```js
page.clear_menu()
```

### `page.add_action_item`

گزینه‌ای به منوی کشویی **اقدام‌ها** اضافه می‌کند.

```js
// افزودن گزینهٔ عادی به منوی اقدام‌ها
page.add_action_item('حذف', () => delete_items())
```

![منوی اقدام‌های صفحه](/files/page-actions-dropdown.png)

### `page.clear_actions_menu`

منوی کشویی **اقدام‌ها** و گزینه‌های آن را حذف می‌کند.

```js
page.clear_actions_menu()
```

### `page.add_inner_button`

دکمه‌ای به نوارابزار داخلی اضافه می‌کند.

```js
// افزودن دکمهٔ داخلی عادی
page.add_inner_button('به‌روزرسانی نوشته‌ها', () => update_posts())
```

![دکمهٔ داخلی صفحه](/files/page-inner-button.png)

```js
// افزودن دکمهٔ کشویی به یک گروه
page.add_inner_button('نوشتهٔ تازه', () => new_post(), 'ایجاد')
```

![گروه دکمه‌های داخلی صفحه](/files/page-inner-button-group.png)

### `page.change_inner_button_type`

نوع یک دکمهٔ سفارشی مشخص را بر اساس برچسب و گروه آن تغییر می‌دهد.

```js
// تغییر نوع دکمه‌ای که عضو گروهی نیست
page.change_inner_button_type('به‌روزرسانی نوشته‌ها', null, 'primary');

// تغییر نوع دکمه‌ای در یک گروه
page.change_inner_button_type('حذف نوشته‌ها', 'اقدام‌ها', 'danger');
```

### `page.remove_inner_button`

دکمه‌ای را از نوارابزار داخلی حذف می‌کند.

```js
// حذف دکمهٔ داخلی
page.remove_inner_button('به‌روزرسانی نوشته‌ها')

// حذف دکمهٔ کشویی از یک گروه
page.remove_inner_button('نوشته‌های تازه', 'ایجاد')
```

### `page.clear_inner_toolbar`

نوارابزار داخلی را پاک می‌کند.

```js
page.clear_inner_toolbar()
```

### `page.add_field`

کنترل فرمی به نوارابزار فرم صفحه اضافه می‌کند.

```js
let field = page.add_field({
    label: 'وضعیت',
    fieldtype: 'Select',
    fieldname: 'status',
    options: [
        'باز',
        'بسته',
        'لغوشده'
    ],
    change() {
        console.log(field.get_value());
    }
});
```

![نوارابزار فرم صفحه](/files/page-add-field.png)

### `page.get_form_values`

مقدارهای همهٔ فیلدهای نوارابزار فرم صفحه را در یک شیء دریافت می‌کند.

```js
let values = page.get_form_values()
// { status: 'باز', priority: 'کم' }
```

### `page.clear_fields`

همهٔ فیلدهای نوارابزار فرم صفحه را پاک می‌کند.

```js
page.clear_fields()
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API صفحه](https://docs.frappe.io/framework/user/en/api/page). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
