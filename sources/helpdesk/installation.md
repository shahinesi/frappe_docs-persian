---
title: "Installation"
space: "Helpdesk"
url: "https://docs.frappe.io/helpdesk/installation"
updated: "2026-01-06"
---

Frappe Helpdesk can be installed in several ways depending on your requirements. You can choose to install it on Frappe Cloud, the cloud version of Frappe Helpdesk, or on your own server. The following sections describe the installation methods in detail.

## Managed Hosting

Install Frappe Helpdesk with one click on [Frappe Cloud](https://frappecloud.com/helpdesk/signup). Frappe Cloud is a managed hosting platform that makes installation and maintenance easy. Sign up [here](https://frappecloud.com/helpdesk/signup) to get started. Your instance will be ready in minutes. We recommend trying Frappe Cloud before self-hosting.

If you have an existing Frappe Cloud site, you can install Frappe Helpdesk from the [Frappe Cloud Marketplace](https://frappecloud.com/marketplace/apps/helpdesk).

## Self Hosting

### Production Setup

1. First, download the installation script:

    ```bash
    wget https://frappe.io/easy-install.py
    ```

2. Run this command to install Frappe Helpdesk:

    ```bash
    python3 ./easy-install.py deploy \
        --project=helpdesk_prod_setup \
        --email=your_email.example.com \
        --image=ghcr.io/frappe/helpdesk \
        --version=stable \
        --app=helpdesk \
        --sitename subdomain.domain.tld
    ```

You need to change two things in this command:

- Replace `your_email.example.com` with your actual email address
- Replace `subdomain.domain.tld` with your website domain name

The setup will take about 5 minutes. After that, you'll have a ready-to-use Frappe Helpdesk instance.

### Development Setup

If you want to set up Frappe Helpdesk for development, please check our [GitHub repository](https://github.com/frappe/helpdesk/tree/develop#development-setup) for detailed instructions.


## Frequently Asked Questions

### I have an existing self-hosted ERPNext site. How can I install Frappe Helpdesk on it?

You can install Frappe Helpdesk just like any other Frappe app. Following are the commands to get and install the app:

```bash
bench get-app helpdesk --branch main
bench --site your_site_name install-app helpdesk
```

### I am facing issues during installation. What should I do?

If you encounter any issues during installation, please raise a [GitHub issue](https://github.com/frappe/helpdesk/issues) with the error message and the steps you followed.
