import { test, expect } from "@playwright/test";

// 1 Create repo via web API
// 2 Go to UI and check it exists

const REPO = "Playwright-Test-Repo";

test.use({
  baseURL: "https://api.github.com/",
});
test.beforeEach("Create repo", async ({ request }) => {
  const response = await request.post("user/repos", {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token TOKEN IS SECRET`,
    },
    data: {
      name: REPO,
    },
  });

  expect(response.ok()).toBeTruthy();
});

test("Work with newly created repo", async ({ page }) => {
  await page.goto("https://github.com/alexwardcodes?tab=repositories");

  await expect(page.getByRole("link", { name: REPO })).toHaveCount(1);

  // other actions with a clean, new repo
});

test.afterEach("Delete repo", async ({ request }) => {
  const response = await request.delete(`repos/alexwardcodes/${REPO}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token TOKEN IS SECRET`,
    },
  });

  expect(response.ok()).toBeTruthy();

});
