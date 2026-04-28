import { Locator, Page } from '@playwright/test';
import { BasePage } from "../utils/BasePage";

export class SelectProductPage extends BasePage {
  // private chooseColorOption: Locator;
  // private chooseSizeOption: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    super(page);


    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });


    
    
    
    
  }

  

  async addToCart() {
  // await this.addToCartButton.waitFor({ state: 'visible' });
  // await this.addToCartButton.scrollIntoViewIfNeeded();
  // await this.addToCartButton.click();

 


}



  
}
