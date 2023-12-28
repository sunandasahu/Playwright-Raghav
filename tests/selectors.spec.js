import {test, expect} from '@playwright/test';

test('selector demo', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');

    /*
     Different ways to write the locators using object properties
     await page.locator('[id=user-name]').fill('standard')
     await page.locator('[id="user-name"]').fill('standard')
     await page.locator('id=password').fill('secret_sauce')
     */
    // await page.locator('id=user-name').fill('standard_user')
    // await page.locator('id=password').fill('secret_sauce')
    // await page.locator('id=login-button').click()
    await page.pause();
    // Locators using xpath in two ways 
    await page.locator('xpath=//input[@id ="user-name"]').fill('standard_user')
    await page.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    //await page.locator('//input[@name ="login-button"]').click()

    // Locators using CSS Selectors
    //await page.locator('#login-button').click()

    // Using Text

    //await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()


})