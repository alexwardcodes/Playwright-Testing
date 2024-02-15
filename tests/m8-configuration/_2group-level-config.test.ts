import {test} from '@playwright/test';

test.use({
    // geolocation, viewport, baseURL, etc.
    actionTimeout: 3000,                    // browser.newContext()
    navigationTimeout: 5000,
    // slowMotion not here !!
    launchOptions: {
        slowMo: 2000,
        headless: true                    // browserType.launch ()
    }
})

test('Test 1', async ({page}) => {
    await page.goto('')
})

test.describe('Group title',  () => {

    test.use({
        // geolocation, viewport, baseURL, etc.
    })
    
    test('Test 2', async ({page}) => {
        await page.goto('')
    })
})