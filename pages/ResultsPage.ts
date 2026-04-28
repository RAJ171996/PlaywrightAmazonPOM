import { Locator, Page } from '@playwright/test';
import { BasePage } from "../utils/BasePage";

export class ResultsPage extends BasePage {
  
  private productTitles: Locator;

  constructor(page: Page) {
    super(page);
    
    this.productTitles = page.getByRole('link', { name: 'Sponsored Ad - iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up' });
  }

  async selectProduct() {

    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
     this.productTitles.first().click()
    ]);
    await newPage.locator('[id="add-to-cart-button"]').nth(1).click();

    }
  }

