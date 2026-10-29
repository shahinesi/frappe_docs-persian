---
title: "API ابزارهای عمومی JavaScript"
slug: "js-utils"
source_url: "https://docs.frappe.io/framework/user/en/api/js-utils"
source_id: "framework/user/en/api/js-utils"
source_version: "6bc5dde6895addee1638222c53b59593cab3d0ea134218b7932b9c08bf4b11a5"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## `frappe.get_route`

`frappe.get_route()`

مسیر کنونی را به‌شکل یک آرایه برمی‌گرداند.

```js
frappe.get_route()
// ["List", "Task", "List"]
```

## `frappe.set_route`

`frappe.set_route(route)`

مسیر کنونی را به `route` تغییر می‌دهد.

```js
// مسیر به‌صورت بخش‌های جداگانه
frappe.set_route('List', 'Task', 'List')

// مسیر به‌صورت آرایه
frappe.set_route(['List', 'Task', 'Gantt'])

// مسیر به‌صورت رشته
frappe.set_route('List/Event/Calendar')

// مسیر همراه با گزینه‌ها
frappe.set_route(['List', 'Task', 'Task'], { status: 'Open' })
```

## `frappe.format`

`frappe.format(value, df, options, doc)`

یک مقدار خام را به قالبی تبدیل می‌کند که برای نمایش به کاربر مناسب باشد.

```js
frappe.format('2019-09-08', { fieldtype: 'Date' })
// "09-08-2019"

frappe.format('2399', { fieldtype: 'Currency', options: 'currency' }, { inline: true })
// "2,399.00"
```

## `frappe.provide`

`frappe.provide(namespace)`

اگر فضای نام مشخص‌شده وجود نداشته باشد، آن را به شیء `window` اضافه می‌کند.

```js
frappe.provide('frappe.ui.form');

// نتیجه‌ای یکسان با کد زیر دارد
window.frappe = {}
window.frappe.ui = {}
window.frappe.ui.form = {}
```

## `frappe.require`

`frappe.require(asset_path, callback)`

دارایی JavaScript یا CSS را به‌صورت ناهمگام بارگذاری می‌کند. این متد برای کتابخانه‌هایی به‌کار می‌رود که استفادهٔ مکرری ندارند.

```js
// بارگذاری یک دارایی
frappe.require('/assets/frappe/chat.js', () => {
 // فایل chat.js بارگذاری شده است
})

// بارگذاری چند دارایی
frappe.require(['/assets/frappe/chat.js', '/assets/frappe/chat.css'], () => {
 // فایل‌های chat.js و chat.css بارگذاری شده‌اند
})
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API ابزارهای عمومی JavaScript](https://docs.frappe.io/framework/user/en/api/js-utils). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
