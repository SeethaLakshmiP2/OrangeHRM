const{test, expect} = require('@playwright/test');

class LoginSwag{
Constructor(page) {
    this.page = page
    this.Username = page.locator("//input[@id='user-name']")
    this.Passowrd = page.locator("//input[@id='password']")
    this.Submit = page.locator("//input[@id='login-button']")
    
}

async login(){
    await this.page.goto('https://www.saucedemo.com/')
    await this.Username.fill("standard_user")
    await this.Passowrd.fill("secret_sauce")
    await this.Submit.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
} 

}
module.exports = LoginSwag