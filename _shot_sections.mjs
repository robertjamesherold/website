import { chromium } from 'playwright-core';
const BASE = 'http://localhost:3000';
const width = parseInt(process.argv[2] || '390', 10);
const theme = process.argv[3] || 'dark';
const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width, height: 780 }, deviceScaleFactor: 1.5 });
const page = await ctx.newPage();
await page.addInitScript((t) => { try { localStorage.setItem('theme', t); } catch (e) {} }, theme);
await page.goto(BASE + '/codescanner', { waitUntil: 'networkidle' });
await page.evaluate(async () => { await new Promise((res) => { let y=0; const id=setInterval(()=>{window.scrollTo(0,y); y+=500; if(y>document.body.scrollHeight){clearInterval(id);res();}},30); }); });
await page.waitForTimeout(600);
await page.addStyleTag({ content: '.reveal,.reveal-child{opacity:1!important;transform:none!important}' });
await page.evaluate(() => window.scrollTo(0,0));
await page.waitForTimeout(300);
const sections = await page.$$('main > section');
console.log('sections:', sections.length);
let i = 0;
for (const s of sections) {
  i++;
  const box = await s.boundingBox();
  const num = String(i).padStart(2,'0');
  await s.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  await s.screenshot({ path: `/tmp/shots/sec-${num}-${width}-${theme}.png` });
  console.log(`sec-${num} h=${Math.round(box?.height||0)} w=${Math.round(box?.width||0)}`);
}
await browser.close();
