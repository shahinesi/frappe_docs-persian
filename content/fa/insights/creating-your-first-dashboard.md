---
title: "ساخت نخستین داشبورد"
slug: "creating-your-first-dashboard"
source_url: "https://docs.frappe.io/insights/creating-your-first-dashboard"
source_id: "insights/creating-your-first-dashboard"
source_version: "1cdc64f50ec04c7e8324ff74d21395ce913a2ae5b36145cee82b58feb0b6397e"
source_updated: "2026-01-06"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/insights/creating-your-first-dashboard)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصاویر رابط کاربری صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

در این راهنما با داده‌های نمایشی Frappe Insights یک داشبورد جامع برای عملکرد فروش می‌سازیم. مراحل شامل ایجاد یک پرس‌وجو، ساخت چند نمودار و ترکیب آن‌ها در داشبوردی تعاملی است.

## 1. ایجاد کارپوشه

1. در صفحهٔ فهرست کارپوشهها روی **+ جدید کارپوشه** کلیک کنید.
2. نام آن را «Sales Performance» بگذارید.
3. روی **پرس‌وجو Builder** کلیک کنید.

![Workbook جدید](https://docs.frappe.io/files/new-workbook.png)

## 2. ایجاد پرس‌وجوی پایه

یک پرس‌وجو می‌سازیم که داده‌های چند جدول را با هم ترکیب می‌کند. با بازشدن پرس‌وجو Builder، جدول مبدأ را <code>orders</code> انتخاب کنید. سپس عملیات زیر را به‌ترتیب اضافه کنید.

### پیوند جدول‌ها

1. روی **Add Operation** و سپس **Join Table** کلیک کنید.
   - <code>orderitems</code> را انتخاب کنید.
   - نوع پیوند: Left Join
   - شرط پیوند: <code>order_id = order_id</code>
   - ستون‌ها: <code>price</code>، <code>freight_value</code> و <code>product_id</code>
2. دوباره **Add Operation** و سپس **Join Table** را انتخاب کنید.
   - جدول <code>products</code> را انتخاب کنید.
   - نوع پیوند: Left Join
   - شرط پیوند: <code>product_id = product_id</code>
   - ستون: <code>product_category_name</code>
3. دوباره **Add Operation** و سپس **Join Table** را انتخاب کنید.
   - جدول <code>customers</code> را انتخاب کنید.
   - نوع پیوند: Left Join
   - شرط پیوند: <code>مشتری_id = مشتری_id</code>
   - ستون: <code>مشتری_state</code>

### پالایش و انتخاب ستون‌ها

4. روی **Add Operation** و سپس **Filter Rows** کلیک کنید.
   - ستون: <code>order_status</code>
   - شرط: Equals
   - مقدار: <code>"delivered"</code>
5. روی **Add Operation** و سپس **Choose Columns** کلیک کنید و ستون‌های زیر را انتخاب کنید:
   - <code>order_id</code>
   - <code>order_کالا_id</code>
   - <code>order_status</code>
   - <code>order_purchase_timestamp</code>
   - <code>price</code>
   - <code>freight_value</code>
   - <code>product_category_name</code>
   - <code>مشتری_state</code>
6. نام پرس‌وجو را «Sales Data» بگذارید.

![پرس‌وجوی Sales Data](https://docs.frappe.io/files/sales-data-query.png)

## 3. ساخت نمودارها

اکنون چند نمودار برای نمایش داده‌های فروش ایجاد می‌کنیم.

### نمای کلی فروش

- روی **+ جدید نمودار** کلیک کنید.
- نوع نمودار: Number
- عنوان: «Sales Overview»
- در بخش Columns:
  1. روی **+ Add Column** کلیک کنید.
     - تابع: Count Distinct
     - ستون: <code>order_id</code>
     - آیکون چرخ‌دنده را بزنید و برچسب را «Total Orders» بگذارید.
  2. روی **+ Add Column** کلیک کنید.
     - تابع: Sum
     - ستون: <code>price</code>
     - آیکون چرخ‌دنده را بزنید و برچسب را «Total Revenue» بگذارید.
  3. روی **+ Add Column** کلیک کنید.
     - تابع: Average
     - ستون: <code>price</code>
     - آیکون چرخ‌دنده را بزنید و برچسب را «Average Order Value» بگذارید.
- <code>order_purchase_timestamp</code> را به‌عنوان Date Column انتخاب کنید.
- مرتب‌سازی: <code>order_purchase_timestamp</code> (صعودی)
- **Show Comparison** را فعال کنید.
- **Show Sparkline** را فعال کنید.

![نمودار عددی Sales Overview](https://docs.frappe.io/files/sales-overview-number-chart.png)

### درآمد به تفکیک ماه

- روی **+ جدید نمودار** کلیک کنید.
- نوع نمودار: Line
- عنوان: «Monthly Revenue»
- محور X: <code>order_purchase_timestamp</code>
- محور Y:
  - تابع: Sum of
  - ستون: <code>price</code>
  - آیکون چرخ‌دنده را بزنید و برچسب را «Revenue» قرار دهید.

![نمودار خطی درآمد ماهانه](https://docs.frappe.io/files/monthly-revenue-line-chart.png)

### درآمد به تفکیک دستهٔ محصول

- روی **+ جدید نمودار** کلیک کنید.
- نوع نمودار: Row
- عنوان: «Revenue by Category»
- محور X: <code>product_category_name</code>
- محور Y:
  - تابع: Sum of
  - ستون: <code>price</code>
  - آیکون چرخ‌دنده را بزنید و برچسب را «Revenue» قرار دهید.
- مرتب‌سازی: Revenue (نزولی)

![نمودار ردیفی درآمد دسته‌های محصول](https://docs.frappe.io/files/top-categories-row-chart.png)

### درآمد فصلی به تفکیک استان

- روی **+ جدید نمودار** کلیک کنید.
- نوع نمودار: Table
- عنوان: «Quarterly Revenue by State»
- ردیف‌ها:
  - ستون: <code>order_purchase_timestamp</code>
  - آیکون چرخ‌دنده را بزنید، برچسب را «Quarter» و دقت زمانی را «Quarter» تعیین کنید.
- ستون‌ها:
  - ستون: <code>مشتری_state</code>
  - آیکون چرخ‌دنده را بزنید و برچسب را «State» قرار دهید.
- مقادیر:
  - تابع: Sum of
  - ستون: <code>price</code>
  - آیکون چرخ‌دنده را بزنید و برچسب را «Revenue» قرار دهید.
- مرتب‌سازی: Quarter (صعودی)
- **Show Color Scale** را فعال کنید.

![جدول درآمد فصلی به تفکیک استان](https://docs.frappe.io/files/quarterly-state-performance-table-chart.png)

## 4. ساخت داشبورد

نمودارها را در داشبوردی تعاملی ترکیب کنید:

1. روی **+ جدید داشبورد** کلیک کنید.
2. عنوان را «Sales Performance داشبورد» بگذارید.
3. نمودارها را از پنل سمت چپ بکشید و در داشبورد رها کنید:
   - ردیف اول: نمودار «Sales Overview»
   - ردیف دوم: نمودارهای «Monthly Revenue» و «Revenue by Category»
   - ردیف سوم: نمودار «Quarterly Revenue by State»
4. فیلترهای داشبورد را اعمال کنید:
   - در گوشهٔ بالا سمت راست روی دکمهٔ **Filter** کلیک کنید.
   - در پنجرهٔ فیلتر روی **Add Filter** کلیک کنید.
   - <code>product_category_name</code> را به‌عنوان ستون فیلتر انتخاب کنید.
   - <code>health_beauty</code> را به‌عنوان مقدار فیلتر برگزینید.
   - روی **Apply Filter** کلیک کنید.

![داشبورد فروش](https://docs.frappe.io/files/sales-performance-dashboard.png)

این داشبورد نمونه، تصویری کامل از عملکرد فروش می‌دهد؛ از شاخص‌های کلی تا جزئیات دسته‌بندی و موقعیت مکانی. فیلترها امکان بررسی عمیق‌تر بخش‌های مشخص و تحلیل بیشتر داده‌ها را فراهم می‌کنند.

---

**منبع:** [مستندات رسمی Frappe Insights](https://docs.frappe.io/insights/creating-your-first-dashboard). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر اصلی در این مخزن بازنشر نشده‌اند.
