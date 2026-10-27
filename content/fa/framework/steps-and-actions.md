---
title: "گام‌ها و کنش‌ها"
slug: "steps-and-actions"
source_url: "https://docs.frappe.io/framework/automations/steps-and-actions"
source_id: "framework/automations/steps-and-actions"
source_version: "a970ea6a3baec81409684cd154dd58e22d48958da3be05e6c4d842d6130994b5"
---

جدول **Actions** در Automation Flow گام‌هایی را فهرست می‌کند که هر اجرا از بالا به پایین انجام می‌دهد. هر ردیف **Step Type** دارد و در گام‌های کنشی، **Action Type** و **Parameters** نیز مشخص می‌شوند.

## انواع گام

| Step Type | کارکرد |
| --- | --- |
| **Action** | یک کنش اجرا می‌کند، مانند تنظیم فیلد یا ارسال ایمیل. |
| **Wait** | اجرا را برای مدتی معین متوقف می‌کند و سپس به گام بعدی می‌رود. |
| **WaitForEvent** | اجرا را تا انتشار رخداد منطبق از سوی یک اپ یا پایان مهلت متوقف می‌کند. |
| **If** | شرط را ارزیابی می‌کند و فقط گام‌های شاخهٔ منطبق را اجرا می‌کند. |

### Wait

در **Parameters** مدت انتظار را وارد کنید:

    {"value": 2, "unit": "Days"}

مقدار <code>unit</code> یکی از <code>Seconds</code>، <code>Minutes</code>، <code>Hours</code> یا <code>Days</code> است. هنگام مکث، وضعیت اجرا **Waiting** نمایش داده می‌شود. هنگام ازسرگیری، سند دوباره و با آخرین داده‌ها بارگذاری می‌شود؛ بنابراین گام‌های بعدی تغییراتی را که در زمان انتظار رخ داده‌اند می‌بینند.

### WaitForEvent

این گام تا زمانی مکث می‌کند که اپ رخدادی با کلید تطبیق یکسان منتشر کند:

    {
      "event_name": "crm.email_replied",
      "correlation_key": "{{ doc.name }}",
      "timeout_value": 3,
      "timeout_unit": "Days"
    }

کلید تطبیق هنگام رسیدن اجرا به این گام پردازش می‌شود و اجرا زمانی از سر گرفته می‌شود که اپ <code>emit()</code> را با همان رخداد و کلید فراخوانی کند. اگر مهلت زودتر تمام شود، اجرا به‌هرحال از سر گرفته خواهد شد. گام‌های بعدی می‌توانند نتیجه را از <code>context.event</code> بخوانند: مقدار <code>outcome</code> برابر <code>Matched</code> یا <code>Timed Out</code> است و <code>payload</code> داده‌های رخداد را نگه می‌دارد.

یک کاربرد متداول: اگر مشتری پاسخ نداده باشد، پیام پیگیری بفرستید. برای این کار پس از انتظار، یک گام If با شرط <code>context["event"]["outcome"] == "Timed Out"</code> اضافه کنید.

### If

گام If به **Step Condition** نیاز دارد. برای گام‌های متعلق به آن، شمارهٔ ردیف If را در **Parent Step** و مقدار **If** یا **Else** را در **Branch** بگذارید. شاخهٔ If با درست‌بودن شرط و شاخهٔ Else با نادرست‌بودن آن اجرا می‌شود. گام‌هایی که Parent Step ندارند همیشه اجرا می‌شوند.

| شماره | Step Type | کنش | Parent Step | Branch |
| ---: | --- | --- | ---: | --- |
| 1 | If | شرط <code>doc.grand_total &gt; 10000</code> |  |  |
| 2 | Action | Assign to User: <code>manager@example.com</code> | 1 | If |
| 3 | Action | Assign to User: <code>sales@example.com</code> | 1 | Else |
| 4 | Action | Send Notification |  |  |

گام‌های If را می‌توان تو‌در‌تو قرار داد. شاخه فقط یک‌بار، هنگام رسیدن اجرا به گام If، تعیین می‌شود و پس از Wait دوباره ارزیابی نمی‌شود.

## شرط گام

هر گام می‌تواند **Step Condition** داشته باشد؛ عبارتی به زبان Python که باید درست باشد تا گام اجرا شود. در غیر این صورت گام با وضعیت **Skipped** ثبت می‌شود و اجرا ادامه می‌یابد. عبارت می‌تواند این مقادیر را بخواند:

- <code>doc</code>: سندی که محرک اجرای جریان بوده است.
- <code>target</code>: رکوردی که گام روی آن عمل می‌کند.
- <code>context</code>: وضعیت اجرا، از جمله <code>context["steps"]</code> که خروجی گام‌های قبلی را با کلید گام نگه می‌دارد.

## کنش‌ها

این کنش‌ها به‌صورت پیش‌فرض در چارچوب اصلی عرضه می‌شوند. اپ‌های دیگر می‌توانند با <code>hooks.py</code> کنش اضافه کنند؛ به [گسترش خودکارسازی‌ها](https://docs.frappe.io/framework/automations/extending-automations) مراجعه کنید.

| Action Type | کارکرد | پارامترهای کلیدی |
| --- | --- | --- |
| **Set Field Value** | یک یا چند فیلد مقصد را تنظیم و سند را ذخیره می‌کند. | <code>field</code> و <code>value</code> یا <code>values</code> به‌شکل نگاشت. |
| **Increment Field Value** | مقداری عددی به یک فیلد عددی می‌افزاید. | <code>field</code> و <code>amount</code>؛ برای تفریق مقدار منفی بدهید. |
| **Create Document** | سند جدیدی از هر نوع درج می‌کند. | <code>doctype</code> و <code>values</code>. |
| **Send Notification** | ایمیل یا اعلان سامانه می‌فرستد. | <code>channel</code> (مقدار <code>Email</code> یا <code>System</code>)، <code>recipients</code>، <code>subject</code> و <code>message</code> یا <code>email_template</code>. |
| **Assign to User** | رکورد مقصد را به یک یا چند کاربر واگذار می‌کند. | <code>assign_to</code> و <code>description</code>. |
| **Call Webhook** | درخواست HTTP می‌فرستد. | <code>url</code>، <code>method</code>، <code>headers</code>، <code>payload</code> و <code>timeout</code>. |
| **Run Script** | کد Python اجرا می‌کند. | <code>server_script</code> (یک API Server Script) یا <code>script</code> درون‌خطی. |

### نمونه‌ها

تنظیم هم‌زمان دو فیلد:

    {"values": {"status": "Replied", "priority": "High"}}

ایجاد یک ToDo برای پیگیری:

    {
      "doctype": "ToDo",
      "values": {
        "description": "Call {{ doc.lead_name }}",
        "reference_type": "{{ doc.doctype }}",
        "reference_name": "{{ doc.name }}",
        "allocated_to": "{{ doc.lead_owner }}"
      }
    }

ارسال ایمیل به مالک سند و افراد مسئول:

    {
      "channel": "Email",
      "recipients": ["@owner", "@assignees", "team@example.com"],
      "subject": "{{ doc.name }} was closed",
      "message": "<p>{{ doc.name }} was closed on {{ frappe.utils.nowdate() }}.</p>"
    }

مقادیر <code>@owner</code> و <code>@assignees</code> هنگام اجرای گام از روی سند resolve می‌شوند. این مقادیر سند را همان‌طور می‌خوانند که در آغاز اجرا (یا پس از آخرین Wait) بارگذاری شده است؛ بنابراین واگذاری‌ای که گام قبلی همین اجرا انجام داده هنوز در آن‌ها دیده نمی‌شود.

## قالب‌ها

پارامترهای متنی از Jinja پشتیبانی می‌کنند. متغیرهای در دسترس:

- <code>doc</code> و <code>target</code>: رکوردی که گام روی آن عمل می‌کند.
- <code>trigger</code>: سندی که اجرا را آغاز کرده است.
- <code>payload</code>: دادهٔ یک رخداد سفارشی یا برنامهٔ زمان‌بندی.
- <code>context</code>: وضعیت اجرا، شامل <code>context.steps.&lt;step_key&gt;</code> برای خروجی گام‌های قبلی.

## عمل روی رکوردهای دیگر

به‌طور پیش‌فرض، گام روی سند محرک عمل می‌کند. برای عمل روی رکورد پیوندشده، در بخش **Relationships** نام مستعاری تعریف کنید و **Target** گام را روی آن بگذارید:

    [{"alias": "customer", "relationship": "customer"}]

فیلدهای Link، Dynamic Link و پیوند جدول فرزند به‌طور خودکار و با نام فیلد در دسترس‌اند. نام پیوندهای معکوس به‌شکل <code>&lt;doctype&gt;_via_&lt;field&gt;</code> است؛ برای نمونه <code>crm_deal_via_lead</code>. اپ‌ها می‌توانند رابطه‌های بیشتری ثبت کنند؛ به [گسترش خودکارسازی‌ها](https://docs.frappe.io/framework/automations/extending-automations) مراجعه کنید.

گام **Create Document** همچنین می‌تواند **Output Alias** تعیین کند. گام‌های بعدی می‌توانند سند ایجادشده را به‌عنوان مقصد بگیرند.

## مدیریت خطا

- **Stop on Error** (به‌طور پیش‌فرض روشن): نخستین گام ناموفق، اجرا را متوقف می‌کند و وضعیت آن **Failed** می‌شود. برای ادامهٔ اجرا این گزینه را خاموش کنید؛ در این صورت وضعیت اجرا **Partially Failed** خواهد بود.
- هر گام در savepoint جداگانه اجرا می‌شود؛ بنابراین تغییرات پایگاه دادهٔ گام ناموفق بازگردانده می‌شود، اما تغییرات گام‌های قبلی باقی می‌مانند.
- **Call Webhook** و **Run Script** می‌توانند به بیرون از پایگاه داده دسترسی پیدا کنند. پس از اجرای یکی از آن‌ها، جریان از ابتدا دوباره اجرا نمی‌شود تا مثلاً webhook دوبار فرستاده نشود.
- **Call Webhook** نشانی‌های شبکهٔ خصوصی و داخلی را نمی‌پذیرد و حداکثر پنج تغییرمسیر را دنبال می‌کند. کد پاسخ 400 یا بالاتر باعث شکست گام می‌شود.
- برای **Run Script** باید Server Scripts فعال باشد (با دستور <code>bench set-config -g server_script_enabled 1</code>) و فقط System Manager می‌تواند اسکریپت درون‌خطی بنویسد. اسکریپت می‌تواند <code>doc</code>، <code>target</code>، <code>trigger</code>، <code>payload</code> و <code>context</code> را بخواند و برای انتشار خروجی در گام‌های بعدی، کلیدهایی در <code>result</code> تنظیم کند. فراخوانی <code>frappe.db.commit()</code> مجاز نیست.

## اجرای آزمایشی

در جریان ذخیره‌شده روی **Test Run** کلیک و یک سند انتخاب کنید. جریان واقعاً روی آن اجرا می‌شود، اما سپس **تمام تغییرات بازگردانده می‌شوند**. نتیجه وضعیت هر گام، پیام‌ها و مقادیر شرط‌هایی را که خوانده شده‌اند نشان می‌دهد.

در اجرای آزمایشی، گام‌های Wait شبیه‌سازی می‌شوند و Call Webhook درخواستی را که *ارسال می‌کرد* گزارش می‌دهد، بی‌آن‌که آن را واقعاً بفرستد.

---

**منبع:** [مستندات رسمی Frappe Framework](https://docs.frappe.io/framework/automations/steps-and-actions). این صفحه ترجمهٔ غیررسمی است. محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
