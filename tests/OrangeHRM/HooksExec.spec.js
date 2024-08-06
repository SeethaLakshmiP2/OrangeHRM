const{test, expect} = require('@playwright/test');

test.beforeEach(async({page})=>{
        //Login
        await page.goto('https://www.saucedemo.com/')
        await page.locator("//input[@id='user-name']").fill("standard_user")
        await page.locator("//input[@id='password']").fill("secret_sauce")
        await page.locator("//input[@id='login-button']").click()

})

test.afterEach(async({page})=>{
         //logout
         await page.locator("//button[@type='button'][text()='Open Menu']").click()
         await page.locator("//nav[@class='bm-item-list']//a[text()='Logout']").click()

})

test('Login', async({page})=>{
       
        //inventory page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.locator("//div[@class='app_logo']")).toBeVisible();
        
})

test('Add product to cart', async({page})=>{
        //add product to cart
        await expect(page.locator("//div[@class='inventory_item_name '][text()='Sauce Labs Bike Light']")).toBeVisible()
        await page.locator("//div[@class='inventory_item_description']/div/button[@id='add-to-cart-sauce-labs-bike-light']").click();
        await expect(page.locator("//span[@class='shopping_cart_badge']")).toBeVisible();
      
})