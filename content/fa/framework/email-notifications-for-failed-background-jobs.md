---
title: "اعلان ایمیلی برای کارهای پس‌زمینهٔ ناموفق"
slug: "email-notifications-for-failed-background-jobs"
source_url: "https://docs.frappe.io/framework/user/en/guides/deployment/email-notifications-for-failed-background-jobs"
source_id: "framework/user/en/guides/deployment/email-notifications-for-failed-background-jobs"
source_version: "34c7e591595aec10a18bde7993d4fb65ec00a9083d61dbcdfc9d2ba35c40765e"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

Frappe با شکست کارهای پس‌زمینه به این شکل برخورد می‌کند:

1. اگر کاری ناموفق شود و استثنا ایجاد کند، رویداد در **گزارش زمان‌بند** و فایل `logs/worker.error.log` ثبت می‌شود.
2. فایل قفل باقی می‌ماند و تا وقتی این فایل وجود داشته باشد، کار دوباره اجرا نمی‌شود.
3. اگر فایل قفل بیش از 10 دقیقه عمر داشته باشد، خطای `LockTimeoutError` ایجاد می‌شود.

برای خطاهای زمان‌بند می‌توانید اعلان ایمیلی تنظیم کنید. فایلی با نام `sites/common_site_config.json` و محتوای زیر بسازید:

```json
{
  "celery_error_emails": {
    "ADMINS": [
      [
        "Person 1",
        "person1@example.com"
      ],
      [
        "Person2 ",
        "person2@example.com"
      ]
    ],
    "SERVER_EMAIL": "exceptions@example.com"
  }
}
```

یک محدودیت این روش آن است که ایمیل‌ها را از سرور ایمیل محلی روی درگاه 25 می‌فرستد.

منبع: [اعلان ایمیلی برای کارهای پس‌زمینهٔ ناموفق](https://docs.frappe.io/framework/user/en/guides/deployment/email-notifications-for-failed-background-jobs). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
