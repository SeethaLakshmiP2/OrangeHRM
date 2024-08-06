const{test, expect,page} = require('@playwright/test');
const url='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

class LoginPage{
   
    
    constructor(page){
        this.page = page;
        //this.url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        this.Username = page.locator("//input[@name='username']")
        this.Password = page.locator("//input[@name='password']")
        this.Submit = page.locator("//button[@type='submit']")
    }
    async login(){
        await this.page.goto(url)
        // await this.page.waitForTimeout(5000);
        await this.Username.fill("Admin");
        await this.Password.fill("admin123");
        // await page.waitForTimeout(5000);
        await this.Submit.click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }



}

module.exports = LoginPage




// test('login', async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.waitForTimeout(5000);
//     await page.locator("//input[@name='username']").fill("Admin");
//     await page.locator("//input[@name='password']").fill("admin123")
//     await page.waitForTimeout(5000); 
//     await page.locator("//button[@type='submit']").focus();
//     await page.locator("//button[@type='submit']").press('Enter')//instead of click we can use press and keyboard key
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//})