import { test, expect, chromium } from '@playwright/test'

test('Vedio record and Slow Mo demo', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    })

    const context = await browser.newContext({
        recordVideo: {
            dir: '/videos/',
            size: { width: 800, height: 600 }

        }
    })

    const page = await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('username').click();
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').click();
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause()
    await page.getByRole('banner').getByText('Paul Collings').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await context.close()

})
