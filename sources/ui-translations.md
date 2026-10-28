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

رشته‌های بررسی‌شده شامل `Employee`، `Department` و `Branch` در Frappe/ERPNext و `Employee Attendance Tool`، `Attendance`، `Attendance Request`، `Upload Attendance`، `Employee Checkin`، وضعیت‌های حضور، گزینهٔ `Include Holidays` و فیلدهای تاریخ در HRMS هستند. فایل HRMS از blob با شناسهٔ `a1da361e677ed162c9763c91c52707b2f661d53d` خوانده شد؛ commit فایل در شاخهٔ `develop` برابر `416e81b9ff31315b089043add7cd80d88e147459` است. وقتی `msgstr` خالی باشد یا در locale محصول رشته‌ای پیدا نشود، واژه‌نامه تصمیم دستی و بافت‌محور می‌گیرد؛ نباید برگردان نامطمئن یا یکسان‌سازی خودکار روی شناسه‌های فنی اعمال شود.

اسکریپت `scripts/prepare-wiki-links.mjs` همین واژه‌نامه را برای نثر فارسی و برچسب لینک‌ها به‌کار می‌برد؛ بلوک کد، کد درون‌خطی، مقصد لینک و متن انتساب منبع را دست‌نخورده نگه می‌دارد. برای لینک مستند رسمی، اگر مقصد ترجمه شده باشد، URL محلی Markdown و عنوان فارسی مقصد استفاده می‌شود؛ در غیر این صورت URL رسمی می‌ماند و عنوان صفحه پس از اعمال معادل‌های واژه‌نامه در برچسب می‌آید. عبارت‌های مرکب بدون رشتهٔ locale، مانند «مدیریت شیفت‌ها»، بافت‌محور و در واژه‌نامه ثبت می‌شوند.

`sources/ui-terms.json` snapshot اصطلاحات واقعی locale همان محصول است: برچسب‌هایی که در متن فارسی به‌شکل bold یا عنوان لینک آمده‌اند با `msgstr` غیرخالی و غیر fuzzy در locale همان محصول تطبیق داده شده‌اند. snapshot به صورت محصول‌محور اعمال می‌شود تا مثلاً ترجمهٔ `Settings` در Helpdesk جایگزین locale ERPNext نشود؛ hash فایل‌های منبع برای بازبینی و بازتولید ثبت شده است.
