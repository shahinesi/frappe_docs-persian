---
title: "راه‌اندازی محیط عملیاتی"
slug: "setup-production"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/setup-production"
source_id: "framework/user/en/bench/guides/setup-production"
source_version: "cf9961fea958ba83e3b4e291f89439effb8c57ce8200a5b9e379bd73a39b9602"
source_updated: "2026-05-10"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> **هشدار:** نصب روی سرورهای بدون لایهٔ مجازی‌سازی را توصیه نمی‌کنیم. روش پیشنهادی برای راه‌اندازی سایت عملیاتی، استفاده از imageهای Docker است. دستورالعمل را در [راهنمای نصب Frappe با Docker](https://github.com/frappe/frappe#installation) ببینید.

برای استفادهٔ عملیاتی از Bench، دو برنامهٔ Supervisor و Nginx را پیکربندی کنید. برای بازگشت از تنظیمات عملیاتی به حالت توسعه، [فرمان‌های توقف حالت عملیاتی و آغاز حالت توسعه](https://github.com/frappe/bench/wiki/Stopping-Production-and-starting-Development) را ببینید.

## راه‌اندازی خودکار محیط عملیاتی

با اجرای `sudo bench setup production`، مراحل زیر خودکار انجام می‌شوند.

## راه‌اندازی دستی محیط عملیاتی

### Supervisor

Supervisor فرایندهای لازم برای اجرای Frappe را فعال نگه می‌دارد و در صورت ازکارافتادن، آن‌ها را دوباره راه‌اندازی می‌کند. برای تولید پیکربندی لازم، فرمان `bench setup supervisor` را اجرا کنید. فایل پیکربندی در `config/supervisor.conf` ساخته می‌شود. آن را به پوشهٔ پیکربندی Supervisor پیوند دهید یا کپی کنید و سپس تنظیمات را بارگذاری مجدد کنید تا اعمال شوند.

برای نمونه:

```sh
bench setup supervisor
sudo ln -s `pwd`/config/supervisor.conf /etc/supervisor/conf.d/frappe-bench.conf
```

**نکته‌ها:**

- اگر نمی‌خواهید پیکربندی راه‌اندازی Redis ساخته شود، از گزینهٔ `--skip-redis` استفاده کنید؛ برای نمونه `bench setup supervisor --skip-redis`.
- در CentOS 7 پسوند فایل باید `ini` باشد. در این حالت فرمان چنین می‌شود:

  ```sh
  bench setup supervisor
  sudo ln -s `pwd`/config/supervisor.conf /etc/supervisor/conf.d/frappe-bench.ini #for CentOS 7 only
  ```

هنگام به‌روزرسانی برنامه‌ها، Bench باید فرایندهایی را که Supervisor مدیریت می‌کند دوباره راه‌اندازی کند. برای خودکارسازی این کار، با فرمان زیر تنظیم sudoers را انجام دهید:

```sh
sudo bench setup sudoers $(whoami)
```

### Nginx

Nginx وب‌سرور است. از آن برای ارائهٔ فایل‌های ایستا و هدایت دیگر درخواست‌ها به Frappe استفاده می‌شود. برای تولید پیکربندی لازم، `bench setup nginx` را اجرا کنید. فایل پیکربندی در `config/nginx.conf` ساخته می‌شود. آن را به پوشهٔ پیکربندی Nginx پیوند دهید یا کپی کنید و سپس تنظیمات را بارگذاری مجدد کنید تا اعمال شوند.

برای نمونه:

```sh
bench setup nginx
sudo ln -s `pwd`/config/nginx.conf /etc/nginx/conf.d/frappe-bench.conf
```

**نکته:** پس از تغییر پیکربندی و راه‌اندازی دوبارهٔ Nginx، ممکن است سرویس به‌دلیل وجود پیکربندی دیگری که بلوک سرور پیش‌فرض درگاه 80 را دارد (معمولاً صفحهٔ خوشامدگویی Nginx) از کار بیفتد. باید آن پیکربندی را غیرفعال کنید. محل‌های رایج آن `/etc/nginx/conf.d/default.conf` و `/etc/nginx/conf.d/default` هستند. در نصب‌های جدیدتر Nginx، فایل معمولاً در `/etc/nginx/sites-available/default` قرار دارد.

منبع: [راه‌اندازی محیط عملیاتی](https://docs.frappe.io/framework/user/en/bench/guides/setup-production). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
