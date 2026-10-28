---
title: "اسکریپت داده"
slug: "اسکریپت-داده"
source_url: "https://docs.frappe.io/builder/data-script"
source_id: "builder/data-script"
source_version: "6c860a421d87982945871919f9a2eaac84b313cafbca54e028f61991352ccc37"
---

اسکریپت داده برای دریافت، پردازش و ارائهٔ داده‌های پویا از منابع گوناگون به صفحه‌های وب ضروری است. در این راهنما با استفاده از آن آشنا می‌شوید تا محتوای صفحه‌ها به‌روز و مرتبط بماند.

## مفاهیم اصلی

### اتصال داده

برای نمایش داده در صفحه، آن را به متغیر `data` نسبت دهید. این متغیر داده را به صفحهٔ وب منتقل می‌کند.

```python
data.events = ...  # Example of assigning data to the 'events' variable
data.user_list = ...  # Example of assigning data to the 'user_list' variable
```

**نکته:**

- اسکریپت‌های داده باید با Python نوشته شوند و سمت سرور اجرا می‌شوند.
- این اسکریپت‌ها در محیط محدودشدهٔ Python اجرا می‌شوند و فقط به ماژول‌های مجاز دسترسی دارند. [فهرست متدهای مجاز](https://frappeframework.com/docs/user/en/desk/scripting/script-api) را ببینید.

### هدایت بازدیدکننده

با تابع کمکی `redirect()` می‌توانید بازدیدکنندهٔ صفحه را از اسکریپت داده به هر نشانی هدایت کنید. این کار برای الزام به ورود، هدایت کاربران بر اساس نقش یا فرستادن آن‌ها به منبعی بیرونی کاربرد دارد.

#### استفادهٔ پایه

```
redirect("/login")           # 302 redirect (default)
redirect("/login", 301)      # custom HTTP status code
```

تابع `redirect()` پاسخ تغییرمسیر HTTP را به کارخواه می‌فرستد و دو آرگومان می‌پذیرد:

| آرگومان | الزامی | پیش‌فرض | توضیح |
|---|---|---|---|
| `location` | بله | — | نشانی مقصد، نسبی یا مطلق |
| `http_status_code` | خیر | `302` | کد وضعیت HTTP؛ برای نمونه `301` برای تغییرمسیر دائمی و `302` برای موقت |

## دریافت داده

### از DocType فرپّه

#### دریافت فهرست سندها

برای دریافت همهٔ رکوردهای یک DocType:

```python
data.users = frappe.db.get_all("User")
```

برای دریافت مجموعه‌ای فیلترشده، مانند کاربران فعال:

```python
data.active_users = frappe.db.get_all("User", filters={"enabled": 1})
```

#### دریافت یک سند

برای دریافت یک سند با نام یا شناسهٔ دیگر:

```python
data.user = frappe.get_doc("User", "<user-email>")
```

### از مسیر پویا

برای دریافت داده بر اساس پارامترهای مسیر پویا:

```python
# Example route: /blog/:blog_slug
blog_slug = frappe.form_dict.blog_slug
data.blog_post = frappe.get_doc("Blog Post", {"slug": blog_slug})
```

**روش استفاده:**

1. در تنظیمات صفحهٔ وب یک مسیر پویا تعریف کنید؛ برای نمونه `/blog/:blog_slug`.
2. در اسکریپت داده، پارامتر مسیر را با `frappe.form_dict.<parameter_name>` بخوانید.
3. از این پارامتر برای دریافت دادهٔ مرتبط استفاده کنید.

### از سایت‌های دیگر فرپّه

برای دریافت داده از سایت‌های بیرونی فرپّه از `FrappeClient` استفاده کنید:

```python
client = FrappeClient(
    'https://<frappe-site-url>',
    api_key='xxxxxxxxxx',
    api_secret='xxxxxxxxxx'
)

users = client.get_list('User', fields=['name', 'first_name', 'last_name'], filters={'user_type':'System User'})
```

برای دیدن همهٔ APIهای پشتیبانی‌شدهٔ `FrappeClient`، [مرجع API کلاینت Frappe](https://github.com/frappe/frappe-client#api) را ببینید.

برای دریافت `api_key` و `api_secret`:

1. فهرست کاربر (`User`) را باز کنید و یک کاربر را انتخاب کنید.
2. زبانهٔ «تنظیمات» را بزنید.
3. بخش دسترسی به API را باز کنید و تولید کلیدها را انتخاب کنید.
4. API Secret را از پنجرهٔ بازشده کپی و در جای امن نگه دارید.
5. مقدار API Key را در همین بخش یادداشت کنید.

### از منابع بیرونی

برای دریافت داده از APIها یا منابع بیرونی:

```python
data.posts = frappe.make_get_request("https://jsonplaceholder.typicode.com/posts")
```

## پردازش داده

دادهٔ دریافت‌شده را با کد Python پردازش کنید:

```python
data.users = frappe.db.get_all("User", fields=["name", "first_name", "last_name"])

# Processing data
for user in data.users:
    user.full_name = user.first_name + " " + user.last_name

# Adding routes to each user
for user in data.users:
    user.route = "/user/" + user.name
```

## انتقال داده به سمت کارخواه

برای انتقال داده به سمت کارخواه، متغیر `data.page_data` را مقداردهی کنید:

```python
data.page_data = {
    "enabled_languages": ["English", "Spanish", "French"]
    # ...
}
```

این داده در سمت کارخواه از طریق `window.page_data` در دسترس خواهد بود.

---
منبع: [اسکریپت داده](https://docs.frappe.io/builder/data-script). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
