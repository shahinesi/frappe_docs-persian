---
title: "API پرس‌وجوی اسکریپتی"
slug: "script-query-api"
source_url: "https://docs.frappe.io/insights/querying/script-query-api"
source_id: "insights/querying/script-query-api"
source_version: "0378da51b07274438cf049c0782f84eb73ca870e1e20d541e4914b3610e752ed"
source_updated: "2026-08-31"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/insights/querying/script-query-api)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

پرس‌وجوی اسکریپتی، Python را با <code>safe_exec</code> در sandbox مربوط به Server Script اجرا می‌کند. برای فعال‌کردن آن، مقدار <code>"server_script_فعال": 1</code> را در <code>common_سایت_config.json</code> قرار دهید.

پرس‌وجوی اسکریپتی فقط‌خواندنی است. هر تغییری که اسکریپت در پایگاه داده ایجاد کند، پس از پایان اجرا بازگردانده می‌شود.

## Insights

| دسته | APIها |
|---|---|
| خروجی | <code>results</code>: ردیف‌هایی که باید برگردانده شوند. مقدار اولیه <code>[]</code> است. می‌تواند فهرستی از دیکشنری‌ها، فهرستی از فهرست‌ها یا یک <code>DataFrame</code> باشد. |
| DataFrameها | <code>pandas.DataFrame</code>، <code>pandas.read_csv</code>، <code>pandas.json_normalize</code> |
| متغیرها | برای هر متغیر پرس‌وجو یک نام در نظر بگیرید و آن را از مسیر **⋯ → Variables** اضافه کنید. مقدار همیشه رشته است. |
| گزارش‌ها | <code>print()</code>: متن را همراه تعداد ردیف‌ها، زمان اجرا و هر خطای رخ‌داده در **⋯ → Logs** می‌نویسد. |

## Frappe

| دسته | APIها |
|---|---|
| اسناد | <code>frappe.get_doc</code>، <code>get_cached_doc</code>، <code>get_last_doc</code>، <code>get_meta</code> |
| پایگاه داده | <code>frappe.db.get_list</code>، <code>get_all</code>، <code>get_value</code>، <code>get_single_value</code>، <code>exists</code>، <code>count</code>، <code>sql</code>، <code>escape</code> |
| سازندهٔ پرس‌وجو | <code>frappe.qb</code> |
| HTTP | <code>frappe.make_get_request</code> |
| خطاها | <code>frappe.throw</code>، <code>frappe.log_error</code> |
| نشست | <code>frappe.session.user</code>، <code>frappe.user</code>، <code>frappe.lang</code> |
| تنظیمات | <code>frappe.get_system_settings</code> |

## <code>frappe.utils</code>

| دسته | APIها |
|---|---|
| تاریخ | <code>getdate</code>، <code>get_datetime</code>، <code>now</code>، <code>now_datetime</code>، <code>nowdate</code>، <code>today</code>، <code>add_days</code>، <code>add_months</code>، <code>add_years</code>، <code>add_to_date</code>، <code>date_diff</code>، <code>month_diff</code>، <code>time_diff_in_seconds</code>، <code>time_diff_in_hours</code> |
| دوره‌ها | <code>get_first_day</code>، <code>get_last_day</code>، <code>get_first_day_of_week</code>، <code>get_last_day_of_week</code>، <code>get_quarter_start</code>، <code>get_quarter_ending</code>، <code>get_year_start</code>، <code>get_year_ending</code>، <code>get_weekday</code>، <code>get_month</code>، <code>get_timespan_date_range</code> |
| منطقه‌های زمانی | <code>get_system_timezone</code>، <code>convert_utc_to_system_timezone</code>، <code>get_datetime_in_timezone</code> |
| عددها | <code>flt</code>، <code>cint</code>، <code>cstr</code>، <code>floor</code>، <code>ceil</code>، <code>rounded</code>، <code>safe_div</code> |
| رشته‌ها | <code>strip</code>، <code>strip_html</code>، <code>unique</code> |
| JSON | <code>parse_json</code> |

## Python

| دسته | APIها |
|---|---|
| توابع داخلی | <code>abs</code>، <code>all</code>، <code>any</code>، <code>bool</code>، <code>dict</code>، <code>enumerate</code>، <code>isinstance</code>، <code>list</code>، <code>max</code>، <code>min</code>، <code>range</code>، <code>set</code>، <code>sorted</code>، <code>sum</code>، <code>tuple</code>، <code>len</code>، <code>str</code>، <code>int</code>، <code>float</code>، <code>round</code>، <code>zip</code> |
| JSON | <code>json.loads</code>، <code>json.dumps</code>، <code>as_json</code>، <code>_dict</code> |

## نکته‌ها

- این صفحه APIهای رایج را فهرست می‌کند. همهٔ APIهای خواندنی موجود در sandbox مربوط به Server Script چارچوب نیز در دسترس‌اند؛ به [مستندات API مربوط به Server Script](https://docs.frappe.io/framework/user/en/desk/scripting/script-api) مراجعه کنید.
- <code>frappe.db.sql</code> فقط دستورهای <code>select</code> و <code>explain</code> را اجرا می‌کند.
- نتیجه‌ها برای 5 دقیقه cache می‌شوند. کلید cache شامل کد، مقدار متغیرها و فیلترهای زمان اجرا است. برای نادیده‌گرفتن cache از **Force Run** استفاده کنید.

## نمونه

    results = frappe.db.get_all(
        "سفارش فروش",
        filters={"docstatus": 1},
        fields=["مشتری", "transaction_date", "grand_total"],
        limit_page_length=0,
    )

نمونهٔ دریافت داده از یک API خارجی:

    payload = frappe.make_get_request("https://api.example.com/v1/rates")
    results = pandas.json_normalize(payload["rates"])

---

**منبع:** [مستندات رسمی Frappe Insights](https://docs.frappe.io/insights/querying/script-query-api). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
