const{test, expect} = require('@playwright/test');

class InventoryPage{
    constructor(page){

        this.page = page;
        this.logo =  page.locator("//div[@class='app_logo']")
        this.AddtoCart = page.locator("//div[@class='inventory_item_description']/div/button[@id='add-to-cart-sauce-labs-bike-light']")
        
    }

    async AddtoCartPage(page){

        await this.expect(page.this.logo).toBeVisible();
        await expect(page.locator("//div[@class='inventory_item_name '][text()='Sauce Labs Bike Light']")).toBeVisible()
        await page.this.AddtoCart.click();
    
    }

}
module.exports = InventoryPage