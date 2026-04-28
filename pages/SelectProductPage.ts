import { Locator, Page } from '@playwright/test';
import { BasePage } from "../utils/BasePage";

export class SelectProductPage extends BasePage {

  private addToCartButton: Locator;

  constructor(page: Page) {
    super(page);

    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
  }

  async addToCart() {
    await this.click(this.addToCartButton);
  }
}