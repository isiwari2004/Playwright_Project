import { test, expect } from '@playwright/test';

const baseUrl = 'https://www.swifttranslator.com/';
const inputLocator = '.w-full.h-80.resize-y.rounded-lg.ring-1.ring-slate-300.p-3';
const outputLocator = '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50';

// Negative Test Cases
const negativeTests = [
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යන්නෙ' },
  { id: 'Neg_Fun_0002', input: 'hari hari hari hari', expected: 'හරි හරි හරි' },
  { id: 'Neg_Fun_0003', input: 'ela machan! supiri!!', expected: 'එල මචන් සුපිරි!!!' },
  { id: 'Neg_Fun_0004', input: 'mama    gedhara     yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0005', input: 'mama iiyee gedhara giyaa', expected: 'මම ඊයේ ගෙදර ගියෙමි' },
  { id: 'Neg_Fun_0006', input: 'api passee kathaa karamu', expected: 'අපි පස්සේ කතා කරන්නෙ' },
  { id: 'Neg_Fun_0007', input: 'oyaa enavadha?', expected: 'ඔයා එනවාද?' },
  { id: 'Neg_Fun_0008', input: 'mata bath oonee', expected: 'මට බත් ඕනෙයි' },
  { id: 'Neg_Fun_0009', input: 'mama sunaQQgu vunee', expected: 'මම සුනාන්කු වුනෙ' },
  { id: 'Neg_Fun_0010', input: 'api iiLaGa sathiyee gedhara yamu', expected: 'අපි හෙට ගෙදර යමු' },
];

negativeTests.forEach(({ id, input, expected }) => {
  test(`${id} - Intentional wrong expected output`, async ({ page }) => {
    await page.goto(baseUrl);
    const inputBox = page.locator(inputLocator);
    const outputBox = page.locator(outputLocator);

    await inputBox.fill(input);
    await page.waitForTimeout(2000); // wait for system to process

    const actualOutput = await outputBox.textContent();

    // Negative assertion - expected intentionally wrong
    expect(actualOutput?.trim()).toBe(expected);
  });
});
