import { test, expect } from "@playwright/test";

const name = "Sofia";
test("Storage - test from the UI perspective", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("First name");
  await input.fill(name);
  await page.reload();
  await expect(input).toHaveValue("");

  console.log(await page.context().cookies());

  input.fill(name);
  await page.getByRole("button", { name: "Save Input" }).click();
  await page.reload();
  await expect(input).toHaveValue(name);
});

test("Local storage", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("First name").fill(name);
  await page.getByRole("button", { name: "Save Input" }).click();
  const storage = await page.context().storageState();
  console.log(storage.cookies);
  console.log(storage.origins[0].localStorage);
});

test("Session (or Local) storage", async ({ page }) => {
    await page.goto("/");
    const input = await page.getByLabel("First name")
    input.fill(name)
    await page.getByRole("button", { name: "Save Input" }).click();
    // const storage = await page.context().storageState();
    // console.log(storage.cookies);
    // console.log(storage.origins[0].localStorage);

    const storage = await page.evaluate(() => window.localStorage)
    console.log(storage)
    await page.evaluate(() => window.localStorage.clear())
    await page.reload()
    await expect(input).toHaveValue('')

    await page.evaluate(setLocalStorage)
    const updatedStorage = await page.evaluate(() => window.localStorage)
    console.log(updatedStorage)
    expect(updatedStorage.firstName).toBe('Sasha')
  });

  function setLocalStorage() {
    localStorage.setItem('firstName', 'Sasha')
  }
