---
title: "API نمودار"
slug: "chart"
source_url: "https://docs.frappe.io/framework/user/en/api/chart"
source_id: "framework/user/en/api/chart"
source_version: "29e95e026caee18ba6f201c8c33e88054df15d89fa5d412092680612ea3eba8c"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe نمودارهای SVG با استفادهٔ آسان و قابلیت پیکربندی کامل ارائه می‌کند. برای آشنایی با آن‌ها، [راهنمای Frappe Charts](https://frappe.io/charts) را ببینید.

## `frappe.ui.RealtimeChart`

`new frappe.ui.RealtimeChart(dom_element, event_name, max_label_count, data)`

نمونه‌ای تازه از `RealtimeChart` می‌سازد و قابلیت به‌روزرسانی بلادرنگ داده‌ها را به API نمودار Frappe اضافه می‌کند.

- `dom_element`: عنصر HTML که نمودار در آن نمایش داده می‌شود.
- `event_name`: رویداد Socket که جریان داده را فراهم می‌کند.
- `max_label_count`: بیشترین تعداد برچسب‌های مجاز در محور x.
- `data`: داده‌هایی که نمودار با آن‌ها مقداردهی اولیه می‌شود.

```js
// آرایهٔ دادهٔ خالی
const data = {
 datasets: [
 {
 name: "دادهٔ نمونه",
 values: [],
 },
 ],
};

// مقداردهی اولیهٔ نمودار بلادرنگ
let chart = new frappe.ui.RealtimeChart("#chart", "test_event", 8, {
 title: "نمودار بلادرنگ من",
 data: data,
 type: "line",
 height: 250,
 colors: ["#7cd6fd", "#743ee2"]
});
```

نمونهٔ کد کارخواه زیر، نموداری را بر اساس رویداد Socket مشخص‌شده نمایش می‌دهد.

کد Python زیر را می‌توان با استفاده از قابلیت [Hookها در Frappe Framework](https://frappeframework.com/docs/v14/user/en/python-api/hooks) به‌صورت کار زمان‌بندی‌شده اجرا کرد.

```py
data = {
 'label': 1,
 'points': [10]
}
frappe.publish_realtime('test_event', data)
```

کلید `label` برچسبی را مشخص می‌کند که به نمودار افزوده می‌شود. کلید `points` آرایهٔ نقاطی را تعیین می‌کند که باید رسم شوند. تعداد مقدارهای آرایهٔ `points` به تعداد مجموعه‌داده‌ها بستگی دارد.

خروجی این کد، نموداری مانند تصویر زیر خواهد بود:

![نمودار بلادرنگ](/files/realtime-chart.png)

### `frappe.ui.RealtimeChart.start_updating`

`frappe.ui.RealtimeChart.start_updating()`

گوش‌دادن به رویداد Socket مشخص‌شده را آغاز می‌کند و نمودار بلادرنگ را متناسب با آن به‌روزرسانی می‌کند.

```js
frappe.ui.RealtimeChart.start_updating();
```

![نمونهٔ به‌روزرسانی نمودار بلادرنگ](/files/realtime-chart-demo.gif)

### `frappe.ui.RealtimeChart.stop_updating`

`frappe.ui.RealtimeChart.stop_updating()`

گوش‌دادن به رویداد Socket را که هنگام مقداردهی اولیهٔ نمودار مشخص شده بود، متوقف می‌کند.

```js
frappe.ui.RealtimeChart.stop_updating();
```

### `frappe.ui.RealtimeChart.update_chart`

`frappe.ui.update_chart(label, data)`

با افزودن برچسب و دادهٔ متناظر به انتهای نمودار، آن را به‌صورت دستی به‌روزرسانی می‌کند.

```js
frappe.ui.update_chart(2, [30]);
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API نمودار](https://docs.frappe.io/framework/user/en/api/chart). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
