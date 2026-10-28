# مرجع ترجمهٔ برچسب‌های رابط کاربری

برای نام گزینه‌ها، وضعیت‌ها، DocTypeها و مسیرهای ناوبری، برگردان فارسی را از فایل locale همان محصول می‌گیریم؛ نام برندها، شناسه‌های API، نام کلاس‌ها و شناسه‌های لازم در کد را ترجمه نمی‌کنیم.

| محصول | فایل فارسی | منبع |
|---|---|---|
| Frappe Framework | `frappe/locale/fa.po` | [مخزن رسمی Frappe](https://github.com/frappe/frappe/blob/develop/frappe/locale/fa.po) |
| ERPNext | `erpnext/locale/fa.po` | [مخزن رسمی ERPNext](https://github.com/frappe/erpnext/blob/develop/erpnext/locale/fa.po) |
| Frappe HR | `hrms/locale/fa.po` | [مخزن رسمی HRMS](https://github.com/frappe/hrms/blob/a1da361e677ed162c9763c91c52707b2f661d53d/hrms/locale/fa.po) |

رشته‌های بررسی‌شده شامل `Employee`، `Department` و `Branch` در Frappe/ERPNext و `Employee Attendance Tool`، `Attendance`، `Attendance Request`، وضعیت‌های حضور، گزینهٔ `Include Holidays` و فیلدهای تاریخ در HRMS هستند. وقتی `msgstr` خالی باشد یا در locale محصول رشته‌ای پیدا نشود، واژه‌نامه باید تصمیم دستی و بافت‌محور داشته باشد؛ نباید برگردان نامطمئن یا یکسان‌سازی خودکار روی شناسه‌های فنی اعمال شود.

اسکریپت `scripts/prepare-wiki-links.mjs` همین واژه‌نامه را برای نثر فارسی و برچسب لینک‌ها به‌کار می‌برد؛ بلوک کد، کد درون‌خطی، مقصد لینک و متن انتساب منبع را دست‌نخورده نگه می‌دارد. برای لینک مستند رسمی، اگر مقصد ترجمه شده باشد، URL محلی Markdown و عنوان فارسی مقصد استفاده می‌شود؛ در غیر این صورت URL رسمی می‌ماند و برچسب غیر فارسی به نام فارسی محصول تبدیل می‌شود.
