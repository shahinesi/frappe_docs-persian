---
title: "فایل Procfile در Bench"
slug: "bench-procfile"
source_url: "https://docs.frappe.io/framework/user/en/bench/resources/bench-procfile"
source_id: "framework/user/en/bench/resources/bench-procfile"
source_version: "cf18069b439df4a55f36536abcd2831a1a6b7d9ab1b68b9fd7f61e4c61c6c8b4"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

در **حالت توسعه**، فرمان `bench start` با استفاده از Honcho چند فرایند را مدیریت می‌کند.

### فرایندها

فرایندهای مختلف موردنیاز برای اجرای Frappe عبارت‌اند از:

1. `bench start`: راه‌اندازی فرایندهای تعریف‌شده در فایل Procfile
2. `redis_cache`: کش عمومی
3. `redis_queue`: مدیریت صف برای کارگرهای پس‌زمینه
4. `redis_socketio`: کارگزار پیام برای به‌روزرسانی‌های بلادرنگ و پیام‌های کارگرهای پس‌زمینه
5. `web`: وب‌سرور Frappe
6. `socketio`: پیام‌رسانی بلادرنگ
7. `schedule`: اجرای کارهای دوره‌ای
8. `worker_*`: کارگرهای Redis برای رسیدگی به کارهای ناهمگام

اگر برای Frappe توسعه می‌دهید، می‌توانید در صورت نیاز `bench watch` را هم اضافه کنید تا برنامهٔ JavaScript دسکتاپ به‌طور خودکار ساخته شود.

### نمونه

```text
redis_cache: redis-server config/rediscache.conf
redis_socketio: redis-server config/redissocketio.conf
redis_queue: redis-server config/redisqueue.conf
web: bench serve --port 8000
socketio: /usr/bin/node apps/frappe/socketio.js
watch: bench watch
schedule: bench schedule
worker_short: bench worker --queue short
worker_long: bench worker --queue long
worker_default: bench worker --queue default
```

منبع: [فایل Procfile در Bench](https://docs.frappe.io/framework/user/en/bench/resources/bench-procfile). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.

