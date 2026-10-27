---
title: "عیب‌یابی زمان‌بند"
slug: "diagnosing-the-scheduler"
source_url: "https://docs.frappe.io/framework/user/en/bench/guides/diagnosing-the-scheduler"
source_id: "framework/user/en/bench/guides/diagnosing-the-scheduler"
source_version: "41fe0566e46a8798328a169c6826fec04b50f9b5a86f064448d35b739921293c"
source_updated: "2026-02-17"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Framework است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/framework/user/en/bench/guides/diagnosing-the-scheduler)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

اگر jobهای زمان‌بندی‌شده با تأخیر اجرا می‌شوند یا اصلاً اجرا نمی‌شوند، برای عیب‌یابی می‌توانید چند فرمان را اجرا کنید.

### `bench doctor`

این فرمان اطلاعات زیر را به‌ترتیب نمایش می‌دهد:

- وضعیت زمان‌بند برای هر سایت
- تعداد workerها
- کارهای در انتظار

خروجی مطلوب:

```text
Workers online: 0
-----None Jobs-----
```

### `bench --site [site-name] show-pending-jobs`

این فرمان موارد زیر را به‌ترتیب نمایش می‌دهد:

- صف
- کارهای درون صف

خروجی مطلوب:

```text
-----Pending Jobs-----
```

### `bench purge-jobs`

این فرمان همهٔ jobهای در انتظار را از تمام صف‌ها حذف می‌کند.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/user/en/bench/guides/diagnosing-the-scheduler). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
