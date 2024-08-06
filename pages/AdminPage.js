const{test, expect} = require('@playwright/test');

class AdminPage{
        constructor(page){
                this.page = page;
                this.Admintab = page.locator("//span[text()='Admin']")
                //Click on User Role Dropdown 
                this.DropdownList = page.locator("//label[contains(text(),'User Role')]/../following-sibling::div//div[contains(text(),'Select')]")
                //Select Admin from Dropdown
                // this.SlctDropDown = page.$$("//div[contains(@role,'listbox')]//span")
                this.Submit = page.locator("//button[@type='submit']")
        }

        async verifyDropdownOptions( ) { 
                // Required option text to select ("Admin" or "ESS")
                const requiredOptionText = 'Admin';
                //locate options in user role dropdown list
                const options = await this.page.$$("//div[contains(@role,'listbox')]//span");

                //Iteration for each option
                let optionFound = false;
                for(const option of options){
                        const optionText = await option.textContent();
                        console.log(optionText);

                if (optionText.trim() === requiredOptionText) {
                await option.click();
                optionFound = true;
                console.log(`Match found for: ${requiredOptionText}`);
                break; 
                }
                }
        console.log(`No match found for: ${optionText}`);
        return optionFound = false;        
        }      
        async AdminUser() {
                await this.page.waitForTimeout(3000);   
                await this.Admintab.click()
                await this.DropdownList.click()
                await this.verifyDropdownOptions();
                // await this.SlctDropDown.click()
                await this.Submit.click()
                // await this.verifyDropdownOptions()
        await this.page.waitForTimeout(5000);
        }
}

module.exports = AdminPage;




//Normal way to select the dropdown list using locators

// class AdminPage{
//         constructor(page){
//                 this.page = page;
//                 this.Admintab = page.locator("//span[text()='Admin']")
//                 //Click on User Role Dropdown 
//                 this.DropdownList = page.locator("//label[contains(text(),'User Role')]/../following-sibling::div//div[contains(text(),'Select')]")
//                 //Select Admin from Dropdown
//                 //this.SlctDropDown = page.locator("//div[contains(@role,'listbox')]//span[text()='Admin']")
//                 this.Submit = page.locator("//button[@type='submit']")
//         }

//         async AdminUser() {
//                 await this.page.waitForTimeout(3000);   
//                 await this.Admintab.click()
//                 await this.DropdownList.click()
//                 //await this.SlctDropDown.click()
//                 await this.Submit.click()
//                 await this.page.waitForTimeout(5000);
//         }
        
// }







// let AdminUser ;
// test('admin', async({page})=>{
        // await page.locator("//span[text()='Admin']").click()
        // await page.locator("//label[contains(text(),'User Role')]/../following-sibling::div//div[contains(text(),'Select')]").click()
        // await page.locator("//div[contains(@role,'listbox')]//span[text()='Admin']").click()
        // await page.locator("//button[@type='submit']").click()  
// })