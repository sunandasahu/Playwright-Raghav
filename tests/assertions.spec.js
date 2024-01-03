import { test, expect } from '@playwright/test';

test('assertion Practice', async ({ page }) => {
    await page.goto(' https://kitchen.applitools.com/')
   
    // Assertion to veryfy if element is present
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    // We can use $ to assert with a condition
    if (await page.$('text=The Kitchen')) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    // element to be visible or hidden. Add soft for test execution to not stop
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    // element to be enabled/ disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    // element should have or should not have text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

    // check if element has attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')

    await page.pause()

    // Check the url and title of the page
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //Visual validation using screenshot

    await expect(page).toHaveScreenshot()



})