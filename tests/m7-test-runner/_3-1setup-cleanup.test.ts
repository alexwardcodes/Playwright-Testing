import { test, expect } from "@playwright/test";


test.beforeAll("Meaningful description", async () => {
    console.log("Before ALL setup");  
  });
test.beforeEach("Meaningful description", async ({ page }) => {
  console.log("Before each setup");
  page.goto("");
});
test("Test 1", async ({ page }) => {
  console.log("Test 1");
  await expect(page.getByRole("button")).toHaveCount(3);
});

test("Test 2", async ({ page }) => {
  console.log("Test 2");
  await expect(page.getByRole("button")).toHaveCount(3);
});

test.afterEach("Meanigful description", async ({ page }) => {
    console.log("After each cleanup");
  });
  
  test.afterAll("Meanigful description", async () => {
    console.log("After all cleanup");
  });
  