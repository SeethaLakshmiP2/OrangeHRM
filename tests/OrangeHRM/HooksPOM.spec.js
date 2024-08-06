const{test} = require('@playwright/test');
const LoginSwag = require('../../pages/HooksLogin');
const InventoryPage = require('../../pages/HooksInventoryPage');
const LogoutFunc = require('../../pages/HooksLogout')


test.describe('Hooks with Page Object Model',() => {
    let LoginPage
    let AddCartLogout
    let Logoutapp

    //Before Hooks - Login Page
    test.beforeAll(async({page})=>{
    console.log("Navigate to swaglab page and perform Login")
    LoginPage = new LoginSwag(page)
    
    })

    //After Hooks - Logout page
    test.afterEach(async ({ page }) => {
    console.log("Logout after each test script")
    Logoutapp = new LogoutFunc(page)
    })

    //Add to cart
    test('Add an item to the Cart', async({page}) => {
    console.log("Add item to cart")
    AddCartLogout = new InventoryPage(page)
    })

    }) 
