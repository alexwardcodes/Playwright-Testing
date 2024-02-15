import { test, expect } from "@playwright/test";

test("Multiple matches fails", async ({ page }) => {
  await page.goto("/");

  await expect(async () => {
    await page.getByRole("link").click();
  }).rejects.toThrowError();
});

test("Filtered match passes", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link").filter({ hasText: "Loans" }).click();
});

test("Multiple matches test", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Register" }).click();
  const feedback = page.locator('.invalid-feedback');

  await expect(feedback).toHaveCount(3);
  for (const message of await feedback.all()) {
    console.log(`${await message.textContent()}`)
  }
});
