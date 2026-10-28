---
title: "Delivery Trip (مسیر تحویل)"
slug: "delivery-trip"
source_url: "https://docs.frappe.io/erpnext/delivery-trip"
source_id: "erpnext/delivery-trip"
source_version: "21d740083fe488e3b009f58d81f7c8b6edbdbe3f19e35ef928a49cefa860e660"
source_updated: "2026-02-27"
translation_status: "quality_checked"
quality_status: "passed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

> این صفحه ترجمهٔ غیررسمی مستندات ERPNext است. [مشاهدهٔ منبع اصلی](https://docs.frappe.io/erpnext/delivery-trip)
> طبق [سیاست رسمی مجوز و علامت تجاری Frappe](https://docs.frappe.io/legal/others/license-and-trademark)، مستندات تحت شرایط CC BY-SA هستند. این ترجمه با انتساب به منبع بازنشر می‌شود؛ نسخهٔ مجوز در سیاست مشخص نشده است.
>
> تصویرهای منبع در این مخزن بازنشر نشده‌اند و پیوند آن‌ها به فایل‌های سایت رسمی اشاره می‌کند.

یک Delivery Trip تحویل سفارش‌های مشتریان را با یک وسیلهٔ نقلیه ثبت می‌کند.

می‌توانید چند توقف را نیز اضافه کنید و Delivery Note ثبت‌نهایی‌شده را به مشتری مربوط پیوند دهید.

## 1. ایجاد Delivery Trip

می‌توانید از یک [Delivery Note (سند تحویل)](delivery-note.md) و با انتخاب **Create > Delivery Trip**، مسیر تحویل ایجاد کنید.

1. به **Stock > Stock Transactions > Delivery Trip > جدید** بروید.
1. راننده و وسیلهٔ نقلیه را انتخاب کنید؛ اگر هنوز تعریف نشده‌اند، آن‌ها را ایجاد کنید.
1. تاریخ، تاریخ حرکت و ساعت حرکت را وارد کنید.
1. مشتریان را برای توقف‌های تحویل اضافه کنید. اگر نشانی مشتری از قبل ثبت شده باشد، به‌طور خودکار دریافت می‌شود. همچنین می‌توانید با انتخاب **Get customers from > Delivery Note** مشتریان را از یک Delivery Note دریافت کنید. پیش از ثبت نهایی، با دکمهٔ **Add Row** توقف‌های بیشتری اضافه کنید.

![فهرست توقف‌های تحویل](https://docs.frappe.io/files/delivery_stops.png)

1. سند را ذخیره و ثبت نهایی کنید.

![سند Delivery Trip](https://docs.frappe.io/files/delivery_trip.png)

## 2. قابلیت‌ها

### 2.1. محاسبهٔ زمان تقریبی رسیدن

اگر نشانی مشتری و نشانی راننده تنظیم شده باشد، می‌توانید زمان تقریبی رسیدن برای تحویل‌ها را محاسبه کنید. این اطلاعات از Google Maps دریافت می‌شود.

### 2.2. بهینه‌سازی مسیر

با استفاده از Google Maps، بهترین مسیر برای تحویل‌ها محاسبه می‌شود.

## موضوعات مرتبط

1. [راهنمای «Packing Slip\n» در ERPNext](https://docs.frappe.io/erpnext/packing-slip)
1. [راهنمای «Shipping Rule\n» در ERPNext](https://docs.frappe.io/erpnext/shipping-rule)
