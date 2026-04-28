import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { SelectProductPage } from '../pages/SelectProductPage';

test('Amazon flow', async ({ page }) => {

  const home = new HomePage(page);
  const results = new ResultsPage(page);
  const product = new SelectProductPage(page);

  await home.navigate('https://www.amazon.in/');
  await home.searchProduct('iPhone 17 Pro Max');

  await results.selectProduct();
  await product.addToCart();
});
