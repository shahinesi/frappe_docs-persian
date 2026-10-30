---
title: "رابط برنامه‌نویسی پایگاه داده"
slug: "database"
source_url: "https://docs.frappe.io/framework/user/en/api/database"
source_id: "framework/user/en/api/database"
source_version: "a80f261ad957c6fd6e935ff757df583e9a2515ddb7a7ab60eddab9ebe06f6b60"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

از **نسخهٔ 16** به بعد، در `get_list` و `get_all` [تغییرات ناسازگار با نسخه‌های قبلی](https://github.com/frappe/frappe/wiki/query-builder-migration) وجود دارد.

## frappe.db.get_list

`frappe.db.get_list(doctype, filters, or_filters, fields, order_by, group_by, start, page_length, run)`

- نام مستعار این تابع `frappe.get_list` است.

فهرستی از رکوردهای جدول یک `doctype` برمی‌گرداند. این تابع پوششی ORM برای پرس‌وجوی `SELECT` است و مجوزهای کاربرِ نشست جاری را نیز روی رکوردها اعمال می‌کند. اگر آرگومان کلیدی `fields` داده نشود، فقط نام سندها را برمی‌گرداند. به‌طور پیش‌فرض، خروجی فهرستی از `dict`هاست؛ اما با آرگومان کلیدی `pluck` می‌توانید فقط مقدار یک فیلد را دریافت کنید:

```python
frappe.db.get_list('Employee')

# output
[{'name': 'HR-EMP-00008'},
 {'name': 'HR-EMP-00006'},
 {'name': 'HR-EMP-00010'},
 {'name': 'HR-EMP-00005'}
]

# with pluck
frappe.db.get_list('Employee', pluck='name')

# output
['HR-EMP-00008',
 'HR-EMP-00006',
 'HR-EMP-00010',
 'HR-EMP-00005'
]
```

### ترکیب فیلترها با آرگومان‌های دیگر

```python
frappe.db.get_list('Task',
    filters={
        'status': 'Open'
    },
    fields=['subject', 'date'],
    order_by='date desc',
    start=10,
    page_length=20,
    as_list=True
)

# output
(('Update Branding and Design', '2019-09-04'),
('Missing Documentation', '2019-09-02'),
('Fundraiser for Foundation', '2019-09-03'))

# Tasks with date after 2019-09-08
frappe.db.get_list('Task', filters={
    'date': ['>', '2019-09-08']
})

# Tasks with date between 2020-04-01 and 2021-03-31 (both inclusive)
frappe.db.get_list('Task', filters=[[
    'date', 'between', ['2020-04-01', '2021-03-31']
]])

# Tasks with subject that contains "test"
frappe.db.get_list('Task', filters={
    'subject': ['like', '%test%']
})

# Count number of tasks grouped by status
frappe.db.get_list('Task',
    fields=['count(name) as count', 'status'],
    group_by='status'
)

# For version 16 +
frappe.db.get_list('Task',
    fields=[{'COUNT': 'name', 'as': 'count'}, 'status'],
    group_by='status'
)

# output
[{'count': 1, 'status': 'Working'},
 {'count': 2, 'status': 'Overdue'},
 {'count': 2, 'status': 'Open'},
 {'count': 1, 'status': 'Filed'},
 {'count': 20, 'status': 'Completed'},
 {'count': 1, 'status': 'Cancelled'}]
```

پیش از نسخهٔ 16، اگر `run=False` تنظیم می‌کردید، به‌جای اجرای پرس‌وجوی SQL همان پرس‌وجو برگردانده می‌شد. از نسخهٔ 16 به بعد، یک شیء پرس‌وجو Builder دریافت می‌کنید. می‌توانید مثل قبل با `.get_sql()` پرس‌وجوی SQL را بگیرید یا پیش از اجرا، پرس‌وجو را تغییر دهید و سپس `query.run()` را فراخوانی کنید.

## frappe.db.get_all

`frappe.db.get_all(doctype, filters, or_filters, fields, order_by, group_by, start, page_length, run)`

- نام مستعار این تابع `frappe.get_all` است.

این تابع مانند `frappe.db.get_list` عمل می‌کند، اما همهٔ رکوردها را بدون اعمال مجوزها دریافت می‌کند.

## frappe.db.get_value

`frappe.db.get_value(doctype, name, fieldname)` یا `frappe.db.get_value(doctype, filters, fieldname)`

- نام‌های مستعار این تابع `frappe.get_value` و `frappe.db.get_values` هستند.

مقدار یک فیلد از سند یا فهرستی از مقدارها را برمی‌گرداند.

```python
# single value
subject = frappe.db.get_value('Task', 'TASK00002', 'subject')

# multiple values
subject, description = frappe.db.get_value('Task', 'TASK00002', ['subject', 'description'])

# as dict
task_dict = frappe.db.get_value('Task', 'TASK00002', ['subject', 'description'], as_dict=1)
task_dict.subject
task_dict.description

# with filters, will return the first record that matches filters
subject, description = frappe.db.get_value('Task', {'status': 'Open'}, ['subject', 'description'])
```

## frappe.db.get_single_value

`frappe.db.get_single_value(doctype, fieldname)`

مقدار یک فیلد را از یک DocType تکی برمی‌گرداند.

```python
timezone = frappe.db.get_single_value('System Settings', 'timezone')
```

## frappe.db.set_value

`frappe.db.set_value(doctype, name, fieldname, value)`

- نام مستعار این تابع `frappe.db.update` است.

مقدار یک فیلد را در پایگاه داده تنظیم می‌کند. این تابع محرک‌های ORM را فراخوانی نمی‌کند، اما زمان تغییر را به‌روزرسانی می‌کند؛ مگر آنکه خلافش مشخص شود.

```python
# update a field value
frappe.db.set_value('Task', 'TASK00002', 'subject', 'New Subject')

# update multiple values
frappe.db.set_value('Task', 'TASK00002', {
    'subject': 'New Subject',
    'description': 'New Description'
})

# update without updating the `modified` timestamp
frappe.db.set_value('Task', 'TASK00002', 'subject', 'New Subject', update_modified=False)
```

> این روش محرک‌های ORM مانند `validate` و `on_update` را اجرا نمی‌کند. از آن برای به‌روزرسانی فیلدهای پنهان یا زمانی استفاده کنید که از کاری که انجام می‌دهید آگاهید.

## frappe.db.exists

`frappe.db.exists(doctype, name)`

بررسی می‌کند که رکوردی با این نام در DocType وجود دارد یا نه.

نام DocType و نام سند را بدهید:

```python
frappe.db.exists("User", "jane@example.org", cache=True)
```

یک دیکشنری از فیلترها، شامل کلید `"doctype"`، بدهید:

```python
frappe.db.exists({"doctype": "User", "full_name": "Jane Doe"})
```

نام DocType و دیکشنری فیلترها را جداگانه بدهید:

```python
frappe.db.exists("User", {"full_name": "Jane Doe"})
```

## frappe.db.count

`frappe.db.count(doctype, filters)`

تعداد رکوردهای منطبق با DocType و فیلترهای داده‌شده را برمی‌گرداند.

```python
# total number of Task records
frappe.db.count('Task')

# total number of Open tasks
frappe.db.count('Task', {'status': 'Open'})
```

## frappe.db.delete

`frappe.db.delete(doctype, filters)`

رکوردهای DocType را که با `filters` مطابقت دارند حذف می‌کند. این عملیات از نوع DML است و می‌توان آن را بازگرداند. اگر فیلتری مشخص نکنید، همهٔ رکوردهای آن DocType حذف می‌شوند.

```python
frappe.db.delete("Route History", {
    "modified": ("<=", last_record_to_keep[0].modified),
    "user": user
})

frappe.db.delete("Error Log")
frappe.db.delete("__Test Table")
```

می‌توانید نام DocType یا نام جدول داخلی را بدهید. طبق قرارداد، نام جدول‌های داخلی در Frappe با `__` آغاز می‌شود و این API نیز از همین قرارداد پیروی می‌کند. دستورهای بالا پرس‌وجوی `DELETE` بدون شرط را روی جدول‌های **tabError Log** و **__Test Table** اجرا می‌کنند.

## frappe.db.truncate

`frappe.db.truncate(doctype)`

جدول پایگاه داده را خالی می‌کند. این تابع دستور DDL به نام `TRUNCATE TABLE` را اجرا می‌کند و پیش از اجرای آن، تراکنش ثبت می‌شود. این عملیات قابل بازگردانی نیست؛ برای نمونه، می‌توانید از آن برای پاک‌سازی دوره‌ای جدول‌های گزارش استفاده کنید.

```python
frappe.db.truncate("Error Log")
frappe.db.truncate("__Test Table")
```

دستورهای بالا پرس‌وجوی `TRUNCATE` را روی جدول‌های **tabError Log** و **__Test Table** اجرا می‌کنند.

## frappe.db.commit

`frappe.db.commit()`

تراکنش جاری را ثبت می‌کند و دستور SQL `COMMIT` را اجرا می‌کند.

> در بیشتر موارد نیازی نیست تراکنش را دستی ثبت کنید. بخش [مدل تراکنش پایگاه داده](#database-transaction-model) را در ادامه ببینید.

## frappe.db.savepoint

`frappe.db.savepoint(save_point)`

نقطهٔ ذخیره‌ای با نام دلخواه ایجاد می‌کند تا بعداً بتوانید تغییرات را تا آن نقطه بازگردانید.

## frappe.db.rollback

`frappe.db.rollback()`

تراکنش جاری را بازمی‌گرداند و دستور SQL `ROLLBACK` را اجرا می‌کند.

> اگر هنگام یک درخواست وب از نوع `POST` یا `PUT` استثنا رخ دهد، Frappe به‌طور خودکار `frappe.db.rollback()` را اجرا می‌کند. اگر لازم است تراکنش را زودتر بازگردانید، این تابع را به‌کار ببرید.

`frappe.db.rollback(save_point="save_point_name")`

تراکنش را تا یک نقطهٔ ذخیرهٔ مشخص بازمی‌گرداند، نه اینکه کل تراکنش را لغو کند. این بازگردانی تغییرات فایل‌سیستم یا سایر ناظرهای بازگردانی را خنثی نمی‌کند.

## frappe.db.sql

`frappe.db.sql(query, values, as_dict)`

یک پرس‌وجوی دلخواه SQL را اجرا می‌کند. این روش برای گزارش‌های سمت سرورِ پیچیده با عبارت‌های join یا تنظیم پایگاه داده برای قابلیت‌های جدید می‌تواند کاربردی باشد.

نمونه:

```python
values = {'company': 'Frappe Technologies Inc'}
data = frappe.db.sql("""
 SELECT
 acc.account_number
 gl.debit
 gl.credit
 FROM `tabGL Entry` gl
 LEFT JOIN `tabAccount` acc
 ON gl.account = acc.name
 WHERE gl.company = %(company)s
""", values=values, as_dict=0)
```

> از این روش پرهیز کنید، چون اعتبارسنجی‌ها و بررسی‌های یکپارچگی را دور می‌زند. اگر امکان دارد، روش‌هایی مانند [Document API](https://docs.frappe.io/framework/user/en/api/document#frappeget_doc)، [`frappe.db.get_list`](#frappedbget_list) و موارد مشابه را به‌کار ببرید.

## frappe.db.multisql

`frappe.db.multisql({'mariadb': mariadb_query, 'postgres': postgres_query})`

عبارت SQL مناسب را برای هر یک از موتورهای پایگاه دادهٔ پشتیبانی‌شده اجرا می‌کند.

## frappe.db.rename_table

`frappe.db.rename_table(old_name, new_name)`

پرس‌وجویی برای تغییر نام جدول اجرا می‌کند. برای تغییر نام، نام DocType یا نام جدول داخلی را مستقیماً مشخص کنید.

نمونه:

```python
frappe.db.rename_table("__internal_cache", "__temporary_cache")
frappe.db.rename_table("todo", "ToDo")
```

نمونهٔ دوم را فقط زمانی به‌کار ببرید که پیامدهای آن را می‌دانید.

> برای تغییر نام جدول‌های DocType از این روش استفاده نکنید؛ به‌جای آن `frappe.rename_doc` را به‌کار ببرید.

## frappe.db.describe

`frappe.db.describe(doctype)`

توصیف جدول DocType داده‌شده را به‌صورت یک tuple برمی‌گرداند.

## frappe.db.change_column_type

`frappe.db.change_column_type(doctype, column, new_type)`

نوع ستون DocType مشخص‌شده را تغییر می‌دهد.

## frappe.db.add_index

`frappe.db.add_index(doctype, fields, index_name)`

برای فیلدهای مشخص‌شده در DocType، نمایه ایجاد می‌کند.

> توجه: برای ایجاد نمایه روی فیلدهای `TEXT` یا `BLOB` باید طول ثابتی مشخص کنید.

نمونه:

```python
frappe.db.add_index("Notes", ["id(10)", "content(500)"], index_name)
```

## frappe.db.add_unique

`frappe.db.add_unique(doctype, fields, constraint_name=None)`

برای DocTypeها محدودیت یکتایی ایجاد می‌کند.

نمونه:

```python
frappe.db.add_unique("DoctypeName",["field1","field2"])
```

## frappe.db.bulk_update

`frappe.db.bulk_update(doctype, doc_updates, *, chunk_size=100, modified=None, modified_by=None, update_modified=True, debug=False)`

چند سند را به‌صورت دسته‌ای و با یک دستور SQL از نوع `UPDATE` و عبارت‌های `CASE` به‌روزرسانی می‌کند.

نمونه:

```python
frappe.db.bulk_update(
    "Task",
    {
        "TASK-0001": {"status": "Closed", "description": "Completed by QA"},
        "TASK-0002": {"status": "Open", "description": "Pending assignment"},
    },
    chunk_size=200,
    modified_by="admin@example.com",
    update_modified=True,
    debug=True,
)
```

ساختار `doc_updates`:

```python
{
    "DOC-0001": {"field1": "value1", "field2": "value2"},
    "DOC-0002": {"field1": "valueA", "field2": "valueB"},
}
```

**نکته‌ها:**

- این تابع مستقیماً پایگاه داده را به‌روزرسانی می‌کند؛ رویدادها و اعتبارسنجی‌های سند اجرا نمی‌شوند.
- فیلدهایی که مشخص نشده‌اند بدون تغییر می‌مانند.

## هوک‌های تراکنش پایگاه داده

> توجه: این API در نسخهٔ 15 معرفی شد.

Frappe هوک‌هایی برای اجرای تابع‌های بازگشتی پیش یا پس از دستورهای تراکنش مانند ثبت یا بازگردانی فراهم می‌کند. این هوک‌ها برای کارهای زیر مفیدند:

- بازگرداندن تغییراتی که بیرون از پایگاه داده انجام شده‌اند، اگر تراکنش پایگاه داده بازگردانده شود.
- اعمال تغییرات خارج از پایگاه داده فقط در صورتی که تراکنش ثبت شود.

هوک‌ها عبارت‌اند از:

- `frappe.db.before_commit.add(func: Callable)`
- `frappe.db.after_commit.add(func: Callable)`
- `frappe.db.before_rollback.add(func: Callable)`
- `frappe.db.after_rollback.add(func: Callable)`

نمونه:

```python
def create_file(self):
    self.write_file()
    # This ensures rollback if DB transaction is rolledback
    frappe.db.after_rollback.add(self.rollback_file)

def rollback_file(self):
    self.delete_file()
```

## مدل تراکنش پایگاه داده

لایه‌های انتزاعی پایگاه داده در Frappe به‌طور پیش‌فرض مدل تراکنش مناسبی را پیاده‌سازی می‌کنند. بنابراین معمولاً لازم نیست تراکنش‌های SQL را دستی مدیریت کنید. شرح کلی این مدل در ادامه آمده است.

### درخواست‌های وب

- هنگام اجرای درخواست `POST` یا `PUT`، اگر تغییری در پایگاه داده ایجاد شده باشد، در پایان درخواست موفق ثبت می‌شود.
- فراخوانی‌های AJAX با `frappe.call` به‌طور پیش‌فرض از نوع `POST` هستند، مگر اینکه نوع دیگری تعیین شود.
- درخواست‌های `GET` باعث ثبت ضمنی تراکنش نمی‌شوند.
- هر استثنای **گرفته‌نشده** هنگام پردازش درخواست، تراکنش را بازمی‌گرداند.

### کارهای پس‌زمینه و زمان‌بندی‌شده

- اجرای موفق تابعی به‌عنوان کار پس‌زمینه یا زمان‌بندی‌شده، تراکنش را ثبت می‌کند.
- هر استثنای **گرفته‌نشده** باعث بازگرداندن تراکنش می‌شود.

### وصله‌ها

- اگر تابع `execute` وصله با موفقیت تمام شود، تراکنش به‌طور خودکار ثبت می‌شود.
- هر استثنای **گرفته‌نشده** باعث بازگرداندن تراکنش می‌شود.

### آزمون‌های واحد

- پس از اجرای یک ماژول آزمون، تراکنش ثبت می‌شود. منظور از ماژول آزمون هر فایل آزمون پایتون، مانند `test_core.py`، است.
- پس از پایان همهٔ آزمون‌ها نیز تراکنش ثبت می‌شود.
- هر استثنای **گرفته‌نشده** اجراکنندهٔ آزمون را متوقف می‌کند؛ در نتیجه تراکنش ثبت نخواهد شد.

> توجه: اگر استثناها را جایی می‌گیرید، لایهٔ انتزاعی پایگاه داده متوجه خطا نمی‌شود؛ بنابراین مسئولیت بازگرداندن درست تراکنش با شماست.

---

**منبع:** [رابط برنامه‌نویسی پایگاه داده](https://docs.frappe.io/framework/user/en/api/database). این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. محتوای نوشتاری تحت شرایط CC BY-SA بازنشر شده و با انتساب به منبع ارائه می‌شود؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
