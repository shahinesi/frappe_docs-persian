---
title: "قالب‌بندی خروجی Excel با XLSX"
slug: "excel-xlsx-export-styling"
source_url: "https://docs.frappe.io/framework/desk-reports/excel-xlsx-export-styling"
source_id: "framework/desk-reports/excel-xlsx-export-styling"
source_version: "43df6d7659b8d8f11dbf493e538d30e3ffb51d2cbadda1ff917d9e1a8fe2952d"
source_updated: "2026-04-22"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
---

> این قابلیت در نسخهٔ 16 معرفی شده است.

متد ماژولی `get_xlsx_styles` به شما امکان می‌دهد سبک‌های دلخواه را برای خروجی گزارش‌ها به Excel تعریف کنید.

> **یادداشت:** این متد فقط هنگام خروجی‌گرفتن از گزارش‌های استاندارد گزارش اسکریپت یا گزارش پرسمان با قالب Excel فراخوانی می‌شود، نه هنگام خروجی CSV.

## استفادهٔ پایه

تابع `get_xlsx_styles` را در فایل پایتون گزارش خود تعریف کنید:

```python
from frappe.utils.xlsxutils import XLSXMetadata, XLSXStyleBuilder

def get_xlsx_styles(metadata: XLSXMetadata) -> dict:
    builder = XLSXStyleBuilder(metadata)

    # Add your custom styles here...
    return builder.result
```

> **یادداشت:** هنگام ایجاد `XLSXStyleBuilder`، سبک‌های پیش‌فرض (سرستون، فیلترها، قالب‌های نوع فیلد و ارز) به‌طور خودکار اعمال می‌شوند.
>
> برای غیرفعال‌کردن آن‌ها، `default_styling=False` را بفرستید:
>
> ```python
> builder = XLSXStyleBuilder(metadata, default_styling=False)
> ```

## XLSXMetadata

شیء `metadata` به داده‌های گزارش و متدهای کمکی دسترسی می‌دهد.

### ویژگی‌ها

| ویژگی | نوع | توضیح |
|---|---|---|
| `report_name` | `str` | نام گزارش |
| `filters` | `dict` | مقادیر خام فیلترها |
| `column_map` | `dict[int, dict]` | نگاشت شمارهٔ ستون به تعریف ستون |
| `row_map` | `dict[int, dict \| list]` | نگاشت شمارهٔ ردیف به داده‌های ردیف |
| `applied_filters_map` | `dict[int, list]` | نگاشت شمارهٔ ردیف فیلتر به `[label, value]` |
| `has_total_row` | `bool` | مشخص می‌کند آخرین ردیف، ردیف جمع کل است یا نه |
| `has_indentation` | `bool` | مشخص می‌کند تورفتگی اعمال می‌شود یا نه |

> **یادداشت:** همهٔ اندیس‌ها باید از صفر شروع شوند تا با اندیس‌گذاری XlsxWriter سازگار باشند.

## XLSXStyleBuilder

این سازنده متدهایی برای ثبت و اعمال سبک‌ها فراهم می‌کند.

### ثبت سبک‌ها

```python
# Register a style and get its ID
style_id = builder.register_style({"bold": True, "bg_color": "#FFFF00"})
```

### اعمال سبک‌ها

```python
# Style an entire column
builder.style_column(col_idx, style_id)

# Style an entire row
builder.style_row(row_idx, style_id)

# Style a specific cell
builder.style_cell(row_idx, col_idx, style_id)
```

## ویژگی‌های سبک

### سبک قلم

```python
builder.register_style({
    "bold": True,
    "italic": True,
    "underline": True,
    "font_size": 12,
    "font_color": "#FF0000",
    "font_name": "Arial",
})
```

### رنگ پس‌زمینه

```python
builder.register_style({
    "bg_color": "#FFFF00",
})
```

### حاشیه‌ها

```python
# Border thickness: 1 = thin, 2 = medium, 3 = thick
builder.register_style({
    "border": 1,
    "border_color": "#000000",
})

# Individual borders
builder.register_style({
    "left": 2,
    "right": 2,
    "top": 1,
    "bottom": 3,
})
```

### ترازبندی

```python
builder.register_style({
    "align": "center",           # left, center, right
    "valign": "vcenter",         # top, vcenter, bottom
    "text_wrap": True,
    "indent": 2,
})
```

### قالب‌های عددی

```python
builder.register_style({
    "num_format": "#,##0.00",    # Custom number format
})
```

## نمونهٔ کامل

```python
from frappe.utils.xlsxutils import XLSXMetadata, XLSXStyleBuilder

def get_xlsx_styles(metadata: XLSXMetadata) -> dict:
    builder = XLSXStyleBuilder(metadata)

    # --- Register Styles (do this once, reuse style_id) --- #
    success_style = builder.register_style({"font_color": "#006100", "bg_color": "#C6EFCE"})
    warning_style = builder.register_style({"font_color": "#9C5700", "bg_color": "#FFEB9C"})
    error_style = builder.register_style({"font_color": "#9C0006", "bg_color": "#FFC7CE"})
    highlight_style = builder.register_style({"bold": True, "bg_color": "#DDEBF7"})
    total_row_border = builder.register_style({"border": 3, "border_color": "#15137e"})
    right_align = builder.register_style({"align": "right"})

    # --- Style entire column --- #
    amount_col_idx = builder.field_index_map.get("net_amount")

    if amount_col_idx is not None:
        builder.style_column(amount_col_idx, right_align)

    # --- Style total row with border --- #
    if metadata.has_total_row:
        builder.style_row(metadata.get_last_row_index(), total_row_border)

    # --- Conditional Cell Styling --- #
    status_col_idx = builder.field_index_map.get("status")

    for row_idx, row_data in metadata.row_map.items():
        if not isinstance(row_data, dict):
            continue

        # Status-based styling
        if status_col_idx is not None:
            status = row_data.get("status")

            if status == "Completed":
                builder.style_cell(row_idx, status_col_idx, success_style)

            elif status == "Pending":
                builder.style_cell(row_idx, status_col_idx, warning_style)

            elif status == "Cancelled":
                builder.style_cell(row_idx, status_col_idx, error_style)

        # High value highlighting
        if amount_col_idx is not None:
            amount = row_data.get("net_amount")

            if amount and amount > 10000:
                builder.style_cell(row_idx, amount_col_idx, highlight_style)

    return builder.result
```

## نمونهٔ خروجی

![نمونهٔ خروجی Excel با سبک‌های سفارشی](https://docs.frappe.io/files/image0ecd7d.png)

## پیشنهادها

- سبک‌ها را یک‌بار ثبت و دوباره استفاده کنید؛ از ساخت سبک‌های تکراری بپرهیزید و `style_id` برگشتی را در بخش‌های مختلف به‌کار ببرید.

## مرجع

- برای مشاهدهٔ همهٔ ویژگی‌های سبک، [کلاس قالب‌بندی در XlsxWriter](https://xlsxwriter.readthedocs.io/format.html#format-methods-and-format-properties) را ببینید.

منبع: [قالب‌بندی خروجی Excel با XLSX](https://docs.frappe.io/framework/desk-reports/excel-xlsx-export-styling). این صفحه ترجمهٔ غیررسمی است؛ مجوز محتوای نوشتاری منبع هنوز تأیید نشده است و تا زمان بررسی، بازنشر تحت شرایط CC BY-SA تأیید نمی‌شود. تصویر به منبع رسمی پیوند دارد و در این مخزن بازنشر نشده است.

