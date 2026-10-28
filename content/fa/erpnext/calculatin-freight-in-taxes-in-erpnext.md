---
title: "محاسبهٔ کرایهٔ حمل و مالیات آن در ERPNext"
slug: "calculatin-freight-in-taxes-in-erpnext"
source_url: "https://docs.frappe.io/erpnext/calculatin-freight-in-taxes-in-erpnext"
source_id: "erpnext/calculatin-freight-in-taxes-in-erpnext"
source_version: "919c94ecd67499a6a637f7643e712df3e498d53042f1028eecfadd4a75df6d39"
---

فرض کنید Keystone Cables کالایی به ارزش $3,600 به Nova Industries می‌فروشد و $120 نیز بابت کرایهٔ حمل می‌گیرد. نرخ مالیات خدمت حمل 6% است. اگر Nova کل مبلغ را به‌صورت هزینه‌ای نامشخص ثبت کند، ممکن است بدهی به تأمین‌کننده، دفتر کل مالیات و ارزش‌گذاری موجودی اشتباه شوند.

کرایه را بر اساس ماهیت آن تنظیم کنید. مبلغ حمل ممکن است جمع قابل‌پرداخت به تأمین‌کننده، ارزش موجودی یا هر دو را افزایش دهد. مالیات آن نیز باید از حساب مالیاتی و مبنای محاسبهٔ درست استفاده کند.

## ابتدا روش حسابداری را انتخاب کنید

| روش حسابداری | رفتار Taxes and Charges | نتیجه |
| --- | --- | --- |
| کرایه به تأمین‌کننده پرداخت می‌شود و سرمایه‌ای نمی‌شود | **Add to Total** | مبلغ پرداختنی را افزایش می‌دهد، نه ارزش موجودی را. |
| کرایه بخشی از رساندن موجودی به محل نگه‌داری آن است | **Add to Valuation** | ارزش موجودی را افزایش می‌دهد؛ این ردیف جمع تأمین‌کننده را افزایش نمی‌دهد. |
| کرایه به تأمین‌کننده پرداخت و سرمایه‌ای می‌شود | **Add to Total and Valuation** | هم مبلغ پرداختنی و هم ارزش موجودی را افزایش می‌دهد. |
| کرایه را بعداً طرف دیگری صورتحساب می‌کند | **Landed Cost Voucher** | هزینهٔ بعدی را به موجودی دریافت‌شده تخصیص می‌دهد. |

روش مالیاتی لازم را با حسابدار خود تأیید کنید. نام و نرخ مالیات به حوزهٔ قضایی شرکت و برنامهٔ انطباق نصب‌شده بستگی دارد.

## افزودن کرایه و مالیات به تراکنش خرید

1. حساب هزینه یا دریافت کرایه و حساب مالیاتی مربوط را ایجاد یا انتخاب کنید.
2. سفارش خرید یا Purchase Invoice را باز کنید.
3. در جدول Taxes and Charges، ردیفی برای مبلغ کرایه اضافه کنید.
4. مشخص کنید ردیف بر Total، Valuation یا هر دو اثر بگذارد.
5. ردیف مالیات را پس از ردیف کرایه اضافه کنید.
6. **Type** را طوری تنظیم کنید که مالیات را بر ردیف قبلی مربوط یا جمع موردنظر محاسبه کند.
7. اگر مبنای مالیات باید ردیف کرایه باشد، **Row ID** را تنظیم کنید.
8. مبلغ ردیف‌ها، مالیات، Grand Total و اثر بر ارزش‌گذاری را بررسی کنید.

![جدول Purchase Taxes and Charges با ردیف کرایه و مالیات محاسبه‌شده روی آن](https://docs.frappe.io/files/docs-20261022-docs-buying-freight-tax-rows.png)

برای کرایهٔ $120 با مالیات 6%، مبلغ مالیات $7.20 است. بررسی کنید Grand Total و جمع‌های ارزش‌گذاری با روش موردنظر سازگار باشند؛ صرفاً به این فرض تکیه نکنید که عدد نهاییِ ظاهراً درست به حساب‌های درست ثبت شده است.

![ردیف کرایه، مبلغ مالیات، Grand Total و مبلغ ارزش‌گذاری](https://docs.frappe.io/files/docs-20261022-docs-buying-freight-tax-result.png)

## استفاده از کالا کرایه در صورت تناسب

اگر تأمین‌کنندهٔ کرایه را در ردیفی جداگانه صورتحساب می‌کند، می‌توانید برای آن یک کالا خدماتیِ غیرانبارشونده تعریف کنید. حساب هزینهٔ مناسب و کالا Tax Template مربوط را تنظیم و سپس کالا را به Purchase Invoice اضافه کنید.

این روش وقتی مفید است که گزارش مالیات در سطح ردیف لازم باشد. برای هزینه‌های کل سند، ردیف Taxes and Charges معمولاً ساده‌تر است. روشی یکسان انتخاب کنید که با نیازهای انطباق و گزارش‌گیری شما هماهنگ باشد.

## عیب‌یابی

### مالیات روی کالا و کرایه با هم محاسبه می‌شود

**Type** و **Row ID** ردیف مالیات را بررسی کنید. اگر باید فقط ردیف کرایه مشمول مالیات باشد، از محاسبه بر اساس ردیف قبلی استفاده کنید.

### کرایه مبلغ پرداختنی به تأمین‌کننده را افزایش داده، اما ارزش موجودی را نه

بررسی کنید که آیا هزینه برای اثرگذاری بر **Valuation** تنظیم شده است. اگر هزینه پس از رسیدن کالا مشخص شد، به‌جای بازنویسی رسید ثبت‌نهایی‌شده، از Landed Cost Voucher استفاده کنید.

### ارزش موجودی افزایش یافته، اما جمع تأمین‌کننده تغییر نکرده است

ممکن است ردیف فقط روی Valuation اثر بگذارد. اگر طبق سیاست حسابداری، همان هزینهٔ تأمین‌کننده باید بر هر دو اثر بگذارد، **Total and Valuation** را انتخاب کنید.

### مالیات به حساب اشتباه ثبت شده است

**Account Head**، شرکت، نوع حساب، دستهٔ مالیاتی و تنظیمات منطقه‌ای را بررسی کنید. پیکربندی را اصلاح کنید و به‌جای آنکه دستی ردیف ترازکننده بسازید، علت را برطرف کنید.

## پرسش‌های رایج

### آیا کرایه همیشه باید در ارزش موجودی منظور شود؟

خیر. طبق سیاست حسابداری، هزینه‌هایی را سرمایه‌ای کنید که مستقیماً برای رساندن موجودی به مکان و وضعیت کنونی آن صرف شده‌اند. هزینه‌های اداری یا تحویل نامرتبط ممکن است در گروه هزینه باقی بمانند.

### آیا می‌توان پس از Purchase Receipt کرایه اضافه کرد؟

بله. اگر هزینه بعداً مشخص شود و باید به موجودی دریافت‌شده تخصیص یابد، پس از رسید از Landed Cost Voucher استفاده کنید.

### آیا Shipping Rule می‌تواند کرایه را خودکار اضافه کند؟

Shipping Rule می‌تواند بر اساس ارزش خالص یا وزن خالص، هزینه‌ای را انتخاب کند. پیش از ثبت نهایی، ردیف Taxes and Charges ایجادشده را بررسی کنید.

برای هزینه‌های قابل‌استفادهٔ مجدد، [راهنمای «Purchase Taxes and Charges Template\n» در ERPNext](https://docs.frappe.io/erpnext/purchase-taxes-and-charges-template) را پیکربندی کنید. سپس [انواع در Tax Template](https://docs.frappe.io/erpnext/types-in-tax-template)، [شامل‌کردن مالیات یا هزینه در Valuation یا Total](difference-in-total-and-valuation-in-tax-and-charges.md) و [اعمال مالیات بر مالیات یا هزینهٔ دیگر](https://docs.frappe.io/erpnext/how-to-apply-tax-on-tax) را ببینید. نتیجه را در [سفارش خرید](purchase-order.md) یا [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice) اعمال کنید، موجودی دریافتی را از طریق [راهنمای «Purchase Receipt | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-receipt) بررسی کنید، برای هزینه‌های بعدی [راهنمای «Landed cost Voucher» در ERPNext](https://docs.frappe.io/erpnext/landed-cost-voucher) را به‌کار ببرید، بازه‌های ارزشی را با [راهنمای «Shipping Rule\n» در ERPNext](https://docs.frappe.io/erpnext/shipping-rule) خودکار کنید و سیاست را در [تنظیمات خرید](buying-settings.md) تأیید کنید.

## موضوعات مرتبط

- [راهنمای «Purchase Taxes and Charges Template\n» در ERPNext](https://docs.frappe.io/erpnext/purchase-taxes-and-charges-template)
- [انواع در Tax Template](https://docs.frappe.io/erpnext/types-in-tax-template)
- [شامل‌کردن مالیات یا هزینه در Valuation یا Total](difference-in-total-and-valuation-in-tax-and-charges.md)
- [اعمال مالیات بر مالیات یا هزینهٔ دیگر](https://docs.frappe.io/erpnext/how-to-apply-tax-on-tax)
- [راهنمای «Landed cost Voucher» در ERPNext](https://docs.frappe.io/erpnext/landed-cost-voucher)
- [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/calculatin-freight-in-taxes-in-erpnext). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
