---
title: "راه‌اندازی چندمستاجری در Bench"
slug: "setup-multitenancy"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/setup-multitenancy"
source_id: "framework/user/en/bench/guides/setup-multitenancy"
source_version: "db26a569870bc1b37c533b48579016a71c9f8ab7b9ebf8f17fcc783ffe58f11e"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

فرض بر این است که نخستین سایت خود را راه‌اندازی کرده و مراحل [راه‌اندازی محیط عملیاتی](setup-production.md) را انجام داده‌اید. در این راهنما می‌بینید چگونه سایت دوم و سایت‌های بیشتری را میزبانی کنید. نخستین سایت به‌طور خودکار به‌عنوان سایت پیش‌فرض تعیین می‌شود. با این دستور می‌توانید آن را تغییر دهید:

```sh
bench use sitename
```

## چندمستاجری بر پایهٔ درگاه

می‌توانید سایت تازه‌ای بسازید و آن را روی درگاهی جداگانه اجرا کنید؛ در این حالت سایت نخست روی درگاه 80 می‌ماند.

1. یک‌بار چندمستاجری مبتنی بر DNS را خاموش کنید:

   ```sh
   bench config dns_multitenant off
   ```

2. سایت تازه‌ای بسازید:

   ```sh
   bench new-site site2name
   ```

3. درگاه را تعیین کنید:

   ```sh
   bench set-nginx-port site2name 82
   ```

4. پیکربندی Nginx را دوباره بسازید:

   ```sh
   bench setup nginx
   ```

5. Nginx را بارگذاری مجدد کنید:

   ```sh
   sudo service nginx reload
   ```

## چندمستاجری بر پایهٔ DNS

می‌توانید نام سایت‌ها را برابر نام میزبان‌هایی بگذارید که به آن‌ها resolve می‌شوند. در این روش همهٔ سایت‌های افزوده‌شده به Bench روی یک درگاه اجرا می‌شوند و انتخاب سایت به‌طور خودکار بر اساس نام میزبان انجام می‌شود.

برای ساخت سایت در حالت چندمستاجری مبتنی بر DNS، این مراحل را انجام دهید:

1. یک‌بار چندمستاجری مبتنی بر DNS را روشن کنید:

   ```sh
   bench config dns_multitenant on
   ```

2. سایت تازه‌ای بسازید:

   ```sh
   bench new-site site2name
   ```

3. پیکربندی Nginx را دوباره بسازید:

   ```sh
   bench setup nginx
   ```

4. Nginx را بارگذاری مجدد کنید:

   ```sh
   sudo service nginx reload
   ```

منبع: [راه‌اندازی چندمستاجری](https://docs.frappe.io/framework/user/en/bench/guides/setup-multitenancy). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
