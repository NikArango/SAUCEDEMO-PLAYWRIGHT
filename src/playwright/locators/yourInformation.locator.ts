import { Page } from "@playwright/test";

export class YourInformationLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get firstNameInput() {
         return this.page.locator('//*[@id="first-name"]');
    }

    get lastNameInput() {
        return this.page.locator('//*[@id="last-name"]');
    }

    get postalCodeInput() {
        return this.page.locator('//*[@id="postal-code"]');
    }

    get continueBtn() {
      return this.page.locator('//*[@id="continue"]');

    }


}