---
title: "مفاهیم و اصطلاحات ERPNext"
slug: "concepts-and-terms"
source_url: "https://docs.frappe.io/erpnext/concepts-and-terms"
source_id: "erpnext/concepts-and-terms"
source_version: "640e2d34fd9d2d12378e30978f0a7e4c5936ca4843921b4cc8fec4c6193f51de"
source_updated: "2026-08-14"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/concepts-and-terms)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> این صفحه تصویر ندارد.

در این صفحه با اصطلاحات رایج و چند مفهوم پایه در ERPNext آشنا می‌شوید.

### مفاهیم پایه

#### Company

رکوردهای Company معرف شرکت‌هایی هستند که ERPNext برای آن‌ها راه‌اندازی شده است. با یک پیکربندی می‌توانید چند Company بسازید که هرکدام نمایندهٔ یک شخصیت حقوقی جدا باشند. حسابداری هر Company مستقل است، اما رکوردهای Customer، Supplier و Item را با هم به‌اشتراک می‌گذارند.

> Setup > Company

#### Customer

مشتری را نشان می‌دهد. Customer می‌تواند یک فرد یا سازمان باشد. برای هر Customer می‌توانید چند Contact و Address بسازید.

> Selling > Customer

#### Supplier

تأمین‌کنندهٔ کالا یا خدمات را نشان می‌دهد. شرکت تلفن شما Supplier است؛ تأمین‌کنندهٔ مواد اولیه هم همین‌طور. Supplier نیز می‌تواند فرد یا سازمان باشد و چند Contact و Address داشته باشد.

> Buying > Supplier

#### Item

محصول، زیرمحصول یا خدمتی است که خریداری، فروخته یا تولید می‌شود و شناسهٔ یکتایی دارد.

> Stock > Item

#### Account

Account عنوانی است که تراکنش‌های مالی و تجاری زیر آن ثبت می‌شوند. برای نمونه: «Debtors»، «Creditors»، «VAT Payable»، «Travel Expenses»، «Sales» و «Share Capital». ERPNext ماندهٔ مشتریان و تأمین‌کنندگان را در پس‌زمینه پیگیری می‌کند؛ بنابراین لازم نیست برای هرکدام حساب جداگانه‌ای بسازید.

> Accounting > Chart of Accounts

#### Address

Address جزئیات مکانی Customer یا Supplier را نگه می‌دارد. این مکان می‌تواند دفتر مرکزی، کارخانه، انبار، فروشگاه یا جای دیگری باشد.

> Selling > Address

#### Contact

Contact فردی است که به Customer یا Supplier تعلق دارد یا به‌صورت مستقل ثبت شده است. Contact نام و اطلاعات ارتباطی مانند ایمیل و شمارهٔ تلفن دارد.

> Selling > Contact

#### Communication

فهرستی از تمام ارتباط‌ها با Contact یا Lead است. همهٔ ایمیل‌هایی که از سامانه ارسال می‌شوند به جدول Communication افزوده می‌شوند.

> Support > Communication

#### Price List

Price List محلی برای نگهداری طرح‌های گوناگون نرخ‌گذاری است. نامی است که به مجموعه‌ای از قیمت‌های Item ذخیره‌شده در یک فهرست می‌دهید.

> Selling > Price List

> Buying > Price List

---

### حسابداری

#### Fiscal Year

سال مالی یا سال حسابداری را نشان می‌دهد. می‌توانید هم‌زمان با چند Fiscal Year کار کنید. هر Fiscal Year تاریخ شروع و پایان دارد و تراکنش‌ها فقط در همین بازه ثبت می‌شوند. هنگام «بستن» یک سال مالی، مانده‌های آن به‌عنوان مانده‌های «افتتاحیه» به سال مالی بعد منتقل می‌شوند.

> Setup > Company > Fiscal Year

#### Cost Center

Cost Center مانند Account است؛ تفاوتش این است که ساختار آن کسب‌وکار شما را دقیق‌تر بازتاب می‌دهد. برای نمونه، در Chart of Accounts می‌توانید هزینه‌ها را بر اساس نوعشان (مانند سفر یا بازاریابی) جدا کنید. در Chart of Cost Centers می‌توانید آن‌ها را بر اساس خط محصول یا گروه کسب‌وکار (مانند فروش آنلاین یا فروش خرده‌فروشی) تفکیک کنید.

> Accounting > Chart of Cost Centers

#### Journal Entry

سندی شامل ثبت‌های دفتر کل (GL) است که جمع بدهکار و بستانکار آن ثبت‌ها با هم برابر است. در ERPNext می‌توانید پرداخت‌ها، برگشت‌ها و موارد دیگر را با Journal Entry ثبت کنید.

> Accounting > Journal Entry

#### Sales Invoice

صورتحسابی است که برای تحویل Item (کالا یا خدمت) به Customer ارسال می‌شود.

> Accounting > Sales Invoice

#### Purchase Invoice

صورتحسابی است که Supplier بابت تحویل Item (کالا یا خدمت) ارسال می‌کند.

> Accounting > Purchase Invoice

#### Currency

ERPNext امکان ثبت تراکنش با چند ارز را فراهم می‌کند، اما دفاتر حساب‌ها فقط یک ارز دارند. هنگام ثبت صورتحساب‌ها و پرداخت‌های ارزی، مبلغ با نرخ تبدیل تعیین‌شده به ارز پیش‌فرض تبدیل می‌شود.

> Setup > Currency

---

### فروش

#### Customer Group

دسته‌بندی مشتریان است که معمولاً بر اساس بخش بازار انجام می‌شود.

> Selling > Setup > Customer Group

#### Lead

فردی است که می‌تواند در آینده منبع کسب‌وکار باشد. Lead ممکن است به Opportunity منجر شود (از معنای «ممکن است به فروش بینجامد»).

> CRM > Lead

#### Opportunity

فروش بالقوه است (از معنای «فرصت برای کسب‌وکار»).

> CRM > Opportunity

#### Quotation

درخواست Customer برای دریافت قیمت یک Item یا خدمت است.

> Selling > Quotation

#### Sales Order

سندی است که شرایط تحویل و قیمت Item (محصول یا خدمت) را از سوی Customer تأیید می‌کند. تحویل‌ها، Work Orderها و صورتحساب‌ها بر مبنای Sales Order ایجاد می‌شوند.

> Selling > Sales Order

#### Territory

دسته‌بندی جغرافیایی برای مدیریت فروش است. می‌توانید برای Territoryها هدف تعیین کنید و هر فروش را به یک Territory پیوند دهید.

> Selling > Setup > Territory

#### Sales Partner

شخص ثالثی مانند توزیع‌کننده، فروشنده، همکار وابسته یا عامل کمیسیون است که معمولاً در ازای کمیسیون محصولات شرکت را می‌فروشد.

> Selling > Setup > Sales Partner

#### Sales Person

فردی است که محصول را به Customer معرفی می‌کند و معامله را نهایی می‌سازد. می‌توانید برای Sales Personها هدف تعیین کنید و آن‌ها را در تراکنش‌ها مشخص کنید.

> Selling > Setup > Sales Person

---

### خرید

#### Purchase Order

قراردادی است که از Supplier می‌خواهد Itemهای مشخصی را با هزینه، تعداد، تاریخ و شرایط تعیین‌شده تحویل دهد.

> Buying > Purchase Order

#### Material Request

درخواستی است که کاربر سامانه ثبت می‌کند یا ERPNext بر اساس سطح سفارش مجدد یا مقدار پیش‌بینی‌شده در Production Plan به‌طور خودکار برای خرید مجموعه‌ای از Itemها می‌سازد.

> Buying > Material Request

---

### انبار (موجودی)

#### Warehouse

انبار منطقی‌ای است که ثبت‌های موجودی در برابر آن انجام می‌شوند.

> Stock > Warehouse

#### Stock Entry

انتقال مواد از یک Warehouse، به یک Warehouse یا از Warehouseای به Warehouse دیگر است.

> Stock > Stock Entry

#### Delivery Note

فهرستی از Itemها و تعدادشان برای ارسال است. Delivery Note موجودی Itemها را از Warehouseای که کالا از آن ارسال می‌شود کاهش می‌دهد. معمولاً Delivery Note بر مبنای Sales Order ساخته می‌شود.

> Stock > Delivery Note

#### Purchase Receipt

سندی است که دریافت مجموعه‌ای از Itemها از Supplier را ثبت می‌کند و معمولاً به Purchase Order مربوط است.

> Stock > Purchase Receipt

#### Serial Number

شماره‌ای یکتا برای یک واحد مشخص از یک Item است.

> Stock > Serial Number

#### Batch

شماره‌ای برای گروهی از واحدهای یک Item است که ممکن است با هم خریداری یا تولید شده باشند.

> Stock > Batch

#### Stock Ledger Entry

جدولی یکپارچه برای تمام جابه‌جایی‌های مواد از یک انبار به انبار دیگر است. با ایجاد Stock Entry، Delivery Note، Purchase Receipt و Sales Invoice (POS)، این جدول به‌روز می‌شود.

#### Stock Reconciliation

موجودی چند Item را با استفاده از یک فایل صفحه‌گسترده (CSV) به‌روز می‌کند.

> Stock > Stock Reconciliation

#### Quality Inspection

سندی برای ثبت برخی ویژگی‌های یک Item هنگام دریافت از Supplier یا تحویل به Customer است.

> Stock > Quality Inspection

#### Item Group

دسته‌بندی Itemها است.

> Stock > Setup > Item Group

---

### تولید

#### Bill of Materials (BOM)

فهرستی از عملیات و Itemها به‌همراه تعداد موردنیاز برای تولید یک Item دیگر است. Bill of Materials (BOM) برای برنامه‌ریزی خریدها و محاسبهٔ بهای تمام‌شدهٔ محصول استفاده می‌شود.

> Manufacturing > BOM

#### Workstation

محلی است که یک عملیات BOM در آن انجام می‌شود. برای محاسبهٔ هزینهٔ مستقیم محصول کاربرد دارد.

> Manufacturing > Workstation

#### Work Order

سندی است که آغاز تولید تعداد مشخصی از یک Item را اعلام می‌کند.

> Manufacturing > Work Order

#### Production Planning Tool

ابزاری برای ایجاد خودکار Work Order و درخواست خرید بر اساس Sales Orderهای باز در یک بازهٔ زمانی است.

> Manufacturing > Production Planning Tool

---

### راه‌اندازی و سفارشی‌سازی

#### Custom Field

فیلدی است که کاربر روی یک فرم یا جدول تعریف می‌کند.

> Setup > Customize ERPNext > Custom Field

#### Global Defaults

بخشی است که در آن مقادیر پیش‌فرض پارامترهای مختلف سامانه را تعیین می‌کنید.

> Setup > Data > Global Defaults

#### Print Heading

عنوانی است که فقط برای چاپ روی یک تراکنش تنظیم می‌شود. برای نمونه، شاید بخواهید Quotation را با عنوان «پیشنهاد» یا «پیش‌فاکتور» چاپ کنید.

> Setup > Branding and Printing > Print Headings

#### Terms and Conditions

متن شرایط قرارداد شماست. تراکنش‌های فروش یا خرید ممکن است شرایطی داشته باشند که Supplier بر اساس آن کالا یا خدمات را به Customer ارائه می‌کند. می‌توانید Terms and Conditions را به تراکنش‌ها اعمال کنید تا هنگام چاپ سند نمایش داده شوند. برای آشنایی با Terms and Conditions، به مستندات مربوط مراجعه کنید.

> Selling > Setup > Terms and Conditions

#### Unit of Measure (UOM)

روشی برای اندازه‌گیری مقدار یک Item است؛ برای مثال Kg، No.، Pair یا Packet.

> Stock > Setup > UOM
