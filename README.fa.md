# مستندات فارسی اکوسیستم Frappe

این مخزن، منبع اصلی Markdown فارسی و فرایند بازبینی/همگام‌سازی آن است. مخزن `frappe_docs/` در ریشه، محتوا و تاریخچهٔ قدیمی را حفظ می‌کند؛ محتوای تازه فقط زیر `content/fa/` افزوده می‌شود.

## ساختار

- `content/fa/<product>/`: صفحات فارسی؛ Markdown و ساختار پوشه‌ای سازگار با Wiki Git Sync.
- `sources/`: فهرست منابع رسمی، manifest و snapshot Markdown صفحه‌های ترجمه‌شده.
- `glossary/`: واژه‌نامهٔ مشترک فارسی.
- `scripts/`: کشف و به‌روزرسانی manifest، اعتبارسنجی محتوا و گزارش پیشرفت.

## جریان انتشار

`English source → Persian Markdown → Validation → Wiki Git Sync`

در Wiki یک Space آزمایشی بسازید و Git Sync یک‌طرفه را به این مخزن، شاخهٔ `master` و زیرپوشهٔ `content/fa` متصل کنید. Repo Git منبع اصلی می‌ماند و Wiki نمایش و جست‌وجو را فراهم می‌کند. تغییر یا حذف منبع فقط باید وضعیت بازبینی ترجمه را عوض کند؛ متن ترجمه در این مخزن جداگانه نگه‌داری می‌شود و Sync رسمی به این مخزن اجازهٔ بازنویسی آن را ندارد.

برای سازگاری با importer فعلی، frontmatter از `title`, `slug`, `order`, `published` و `draft` برای ساختار صفحه پشتیبانی می‌کند. فیلدهای انتساب و وضعیت ترجمه را در manifest نگه دارید و لینک منبع، انتساب و اعلام «ترجمهٔ غیررسمی» را در خود صفحه بیاورید؛ فیلدهای metadata دلخواه frontmatter توسط Wiki فعلی نادیده گرفته می‌شوند.

## Manifest و همگام‌سازی

`sources/manifest.json` از sitemap عمومی رسمی ساخته می‌شود. برای هر URL یک endpoint رسمی Markdown به‌شکل `<page-url>.md` ثبت شده است. اجرای `node scripts/hydrate-source-metadata.mjs` فراداده و digest را برای همهٔ endpointها واکشی می‌کند؛ `--resume` ادامهٔ اجرای نیمه‌تمام را ممکن می‌کند. برای snapshot کامل منبع، `node scripts/sync-source-snapshots.mjs --all` را اجرا کنید؛ برای تازه‌سازی کم‌درخواست فقط صفحه‌هایی که ترجمه دارند، از `--translated-only` استفاده کنید. URLهایی که از sitemap حذف شوند در manifest باقی می‌مانند و برای بازبینی علامت می‌خورند.

اگر snapshot قبلی موجود باشد و digest عوض شود، صفحه به `needs_update` می‌رود؛ فایل فارسی هیچ‌وقت توسط sync بازنویسی یا حذف نمی‌شود. خطاهای دریافت جداگانه در `sources/retrieval-errors.json` ثبت می‌شوند. وضعیت اولیهٔ همهٔ ترجمه‌ها `not_started` است.

## مجوز و انتساب

مجوز نرم‌افزار از مجوز محتوای هر منبع جداست. سیاست فعلی Frappe، مستندات را CC BY-SA معرفی می‌کند اما نسخه را مشخص نمی‌کند؛ عکس‌ها، گرافیک‌ها و نشان‌های تجاری مشمول مجوز جداگانه‌اند. هر صفحه باید مبدأ و پیوند آن را ذکر کند، اقتباس‌بودن و شرایط ShareAlike را اعلام کند و مجموعه به‌عنوان ترجمه‌ای غیررسمی معرفی شود. جزئیات در `CONTENT-LICENSE.md` و `sources/README.md` آمده است.


نسخهٔ منبع در manifest، SHA-256 خروجی رسمی Markdown است و commit گیت محسوب نمی‌شود. برای گزارش عددی از `node scripts/report-progress.mjs` و برای کنترل صفحات فارسی از `node scripts/validate-content.mjs` استفاده کنید.
