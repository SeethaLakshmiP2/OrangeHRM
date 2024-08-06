const{test, expect} = require('@playwright/test');
const { log } = require('console');
let dashboardtitle ;
test('login', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(5000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123")
    await page.waitForTimeout(5000); 
    await page.locator("//button[@type='submit']").focus();
    await page.locator("//button[@type='submit']").press('Enter')//instead of click we can use press and keyboard key
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
    await page.locator("//span[text()='PIM']").click() 
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    await page.locator("(//div[text()='-- Select --'])[1]").click()
    await page.locator("//span[text()='Full-Time Permanent']").click()
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(3000);
    await page.locator("//span[text()='Admin']").click()
    await page.locator("//label[contains(text(),'User Role')]/../following-sibling::div//div[contains(text(),'Select')]").click()
    await page.locator("//div[contains(@role,'listbox')]//span[text()='Admin']").click()
    await page.locator("//button[@type='submit']").click()
    //await page.waitForTimeout(5000); 

    // How to use the text content 
    // dashboardtitle = await page.locator("//h6[text()='Dashboard']").textContent();
    // console.log("seetha");
    // console.log(dashboardtitle);
    // console.log("text>>>>>>>>>>",dashboardtitle);

})
