import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import { YouCartPage } from '../pages/youCart.page';
import { YourInformationPage } from '../pages/yourInformation.page';
import { OverviewPage } from '../pages/overview.page';
import { PaymentCompletedPage } from '../pages/paymentCompleted.page';

let loginPage: LoginPage
let productPage: ProductPage
let youCartPage: YouCartPage;
let yourInformationPage: YourInformationPage;
let overview: OverviewPage;
let paymentCompletedPage: PaymentCompletedPage;

Given('que me logueo correctamente en Sauce Demo', async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToSauceDemo("");
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickOnAccess();
});


When('voy a la página de You Cart donde lista los productos {string} del carrito de compras, hago click en Checkout', async ({page},products: string) => {
    
    productPage = new ProductPage(page);
    await productPage.clickOnShoppingCart();
    youCartPage = new YouCartPage(page);
    await youCartPage.clickOnCheckoutBtn();
});

When('me redirije a la página de Your Information donde ingreso mi informacion {string}, {string}, {string} y hago click en Continue', async ({page},firstName: string,lastName: string,postalCode: string) => {
    yourInformationPage = new YourInformationPage(page);
    await yourInformationPage.enterFirstName(firstName)
    await yourInformationPage.enterLastName(lastName)
    await yourInformationPage.enterPostalCode(postalCode)
    await yourInformationPage.clickOnContinue()

});

When('me redirije a la página de Checkout: Overview, hago click en Finalizar', async ({page}) => {
    overview = new OverviewPage(page);
    await overview.clickOnFinish();
});

Then('se completa la compra y me muestra la página de Pago: ¡Completado!', async ({page}) => {
    paymentCompletedPage = new PaymentCompletedPage(page);
    await paymentCompletedPage.verifySatisfactoryPayment();
    
});
