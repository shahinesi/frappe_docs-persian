---
title: "نمای کلی کنترل دسترسی"
slug: "overview"
source_url: "https://docs.frappe.io/insights/permissions-access-control/overview"
source_id: "insights/permissions-access-control/overview"
source_version: "eff4a195324471ab65c9474509309d4555bbb3daef154ac04d1d1adef8686058"
source_updated: "2026-01-06"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Insights است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/insights/permissions-access-control/overview)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.

#### این راهنما روش کنترل دسترسی به داده‌ها در Insights را با استفاده از تیم‌ها، مجوزها و امنیت در سطح ردیف توضیح می‌دهد.

> **توجه:** برای پیکربندی مجوزهای کاربران، باید نقش **Insights Admin** داشته باشید.

Insights سه سطح کنترل دسترسی دارد:

1. **سطح برنامه:** دسترسی مبتنی بر نقش (Insights Admin و Insights User).
2. **سطح منبع:** دسترسی تیمی به منابع داده، جدول‌ها، داشبوردها و نمودارها.
3. **سطح ردیف:** محدودیت مبتنی بر فیلتر روی داده‌های جدول؛ برای نمونه، نمایش فقط مشتریان واگذارشده.

### سلسله‌مراتب مجوزها

    User → Team(s) → Resources (Data Sources/Tables) → Row Filters

- کاربران به یک یا چند تیم افزوده می‌شوند.
- به تیم‌ها برای منابع مشخص دسترسی داده می‌شود.
- می‌توان روی منابع، فیلترهایی در سطح ردیف اعمال کرد.

---

**منبع:** [نمای کلی کنترل دسترسی](https://docs.frappe.io/insights/permissions-access-control/overview). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
