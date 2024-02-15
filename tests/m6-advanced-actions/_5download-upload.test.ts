import { test, expect } from "@playwright/test";
import fs from "fs";

test("Download a single file and assert", async ({ page }) => {
  await page.goto("/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByText("Download Our Offer").click();
  const download = await downloadPromise;
  const suggestedFileName = download.suggestedFilename();
  const filePath = "download/" + suggestedFileName;
  await download.saveAs(filePath);
  // fails - the only way for this to pass for previewable files like PDF is to turn on headless mode
  // if however the file is not previewable - e.g. ZIP file - this test will work in headless and headed mode
  expect(await download.failure()).toBeNull();

  // more can be done with Node imports, e.g. import fs and:

//   expect(fs.existsSync(filePath)).toBeTruthy();
//   const fileSizeInBytes = fs.statSync(filePath).size;
//   console.log(fileSizeInBytes);
//   expect(fileSizeInBytes).toBeLessThan(20_000);
});

test("Upload ", async ({ page }) => {
    await page.goto("/");
   const uploadInput = page.locator('input[type="file"]');
   await uploadInput.setInputFiles('download/dummy.pdf')

   // for multiple files
   await uploadInput.setInputFiles(['download/dummy.pdf'])

   // clear
   await uploadInput.setInputFiles([]);

   // submit
  });
  