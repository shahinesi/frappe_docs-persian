---
title: "حافظهٔ پنهان (کش)"
slug: "caching"
source_url: "https://docs.frappe.io/framework/user/en/guides/caching"
source_id: "framework/user/en/guides/caching"
source_version: "b0e47b33062923fdbf6edc2bef162c5ac20817269202dc9cd8e16d6539a7259c"
source_updated: "2026-08-28"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

یکی از قابلیت‌های آمادهٔ Frappe Framework، استفادهٔ داخلی از Redis برای نگهداری داده در حافظهٔ پنهان است. Redis ذخیره‌سازی درون‌حافظه‌ایِ کلیدـمقدار، سریع و ساده‌ای است. در Frappe Framework می‌توان از Redis برای سریع‌ترکردن محاسبات تکراری و زمان‌بر یا پرهیز از پرس‌وجوهای پایگاه داده برای اطلاعاتی استفاده کرد که به‌ندرت تغییر می‌کنند.

Bench، Redis را به‌صورت سرویس جداگانه اجرا می‌کند. هر کارگر وب یا پس‌زمینهٔ Frappe می‌تواند از طریق `frappe.cache` به آن وصل شود.

> در نسخه‌های قدیمی‌تر Frappe ممکن است برای دسترسی به اتصال Redis لازم باشد به‌جای `frappe.cache` از `frappe.cache()` استفاده کنید.

### نوع‌های داده و کاربرد آن‌ها در Redis

Redis از نوع‌های دادهٔ زیادی پشتیبانی می‌کند؛ در اینجا فقط چند نوع پرکاربرد را مرور می‌کنیم:

1. **رشته‌ها** پرکاربردترین نوع داده در Redis هستند و به‌صورت جفت‌های کلیدـمقدار ذخیره می‌شوند.

```python
In [1]: frappe.cache.set_value("key", "value")

In [2]: frappe.cache.get_value("key")
Out[2]: 'value'
```

2. **هش‌ها** برای نمایش ساختارهای پیچیده به‌کار می‌روند؛ فیلدهای آن‌ها را می‌توان جداگانه و بدون ارسال کل ساختار به‌روزرسانی کرد. می‌توانید هش را مانند دیکشنری‌ای در نظر بگیرید که در Redis ذخیره شده است.

```python
# دریافت جداگانهٔ فیلدها
In [1]: frappe.cache.hset("user|admin", "name", "Admin")
In [2]: frappe.cache.hset("user|admin", "email", "admin@example.com")

# دریافت مقدار یک فیلد
In [3]: frappe.cache.hget("user|admin", "name")
Out[3]: 'Admin'

# یا دریافت همهٔ فیلدها در یک نوبت
In [4]: frappe.cache.hgetall("user|admin")
Out[4]: {'name': 'Admin', 'email': 'admin@example.com'}
```

### سندهای ذخیره‌شده در حافظهٔ پنهان

Frappe تابعی داخلی دارد که سند را از حافظهٔ پنهان، به‌جای پایگاه داده، دریافت می‌کند.

دریافت سند از حافظهٔ پنهان معمولاً سریع‌تر است؛ بنابراین وقتی سند به‌ندرت تغییر می‌کند، از این روش استفاده کنید. یکی از کاربردهای رایج آن دریافت تنظیماتی است که کاربر پیکربندی کرده است.

```python
system_settings = frappe.get_cached_doc("System Settings")
```

حافظهٔ پنهان سندها به‌صورت خودکار و با سازوکار «تلاش در حد امکان» باطل می‌شود.

هرگاه ORM فریم‌ورک با `doc.save` یا `frappe.db.set_value` تغییری ایجاد کند، حافظهٔ پنهان سند مربوط را پاک می‌کند. اما اگر پرس‌وجوی مستقیم به پایگاه داده بفرستید، این پاک‌سازی خودکار انجام نمی‌شود.

> برای پاک‌کردن دستی حافظهٔ پنهان از `frappe.clear_document_cache(doctype, name)` استفاده کنید.

### پیاده‌سازی حافظهٔ پنهان سفارشی

اگر محاسبه‌ای پرهزینه و طولانی دارید که برای ورودی‌های یکسان همیشه نتیجهٔ یکسانی می‌دهد، ذخیره‌کردن نتیجه در حافظهٔ پنهان می‌تواند مفید باشد.

در نمونهٔ سادهٔ زیر، تابعی کند را به حافظهٔ پنهان مجهز می‌کنیم:

```python
def slow_add(a, b):
    import time; time.sleep(1) # شبیه‌سازی بار کاری
    return a + b
```

مهم‌ترین بخش پیاده‌سازی حافظهٔ پنهان سفارشی، ساخت کلیدی یکتا است. در این نمونه، مقدار ذخیره‌شده به دو ورودی وابسته است؛ پس هر دو باید بخشی از کلید باشند.

```python
def slow_add(a, b):
    key = f"slow_addition|{a}+{b}" # کلید یکتای نمایندهٔ این محاسبه

    # اگر این کلید در حافظهٔ پنهان باشد، مقدار آن را برگردان
    if cached_value := frappe.cache.get_value(key):
        return cached_value

    import time; time.sleep(1) # شبیه‌سازی بار کاری
    result = a + b

    # ذخیرهٔ مقدار محاسبه‌شده تا در فراخوانی بعدی دوباره محاسبه نشود
    frappe.cache.set_value(key, result)

    return result
```

#### باطل‌کردن حافظهٔ پنهان

برای جلوگیری از استفاده از دادهٔ منقضی‌شده، دو راهکار پیشنهاد می‌شود:

1. هنگام ذخیرهٔ مقدار، زمان انقضای کوتاهی تعیین کنید.

```python
# این مقدار پس از یک ساعت به‌طور خودکار منقضی می‌شود
frappe.cache.set_value(key, result, expires_in_sec=60*60)
```

2. هنگام تغییر مقدار ذخیره‌شده، حافظهٔ پنهان را دستی پاک کنید.

```python
frappe.cache.delete_value(key) # `frappe.cache.hdel` if using hashes.
```

### دکوراتور `@redis_cache`

Frappe دکوراتوری دارد که نتیجهٔ فراخوانی تابع را به‌طور خودکار در حافظهٔ پنهان نگه می‌دارد. با آن می‌توانید به‌سرعت تابع کندی را به حافظهٔ پنهان مجهز کنید.

```python
In [1]: def slow_function(a, b):
    ...:     import time; time.sleep(1)  # شبیه‌سازی محاسبهٔ پرهزینه
   ...:     return a + b
   ...:

In [2]: # این تابع در هر بار اجرا یک ثانیه زمان می‌برد.
   ...: %time slow_function(40, 2)
   ...:
Wall time 1 s
Out[2]: 42

In [3]: %time slow_function(40, 2)
Wall time 1 s
Out[3]: 42

In [4]: from frappe.utils.caching import redis_cache
   ...:

In [5]: @redis_cache
   ...: def slow_function(a, b):
   ...:     import time; time.sleep(1)  # شبیه‌سازی محاسبهٔ پرهزینه
   ...:     return a + b
   ...:

In [6]: # اکنون فراخوانی اول یک ثانیه زمان می‌برد و فراخوانی‌های بعدی بی‌درنگ نتیجه می‌دهند.
   ...: %time slow_function(40, 2)
   ...:
Wall time 1 s
Out[6]: 42

In [7]: %time slow_function(40, 2)
   ...:
Wall time 897 µs
Out[7]: 42
```

#### باطل‌کردن حافظهٔ پنهان

مقدارهای ذخیره‌شده با `@redis_cache` را به دو روش می‌توان باطل کرد:

1. بازهٔ انقضای مناسبی برحسب ثانیه تعیین کنید تا مقدار پس از مدتی خودکار منقضی شود. برای نمونه، `@redis_cache(ttl=60)` باعث می‌شود مقدار ذخیره‌شده پس از 60 ثانیه منقضی شود.
2. حافظهٔ پنهان را دستی با فراخوانی متد `clear_cache` تابع پاک کنید.

```python
from frappe.utils.caching import redis_cache

@redis_cache
def slow_function(...):
    ...


def invalidate_cache():
    slow_function.clear_cache()
```

### پیکربندی Redis در Frappe

Bench به‌طور پیش‌فرض Redis را راه‌اندازی می‌کند. پیکربندی Redis در پوشهٔ `{bench}/config/` قرار دارد.

Bench همچنین `Procfile` و فایل پیکربندی Supervisor را طوری تنظیم می‌کند که هنگام راه‌اندازی Bench، سرور Redis اجرا شود.

```text
redis_cache: redis-server config/redis_cache.conf
```

نمونه‌ای از پیکربندی:

```ini
dbfilename redis_cache.rdb
dir /home/user/benches/develop/config/pids
pidfile /home/user/benches/develop/config/pids/redis_cache.pid
bind 127.0.0.1
port 13000
maxmemory 737mb
maxmemory-policy allkeys-lru
appendonly no

save ""
```

برای افزایش بیشینهٔ حافظهٔ اختصاص‌یافته به کش، می‌توانید مقدار `maxmemory` را در این پیکربندی تغییر دهید. تغییر گزینه‌های دیگر توصیه نمی‌شود.

برای آشنایی با جزئیات، [مرجع رسمی پیکربندی Redis](https://redis.io/docs/latest/operate/oss_and_stack/management/config-file/) را ببینید.

### جزئیات پیاده‌سازی

#### چندمستاجری

`frappe.cache` کلیدها را در داخل، بر اساس زمینهٔ سایت پیشوندگذاری می‌کند. بنابراین فراخوانی `frappe.cache.set_value("key")` از دو سایت در یک Bench، برای هر سایت ورودی جداگانه‌ای می‌سازد.

برای دیدن جزئیات پیاده‌سازی، تابع `frappe.cache.make_key` را بررسی کنید.

#### نوع‌های پیچیده

Frappe از ماژول `pickle` برای سریال‌سازی بایتیِ ساختارهای پیچیده‌ای مانند سندها استفاده می‌کند؛ بنابراین هنگام کار با `frappe.cache` لازم نیست نگران سریال‌سازی و بازیابی مقدارها باشید.

دربارهٔ ماژول [pickle در مستندات رسمی پایتون](https://docs.python.org/3/library/pickle.html) بیشتر بخوانید.

#### کش سمت کاربر

Frappe برای جلوگیری از فراخوانی‌های تکراری Redis، در `frappe.local.cache` یک کش سمت کاربر روی کش Redis پیاده‌سازی می‌کند.

فراخوانی‌های تکراری Redis در همان درخواست یا کار پس‌زمینه، داده را از کش سمت کاربر دریافت می‌کنند و دوباره Redis را صدا نمی‌زنند.

#### `RedisWrapper`

تغییرهای مرتبط با Frappe با پوشاندن کارخواه پیش‌فرض Redis و گسترش متدهای آن پیاده‌سازی شده‌اند. این کد در ماژول `frappe.utils.redis_wrapper` قرار دارد.

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [راهنمای حافظهٔ پنهان](https://docs.frappe.io/framework/user/en/guides/caching). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
