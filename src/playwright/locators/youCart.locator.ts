import { Page } from "@playwright/test";

export class YouCartLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get productDivItems() {
          return this.page.locator('//*[@id="cart_contents_container"]/div/div/div/div/a/div');
    }
    get checkoutBtn() {
          return this.page.locator('//*[@id="checkout"]');

    }
    removeBtn(product: string): Locator  {
         return this.page.locator(`//*[@id="cart_contents_container"]/div/div/div/div/div/button[@id="remove-${product}"]`);
    }

}