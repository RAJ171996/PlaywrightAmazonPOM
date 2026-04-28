import { test, expect, Locator, chromium } from '@playwright/test';

test('Amazon iPhone 17 Pro and add to cart', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const searchBox: Locator = page.locator('#twotabsearchtextbox');
    await searchBox.fill('iPhone 17 Pro');
    await searchBox.press('Enter');
    await page.waitForLoadState();
    const productLink: Locator = page.getByRole('link', { name: 'Sponsored Ad - iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up' });
    //const addToCartButton: Locator = page.locator('[id="add-to-cart-button"]');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        productLink.first().click()
    ]);
    await newPage.locator('[id="add-to-cart-button"]').nth(1).click();
});

