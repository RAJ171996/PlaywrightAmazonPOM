import { test, expect } from '@playwright/test';
import loginData from '../testdata/loginData.json';

test.describe('Login Tests - Data Driven', () => {

  loginData.forEach(({ username, password, valid }) => {

    test(`Login test for ${username}`, async ({ page }) => {

      await page.goto('https://www.saucedemo.com/');
      await page.getByPlaceholder('Username').fill(username);
      await page.getByPlaceholder('Password').fill(password);
      await page.locator('[data-test="login-button"]').click();

      if (valid) {

        // ✅ Success validation
        await expect(page).toHaveURL(/inventory/);
        console.log(`✅ SUCCESS: Login passed for ${username}`);

      } else {

        // ❌ Failure validation
        const errorLocator = page.locator('[data-test="error"]');

        await expect(errorLocator).toBeVisible();

        const errorText = (await errorLocator.textContent())?.trim();

        console.log(`❌ FAILED: Login failed for ${username}`);
        console.log(`🔴 ERROR MESSAGE: ${errorText}`);

        await expect(errorLocator).toContainText('Epic sadface');

        await expect(page).not.toHaveURL(/inventory/);

      }
  

    });

  });

});