import { test, expect } from '@playwright/test'
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})



test('addToCart', async ({ page }) => {

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('a').filter({ hasText: '2' }).click();
    await page.locator('[data-test="checkout"]').click();
})

test('logout', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})

test.afterEach('Teardown', async ({page}) => {
    await page.close()
})

