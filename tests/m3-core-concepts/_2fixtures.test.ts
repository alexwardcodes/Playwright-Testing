import {test, chromium} from '@playwright/test';

test('Test with Page fixture',async ({page}) => {

    await page.goto('https://playwright.dev/');

    console.log("Text content: ", await page.title());
    
});

test('Other fixtures',async ({browser, browserName, context, page}) => {

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    console.log("Pages", await page1.title(), await page2.title());
    
})