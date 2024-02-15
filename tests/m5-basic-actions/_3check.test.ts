import { test, expect } from "@playwright/test";

test('Check test', async ({page}) => {

    await page.goto("/");
    const checkbox = page.getByRole('checkbox');
    const textArea =  page.locator('#textarea');
    const message = 'msg';

    await checkbox.check();

    await textArea.fill(message);

    await expect(textArea).toHaveValue(message)
})