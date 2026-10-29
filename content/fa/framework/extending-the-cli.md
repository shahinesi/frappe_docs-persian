---
title: "افزودن فرمان به خط فرمان Bench"
slug: "extending-the-cli"
source_url: "https://docs.frappe.io/framework/user/en/bench/extending-the-cli"
source_id: "framework/user/en/bench/extending-the-cli"
source_version: "90017237648cd1b262ea5c3728c8a061329acf36a681950c3a80b0f342c315c6"
source_updated: "2026-02-17"
translation_status: "translated"
quality_status: "not_reviewed"
license_status: "CC BY-SA (version unspecified by source policy)"
---

در کنار فرمان‌های چارچوب، ماژول `bench_manager` در Frappe فرمان‌های برنامه‌های سفارشی شما را هم پیدا می‌کند. در این فرایند، Bench با Frappe همان Bench ارتباط می‌گیرد و Frappe فرمان‌های در دسترس را در همهٔ برنامه‌ها بررسی می‌کند.

برای در دسترس قراردادن فرمان سفارشی در Bench، درون ماژول والد خود یک ماژول `commands` بسازید. سپس فرمان را با پوشش Click بنویسید و متغیر `commands` را تعریف کنید تا فهرستی از توابع Click، یعنی فرمان‌های خودتان، در آن قرار گیرد.

برای نمونه، ساختار پوشه‌های یک برنامهٔ Frappe با نام `flags` می‌تواند چنین باشد:

```text
frappe-bench
|──apps
 |── frappe
 ├── flags
 │ ├── README.md
 │ ├── flags
 │ │ ├── commands <------ commands module
 │ ├── license.txt
 │ ├── requirements.txt
 │ └── setup.py
```

ماژول `commands` می‌تواند یک فایل مانند `commands.py` یا پوشه‌ای شامل فایل `__init__.py` باشد. برای برنامه‌ای سفارشی به نام `flags`، نمونهٔ زیر را در نظر بگیرید:

```python
# file_path: frappe-bench/apps/flags/flags/commands.py
import click

@click.command('set-flags')
@click.argument('state', type=click.Choice(['on', 'off']))
def set_flags(state):
 from flags.utils import set_flags
 set_flags(state=state)

commands = [
 set_flags
]
```

پس از آن، در محیط Bench جاری می‌توانید این فرمان را به‌سادگی اجرا کنید:

```zsh
➜ bench set-flags
Flags are set to state: 'on'
```

منبع: [افزودن فرمان به خط فرمان Bench](https://docs.frappe.io/framework/user/en/bench/extending-the-cli). این صفحه ترجمهٔ غیررسمی است و محتوای آن تحت شرایط CC BY-SA بازنشر شده است.

