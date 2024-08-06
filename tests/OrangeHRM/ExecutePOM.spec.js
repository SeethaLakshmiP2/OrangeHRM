const{test} = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage')
//const AdminPage = require('../../pages/AdminPage')
const AdminStatusPage = require('../../pages/ForloopPage')
// const AdminPage1 = require('../../pages/1method2DrpDwn')

test('login1', async({page})=>{
    let loginPageObject = new LoginPage(page);
    await loginPageObject.login();
    // let AdminPageObject = new AdminPage(page);
    // await AdminPageObject.AdminUser();
    let AdminStatusPageObject = new AdminStatusPage(page);
    await AdminStatusPageObject.AdminUser1();

    // let AdminPage1Object = new AdminPage1(page);
    // await AdminPage1Object.AdminUser();

    // await selectDropdownOption(page, 'label:text("First Dropdown") + div[role="button"]', 'First Option Text')
    // await selectDropdownOption(page, 'label:text("Second Dropdown") + div[role="button"]', 'Second Option Text');
})

// test('AdminTab', async({page})=>{
//     let AdminPageObject = new AdminPage(page);
//     await AdminPageObject.AdminUser();

// }
// )

