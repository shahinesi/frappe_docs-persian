---
title: "درخواست حضور و غیاب"
slug: "attendance-request"
source_url: "https://docs.frappe.io/hr/attendance-request"
source_id: "hr/attendance-request"
source_version: "c1f2bf9dee2ab0e1e16438b75fdb84c876b353e4fe2af2e0aff429efaaa7a24a"
source_updated: "2026-02-04"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

**Attendance Request** به کارکنان امکان می‌دهد برای روزهایی درخواست حضور و غیاب بفرستند که به دلایلی مانند مأموریت خارج از محل یا دورکاری، حضورشان ثبت نشده است. همچنین می‌توان از این درخواست برای اصلاح حضور و غیاب و جایگزین‌کردن رکوردهای موجود استفاده کرد.

برای دسترسی به Attendance Request، به این مسیر بروید:

> Home > Human Resources > Attendance > Attendance Request

## 1. پیش‌نیاز

پیش از ساخت درخواست حضور و غیاب، بهتر است مورد زیر را ایجاد کنید:

- [Employee](https://docs.frappe.io/hr/employee)

## 2. ساخت درخواست حضور و غیاب

1. به فهرست Attendance Request بروید و روی **New** کلیک کنید.
2. کارمندی را انتخاب کنید که درخواست را ثبت می‌کند.
3. **From Date** و **To Date** درخواست را وارد کنید.
4. اگر می‌خواهید حضور روزهای تعطیل بین این تاریخ‌ها هم ثبت شود، گزینهٔ **Include Holidays** را فعال کنید. این قابلیت از نسخهٔ 15 در دسترس است.
5. **Reason** را انتخاب و در صورت تمایل **Explanation** را وارد کنید.
6. سند را **Save** و سپس **Submit** کنید.

![درخواست حضور و غیاب](https://frappehr.com/files/attendance-request.png)

> **نکتهٔ 1:** اگر درخواست برای نیم‌روز است، گزینهٔ **Half Day** را علامت بزنید و تاریخ آن را وارد کنید.

> **نکتهٔ 2:** پس از ثبت درخواست، برای روزهایی که مشخص کرده‌اید سندهای Attendance ساخته می‌شوند.

![ثبت درخواست حضور و غیاب](https://frappehr.com/files/attendance-request-submission.png)

رکوردهای Attendance مربوطه به درخواست ثبت‌شده پیوند داده می‌شوند.

![پیوند رکوردهای Attendance به درخواست](https://frappehr.com/files/attendance-request-link.png)

اگر Attendance Request را لغو کنید، سندهای Attendance پیوندخورده‌ای که از آن ساخته شده‌اند نیز لغو خواهند شد.

![لغو درخواست حضور و غیاب](https://frappehr.com/files/attendance-request-cancelled.png)

## 3. قابلیت‌ها

### 3.1 جایگزینی یک رکورد Attendance موجود

فرض کنید ابزار حضور و غیاب خودکار کارمندی را غایب ثبت کرده است. اگر کارمند بخواهد رکورد حضور خود را اصلاح کند، می‌تواند درخواست بفرستد. پس از ثبت درخواست، رکورد Attendance به‌روز می‌شود:

![تغییر وضعیت حضور و غیاب](https://frappehr.com/files/changed%20status.png)

می‌توان ارسال درخواست را با [Workflowها](https://docs.erpnext.com/docs/v14/user/manual/en/setting-up/workflows) کنترل کرد تا پیش از اعمال، تأیید شود.

### 3.2 درخواست گروهی برای حضور و غیاب

کارکنان می‌توانند برای یک ماه یا یک هفتهٔ کامل درخواست حضور و غیاب بدهند. پس از ثبت درخواست، برای روزهای تعطیل یا روزهای مرخصی حضور ثبت نمی‌شود.

اگر می‌خواهید برای روزهای تعطیل نیز حضور ثبت شود، **Include Holidays** را فعال کنید.

![ثبت گروهی حضور و غیاب](https://frappehr.com/files/FYdSpw9.png)

هشدارهای مربوط به حضور و غیاب نیز در داشبورد درخواست نمایش داده می‌شوند:

![هشدارهای حضور و غیاب](https://frappehr.com/files/attendance-warnings.png)

## 4. موضوعات مرتبط

1. [Employee Attendance Tool](https://docs.frappe.io/hr/employee-attendance-tool)
2. [Shift Management](https://docs.frappe.io/hr/shift-management)
3. [Auto Attendance](https://docs.frappe.io/hr/auto-attendance)
4. [Upload Attendance](https://docs.frappe.io/hr/upload-attendance)
5. [Attendance](https://docs.frappe.io/hr/attendance)

---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe HR است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/hr/attendance-request). محتوای نوشتاری با انتساب به منبع و تحت شرایط CC BY-SA آن بازنشر شده است؛ نسخهٔ مجوز در سیاست منبع مشخص نشده است.
