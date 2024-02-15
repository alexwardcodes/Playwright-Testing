import {test} from '@playwright/test';

test('Playwright: top-level API', async ({playwright}) => {
    const firefoxType = await playwright.firefox.launch();
    const ctx = await firefoxType.newContext();
    const page = await ctx.newPage();
    await page.goto('/')
 

    const chromiumType = await playwright.chromium.launch();


})