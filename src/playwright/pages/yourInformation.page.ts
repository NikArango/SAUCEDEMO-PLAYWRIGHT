import { expect, Page } from '@playwright/test';
import { YourInformationLocator } from '../locators/yourInformation.locator';

export class YourInformationPage {

    readonly page: Page;
    readonly yourInformationLocator: YourInformationLocator;

    constructor(page: Page) {
        this.page = page;
        this.yourInformationLocator = new YourInformationLocator(page);
    }

    async enterFirstName(firstName: string) {
        await this.yourInformationLocator.firstNameInput.fill(firstName);
    }
 
    async enterLastName(lastName: string) {
        await this.yourInformationLocator.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode: string) {
        await this.yourInformationLocator.postalCodeInput.fill(postalCode);
    }

    async clickOnContinue() {
        await this.yourInformationLocator.continueBtn.click();
    }


};