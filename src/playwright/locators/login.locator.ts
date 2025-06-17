import { Page } from "@playwright/test";

export class LoginLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get usernameInput() {
             return this.page.locator("//*[@id='user-name']");
    }

    get passwordInput() {
        return this.page.locator("//*[@id='password']");
    }


    get accessBtn() {
      return this.page.locator("//*[@id='login-button']");

    }

    get msgInsatisfactorioH3() {
      return this.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');

    }


}