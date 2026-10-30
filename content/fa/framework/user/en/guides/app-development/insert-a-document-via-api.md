---
title: "درج سند از طریق API"
slug: "insert-a-document-via-api"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/insert-a-document-via-api"
source_id: "framework/user/en/guides/app-development/insert-a-document-via-api"
source_version: "f94ec701202c3becd5cc75806717750c0974b34a1762157294cd3c5f9faa6d93"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

می‌توانید با استفاده از متد `frappe.get_doc`، از طریق اسکریپت سند درج کنید.

### نمونه‌ها

#### 1. درج یک لیست انجام کار

```python
todo = frappe.get_doc({"doctype": "ToDo", "description": "test"})
todo.insert()
```

---

#### 2. درج بدون بررسی مجوزهای کاربر

```python
todo = frappe.get_doc({"doctype": "ToDo", "description": "test"})
todo.insert(ignore_permissions = True)
```

---

#### 3. ارسال سند پس از درج

```python
todo = frappe.get_doc({"doctype": "ToDo", "description": "test"})
todo.insert(ignore_permissions = True)
todo.submit()
```

---

#### 4. درج سند هنگام ذخیرهٔ سند دیگر

```python
class MyType(Document):
    def on_update(self):
        todo = frappe.get_doc({"doctype": "ToDo", "description": "test"})
        todo.insert()
```

---

#### 5. درج سند دارای جدول‌های فرزند

```python
sales_order = frappe.get_doc({
    "doctype": "Sales Order",
    "company": "_Test Company",
    "customer": "_Test Customer",
    "delivery_date": "2013-02-23",
    "sales_order_details": [
        {
            "item_code": "_Test Item Home Desktop 100",
            "qty": 10.0,
            "rate": 100.0,
            "warehouse": "_Test Warehouse - _TC"
        }
    ]
})
sales_order.insert()
```

---

**منبع:** [درج سند از طریق API](https://docs.frappe.io/framework/user/en/guides/app-development/insert-a-document-via-api). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.


