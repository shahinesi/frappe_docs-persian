---
title: "کنش‌های سفارشی"
slug: "custom-actions"
source_url: "https://docs.frappe.io/helpdesk/custom-actions"
source_id: "helpdesk/custom-actions"
source_version: "1927d36d5a41d516ca7a4a5020dd825967942c9aedd9f9363ac051a3ba5d602f"
source_updated: "2026-10-23"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات Frappe Helpdesk است. [کنش‌های سفارشی](https://docs.frappe.io/helpdesk/custom-actions)
> متن این صفحه ترجمه و اقتباسی از منبع بالاست و تحت شرایط CC BY-SA آن منبع بازنشر می‌شود (نسخه در سیاست منبع مشخص نشده است). این ترجمه مستقل و غیررسمی است.
>
> تصاویر رابط کاربری صفحهٔ منبع بازنشر نشده‌اند؛ مجوز جداگانهٔ آن‌ها تأیید نشده است.

کنش‌های سفارشی به شما امکان می‌دهند کارهای مشخصی را مستقیماً از صفحهٔ تیکت انجام دهید. این کارها می‌توانند از یکپارچه‌سازی با اپ‌های خارجی تا به‌روزرسانی داده‌های تیکت یا ساخت اسناد مرتبط را شامل شوند.

## ایجاد کنش سفارشی

کنش‌های سفارشی با فرم Script در میزکار پیاده‌سازی می‌شوند:

1. **رفتن به میزکار:** به میزکار بروید و **اسکریپت فرم Helpdesk** را باز کنید.
2. **انتخاب نوع سند:** DocType موردنظر، مانند تیکت، را انتخاب کنید تا کد پایه نمایش داده شود.
3. **اعمال بر:** گزینهٔ **فرم** را انتخاب کنید.
4. **تعریف کنش:** روش‌های مختلف تعریف کنش در ادامه آمده‌اند.

### دکمهٔ تکی

این کد یک دکمه با عنوان **بازکردن در میزکار** می‌سازد که تیکت فعلی را در زبانه‌ای جدید از مرورگر باز می‌کند.

![اسکریپت دکمهٔ معمولی](https://docs.frappe.io/files/Normal%20Button%20Script.png)

```js
const actions = [{
"label": "Open in Desk",
"onClick": () => {
let URL = `https://frappehelpdesk.frappe.cloud/app/hd-ticket/${doc.name}`
window.open(URL, '_blank')
},
"variant": 'solid' | 'subtle' | 'outline' | 'ghost',
"theme" : 'gray' | 'blue' | 'green' | 'red'
}]
```

![دکمهٔ معمولی](https://docs.frappe.io/files/Normal%20Button.png)

دکمه‌های یک گروه زیر گزینهٔ <code>options</code> فهرست می‌شوند. در اسکریپت‌های قدیمی‌تر نام این کلید <code>items</code> است که همچنان کار می‌کند.

### کنش‌های گروه‌بندی‌شده

این کد گروهی از دکمه‌ها را زیر منوی سه‌نقطه‌ای با عنوان **افزودن** پنهان می‌کند. با کلیک روی **بازکردن تحلیل هفتگی** یا **بازکردن تحلیل مقاله** تابع onClick متناظر اجرا می‌شود (تعریف توابع در جای دیگری انجام می‌شود).

![اسکریپت منوی سه‌نقطه‌ای](https://docs.frappe.io/files/Three%20dots%20script.png)

```js
const actions = [
{
group: 'Reports',
hideLabel: true,
options: [
{
label: 'Open Weekly Analysis',
onClick: () => {},
},
{
label: 'Open Articles Analytics',
onClick: () => {},
},
],
},
{
group: 'Ticket',
options: [
{
label: 'Create a new ticket',
onClick: () => {},
},
// suggest some action other than open in fc
{
label: 'Open Customer Details',
onClick: () => {},
},
],
},
]
```

![منوی کشویی سه‌نقطه‌ای](https://docs.frappe.io/files/Drop%20down%20three%20dots.png)

### کنش‌های گروهی با عنوان

این کد گروهی از دکمه‌ها را زیر دکمهٔ کشویی **گزارش‌ها** پنهان می‌کند. با انتخاب **بازکردن تحلیل هفتگی** یا **بازکردن تحلیل مقاله** تابع onClick مربوط اجرا می‌شود.

![اسکریپت دکمهٔ کشویی](https://docs.frappe.io/files/Button%20Dropdown%20script.png)

```js
const actions = [{
"buttonLabel": "Reports",
"group": "Add",
"hideLabel": true,
"options": [
{
label: 'Open Weekly Analysis',
onClick: () => {},
},
{
label: 'Open Articles Analytics',
onClick: () => {},
},
]
}]
```

![دکمهٔ کشویی](https://docs.frappe.io/files/Dropdown%20button.png)

### ترکیب کنش‌ها

می‌توانید دکمه‌های تکی و کنش‌های گروهی را در یک فهرست ترکیب کنید و آن را به‌عنوان ویژگی **اقدامات** بفرستید.

![اسکریپت کنش‌های ترکیبی](https://docs.frappe.io/files/Combined%20Script.png)

![رابط کنش‌های ترکیبی](https://docs.frappe.io/files/Combined%20Script%20UI.png)

## استفاده از context و کنش‌ها

پارامتر <code>doc</code> اطلاعات صفحهٔ تیکت فعلی را فراهم می‌کند. برای ساخت کنش سفارشی می‌توانید از این context و قابلیت‌ها استفاده کنید:

- <code>doc</code>: خواندن مقدارهای فیلد تیکت، مانند <code>doc.raised_by</code> و <code>doc.customer</code>.
- <code>$dialog</code>: بازکردن پنجرهٔ تأیید همراه کنش‌ها. هنگام ساخت پنجره می‌توانید کلیدهای title، message، html و اقدامات را بدهید. تابع onClick هر کنش پنجره، <code>{ close }</code> را دریافت می‌کند؛ برای بستن پنجره <code>close()</code> را فراخوانی کنید. شکل قدیمی‌تر <code>onClick(close)</code> نیز همچنان کار می‌کند.
- <code>updateField</code>: به‌روزرسانی یک فیلد مشخص؛ برای نمونه <code>updateField('status', 'closed', callback)</code>.
- <code>router</code>: رفتن به صفحه‌ای دیگر با Vue Router.
- <code>call</code>: فراخوانی API از سمت کاربر. می‌توانید نقطهٔ پایانی سمت سرور را در اسکریپت سرور تعریف کنید.
- <code>toast</code>: نمایش پیام کوتاه با <code>toast.success()</code>، <code>toast.error()</code> یا <code>toast.info()</code>.
- <code>createToast</code>: نمایش پیام موفقیت یا خطا؛ پوشش قدیمی‌تر برای toast که هنوز پشتیبانی می‌شود.

### مقدارهای فیلد در DocType مربوط به اسکریپت فرم Helpdesk

- **فعال**: اسکریپت را فعال می‌کند. اگر گزینهٔ دیگری برای تیکت انتخاب نشده باشد، اسکریپت در نمای تیکت کارشناس پشتیبانی اعمال می‌شود.
- **اعمال در پرتال مشتری**: اسکریپت را در نمای تیکت مشتری اعمال می‌کند.
- **اعمال در صفحهٔ جدید**: اسکریپت را هنگام ایجاد تیکت جدید اجرا می‌کند.

![تنظیمات اسکریپت فرم](https://docs.frappe.io/files/Screenshot%202025-03-29%20at%209.02.54%20PM.png)

- **اعمال بر دانش محور**: اسکریپت را برای همهٔ خوانندگان در صفحه‌های پایگاه دانش پرتال مشتری اجرا می‌کند. اسکریپت می‌تواند دکمه‌ها و پیوندهایی به سربرگ اضافه کند. به [تنظیمات پایگاه دانش](knowledge-base-settings.md#add-custom-buttons-and-links-with-a-form-script) مراجعه کنید.

### پشتیبانی توابع در صفحه‌های مختلف

| تابع | تیکت کارشناس | تیکت مشتری | تیکت جدید |
| --- | --- | --- | --- |
| call | ✓ | ✓ | ✓ |
| updateField | ✓ | ✓ | ✗ |
| router | ✓ | ✓ | ✓ |
| $dialog | ✓ | ✓ | ✓ |
| toast | ✓ | ✓ | ✗ |
| createToast | ✓ | ✓ | ✗ |
| applyFilters | ✗ | ✗ | ✓ |

## نمونه: کنش‌های سفارشی برای مدیریت تیکت

این نمونه چند کنش سفارشی برای مدیریت معاملهها را نشان می‌دهد:

![نمونهٔ پنجره‌های کنش](https://docs.frappe.io/files/Dialogs.gif)

```
function setupForm({
  doc,
  updateField,
  call,
  router,
  $dialog,
  createToast,
}) {
  const actions = [
    {
      group: "Actions",
      hideLabel: true,
      options: [
        {
          label: "Open FC Info",
          onClick: () => {
            // Call API to get custom information
            call("show_custom_info", {
              ticket: doc.name,
              // Include relevant fields for fetching data
            }).then((data) => {
              if (data.name) {
                $dialog({
                  title: data?.title,
                  message: data?.message,
                  html: data?.html, // this field can be in HTML format
                  actions: [
                    {
                      label: "Open in FC",
                      variant: "solid",
                      onClick() {
                        let URL = `http://helpdesk:8010/app/hd-ticket/${doc?.name}`;
                        window.open(URL, "_blank");
                      },
                    },
                    //   add more actions
                  ],
                });
              }
            });
          },
        },
        {
          label: "Close this ticket",
          onClick: () => {
            $dialog({
              title: "Close this ticket?",
              message: "Are you sure you want to mark this close this ticket?",
              actions: [
                {
                  label: "Close",
                  theme: "red",
                  variant: "solid",
                  onClick({ close }) {
                    updateField("status", "Closed", () => {
                      createToast({
                        title: "Ticket has been closed",
                        icon: "alert-circle",
                      });
                      close();
                    });
                  },
                },
                {
                  label: "Cancel",
                  variant: "outline",
                  onClick({ close }) {
                    close();
                  },
                },
              ],
            });
          },
        },
      ],
    },
  ];
  if (doc.status !== "Closed") {
    actions.push({
      label: "Close the ticket",
      onClick: () => {
        $dialog({
          title: `Close ticket: ${doc.name}`,
          message: "Are you sure you want to close this ticket?",
          actions: [
            {
              label: "Close",
              theme: "red",
              variant: "solid",
              onClick({ close }) {
                updateField("status", "Closed", () => {});
                close();
              },
            },
            {
              label: "Cancel",
              variant: "outline",
              onClick({ close }) {
                close();
              },
            },
          ],
        });
      },
    });
  }

  return {
    actions,
  };
}
```
---

**منبع:** [کنش‌های سفارشی](https://docs.frappe.io/helpdesk/custom-actions). این صفحه ترجمهٔ غیررسمی است. محتوای نوشتاری تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر اصلی در این مخزن بازنشر نشده‌اند.
