---
title: "ساخت پرس‌وجو با frappe.qb.get_query"
slug: "get-query"
source_url: "https://docs.frappe.io/framework/get_query"
source_id: "framework/get_query"
source_version: "860b16a74f8a215bb03c1982fd647f41a85d99af06db95b17d8f067a39c11562"
source_updated: "2026-02-17"
translation_status: "in_progress"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

تابع `frappe.qb.get_query` روشی مدرن، امن و گویا برای ساخت پرس‌وجوهای پایگاه داده در Frappe فراهم می‌کند. این تابع توانایی کتابخانهٔ [Pypika](https://pypika.readthedocs.io/en/latest/) را با فراداده‌های DocType، مجوزها و قراردادهای Frappe یکپارچه می‌کند. در این راهنما، استفاده از `frappe.qb.get_query` را از نمونه‌های پایه تا حالت‌های پیشرفته بررسی می‌کنیم.

## مقدمه

`frappe.db.get_list` و `frappe.db.get_all` سال‌ها خدمات خوبی ارائه کرده‌اند و می‌توانند پرس‌وجوهای پیچیده را اجرا کنند؛ اما کد زیربنایی آن‌ها به‌مرور پیچیده‌تر شده و نگه‌داری و توسعه‌شان دشوارتر است. `frappe.qb.get_query` روشی مدرن برای رسیدن به نتیجه‌های مشابه است که با قابلیت توسعه و نگه‌داری بهتر ساخته شده است.

## شروع به کار

### ساختار پایهٔ پرس‌وجو

برای شروع، ساختار پایهٔ یک پرس‌وجو را بشناسید:

```python
# ساخت نمونه‌ای از سازندهٔ پرس‌وجو برای DocType کاربر
query = frappe.qb.get_query("User")

# اجرای پرس‌وجو و دریافت نتیجه‌ها
users = query.run(as_dict=True)
```

اگر `fields` مشخص نشود، به‌طور پیش‌فرض فقط فیلد `name` انتخاب می‌شود.

### نمونهٔ ساده

```python
# دریافت نام و ایمیل همهٔ کاربران
query = frappe.qb.get_query("User", fields=["name", "email"])
users = query.run(as_dict=True)
# نمونهٔ نتیجه: [{'name': 'Administrator', 'email': 'admin@example.com'}, ...]
```

## انتخاب فیلدها

### انتخاب پایهٔ فیلدها

برای تعیین ستون‌های موردنیاز، از آرگومان `fields` استفاده کنید.

```python
# انتخاب فیلدهای مشخص
query = frappe.qb.get_query("User", fields=["name", "email"])

# می‌توانید فیلدها را به‌شکل رشته‌ای جداشده با کاما هم وارد کنید
query = frappe.qb.get_query("User", fields="name, email")

# برای انتخاب همهٔ فیلدها از '*' استفاده کنید
query = frappe.qb.get_query("User", fields="*")
```

### استفاده از نام‌های مستعار

در رشتهٔ فیلد از `as` استفاده کنید تا برای فیلدهای خروجی نام مستعار تعیین شود.

```python
query = frappe.qb.get_query(
    "User",
    fields=["name as user_name", "email as user_email"]
)
users = query.run(as_dict=True)
# نمونهٔ نتیجه: [{'user_name': 'Administrator', 'user_email': 'admin@example.com'}, ...]
```

### فیلدهای سندهای پیوندشده

اگر فیلدی از نوع Link دارید، با نگارش نقطه‌ای `link_fieldname.target_fieldname` می‌توانید فیلدهای سند پیوندشده را دریافت کنید. سازندهٔ پرس‌وجو به‌طور خودکار `LEFT JOIN` لازم را اضافه می‌کند.

```python
# دریافت نام مشتری سفارش فروش؛ فرض بر این است که customer از نوع Link به DocType مشتری است
query = frappe.qb.get_query(
    "Sales Order",
    fields=["name", "customer.customer_name as customer_name"],
    filters={"name": "SO-00001"}
)
so_data = query.run(as_dict=True)
# نمونهٔ نتیجه: [{'name': 'SO-00001', 'customer_name': 'Test Customer'}]
```

### فیلدهای جدول فرزند

با نگارش نقطه‌ای `child_table_fieldname.child_doc_fieldname` می‌توانید به فیلدهای داخل جدول فرزند دسترسی پیدا کنید.

```python
# دریافت کد کالا از Sales Order Item؛ فرض بر این است که items نام فیلد جدول فرزند است
query = frappe.qb.get_query(
    "Sales Order",
    fields=["name", "items.item_code"],
    filters={"name": "SO-00001"}
)
# اگر SO-00001 چند ردیف داشته باشد، احتمالاً چند ردیف نتیجه برمی‌گردد
so_items = query.run(as_dict=True)
# نمونهٔ نتیجه: [{'name': 'SO-00001', 'item_code': 'ItemA'}, {'name': 'SO-00001', 'item_code': 'ItemB'}]
```

**نکته:** هنگام انتخاب فیلدها از جدول فرزند، پرس‌وجو `LEFT JOIN` اجرا می‌کند. بنابراین اگر جدول فرزند چند ردیف داشته باشد، ممکن است برای هر سند والد چند ردیف نتیجه برگردد.

### دریافت رکوردهای جدول فرزند

برای دریافت رکوردهای جدول فرزند، می‌توانید از ساختارمندتری استفاده کنید:

```python
# دریافت سفارش‌های فروش و ردیف‌های کالای وابسته به آن‌ها
query = frappe.qb.get_query(
    "Sales Order",
    fields=[
        "name",
        "customer",
        {"items": ["item_code", "qty", "rate"]} # دریافت از جدول فرزند items
    ],
    filters={"docstatus": 1},
    limit=5
)

results = query.run(as_dict=True)

# ساختار نمونهٔ نتیجه:
# [
#   {
#     'name': 'SO-00001',
#     'customer': 'Customer A',
#     'items': [
#       {'item_code': 'ItemA', 'qty': 2.0, 'rate': 100.0},
#       {'item_code': 'ItemB', 'qty': 1.0, 'rate': 50.0}
#     ]
#   },
#   {
#     'name': 'SO-00002',
#     'customer': 'Customer B',
#     'items': [
#       {'item_code': 'ItemC', 'qty': 5.0, 'rate': 20.0}
#     ]
#   }
# ]
```

این روش پس از دریافت رکوردهای والد، پرس‌وجوی جداگانه‌ای برای رکوردهای فرزند اجرا می‌کند و آن‌ها را به‌شکل کارآمد بر اساس والد گروه‌بندی می‌کند.

---

> این صفحه ترجمهٔ غیررسمیِ در حال تکمیل مستندات Frappe Framework است و هنوز برای انتشار آماده نیست. منبع: [ساخت پرس‌وجو با frappe.qb.get_query](https://docs.frappe.io/framework/get_query). متن منبع تحت شرایط CC BY-SA بازنشر می‌شود و این ترجمه نیز با انتساب به منبع و تحت شرایط همان مجوز منتشر خواهد شد.
