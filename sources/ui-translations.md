# مرجع ترجمهٔ برچسب‌های رابط کاربری

برای نام گزینه‌ها، وضعیت‌ها، DocTypeها و مسیرهای ناوبری، برگردان فارسی را از فایل locale همان محصول می‌گیریم؛ نام برندها، شناسه‌های API، نام کلاس‌ها و شناسه‌های لازم در کد را ترجمه نمی‌کنیم.

| محصول | فایل فارسی | منبع |
|---|---|---|
| Frappe Framework | `frappe/locale/fa.po` | [مخزن رسمی Frappe](https://github.com/frappe/frappe/blob/develop/frappe/locale/fa.po) |
| ERPNext | `erpnext/locale/fa.po` | [مخزن رسمی ERPNext](https://github.com/frappe/erpnext/blob/develop/erpnext/locale/fa.po) |
| Frappe HR | `hrms/locale/fa.po` | [مخزن رسمی HRMS](https://github.com/frappe/hrms/blob/a1da361e677ed162c9763c91c52707b2f661d53d/hrms/locale/fa.po) |
| Helpdesk | `helpdesk/locale/fa.po` | [مخزن رسمی Helpdesk](https://github.com/frappe/helpdesk/blob/develop/helpdesk/locale/fa.po) |
| Insights | `insights/locale/fa.po` | [مخزن رسمی Insights](https://github.com/frappe/insights/blob/develop/insights/locale/fa.po) |
| CRM | `crm/locale/fa.po` | [مخزن رسمی CRM](https://github.com/frappe/crm/blob/develop/crm/locale/fa.po) |
| Builder | `builder/locale/fa.po` | [مخزن رسمی Builder](https://github.com/frappe/builder/blob/develop/builder/locale/fa.po) |
| Learning | `lms/locale/fa.po` | [مخزن رسمی Learning](https://github.com/frappe/lms/blob/develop/lms/locale/fa.po) |
| Drive | `drive/locale/fa.po` | [مخزن رسمی Drive](https://github.com/frappe/drive/blob/develop/drive/locale/fa.po) |
| Frappe Books | `translations/fa.csv` | [مخزن رسمی Frappe Books](https://github.com/frappe/books/blob/master/translations/fa.csv) |

رشته‌های رابط از عنوان‌ها، برچسب‌های پررنگ، پیوندها، گزینه‌های فهرست و سلول‌های جدول در Markdown رسمی استخراج می‌شوند. نگاشت `framework` برای همهٔ بخش‌ها پایه است؛ ERPNext آن را به ارث می‌برد، HR علاوه بر آن از ERPNext و سپس HRMS استفاده می‌کند، و ترجمهٔ محصول در اولویت است. `scripts/refresh-ui-terms.mjs` فایل‌های زندهٔ locale را دریافت می‌کند: فایل‌های `.po` برای برنامه‌های Frappe و فایل CSV رسمی Frappe Books؛ رشته‌های ترجمه‌شدهٔ معتبر را برمی‌گزیند و hash هر فایل را در snapshot ثبت می‌کند. مقادیر دستیِ بازبینی‌شده در `curated_terms` جداگانه ثبت می‌شوند.

در locale فعلی Frappe، `Department` به «دپارتمان» ترجمه شده، اما `Branch` رشتهٔ خالی دارد؛ بنابراین «شعبه» یک برگردان دستی در واژه‌نامه است و نباید به locale رسمی نسبت داده شود؛ بررسی فایل فارسی HRMS نیز برای `Branch` برچسبِ ترجمه‌شدهٔ غیرخالی نشان نداد. در locale Helpdesk نیز رشته‌های `HD Customer`، `HD Customer Manager`، `HD Ticket`، `HD Ticket Type`، `HD Ticket Status` و `HD Settings` مقدار فارسی ندارند. برای متن راهنما معادل‌های فارسیِ ثبت‌شده در snapshot به‌کار می‌روند؛ شناسه‌های فنی در بلوک‌ها و عبارت‌های کد دست‌نخورده می‌مانند. [فایل fa.po در Frappe Framework](https://github.com/frappe/frappe/blob/develop/frappe/locale/fa.po)، [فایل fa.po در Helpdesk](https://github.com/frappe/helpdesk/blob/develop/helpdesk/locale/fa.po).

اسکریپت `scripts/prepare-wiki-links.mjs` همین واژه‌نامه را برای نثر فارسی و برچسب لینک‌ها به‌کار می‌برد؛ بلوک کد، کد درون‌خطی، مقصد لینک و متن انتساب منبع را دست‌نخورده نگه می‌دارد. برای لینک مستند رسمی، اگر مقصد ترجمه شده باشد، URL محلی Markdown و عنوان فارسی مقصد استفاده می‌شود؛ در غیر این صورت URL رسمی می‌ماند و عنوان صفحه پس از اعمال معادل‌های واژه‌نامه در برچسب می‌آید. عبارت‌های مرکب بدون رشتهٔ locale، مانند «مدیریت شیفت‌ها»، بافت‌محور و در واژه‌نامه ثبت می‌شوند.

`sources/ui-terms.json` snapshot اصطلاحات واقعی locale همان محصول است: برچسب‌هایی که در متن فارسی به‌شکل bold یا عنوان لینک آمده‌اند با `msgstr` غیرخالی و غیر fuzzy در locale همان محصول تطبیق داده شده‌اند. snapshot به صورت محصول‌محور اعمال می‌شود تا مثلاً ترجمهٔ `Settings` در Helpdesk جایگزین locale ERPNext نشود؛ hash فایل‌های منبع برای بازبینی و بازتولید ثبت شده است.
