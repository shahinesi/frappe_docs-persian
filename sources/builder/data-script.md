---
title: "Data Script"
space: "Builder"
url: "https://docs.frappe.io/builder/data-script"
updated: "2026-09-29"
---

The Data Script feature is essential for retrieving, processing, and delivering dynamic data to your web pages from various sources. This guide will help you effectively utilize Data Script to ensure your content is always current and relevant.

## Key Concepts

### Data Binding

To display data on your page, assign it to the `data` variable. This variable is used to pass data to the web page.

```python
data.events = ...  # Example of assigning data to the 'events' variable
data.user_list = ...  # Example of assigning data to the 'user_list' variable
```

**Note:**

- Data scripts must be written in Python and are executed server-side.
- They run in a restricted Python environment and can only access whitelisted modules. Find the list of whitelisted methods [here](https://frappeframework.com/docs/user/en/desk/scripting/script-api).

### **Redirecting Visitors**

You can redirect a page visitor to any URL from within a Data Script using the `redirect()` helper. This is useful for enforcing authentication, routing users based on roles, or sending visitors to external resources.

#### **Basic Usage**

```
redirect("/login")           # 302 redirect (default)
redirect("/login", 301)      # custom HTTP status code
```

The `redirect()` function sends an HTTP redirect response to the client. It accepts two arguments:


| **Argument**       | **Required** | **Default** | **Description**                                                       |
| ------------------ | ------------ | ----------- | --------------------------------------------------------------------- |
| `location`         | Yes          | —           | The URL to redirect to (relative or absolute)                         |
| `http_status_code` | No           | `302`       | The HTTP status code (e.g., `301` for permanent, `302` for temporary) |


## Retrieving Data

### From Frappe DocType

#### Fetching a Document List

To retrieve all records of a specific DocType:

```python
data.users = frappe.db.get_all("User")
```

To retrieve a filtered subset of documents (e.g., active users):

```python
data.active_users = frappe.db.get_all("User", filters={"enabled": 1})
```

#### Fetching a Single Document

To retrieve a single document by its name or another identifier:

```python
data.user = frappe.get_doc("User", "<user-email>")
```

### From Dynamic Route

To retrieve data based on dynamic route parameters:

```python
# Example route: /blog/:blog_slug
blog_slug = frappe.form_dict.blog_slug
data.blog_post = frappe.get_doc("Blog Post", {"slug": blog_slug})
```

**Usage:**

1. Set up a dynamic route in your web page settings (e.g., `/blog/:blog_slug`).
2. In your data script, access the route parameter using `frappe.form_dict.&lt;parameter_name&gt;`.
3. Use this parameter to fetch the relevant data.

### From Different Frappe Sites

Use FrappeClient to fetch data from external Frappe sites:

```python
client = FrappeClient(
    'https://<frappe-site-url>',
    api_key='xxxxxxxxxx',
    api_secret='xxxxxxxxxx'
)

users = client.get_list('User', fields=['name', 'first_name', 'last_name'], filters={'user_type':'System User'})
```

[Refer to this link](https://github.com/frappe/frappe-client#api) for all supported APIs of `FrappeClient`.

To get `api_key` and `api_secret`:

1. Go to User list and open a user.
2. Click on the "Settings" tab.
3. Expand the API Access section and click on Generate Keys.
4. Copy the API Secret from the popup and keep it safe.
5. Note the "API Key" field in this section.

### From External Resources

Fetch data from external APIs or resources:

```python
data.posts = frappe.make_get_request("https://jsonplaceholder.typicode.com/posts")
```

## Processing Data

Process retrieved data using Python code:

```python
data.users = frappe.db.get_all("User", fields=["name", "first_name", "last_name"])

# Processing data
for user in data.users:
    user.full_name = user.first_name + " " + user.last_name

# Adding routes to each user
for user in data.users:
    user.route = "/user/" + user.name
```

## Passing Data to Client-Side

To pass data to the client-side, set the `data.page_data` variable:

```python
data.page_data = {
    "enabled_languages": ["English", "Spanish", "French"]
    # ...
}
```

This data will be available on the client-side as `window.page_data`.