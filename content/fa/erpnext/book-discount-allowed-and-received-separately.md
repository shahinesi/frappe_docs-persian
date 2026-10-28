---
title: "ثبت جداگانهٔ تخفیف‌های اعطایی و دریافتی"
slug: "book-discount-allowed-and-received-separately"
source_url: "https://docs.frappe.io/erpnext/book-discount-allowed-and-received-separately"
source_id: "erpnext/book-discount-allowed-and-received-separately"
source_version: "6c509bb1e2c14a89d35e286e5966cbb446a6a7e624529efad01219da28460d13"
---

ERPNext معمولاً مبلغ خالص صورتحساب را پس از تخفیف‌های تجاری ثبت می‌کند. اگر سیاست حسابداری شما می‌خواهد تخفیف در حساب دفتر کل جداگانه‌ای ثبت شود، از روند این صفحه استفاده کنید.

**تخفیف اعطایی (discount allowed)** کاهشی است که شرکت به مشتری می‌دهد و معمولاً در حساب هزینه یا کاهندهٔ درآمد ثبت می‌شود. **تخفیف دریافتی (discount received)** کاهشی است که تأمین‌کننده به شرکت شما می‌دهد و معمولاً در حساب درآمد یا کاهندهٔ هزینه ثبت می‌شود. طبقه‌بندی حساب را با حسابدار خود تأیید کنید؛ نحوهٔ ارائه و قواعد مالیاتی بسته به حوزهٔ قضایی تفاوت دارد.

این روش از یک ردیف منفی در جدول **Sales or Purchase Taxes and Charges** استفاده می‌کند. ERPNext با وجود نام جدول، آن را برای مالیات و سایر افزایش‌ها یا کاهش‌ها به‌کار می‌برد. ردیف منفی مبلغ قابل‌پرداخت را کم می‌کند و تخفیف را به **Account Head** انتخاب‌شده ثبت می‌کند.

| مثال | مبلغ ناخالص | تخفیف جداگانه | مبلغ خالص قابل‌پرداخت |
| --- | ---: | ---: | ---: |
| Sales Invoice | $1,398.00 | بدهکار $139.80 به Sales Discounts Allowed | $1,258.20 دریافتنی |
| Purchase Invoice | $1,040.00 | بستانکار $104.00 به Purchase Discounts Received | $936.00 پرداختنی |

## انتخاب روش مناسب ثبت تخفیف

وقتی به کنترل صریح حساب جداگانه نیاز دارید، به‌ویژه برای Purchase Invoice، از روش ردیف هزینهٔ منفی استفاده کنید. گردش‌کار جدیدتر [Discount Accounting](https://docs.frappe.io/erpnext/discount-accounting) در ERPNext فیلدهای اختصاصی **Discount Account** در سمت فروش دارد و ممکن است برای تخفیف‌های سطح قلم یا صورتحساب فروش ساده‌تر باشد.

برای یک تخفیف، هر دو روش را هم‌زمان به‌کار نبرید. تخفیف معمول قلم، [تخفیف اضافی](applying-discount.md)، Pricing Rule و ردیف هزینهٔ منفی هرکدام می‌توانند مبلغ تراکنش را کاهش دهند. ترکیب آن‌ها بدون محاسبهٔ آگاهانه ممکن است باعث دوباره‌شماری تخفیف شود.

این روش تخفیفی را در سطح کل تراکنش ثبت می‌کند و تخفیف متفاوتی را برای تحلیل حاشیهٔ سود بین ردیف‌های اقلام تخصیص نمی‌دهد. اگر قیمت‌گذاری تجاری در سطح قلم اهمیت دارد، [کالا Price](https://docs.frappe.io/erpnext/item-price) یا تخفیف قلم را آگاهانه تنظیم کنید و جداگانه تصمیم بگیرید که آیا دفتر کل نیز به حساب تخفیف مستقل نیاز دارد یا نه.

## پیش از شروع

1. با حسابدار خود تأیید کنید که تخفیف اعطایی باید زیر Expense یا contra-revenue و تخفیف دریافتی زیر Income یا contra-expense طبقه‌بندی شود.
2. در [Chart of Accounts](chart-of-accounts.md) شرکت، حساب‌های دفتر کل غیرگروهی بسازید. مثال از **Sales Discounts Allowed - NET** و **Purchase Discounts Received - NET** استفاده می‌کند.
3. مبنای تخفیف را مشخص کنید. **On Net Total** نرخ را روی کل Net Total اعمال می‌کند. انواع دیگر هزینه ممکن است بر اساس ردیف قبلی یا مبلغ ثابتی محاسبه شوند.
4. اثر تخفیف بر مالیات را بررسی کنید. ترتیب و نوع ردیف‌های جدول هزینه، جمع جاری مورد استفادهٔ مالیات‌های بعدی را تعیین می‌کند.
5. پیش از استفاده در محیط عملیاتی، یک تراکنش نمونه را آزمایش و دفتر کل آن را بررسی کنید.

در این مثال، حساب تخفیف فروش در گروه Expenses قرار دارد.

![حساب Sales Discounts Allowed در Chart of Accounts](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-discount-account.png)

حساب تخفیف خرید در گروه Income قرار دارد.

![حساب Purchase Discounts Received در Chart of Accounts](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-purchase-discount-account.png)

## ثبت تخفیف اعطایی در Sales Invoice

1. یک [راهنمای «Sales Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/sales-invoice) بسازید و اقلام را با نرخ ناخالص فروش اضافه کنید.
2. در **Sales Taxes and Charges** یک ردیف اضافه کنید. اگر این روش در حالت معمول تکرار می‌شود، [راهنمای «Sales Taxes and Charges Template\n» در ERPNext](https://docs.frappe.io/erpnext/sales-taxes-and-charges-template) می‌تواند همین ردیف را فراهم کند.
3. آیکون مداد مشخص‌شده را انتخاب کنید تا ویرایشگر کامل ردیف باز شود.

![ردیف تخفیف Sales Invoice و آیکون مداد مشخص‌شده](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-discount-row.png)

4. **Type** را روی **On Net Total** بگذارید.
5. در **Account Head** حساب تخفیف اعطایی را انتخاب کنید.
6. درصد تخفیف را به‌شکل **Tax Rate** منفی وارد کنید. برای تخفیف 10درصدی، **-10** وارد کنید.
7. **Description** روشن و **Cost Center** یا سایر [ابعاد حسابداری](accounting-dimensions.md) لازم را وارد کنید.

![Type، Account Head و Tax Rate منفی تخفیف فروش](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-discount-fields.png)

مثال با دو تلفن به قیمت هرکدام $699 آغاز می‌شود؛ یعنی $1,398. ردیف -10% مبلغ -$139.80 ایجاد می‌کند و **Grand Total** را به $1,258.20 کاهش می‌دهد.

![Sales Invoice ثبت‌نهایی‌شده با تخفیف و Grand Total مشخص‌شده](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-submitted-total.png)

8. مالیات‌ها، گردکردن، **Grand Total** و ردیف هزینه را بررسی و سپس صورتحساب را ثبت نهایی کنید.
9. **View > Accounting Ledger** را باز کنید و نتیجه را در [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger) بررسی کنید.

![دفتر کل Sales Invoice با ردیف تخفیف جداگانه](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-general-ledger.png)

در دفتر کل، Debtors به مبلغ $1,258.20 بدهکار، Sales Discounts Allowed به مبلغ $139.80 بدهکار و Sales به مبلغ ناخالص $1,398.00 بستانکار می‌شود.

## ثبت تخفیف دریافتی در Purchase Invoice

1. یک [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice) بسازید و اقلام را با نرخ ناخالص خرید اضافه کنید.
2. در **Purchase Taxes and Charges** یک ردیف اضافه کنید. اگر همین روش را تکرار می‌کنید، از [راهنمای «Purchase Taxes and Charges Template\n» در ERPNext](https://docs.frappe.io/erpnext/purchase-taxes-and-charges-template) استفاده کنید.
3. آیکون مداد ردیف را انتخاب کنید.
4. **Type** را روی **On Net Total** بگذارید.
5. در **Account Head** حساب درآمد یا contra-expense تخفیف دریافتی را که حسابدار تأیید کرده انتخاب کنید.
6. درصد را به‌صورت **Tax Rate** منفی وارد کنید. مثال از **-10** استفاده می‌کند.

![Type، Account Head و Tax Rate منفی تخفیف خرید](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-purchase-discount-fields.png)

مبلغ ناخالص خرید $1,040 است. ردیف -10% مبلغ $104 را کسر می‌کند؛ بنابراین $936 به تأمین‌کننده بدهکار می‌شوید.

![Purchase Invoice ثبت‌نهایی‌شده با تخفیف و Grand Total مشخص‌شده](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-purchase-submitted-total.png)

7. صورتحساب را ثبت نهایی و Accounting Ledger را باز کنید.

![دفتر کل Purchase Invoice با ردیف تخفیف جداگانه](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-purchase-general-ledger.png)

در دفتر کل، Creditors به مبلغ $936 بستانکار، حساب خرید یا موجودی دریافت‌شده به مبلغ $1,040 بدهکار و Purchase Discounts Received به مبلغ $104 بستانکار می‌شود.

اگر [راهنمای «Purchase Receipt | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-receipt) قبلاً با مبلغ متفاوتی ثبت شده است، فرض نکنید تخفیف Purchase Invoice به‌طور خودکار ارزش‌گذاری موجودی را اصلاح یا حساب Stock Received But Not Billed را تسویه می‌کند. روش تجاری را در سراسر چرخهٔ خرید یکسان اجرا و دفترهای کل موجودی و حسابداری را بررسی کنید.

## ثبت پرداخت خالص

برای مبلغ نهایی باقیماندهٔ صورتحساب، نه مبلغ ناخالص پیش از تخفیف، یک [راهنمای «Payment Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-entry) بسازید.

در مثال فروش، مشتری $1,258.20 پرداخت می‌کند. ردیف Payment References این مبلغ را به Sales Invoice تخصیص می‌دهد.

![Payment Entry مشتری با تخصیص مبلغ خالص Sales Invoice](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-sales-payment-entry.png)

در مثال خرید، شرکت $936 به تأمین‌کننده می‌پردازد.

![Payment Entry تأمین‌کننده با تخصیص مبلغ خالص Purchase Invoice](https://novacompanies.m.frappe.cloud/files/docs-gl-2026-separate-discount-booking-purchase-payment-entry.png)

تخفیف پیش‌تر در صورتحساب ثبت شده است. همان تخفیف را دوباره به‌عنوان کسر در Payment Entry وارد نکنید، مگر اینکه واقعاً تعدیل جداگانه‌ای هنگام پرداخت رخ داده باشد.

## فیلدهای مهم و معنی آن‌ها

| فیلد | کنترل می‌کند |
| --- | --- |
| Type | مبنای محاسبهٔ ردیف. **On Net Total** درصد را روی Net Total صورتحساب اعمال می‌کند. |
| Account Head | دفترکلی که ثبت تخفیف به آن انجام می‌شود. این حساب باید متعلق به شرکت انتخاب‌شده باشد. |
| Tax Rate | درصد مورد استفاده در ردیف. برای کسر تخفیف، مقدار منفی وارد کنید. |
| Amount | مبلغ کسری محاسبه‌شده یا واردشده. پیش از ثبت نهایی، علامت و مقدار آن را بررسی کنید. |
| Description | متنی که روی صورتحساب نمایش داده می‌شود و برای بازبینان مفید است؛ این متن حساب دفتر کل را تعیین نمی‌کند. |
| Cost Center و ابعاد | بخش‌های گزارش‌گیری که روی ثبت تخفیف اعمال می‌شوند. |
| Grand Total | مبلغ خالص قابل‌پرداخت پس از همهٔ ردیف‌های هزینه، مالیات، تخفیف و گردکردن. |
| Payment References | تخصیص صورتحساب در Payment Entry. مبلغ نهایی باقیمانده را تخصیص دهید. |

## عیب‌یابی

| مسئله | مواردی که باید بررسی شوند |
| --- | --- |
| تخفیف مبلغ صورتحساب را افزایش می‌دهد | منفی‌بودن **Tax Rate** را تأیید کنید. ردیف هزینهٔ مثبت، جمع را افزایش می‌دهد. |
| تخفیف به حساب اشتباه ثبت می‌شود | وقتی صورتحساب Draft است، **Account Head** را اصلاح کنید. پس از ثبت نهایی، فرایند پشتیبانی‌شدهٔ لغو و اصلاح را دنبال کنید. |
| مالیات روی مبلغ اشتباه محاسبه می‌شود | ترتیب ردیف‌ها، **Type**، **Row ID** و مبنای ردیف مالیات بعدی را بررسی کنید: Net Total، Previous Row Amount یا Previous Row Total. |
| حساب واسط خرید تسویه نمی‌شود | نرخ‌ها، تخفیف‌ها، مالیات‌ها و مقدارهای پیوندخوردهٔ Purchase Receipt و Purchase Invoice را مقایسه کنید. ارزش‌گذاری موجودی و Stock Received But Not Billed را بررسی کنید. |
| پرداخت صورتحساب را نمی‌بندد | مبلغ باقیماندهٔ فعلی را تخصیص دهید، Party و حساب دریافتنی یا پرداختنی درست را انتخاب کنید و ثبت‌نهایی‌شدن Payment Entry را تأیید کنید. |

## پرسش‌های متداول

### آیا Discount Allowed همیشه باید حساب هزینه باشد؟

خیر. برخی سیاست‌های حسابداری آن را contra-revenue طبقه‌بندی می‌کنند. ERPNext به **Account Head** انتخاب‌شده ثبت می‌کند؛ بنابراین حسابدار شما باید طبقه‌بندی صحیح را تعیین کند.

### چرا تخفیف در جدول مالیات‌ها وارد می‌شود؟

ERPNext از این جدول برای مالیات و سایر افزایش‌ها یا کاهش‌ها استفاده می‌کند. ردیف منفی جمع جاری را کاهش می‌دهد و به **Account Head** آن ثبت می‌شود.

### آیا می‌توان به‌جای درصد، تخفیف ثابت وارد کرد؟

بله. نوع هزینهٔ مناسب برای مبلغ ثابت را انتخاب و مبلغی منفی وارد کنید. بررسی کنید ردیف‌های مالیاتی بعدی چگونه از جمع جاری استفاده می‌کنند.

### آیا می‌توان همان ردیف تخفیف را دوباره استفاده کرد؟

بله. اگر حساب، مبنا، توضیح و نرخ ثابت‌اند، یک الگوی Sales یا Purchase Taxes and Charges بسازید. ردیف بارگذاری‌شده را در هر تراکنش بازبینی کنید.

### آیا تخفیف خرید خودکار ارزش‌گذاری موجودی را به‌روز می‌کند؟

نه در همهٔ توالی‌های خرید. نتیجه به این بستگی دارد که موجودی جداگانه دریافت شده باشد یا نه، از چه حساب‌هایی استفاده شده و تنظیمات ارزش‌گذاری رسید و صورتحساب چگونه است. Purchase Receipt، Purchase Invoice، Stock Ledger و دفترکل کل را با هم بررسی کنید.

## موضوعات مرتبط

- [Discount Accounting](https://docs.frappe.io/erpnext/discount-accounting)
- [اعمال تخفیف بر تراکنش‌های فروش](applying-discount.md)
- [راهنمای «Sales Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/sales-invoice)
- [راهنمای «Purchase Invoice | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/purchase-invoice)
- [Chart of Accounts](chart-of-accounts.md)
- [راهنمای «Payment Entry | ERPNext Documentation» در ERPNext](https://docs.frappe.io/erpnext/payment-entry)
- [دفترکل کل](https://docs.frappe.io/erpnext/general-ledger)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/book-discount-allowed-and-received-separately). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
