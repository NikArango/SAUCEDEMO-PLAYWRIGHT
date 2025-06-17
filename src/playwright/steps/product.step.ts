import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';
import { ProductPage } from '../pages/product.page';
import { LoginPage } from '../pages/login.page';

let productPage: ProductPage;
let loginPage: LoginPage

Given('que estoy en la página de productos de Sauce Demo', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToSauceDemo("");
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickOnAccess();


});

When('agrego productos {string} al carrito de compras', async ({ page },products: string) => {
    productPage = new ProductPage(page);
    await productPage.clickOnAddToCart(products);
});

Then('debe mostrarse la notificación de que fueron agregados', async ({ page }) => {
    await productPage.verifyNotification();
    await productPage.removeProducts();


});

