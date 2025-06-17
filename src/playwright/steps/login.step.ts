import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import { env } from '../util/playwright-bdd';

let loginPage: LoginPage
let productPage: ProductPage
Given('que estoy en la página de login de Sauce Demo', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToSauceDemo("");
});


When('ingreso username {string} y password {string} y accedo', async ({ page },username: string,password: string) => {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickOnAccess();
    await page.waitForTimeout(4000);
});
Then('el inicio de sesión es satisfactorio', async ({ page }) => {
     productPage = new ProductPage(page);
    await productPage.loginSuccessful()
});

Then('el inicio de sesión es insatisfactorio', async ({ page }) => {
    await loginPage.loginUnsuccessful();
});


