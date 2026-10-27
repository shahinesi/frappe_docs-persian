---
title: "چرا Budget تراکنش را متوقف نمی‌کند؟"
slug: "budget-not-blocking-and-budget-questions"
source_url: "https://docs.frappe.io/erpnext/budget-not-blocking-and-budget-questions"
source_id: "erpnext/budget-not-blocking-and-budget-questions"
source_version: "45840dc3fda78941aa54daaba2781ac665b846479c2171498b5adc02b80a6fe8"
---

**Budget** برای یک حساب هزینه، در برابر Cost Center، Project یا بُعد حسابداری دیگر و برای دوره‌ای مشخص، سقف تعیین می‌کند. اگر Material Request، Purchase Order یا هزینه از سقف عبور کند، ERPNext طبق تنظیم شما آن را متوقف می‌کند یا هشدار می‌دهد. اگر اتفاقی نمی‌افتد، احتمالاً یکی از شرط‌های زیر برقرار نیست.

## ابتدا این موارد را بررسی کنید

1. **Budget ثبت نهایی شده باشد.** پیش‌نویس Budget بررسی نمی‌شود.
2. **حساب از نوع هزینه باشد.** Budget فقط برای حساب‌هایی با **Root Type** برابر Expense بررسی می‌شود. Budget روی حساب درآمد ذخیره می‌شود، اما هیچ تراکنشی را متوقف نمی‌کند.
3. **تراکنش در ردیف قلم همان Cost Center، Project یا بُعدی را داشته باشد** که در **Budget Against** تعیین شده است. Budget یک Cost Center والد، Cost Centerهای فرزندش را هم پوشش می‌دهد.
4. **نوع سند فعال باشد.** در بخش **Control Action** مربوط به Budget:
   - **Applicable on booking actual expenses:** شامل Purchase Invoice، Journal Entry، Expense Claim و سندهای دیگری است که در آن حساب ثبت می‌شوند.
   - **Applicable on Purchase Order:** نیاز دارد کنترل هزینهٔ واقعی نیز فعال باشد.
   - **Applicable on Material Request:** نیاز دارد کنترل Purchase Order و هزینهٔ واقعی نیز فعال باشد.
5. **اقدام روی Stop باشد.** برای هر نوع سند، اقدام سالانه و ماهانه جداگانه‌ای تعیین می‌شود؛ هرکدام می‌تواند **Stop**، **Warn** یا **Ignore** باشد. اقدام ماهانه به‌طور پیش‌فرض **Warn** است؛ بنابراین عبور از مبلغ ماهانه فقط پیام نشان می‌دهد.

   ![اقدام کنترلی Budget؛ نوع سند و گزینهٔ Stop یا Warn برای هرکدام](https://docs.frappe.io/files/budget-control-action.png)

6. **تاریخ در بازهٔ Budget باشد**؛ یعنی بین **From Fiscal Year** و **To Fiscal Year** یا تاریخ‌های تنظیم‌شدهٔ Budget قرار گیرد.

هنگام اجرای کنترل، پیامی مانند نمونهٔ زیر می‌بینید:

```
Annual Budget for Account Office Rent - BBS against Cost Center Mumbai - BBS is ₹6,00,000.00. It will be exceeded by ₹20,000.00.
```

## سقف ماهانه می‌تواند هزینه‌ای بیش از مبلغ یک ماه را بپذیرد

کنترل ماهانه، مبلغ **تجمعی** تا تاریخ ثبت را بررسی می‌کند. اگر سقف ماهانه ₹50,000 باشد و در آوریل هزینه‌ای نداشته باشید، هزینهٔ ₹1,00,000 در ماه مه پذیرفته می‌شود؛ زیرا Budget آوریل و مه روی‌هم ₹1,00,000 است.

## ایجاد Budget برای حساب هزینه

1. به **Budget** بروید و روی **+ Add Budget** کلیک کنید.
2. **Budget Against** (مانند Cost Center، Project یا یک بُعد)، مقدار آن، **Company** و سال‌های مالی را انتخاب کنید.
3. یک **Account** (حساب دفتر کل، نه گروه) انتخاب و **Budget Amount** را وارد کنید.
4. **Distribute Equally** را فعال نگه دارید یا مبلغ هر ماه را در جدول توزیع تعیین کنید.
5. نوع سندها را فعال و اقدام‌ها را انتخاب کنید؛ سپس Budget را ثبت نهایی کنید.

برای هر حساب یک Budget بسازید. اگر حساب هزینه در فهرست نیست، بررسی کنید که به Company انتخاب‌شده تعلق داشته باشد و حساب گروهی نباشد.

## آیا می‌توان برای اقلام، دارایی‌ها یا حساب ترازنامه Budget تعیین کرد؟

- **اقلام:** خیر. Budget برای حساب هزینه تعریف می‌شود. برای سقف هر گروه قلم، یک حساب هزینهٔ جداگانه برای آن گروه (در **Item Defaults** اقلام) به‌کار ببرید و برای همان حساب Budget تعیین کنید.
- **خرید دارایی:** خیر. دارایی در حساب دارایی ثابت (حساب ترازنامه) ثبت می‌شود و Budget فقط روی حساب هزینه بررسی می‌شود. هزینهٔ دارایی را با **Budget Variance Report** یا بهای تمام‌شدهٔ Project پیگیری کنید.
- **حساب درآمد:** انتخاب آن مجاز است، اما کنترل نمی‌شود. برای مقایسه از **Budget Variance Report** استفاده کنید.

برای مقایسهٔ بودجه و هزینهٔ واقعی هر Budget، **Budget Variance Report** را باز کنید.

## مطالب مرتبط

- [Budget](budget.md)
- [Cost Center](cost-center.md)
- [مشکل بُعد حسابداری: مفقود، اجباری یا متفاوت در دفتر کل](https://docs.frappe.io/erpnext/accounting-dimension-problems)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/budget-not-blocking-and-budget-questions). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصویر به فایل رسمی مستندات پیوند داده شده و در این مخزن بازنشر نشده است.
