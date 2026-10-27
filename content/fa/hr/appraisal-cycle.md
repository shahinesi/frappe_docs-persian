---
title: "چرخهٔ ارزیابی عملکرد"
slug: "appraisal-cycle"
source_url: "https://docs.frappe.io/hr/appraisal-cycle"
source_id: "hr/appraisal-cycle"
source_version: "c6892ff655fc8225b213a89085d800b67652cef0dc5449e16d455cc46d5a44be"
source_updated: "2026-02-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**Appraisal Cycle** بازهٔ زمانی مشخصی است که در طول آن عملکرد کلی کارمند ارزیابی می‌شود.

برای ساخت چرخهٔ ارزیابی عملکرد، به این مسیر بروید:

> Home > Human Resources > Performance > Appraisal Cycle

## 1. پیش‌نیازها

پیش از ساخت چرخه، برای Designationهای مختلف [Appraisal Template](https://docs.frappe.io/hr/appraisal-template) بسازید.

می‌توانید قالب‌ها را در پروندهٔ اصلی Designation پیوند دهید تا در چرخه به‌طور خودکار دریافت شوند؛ یا در جدول فرزند **Appraisees** قالب‌های مناسب را دستی انتخاب کنید.

## 2. ساخت چرخهٔ ارزیابی عملکرد

1. به فهرست Appraisal Cycle بروید و روی **New** کلیک کنید.
2. **Cycle Name** را وارد کنید.
3. **Company** را انتخاب و تاریخ‌های شروع و پایان را تعیین کنید.
4. **KRA Evaluation Method** را انتخاب کنید:
   - **Automated Based on Goal Progress** (پیش‌فرض): امتیاز KRA/Goal بر اساس میزان تکمیل Goalهای پیوندخورده به آن KRA به‌طور خودکار محاسبه می‌شود. برای جزئیات بیشتر به [Goal](https://docs.frappe.io/hr/goal) مراجعه کنید.
   - **Manual Rating:** می‌توانید Goalها/KRAها را دستی امتیازدهی کنید. این روش ارزیابی اصلی تا نسخهٔ v13 بود.
5. به‌طور پیش‌فرض، **Final Score** میانگین Goal Score، Feedback Score و Self Appraisal Score است. برای محاسبهٔ امتیاز نهایی با فرمول خودتان، **Calculate Final Score based on Formala** را فعال و عبارت فرمول را وارد کنید.

![تنظیم چرخهٔ ارزیابی عملکرد](https://frappehr.com/files/0UPkmBl.png)

## 3. کنش‌ها

### 3.1 ساخت Appraisalها

می‌توانید از داخل Appraisal Cycle تعداد زیادی Appraisal را یکجا بسازید.

1. در زبانهٔ **Applicable For**، فیلترهای لازم را تعیین کنید تا کارکنان مشمول چرخه دریافت شوند. می‌توانید برای Branch، Department یا Designation مشخص چرخهٔ جداگانه بسازید؛ برای نمونه، Engineering ممکن است چرخهٔ سالانه داشته باشد، درحالی‌که Sales به چرخهٔ شش‌ماهه نیاز داشته باشد.
2. پس از تعیین فیلترها، **Get Employees** را بزنید و ذخیره کنید. کارکنان بر اساس فیلترها دریافت می‌شوند.
3. در جدول Employees، کارکنان دریافت‌شده را بررسی کنید. برای افزودن دستی کارمند دیگری، **Add Row** را بزنید.
4. **Create Appraisals** را کلیک کنید تا برای کارکنان انتخاب‌شده سندهای Appraisal ساخته شوند.
5. برای شروع چرخه، **Start** را بزنید.

![ساخت Appraisalها از چرخه](https://frappehr.com/files/create-appraisalsaa9d04.gif)

اگر کارمندی پس از شروع چرخه به سازمان بپیوندد، می‌توانید یکی از این کارها را انجام دهید:

- برای او جداگانه سند Appraisal بسازید و چرخه را انتخاب کنید.
- یا در جدول فرزند Employees چرخه برای کارمند جدید ردیف اضافه کنید، ذخیره کنید و دوباره **Create Appraisals** را بزنید. برای کارکنان تازه‌افزوده‌شده Appraisal ساخته می‌شود.

### 3.2 دیدن Goalها

با این دکمه می‌توانید Goalهای پیوندخورده به چرخه را ببینید. این دکمه شما را به Goal Treeای می‌برد که بر اساس Appraisal Cycle فیلتر شده است.

![درخت Goalهای فیلترشده بر اساس چرخه](https://frappehr.com/files/filtered-goal-tree.png)

## 4. قابلیت‌ها

### 4.1 آمار ارزیابی عملکرد

بخش Stats در چرخه، نمای کلی این موارد را نشان می‌دهد:

- تعداد Appraiseeهای مشمول چرخه
- تعداد Self Appraisalهای در انتظار
- تعداد کارکنانی که بازخورد ندارند
- تعداد کارکنانی که Goal ندارند

![آمار چرخهٔ ارزیابی عملکرد](https://frappehr.com/files/appraisal-stats.png)

## 5. موضوعات مرتبط

1. [Appraisal](https://docs.frappe.io/hr/appraisal)
2. [Goal](https://docs.frappe.io/hr/goal)
3. [Employee Performance Feedback](https://docs.frappe.io/hr/employee-performance-feedback)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/hr/appraisal-cycle). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
