import { Page } from "@playwright/test";

export class PaymentCompletedLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get checkoutCompleteImg() {
        return this.page.locator('//*[@id="checkout_complete_container"]/img');
    }

}