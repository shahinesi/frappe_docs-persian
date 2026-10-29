---
title: "کنترل‌ها"
slug: "controls"
source_url: "https://docs.frappe.io/framework/user/en/api/controls"
source_id: "framework/user/en/api/controls"
source_version: "a95c1a824c860ddf2da910d33cc28e17825fe73dbfa24583696e39383ffd5b3a"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## `frappe.ui.form.make_control`

`frappe.ui.form.make_control({ parent, df })`

بر اساس ویژگی‌های `df` یک کنترل Frappe می‌سازد و آن را به ظرف `parent` اضافه می‌کند.

```js
frappe.ui.form.make_control({
 parent: $wrapper.find('.my-control'),
 df: {
 label: 'تاریخ سررسید',
 fieldname: 'due_date',
 fieldtype: 'Date'
 },
 render_input: true
})
```

در ادامه ویژگی‌های `df` برای بیشتر انواع کنترل Frappe آمده است.

```js
// پیوست
{
 label: 'پیوست',
 fieldname: 'attachment',
 fieldtype: 'Attach'
}

// تصویر پیوست
{
 label: 'تصویر کاربر',
 fieldname: 'user_image',
 fieldtype: 'Attach Image'
}

// تکمیل خودکار
{
 label: 'انتخاب کاربر',
 fieldname: 'user',
 fieldtype: 'Autocomplete',
 options: [
 'faris@erpnext.com',
 'suraj@erpnext.com'
 ]
}

// بارکد
{
 label: 'بارکد کالا',
 fieldname: 'item_barcode',
 fieldtype: 'Barcode'
}

// چک‌باکس
{
 label: 'فعال‌کردن قابلیت',
 fieldname: 'enable_feature',
 fieldtype: 'Check'
}

// کد
{
 label: 'اسکریپت JS',
 fieldname: 'script',
 fieldtype: 'Code',
 // برای برجسته‌سازی نحو
 options: 'Javascript' // JS, HTML, CSS, Markdown, SCSS, JSON,
 // پیچیدن خطوط کد
 wrap: true,
 // تغییر max_lines بیشینهٔ ارتفاع ویرایشگر را تعیین می‌کند
 max_lines: 10,
 // تغییر min_lines کمینهٔ ارتفاع ویرایشگر را تعیین می‌کند
 min_lines: 5
}

// رنگ
{
 label: 'رنگ دلخواه شما',
 fieldname: 'user_color',
 fieldtype: 'Color'
}

// ارز
{
 label: 'مبلغ',
 fieldname: 'amount',
 fieldtype: 'Currency',
 options: 'INR' // یا نام فیلدی که ارز را نگه می‌دارد
}

// داده
{
 label: 'نام',
 fieldname: 'first_name',
 fieldtype: 'Data',
 options: 'Email' // 'Name', 'Phone', 'URL', 'Barcode'
}

// بازهٔ تاریخ
{
 label: 'انتخاب بازهٔ تاریخ',
 fieldname: 'date_range',
 fieldtype: 'Date Range'
}

// تاریخ
{
 label: 'تاریخ تولد',
 fieldname: 'birth_date',
 fieldtype: 'Date'
}

// تاریخ و زمان
{
 label: 'تاریخ و زمان ثبت',
 fieldname: 'submission',
 fieldtype: 'Datetime'
}

// پیوند پویا
{
 label: 'طرف حساب',
 fieldname: 'party',
 fieldtype: 'Dynamic Link',
 options: 'party_type' // نام فیلدی که نوع پیوند را نگه می‌دارد
}

// عدد اعشاری
{
 label: 'آستانه',
 fieldname: 'threshold',
 fieldtype: 'Float'
}

// موقعیت جغرافیایی
{
 label: 'محل جلسه',
 fieldname: 'meeting_place',
 fieldtype: 'Geolocation'
}

// ویرایشگر HTML
{
 label: 'HTML سفارشی',
 fieldname: 'custom_html',
 fieldtype: 'HTML Editor'
}

// عدد صحیح
{
 label: 'تعداد روزها',
 fieldname: 'no_of_days',
 fieldtype: 'Int'
}

// پیوند
{
 label: 'انتخاب کاربر',
 fieldname: 'user',
 fieldtype: 'Link',
 options: 'User' // نام DocType
}

// ویرایشگر Markdown
{
 label: 'محتوای وبلاگ',
 fieldname: 'content',
 fieldtype: 'Markdown Editor'
}

// انتخاب چندگانه
{
 label: 'محتوای وبلاگ',
 fieldname: 'content',
 fieldtype: 'MultiCheck',
 options: [
 'گزینهٔ 1',
 'گزینهٔ 2',
 'گزینهٔ 3',
 'گزینهٔ 4',
 ],
 columns: 2 // نمایش در دو ستون
}

// انتخاب چندگانه
{
 label: 'انتخاب کاربران',
 fieldname: 'users',
 fieldtype: 'MultiSelect',
 options: [
 'faris@erpnext.com',
 'suraj@erpnext.com',
 'shivam@erpnext.com'
 ]
}

// گذرواژه
{
 label: 'گذرواژهٔ تازه',
 fieldname: 'password',
 fieldtype: 'Password'
}

// امتیازدهی
{
 label: 'به تجربهٔ خود امتیاز دهید',
 fieldname: 'rating',
 fieldtype: 'Rating'
}

// انتخاب
{
 label: 'وضعیت',
 fieldname: 'status',
 fieldtype: 'Select',
 options: [
 'باز',
 'بسته',
 'لغوشده'
 ]
}

// امضا
{
 label: 'وضعیت',
 fieldname: 'status',
 fieldtype: 'Signature'
}

// ویرایشگر متن
{
 label: 'توضیحات',
 fieldname: 'description',
 fieldtype: 'Text Editor'
}

// زمان
{
 label: 'زمان ورود',
 fieldname: 'in_time',
 fieldtype: 'Time'
}

// دکمه
{
 label: 'دریافت',
 fieldname: 'fetch',
 fieldtype: 'Button',
 btn_size: 'xs' // xs, sm, lg
}

// آیکون
{
 label: 'آیکون صفحه',
 fieldname: 'page_icon',
 fieldtype: 'Icon'
}
```

## افزودن قالب‌بندهای سفارشی

می‌توانید برای فیلدهای متنی، مانند `Data`، `Select` و `Text`، قالب‌بند سفارشی تعریف کنید. برای این کار آن را به شیء `docfield` در `frappe.meta.docfield_map` اضافه کنید.

```js
frappe.meta.docfield_map['DocField'].fieldtype.formatter = (value) => {
 if (value==='Section Break') return '🔵 جداکنندهٔ بخش';
 else return value;
}
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [کنترل‌ها](https://docs.frappe.io/framework/user/en/api/controls). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
