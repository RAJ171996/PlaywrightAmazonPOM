import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { SelectProductPage } from '../pages/SelectProductPage';

test('Amazon iPhone 17 Pro and add to cart', async ({ page }) => {
  
  const homePage = new HomePage(page);
  const resultsPage = new ResultsPage(page);
  const selectProductPage = new SelectProductPage(page);

  await homePage.navigate('https://www.amazon.in/');
  await homePage.searchProduct('iPhone 17 Pro');
  await resultsPage.selectProduct();
  await selectProductPage.addToCart();
});
