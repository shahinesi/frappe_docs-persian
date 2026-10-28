---
title: "حسابداری تخفیف"
slug: "discount-accounting"
source_url: "https://docs.frappe.io/erpnext/discount_accounting"
source_id: "erpnext/discount_accounting"
source_version: "d8be230557ce2561e129a302d382f33e4476b5a7d0a6b785d574c436179dec29"
source_updated: "2026-08-03"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/discount_accounting)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرها در این مخزن بازنشر نشده‌اند و پیوندشان به فایل‌های میزبان منبع اشاره می‌کند.

قابلیت حسابداری تخفیف به ERPNext اجازه می‌دهد تخفیف فروش را به‌جای آنکه فقط درآمد کاهش‌یافته ثبت شود، جداگانه در [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger) نشان دهد. زمانی از آن استفاده کنید که واحد مالی به گزارش جداگانهٔ فروش ناخالص و تخفیف‌های اعطاشده نیاز دارد.

این تنظیم نحوهٔ نمایش حسابداری را تغییر می‌دهد. مشخص نمی‌کند چه کسی واجد دریافت تخفیف است و شرایط تبلیغاتی را محاسبه نمی‌کند. تخفیف تجاری را با [فیلدهای معمول تخفیف](applying-discount.md)، [راهنمای «Pricing Rule | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/pricing-rule) یا روش قیمت‌گذاری تأییدشدهٔ دیگری پیکربندی کنید.

برای نمونه، Nova Electronics Trading دو گوشی را با قیمت فهرست هرکدام 699 دلار فاکتور می‌کند. تخفیف 10% برای کالا و سپس تخفیف اضافی 5% اعمال می‌شود. با فعال‌بودن حسابداری تخفیف، ERPNext این ثبت‌ها را ایجاد می‌کند:

| حساب | بدهکار | بستانکار | مفهوم |
| --- | ---: | ---: | --- |
| Debtors | 1,195.29 دلار | 0.00 دلار | مبلغی که مشتری بدهکار است. |
| Sales | 0.00 دلار | 1,398.00 دلار | درآمد پیش از تخفیف‌ها. |
| Sales Discounts Allowed | 202.71 دلار | 0.00 دلار | تخفیف کالایی 139.80 دلار به‌علاوهٔ تخفیف اضافی 62.91 دلار. |

بدون ثبت جداگانهٔ تخفیف، معمولاً همان تخفیف تجاری درآمد خالصِ ردیف‌های فاکتور را کاهش می‌دهد، نه اینکه بدهکار جداگانه‌ای در حساب تخفیف نشان داده شود.

## پیش از شروع

موارد زیر را تأیید کنید:

1. حساب تخفیف در [Chart of Accounts](chart-of-accounts.md) برای هر شرکتی که از آن استفاده می‌کند وجود داشته باشد. با حسابدار بررسی کنید که در ساختار گزارش‌دهی شما باید حساب هزینه باشد یا حساب کاهندهٔ درآمد.
2. برای [کالا](item.md)، یک [کالا Price](https://docs.frappe.io/erpnext/item-price) قابل‌اعمال در [راهنمای «Price Lists» در ERPNext](https://docs.frappe.io/erpnext/price-lists) موردنظر وجود داشته باشد. مرجع تخفیف کالا، نرخ Price List است.
3. کاربران بتوانند [راهنمای «Sales Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/sales-invoice) ایجاد و ثبت نهایی کنند و دفتر کل آن را ببینند.
4. پیش از فعال‌سازی گردش‌کار برای تراکنش‌های روزمره، ثبت مورد انتظار را با مالیات، ارز، گردکردن و تخفیف‌های نمونه آزمایش کرده باشید.

## فعال‌کردن حسابداری تخفیف برای فروش

دو تنظیم گردش‌کار فعلی را کنترل می‌کنند:

1. [راهنمای «Selling Settings | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/selling-settings) را باز کنید.
2. **Advanced Features** را انتخاب کنید.
3. **Enable discount accounting for selling** را فعال و ذخیره کنید.

![تنظیم Enable discount accounting for selling در Selling Settings](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-enable-selling-discount-accounting.png)

این تنظیم به ERPNext می‌گوید ثبت‌های دفتر کل جداگانه‌ای برای تخفیف‌های فروش در حساب Discount Account انتخاب‌شده ایجاد کند.

4. [تنظیمات حساب‌ها](accounts-settings.md) را باز کنید.
5. **Invoice and Billing** را انتخاب کنید.
6. **Enable Discounts and Margin** را فعال و ذخیره کنید.

![تنظیم Enable Discounts and Margin در Accounts Settings](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-enable-discounts-and-margin.png)

این تنظیم کنترل‌های تخفیف و حاشیهٔ سود را برای ردیف‌های کالا در تراکنش‌ها در دسترس قرار می‌دهد. فعال‌کردن آن به‌تنهایی ثبت جداگانه‌ای در حساب تخفیف ایجاد نمی‌کند.

## تعیین Discount Account پیش‌فرض برای کالا

پیش‌فرض‌کردن حساب باعث می‌شود در هر ردیف فاکتور مجبور به انتخاب آن نباشید.

1. کالا را باز کنید.
2. زبانهٔ **Accounting** را انتخاب کنید.
3. در **کالا Defaults**، ردیف شرکت را پیدا کنید.
4. نماد مداد را انتخاب کنید تا ویرایشگر کامل ردیف باز شود.

![ردیف Item Defaults با نماد مداد](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-item-default-row.png)

5. **Discount Account** را روی حساب شرکت بگذارید که باید تخفیف‌های سطح کالا و فاکتور به آن منظور شوند.
6. کالا را ذخیره کنید.

![Item Default با Discount Account](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-item-default-discount-account.png)

کالا Default مختص شرکت است. برای هر شرکت حساب معتبر و پیش‌فرض‌های لازم را جداگانه تنظیم کنید؛ حساب شرکت والد یا شرکت خواهر را کپی نکنید.

## ثبت تخفیف در سطح کالا

1. Sales Invoice بسازید و شرکت و مشتری را انتخاب کنید.
2. کالا را به جدول **Items** اضافه کنید.
3. نماد مداد ردیف کالا را انتخاب کنید.

![ردیف کالای Sales Invoice با نماد مداد](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-sales-invoice-item-row.png)

4. **Discount and Margin** را باز کنید.
5. **Discount (%) on Price List Rate with Margin** یا **Discount Amount** را وارد کنید.

![درصد تخفیف کالای Sales Invoice](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-sales-invoice-item-discount-percentage.png)

6. **Accounting Details** را باز کنید.
7. **Discount Account** را بررسی کنید. اگر کالا Default تنظیم شده باشد ERPNext حساب را از آن دریافت می‌کند، اما تأیید حساب در خود تراکنش همچنان بر عهدهٔ شماست.

![Discount Account در ردیف کالای Sales Invoice](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-sales-invoice-item-discount-account.png)

در مثال، Price List Rate برابر 699 دلار و تخفیف کالا 10% است. برای 2 واحد، ERPNext تخفیف کالایی 139.80 دلار و مبلغ 1,258.20 دلار را پیش از تخفیف کلی فاکتور ثبت می‌کند.

## ثبت تخفیف اضافی روی فاکتور

وقتی تخفیف به کل تراکنش مربوط است، نه به یک ردیف کالا، از تخفیف اضافی استفاده کنید.

1. در Sales Invoice بخش **Additional Discount** را باز کنید.
2. **Apply Additional Discount On** را روی **Net Total** یا **Grand Total** بگذارید.
3. **Additional Discount Percentage** یا **Additional Discount Amount** را وارد کنید.
4. **Discount Account** را انتخاب کنید.

![فیلدهای Additional Discount و Discount Account در Sales Invoice](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-sales-invoice-additional-discount.png)

در مثال، 5% از Net Total برابر 1,258.20 دلار، 62.91 دلار است. بنابراین مجموع تخفیف کالا و تخفیف اضافی 202.71 دلار می‌شود.

گزینه‌های Apply on Net Total و Apply on Grand Total ممکن است نتیجهٔ متفاوتی برای مالیات و مبلغ خالص ایجاد کنند. با تنظیماتی که کسب‌وکارتان استفاده می‌کند، تفکیک مالیات، گردکردن و مبلغ نهایی را بازبینی کنید.

## ثبت نهایی و بررسی دفتر کل

1. مبلغ تخفیف‌ها، مالیات، Grand Total و Discount Accountها را بازبینی کنید.
2. Sales Invoice را ذخیره و ثبت نهایی کنید.
3. **View > Ledger** را باز کنید یا گزارش دفترکل کل را برای voucher فاکتور اجرا کنید.

در مثال ثبت‌نهایی‌شده، Grand Total و ماندهٔ پرداخت‌نشده 1,195.29 دلار است.

![مبلغ Sales Invoice ثبت‌نهایی‌شده پس از تخفیف](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-submitted-sales-invoice-total.png)

دفتر کل فروش ناخالص 1,398.00 دلار، بدهکار 202.71 دلار به Sales Discounts Allowed و بدهکار 1,195.29 دلار به Debtors را نشان می‌دهد.

![ثبت جداگانهٔ Sales Discounts Allowed در General Ledger](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-discount-accounting-discount-account-general-ledger.png)

فقط به این دلیل که جمع فاکتور درست به نظر می‌رسد، آن را تأییدشده فرض نکنید. حساب تخفیف، درآمد ناخالص، دریافتنی، مالیات، ارز، Cost Center و هر [بُعد حسابداری](accounting-dimensions.md) دیگری را بررسی کنید تا مطابق انتظار ثبت شده باشند.

## فیلدهای مهم و کاربرد آن‌ها

| فیلد | کاربرد |
| --- | --- |
| Enable discount accounting for selling | در صورت وجود Discount Accountهای لازم، ثبت‌های جداگانهٔ تخفیف فروش ایجاد می‌کند. |
| Enable Discounts and Margin | کنترل‌های تخفیف و حاشیهٔ سود را در ردیف‌های پشتیبانی‌شدهٔ اقلام تراکنش در دسترس می‌گذارد. |
| Price List Rate | نرخ مرجع پیش از تخفیف کالا و حاشیهٔ سود است. بازنویسی Rate می‌تواند تخفیف محاسبه‌شده نسبت به این مرجع را تغییر دهد. |
| Discount Percentage | درصد کاهشی است که با توجه به رفتار حاشیهٔ سود بر Price List Rate محاسبه می‌شود. |
| Discount Amount | کاهش مبلغی‌ای است که در ردیف کالا نشان داده می‌شود. |
| کالا Discount Account | حساب ثبت دفتر کل برای تخفیف سطح کالا. |
| Apply Additional Discount On | تعیین می‌کند تخفیف کل تراکنش بر مبنای Net Total باشد یا Grand Total. |
| Additional Discount Percentage or Amount | کاهش کل تراکنش پس از محاسبهٔ قیمت‌گذاری در سطح کالا. |
| Additional Discount Account | حساب ثبت دفتر کل برای تخفیف کل فاکتور. |

## تخفیف‌های خرید

نسخهٔ فعلی develop در ERPNext از ثبت جداگانهٔ Discount Account برای فروش پشتیبانی می‌کند. [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice) هنوز مقدارهای تخفیف کالا و تخفیف اضافی را می‌پذیرد، اما فیلدهای استاندارد فعلی آن، معادل **Purchase Invoice کالا Discount Account** یا **Additional Discount Account** در گردش‌کار فروش را ندارند.

بدون بررسی منطق حسابداری، فیلدی را که فقط برای فروش است با سفارشی‌سازی به Purchase Invoice تحمیل نکنید. اگر سازمان باید تخفیف خرید را جداگانه گزارش کند، روش لازم را با حسابدار تعیین و فرایند تراکنش یا [راهنمای «Journal Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/journal-entry) پشتیبانی‌شده را در یک شرکت آزمایشی اعتبارسنجی کنید.

## عیب‌یابی

| مسئله | مواردی که باید بررسی شوند |
| --- | --- |
| Discount and Margin در دسترس نیست | فعال‌بودن **Enable Discounts and Margin**، Draft بودن فاکتور و غیرصفر بودن Price List Rate را تأیید کنید. ردیف کالا را با نماد مداد باز کنید. |
| Discount Account در دسترس نیست | فعال‌بودن **Enable discount accounting for selling** را تأیید کنید؛ پس از ذخیرهٔ تنظیم، فاکتور را دوباره بارگذاری و **Accounting Details** ردیف کالا را باز کنید. |
| ثبت جداگانهٔ تخفیف در دفتر کل ایجاد نشده است | تنظیم فروش، Discount Account کالا یا تخفیف اضافی و دفتر کل فاکتور ثبت‌نهایی‌شده را بررسی کنید. نمایش تخفیف تجاری به‌تنهایی ثابت نمی‌کند حسابداری جداگانه فعال است. |
| مبلغ تخفیف به‌طور غیرمنتظره منفی یا بزرگ است | Price List Rate، Margin، Rate، Discount Percentage و Discount Amount را مقایسه کنید. ERPNext اختلاف نرخ مرجع و Rate واردشده را در محاسبات قیمت لحاظ می‌کند. |
| حساب شرکت نادرست انتخاب شده است | پیش از ثبت نهایی، کالا Default مختص شرکت و ردیف فاکتور را اصلاح کنید. حساب‌ها را نمی‌توان میان شرکت‌های نامرتبط مشترک فرض کرد. |

## پرسش‌های متداول

### آیا حسابداری تخفیف مبلغ بدهی مشتری را تغییر می‌دهد؟

خیر. این قابلیت فقط نحوهٔ نمایش تخفیف در دفتر کل را تغییر می‌دهد. جمع فاکتور همچنان تخفیف تجاری واردشده در تراکنش را منعکس می‌کند.

### آیا می‌توانم هم تخفیف کالا و هم تخفیف اضافی داشته باشم؟

بله. ERPNext هر دو را اعمال می‌کند. مبلغ مؤثر تخفیف و دفتر کل را بررسی کنید، چون ممکن است هر دو مقدار به حساب تخفیف انتخاب‌شده ثبت شوند.

### چرا پس از بازنویسی Rate، مبلغ تخفیف محاسبه‌شده فرق می‌کند؟

تخفیف کالا بر اساس Price List Rate و رفتار حاشیهٔ سود محاسبه می‌شود. اگر Rate را مستقیم جایگزین کنید، ERPNext ممکن است اختلاف آن با Price List Rate را تخفیف یا تخفیف منفی در نظر بگیرد. اگر بهتر است مبنای تجاری را نشان دهد، کالا Price مشخص یا Price List Rate قابل ویرایش تعیین کنید.

### Discount Account باید حساب هزینه باشد یا کاهندهٔ درآمد؟

این موضوع به سرفصل‌ها و سیاست گزارش‌دهی شما بستگی دارد. ERPNext مبلغ را به حسابی که انتخاب کرده‌اید ثبت می‌کند. حسابدار باید طبقه‌بندی و محل نمایش آن را در گزارش‌های مالی تعیین کند.

### آیا همین گردش‌کار حساب جداگانه برای Purchase Invoice هم کار می‌کند؟

در فیلدهای استاندارد فعلی develop خیر. تراکنش‌های خرید مقدارهای تخفیف تجاری را می‌پذیرند، اما کنترل‌های Discount Account سمت خرید که در نسخه‌های قدیمی‌تر مستند شده بودند دیگر وجود ندارند.

## موضوعات مرتبط

- [اعمال تخفیف به تراکنش‌های فروش](applying-discount.md)
- [راهنمای «Sales Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/sales-invoice)
- [راهنمای «Pricing Rule | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/pricing-rule)
- [راهنمای «Selling Settings | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/selling-settings)
- [Chart of Accounts](chart-of-accounts.md)
- [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger)
- [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice)
