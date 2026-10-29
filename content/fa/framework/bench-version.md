---
title: "نمایش نسخهٔ برنامه‌ها (bench version)"
slug: "bench-version"
source_url: "https://docs.frappe.io/framework/user/en/bench/reference/bench-version"
source_id: "framework/user/en/bench/reference/bench-version"
source_version: "b9ae7050301ba86dd3c682bc17e6bc0482d9dfc9b027202a043ae2e2fe55489e"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

## کاربرد

```bash
bench version [OPTIONS]
```

## توضیح

فرمان `version` اطلاعات نسخهٔ همهٔ برنامه‌های نصب‌شده در پوشهٔ Bench جاری را نمایش می‌دهد. قالب خروجی را می‌توانید متن ساده، JSON یا جدول ASCII انتخاب کنید. گزینهٔ `--format plain` اطلاعات نسخه را به شکل متن ساده، مانند خروجی معمول `bench version` اما با جزئیات بیشتر، نشان می‌دهد:

```bash
$ bench version --format plain
erpnext 14.0.3 version-14 (4e88dcf)
frappe 14.0.1 version-14 (f8ec3d7)
```

گزینهٔ `--format json` اطلاعات نسخه را به‌صورت رشتهٔ JSON قالب‌بندی‌شده نمایش می‌دهد. این قالب برای ساخت ابزارهایی بر پایهٔ رابط خط فرمان Bench مفید است:

```json
$ bench version --format json
[
 {
 "app": "erpnext",
 "branch": "version-14",
 "commit": "4e88dcf",
 "version": "14.0.3"
 },
 {
 "app": "frappe",
 "branch": "version-14",
 "commit": "ef0a5e9",
 "version": "14.0.1"
 }
]
```

گزینهٔ `--format table` اطلاعات نسخه را در جدولی ASCII نمایش می‌دهد:

```text
$ bench version --format table
+-------------------------+------------+------------------------------+---------+
| برنامه | Version | شعبه | Commit |
+-------------------------+------------+------------------------------+---------+
| erpnext | 14.0.3 | version-14 | 4e88dcf |
| frappe | 14.0.1 | version-14 | f8ec3d7 |
+-------------------------+------------+------------------------------+---------+
```

## گزینه‌ها

- `-f`، `--format`: قالب نمایش نسخهٔ برنامه‌های نصب‌شده در Bench جاری را انتخاب می‌کند. گزینه‌ها `plain`، `table`، `json` و `legacy` هستند. مقدار پیش‌فرض `legacy` است.

## نمونه‌ها

1. نمایش اطلاعات خوانا برای انسان دربارهٔ برنامه‌های نصب‌شده در Bench جاری، همراه با پیام‌های commit:

   ```bash
   bench version --format plain
   ```

2. نمایش اطلاعات نسخهٔ Bench در قالب JSON:

   ```bash
   bench version -f json
   ```

منبع: [نمایش نسخهٔ برنامه‌ها](https://docs.frappe.io/framework/user/en/bench/reference/bench-version). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.
