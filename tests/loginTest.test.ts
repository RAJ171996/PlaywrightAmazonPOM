import{test, expect} from '@playwright/test';

const testData = [
  { username: 'standard_user', password: 'secret_sauce', valid: true },
  { username: 'locked_out_user', password: 'secret_sauce', valid: false },
  { username: 'problem_user', password: 'secret_sauce', valid: true },
  { username: 'performance_glitch_user', password: 'secret_sauce', valid: true },
  { username: 'error_user', password: 'secret_sauce', valid: true },
  { username: 'visual_user', password: 'secret_sauce', valid: true },
];

testData.forEach(({username, password, valid}) => {
    test(`Login test for ${username}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();  

        if (valid) {
        await expect(page).toHaveURL(/inventory/);
      } else { 
        await expect(page.locator('[data-test="error"]'))
          .toContainText('Sorry, this user has been locked out.');

        await expect(page).not.toHaveURL(/inventory/);
      }
        
        
    }); 

       
});
