import { test, expect } from "@playwright/test";

test("Select test", async ({ page }) => {
  await page.goto("/");
  const checkbox = page.getByRole("checkbox");
  const textArea = page.locator("#textarea");
  const message = "msg";

  await checkbox.check();

  await textArea.fill(message);

  await expect(textArea).toHaveValue(message);
});

test("Select test 2", async ({ page }) => {
  await page.goto("/savings.html");
  const deposit = page.getByTestId("deposit");
  const period = page.getByTestId("period");
  const result = page.getByTestId("result");
  await deposit.fill("100");
  await period.selectOption("6 Months");

  await expect(result).toContainText(
    "After 6 Months you will earn $2.00 on your deposit"
  );


  await period.selectOption("1 Year");
  await expect(result).toContainText('After 1 Year you will earn $5.00 on your deposit')
});
