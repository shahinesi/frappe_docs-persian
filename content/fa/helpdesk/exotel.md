---
title: "یکپارچه‌سازی Exotel"
slug: "exotel"
source_url: "https://docs.frappe.io/helpdesk/exotel"
source_id: "helpdesk/exotel"
source_version: "1873dc814c695f2b15f1576e91c7ffe823c962ca1ed288086b39e0b61966ed27"
source_updated: "2026-05-21"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/helpdesk/exotel)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصاویر رابط کاربری صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

Exotel یک پلتفرم تلفن ابری است که به کسب‌وکارها امکان می‌دهد تماس صوتی، پیامک و گردش‌کارهای ارتباطی را بدون سخت‌افزار تلفنی سنتی مدیریت کنند. اتصال آن به Frappe Helpdesk این قابلیت‌های ارتباطی را با مدیریت ارتباط با مشتری ترکیب می‌کند تا تعامل با مشتریان در یک سامانه انجام شود.

## راه‌اندازی Exotel

برای پیکربندی Exotel در Helpdesk این مراحل را انجام دهید:

1. **اشتراک Exotel:** یک اشتراک فعال Exotel تهیه کنید. برای جزئیات به مستندات Exotel مراجعه کنید.
2. **اطلاعات دسترسی Exotel:** از حساب Exotel خود این اطلاعات را بردارید: `Account SID`، `Subdomain`، `API Key`، `API Token` و شمارهٔ موبایل Exotel (`Exophones`).
3. **تنظیمات:** منوی کشویی کنار نشان برند در بالا و سمت چپ را باز و **تنظیمات** را انتخاب کنید.
4. **Telephony تنظیمات:** به **Telephony تنظیمات** بروید و Exotel را فعال کنید. `Account SID`، `Subdomain`، `API Key`، `API Token`، `Webhook verify token`، شمارهٔ Exotel و شمارهٔ شخصی خود را وارد کنید. مقدار `Webhook verify token` دلخواه است و بعداً در پیکربندی گردش تماس ورودی Exotel استفاده خواهد شد. در همین مرحله می‌توانید ضبط تماس را نیز فعال کنید.

## پیکربندی گردش تماس ورودی Exotel

با افزودن یا حذف همین گردش تماس ورودی می‌توانید تماس‌های ورودی را فعال یا غیرفعال کنید.

برای اتصال API مربوط به Helpdesk به Exotel، این تنظیمات را در Exotel انجام دهید:

1. وارد حساب Exotel شوید و **App Bazar** را باز کنید.
2. برای ایجاد گردش تازه، یک **برنامه** جدید بسازید.
3. گردش تماس را مطابق نیازتان تنظیم کنید. برای آشنایی با اجزای آن می‌توانید راهنماهای [Dial Whom](https://support.exotel.com/support/solutions/articles/3000088074-working-with-connect-applet-dial-whom-)، [Passthru](https://support.exotel.com/support/solutions/articles/48283-working-with-passthru-applet) و [appletهای Flow Builder](https://developer.exotel.com/applet) را ببینید.
4. در **Dial Whom**، گروه کاربری را انتخاب کنید. گروه می‌تواند چند کارشناس داشته باشد. تماس ورودی به ترتیب افزودن اعضا به کارشناسان این گروه ارجاع می‌شود.
5. روش توزیع تماس‌ها را نیز تنظیم کنید.
6. در API اتصال و بخش **ایجاد کردن popup...**، نشانی زیر را به‌عنوان URL مربوط به Callback API جای‌گذاری کنید. به‌جای `<webhook-verify-token>` همان توکنی را بگذارید که در مرحلهٔ 4 راه‌اندازی Exotel ثبت کردید:

   ```text
   https://<yoursitename>/api/method/telephony.exotel.handler.handle_request?key=<webhook-verify-token>
   ```

7. پس از آن، زیر **After Call Conversation ends** یک **Passthru applet** اضافه و همان URL را وارد کنید.

   > گزینهٔ **Make Passthru Async** را علامت بزنید.

8. به همین ترتیب، زیر بخش **If nobody answers...** یک **Passthru applet** دیگر اضافه و همان URL را وارد کنید.

   > گزینهٔ **Make Passthru Async** را علامت بزنید.

9. گردش تماس را ذخیره کنید.
10. این **برنامه** تازه را به **ExoPhone**ای اختصاص دهید که تماس‌های کاری شما را دریافت می‌کند.

## برقراری تماس

در صفحهٔ تیکت، بالای جزئیات تیکت در بخش سمت راست دکمهٔ تماس وجود دارد. برای آغاز تماس از آن استفاده کنید؛ ابتدا مطمئن شوید فیلد **شماره موبایل** در بخش **Person** شامل کد کشور است.

> پیش از برقراری تماس، فرایند KYC خود را در Exotel تکمیل کنید. راهنمای [آزمایش تماس خروجی در حساب‌های آزمایشی](https://support.exotel.com/support/solutions/articles/110606-trial-accounts-how-do-i-test-outbound-calling-) را ببینید.

## پنجرهٔ تماس

هنگام برقراری یا دریافت تماس، پنجره‌ای باز می‌شود که این اطلاعات را نشان می‌دهد:

- نام تماس‌گیرنده
- شمارهٔ موبایل
- وضعیت تماس
- مدت تماس
- دکمه‌های اقدام (بستن یا کوچک‌کردن پنجره)

می‌توانید پنجره را کوچک کنید و به صفحه‌های دیگر بروید؛ پنجره همچنان در گوشهٔ سمت راست نوار پیمایش در دسترس می‌ماند.

---

**منبع:** [مستندات رسمی Frappe Helpdesk](https://docs.frappe.io/helpdesk/exotel). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر اصلی در این مخزن بازنشر نشده‌اند.
