import { test, expect } from "@playwright/test";

test("Route Abort - JS block", async ({ page }) => {
  page.route("**/*.{js}", route => route.abort());
  await page.goto("/savings.html");
  await page.getByTestId("deposit").fill("10");

  await expect(page.getByTestId("result")).not.toBeVisible();
});

test("Route with a condition", async ({ page }) => {
    await page.route("**/*", route => route.request().resourceType() === 'script' ? route.abort() : route.continue());
    await page.goto("/savings.html");
    await page.getByTestId("deposit").fill("10");
  
    await expect(page.getByTestId("result")).not.toBeVisible();
  });

  test("Route fulfill", async ({ page }) => {
    await page.route("**/*.pdf", route => route.fulfill({status: 404, contentType: 'text/plain', body: 'Not Found!'}));
    await page.goto("/savings.html");
    await page.getByText("Download Our Offer").click();
    await page.screenshot({path: 'route.png'})
    await page.waitForURL('**/*.pdf')
    const body = page.locator('body')
  
    await expect(body).toContainText('Not Found!');
  });

