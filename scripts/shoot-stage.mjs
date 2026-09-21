import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const base = process.env.BASE || 'http://127.0.0.1:4173';
const out = join(process.cwd(), 'qa/product-as-stage');
mkdirSync(out, { recursive: true });

const issues = [];
function check(cond, msg) {
  if (!cond) issues.push(msg);
}

const browser = await chromium.launch();

async function shoot(page, name) {
  await page.screenshot({ path: join(out, `${name}.png`), fullPage: false });
}

async function desktop() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  check(await page.locator('h1, .who-role').filter({ hasText: 'Senior Product' }).count() || await page.locator('.who-role').count(), 'home role missing');
  const role = await page.locator('.who-role').innerText();
  check(role.includes('Senior'), 'home title not Senior: ' + role);
  check(!(await page.locator('body').innerText()).includes('Lead Product Designer'), 'Lead title leaked on home');
  await shoot(page, '01-home-arrival');

  await page.mouse.move(400, 280);
  await page.waitForTimeout(300);
  await shoot(page, '02-home-hover-google');

  await page.locator('.piece[data-piece="banco"]').focus();
  await page.waitForTimeout(250);
  await shoot(page, '03-home-split');

  await page.locator('#lab').scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await shoot(page, '04-home-lab');

  await page.locator('#presence').evaluate((el) => el.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(200);
  await shoot(page, '05-home-presence');

  await page.goto(base + '/google/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '06-google-wall');
  await page.locator('input[value="educators"]').check();
  await page.waitForTimeout(400);
  await shoot(page, '07-google-educator-path');
  await page.getByRole('tab', { name: 'Labels' }).click();
  await page.waitForTimeout(800);
  await shoot(page, '08-google-labels-close');
  await page.getByRole('tab', { name: 'Catalog' }).click();
  await page.waitForTimeout(200);
  await shoot(page, '09-google-catalog');
  const gText = await page.locator('body').innerText();
  check(await page.locator('.instrument, .who-line, #g-closer').count() === 0, 'google editorial chrome still on stage');
  check(gText.includes('No outcome percentage') || gText.includes('no outcome percentage') || gText.includes('No outcome percentage is claimed') || gText.toLowerCase().includes('no outcome percentage'), 'google missing honesty line');
  check(!/%\s*increase|^\+\d+%/m.test(gText), 'google may have invented percent');

  await page.goto(base + '/banco/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '10-banco-land');
  await page.getByRole('button', { name: 'Simulate' }).click();
  await page.waitForTimeout(200);
  await shoot(page, '11-banco-simulate');
  await page.getByRole('button', { name: 'Returns' }).click();
  await page.waitForTimeout(200);
  await shoot(page, '12-banco-returns');
  await page.getByRole('button', { name: 'Renewal' }).click();
  await page.waitForTimeout(300);
  await shoot(page, '13-banco-renewal');
  const bText = await page.locator('body').innerText();
  check(bText.includes('+30%'), 'banco missing +30%');
  check(bText.includes('overall CDT openings'), 'banco metric not overall openings');
  check(!bText.toLowerCase().includes('digital-only') || bText.includes('not digital-only'), 'ok');

  await page.goto(base + '/mastercard/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '14-mc-apart');
  await page.locator('#playhead').fill('1000');
  await page.waitForTimeout(250);
  await shoot(page, '15-mc-joined');
  const mText = await page.locator('body').innerText();
  check(mText.toLowerCase().includes('no invented percentage') || mText.toLowerCase().includes('no percentages'), 'mc missing nda softness');

  await page.goto(base + '/lab/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '16-lab-whole');
  await page.getByRole('button', { name: 'Decision log' }).click();
  await page.waitForTimeout(500);
  await shoot(page, '17-lab-log');
  await page.locator('#assistant').evaluate((el) => el.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(200);
  await shoot(page, '18-lab-assistant');
  const lText = await page.locator('body').innerText();
  check(lText.includes('Prototype'), 'lab missing Prototype');
  check(lText.includes('Concept'), 'lab missing Concept');

  await page.goto(base + '/contact/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '19-contact');
  await page.locator('#signature').scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await shoot(page, '26-contact-signature');

  await page.keyboard.press('Tab');
  check(errors.length === 0, 'page errors: ' + errors.join(' | '));
  await page.close();
  return errors;
}

async function mobile() {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await shoot(page, '20-home-mobile');
  await page.goto(base + '/banco/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await shoot(page, '21-banco-mobile');
  await page.goto(base + '/mastercard/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await shoot(page, '22-mc-mobile');
  await page.goto(base + '/google/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await shoot(page, '23-google-mobile');
  await page.goto(base + '/lab/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await shoot(page, '27-lab-mobile');
  await page.close();
}

async function reduced() {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce'
  });
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  await shoot(page, '24-home-reduced');
  await page.goto(base + '/google/', { waitUntil: 'networkidle' });
  await page.getByRole('tab', { name: 'Catalog' }).click();
  await page.waitForTimeout(150);
  await shoot(page, '25-google-reduced-catalog');
  await page.close();
}

const errors = await desktop();
await mobile();
await reduced();
await browser.close();

if (issues.length || errors.length) {
  console.error('ISSUES');
  issues.forEach((i) => console.error(' - ' + i));
  errors.forEach((e) => console.error(' - ' + e));
  process.exit(1);
}
console.log('OK', out);
