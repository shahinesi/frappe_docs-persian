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

### تابع‌های SQL در فیلدها

برای استفاده از تابع‌های SQL در عبارت‌های `SELECT`، می‌توانید در آرگومان `fields` از نگارش مبتنی بر دیکشنری استفاده کنید.

#### تابع‌های تجمیعی

```python
# COUNT - شمارش ردیف‌ها یا مقدارهای غیرتهی
query = frappe.qb.get_query(
    "User",
    fields=["user_type", {"COUNT": "name", "as": "total_users"}],
    group_by="user_type"
)

# COUNT(*) - شمارش همهٔ ردیف‌ها، از جمله مقدارهای تهی
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=[{"COUNT": "'*'", "as": "total_invoices"}]
)

# SUM - محاسبهٔ مجموع مقدارهای عددی
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=[{"SUM": "grand_total", "as": "total_sales"}],
    filters={"docstatus": 1}
)

# AVG - محاسبهٔ میانگین مقدارهای عددی
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=[{"AVG": "grand_total", "as": "avg_invoice_amount"}],
    group_by="customer"
)

# MAX - یافتن بیشترین مقدار
query = frappe.qb.get_query(
    "User",
    fields=[{"MAX": "creation", "as": "latest_user_date"}]
)

# MIN - یافتن کمترین مقدار
query = frappe.qb.get_query(
    "User",
    fields=[{"MIN": "creation", "as": "earliest_user_date"}]
)
```

#### تابع‌های اسکالر

```python
# ABS - قدرمطلق
query = frappe.qb.get_query(
    "Journal Entry Account",
    fields=[{"ABS": "debit_in_account_currency", "as": "abs_amount"}]
)

# IFNULL - مدیریت مقدارهای تهی (دو آرگومان می‌گیرد)
query = frappe.qb.get_query(
    "User",
    fields=[{"IFNULL": ["first_name", "'Unknown'"], "as": "display_name"}]
)

# CONCAT - چسباندن رشته‌ها (چند آرگومان می‌گیرد)
query = frappe.qb.get_query(
    "User",
    fields=[{"CONCAT": ["first_name", "' '", "last_name"], "as": "full_name"}]
)

# EXTRACT - استخراج بخشی از تاریخ/زمان (دو آرگومان: واحد و تاریخ)
query = frappe.qb.get_query(
    "User",
    fields=[{"EXTRACT": ["'YEAR'", "creation"], "as": "creation_year"}]
)

# NOW - زمان‌مهر کنونی (بدون آرگومان)
query = frappe.qb.get_query(
    "User",
    fields=[{"NOW": None, "as": "current_time"}]
)
```

## پالایه‌گذاری

### پالایه‌های پایه

آرگومان `filters` امکان افزودن عبارت‌های `WHERE` را فراهم می‌کند.

#### پالایه‌های دیکشنری (برابری)

این ساده‌ترین روش و در بسیاری از موارد روش ترجیحی برای بررسی برابری است.

```python
# دریافت کاربران با first_name برابر Admin
query = frappe.qb.get_query(
    "User",
    fields=["name", "email"],
    filters={"first_name": "Admin"} # جفت کلید و مقدار ساده به معنی '=' است
)
```

#### پالایه‌های دیکشنری (عملگرهای دیگر)

برای عملگرهایی غیر از `=`، دیکشنری‌ای بدهید که مقدار آن فهرستی به‌شکل `[operator, value]` باشد.

```python
# دریافت کاربرانی که پس از تاریخ مشخص‌شده ساخته شده‌اند
query = frappe.qb.get_query(
    "User",
    fields=["name", "creation"],
    filters={"creation": [">", "2023-01-01 00:00:00"]}
)

# دریافت کاربرانی که نامشان با الگوی test% مطابقت دارد
query = frappe.qb.get_query(
    "User",
    fields=["name"],
    filters={"name": ["like", "test%"]}
)

# دریافت کاربرانی که نامشان در فهرستی قرار دارد
query = frappe.qb.get_query(
    "User",
    fields=["name"],
    filters={"name": ["in", ["test1@example.com", "test2@example.com"]]}
)

# دریافت کاربرانی که نامشان در فهرست نیست
query = frappe.qb.get_query(
    "User",
    fields=["name"],
    filters={"name": ["not in", ["Administrator", "Guest"]]}
)
```

#### پالایه‌های فهرستی (قالب جایگزین)

می‌توانید فهرستی از فهرست‌های پالایه به‌شکل `[[fieldname, operator, value]]` هم بدهید.

```python
# دریافت کاربرانی که پس از تاریخ مشخص ساخته شده‌اند (قالب فهرستی)
query = frappe.qb.get_query(
    "User",
    fields=["name", "creation"],
    filters=[["creation", ">", "2023-01-01 00:00:00"]]
)

# چند پالایه که با AND ترکیب می‌شوند
query = frappe.qb.get_query(
    "User",
    fields=["name"],
    filters=[
        ["enabled", "=", 1],
        ["user_type", "=", "System User"]
    ]
)
```

### عملگرهای پالایه

`frappe.qb.get_query` از عملگرهای گوناگونی پشتیبانی می‌کند:

| رشتهٔ عملگر | معادل SQL | نمونه (قالب دیکشنری) | نمونه (قالب فهرستی) |
|---|---|---|---|
| `=` | `=` | `{"name": "Test"}` | `[["name", "=", "Test"]]` |
| `!=` | `!=` | `{"name": ["!=", "Test"]}` | `[["name", "!=", "Test"]]` |
| `>` | `>` | `{"creation": [">", "2023-01-01"]}` | `[["creation", ">", "2023-01-01"]]` |
| `<` | `<` | `{"creation": ["<", "2023-01-01"]}` | `[["creation", "<", "2023-01-01"]]` |
| `>=` | `>=` | `{"age": [">=", 18]}` | `[["age", ">=", 18]]` |
| `<=` | `<=` | `{"age": ["<=", 65]}` | `[["age", "<=", 65]]` |
| `like` | `LIKE` | `{"subject": ["like", "%urgent%"]}` | `[["subject", "like", "%urgent%"]]` |
| `not like` | `NOT LIKE` | `{"subject": ["not like", "spam%"]}` | `[["subject", "not like", "spam%"]]` |
| `in` | `IN` | `{"status": ["in", ["Open", "Pending"]]}` | `[["status", "in", ["Open", "Pending"]]]` |
| `not in` | `NOT IN` | `{"role": ["not in", ["Guest"]]}` | `[["role", "not in", ["Guest"]]]` |
| `is` | `IS NULL` یا `IS NOT NULL` | `{"customer": ["is", "set"]}` یا `{"email": ["is", "not set"]}` | `[["customer", "is", "set"]]` یا `[["email", "is", "not set"]]` |
| `descendants of` | مجموعهٔ تو‌در‌تو | `{"parent_account": ["descendants of", "Assets"]}` | `[["parent_account", "descendants of", "Assets"]]` |
| `ancestors of` | مجموعهٔ تو‌در‌تو | `{"location": ["ancestors of", "Room 101"]}` | `[["location", "ancestors of", "Room 101"]]` |
| `not descendants of` | مجموعهٔ تو‌در‌تو | `{"category": ["not descendants of", "Internal"]}` | `[["category", "not descendants of", "Internal"]]` |
| `not ancestors of` | مجموعهٔ تو‌در‌تو | `{"territory": ["not ancestors of", "West Coast"]}` | `[["territory", "not ancestors of", "West Coast"]]` |

**دربارهٔ `is set` و `is not set`:** این عملگرها بررسی می‌کنند که فیلد مقداری دارد یا نه (`IS NOT NULL` و `IS NULL`).

### پالایه‌گذاری بر اساس فیلدهای سند پیوندشده

با نگارش نقطه‌ای `link_fieldname.target_fieldname` می‌توانید بر اساس فیلدهای سندهای پیوندشده پالایه‌گذاری کنید.

```python
# دریافت سفارش‌های فروشی که قلمرو مشتری پیوندشده‌شان North America است
query = frappe.qb.get_query(
    "Sales Order",
    fields=["name", "customer"],
    filters={"customer.territory": "North America"} # پالایه بر اساس فیلد پیوندشده
)
north_america_orders = query.run(as_dict=True)
```

### پالایه‌گذاری بر اساس فیلدهای جدول فرزند

با نگارش نقطه‌ای `child_table_fieldname.target_fieldname` می‌توانید رکوردهای والد را بر اساس مقدارهای رکوردهای جدول فرزند پالایه کنید.

```python
# دریافت سفارش‌های فروشی که جدول items آن‌ها Item A را دارد
# برای اطمینان از نمایش یکتای هر سفارش فروش، distinct=True بگذارید
query = frappe.qb.get_query(
    "Sales Order",
    fields=["name", "customer"],
    filters={"items.item_code": "Item A"}, # پالایه بر اساس فیلد جدول فرزند
    distinct=True
)
orders_with_item_a = query.run(as_dict=True)
```

**نکته:** هنگام پالایه‌گذاری بر اساس فیلدهای جدول فرزند، اگر فقط رکوردهای والد یکتا را می‌خواهید، از `distinct=True` استفاده کنید.

### پالایه‌های مجموعهٔ تو‌در‌تو

برای DocTypeهای درختی (با ستون‌های `lft` و `rgt` مانند حساب، قلمرو، انبار و غیره)، می‌توانید از پالایه‌های ویژه استفاده کنید:

```python
# دریافت همهٔ حساب‌های زیرمجموعهٔ Assets
query = frappe.qb.get_query(
    "Account",
    fields=["name"],
    filters={"parent_account": ["descendants of", "Assets"]}
)

# دریافت قلمروهای والد West Coast
query = frappe.qb.get_query(
    "Territory",
    fields=["name"],
    filters={"parent_territory": ["ancestors of", "West Coast"]}
)
```

### عملگرهای منطقی (AND/OR)

برای شرط‌های پیچیده، `filters` را به‌شکل فهرستی از شرط‌ها بسازید و آن‌ها را با `'and'` یا `'or'` ترکیب کنید.

```python
# یافتن کاربران فعال که نام کوچکشان Admin است
filters_and = [
    ["enabled", "=", 1],
    "and",
    ["first_name", "=", "Admin"],
]
query = frappe.qb.get_query("User", filters=filters_and)

# یافتن کاربرانی که نام کوچکشان Admin یا Guest است
filters_or = [
    ["first_name", "=", "Admin"],
    "or",
    ["first_name", "=", "Guest"],
]
query = frappe.qb.get_query("User", filters=filters_or)

# ترکیب AND و OR؛ برای گروه‌بندی از فهرست‌های تو‌در‌تو استفاده کنید
# یافتن کاربران فعالی که نام کوچکشان Admin یا Guest است
filters_nested = [
    ["enabled", "=", 1],
    "and",
    [
        ["first_name", "=", "Admin"],
        "or",
        ["first_name", "=", "Guest"],
    ]
]
query = frappe.qb.get_query("User", filters=filters_nested)
```

## اجرای پرس‌وجو

### اجرای پایه

پس از آماده‌شدن شیء `query`، با `.run()` آن را اجرا کنید:

```python
# به‌طور پیش‌فرض فهرستی از تاپل‌ها برمی‌گرداند
results = query.run()

# فهرستی از دیکشنری‌ها برمی‌گرداند
results = query.run(as_dict=True)

# فهرستی از فهرست‌ها برمی‌گرداند
results = query.run(as_list=True)

# اگر فقط یک فیلد انتخاب شود، فهرستی تخت از مقدارها برمی‌گرداند
results = query.run(pluck=True)

# پرس‌وجوی SQL تولیدشده و زمان اجرا را چاپ می‌کند
results = query.run(debug=True)
```

### دریافت رشتهٔ SQL

می‌توانید رشتهٔ SQL تولیدشده را بدون اجرا دریافت کنید:

```python
# دریافت رشتهٔ SQL با مقدارهای جایگزین‌شده؛ برای اشکال‌زدایی
sql_string = query.get_sql()
print(sql_string)
# نمونهٔ خروجی: SELECT `name`, `email` FROM `tabUser` WHERE `first_name`='Admin'
```

### استفاده از iterator برای مجموعه‌داده‌های بزرگ

برای مجموعه‌داده‌های بزرگ، از `as_iterator=True` استفاده کنید تا نتیجه‌ها ردیف‌به‌ردیف پردازش شوند و همهٔ داده‌ها یک‌باره در حافظه بارگذاری نشوند:

```python
# پردازش تعداد زیادی کار بدون بارگذاری همهٔ آن‌ها در حافظه
query = frappe.qb.get_query(
    "Task",
    fields=["name", "subject", "status"],
    filters={"status": "Open"}
)

# برای مصرف بهینهٔ حافظه همراه iterator از unbuffered_cursor استفاده کنید
with frappe.db.unbuffered_cursor():
    task_iterator = query.run(as_iterator=True, as_dict=True)

    processed_count = 0
    for task in task_iterator:
        # پردازش دیکشنری هر کار به‌صورت جداگانه
        print(f"در حال پردازش کار: {task['name']} - {task['subject']}")
        processed_count += 1
        if processed_count % 1000 == 0:
            print(f"{processed_count} کار پردازش شد...")
```

**الزامات:**

- باید `as_iterator=True` را همراه با یکی از `as_dict=True` یا `as_list=True` به‌کار ببرید.
- برای بهره‌وری بهینهٔ حافظه، آن را درون مدیر زمینهٔ `frappe.db.unbuffered_cursor()` اجرا کنید.

## مرتب‌سازی، گروه‌بندی و صفحه‌بندی

### مرتب‌سازی نتیجه‌ها

برای مرتب‌کردن نتیجه‌ها از آرگومان `order_by` استفاده کنید:

```python
# مرتب‌سازی کاربران بر اساس تاریخ ایجاد، به‌صورت صعودی
query = frappe.qb.get_query("User", fields=["name", "creation"], order_by="creation asc")

# مرتب‌سازی بر اساس چند فیلد
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=["name", "customer", "grand_total"],
    order_by="customer asc, grand_total desc"
)
```

### گروه‌بندی نتیجه‌ها

برای تجمیع از `group_by` استفاده کنید:

```python
# شمارش فاکتورها برای هر مشتری
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=["customer", {"COUNT": "'*'", "as": "invoice_count"}],
    filters={"docstatus": 1},
    group_by="customer"
)
results = query.run(as_dict=True)
# نتیجه: [{'customer': 'Cust A', 'invoice_count': 5}, {'customer': 'Cust B', 'invoice_count': 3}, ...]
```

### صفحه‌بندی

برای صفحه‌بندی از `limit` و `offset` استفاده کنید:

```python
# دریافت 10 کاربر نخست
query = frappe.qb.get_query("User", limit=10)

# دریافت 10 کاربر بعدی (صفحهٔ دوم)
query = frappe.qb.get_query("User", limit=10, offset=10)
```

### نتیجه‌های یکتا

برای دریافت ردیف‌های یکتا، `distinct=True` را تنظیم کنید:

```python
# دریافت مشتریان یکتای فاکتورهای فروش ثبت‌شده
query = frappe.qb.get_query(
    "Sales Invoice",
    fields=["customer"],
    filters={"docstatus": 1},
    distinct=True
)
```

---

> این صفحه ترجمهٔ غیررسمیِ در حال تکمیل مستندات Frappe Framework است و هنوز برای انتشار آماده نیست. منبع: [ساخت پرس‌وجو با frappe.qb.get_query](https://docs.frappe.io/framework/get_query). متن منبع تحت شرایط CC BY-SA بازنشر می‌شود و این ترجمه نیز با انتساب به منبع و تحت شرایط همان مجوز منتشر خواهد شد.
