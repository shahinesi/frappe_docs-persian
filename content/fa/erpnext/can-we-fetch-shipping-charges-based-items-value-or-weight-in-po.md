---
title: "دریافت خودکار هزینهٔ حمل بر اساس ارزش یا وزن اقلام"
slug: "can-we-fetch-shipping-charges-based-items-value-or-weight-in-po"
source_url: "https://docs.frappe.io/erpnext/can-we-fetch-shipping-charges-based-items-value-or-weight-in-po"
source_id: "erpnext/can-we-fetch-shipping-charges-based-items-value-or-weight-in-po"
source_version: "64605688b4c716273e5392b44f3b7eb47750b58b83b7f73facdee7057ed91b3a"
---

فرض کنید Nova Industries برای سفارش‌های کوچک، هزینهٔ حمل ثابتی برابر با $40 می‌پردازد؛ برای سفارش‌های با ارزش بیشتر، این مبلغ $70 است و برای تجهیزات حجیم، کرایه بر اساس وزن محاسبه می‌شود. خریداران نباید آستانه‌ها را به خاطر بسپارند یا هزینهٔ حمل را دستی در هر Purchase Order وارد کنند.

**Shipping Rule** وقتی تراکنش در بازهٔ مشخصی از Net Total یا Net Weight قرار بگیرد، هزینهٔ پیکربندی‌شده‌ای را اعمال می‌کند. ERPNext هزینه را به جدول Taxes and Charges می‌افزاید تا خریدار پیش از ثبت نهایی آن را بررسی کند.

## ایجاد Shipping Rule

1. **Shipping Rule** را باز و رکورد جدیدی ایجاد کنید.
2. مبنای محاسبه را **Net Total** یا **Net Weight** انتخاب کنید.
3. Company و کشورها یا شرط‌هایی را تعیین کنید که قاعده در آن‌ها اعمال می‌شود.
4. حداقل و حداکثر بازه‌هایی بدون هم‌پوشانی اضافه کنید.
5. مبلغ حمل هر بازه را وارد کنید.
6. حساب و Cost Center مورد استفاده برای هزینه را انتخاب کنید.
7. قاعده را ذخیره کنید.

![Shipping Rule با مبنای Net Total و بازه‌های ارزش](https://docs.frappe.io/files/docs-20261022-docs-buying-shipping-rule-ranges.png)

برای قاعدهٔ مبتنی بر وزن، هر Item باید وزن و Weight UOM دقیقی داشته باشد. وزن‌های ناقص یا ناسازگار اقلام، نتیجه را غیرقابل‌اعتماد می‌کنند.

## اعمال قاعده بر Purchase Order

1. Purchase Order را ایجاد و Itemها را اضافه کنید.
2. Net Total یا وزن کل را بررسی کنید.
3. Shipping Rule را انتخاب کنید.
4. تأیید کنید که ERPNext ردیف درست را به جدول Taxes and Charges اضافه کرده است.
5. حساب، مبلغ، نحوهٔ محاسبهٔ مالیات، Grand Total و اثر بر ارزش‌گذاری را بررسی کنید.

![Purchase Order با Shipping Rule انتخاب‌شده و هزینهٔ حمل دریافت‌شده](https://docs.frappe.io/files/docs-20261022-docs-buying-shipping-rule-purchase-order.png)

اگر سفارش به بازهٔ دیگری منتقل شد، قاعده را تازه‌سازی یا دوباره انتخاب کنید و درستی هزینهٔ به‌روزشده را بررسی کنید. پس از تغییر Itemها، مقدارها، تخفیف‌ها، ارز یا UOM فرض نکنید مبلغ قبلی همچنان درست است.

## طراحی دقیق بازه‌ها

| از | تا | هزینه | نمونهٔ کاربرد |
| --- | --- | ---: | --- |
| $0 | $999.99 | $40 | سفارش کوچک |
| $1,000 | $4,999.99 | $70 | سفارش معمولی |
| $5,000 | بدون سقف | $0 | آستانهٔ ارسال رایگان |

از خالی‌ماندن بازه‌ها و هم‌پوشانی ناخواسته جلوگیری کنید. مشخص کنید مقدارهای مرزی به بازهٔ پایین‌تر تعلق دارند یا بالاتر و تراکنش‌هایی را که دقیقاً روی هر آستانه قرار می‌گیرند آزمایش کنید.

## عیب‌یابی

### هزینهٔ حمل دریافت نمی‌شود

Company، مبنای محاسبه، شرط کشور، بازه، ارز و فعال‌بودن قاعده را بررسی کنید. برای قاعدهٔ وزنی، وزن Itemها و Weight UOM را تأیید کنید.

### بازهٔ نادرست انتخاب می‌شود

مرزهای هم‌پوشان، تخفیف‌ها، تبدیل ارز و مبنای قاعده (Net Total یا Net Weight) را بررسی کنید. تراکنش را دقیقاً در مقدار مرزی آزمایش کنید.

### مبلغ نمایش داده می‌شود، اما نادرست ثبت می‌شود

**Account Head**، **Cost Center** و اثر ردیف Taxes and Charges بر Total، Valuation یا هر دو را بررسی کنید.

### پس از تغییر مقدار، هزینه تازه نمی‌شود

پس از تغییر جمع تراکنش یا وزن، Shipping Rule را دوباره اعمال یا تازه‌سازی کنید و پیش از ثبت نهایی ردیف محاسبه‌شده را بازبینی کنید.

## پرسش‌های رایج

### آیا می‌توان از یک قاعده برای فروش و خرید استفاده کرد؟

قاعده را برای نوع تراکنش و حساب‌هایی که پیاده‌سازی شما پشتیبانی می‌کند پیکربندی و آزمایش کنید. اگر مقصد حسابداری متفاوت است، هزینهٔ فروش را بدون بررسی در خرید هم به‌کار نبرید.

### آیا قاعده می‌تواند درصدی محاسبه کند؟

Shipping Rule معمولاً هزینه‌های پیکربندی‌شده را بر اساس بازه انتخاب می‌کند. اگر قاعدهٔ تجاری به فرمول دیگری نیاز دارد، از جدول Taxes and Charges یا سفارشی‌سازی پشتیبانی‌شده استفاده کنید.

### آیا هزینهٔ دریافت‌شده خودکار مالیات را هم دربر می‌گیرد؟

لزوماً نه. ردیف مالیاتی مربوط و مبنای محاسبه‌اش را اضافه یا پیکربندی کنید و سپس نتیجه را تأیید کنید.

[Shipping Rule](https://docs.frappe.io/erpnext/shipping-rule) را همراه با تنظیمات [Item](https://docs.frappe.io/erpnext/item)، [UOM](https://docs.frappe.io/erpnext/uom) و [Supplier](https://docs.frappe.io/erpnext/supplier) به‌کار ببرید. هزینه را در [Purchase Order](https://docs.frappe.io/erpnext/purchase-order)، [Purchase Receipt](https://docs.frappe.io/erpnext/purchase-receipt) و [Purchase Invoice](https://docs.frappe.io/erpnext/purchase-invoice) اعمال و بررسی کنید. برای ردیف‌های مالیاتی قابل‌استفادهٔ مجدد از [Purchase Taxes and Charges Template](https://docs.frappe.io/erpnext/purchase-taxes-and-charges-template)، برای هزینه‌هایی که پس از دریافت مشخص می‌شوند از [Landed Cost Voucher](https://docs.frappe.io/erpnext/landed-cost-voucher) و برای کنترل تراکنش‌ها از [Buying Settings](https://docs.frappe.io/erpnext/buying-settings) استفاده کنید.

## موضوعات مرتبط

- [Shipping Rule](https://docs.frappe.io/erpnext/shipping-rule)
- [Purchase Order](https://docs.frappe.io/erpnext/purchase-order)
- [Purchase Taxes and Charges Template](https://docs.frappe.io/erpnext/purchase-taxes-and-charges-template)
- [محاسبهٔ کرایهٔ حمل و مالیات آن](calculatin-freight-in-taxes-in-erpnext.md)
- [Item](https://docs.frappe.io/erpnext/item)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/can-we-fetch-shipping-charges-based-items-value-or-weight-in-po). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
