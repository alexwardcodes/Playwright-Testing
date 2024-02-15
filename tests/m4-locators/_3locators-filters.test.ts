import {test, expect} from '@playwright/test';

test('Generic locators examples', async ({page}) => {
    await page.goto('/savings.html');

   const rows = page.getByRole('row')
   console.log(await rows.count())


   const row = page.getByRole('row').filter({hasText: 'Competition'})
   console.log(await row.textContent())


   const cell = page.getByRole('row').filter({hasText: 'Competition'}).getByRole('cell').nth(1)
//    const content = await cell.textContent()
//    expect(content).toBe('2%')
   console.log(await cell.textContent())

})