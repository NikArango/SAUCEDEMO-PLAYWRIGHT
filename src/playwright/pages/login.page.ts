import { expect, Page } from '@playwright/test';
import { LoginLocator } from '../locators/login.locator';

export class LoginPage {

    readonly page: Page;
    readonly loginLocator: LoginLocator;

    constructor(page: Page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
    }

    async navigateToSauceDemo(url: string) {
        await this.page.goto(url);
    }
 
    async enterUsername(password: string= "standard_user") {
        await this.loginLocator.usernameInput.fill(password);
    }

    async enterPassword(password: string= "secret_sauce") {
        await this.loginLocator.passwordInput.fill(password);
    }

    async clickOnAccess() {
        await this.loginLocator.accessBtn.click();
    }

    async loginUnsuccessful(){
        await this.loginLocator.msgInsatisfactorioH3.waitFor({ state: 'visible' });
        expect(this.loginLocator.msgInsatisfactorioH3.innerText()).not.toBe("");
    }
};