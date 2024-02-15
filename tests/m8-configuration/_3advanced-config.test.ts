import {test, chromium, devices} from '@playwright/test'

const iPad = devices['iPad Pro 11'];
const iPhone = devices['iPhone 12'];

const slowAndHeadless = {headless: false, slowMo: 2000}

interface LocationData {
    latitude: number,
    longitude: number
}

const locationCoordinates: Record<string, LocationData> = {
    London: {longitude: -0.118092, latitude: 51.509865},
    Rome: {longitude: -12.4963655, latitude: 41.9027835}
}

const london = locationCoordinates['London'];
const rome = locationCoordinates['Rome'];
test('Test 1', async () => {
    const browser = await chromium.launch(slowAndHeadless)

    const context = await browser.newContext({
        geolocation: {longitude: london.longitude, latitude: london.latitude}
    })


})

test('Test 2', async () => {
    const browser = await chromium.launch(slowAndHeadless)

    const context = await browser.newContext({
        viewport: iPad.viewport,
        userAgent: iPad.userAgent,
        deviceScaleFactor: iPad.deviceScaleFactor,
        locale: 'en_GB',
        geolocation: {longitude: rome.longitude, latitude: rome.latitude},
        permissions: ['geolocation']
    })

    const page = await context.newPage();
    await page.goto('https://maps.google.com')
    await  page.getByRole('button', {name: 'Accept all'}).click();
    await page.getByRole('button', {name: 'Stay on web'}).click();
    await page.screenshot({path: 'London-iPad.png'})

}) 