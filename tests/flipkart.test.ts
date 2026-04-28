import { test, expect } from '@playwright/test';

test('Flipkart iPhone 17 and add to cart', async ({ page }) => {

    await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

    // close login popup if it appears
    const closeBtn = page.locator('button:has-text("✕")');
    if (await closeBtn.isVisible().catch(() => false)) {
        await closeBtn.click();
    }

    const searchBox = page.getByPlaceholder('Search for products, brands and more');
    await searchBox.first().fill('mobiles');
    await searchBox.first().press('Enter');

    await page.waitForLoadState('networkidle');

    const electronics = page.locator('text=Electronics');
    await expect(electronics).toBeVisible();
    await electronics.hover();

    const apple = page.locator('text=Apple');
    await expect(apple).toBeVisible();
    await apple.click();

    const product = page.locator('text=Apple iPhone 17 (Black, 256 GB)').first();
    await product.waitFor({ state: 'visible' });

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        product.click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    await newPage.getByText('Cart').first().click();
});