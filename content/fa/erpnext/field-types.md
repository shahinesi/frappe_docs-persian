---
title: "انواع فیلد"
slug: "field-types"
source_url: "https://docs.frappe.io/erpnext/field-types"
source_id: "erpnext/field-types"
source_version: "f84be822505168758bfc860fa98961e6853ba24dc7c0acfecfcb6ec216228c8e"
source_updated: "2026-03-04"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

هنگام ایجاد فیلدهای تازه یا تغییر فیلدهای استاندارد، می‌توانید از انواع زیر استفاده کنید. نام انگلیسی هر نوع درون کد آمده تا با شناسهٔ فنی آن در ساختار DocType اشتباه نشود.

#### پیوند (`Link`)

فیلد پیوند به اطلاعات اصلی دیگری متصل می‌شود و داده را از آن می‌گیرد. برای نمونه، در اطلاعات اصلی پیش‌فاکتور، **مشتری** از نوع پیوند است. برای آشنایی بیشتر، [راهنمای ایجاد فیلد پیوند سفارشی](creating-custom-link-field.md) را ببینید.

#### پیوند پویا (`Dynamic Link`)

این فیلد می‌تواند سندی از هر نوع DocType را جست‌وجو و نگه‌داری کند. برای آشنایی با کارکرد آن، [راهنمای فیلد پیوند پویا](dynamic-link-fields.md) را ببینید.

#### چک‌باکس (`Check`)

این نوع فیلد یک گزینهٔ انتخابی به فرم اضافه می‌کند.

![نوع فیلد چک‌باکس](https://docs.frappe.io/files/field-type-check.png)

#### فهرست انتخاب (`Select`)

فیلد انتخاب به‌صورت فهرست بازشونده نمایش داده می‌شود. می‌توانید گزینه‌های متعدد را در فیلد **گزینه‌ها** و هرکدام را در یک سطر وارد کنید.

![نوع فیلد فهرست انتخاب](https://docs.frappe.io/files/field-type-select.png)

#### جدول (`Table`)

فیلد جدول نوعی پیوند است که DocType دیگری را در فرم کنونی نمایش می‌دهد. برای نمونه، جدول اقلام در سفارش فروش فیلد جدولی است که به DocType **قلم سفارش فروش** (`Sales Order Item`) پیوند دارد.

![نوع فیلد جدول](https://docs.frappe.io/files/field-type-table.png)

#### پیوست (`Attach`)

این فیلد به شما امکان می‌دهد فایلی را از **مدیریت فایل‌ها** انتخاب و به سند پیوست کنید.

![نوع فیلد پیوست](https://docs.frappe.io/files/field-type-attach.png)

#### پیوست تصویر (`Attach Image`)

برای پیوست تصویرهایی مانند JPEG و PNG از این نوع استفاده کنید. تصویر انتخاب‌شده، تصویر معرف همان DocType می‌شود؛ برای نمونه تصویر کالا در سند کالا.

![نوع فیلد تصویر](https://docs.frappe.io/files/field-type-image.png)

#### ویرایشگر متن (`Text Editor`)

فیلد متنی دارای ابزارهای قالب‌بندی است. در ERPNext معمولاً برای تعریف **شرایط و ضوابط** از آن استفاده می‌شود.

![نوع فیلد ویرایشگر متن](https://docs.frappe.io/files/field-type-text-editor.png)

#### تاریخ (`Date`)

با این نوع فیلد می‌توان تاریخ وارد کرد.

![نوع فیلد تاریخ](https://docs.frappe.io/files/field-type-date.png)

#### تاریخ و زمان (`Date and Time`)

انتخاب‌گر تاریخ و زمان را نمایش می‌دهد. مقدار پیش‌فرض، تاریخ و زمان فعلی رایانه است.

![نوع فیلد تاریخ و زمان](https://docs.frappe.io/files/field-type-date-and-time.png)

#### بارکد (`Barcode`)

فیلد را از نوع بارکد انتخاب و شمارهٔ بارکد را وارد کنید تا تصویر بارکد متناظر با آن به‌طور خودکار ساخته شود.

![نوع فیلد بارکد](https://docs.frappe.io/files/field-type-barcode.png)

#### دکمه (`Button`)

دکمه‌ای برای اجرای اقدام به فرم اضافه می‌کند؛ مانند **ذخیره** یا **ثبت نهایی**.

![نوع فیلد دکمه](https://docs.frappe.io/files/field-type-button.png)

#### کد (`Code`)

این نوع فیلد امکان واردکردن کد را فراهم می‌کند.

![نوع فیلد کد](https://docs.frappe.io/files/field-type-code.png)

#### رنگ (`Color`)

با این فیلد می‌توان رنگی برای فرم تعیین کرد.

![نوع فیلد رنگ](https://docs.frappe.io/files/field-type-colour.png)

#### شکست ستون (`Column Break`)

برای چیدمان چندستونی فرم، از شکست ستون استفاده کنید تا فیلدها حداکثر در دو ستون قرار گیرند.

![نوع فیلد شکست ستون](https://docs.frappe.io/files/field-type-column-break.png)

#### واحد پول (`Currency`)

فیلد واحد پول مقداری عددی، مانند قیمت کالا یا مبلغ، نگه می‌دارد. مقدار آن تا 6 رقم اعشار می‌تواند داشته باشد و امکان نمایش نماد واحد پول نیز وجود دارد.

![نوع فیلد واحد پول](https://docs.frappe.io/files/field-type-currency.png)

#### داده (`Data`)

فیلدی متنی ساده با گنجایش حداکثر 140 نویسه است و برای داده‌های عمومی کاربرد دارد. برای اعتبارسنجی ایمیل، نام یا شمارهٔ تلفن، در **تنظیمات > DocType** گزینهٔ فیلد را روی `Email`، `Name` یا `Phone` بگذارید.

![نوع فیلد داده](https://docs.frappe.io/files/field-type-data.png)

#### عدد اعشاری (`Float`)

مقداری عددی با حداکثر 9 رقم اعشار نگه می‌دارد. دقت آن را از [تنظیم دقت](https://docs.frappe.io/erpnext/set-precision) تعیین کنید.

> تنظیم دقت از مسیر **راه‌اندازی > تنظیمات > تنظیمات سامانه** انجام می‌شود و بر همهٔ فیلدهای اعشاری اثر دارد.

![نوع فیلد عدد اعشاری](https://docs.frappe.io/files/field-type-float.png)

#### مکان جغرافیایی (`Geolocation`)

برای نگه‌داری GeoJSON از فیلد مکان جغرافیایی استفاده کنید. این فیلد چندضلعی، خط و نقطه را ذخیره می‌کند. برای شناسایی دایره از ویژگی‌های سفارشی مشخصی در پشت‌صحنه استفاده می‌شود. تعریف `feature_collection` در [استاندارد RFC 7946](https://tools.ietf.org/html/rfc7946#section-3.3) آمده است.

برای جزئیات بیشتر، [راهنمای فیلد مکان جغرافیایی](https://docs.frappe.io/erpnext/geolocation-field) را بخوانید.

![نوع فیلد مکان جغرافیایی](https://docs.frappe.io/files/field-type-geolocation.png)

#### HTML (`HTML`)

برای واردکردن داده در قالب HTML، فیلد HTML انتخاب کنید.

![نوع فیلد HTML](https://docs.frappe.io/files/field-type-html.png)

#### تصویر (`Image`)

فیلد تصویر، تصویری را نمایش می‌دهد که در فیلد پیوست دیگری انتخاب شده است. در گزینه‌های فیلد تصویر در DocType، نام فیلدی را بنویسید که فایل تصویر در آن پیوست شده است؛ فیلد تصویر مقدار آن را نمایش می‌دهد.

![نوع فیلد تصویر](https://docs.frappe.io/files/field-type-image2.png)

#### عدد صحیح (`Int`)

مقداری عددی و بدون بخش اعشاری نگه می‌دارد.

![نوع فیلد عدد صحیح](https://docs.frappe.io/files/field-type-integer.png)

#### متن کوتاه (`Small Text`)

متن را با گنجایش بیشتری از فیلد داده نگه می‌دارد.

![نوع فیلد متن کوتاه](https://docs.frappe.io/files/field-type-small-text.png)

#### متن بلند (`Long Text`)

برای واردکردن متن با گنجایش نامحدود از این نوع فیلد استفاده کنید.

![نوع فیلد متن بلند](https://docs.frappe.io/files/field-type-long-text.png)

#### متن (`Text`)

این نوع فیلد امکان واردکردن متن را می‌دهد. محدودیت تعداد نویسه در فیلدهای **متن کوتاه**، **متن بلند** و **متن** به سامانهٔ مدیریت پایگاه دادهٔ رابطه‌ای بستگی دارد.

![نوع فیلد متن](https://docs.frappe.io/files/field-type-text.png)

#### ویرایشگر Markdown (`Markdown Editor`)

برای واردکردن متن با زبان نشانه‌گذاری Markdown از این فیلد استفاده کنید.

![نوع فیلد ویرایشگر Markdown](https://docs.frappe.io/files/field-type-markdown-editor.png)

#### گذرواژه (`Password`)

فیلد گذرواژه مقدار را به‌شکل رمزگشایی‌شده در فرم نشان می‌دهد.

![نوع فیلد گذرواژه](https://docs.frappe.io/files/field-type-password.png)

#### درصد (`Percent`)

مقدار این فیلد در پشت‌صحنه به‌صورت درصد محاسبه می‌شود.

![نوع فیلد درصد](https://docs.frappe.io/files/field-type-percent.png)

#### امتیاز (`Rating`)

مقدار این فیلد به‌عنوان امتیاز محاسبه می‌شود.

![نوع فیلد امتیاز](https://docs.frappe.io/files/field-type-rating.png)

#### فقط‌خواندنی (`Read Only`)

مقداری را که از فرم دیگری دریافت شده نشان می‌دهد و کاربر نمی‌تواند آن را ویرایش کند. اگر منبع مقدار از پیش تعیین شده باشد، این نوع را انتخاب کنید.

![نوع فیلد فقط‌خواندنی](https://docs.frappe.io/files/field-type-read-only.png)

#### شکست بخش (`Section Break`)

برای تقسیم فرم به چند بخش از این فیلد استفاده کنید.

![نوع فیلد شکست بخش](https://docs.frappe.io/files/field-type-section-break.png)

#### امضا (`Signature`)

این فیلد امکان افزودن امضای دیجیتال را فراهم می‌کند.

![نمونهٔ فیلد امضا](https://docs.frappe.io/files/Screenshot%202024-08-28%20at%203.01.56%20PM.png)

#### انتخاب چندگانه از جدول (`Table MultiSelect`)

ترکیبی از فیلدهای پیوند و جدول است. به‌جای جدول فرزند با دکمهٔ **افزودن ردیف**، می‌توان چند مقدار را در یک فیلد انتخاب کرد.

![نوع فیلد انتخاب چندگانه از جدول](https://docs.frappe.io/files/field-type-table-multiselect.png)

#### زمان (`Time`)

برای ثبت زمان از این فیلد استفاده کنید.

![نوع فیلد زمان](https://docs.frappe.io/files/field-type-time.png)

#### مدت (`Duration`)

فیلد مدت برای تعیین بازهٔ زمانی به‌کار می‌رود. اگر نمی‌خواهید مدت بر حسب روز یا ثانیه نمایش داده شود، گزینه‌های **پنهان‌کردن روزها** و **پنهان‌کردن ثانیه‌ها** را در فرم فعال کنید.

![گزینه‌های فیلد مدت](https://docs.frappe.io/files/field-type-duration-options.png)

![نمایش فیلد مدت](https://docs.frappe.io/files/field-type-duration2.png)

---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [انواع فیلد](https://docs.frappe.io/erpnext/field-types). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر می‌شود؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
