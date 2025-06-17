import { expect, Page } from '@playwright/test';
import { ProductLocator } from '../locators/product.locator';

export class ProductPage {

    readonly page: Page;
    readonly productLocator: ProductLocator;

    constructor(page: Page) {
        this.page = page;
        this.productLocator = new ProductLocator(page);
    }
    async clickOnAddToCart(products: string) {

            this.listProducts=JSON.parse(products)

            for (const v of this.listProducts) {
             await this.productLocator.addToCartBtn(v.toLowerCase().replaceAll(" ", "-")).waitFor({ state: 'visible' });      
             await this.productLocator.addToCartBtn(v.toLowerCase().replaceAll(" ", "-")).click();
                 
            }
     
    }
     async verifyNotification(){
        
            await this.productLocator.shoppingCartSpan.waitFor({ state: 'visible' });
            const shoppingCartText= await this.productLocator.shoppingCartSpan.textContent();
            expect(shoppingCartText.trim()).toBe(this.listProducts.length.toString());

           }

     async removeProducts(){
            for (const v of this.listProducts) {
             await this.productLocator.removeBtn(v.toLowerCase().replaceAll(" ", "-")).waitFor({ state: 'visible' });
             await this.productLocator.removeBtn(v.toLowerCase().replaceAll(" ", "-")).click();
          }
       }

    async clickOnShoppingCart() {
            await this.productLocator.shoppingCartAnchor.click();
    }



    async loginSuccessful(){
            await this.productLocator.productsSpan.waitFor({ state: 'visible' });
            await expect(this.productLocator.productsSpan).toBeVisible();
    }

};