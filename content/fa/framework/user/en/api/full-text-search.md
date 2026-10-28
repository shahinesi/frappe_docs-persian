---
title: "API جست‌وجوی تمام‌متن (FullTextSearch)"
slug: "full-text-search"
source_url: "https://docs.frappe.io/framework/user/en/api/full-text-search"
source_id: "framework/user/en/api/full-text-search"
source_version: "de12121819e72207b32455cdf11e9b640dbec3bd574df04caa206080b41633e0"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Wrapper مربوط به Frappe برای [Whoosh](https://pypi.org/project/Whoosh/).

### `update_index_by_name(self, doc_name)`

متد `update_index` را فراخوانی می‌کند، سند را با استفاده از نام آن می‌یابد و نمایه را به‌روز می‌کند. این تابع کاربر جاری را تغییر می‌دهد؛ بنابراین فقط باید آن را با دسترسی ادمین یا در یک کار پس‌زمینه اجرا کنید.

آرگومان‌ها:

- `self` (`object`): نمونهٔ `FullTextSearch`.
- `doc_name` (`str`): نام سندی که باید نمایه‌اش به‌روز شود.

### `remove_document_from_index(self, doc_name)`

سند را از نمایهٔ جست‌وجو حذف می‌کند.

آرگومان‌ها:

- `self` (`object`): نمونهٔ `FullTextSearch`.
- `doc_name` (`str`): نام سندی که باید از نمایه حذف شود.

### `update_index(self, document)`

نمایهٔ جست‌وجوی یک سند را به‌روز می‌کند.

آرگومان‌ها:

- `self` (`object`): نمونهٔ `FullTextSearch`.
- `document` (`_dict`): دیکشنری شامل عنوان، مسیر و محتوای سند.

### `build_index(self)`

نمایه را برای همهٔ سندهای تجزیه‌شده می‌سازد.

### `search(self, text, scope=None, limit=20)`

در نمایهٔ جاری جست‌وجو می‌کند.

آرگومان‌ها:

- `text` (`str`): رشته‌ای که باید جست‌وجو شود.
- `scope` (`str`، اختیاری): محدودهٔ جست‌وجو؛ مقدار پیش‌فرض `None` است.
- `limit` (`int`، اختیاری): حداکثر تعداد نتیجه‌های جست‌وجو؛ مقدار پیش‌فرض `20` است.

مقدار بازگشتی:

- `list(_dict)`: نتیجه‌های جست‌وجو.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [API جست‌وجوی تمام‌متن (FullTextSearch)](https://docs.frappe.io/framework/user/en/api/full-text-search). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
