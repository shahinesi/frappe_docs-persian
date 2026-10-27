---
title: "نوع‌های مجوز"
slug: "permission-types"
source_url: "https://docs.frappe.io/framework/permission-types"
source_id: "framework/permission-types"
source_version: "49f14e61d614a7de30716f9cff2a516fcc6a1f3a8104108e625f576363b3e61a"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> توجه: این قابلیت از نسخهٔ v16 در دسترس است.

نوع‌های مجوز سفارشی به شما امکان می‌دهند مجوزهایی فراتر از مجوزهای داخلی `read`، `write`، `create`، `delete` و `submit` تعریف کنید. از آن‌ها برای مجوزهای مربوط به کنش‌های مشخص استفاده کنید؛ مانند «تأیید سند»، «بارگیری فایل» یا «جعل هویت کاربر».

## سازوکار

این کار سه مرحله دارد:

1. **توسعه‌دهنده نوع مجوز را برای یک DocType در حالت توسعه ایجاد می‌کند.**
2. **توسعه‌دهنده در محل انجام کنش، بررسی مجوز را به کد اضافه می‌کند.**
3. **System Manager مجوز را از رابط Desk به نقش‌ها اختصاص می‌دهد.**

نوع مجوز به‌صورت fixture ذخیره می‌شود و همراه برنامهٔ شما انتشار می‌یابد.

## نمونه: ایجاد مجوز `approve` برای Invoice

### مرحلهٔ 1: ساخت نوع مجوز (توسعه‌دهنده)

1. Developer Mode را فعال کنید و با کاربر Administrator وارد شوید.
2. یک رکورد جدید **Permission Type** بسازید.
3. مقدار **Perm Type** را `approve` و مقدار **DocType** را `Invoice` قرار دهید.
4. ذخیره کنید.

اکنون نوع مجوز ساخته شده و هنگام خروجی‌گرفتن از برنامه، همراه آن صادر می‌شود.

### مرحلهٔ 2: افزودن بررسی مجوز به کد (توسعه‌دهنده)

در کنترلر Invoice یا تابعی که تأیید را انجام می‌دهد، مجوز را بررسی کنید:

```python
@frappe.whitelist()
def approve_invoice(invoice_name):
    invoice = frappe.get_doc("Invoice", invoice_name)
    if not frappe.has_permission(invoice, "approve"):
        frappe.throw("Not permitted to approve", frappe.PermissionError)
    invoice.approval_status = "Approved"
    invoice.save()
```

همچنین می‌توانید مجوز را بدون ایجاد خطا بررسی کنید:

```python
if frappe.has_permission(invoice, "approve"):
    # show approve button on frontend
```

### مرحلهٔ 3: اختصاص به نقش‌ها (System Manager)

پس از نصب برنامه، مدیران سیستم مجوز را به نقش‌ها اختصاص می‌دهند:

1. **Role Permission Manager** را باز کنید.
2. DocType مربوط به Invoice را انتخاب کنید.
3. برای هر نقش، ستون **Approve** را مانند سایر مجوزها علامت بزنید یا علامتش را بردارید.
4. اکنون این مجوز برای همهٔ کاربرانی که آن نقش را دارند اعمال می‌شود.

به همین سادگی، کاربرانی که مجوز `approve` را دارند می‌توانند این کنش را انجام دهند و کاربران فاقد آن با خطا روبه‌رو می‌شوند.

## بررسی مجوز

برای بررسی مجوز در کد Python از `frappe.has_permission()` استفاده کنید:

```python
# Check document-level permission
if frappe.has_permission(invoice_doc, "approve"):
    # User can approve this invoice

# Check DocType-level permission
if frappe.has_permission("Invoice", "approve"):
    # User can approve any invoice
```

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/permission-types). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
