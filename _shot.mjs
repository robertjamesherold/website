import { chromium } from 'playwright-core';
const BASE = 'http://localhost:3000';
const route = process.argv[2] || '/codescanner';
const width = parseInt(process.argv[3] || '390', 10);
const theme = process.argv[4] || 'dark';

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width, height: 780 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE-ERR:', m.text()); });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));
await page.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch (e) {} }, theme);
await page.goto(BASE + route, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await new Promise((res) => { let y = 0; const id = setInterval(() => { window.scrollTo(0, y); y += 500; if (y > document.body.scrollHeight) { clearInterval(id); res(); } }, 40); });
});
await page.waitForTimeout(700);
await page.evaluate(() => window.scrollTo(0, 0));
await page.addStyleTag({ content: '.reveal,.reveal-child{opacity:1!important;transform:none!important}' });
await page.waitForTimeout(400);
const safeRoute = route.replace(/\//g, '_') || 'root';
const out = `/tmp/shots/${safeRoute}-${width}-${theme}.png`;
await page.screenshot({ path: out, fullPage: true });
const dims = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
console.log('saved', out, JSON.stringify(dims));
await browser.close();
