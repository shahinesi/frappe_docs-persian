---
title: "فهرست بررسی راه‌اندازی حسابداری"
slug: "فهرست-بررسی-حسابداری"
source_url: "https://docs.frappe.io/erpnext/accounting-setup-checklist"
source_id: "erpnext/accounting-setup-checklist"
source_version: "5a412f3eb5a49ce9d8b82e4f54469da7776f2c59b6edaf43e1fafd032c3c8f44"
---

راه‌اندازی حسابداری زمانی کامل است که یک تراکنش واقعی بتواند بدون حدس‌وگمان، از فعالیت کسب‌وکار به حساب‌های دفترکل درست منتقل شود. روش مطمئن این است که ابتدا پایه‌ها را به‌ترتیب پیکربندی و سپس یک چرخهٔ کوچک فروش، خرید، پرداخت و گزارش‌گیری را آزمایش کنید.

Nova Industries ابتدا سال مالی و Chart of Accounts را تنظیم می‌کند و سپس مالیات‌ها، Cost Centerها، پیش‌فرض‌های بانک و پرداخت، شرایط اعتباری و حساب‌های جایگزین در سطح شرکت را می‌افزاید. هر مرحله به ساختار مرحلهٔ پیشین وابسته است؛ بنابراین آزمایش مرحله‌به‌مرحله از اصلاح تعداد زیادی تراکنش ثبت‌شده آسان‌تر است.

این فهرست بررسی، آمادگی عملیاتی را ارزیابی می‌کند و هر تصمیم پیکربندی را به تراکنش یا گزارشی پیوند می‌دهد که کارکرد درست تنظیمات را اثبات می‌کند.

## 1. شرکت و تقویم مالی

- شخصیت حقوقی را در [Company](company-setup.md) بسازید.
- سرواژه، کشور، ارز، شناسهٔ مالیاتی و نشانی را تأیید کنید.
- [Fiscal Year](https://docs.frappe.io/erpnext/fiscal-year) را بسازید و تخصیص دهید.

## 2. Chart of Accounts و پیش‌فرض‌ها

- [Chart of Accounts](chart-of-accounts.md) را بررسی کنید.
- حساب‌های دریافتنی، پرداختنی، نقد، بانک، درآمد، هزینه، مالیات، موجودی، دارایی ثابت، سوخت، تفاوت ارز و گردکردن را تأیید کنید.
- [پیش‌فرض‌های حسابداری Company](https://docs.frappe.io/erpnext/company-accounting-defaults) را پیکربندی کنید.
- [Cost Center](https://docs.frappe.io/erpnext/cost-center)های لازم و دیگر Accounting Dimensionها را بسازید.

## 3. پرداخت‌ها و بانکداری

- رکوردهای Bank و Bank Account را بسازید.
- برای هر حساب بانکی شرکت، حساب دفترکل متناظر را تعیین کنید.
- [Modes of Payment](https://docs.frappe.io/erpnext/bank-accounts-and-modes-of-payment) را پیکربندی کنید.
- دریافت وجه، پرداخت، واردکردن صورت‌حساب بانکی و تطبیق حساب را آزمایش کنید.

## 4. فروش، خرید و مالیات

- Payment Terms و الگوهای مربوط را بسازید.
- الگوهای مالیات فروش و خرید را پیکربندی کنید.
- در صورت نیاز Tax Category، Tax Rule و Item Tax Template اضافه کنید.
- پیش‌فرض‌های Customer، Supplier، Item و Item Group را تأیید کنید.

## 5. کنترل‌های حسابداری

- [Accounts Settings](https://docs.frappe.io/erpnext/accounts-settings) را بازبینی کنید.
- نقش‌ها، گردش‌کارهای تأیید و مجوزهای Submit را پیکربندی کنید.
- روش قفل‌کردن و بستن دوره‌ها را مشخص کنید.
- نام‌گذاری سندها و قالب‌های چاپ را پیکربندی کنید.

## 6. داده‌های آغازین

- تاریخ انتقال به سامانهٔ جدید را انتخاب کنید.
- طرف‌های تجاری، Itemها، دارایی‌های ثابت و فاکتورهای تسویه‌نشده را وارد کنید.
- مانده‌های آغازین دفترکل را با ابزارهای مجاز وارد کنید.
- حساب‌های دریافتنی، پرداختنی، بانک، موجودی، دارایی ثابت، مانده‌های مالیاتی و حقوق صاحبان سهام را با سامانهٔ پیشین تطبیق دهید.

## 7. آزمایش پیش از بهره‌برداری

یک سناریوی کامل فروش، خرید، پرداخت، هزینه، دارایی و مرجوعی اجرا کنید و موارد زیر را بررسی کنید:

- بدهکار و بستانکار General Ledger؛
- Accounts Receivable و Accounts Payable؛
- Trial Balance؛
- Balance Sheet و Profit and Loss Statement؛
- Stock Ledger و Stock Balance، اگر perpetual inventory فعال است؛
- گزارش‌های مالیاتی؛
- تطبیق بانکی؛
- سندهای چاپ‌شده و ایمیل‌شده.

تأییدکنندهٔ مانده‌های آغازین و نتیجهٔ آزمایش‌ها را ثبت کنید.

## موضوعات مرتبط

- [ماندهٔ آغازین](https://docs.frappe.io/erpnext/opening-balance)
- [ابزار ساخت فاکتور آغازین](https://docs.frappe.io/erpnext/opening-invoice-creation-tool)
- [Data Import](https://docs.frappe.io/erpnext/data-import)
- [Accounting Period](accounting-period.md)

---
منبع: [مستندات رسمی ERPNext](https://docs.frappe.io/erpnext/accounting-setup-checklist). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
