const{test, expect} = require('@playwright/test');

class AdminPage1{
    constructor(page){
            this.page = page;
            this.Admintab = page.locator("//span[text()='Admin']")
            //this.dropdownField = page.locator("//div[@class='oxd-select-wrapper']")

    }

    async selectDropdownOption(){
            await this.page.click(dropdownTriggerSelector)
            const dropdownXpath = `${dropdownTriggerSelector}//div[contains(@role,'listbox')]//span`

            // Locate all options in the dropdown
            const options = await page.$$(dropdownXpath);

            //Iteration
            let optionFound = false;
            for (const option of options) {
            const optionText = await option.textContent();
                if (optionText.trim() === requiredOptionText) {
                await option.click();
                optionFound = true;
                console.log(`Option "${optionText}" selected.`);
                break;
                }
            }

            if (!optionFound) {
                console.log(`Option "${OptionText}" not found.`);
              }

            expect(optionFound).toBe(true);
    }

    async AdminUser() {
        await this.page.waitForTimeout(3000);   
        await this.Admintab.click()
        //await this.dropdownField.click()
        await this.selectDropdownOption.click()
        await this.Submit.click()
    }
}

module.exports = AdminPage1;