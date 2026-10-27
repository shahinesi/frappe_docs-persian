---
title: "تنظیمات خرید"
slug: "buying-settings"
source_url: "https://docs.frappe.io/erpnext/buying-settings"
source_id: "erpnext/buying-settings"
source_version: "ce27b4f1ac2c58c9dcbe8375152ffa78d64037626084702c822aaafed75a9f7c"
---

تصور کنید مسئول خرید در Nova Industries هستید؛ تولیدکننده و توزیع‌کنندهٔ تجهیزات الکترونیکی. یک خریدار صورتحسابی را بدون سفارش می‌پذیرد، نفر بعدی نرخ توافق‌شده را تغییر می‌دهد و خریدار سوم بیش از مقدار درخواست‌شده سفارش می‌دهد. بدون سیاست یکپارچه، شرکت نمی‌تواند استثنای تأییدشده را از اشتباه تشخیص دهد.

**Buying Settings** سیاست‌های خرید را به مقدارهای پیش‌فرض و اعتبارسنجی تبدیل می‌کند. این تنظیمات نام‌گذاری تأمین‌کننده، نرخ‌ها، اسناد الزامی، تغییر مقدار و پیمانکاری را کنترل می‌کنند. تنظیمات در کل سایت اعمال می‌شوند؛ بنابراین تغییرات را با تیم‌های خرید، انبار، مالی و تولید بازبینی کنید.

## پیش از شروع

به مجوز System Manager یا Purchase Manager نیاز دارید. ابتدا [Supplier Group](https://docs.frappe.io/erpnext/supplier-group)، [Price List](https://docs.frappe.io/erpnext/price-list) خرید، Role، Email Account و Naming Series لازم را ایجاد کنید. تغییرات را آزمایش کنید؛ چون قاعده‌ای برای خرید کالای انبارشونده ممکن است خرید معتبر خدمت یا خرید اضطراری را مختل کند.

**Buying > Settings > Buying Settings** را باز کنید یا Buying Settings را جست‌وجو کنید. فرم شامل Defaults، Pricing، Transaction Settings، Subcontracting Settings، Request for Quotation و Document Naming است. پس از تغییر، **Save** را انتخاب کنید.

## پیش‌فرض‌ها

![زبانهٔ Defaults در Buying Settings با فیلدهای نام‌گذاری و گروه تأمین‌کننده](https://docs.frappe.io/files/buying-settings-defaults.png)

| فیلد | کنترل می‌کند | مثال Nova |
| --- | --- | --- |
| Supplier Naming By | شناسهٔ یکتا را تعیین می‌کند. **Supplier Name** از نام واردشده استفاده می‌کند. **Naming Series** شناسه‌هایی مانند SUP-2026-00001 می‌سازد. **Auto Name** از قاعدهٔ خودکار DocType استفاده می‌کند. | Nova از Supplier Name استفاده می‌کند تا Keystone Cables مستقیماً جست‌وجو شود. وقتی نام‌ها ممکن است تغییر کنند یا تکراری شوند، از سری استفاده کنید. |
| Default Supplier Group | اگر مقدار دیگری تعیین نشده باشد، Supplier Group را از پیش پر می‌کند. | فقط وقتی مقدار پیش‌فرض بگذارید که بیشتر تأمین‌کنندگان تازه در یک گروه قرار می‌گیرند. Nova آن را خالی می‌گذارد تا خریدار عمداً Raw Material، Services یا گروه دیگری را انتخاب کند. |

Supplier Group می‌تواند مقدارهای پیش‌فرضی مانند شرایط پرداخت داشته باشد. مقدار موجود در [Supplier](https://docs.frappe.io/erpnext/supplier) از مقدار پیش‌فرض کل سایت مشخص‌تر است.

## قیمت‌گذاری

![Default Buying Price List در Buying Settings](https://docs.frappe.io/files/buying-settings-price-list.png)

وقتی تأمین‌کننده Price List دیگری مشخص نکرده باشد، در تراکنش خرید جدید از **Default Buying Price List** استفاده می‌شود. مقدار جایگزین Nova، Standard Buying است؛ درحالی‌که Keystone Cables می‌تواند فهرست اختصاصی خود را با نرخ‌های قراردادی داشته باشد.

![اعتبارسنجی نرخ یکسان و اقدام آن در Buying Settings](https://docs.frappe.io/files/buying-settings-same-rate.png)

**Maintain same rate throughout the purchase cycle** نرخ قلم در سند بعدی را با نرخ سفارش یا رسید مبدأ مقایسه می‌کند. برگشت‌ها و خرید از تأمین‌کنندهٔ داخلی از این کنترل مستثنا هستند؛ چون ممکن است نرخ متفاوتی داشته باشند.

| فیلد | کنترل می‌کند | چه زمانی انتخاب شود |
| --- | --- | --- |
| Action if same rate is not maintained | **Stop** نرخ تغییرکرده را نمی‌پذیرد. **Warn** اجازهٔ سند را می‌دهد اما هشدار نمایش می‌دهد. | وقتی Purchase Order نرخ تجاری مصوب است، Stop را انتخاب کنید. اگر اختلاف صورتحساب رایج است و بعداً بررسی می‌شود، Warn را به‌کار ببرید. |
| Role allowed to override stop action | به کاربرانی با Role انتخاب‌شده اجازه می‌دهد حتی در حالت Stop، استثنای معتبر را ذخیره کنند. | این مجوز را فقط به Role محدود تأیید خرید یا مالی بدهید. اگر هیچ‌کس نباید کنترل را دور بزند، فیلد را خالی بگذارید. |

Nova از Keystone Cables تعداد 200 آداپتور، هرکدام 18 دلار، سفارش می‌دهد. اگر تأمین‌کننده صورتحساب را با نرخ 19 دلار بفرستد و اقدام روی Stop باشد، خریدار باید صورتحساب را اصلاح کند، سفارش را بازنگری کند یا مجوز استثنا بگیرد.

**Set Landed Cost Based on Purchase Invoice Rate** فقط وقتی نمایش داده می‌شود که اعتبارسنجی نرخ یکسان خاموش باشد. اگر رسید، قلم وارداتی را با نرخ 100 دلار ارزش‌گذاری کند و نرخ صورتحساب به 105 دلار برسد، ERPNext یک [Repost Item Valuation](https://docs.frappe.io/erpnext/repost-item-valuation) می‌سازد تا موجودی و ثبت‌های حسابداری وابسته را دوباره محاسبه کند.

این گزینه جایگزین [Landed Cost Voucher](https://docs.frappe.io/erpnext/landed-cost-voucher) نیست؛ Landed Cost Voucher هزینهٔ حمل، گمرک، بیمه و هزینه‌های دیگر را به اقلام دریافتی تخصیص می‌دهد.

## تنظیمات تراکنش

![الزام Purchase Order و Purchase Receipt در Buying Settings](https://docs.frappe.io/files/buying-settings-required-documents.png)

| فیلد | کنترل می‌کند | مثال Nova |
| --- | --- | --- |
| Is Purchase Order required for Purchase Invoice & Receipt creation? | مقدار **Yes** مانع ساخت Purchase Receipt یا Purchase Invoice بدون پیوند به سفارش می‌شود. برگشت‌ها مشمول نیستند. | وقتی همهٔ خریدهای کالا به تأیید قبلی نیاز دارند Yes را انتخاب کنید. استثنای تأمین‌کننده می‌تواند صورتحساب مستقیم را مجاز کند، اما رسید مستقیم را نه. |
| Is Purchase Receipt required for Purchase Invoice creation? | مقدار **Yes** مانع صورتحسابی می‌شود که به رسید پیوند ندارد. | برای تطبیق سه‌طرفه Yes را انتخاب کنید. اگر از تأمین‌کنندهٔ خدمت کالایی وارد انبار نمی‌شود، او را مستثنا کنید. |

فیلدهای سطح Supplier می‌توانند ساخت Purchase Invoice بدون Purchase Order یا Purchase Receipt را مجاز کنند. استثناها را محدود نگه دارید؛ زیرا برای همان تأمین‌کننده کنترل کل سایت را دور می‌زنند.

![کنترل مقدار، قلم تکراری و هزینهٔ پروژه در Buying Settings](https://docs.frappe.io/files/buying-settings-transaction-controls.png)

| فیلد | کنترل می‌کند | مثال Nova |
| --- | --- | --- |
| How often should project be updated of Total Purchase Cost? | **Each Transaction** هزینه را پس از خرید پیوندخورده تازه می‌کند. **Manual** تا زمان تازه‌سازی دستی صبر می‌کند. | فقط وقتی حجم تراکنش‌ها تازه‌سازی مکرر را نامطلوب می‌کند Manual را انتخاب کنید. |
| Over Order Allowance (%) | اجازه می‌دهد Purchase Order به‌اندازهٔ درصد مشخص‌شده از مقدار Material Request بیشتر شود. | با مجازبودن 10%، درخواست 100 آداپتور می‌تواند به سفارش حداکثر 110تایی تبدیل شود. |
| Allow Item to be added multiple times in a transaction | اجازه می‌دهد یک Item در چند ردیف تکرار شود. | برای تاریخ‌ها یا انبارهای متفاوت روشن بگذارید؛ اگر ردیف‌های تکراری تصادفی‌اند خاموشش کنید. |
| Allow negative rates for Items | نرخ منفی قلم را مجاز می‌کند. | فقط برای فرایند تعدیل مشخص از آن استفاده کنید. تخفیف معمولی با فیلدهای تخفیف یا Pricing Rule روشن‌تر ثبت می‌شود. |
| Disable last purchase rate | مانع پیشنهاد آخرین نرخ خرید در سند خرید جدید می‌شود. | وقتی نرخ‌ها باید فقط از Price List، پیشنهاد قیمت یا مذاکرهٔ جاری گرفته شوند، آن را فعال کنید. |

### تنظیمات Purchase Invoice

![کنترل صورتحساب کالای ردشده و نرخ ارز در Buying Settings](https://docs.frappe.io/files/buying-settings-invoice-controls.png)

| فیلد | کنترل می‌کند | مثال Nova |
| --- | --- | --- |
| Bill for rejected quantity in Purchase Invoice | هنگام ساخت صورتحساب از Purchase Receipt، مقدار ردشده را نیز در صورتحساب می‌آورد. | وقتی تأمین‌کننده کالای ردشده را هم صورتحساب می‌کند و برگشت یا ادعای جداگانه آن را تسویه می‌کند، روشنش کنید. |
| Set valuation rate for rejected Materials | وقتی مقدار ردشده صورتحساب شده باشد نمایش داده می‌شود. به مادهٔ ردشده ارزش می‌دهد و به‌جای صفرماندن ارزش آن، ثبت حسابداری ایجاد می‌کند. | وقتی کالای ردشده تا زمان حل اختلاف همچنان دارایی متعلق به شرکت و دارای ارزش است، از آن استفاده کنید. |
| Use Transaction Date Exchange Rate | در صورتحساب ارزی ساخته‌شده از Purchase Order، به‌جای نرخ ارث‌رسیده از سفارش از نرخ تاریخ صورتحساب استفاده می‌کند. | اگر سیاست حسابداری نرخ روز صورتحساب را برای بدهی پرداختنی لازم می‌داند، آن را فعال کنید. |

### ردیف‌های با مقدار صفر و Blanket Order

![کنترل Purchase Order با مقدار صفر و مجازبودن Blanket Order](https://docs.frappe.io/files/buying-settings-zero-quantity.png)

گزینه‌های مقدار صفر برای قراردادهای نرخ مناسب‌اند؛ یعنی زمانی که قیمت پیش از مقدار توافق شده است. مقدار صفر بر موجودی یا دفتر کل اثری ندارد.

**Blanket Order Allowance (%)** مشخص می‌کند Purchase Order تا چه حد می‌تواند از مقدار توافق‌شده در [Blanket Order](https://docs.frappe.io/erpnext/blanket-order) بیشتر شود. مجازبودن 5% برای 1,000 واحد، سفارش‌هایی تا مجموع 1,050 واحد را امکان‌پذیر می‌کند.

## تنظیمات پیمانکاری

![مبنای مصرف مواد و کنترل خودکار Subcontracting Order](https://docs.frappe.io/files/buying-settings-subcontracting.png)

این تنظیمات زمانی اعمال می‌شوند که شرکت مواد اولیه را برای پردازش به تأمین‌کننده می‌فرستد و کالای پردازش‌شده را از طریق [subcontracting](https://docs.frappe.io/erpnext/subcontracting) دریافت می‌کند.

| فیلد | کنترل می‌کند | مثال Nova |
| --- | --- | --- |
| Backflush raw materials of subcontract based on | گزینهٔ **BOM** مقدار مواد را طبق Bill of Materials مصرف می‌کند. **Material Transferred for Subcontract** مقدار منتقل‌شده را مبنا قرار می‌دهد. | برای دستور ساخت کنترل‌شده از BOM استفاده کنید. وقتی مقدار واقعی تحویل مواد مبنای اجرایی است، مقدار منتقل‌شده را مبنا بگیرید. |
| Over Transfer Allowance (%) | وقتی مبنای backflush، BOM است، انتقال مواد اولیه بیش از نیاز سفارش را مجاز می‌کند. | مجازبودن 2% اتلاف موردانتظار فرایند را پوشش می‌دهد، بی‌آنکه انتقال نامحدود شود. |
| Validate consumed quantity (as per BOM) | وقتی backflush بر اساس مقدار انتقال‌یافته است، مصرف را با BOM مقایسه می‌کند. | اگر مقدارهای انتقال می‌توانند تفاوت داشته باشند اما مصرف باید مطابق استاندارد مهندسی باشد، فعالش کنید. |
| Auto create Subcontracting Order | هنگام ثبت نهایی Purchase Order پیمانکاری، یک Subcontracting Order پیش‌نویس می‌سازد. | وقتی همهٔ سفارش‌های پیمانکاری باید بی‌درنگ وارد گردش‌کار انتقال مواد شوند، فعالش کنید. |
| Auto create Purchase Receipt | هنگام ثبت نهایی Subcontracting Receipt، برای اقلام خدمت یک Purchase Receipt پیش‌نویس می‌سازد. | وقتی پس از هر رسید پیمانکاری تکمیل‌شده باید رسید خدمت ساخته شود و نمی‌خواهید آن را دستی ایجاد کنید، فعالش کنید. |

## Request for Quotation

![حساب ایمیل خروجی ثابت برای Request for Quotationها](https://docs.frappe.io/files/buying-settings-rfq-email.png)

**Fixed Outgoing Email Account** همهٔ [Request for Quotation](https://docs.frappe.io/erpnext/request-for-quotation)ها را از یک Email Account می‌فرستد، نه از حساب خریدار یا حساب خروجی پیش‌فرض. Nova می‌تواند از purchasing@nova.example استفاده کند تا تأمین‌کنندگان فرستندهٔ یکسانی ببینند و پاسخ‌ها به تیم خرید برسند.

## نام‌گذاری سندها

![زبانهٔ Document Naming در Buying Settings با سری سندهای خرید](https://docs.frappe.io/files/buying-settings-document-naming.png)

این زبانه Naming Series سندهای Material Request، Request for Quotation، Supplier Quotation، Purchase Order، Purchase Receipt و Purchase Invoice را نشان می‌دهد. برای تغییر سری، از عملیات ویرایش استفاده کنید.

تغییر سری فقط بر رکوردهای جدید اثر می‌گذارد. برای قواعد مشترک، [Document Naming Settings](https://docs.frappe.io/erpnext/document-naming-settings) را ببینید.

## بررسی نتیجه در یک تراکنش

![Purchase Invoice ساخته‌شده از Purchase Order با حفظ تأمین‌کننده و نرخ سفارش](https://docs.frappe.io/files/buying-settings-purchase-invoice-result.png)

Nova برای Keystone Cables، Purchase Invoice با شناسهٔ ACC-PINV-2026-00023 را از Purchase Order با شناسهٔ PUR-ORD-2026-00022 ساخت. تأمین‌کننده، ردیف‌های قلم، سفارش مبدأ و نرخ 18 دلاری منتقل شدند. این نتیجهٔ عملی استفاده از سندهای پیوندخورده و اعتبارسنجی نرخ یکسان است: صورتحساب بر اساس سفارش مصوب ساخته می‌شود، نه بر اساس حافظه و ورود دوبارهٔ اطلاعات.

پس از تغییر هر تنظیم، یک پیش‌نویس نمونه بسازید و نتیجه را تأیید کنید.

## عیب‌یابی

### بدون Purchase Order نمی‌توان Purchase Receipt ساخت

الزام Purchase Order روی Yes تنظیم شده است. رسید را از یک Purchase Order ثبت‌نهایی‌شده بسازید. استثنای سطح Supplier فقط Purchase Invoice مستقیم را مجاز می‌کند، نه رسید مستقیم را.

### بدون Purchase Receipt نمی‌توان Purchase Invoice ساخت

الزام Purchase Receipt روی Yes تنظیم شده است. صورتحساب را از رسید بسازید یا برای تأمین‌کنندهٔ خدمتی که چیزی برای دریافت ندارد، از استثنای تأییدشدهٔ سطح Supplier استفاده کنید.

### نرخ صورتحساب با سفارش متفاوت است و سند ذخیره نمی‌شود

اعتبارسنجی نرخ یکسان روی اقدام Stop است. نرخ مصوب را برگردانید، اگر توافق تغییر کرده Purchase Order را بازنگری کنید یا از کاربری با Role لغو محدودیت بخواهید استثنا را تأیید کند.

### گزینهٔ landed cost وجود ندارد

گزینهٔ Maintain same rate throughout the purchase cycle فعال است. برای نمایش گزینهٔ landed cost بر مبنای نرخ صورتحساب، این تنظیم را خاموش کنید. ابتدا سیاست را بررسی کنید؛ زیرا این دو کنترل دو رویکرد متفاوت برای اختلاف قیمت هستند.

### Debit Note با نرخ متفاوت ذخیره شد

برگشت‌ها مشمول بررسی نرخ یکسان نیستند. پیش از ثبت نهایی، نرخ برگشت را بررسی کنید؛ این تنظیم جلوی اختلاف را نمی‌گیرد.

## پرسش‌های رایج

### آیا Buying Settings برای هر Company جداگانه اعمال می‌شود؟

خیر. Buying Settings یک رکورد برای کل سایت است و همهٔ شرکت‌ها از آن پیروی می‌کنند. فقط در جاهایی که ERPNext پشتیبانی می‌کند، از استثناهای سطح Supplier و انتخاب‌های سطح سند استفاده کنید.

### آیا این تنظیمات سندهای ثبت‌نهایی‌شدهٔ قبلی را تغییر می‌دهند؟

خیر. تنظیمات بر اقدام‌ها و سندهایی اثر می‌گذارند که پس از تغییر ایجاد یا اعتبارسنجی می‌شوند. رکوردهای ثبت‌نهایی‌شده مقدارها و اثرهای دفتریِ ثبت‌شدهٔ خود را حفظ می‌کنند.

### آیا شرکت خدماتی باید Purchase Receipt را الزامی کند؟

معمولاً برای خدمت محض چنین الزامی لازم نیست، چون جابه‌جایی موجودی رخ نمی‌دهد. بااین‌حال می‌تواند برای تأیید Purchase Order را الزامی کند و سپس برای تأمین‌کنندگان خدماتی تأییدشده مستقیماً Purchase Invoice بسازد.

### برای تغییر نرخ، Warn امن‌تر است یا Stop؟

Warn وقفهٔ کمتری ایجاد می‌کند، اما به کاربران وابسته است که هشدار را ببینند و اقدام کنند. Stop کنترل قوی‌تری دارد و برای تغییرهای واقعی به Role مشخصی جهت تأیید استثنا نیازمند است.

### آیا تأمین‌کنندگان مختلف می‌توانند Price List متفاوت داشته باشند؟

Price List ثبت‌شده در Supplier می‌تواند Default Buying Price List را نادیده بگیرد. مقدار کل سایت فقط وقتی به‌کار می‌رود که مقدار مشخص‌تری وجود نداشته باشد.

## موضوعات مرتبط

- [آشنایی با Buying](buying.md)
- [Supplier](https://docs.frappe.io/erpnext/supplier)
- [Purchase Order](https://docs.frappe.io/erpnext/purchase-order)
- [Purchase Receipt](https://docs.frappe.io/erpnext/purchase-receipt)
- [Purchase Invoice](https://docs.frappe.io/erpnext/purchase-invoice)
- [Blanket Order](https://docs.frappe.io/erpnext/blanket-order)
- [Subcontracting](https://docs.frappe.io/erpnext/subcontracting)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/buying-settings). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
