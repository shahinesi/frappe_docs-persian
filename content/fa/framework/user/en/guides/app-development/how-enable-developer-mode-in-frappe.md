---
title: "فعال‌کردن Developer Mode در Frappe"
slug: "how-enable-developer-mode-in-frappe"
source_url: "https://docs.frappe.io/framework/user/en/guides/app-development/how-enable-developer-mode-in-frappe"
source_id: "framework/user/en/guides/app-development/how-enable-developer-mode-in-frappe"
source_version: "add7673e30941451a7f833d21a189c09486c54a3ef92e2eb7ab39781e01ef8b2"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [فعال‌کردن حالت توسعه‌دهنده در Frappe](https://docs.frappe.io/framework/user/en/guides/app-development/how-enable-developer-mode-in-frappe)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

هنگام طراحی برنامه، اگر می‌خواهید تغییرات DocTypeها، گزارش‌ها و موارد دیگر در مخزن برنامه ثبت شوند، باید **حالت توسعه‌دهنده** را فعال کنید.

برای فعال‌کردن حالت توسعه‌دهنده، فایل `site_config.json` سایت خود را در پوشهٔ `sites` به‌روز کنید:

```text
frappe-bench/sites/{your site}/site_config.json
```

در پوشهٔ `frappe-bench` این فرمان را اجرا کنید:

```sh
bench set-config -g developer_mode 1
```

یا درون آکولادهای `{ .. }` فایل `site_config.json` به‌صورت دستی مقدار `"developer_mode": 1` را بنویسید:

```json
{
  "developer_mode": 1,
  ...
}
```

پس از فعال‌کردن حالت توسعه‌دهنده، حافظهٔ نهان را پاک کنید:

```sh
bench --site {your site} clear-cache
```

برخی برنامه‌ها برای build و آزمایش در حالت توسعه به وابستگی‌های بیشتری نیاز دارند. آن‌ها را با bench نصب کنید:

```sh
bench setup requirements --dev
```

---

**منبع:** [فعال‌کردن حالت توسعه‌دهنده در Frappe](https://docs.frappe.io/framework/user/en/guides/app-development/how-enable-developer-mode-in-frappe). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
