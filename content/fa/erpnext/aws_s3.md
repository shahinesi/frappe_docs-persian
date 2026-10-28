---
title: "بارگذاری نسخه‌های پشتیبان در Amazon S3"
slug: "aws_s3"
source_url: "https://docs.frappe.io/erpnext/aws_s3"
source_id: "erpnext/aws_s3"
source_version: "2587f12de3904b67a15070da279002596c973bd6d4e0611952799b8c47ef8a2e"
---

> توجه: اگر کاربر Frappe Cloud هستید، نسخه‌های پشتیبان داخل‌سایتی و خارج‌سایتی به‌طور خودکار برایتان ایجاد می‌شوند: [پشتیبان‌گیری سایت‌ها در Frappe Cloud](https://frappecloud.com/docs/sites/backups)

## پیش‌نیازها

- [حساب ایمیل](email-account.md)

برای دریافت ایمیل دربارهٔ موفقیت یا شکست پشتیبان‌گیری، ابتدا یک **حساب ایمیل** ایجاد کنید.

## ایجاد مخزن S3 و تنظیم دسترسی

1. یک مخزن S3 جدید ایجاد کنید.

در تنظیمات مخزن، گزینهٔ «Block all public access» را فعال کنید تا داده‌هایتان خصوصی بمانند. در صورت نیاز می‌توانید رمزنگاری، نسخه‌بندی یا قفل‌کردن شیء را هم فعال کنید؛ برای جزئیات به [مستندات Amazon](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html) مراجعه کنید.
2. بخش Identity and Access Management (IAM) را باز کنید.
3. برای سرویس «S3» یک سیاست جدید بسازید و دسترسی‌های «ListBucket» و «PutObject» را مجاز کنید.

![تصویر صفحهٔ ایجاد سیاست در AWS](https://docs.frappe.io/files/s3-backup-policy.png)

همچنین می‌توانید از ویرایشگر JSON استفاده کنید:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::*/*",
                "arn:aws:s3:::YOUR TARGET BUCKET"
            ],
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": "YOUR SERVER IP"
                }
            }
        }
    ]
}
```

4. یک کاربر جدید برای دسترسی برنامه‌ای ایجاد کنید.

![تصویر صفحهٔ افزودن کاربر در AWS](https://docs.frappe.io/files/s3_backup_add_user.png)

5. سیاستی را که ساخته‌اید به کاربر جدید متصل کنید.
6. کلید دسترسی و کلید محرمانهٔ کاربر را کپی کنید.

برای حذف خودکار نسخه‌های پشتیبان قدیمی یا انتقال آن‌ها به ردهٔ ذخیره‌سازی ارزان‌تر، [مدیریت چرخهٔ عمر](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) را ببینید.

## ایجاد مخزن Hetzner با Minio

> حروف بزرگ در دستورها متغیرهایی هستند که می‌توانید مقدارشان را خودتان انتخاب کنید. در این مثال از منطقهٔ nbg1 (نورنبرگ) استفاده می‌کنیم.

1. در کنسول Hetzner و در نشانی `https://console.hetzner.com/projects/YOUR_PROJECT/security/s3-credentials`، اعتبارنامه‌های دسترسی S3 شامل کلید و مقدار محرمانه را ایجاد کنید.
2. [Minio را نصب کنید](https://github.com/minio/minio).
3. Minio را برای دسترسی به مخزن‌های Hetzner پیکربندی کنید: `mc alias set MY_ALIAS https://nbg1.your-objectstorage.com YOUR_S3_KEY YOUR_S3_SECRET`
4. مخزنی با قفل‌کردن شیء فعال بسازید: `mc mb MY_ALIAS/BUCKET_NAME --with-lock --region nbg1`. این کار کمک می‌کند نسخه‌های پشتیبان را تصادفاً حذف نکنید.
5. دورهٔ قفل‌کردن شیء را روی 90 روز تنظیم کنید: `mc retention set GOVERNANCE 90d --default MY_ALIAS/BUCKET_NAME`
6. درستی پیکربندی را بررسی کنید: `mc retention info --json --default MY_ALIAS/BUCKET_NAME`
7. تنظیمات را در **S3 Backup Settings** وارد کنید:
   1. *Endpoint URL*: [https://nbg1.your-objectstorage.com/](https://nbg1.your-objectstorage.com/)
   2. *Bucket Name*: `BUCKET_NAME`
   3. *کلید دسترسی ID*: `YOUR_S3_KEY`
   4. *کلید دسترسی Secret*: `YOUR_S3_SECRET`

## راه‌اندازی ERPNext

- **S3 Backup Settings** را باز کنید.
- گزینهٔ «Enable Automatic Backup» را فعال کنید.
- کلید دسترسی و مقدار محرمانهٔ AWS را وارد کنید.
- نشانی ایمیلی را برای دریافت اعلان هنگام شکست پشتیبان‌گیری مشخص کنید. اگر برای پشتیبان‌گیری‌های موفق هم ایمیل می‌خواهید، گزینهٔ «ایمیل بفرست for Successful Backup» را فعال کنید.
- نام مخزنی را که در مرحلهٔ 1 ساخته‌اید وارد کنید.
- تناوب تهیه و بارگذاری نسخه‌های پشتیبان را انتخاب کنید. این بازه می‌تواند از ماهانه تا روزانه باشد. اگر فقط پشتیبان‌گیری دستی می‌خواهید، تناوب را روی «None» بگذارید.

![تنظیمات پشتیبان‌گیری S3 در ERPNext](https://docs.frappe.io/files/s3_backup_settings.png)

## بازیابی فایل‌های حذف‌شده از مخزن نسخه‌بندی‌شده

- فهرست همهٔ نسخه‌های فایل را ببینید: `mc ls -r --versions MY_ALIAS/BUCKET_NAME/`
- نسخهٔ مشخصی را بارگیری کنید: `mc get --vid TARGET_VERSION_ID MY_ALIAS/BUCKET_NAME/20260415_162402/20260415_162402-company_frappe_cloud-database.sql.gz ~/Downloads`

منبع: [بارگذاری نسخه‌های پشتیبان در Amazon S3](https://docs.frappe.io/erpnext/aws_s3). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.


