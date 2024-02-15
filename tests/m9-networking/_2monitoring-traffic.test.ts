import { test, expect } from "@playwright/test";

test("Monitoring HTTP Traffic", async ({ page }) => {
  page.on("request", (request) => {
    console.log(request.method(), request.url());
  });
  page.on("response", (response) => {
    console.log(response.status(), response.url());
  });

  await page.goto("/");
});

test("Testing HTTP Traffic", async ({ page }) => {
  page.on("response", (response) => {
    expect(response.status()).toBeLessThan(300);
  });

  // will only run once if there is a status > 300

  // the below code will log an error for each failure

  // page.on("response", (response) => {
  //     expect.soft(response.status()).toBeLessThan(300)
  //   });

  page.on("response", (response) => {
    expect(
      response.status(),
      `Response with status ${response.status()} when fetching resource for ${response.url()}`
    ).toBeLessThan(300);
  });

  await page.goto("");
});
