import { test, expect } from "@playwright/test";

test("Simple assertions", async () => {
  expect("a").toEqual("a");
  expect(2).toBeLessThan(3);
  expect(null).toBeFalsy();
});

test("Cappfinity assertions", async ({ page }) => {
  await page.goto("https://cappfinity.com");
  expect(page).toHaveTitle("Cappfinity - Homepage - Cappfinity");
  // expect(2).toBeLessThan(3);
  // expect(null).toBeFalsy();
});

test("Test with simple auto-retrying assertions", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.getByTestId("location")).toContainText("New York");

  expect(page).toHaveTitle("Credit Association");
  expect(page).toHaveURL("http://localhost:3000/");
});
