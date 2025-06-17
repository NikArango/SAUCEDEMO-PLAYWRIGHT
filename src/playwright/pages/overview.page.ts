import { expect, Page } from '@playwright/test';
import { OverviewLocator } from '../locators/overview.locator';

export class OverviewPage {

    readonly page: Page;
    readonly overviewLocator: OverviewLocator;

    constructor(page: Page) {
        this.page = page;
        this.overviewLocator = new OverviewLocator(page);
    }

    async clickOnFinish() {
        await this.overviewLocator.finishBtn.click();
    }


};