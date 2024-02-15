import { test, expect } from "@playwright/test";

const homeTitle = "Credit Association";
const savingsTitle = "Save with us";
test("Back, forward, reload (refresh) test", async ({ page }) => {
  await page.goto("/");
  await page.goto("/savings.html");

 await expect(page).toHaveTitle(savingsTitle)
 await page.goBack();
 await expect(page).toHaveTitle(homeTitle)
 await page.goForward();
 await expect(page).toHaveTitle(savingsTitle)
 await page.reload();
 await expect(page).toHaveTitle(savingsTitle)
});

test('Register validation & reset', async ({page}) => {

    await page.goto("/");
    await page.getByRole("button", { name: "Register" }).click();
    await expect(page.getByText('Valid last name is required')).toBeVisible();
    await expect(page.getByText('Valid first name is required')).toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
    await page.reload();
    await expect(page.getByText('Valid last name is required')).not.toBeVisible();
    await expect(page.getByText('Valid first name is required')).not.toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).not.toBeVisible();
})