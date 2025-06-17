import { expect, Page } from '@playwright/test';
import { PaymentCompletedLocator } from '../locators/paymentCompleted.locator';

export class PaymentCompletedPage {

    readonly page: Page;
    readonly paymentCompletedLocator: PaymentCompletedLocator;

    constructor(page: Page) {
        this.page = page;
        this.paymentCompletedLocator = new PaymentCompletedLocator(page);
    }

    async verifySatisfactoryPayment() {
          await expect(this.paymentCompletedLocator.checkoutCompleteImg).toBeVisible();

    }

};