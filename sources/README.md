# Content source inventory

The current public portal is Wiki-backed. Public rendered pages expose an official Markdown representation using `<canonical-page-url>.md`, announced by `rel="alternate"` with type `text/markdown`. For example, `https://docs.frappe.io/insights/introduction.md` returns Markdown with frontmatter containing the title, space, canonical URL, and an `updated` date. This is the preferred retrieval path; the archived `frappe/frappe_docs` checkout is only historical Framework content.

The manifest records a per-page `.md` endpoint and its product/space. `source-repository` is left unset because no public authoring repository is asserted by the rendered page. `scripts/hydrate-source-metadata.mjs` retrieves each Markdown endpoint at a conservative concurrency, stores only metadata and a content digest, and never copies source prose into this repository. A missing endpoint is logged per page while the remaining pages continue.

For content licensing, inspect the terms that apply to each source/product before publishing a derivative. The Wiki software license and the archived `frappe_docs` MIT license do not grant blanket rights to all live portal content.
