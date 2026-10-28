---
title: "محاسبهٔ بهای BOM با ارزی متفاوت"
slug: "bom-costing-in-different-currency"
source_url: "https://docs.frappe.io/erpnext/bom-costing-in-different-currency"
source_id: "erpnext/bom-costing-in-different-currency"
source_version: "c7fca908983a38ccb603717300c2f9ac17a6768a852153964c7255aa62c1fcc8"
---

کاربر می‌تواند پیش از ثبت نهایی، ارز BOM را تغییر دهد. سامانه بهای تمام‌شده را بر اساس ارز Price List محاسبه می‌کند. برای مشاهدهٔ هزینهٔ تولید با ارزی مشخص، ارز BOM را تغییر دهید.

فرض کنید پلاستیک را به‌عنوان مادهٔ اولیه از ژاپن وارد می‌کنید و صورتحساب‌های فروش با ین صادر می‌شوند. ارز شرکت شما روپیهٔ هند (INR) است، اما می‌خواهید بهای BOM با ین محاسبه شود. اگر **Rate Of Materials Based On** را روی **Price List** تنظیم کنید، نرخ مواد اولیهٔ استفاده‌شده در BOM نیز به ین تعیین می‌شود. این نرخ‌ها از Price Listای گرفته می‌شوند که برای ژاپن ساخته‌اید؛ در این مثال، Price List خریدی با نام **Import Japan**.

![BOM با ارزی متفاوت](https://docs.frappe.io/files/bom-currency.png)

اگر **Rate Of Materials Based On** را روی **Valuation Rate** یا **Last Purchase Rate** بگذارید، قیمت‌ها به‌ترتیب از کالا master یا Sales Invoice دریافت می‌شوند. در مورد کالا master، باید Valuation Rate را با ارز خودتان وارد کنید. در BOM، Valuation Rate به ارز انتخاب‌شده برای BOM تبدیل می‌شود.

![BOM با ارزی متفاوت و نرخ‌های مواد](https://docs.frappe.io/files/bom-currency-1.png)

منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/bom-costing-in-different-currency). این صفحه ترجمهٔ غیررسمی است؛ محتوای مستندات تحت شرایط CC BY-SA منتشر شده و این ترجمه نیز با انتساب به منبع بازنشر می‌شود. تصاویر به فایل‌های رسمی مستندات پیوند داده شده‌اند و در این مخزن بازنشر نشده‌اند.
