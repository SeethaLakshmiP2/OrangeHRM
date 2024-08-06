const{test, expect, chromium} = require('@playwright/test')
// test('login', async({hrmNewTab})=>{
//     await hrmNewTab.goto('https://demo.guru99.com/V4/')
//     await hrmNewTab.waitForTimeout(5000);
//     await hrmNewTab.locator("//input[@name='uid']").fill("TestManage");
//     await hrmNewTab.locator("//input[@name='password']").fill("Feuji@123")
//     await hrmNewTab.waitForTimeout(5000); 
//     await hrmNewTab.locator("//input[@value='LOGIN']").click()   
//  })
test('tabhandling', async()=>{
    const browser1 = await chromium.launch()
    const context = await browser1.newContext()
    const hrmNewTab = await context.newPage()
    await hrmNewTab.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await hrmNewTab.locator("//input[@name='username']").fill("Admin");
    // await hrmNewTab.locator("//input[@name='password']").fill("admin123")
    // await hrmNewTab.waitForTimeout(5000); 
    // await hrmNewTab.locator("//button[@type='submit']").focus();
    // await hrmNewTab.locator("//button[@type='submit']").press('Enter')//instead of click we can use press and keyboard key
    // await expect(hrmNewTab).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')   
    await hrmNewTab.waitForTimeout(5000);
    const googleTab = await context.newPage()
    await googleTab.goto('https://www.google.co.in/')
    await googleTab.waitForTimeout(5000);
    await hrmNewTab.bringToFront()
    // await hrmNewTab.waitForTimeout(5000); 

    const browser2 = await chromium.launch()
    const context2 = await browser2.newContext()
    const swaglabNewTab = await context2.newPage()
    await swaglabNewTab.goto('https://www.saucedemo.com/')
    await swaglabNewTab.waitForTimeout(5000);
    const googleTab2 = await context.newPage()
    await googleTab2.goto('https://ultimateqa.com/complicated-page')
    await googleTab2.waitForTimeout(5000);
    await swaglabNewTab.bringToFront()
    await swaglabNewTab.waitForTimeout(5000);
    })