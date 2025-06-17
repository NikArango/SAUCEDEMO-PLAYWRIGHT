import { expect, Page } from '@playwright/test';
import { YouCartLocator } from '../locators/youCart.locator';

export class YouCartPage {

    readonly page: Page;
    readonly youCartPage: YouCartLocator;

    constructor(page: Page) {
        this.page = page;
        this.youCartPage = new YouCartLocator(page);
    }


    async checkAddedProducts(products: string){

        this.listProducts=JSON.parse(products)
        const count = await this.youCartPage.productDivItems.count();
        const addedProductsList: string[] = [];
        for (let i = 0; i < count; i++) {
            const item = this.youCartPage.productDivItems.nth(i);
            await item.waitFor({ state: 'visible' });
            const text = await item.textContent();
            addedProductsList.push(text.trim());
        }

        for (const v of this.listProducts) {
            expect(addedProductsList).toContain(v);

    }
}

     async removeProducts(){
            for (const v of this.listProducts) {
             await this.youCartPage.removeBtn(v.toLowerCase().replaceAll(" ", "-")).waitFor({ state: 'visible' });
             await this.youCartPage.removeBtn(v.toLowerCase().replaceAll(" ", "-")).click();
          }
       }

    async clickOnCheckoutBtn(){
        await this.youCartPage.checkoutBtn.waitFor({ state: 'visible' });
        await this.youCartPage.checkoutBtn.click();
    }


};