import { test, expect } from "@playwright/test";

test('Date fill', async ({page}) => {

    await page.goto("/");
    await page.getByLabel('First name').fill('Sasha');
    await page.getByLabel('Date of birth').fill('2023-10-10') 
    // !! under the hood, the format must ALWAYS be YYYYMMDD, regardless of how frontend displays !!
    // e.g. await page.getByLabel('Date of birth').fill('10-10-2023') will FAIL
})