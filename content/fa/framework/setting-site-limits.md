---
title: "تنظیم محدودیت‌های سایت"
slug: "setting-site-limits"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/settings-limits"
source_id: "framework/user/en/bench/guides/settings-limits"
source_version: "4f649e8dc3a80d1e41cf771c57ca04eaeb14d2b091758a1d2583d63e14abd3a6"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> **توجه:** این قابلیت از نسخهٔ 12 منسوخ شده است. مطالب زیر رفتار نسخه‌های قدیمی‌تر را شرح می‌دهد.

در Frappe نسخهٔ 7 امکان تعیین محدودیت‌ها و ممنوعیت‌هایی برای سایت افزوده شد. این محدودیت‌ها در فایل `site_config.json` در پوشهٔ سایت تنظیم می‌شوند:

```json
{
  "db_name": "xxxxxxxxxx",
  "db_password": "xxxxxxxxxxxx",
  "limits": {
    "emails": 1500,
    "space": 0.157,
    "expiry": "2016-07-25",
    "users": 1
  }
}
```

برای تعیین یک محدودیت، این دستور را اجرا کنید:

```sh
bench --site [sitename] set-limit [limit] [value]
```

برای تعیین هم‌زمان چند محدودیت، دستور زیر را اجرا کنید:

```sh
bench --site [sitename] set-limits --limit [limit] [value] --limit [limit-2] [value-2]
```

محدودیت‌های معتبر عبارت‌اند از:

- `users`: حداکثر تعداد کاربران سایت
- `emails`: حداکثر تعداد ایمیل‌هایی که سایت در هر ماه می‌فرستد
- `space`: حداکثر فضای قابل‌استفادهٔ سایت بر حسب GB
- `email_group`: حداکثر تعداد اعضای مجاز در یک گروه ایمیل
- `expiry`: تاریخ انقضای سایت با قالب `YYYY-MM-DD` و درون کوتیشن

برای نمونه، دستور زیر تعداد کاربران `site1.local` را به 5 محدود می‌کند:

```sh
bench --site site1.local set-limit users 5
```

برای دیدن میزان مصرف، صفحهٔ **اطلاعات مصرف** را از نوار ابزار یا نوار جست‌وجوی سراسری باز کنید. محدودیت فقط وقتی در این صفحه نمایش داده می‌شود که برای سایت تنظیم شده باشد.

![صفحهٔ اطلاعات مصرف](https://docs.frappe.io/files/usage_info.png)

منبع: [تنظیم محدودیت‌های سایت](https://docs.frappe.io/framework/user/en/bench/guides/settings-limits). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
