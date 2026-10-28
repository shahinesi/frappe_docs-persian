---
title: "گسترش خودکارسازی‌ها"
slug: "extending-automations"
source_url: "https://docs.frappe.io/framework/automations/extending-automations"
source_id: "framework/automations/extending-automations"
source_version: "7d12de95b341951022a6ccf746df1082f3585e37231ca2da537d7785fac5fa27"
---

اپ‌ها می‌توانند جریان خودکارسازی را به سه روش گسترش دهند: **انتشار رخدادهایی** که جریان‌ها با آن‌ها آغاز شوند یا منتظرشان بمانند، **افزودن کنش‌ها** به فهرست گام‌ها و **افزودن رابطه‌ها** تا گام‌ها به رکوردهایی دسترسی پیدا کنند که طرح‌واره مستقیماً به آن‌ها پیوند ندارد. هر مورد را در فایل <code>hooks.py</code> اپ ثبت می‌کنید.

## انتشار رخدادها

هرجا در اپ شما اتفاق معناداری می‌افتد، <code>emit()</code> را فراخوانی کنید:

    from frappe.automation_engine import emit

    def on_معامله_won(معامله):
        emit("crm.معامله_won", doc=معامله, payload={"amount": معامله.معامله_value})

| آرگومان | توضیح |
| --- | --- |
| <code>event</code> | نام رخداد؛ از نام نقطه‌دار با پیشوند اپ مانند <code>crm.deal_won</code> استفاده کنید. |
| <code>doc</code> | سندی که رخداد دربارهٔ آن است. جریان‌های رخداد سفارشی که نوع سند دارند، روی همین سند اجرا می‌شوند. |
| <code>payload</code> | دیکشنری قابل‌تبدیل به JSON. جریان‌ها آن را در قالب‌ها با نام <code>payload</code> و در شرط‌ها با <code>context["payload"]</code> می‌خوانند. |
| <code>correlation_key</code> | اجراهایی را از سر می‌گیرد که در گام **WaitForEvent** متناظر مکث کرده‌اند. |

<code>emit()</code> دو کار انجام می‌دهد:

1. همهٔ جریان‌های فعال **رخداد سفارشی** مربوط به آن رخداد را در صف می‌گذارد.
2. اگر <code>correlation_key</code> داده شده باشد، هر اجرایی را که منتظر همان رخداد با همان کلید است از سر می‌گیرد.

خروجی آن <code>{"queued": &lt;count&gt;, "resumed": &lt;count&gt;}</code> است. اجراها پس از ثبت تراکنش جاری آغاز می‌شوند و اگر پیش از آن <code>emit()</code> را دوبار برای یک رکورد فراخوانی کنید، فقط یک اجرا ساخته می‌شود. اگر اندازهٔ payload از **حد بار دادهٔ رخداد** (`Event Payload Limit`) در تنظیمات خودکارسازی بیشتر باشد (پیش‌فرض 64 KB)، درخواست رد می‌شود.

### ازسرگیری جریان منتظر

یک جریان می‌تواند ایمیلی بفرستد و سپس در **WaitForEvent** برای <code>crm.email_replied</code> با کلید تطبیق <code>{{ doc.name }}</code> منتظر بماند. با رسیدن پاسخ، اپ شما همان رخداد را با همان کلید منتشر می‌کند:

    emit(
        "crm.ایمیل_replied",
        doc=سرنخ,
        payload={"communication": comm.نام},
        correlation_key=سرنخ.نام,
    )

اجرای منتظر بی‌درنگ از سر گرفته می‌شود و گام‌های بعدی می‌توانند payload را از <code>context["event"]["payload"]</code> بخوانند.

### ثبت رخدادها

<code>emit()</code> فقط رخدادهایی را می‌پذیرد که یک اپ نصب‌شده ثبت کرده باشد؛ مگر آن‌که گزینهٔ **اجازهٔ رخدادهای ثبت‌نشده** در تنظیمات خودکارسازی فعال باشد. رخدادها را در <code>hooks.py</code> به‌صورت نام ساده یا همراه فراداده‌ای ثبت کنید که رابط‌های سازنده بتوانند نمایش دهند:

    automation_events = [
        "crm.معامله_won",
        {
            "crm.ایمیل_replied": {
                "label": "ایمیل replied",
                "description": "A contact replied to an ایمیل sent from CRM",
                "subject": {"doctype_key": "reference_doctype", "نام_key": "reference_نام", "doctypes": ["CRM سرنخ", "CRM معامله"]},
            }
        },
    ]

فیلد <code>subject</code> به موتور می‌گوید رخداد دربارهٔ کدام رکورد است؛ این مقدار از payload خوانده می‌شود. با تعریف subject، جریان مربوط به CRM سرنخ روی همان سرنخی اجرا می‌شود که در payload نام برده شده، حتی اگر کدی که رخداد را منتشر کرده روی Communication کار می‌کرده باشد. اگر نوع subject ثابت است، به‌جای <code>doctype_key</code> از <code>"doctype": "CRM Lead"</code> استفاده کنید.

## افزودن کنش‌ها

از <code>AutomationAction</code> زیرکلاس بسازید و <code>execute</code> را پیاده‌سازی کنید:

    # my_app/automation.py
    from typing import ClassVar

    import frappe
    from frappe.automation_engine.اقدامات.base import AutomationAction, AutomationParamError, render_value


    class PostToChannel(AutomationAction):
        اقدام_type = "PostToChannel"
        label = "Post to Channel"
        description = "Post a message to a team channel."
        transactional = False  # it calls an external service
        params_schema: ClassVar[فهرست] = [
            {"fieldname": "channel", "label": "Channel", "fieldtype": "Data", "reqd": 1},
            {"fieldname": "message", "label": "Message", "fieldtype": "Small Text", "reqd": 1},
        ]

        def validate(self, params, doctype):
            if not params.get("channel"):
                raise AutomationParamError("Channel is required", fieldname="channel")

        def execute(self, doc, params, context):
            message = render_value(params["message"], doc, context)
            post_message(params["channel"], message)
            return f"Posted to {params['channel']}"

در <code>hooks.py</code> ثبت کنید:

    automation_اقدامات = ["my_app.automation.PostToChannel"]

ویژگی‌های کلاس:

| ویژگی | کاربرد |
| --- | --- |
| <code>action_type</code> | شناسهٔ یکتایی که در گام ذخیره می‌شود؛ پس از انتشار آن را تغییر ندهید. |
| <code>label</code> و <code>description</code> | در فهرست نوع اقدام و رابط‌های سازنده نمایش داده می‌شوند. |
| <code>params_schema</code> | فیلدهای پارامتر: <code>fieldname</code>، <code>label</code>، <code>fieldtype</code>، <code>options</code> و <code>reqd</code>. |
| <code>requires_document</code> | اگر کنش بدون سند محرک هم اجرا می‌شود، مثلاً در جریان زمان‌بندی‌شده، آن را <code>False</code> قرار دهید. |
| <code>applicable_doctypes</code> | کنش را به این DocTypeها محدود می‌کند؛ مقدار <code>None</code> یعنی همهٔ آن‌ها. |
| <code>supported_trigger_types</code> | کنش را به این نوع محرک‌ها محدود می‌کند؛ مقدار <code>None</code> یعنی همهٔ آن‌ها. |
| <code>transactional</code> | اگر اثر کنش با بازگردانی تراکنش پایگاه داده خنثی نمی‌شود، مانند درخواست HTTP یا ارسال پیام، آن را <code>False</code> کنید. در این صورت موتور اجرا را از ابتدا دوباره پخش نمی‌کند. |

متدها:

- <code>validate(params, doctype)</code>: هنگام ذخیرهٔ جریان و پیش از هر اجرا فراخوانی می‌شود. برای اشاره به پارامتر نامعتبر، <code>AutomationParamError</code> را همراه <code>fieldname</code> ایجاد کنید.
- <code>execute(doc, params, context)</code>: کار را انجام می‌دهد. برای گزارش اجرا یک رشتهٔ کوتاه برگردانید یا دیکشنری‌ای با کلید <code>detail</code> و خروجی‌های موردنیاز گام‌های بعدی برگردانید تا از <code>context["steps"][step_key]</code> خوانده شوند.
- <code>output_doctype(params)</code>: اگر کنش رکوردی می‌سازد، DocType آن را برگردانید. سپس **نام مستعار خروجی** (`Output Alias`) گام می‌تواند به رکورد جدید اشاره کند و گام‌های بعدی بر همان اساس اعتبارسنجی می‌شوند.

کنش با کاربر **اجرا به‌عنوان** (`Run As`) جریان اجرا می‌شود؛ بنابراین بررسی‌های عادی مجوز اعمال می‌شوند. <code>frappe.db.commit()</code> را فراخوانی نکنید؛ تراکنش در اختیار موتور است. برای مکث‌دادن به اجرا از درون کنش، <code>StopAutomation("reason", resume_after=seconds)</code> را ایجاد کنید.

## افزودن رابطه‌ها

فیلدهای پیوند، پیوند پویا و پیوند جدول فرزند به‌طور خودکار و در هر دو جهت به رابطه تبدیل می‌شوند. فقط زمانی provider ثبت کنید که طرح‌واره رابطه را بیان نمی‌کند، مثلاً رکوردی که با نشانی ایمیل پیدا می‌شود:

    from frappe.automation_engine.relationships import AutomationRelationshipProvider


    class ContactRelationships(AutomationRelationshipProvider):
        def get_definitions(self, source_doctype):
            if source_doctype != "Communication":
                return []
            return [{
                "نام": "sender_سرنخ",
                "label": "سرنخ (by sender ایمیل)",
                "هدف_doctype": "CRM سرنخ",
                "cardinality": "one",
            }]

        def resolve(self, source_doc, relationship, params):
            نام = frappe.db.get_value("CRM سرنخ", {"ایمیل": source_doc.sender})
            return [{"doctype": "CRM سرنخ", "نام": نام}] if نام else []

در <code>hooks.py</code> ثبت کنید:

    automation_relationships = ["my_app.automation.ContactRelationships"]
    automation_relationship_ignore = ["My Log DocType"]

- مقدار <code>cardinality</code> یکی از <code>one</code> یا <code>many</code> است. فقط رابطه‌های <code>one</code> را می‌توان به‌عنوان نام مستعار مقصد گام به کار برد. رابطه‌های <code>many</code> برای شرط‌های رکوردهای مرتبط‌اند؛ برای کارایی روی جدول‌های بزرگ، با بازنویسی <code>query()</code> آن‌ها را در SQL پالایش کنید.
- تعریفی با همان <code>name</code> یک رابطهٔ مشتق‌شده را جایگزین می‌کند؛ بنابراین اپ می‌تواند برچسب یک پیوند طرح‌واره را تغییر دهد.
- هر مرجعی که provider برمی‌گرداند، پیش از استفادهٔ گام از نظر وجود رکورد و مجوز خواندن بررسی می‌شود.
- <code>automation_relationship_ignore</code>، DocTypeهایی مانند گزارش‌ها را از رابطه‌های مشتق‌شده پنهان می‌کند.

## جلوگیری از اجرا و بررسی وضعیت خودکارسازی‌ها

    from frappe.automation_engine import is_فعال, skip_automations

    if is_فعال():
        ...

    with skip_automations():
        doc.ذخیره()  # برای این ذخیره هیچ جریان خودکارسازی اجرا نمی‌شود

---

**منبع:** [گسترش خودکارسازی‌ها](https://docs.frappe.io/framework/automations/extending-automations). این صفحه ترجمهٔ غیررسمی است. محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود.
