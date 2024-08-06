const{test, expect} = require('@playwright/test');

class LogoutFunc{
    constructor(page){

        this.page = page;
        this.OpenMenu = page.locator("//button[@type='button'][text()='Open Menu']")
        this.LogoutButton = page.locator("//nav[@class='bm-item-list']//a[text()='Logout']")
    }

    async Logout(page){

        await page.locator(this.OpenMenu).click()
        await page.locator(this.LogoutButton).click()
    
    }

}
module.exports = LogoutFunc