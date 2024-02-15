import { test, expect } from "@playwright/test";


// instantiates browser
test("Request/Response Overview", async ({ page }) => {
  const response = await page.goto("");

  if (response === null) return;

  console.log(response.url());
  console.log(response.status());
  console.log(response.ok());

  expect(response.ok()).toBeTruthy();
  console.log(await response.allHeaders()); // object
  console.log(await response.headersArray()); //array

  console.log(await response.body());
  console.log(await response.text());

  console.log(await response.json()); // error if not parseable JSON
});

// doesn't instantiate browser so is quicker

test("Request/Response", async ({ request }) => {
  const response = await request.get("https://api.github.com");

  console.log(response.ok());
  console.log(response.status());
  console.log(response.headersArray());
  console.log(await response.json());
});
