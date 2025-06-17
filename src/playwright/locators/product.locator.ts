import { Page,Locator } from "@playwright/test";

export class ProductLocator {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


     addToCartBtn(product: string): Locator {
        return this.page.locator(`//*[@id="inventory_container"]/div/div/div/div/div/div/button[@id="add-to-cart-${product}"]`);

    }

    get productsSpan() {
        return this.page.locator('//*[@id="header_container"]/div[2]/span');
    }

    get shoppingCartAnchor() {
        return this.page.locator('//*[@id="shopping_cart_container"]/a');
    }
    get shoppingCartSpan() {
        return this.page.locator('//*[@id="shopping_cart_container"]/a/span');
    }

    removeBtn(product: string): Locator  {
        return this.page.locator(`//*[@id="inventory_container"]/div/div/div/div/div/div/button[@id="remove-${product}"]`);
    }

}