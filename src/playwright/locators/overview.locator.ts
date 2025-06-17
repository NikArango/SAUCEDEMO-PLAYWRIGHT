import { Page } from "@playwright/test";

export class OverviewLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get finishBtn() {
      return this.page.locator('//*[@id="finish"]');

    }


}