---
title: "ثبت گزارش"
slug: "logging"
source_url: "https://docs.frappe.io/framework/user/en/api/logging"
source_id: "framework/user/en/api/logging"
source_version: "4e2d450bef8a265f3186db2dc04f25187aba8b6a2d0b865fb21c826522ef480d"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

ثبت گزارش راهی برای پیگیری رویدادهایی است که هنگام اجرای نرم‌افزار رخ می‌دهند. در معماری Bench و محیط چندمستاجری، ردیابی مشکل‌ها و رفع ابهام‌ها می‌تواند خیلی زود پیچیده شود. می‌توانید رویدادها را همراه با داده‌های متغیر و زمینه‌ای ثبت کنید.

Frappe برای نگه‌داری گزارش‌های Bench و هر سایت، از [ماژول logging در Python](https://docs.python.org/3/howto/logging.html) استفاده می‌کند. در نسخهٔ 13، چرخش گزارش حداکثر 20 فایلِ 100kB را برای هر گزارش پیش‌فرض نگه می‌دارد؛ افزون بر فایل در حال استفاده.

## `frappe.log_level`

سطح ثبت گزارش فرایندهای Frappe را نگه می‌دارد. برای آشنایی با سطح‌های ثبت گزارش، [روش Logger.setLevel در Python](https://docs.python.org/dev/library/logging.html#logging.Logger.setLevel) را ببینید.

## `frappe.utils.logger.set_log_level`

با `frappe.utils.logger.set_log_level(level)` می‌توانید سطح ثبت گزارش را تعیین و loggerها را به‌صورت پویا بازسازی کنید.

## `frappe.loggers`

`frappe.loggers` دیکشنری `dict` از loggerهای فعال در فرایند را نگه می‌دارد. کلید، نام logger است که معمولاً به‌شکل `"{module}-{site}"` نوشته می‌شود و مقدار، نمونهٔ `Logger` را نگه می‌دارد.

اگر سایت‌های [other](https://docs.frappe.io) و [frappeframework.com](https://frappeframework.com) روی Bench باشند، loggerهای یک worker وب ممکن است شبیه نمونهٔ زیر باشند:

```text
{
    "frappe.web-docs.erpnext.com": <logger frappe.web-docs.erpnext.com="" (debug)="">,
    "frappe.web-frappeframework.com": <logger frappe.web-frappeframework.com="" (debug)="">
}
```

## `frappe.logger`

`frappe.logger(module, with_more_info, allow_site, filter, max_size, file_count)`

یک شیء `logging.Logger` با قابلیت ثبت گزارش در سطح سایت و Bench برمی‌گرداند. اگر logger از قبل وجود نداشته باشد، آن را می‌سازد و `frappe.loggers` را به‌روز می‌کند.

آرگومان‌ها:

- **`module`:** نام logger و در نتیجه نام فایل گزارش.
- **`with_more_info`:** دیکشنری `Form Dict` را به‌عنوان اطلاعات تکمیلی ثبت می‌کند؛ معمولاً برای درخواست‌ها مفید است.
- **`allow_site`:** نام سایت را می‌گیرد تا گزارش صریحاً در گزارش‌های همان سایت ثبت شود. اگر `True` باشد و سایت تعیین نشده باشد، حدس می‌زند گزارش‌ها در کدام سایت ذخیره شوند.
- **`filter`:** تابع پالایه‌ای برای logger اضافه می‌کند.
- **`max_size`:** بیشترین اندازهٔ هر فایل گزارش بر حسب بایت.
- **`file_count`:** بیشترین تعداد فایل‌هایی که چرخش گزارش نگه می‌دارد.

### کاربرد

```python
frappe.logger("frappe.web").debug({
    "site": "frappeframework.com",
    "remote_addr": "192.148.1.7",
    "base_url": "https://frappeframework.com/docs/v14/user/en/api/logging",
    "full_path": "/docs/v14/user/en/api/logging",
    "method": "POST",
    "scheme": "https",
    "http_status_code": 200
})
```

```text
2020-07-31 16:06:55,067 DEBUG frappe.web {'site': 'frappeframework.com', 'remote_addr': '192.148.1.7', 'base_url': 'https://frappeframework.com/docs/v14/user/en/api/logging', 'full_path': '/docs/v14/user/en/api/logging', 'method': 'POST', 'scheme': 'https', 'http_status_code': 200}
```

ورودی بالا در فایل‌های `./logs/frappe.web.log` و `./sites/frappeframework.com/logs/frappe.web.log` ثبت می‌شود.

> نمونهٔ کاربرد مطابق پیاده‌سازی در [app.py، خط‌های 102 تا 110](https://github.com/frappe/frappe/blob/fe22595e854e3fb3fa4dbcbd6d9dacdf94e73462/frappe/app.py#L102-L110) است.

### نمونه

فرض کنید APIای نوشته‌اید که شمارنده‌ای را با مقداری که کاربر می‌فرستد به‌روز می‌کند و مقدار تازه را برمی‌گرداند. برای اطمینان از عملکرد درست، می‌خواهید در API اطلاعات ثبت کنید؛ بنابراین loggerای به نام `api` می‌سازید تا رویدادهای آن را پیگیری کند.

```python
frappe.utils.logger.set_log_level("DEBUG")
logger = frappe.logger("api", allow_site=True, file_count=50)


@frappe.whitelist()
def update(value):
    user = frappe.session.user
    logger.info(f"{user} به counter_app.update با مقدار {value} دسترسی پیدا کرد")

    current_value = frappe.get_single_value("Value", "counter")
    updated_value = current_value + value
    logger.debug(f"{current_value} + {value} = {updated_value}")
    frappe.db.set_value("Value", "Value", "counter", updated_value)
    logger.info(f"{user} مقدار را به {value} به‌روز کرد")

    return updated_value
```

اکنون فراخوانی‌های API این نقطهٔ پایانی در `api.log` به‌شکل زیر ثبت می‌شوند:

```text
2020-07-31 16:06:55,067 INFO api gavin@frappe.io به counter_app.update با مقدار 100 دسترسی پیدا کرد
2020-07-31 16:06:55,067 DEBUG api 1000 + 100 = 1100
2020-07-31 16:06:55,068 INFO api gavin@frappe.io مقدار را به 100 به‌روز کرد
```

برای اطلاعات بیشتر، [راهنمای ثبت گزارش در Frappe Framework](https://docs.frappe.io/framework/user/en/logging) را ببینید.

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [ثبت گزارش](https://docs.frappe.io/framework/user/en/api/logging). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
