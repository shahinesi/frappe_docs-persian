---
title: "کارهای پس‌زمینه در Frappe"
slug: "background-jobs"
source_url: "https://docs.frappe.io/framework/user/en/api/background_jobs"
source_id: "framework/user/en/api/background_jobs"
source_version: "d0301580b298a81502322f380b713d6ea839ba1e308de6da9c8801687225fef3"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "unverified"
---

Frappe سامانه‌ای برای اجرای کارها در پس‌زمینه دارد. این سامانه با بستهٔ [schedule در PyPI](https://pypi.org/project/schedule/) و یک [حلقهٔ بی‌پایان `while` در زمان‌بند Frappe](https://github.com/frappe/frappe/blob/d0efa8e3ff734268a30b4804427641d2a5ed643e/frappe/utils/scheduler.py#L36-L46) پیاده‌سازی شده است.

برای قراردادن یک متد پایتون در صف اجرا در پس‌زمینه، از متد `frappe.enqueue` استفاده کنید:

```python
def long_running_job(param1, param2):
    # کارهای زمان‌بر
    pass

# ارسال مستقیم تابع
frappe.enqueue(long_running_job, queue='short', param1='A', param2='B')

# یا ارسال مسیر کامل ماژول به‌صورت رشته
frappe.enqueue('app.module.folder.long_running_job', queue='short', param1='A', param2='B')
```

می‌توانید آرگومان‌های زیر را به `enqueue` بدهید:

```python
frappe.enqueue(
    method, # تابع پایتون یا مسیر ماژول به‌صورت رشته
    queue="default", # یکی از short، default یا long
    timeout=None, # تعیین دستی مهلت اجرا
    is_async=True, # اگر True باشد، متد در پردازشگر اجرا می‌شود
    now=False, # اگر True باشد، متد مستقیماً و خارج از پردازشگر اجرا می‌شود
    job_name=None, # تعیین نام کار
    enqueue_after_commit=False, # افزودن کار به صف پس از ثبت تراکنش پایگاه داده در پایان درخواست
    at_front=False, # قراردادن کار در ابتدای صف
    **kwargs, # ارسال آرگومان‌های نام‌دار به متد
)
```

همچنین می‌توانید با `frappe.enqueue_doc` متدی از یک سند را در صف قرار دهید. برای اطلاعات بیشتر، [مرجع API سندها در Frappe](https://docs.frappe.io/framework/user/en/api/document) را ببینید:

```python
frappe.enqueue_doc(
    doctype,
    name,
    "do_something", # نام متد کنترل‌گر
    queue="long",
    timeout=4000,
    param="value"
)
```

## صف‌ها

Frappe به‌طور پیش‌فرض سه صف دارد: `short`، `default` و `long`. مهلت اجرای پیش‌فرض هرکدام:

- `short`: 300 ثانیه
- `default`: 300 ثانیه
- `long`: 1500 ثانیه

همچنین می‌توانید هنگام فراخوانی `enqueue` مهلت دلخواهی تعیین کنید.

### صف‌های سفارشی

برای افزودن صف سفارشی، آن را در فایل `common_site_config.json` پیکربندی کنید. دربارهٔ [پیکربندی مشترک سایت‌های Frappe](https://docs.frappe.io/framework/user/en/guides/basics/sites#common_site_config_json) بیشتر بخوانید:

```json
{
    ...
    "workers": {
        "myqueue": {
            "timeout": 5000, # مهلت اجرای صف
            "background_workers": 4, # تعداد پردازشگرهای پس‌زمینهٔ این صف
        }
    }
}
```

## Workerها

Frappe به‌طور پیش‌فرض سه نوع پردازشگر برای دریافت کار از صف‌ها راه‌اندازی می‌کند. پیکربندی پیش‌فرض چنین است:

```sh
bench worker --queue short
bench worker --queue default
bench worker --queue long
```

در محیط عملیاتی، این سه فرایند به تعداد پردازشگرهای پس‌زمینهٔ پیکربندی‌شده تکثیر می‌شوند تا بار بیشتری را مدیریت کنند.

> نگاشت هر پردازشگر به یک صف، فقط یک قرارداد رایج است و پیروی از آن الزامی نیست.

### دریافت کار از چند صف

می‌توانید با یک رشتهٔ جداشده با ویرگول، چند صف را برای دریافت کار به پردازشگر بدهید.

برای نمونه، اگر بخواهید صف‌های `short` و `default` را یکی کنید و به‌جای پیکربندی پیش‌فرض فقط دو نوع پردازشگر داشته باشید، پیکربندی را چنین تغییر دهید:

```sh
bench worker --queue short,default
bench worker --queue long
```

> این نمونه‌ها با قالب Procfile نوشته شده‌اند، اما به‌سادگی در پیکربندی‌های Supervisor یا systemd نیز قابل استفاده‌اند.

### حالت اجرای دسته‌ای با `--burst`

```sh
bench worker --queue short --burst
```

این فرمان یک پردازشگر موقت اجرا می‌کند. پردازشگر کارهای صف `short` را انجام می‌دهد و پس از خالی‌شدن صف خارج می‌شود. اگر گاهی به پردازشگرهای بیشتری نیاز دارید، می‌توانید با crontab سیستم‌عامل آن‌ها را در زمان‌های مشخص اجرا کنید.

## رویدادهای زمان‌بندی‌شده

برای اجرای دوره‌ای کارها در پس‌زمینه، از رویدادهای زمان‌بندی‌شده و hook به‌نام `scheduler_events` استفاده کنید.

**`app/hooks.py`**

```python
scheduler_events = {
    "hourly": [
        # اجرا در هر ساعت
        "app.scheduled_tasks.update_database_usage"
    ],
}
```

**`app/scheduled_tasks.py`**

```python
def update_database_usage():
    pass
```

> پس از تغییر رویدادهای زمان‌بندی‌شده در `hooks.py`، برای اعمال تغییرات باید `bench migrate` را اجرا کنید.

### رویدادهای دردسترس

- `hourly`، `daily`، `weekly` و `monthly`: به‌ترتیب هر ساعت، هر روز، هر هفته و هر ماه اجرا می‌شوند.
- `hourly_long`، `daily_long`، `weekly_long` و `monthly_long`: مانند موارد بالا هستند، اما کارها را با پردازشگر بلندمدت اجرا می‌کنند. دربارهٔ [ساختار پوشه‌ها و پردازشگر بلندمدت](https://docs.frappe.io/framework/user/en/basics/directory-structure#worker_long) بخوانید.
- `all`: هر 4 دقیقه اجرا می‌شود. فاصلهٔ اجرا را می‌توان با کلید `scheduler_interval` در [پیکربندی مشترک سایت‌ها](https://docs.frappe.io/framework/user/en/guides/basics/sites#common_site_config_json) تنظیم کرد.
- `cron`: رشتهٔ معتبر cron که کتابخانهٔ [croniter در PyPI](https://pypi.org/project/croniter/) می‌تواند آن را تجزیه کند.

### نمونهٔ استفاده

```python
scheduler_events = {
    "daily": [
        "app.scheduled_tasks.manage_recurring_invoices"
    ],
    "daily_long": [
        "app.scheduled_tasks.take_backups_daily"
    ],
    "cron": {
        "15 18 * * *": [
            "app.scheduled_tasks.delete_all_barcodes_for_users"
        ],
        "*/6 * * * *": [
            "app.scheduled_tasks.collect_error_snapshots"
        ],
        "annual": [
            "app.scheduled_tasks.collect_error_snapshots"
        ]
    }
}
```

## رویدادهای زمان‌بندی‌شدهٔ قابل‌پیکربندی

اگر فاصلهٔ اجرای یک کار باید توسط کاربر تنظیم شود، یک سند **رویداد زمان‌بندی‌شده** (`Scheduler Event`) بسازید و در برابر آن یک سند **نوع کار زمان‌بندی‌شده** (`Scheduled Job Type`) ایجاد کنید. در این روش به hookِ `scheduler_event` نیازی نیست.

برای نمونه:

```python
# ایجاد سند رویداد زمان‌بندی‌شده
sch_eve = frappe.new_doc("Scheduler Event")
sch_eve.scheduled_against = "Process Payment Reconciliation"
sch_eve.save()

# ایجاد نوع کار زمان‌بندی‌شده
job = frappe.new_doc("Scheduled Job Type")
job.frequency = "Cron"
job.scheduler_event = sch_eve.name
job.cron_format = "0/5 * * * *"     # اجرا هر پنج دقیقه
job.save()
```

فاصلهٔ اجرای `Scheduled Job Type` را بعداً نیز می‌توان تغییر داد؛ این مقدار پس از مهاجرت Bench حفظ می‌شود.

> کارهایی که زمان‌بند اجرا می‌کند، با کاربر **`Administrator`** اجرا می‌شوند. بنابراین، مگر آن‌که کاربر دیگری مشخص کنید، مالک سندهایی که این کارها می‌سازند نیز **`Administrator`** خواهد بود.

منبع: [کارهای پس‌زمینه در Frappe](https://docs.frappe.io/framework/user/en/api/background_jobs). این صفحه ترجمهٔ غیررسمی است؛ مجوز محتوای منبع هنوز تأیید نشده است و تا زمان بررسی، بازنشر تحت شرایط CC BY-SA تأیید نمی‌شود.


