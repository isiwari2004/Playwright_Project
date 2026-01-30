import { test, expect } from '@playwright/test';

// ===== Pos_Fun_0001 =====
test('Pos_Fun_0001 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
  
  await input.fill('udheeta kaeevadha?');
  await page.waitForTimeout(5000);
  await expect(output).toContainText('උදේට කෑවද?');
});

// ===== Pos_Fun_0002 =====
test('Pos_Fun_0002 - Simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama gedhara yanavaa.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම ගෙදර යනවා.');
});

// ===== Pos_Fun_0003 =====
test('Pos_Fun_0003 - Mixed English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama yanavaa school');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම යනවා school');
});

// ===== Pos_Fun_0004 =====
test('Pos_Fun_0004 - Compound sentences', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama gedhara yanavaa, kaeema velaava nisaa yanna epaeyi.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම ගෙදර යනවා, කෑම වෙලාව නිසා යන්න එපැයි.');
});

// ===== Pos_Fun_0005 =====
test('Pos_Fun_0005 - Complex sentences', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('oyaa enavanam api chithrapatiyak balanna yamu.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('ඔයා එනවනම් අපි චිත්‍රපටියක් බලන්න යමු.');
});

// ===== Pos_Fun_0006 =====
test('Pos_Fun_0006 - Imperative', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('issarahata yanna.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('ඉස්සරහට යන්න.');
});

// ===== Pos_Fun_0007 =====
test('Pos_Fun_0007 - Positive form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama ehema karanavaa.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම එහෙම කරනවා.');
});

// ===== Pos_Fun_0008 =====
test('Pos_Fun_0008 - Polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
});

// ===== Pos_Fun_0009 =====
test('Pos_Fun_0009 - Informal request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('eeyi, ehema karapan.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('ඒයි, එහෙම කරපන්.');
});

// ===== Pos_Fun_0010 =====
test('Pos_Fun_0010 - Multi-word expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('poddak inna');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('පොඩ්ඩක් ඉන්න');
});


// ===== Pos_Fun_0011 =====
test('Pos_Fun_0011 - Joined words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mamagedharayanavaa');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මමගෙදරයනවා');
});

// ===== Pos_Fun_0012 =====
test('Pos_Fun_0012 - Tense variation – past', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('eyaa iiyee skoole vaeda karalaa');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('එයා ඊයේ ස්කෝලෙ වැඩ කරලා');
});

// ===== Pos_Fun_0013 =====
test('Pos_Fun_0013 - Imperative forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('eeka dhenna.');
  await page.waitForTimeout(5000);
  await expect(output).toContainText('ඒක දෙන්න.');
});

// ===== Pos_Fun_0014 =====
test('Pos_Fun_0014 - Response sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('naee, mata eeka karanna puLuvan');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('නෑ, මට ඒක කරන්න පුළුවන්');
});

// ===== Pos_Fun_0015 =====
test('Pos_Fun_0015 - Mixed language', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('Zoom meeting ekak thiyennee.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('Zoom meeting එකක් තියෙන්නේ.');
});

// ===== Pos_Fun_0016 =====
test('Pos_Fun_0016 - Plural pronoun', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('api pansal yamu.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('අපි පන්සල් යමු.');
});

// ===== Pos_Fun_0017 =====
test('Pos_Fun_0017 - Mix-language & Short request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mata help ekak karanna puLuvandha?');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මට help එකක් කරන්න පුළුවන්ද?');
});

// ===== Pos_Fun_0018 =====
test('Pos_Fun_0018 - Medium input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama office yanna kalin email check karanavaa.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම office යන්න කලින් email check කරනවා.');
});

// ===== Pos_Fun_0019 =====
test('Pos_Fun_0019 - Slang and colloquial phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('ela machan! supiri!!');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('එල මචන්! සුපිරි!!');
});

// ===== Pos_Fun_0020 =====
test('Pos_Fun_0020 - Statement with numeric value', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('ee baeeg eka Rs. 5343 venavaa.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('ඒ බෑග් එක Rs. 5343 වෙනවා.');
});

// ===== Pos_Fun_0021 =====
test('Pos_Fun_0021 - Repeated words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('hari hari');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('හරි හරි');
});

// ===== Pos_Fun_0022 =====
test('Pos_Fun_0022 - Simple sentences with Date format and Mix language', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('mama gedhara aya ekka trip ekak 17/02/2026 yanna hithan innavaa.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('මම ගෙදර අය එක්ක trip එකක් 17/02/2026 යන්න හිතන් ඉන්නවා.');
});

// ===== Pos_Fun_0023 =====
test('Pos_Fun_0023 - Line Break, Time format and request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('heta udhee 7.30AM vedhdhi enna.\nmathak karalaa NIC eka aran enna.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('හෙට උදේ 7.30AM වෙද්දි එන්න.\nමතක් කරලා NIC එක අරන් එන්න.');
});

// ===== Pos_Fun_0024 =====
test('Pos_Fun_0024 - Polite and simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3');
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await input.fill('oyaata puLuvannam karuNaakaralaa eeka dhenna.');
  await page.waitForTimeout(3000);
  await expect(output).toContainText('ඔයාට පුළුවන්නම් කරුණාකරලා ඒක දෙන්න.');
});
