---
title: "API اسکنر"
slug: "scanner"
source_url: "https://docs.frappe.io/framework/user/en/api/scanner"
source_id: "framework/user/en/api/scanner"
source_version: "719e5db365b052f02ab58b9ebbb1895e426d0d1cce906c8aab3b9cafc9b2416a"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe برای دریافت ورودی‌هایی مانند بارکد و کد QR با دوربین دستگاه، از کتابخانهٔ متن‌باز [Html5-QRCode](https://github.com/mebjas/html5-qrcode) استفاده می‌کند.

## `frappe.ui.Scanner`

```js
new frappe.ui.Scanner({ ... })
```

نمونه‌ای تازه از `Scanner` می‌سازد که می‌تواند یک یا چند بارکد را اسکن کند.

گزینه‌ها:

- `container`: عنصر DOM که تصویر زندهٔ دوربین درون آن نمایش داده می‌شود.
- `dialog`: اگر `true` باشد، پنجره‌ای برای نمایش تصویر زندهٔ دوربین باز می‌کند.
- `multiple`: اگر `false` باشد، پس از یک اسکن موفق، اسکن را متوقف می‌کند.
- `on_scan`: تابع بازگشتی برای پردازش ورودی اسکن‌شده.

نمونهٔ کد کارخواه زیر یک بارکد را اسکن می‌کند و نتیجه را در کنسول ثبت می‌کند:

```js
new frappe.ui.Scanner({
 dialog: true, // بازکردن اسکنر دوربین در پنجره
 multiple: false, // توقف پس از اسکن یک مقدار
 on_scan(data) {
 console.log(data.decodedText);
 }
});
```

کد زیر ورودی اسکن‌شده را پیوسته دریافت و پردازش می‌کند:

```js
const scanner = new frappe.ui.Scanner({
 dialog: true, // بازکردن اسکنر دوربین در پنجره
 multiple: true, // پس از یک اسکن متوقف نشود
 on_scan(data) {
 handle_scanned_barcode(data.decodedText);
 }
});
```

برای توقف اسکن، پنجره را ببندید یا `scanner.stop_scan();` را اجرا کنید.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API اسکنر](https://docs.frappe.io/framework/user/en/api/scanner). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
