import { readFile } from 'node:fs/promises';
const manifest = JSON.parse(await readFile(new URL('../sources/manifest.json', import.meta.url), 'utf8'));
const products = ['framework','erpnext','helpdesk','insights','crm','hr','wiki','builder','learning','drive','other'];
const rows = products.map((product) => {
  const pages = manifest.pages.filter((page) => page.section === product);
  const translated = pages.filter((page) => ['translated','quality_checked','published'].includes(page.translation_status)).length;
  const quality = pages.filter((page) => ['quality_checked','published'].includes(page.translation_status) && page.quality_status === 'passed').length;
  const published = pages.filter((page) => page.published && page.translation_status === 'published').length;
  return { product, identified: pages.length, translated, quality, published, remaining: pages.length - translated };
});
console.log('| محصول | صفحات شناسایی‌شده | ترجمه‌شده | بررسی کیفیت | منتشرشده | باقی‌مانده |');
console.log('|---|---:|---:|---:|---:|---:|');
for (const row of rows) console.log(`| ${row.product} | ${row.identified} | ${row.translated} | ${row.quality} | ${row.published} | ${row.remaining} |`);
