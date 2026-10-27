---
title: "نصب Frappe Learning"
slug: "نصب"
source_url: "https://docs.frappe.io/learning/get-started/installation"
source_id: "learning/get-started/installation"
source_version: "4307dcbfa5abe0f571c8e572a6984b75ba37c3a1baedcb9d180f59b90d9051ed"
---

Frappe Learning را می‌توان به چند روش و بر اساس نیاز نصب کرد. برای میزبانی مدیریت‌شده از **Frappe Cloud** استفاده کنید یا Learning را روی سرور خودتان نصب کنید. در ادامه هر روش توضیح داده شده است.

## میزبانی مدیریت‌شده (Frappe Cloud)

با یک کلیک و از طریق [**Frappe Cloud**](https://frappe.io/redirect?redirect_to=https://frappecloud.com/dashboard/signup?product=lms)، بستر میزبانی مدیریت‌شدهٔ برنامه‌های Frappe، می‌توانید Frappe Learning را نصب کنید.

- برای شروع از [اینجا ثبت‌نام کنید](https://frappe.io/redirect?redirect_to=https://frappecloud.com/dashboard/signup?product=lms).
- نمونهٔ Learning شما ظرف چند دقیقه آماده می‌شود.

اگر از قبل در Frappe Cloud سایت دارید، Frappe Learning را مستقیم از [**بازارچهٔ Frappe Cloud**](https://cloud.frappe.io/marketplace/apps/lms) نصب کنید.

> **پیشنهاد:** پیش از انتخاب میزبانی شخصی، Frappe Cloud را امتحان کنید.

## میزبانی شخصی

### راه‌اندازی محیط عملیاتی

برای راه‌اندازی Frappe Learning در محیط عملیاتی این مراحل را انجام دهید.

**گام ۱: دریافت اسکریپت نصب آسان**

```sh
wget https://frappe.io/easy-install.py
```

**گام ۲: اجرای فرمان استقرار**

```sh
python3 ./easy-install.py deploy \
    --project=learning_prod_setup \
    --email=your_email.example.com \
    --image=ghcr.io/frappe/lms \
    --version=stable \
    --app=lms \
    --sitename subdomain.domain.tld
```

مقادیر زیر را با اطلاعات خود جایگزین کنید:

- `your_email.example.com`: نشانی ایمیل شما
- `subdomain.domain.tld`: دامنه‌ای که Learning روی آن میزبانی می‌شود

این اسکریپت در حدود ۵ دقیقه یک نمونهٔ آمادهٔ محیط عملیاتی، همراه با تنظیمات لازم، راه‌اندازی می‌کند.

> **نکته:** اگر روی سرور عمومی میزبانی می‌کنید، رکورد DNS از نوع A را به IP سرور متصل کنید. برای میزبانی محلی، دامنه را در فایل `/etc/hosts` به `127.0.0.1` نگاشت کنید تا با خطای 404 مواجه نشوید.

### راه‌اندازی محیط توسعه

#### راه‌اندازی با Docker

برای اجرای Learning با Docker، این موارد باید نصب باشند:

- Docker
- Docker Compose
- Git

به [مستندات Docker](https://docs.docker.com/) مراجعه کنید و سپس مراحل زیر را انجام دهید.

**گام ۱: ساخت پوشه و دریافت فایل‌های لازم**

```sh
mkdir frappe-learning
cd frappe-learning

# Download the docker-compose file
wget -O docker-compose.yml https://raw.githubusercontent.com/frappe/lms/develop/docker/docker-compose.yml

# Download the setup script
wget -O init.sh https://raw.githubusercontent.com/frappe/lms/develop/docker/init.sh
```

**گام ۲: اجرای کانتینرها**

```sh
docker compose up -d
```

**گام ۳: بازکردن برنامه**

اکنون برنامه باید در نشانی [http://lms.localhost:8000/lms](http://lms.localhost:8000/lms) در دسترس باشد. اطلاعات ورود پیش‌فرض:

```text
Username: Administrator
Password: admin
```

> **نکتهٔ امنیتی:** پس از ورود، گذرواژهٔ پیش‌فرض را تغییر دهید.

#### راه‌اندازی محلی با Bench

برای راه‌اندازی مخزن در محیط محلی، مراحل زیر را دنبال کنید:

1. با دنبال‌کردن [مراحل نصب](https://frappeframework.com/docs/user/en/installation)، Bench را نصب و پوشهٔ `frappe-bench` را آماده کنید.
2. سرور را با `bench start` اجرا کنید.
3. در پنجرهٔ ترمینال جداگانه، با `bench new-site learning.test` سایت جدید بسازید.
4. سایت را با فرمان `bench --site learning.test add-to-hosts` به localhost نگاشت کنید.
5. برنامهٔ Learning را دریافت کنید: `bench get-app https://github.com/frappe/lms`.
6. برنامهٔ LMS را روی سایت نصب کنید: `bench --site learning.test install-app lms`.
7. در مرورگر نشانی `http://learning.test:8000/lms` را باز کنید؛ برنامه باید اجرا شده باشد.

---
منبع: [مستندات رسمی Frappe Learning](https://docs.frappe.io/learning/get-started/installation). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
