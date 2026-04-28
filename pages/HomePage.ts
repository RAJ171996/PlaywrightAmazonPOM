import { Locator, Page } from '@playwright/test';
import { BasePage } from "../utils/BasePage";

export class HomePage extends BasePage {
  private searchBox: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
  }

  async searchProduct(product: string) {
    await this.type(this.searchBox, product);
    await this.click(this.searchButton);
  }
}
