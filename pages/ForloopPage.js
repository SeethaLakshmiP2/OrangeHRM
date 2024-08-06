const{test, expect} = require('@playwright/test');

class AdminStatusPage{
        constructor(page){
            this.page=page
            this.DropdownList = page.locator("//label[contains(text(),'User Role')]/../following-sibling::div//div[contains(text(),'Select')]")
            this.Admintab = page.locator("//span[text()='Admin']")
            this.Statusfield = page.locator("//label[contains(text(),'Status')]/../following-sibling::div//div[contains(text(),'Select')]")
            this.Submit = page.locator("//button[@type='submit']")
        }
        async verifyDropdownOptionTest(element,status, xpath){
            await element.click();
            const reqStatusOptionText = status;
            const options = await this.page.$$(xpath);
            let optionFound = false
            for(const option of options){
                const statusOptionText = await option.textContent()
                console.log(statusOptionText)

            if(statusOptionText.trim() === reqStatusOptionText) {
                await option.click()
                optionFound = true
                console.log(`Match found for: ${reqStatusOptionText}`);
                break;
            }
        }
            // console.log(`No match found for: ${statusOptionText}`);
            return optionFound = false;  

            }

            // async verifyDropdownOption(){
            //     const reqStatusOptionText = 'Enabled'
            //     const options = await this.page.$$("//div[contains(@role,'listbox')]//span")
            //     let optionFound = false
            //     for(const option of options){
            //         const statusOptionText = await option.textContent()
            //         console.log(statusOptionText)
    
            //     if(statusOptionText.trim() === reqStatusOptionText) {
            //         await option.click()
            //         optionFound = true
            //         console.log(`Match found for: ${reqStatusOptionText}`);
            //         break;
            //     }
            // }
            //     // console.log(`No match found for: ${statusOptionText}`);
            //     return optionFound = false;  
    
            //     }
    
        async AdminUser1() {
                await this.page.waitForTimeout(3000);   
                await this.Admintab.click();
                // await this.DropdownList.click();
                // await this.verifyDropdownOption();
                await this.verifyDropdownOptionTest(this.DropdownList,"Admin","//div[contains(@role,'listbox')]//span");
                // await this.Statusfield.click();
                await this.verifyDropdownOptionTest(this.Statusfield,"Enabled","//div[contains(@role,'listbox')]//span");
                await this.Submit.click();
                await this.page.waitForTimeout(5000);

        }
    }
module.exports = AdminStatusPage;