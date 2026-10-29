---
title: "عبارت‌ها و توابع"
slug: "expressions"
source_url: "https://docs.frappe.io/insights/querying/expressions"
source_id: "insights/querying/expressions"
source_version: "9ee8315b8b5fea4c91611e7d115e67f05ba59b43b79e43ad52d741d8124853b4"
source_updated: "2026-01-06"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [عبارت‌ها و توابع](https://docs.frappe.io/insights/querying/expressions)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

## عبارت‌ها

زبان عبارت‌ها و فرمول‌ها در Insights بر پایهٔ دستور زبان Python است. کتابخانهٔ زیربنایی ساخت پرس‌وجو <code>ibis</code> است؛ برای اطلاعات بیشتر به [راهنمای ibis برای کاربران SQL](https://ibis-project.org/tutorials/ibis-for-sql-users) مراجعه کنید.

توابع کمکی زیر نوشتن عبارت در Insights را آسان‌تر می‌کنند.

## توابع تجمیعی

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| تعداد | <code>count(column)</code><br><code>count(sales)</code> | تعداد مقدارهای غیرتهی ستون را برمی‌گرداند. نمونهٔ خروجی: <code>100</code>. |
| شمارش متمایز | <code>distinct_count(column)</code><br><code>distinct_count(customer_id)</code> | تعداد مقدارهای متمایز ستون را برمی‌گرداند. نمونه: <code>50</code>. |
| مجموع | <code>sum(column)</code><br><code>sum(sales)</code> | مجموع مقدارهای ستون را برمی‌گرداند. نمونه: <code>10000</code>. |
| میانگین | <code>avg(column)</code><br><code>avg(sales)</code> | میانگین مقدارهای ستون را برمی‌گرداند. نمونه: <code>100</code>. |
| حداقل | <code>min(column)</code><br><code>min(sales)</code> | کمترین مقدار ستون را برمی‌گرداند. نمونه: <code>50</code>. |
| حداکثر | <code>max(column)</code><br><code>max(sales)</code> | بیشترین مقدار ستون را برمی‌گرداند. نمونه: <code>200</code>. |
| چسباندن گروهی | <code>group_concat(column)</code><br><code>group_concat(product_name)</code> | مقدارهای ستون را به هم می‌چسباند. نمونه: <code>"Product A, Product B, Product C"</code>. |
| مجموع شرطی | <code>sum_if(condition, column)</code><br><code>sum_if(sales &gt; 1000, sales)</code> | مجموع مقدارهای ستون را که شرط را دارند برمی‌گرداند. نمونه: <code>5000</code>. |
| شمارش شرطی | <code>count_if(condition, column)</code><br><code>count_if(sales &gt; 1000, sales)</code> | تعداد مقدارهای ستون را که شرط را دارند برمی‌گرداند. نمونه: <code>5</code>. |
| شمارش متمایز شرطی | <code>distinct_count_if(condition, column)</code><br><code>distinct_count_if(sales &gt; 1000, customer_id)</code> | تعداد مقدارهای متمایز ستون را که شرط را دارند برمی‌گرداند. نمونه: <code>3</code>. |

## توابع شرطی

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| اگر وگرنه | <code>if_else(condition, true_value, false_value)</code><br><code>if_else(sales &gt; 1000, "High", "Low")</code> | اگر شرط درست باشد <code>true_value</code> وگرنه <code>false_value</code> را برمی‌گرداند. نمونه: <code>"High"</code>. |
| عبارت شرطی چندشاخه | <code>case(condition1, value1, condition2, value2, ..., default_value)</code><br><code>case(sales &gt; 1000, "High", sales &gt; 500, "Medium", "Low")</code> | مقداری را برمی‌گرداند که با نخستین شرط درست متناظر است. اگر هیچ شرطی درست نباشد، <code>default_value</code> را می‌دهد. نمونه: <code>"High"</code>. |
| نخستین مقدار غیرتهی | <code>coalesce(column1, column2, ..., default_value)</code><br><code>coalesce(product_name, product_code, "Unknown")</code> | نخستین مقدار غیرتهی ستون‌ها را برمی‌گرداند؛ اگر همه تهی باشند، مقدار پیش‌فرض را می‌دهد. نمونه: <code>"Product A"</code>. |

## توابع رشته‌ای

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| تبدیل به حروف کوچک | <code>lower(column)</code><br><code>lower(product_name)</code> | مقدارهای ستون را به حروف کوچک تبدیل می‌کند. نمونه: <code>"product a"</code>. |
| تبدیل به حروف بزرگ | <code>upper(column)</code><br><code>upper(product_name)</code> | مقدارهای ستون را به حروف بزرگ تبدیل می‌کند. نمونه: <code>"PRODUCT A"</code>. |
| چسباندن رشته‌ها | <code>concat(column1, column2, ..., separator)</code><br><code>concat(first_name, last_name, " ")</code> | ستون‌ها را با جداکننده به هم می‌چسباند. نمونه: <code>"John Doe"</code>. |
| جایگزینی | <code>replace(column, old_value, new_value)</code><br><code>replace(product_name, "A", "B")</code> | <code>old_value</code> را در ستون با <code>new_value</code> جایگزین می‌کند. نمونه: <code>"Product B"</code>. |
| زیررشته | <code>substring(column, start, length)</code><br><code>substring(product_name, 0, 7)</code> | از اندیس شروع، زیررشته‌ای با طول مشخص برمی‌گرداند. نمونه: <code>"Product"</code>. |
| شامل‌شدن | <code>contains(column, substring)</code><br><code>contains(product_name, "Product")</code> | اگر ستون شامل زیررشته باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| شامل‌نبودن | <code>not_contains(column, substring)</code><br><code>not_contains(product_name, "A")</code> | اگر ستون زیررشته را نداشته باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| آغازشدن با | <code>starts_with(column, prefix)</code><br><code>starts_with(product_name, "Product")</code> | بررسی می‌کند مقدار ستون با پیشوند آغاز می‌شود یا نه؛ نمونه: <code>True</code>. |
| پایان‌یافتن با | <code>ends_with(column, suffix)</code><br><code>ends_with(product_name, "A")</code> | بررسی می‌کند مقدار ستون به پسوند ختم می‌شود یا نه؛ نمونه: <code>True</code>. |
| طول | <code>length(column)</code><br><code>length(product_name)</code> | طول مقدار ستون را برمی‌گرداند. نمونه: <code>10</code>. |

## توابع عددی

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| قدر مطلق | <code>abs(column)</code><br><code>abs(sales)</code> | قدرمطلق مقدار ستون را برمی‌گرداند. نمونه: <code>100</code>. |
| گردکردن | <code>round(column, decimals)</code><br><code>round(sales, 2)</code> | مقدار ستون را تا تعداد رقم اعشار مشخص‌شده گرد می‌کند. نمونه: <code>100.50</code>. |
| جزء صحیح رو به پایین | <code>floor(column)</code><br><code>floor(sales)</code> | بزرگ‌ترین عدد صحیح کوچک‌تر یا مساوی مقدار ستون را برمی‌گرداند. نمونه: <code>100</code>. |
| جزء صحیح رو به بالا | <code>ceil(column)</code><br><code>ceil(sales)</code> | کوچک‌ترین عدد صحیح بزرگ‌تر یا مساوی مقدار ستون را برمی‌گرداند. نمونه: <code>101</code>. |

## توابع تاریخ

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| سال | <code>year(column)</code><br><code>year(order_date)</code> | بخش سال تاریخ را برمی‌گرداند. نمونه: <code>2022</code>. |
| فصل | <code>quarter(column)</code><br><code>quarter(order_date)</code> | بخش فصل تاریخ را برمی‌گرداند. نمونه: <code>3</code>. |
| ماه | <code>month(column)</code><br><code>month(order_date)</code> | بخش ماه تاریخ را برمی‌گرداند. نمونه: <code>10</code>. |
| هفتهٔ سال | <code>week_of_year(column)</code><br><code>week_of_year(order_date)</code> | شمارهٔ هفتهٔ سال را برمی‌گرداند. نمونه: <code>41</code>. |
| روز سال | <code>day_of_year(column)</code><br><code>day_of_year(order_date)</code> | شمارهٔ روز در سال را برمی‌گرداند. نمونه: <code>288</code>. |
| روز هفته | <code>day_of_week(column)</code><br><code>day_of_week(order_date)</code> | روز هفته را در بازهٔ <code>0-6</code> برمی‌گرداند. نمونه: <code>4</code>. |
| روز | <code>day(column)</code><br><code>day(order_date)</code> | بخش روز تاریخ را برمی‌گرداند. نمونه: <code>15</code>. |
| ساعت | <code>hour(column)</code><br><code>hour(order_date)</code> | بخش ساعت تاریخ را برمی‌گرداند. نمونه: <code>10</code>. |
| دقیقه | <code>minute(column)</code><br><code>minute(order_date)</code> | بخش دقیقهٔ تاریخ را برمی‌گرداند. نمونه: <code>30</code>. |
| ثانیه | <code>second(column)</code><br><code>second(order_date)</code> | بخش ثانیهٔ تاریخ را برمی‌گرداند. نمونه: <code>45</code>. |
| میکروثانیه | <code>microsecond(column)</code><br><code>microsecond(order_date)</code> | بخش میکروثانیهٔ تاریخ را برمی‌گرداند. نمونه: <code>500000</code>. |
| اختلاف تاریخ | <code>date_diff(column1, column2, unit)</code><br><code>date_diff(order_date, delivery_date, "day")</code> | اختلاف دو ستون تاریخ را در واحد مشخص‌شده برمی‌گرداند. واحدها: <code>year</code>، <code>quarter</code>، <code>month</code>، <code>week</code>، <code>day</code>، <code>hour</code>، <code>minute</code>، <code>second</code>، <code>millisecond</code>، <code>microsecond</code> و <code>nanosecond</code>. نمونه: <code>5</code>. |
| قالب‌بندی تاریخ | <code>format_date(column, format)</code><br><code>format_date(order_date, "%Y-%m-%d")</code> | تاریخ را با قالب مشخص‌شده قالب‌بندی می‌کند. قالب باید از دستورهای معتبر ANSI <code>strftime</code> باشد. نمونه: <code>"2022-10-15"</code>. |
| اکنون | <code>now()</code> | تاریخ و زمان کنونی را برمی‌گرداند. نمونه: <code>"2022-10-15 10:30:00"</code>. |
| امروز | <code>today()</code> | تاریخ امروز را برمی‌گرداند. نمونه: <code>"2022-10-15"</code>. |

## توابع بولی

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| قرارداشتن در فهرست | <code>is_in(column, value1, value2, ...)</code><br><code>is_in(product_name, "Product A", "Product B")</code> | اگر مقدار ستون در فهرست باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| قرارنداشتن در فهرست | <code>is_not_in(column, value1, value2, ...)</code><br><code>is_not_in(product_name, "Product A", "Product B")</code> | اگر مقدار ستون در فهرست نباشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| تنظیم‌شده‌بودن | <code>is_set(column)</code><br><code>is_set(product_name)</code> | اگر مقدار ستون تهی نباشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| تنظیم‌نشده‌بودن | <code>is_not_set(column)</code><br><code>is_not_set(product_name)</code> | اگر مقدار ستون تهی باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| قرارداشتن در بازه | <code>is_between(column, start, end)</code><br><code>is_between(sales, 1000, 5000)</code> | اگر مقدار ستون میان مقدار آغاز و پایان باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |
| قرارنداشتن در بازه | <code>is_not_between(column, start, end)</code><br><code>is_not_between(sales, 1000, 5000)</code> | اگر مقدار ستون خارج از بازهٔ آغاز و پایان باشد <code>True</code> وگرنه <code>False</code> می‌دهد. |

## توابع کمکی

| تابع | دستور و نمونه | توضیح و خروجی نمونه |
|---|---|---|
| تبدیل دلار آمریکا به روپیهٔ هند | <code>to_inr(currency_column, amount_column, rate=83)</code><br><code>to_inr(currency, amount, 83)</code> | مقدارهای ستون مبلغ را با نرخ مشخص‌شده از USD به INR تبدیل می‌کند. اگر ارز USD نباشد، مبلغ را بدون تغییر برمی‌گرداند. نرخ پیش‌فرض <code>83</code> است. نمونه: <code>8300</code>. |
| تبدیل روپیهٔ هند به دلار آمریکا | <code>to_usd(currency_column, amount_column, rate=83)</code><br><code>to_usd(currency, amount, 83)</code> | مقدارهای ستون مبلغ را با نرخ مشخص‌شده از INR به USD تبدیل می‌کند. اگر ارز INR نباشد، مبلغ را بدون تغییر برمی‌گرداند. نرخ پیش‌فرض <code>83</code> است. نمونه: <code>100</code>. |
| شماره ردیف | <code>row_number()</code> | شمارهٔ ردیف جاری را برمی‌گرداند. نمونه: <code>1</code>. |
| مقدار دورهٔ پیشین | <code>previous_period_value(column, date_column, offset=1)</code><br><code>previous_period_value(sales, order_date, 1)</code> | مقدار ستون را برای دورهٔ پیشین، بر اساس ستون تاریخ، برمی‌گرداند. <code>offset</code> تعداد دوره‌هایی است که باید به عقب رفت. نمونه: <code>1000</code>. |
| مقدار دورهٔ بعدی | <code>next_period_value(column, date_column, offset=1)</code><br><code>next_period_value(sales, order_date, 1)</code> | مقدار ستون را برای دورهٔ بعدی، بر اساس ستون تاریخ، برمی‌گرداند. <code>offset</code> تعداد دوره‌هایی است که باید به جلو رفت. نمونه: <code>2000</code>. |
| درصد تغییر | <code>percentage_change(column, date_column, offset=1)</code><br><code>percentage_change(sales, order_date, 1)</code> | درصد تغییر مقدار ستون را نسبت به دورهٔ قبلی، بر اساس ستون تاریخ، برمی‌گرداند. <code>offset</code> تعداد دوره‌هایی است که باید به عقب رفت. نمونه: <code>10</code>. |
| نخستین‌بودن ردیف | <code>is_first_row(group_by, order_by, sort_order="asc")</code><br><code>is_first_row(customer_id, order_date, "asc")</code> | اگر ردیف جاری نخستین ردیف گروه باشد <code>1</code> وگرنه <code>0</code> برمی‌گرداند. ترتیب می‌تواند <code>"asc"</code> یا <code>"desc"</code> باشد. |
| ساخت بازه‌ها | <code>create_buckets(column, num_buckets)</code><br><code>create_buckets(sales, 5)</code> | بر اساس مقدارهای ستون و تعداد بازه‌های مشخص‌شده دسته می‌سازد. نمونه: <code>"1000-2000"</code>. |

---

**منبع:** [عبارت‌ها و توابع](https://docs.frappe.io/insights/querying/expressions). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
