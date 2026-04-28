import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async click(locator: Locator) {
    await locator.waitFor({ state: 'visible', timeout: 15000 });
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  async type(locator: Locator, text: string) {
    await locator.waitFor({ state: 'visible', timeout: 15000 });
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
    await locator.fill(text);
  }
}