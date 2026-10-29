---
title: "فراخوانی‌های سرور (AJAX)"
slug: "server-calls"
source_url: "https://docs.frappe.io/framework/user/en/api/server-calls"
source_id: "framework/user/en/api/server-calls"
source_version: "58286a4e897df09e96629227a561f0fd97a73b2eb267a8027fed18aecfd4fb30"
source_updated: "2026-04-18"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## `frappe.call`

`frappe.call(method, args)`

درخواستی AJAX به سرور می‌فرستد. در این درخواست، `method` که مسیر نقطه‌دار یک متد Python مجازشده است اجرا می‌شود و مقدار بازگشتی آن در پاسخ ارسال می‌شود.

```js
// فراخوانی بدون پارامتر
frappe.call('ping')
 .then(r => {
 console.log(r)
 // {message: "pong"}
 })

// فراخوانی با یک پارامتر
frappe.call('frappe.core.doctype.user.user.get_role_profile', {
 role_profile: 'Test'
}).then(r => {
 console.log(r.message)
})

// فراخوانی با همهٔ گزینه‌ها
frappe.call({
 method: 'frappe.core.doctype.user.user.get_role_profile',
 args: {
 role_profile: 'Test'
 },
 // غیرفعال‌کردن دکمه تا پایان درخواست
 btn: $('.primary-action'),
 // ثابت‌کردن صفحه تا پایان درخواست
 freeze: true,
 callback: (r) => {
 // در صورت موفقیت
 },
 error: (r) => {
 // در صورت بروز خطا
 }
})
```

## `frappe.db.get_doc`

`frappe.db.get_doc(doctype, name, filters)`

شیء سند مربوط به `doctype` و `name` را برمی‌گرداند. اگر `name` داده نشود، نخستین سند منطبق با `filters` را دریافت می‌کند.

```js
// دریافت سند بر اساس نام
frappe.db.get_doc('Task', 'TASK00002')
 .then(doc => {
 console.log(doc)
 })

// دریافت سند بر اساس پالایه‌ها
frappe.db.get_doc('Task', null, { status: 'Open' })
 .then(doc => {
 console.log(doc)
 })
```

## `frappe.db.get_list`

`frappe.db.get_list(doctype, { fields, filters })`

فهرستی از رکوردهای `doctype` را بر اساس `fields` و `filters` برمی‌گرداند.

```js
frappe.db.get_list('Task', {
 fields: ['subject', 'description'],
 filters: {
 status: 'Open'
 }
}).then(records => {
 console.log(records);
})
```

## `frappe.db.get_value`

`frappe.db.get_value(doctype, name, fieldname)`

مقدار یک فیلد سند یا فهرستی از مقدارها را برمی‌گرداند.

```js
// یک مقدار
frappe.db.get_value('Task', 'TASK00004', 'status')
 .then(r => {
 console.log(r.message.status) // Open
 })

// چند مقدار
frappe.db.get_value('Task', 'TASK00004', ['status', 'subject'])
 .then(r => {
 let values = r.message;
 console.log(values.status, values.subject)
 })

// استفاده از پالایه‌ها
frappe.db.get_value('Task', {status: 'Open'}, 'subject')
 .then(r => {
 let values = r.message;
 console.log(values.subject)
 })
```

## `frappe.db.get_single_value`

`frappe.db.get_single_value(doctype, field)`

مقدار یک فیلد را از DocType تکی برمی‌گرداند.

```js
frappe.db.get_single_value('System Settings', 'time_zone')
 .then(time_zone => {
 console.log(time_zone);
 })
```

## `frappe.db.set_value`

`frappe.db.set_value(doctype, docname, fieldname, value, callback)`

با اجرای `frappe.get_doc` و `doc.save` روی سرور، ویژگی یک سند را تنظیم می‌کند.

```js
// به‌روزرسانی مقدار یک فیلد
frappe.db.set_value('Task', 'TASK00004', 'status', 'Open')
 .then(r => {
 let doc = r.message;
 console.log(doc);
 })

// به‌روزرسانی چند فیلد
frappe.db.set_value('Task', 'TASK00004', {
 status: 'Working',
 priority: 'Medium'
}).then(r => {
 let doc = r.message;
 console.log(doc);
})
```

## `frappe.db.insert`

`frappe.db.insert(doc)`

سند تازه‌ای درج می‌کند.

```js
frappe.db.insert({
 doctype: 'Task',
 subject: 'کار تازه'
}).then(doc => {
 console.log(doc);
})
```

## `frappe.db.count`

`frappe.db.count(doctype, filters)`

تعداد رکوردهای `doctype` منطبق با `filters` را برمی‌گرداند.

```js
// تعداد کل رکوردهای Task
frappe.db.count('Task')
 .then(count => {
 console.log(count)
 })

// تعداد کل کارهای با وضعیت Open
frappe.db.count('Task', {
 filters: {
 status: 'Open'
 }
}).then(count => {
 console.log(count);
})
```

## `frappe.db.delete_doc`

`frappe.db.delete_doc(doctype, name)`

سندی را که با `doctype` و `name` مشخص شده است حذف می‌کند.

```js
frappe.db.delete_doc('Task', 'TASK00004')
```

## `frappe.db.exists`

`frappe.db.exists(doctype, name)`

اگر رکورد سند وجود داشته باشد، `true` برمی‌گرداند.

```js
frappe.db.exists('Task', 'TASK00004')
 .then(exists => {
 console.log(exists) // true
 })
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [فراخوانی‌های سرور (AJAX)](https://docs.frappe.io/framework/user/en/api/server-calls). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
