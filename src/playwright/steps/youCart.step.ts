import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import { YouCartPage } from '../pages/youCart.page';


let loginPage: LoginPage
let productPage: ProductPage;
let youCartPage: YouCartPage;

Given('que agrego productos {string} al carrito de compras en la página de productos de Sauce Demo', async ({page},products: string)=> {
    loginPage = new LoginPage(page);
    await loginPage.navigateToSauceDemo("");
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickOnAccess();

    productPage = new ProductPage(page);
    await productPage.clickOnAddToCart(products);
})

When('doy click en el ícono del carrito de compras', async ({page}) => {
    await productPage.clickOnShoppingCart();
});
Then('me redirije a la página de You Cart donde lista los productos {string} que fueron agregados', async ({page},products: string) => {
     youCartPage = new YouCartPage(page);
    await youCartPage.checkAddedProducts(products);
    await youCartPage.removeProducts();

});
