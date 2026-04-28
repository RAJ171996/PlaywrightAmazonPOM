import { Locator, Page } from '@playwright/test';
import { BasePage } from "../utils/BasePage";

export class ResultsPage extends BasePage {

  private iphone17prolink: Locator;

  constructor(page: Page) {
    super(page);

    // ✅ Dynamic locator (NOT hardcoded text)
    this.iphone17prolink = page.locator('h2 a[href*="iPhone 17 Pro"]');
  }

  async selectProduct() {

    // ✅ Amazon opens in same tab → no popup
    await this.iphone17prolink.first().click();

    // wait for product page
    await this.page.waitForLoadState('domcontentloaded');
  }
}