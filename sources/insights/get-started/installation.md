---
title: "Installation"
space: "Insights"
url: "https://docs.frappe.io/insights/get-started/installation"
updated: "2026-01-06"
---

Frappe Insights can be installed in several ways depending on your requirements. You can choose to install it on Frappe Cloud, the cloud version of Frappe Insights, or on your own server. The following sections describe the installation methods in detail.

## Managed Hosting

Install Frappe Insights with one click on [Frappe Cloud](https://frappecloud.com/insights/signup). Frappe Cloud is a managed hosting platform that makes installation and maintenance easy. Sign up [here](https://frappecloud.com/insights/signup) to get started. Your instance will be ready in minutes. We recommend trying Frappe Cloud before self-hosting.

If you have an existing Frappe Cloud site, you can install Frappe Insights from the [Frappe Cloud Marketplace](https://frappecloud.com/marketplace/apps/insights).

## Self Hosting

### Production Setup

1. First, download the installation script:

    ```bash
    wget https://frappe.io/easy-install.py
    ```

2. Run this command to install Frappe Insights:

    ```bash
    python3 ./easy-install.py deploy \
        --project=insights_prod_setup \
        --email=your_email.example.com \
        --image=ghcr.io/frappe/insights \
        --version=stable \
        --app=insights \
        --sitename subdomain.domain.tld
    ```

You need to change two things in this command:

- Replace `your_email.example.com` with your actual email address
- Replace `subdomain.domain.tld` with your website domain name

The setup will take about 5 minutes. After that, you'll have a ready-to-use Frappe Insights instance.

### Development Setup

If you want to set up Frappe Insights for development, please check our [GitHub repository](https://github.com/frappe/insights/tree/develop#development-setup) for detailed instructions.


## Frequently Asked Questions

### I have an existing self-hosted ERPNext site. How can I install Frappe Insights on it?

You can install Frappe Insights just like any other Frappe app. Following are the commands to get and install the app:

```bash
bench get-app insights --branch version-3
bench --site your_site_name install-app insights
```

### I am facing issues during installation. What should I do?

If you encounter any issues during installation, please raise a [GitHub issue](https://github.com/frappe/insights/issues) with the error message and the steps you followed.
