const { test, expect } = require('@playwright/test');


test('login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const frame = await page.frameLocator('iframe[name="iframe-name"]')
    await frame.getByRole('link', { name: 'Blog' }).click()
    await frame.locator("//a[@class='tcb-button-link tcb-plain-text']//strong[text()='Click Here']").click();
    await page.waitForTimeout(5000); 
    await page.click("//h1[text()='Practice Page']")
    await page.waitForTimeout(5000); 
   })