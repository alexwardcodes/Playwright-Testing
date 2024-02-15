import {test, expect} from '@playwright/test';

test('Cookies', async ({page}) => {

   await page.goto('/');

   console.log(await page.context().cookies());

   await page.context().addCookies([{
    name: 'cookie1',
    value: 'abc',
    url: 'https://playwright.dev'
   }])

   console.log(await page.context().cookies());
   await page.context().clearCookies()
})