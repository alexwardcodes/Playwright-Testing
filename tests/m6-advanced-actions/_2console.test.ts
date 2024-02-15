import {test, expect} from '@playwright/test';

test('Check console', async ({page}) => {

    page.on('console', msg => {
        expect.soft(msg.type()).not.toEqual('error')
    })
    page.on('pageerror', error => {
        expect.soft(error.name).not.toEqual('Error')
    })
    page.goto('/');
    await page.getByRole('button', {name: 'Register'}).click();

})