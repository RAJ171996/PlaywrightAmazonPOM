import { test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

const loginExcelData = ExcelReader.readExcel('loginData.xlsx');

test.describe('DDT Login Tests', () => {

  loginExcelData.forEach((data: any) => {

    test(`Login test for ${data.username}`, async ({ page }) => {

      await page.goto('https://www.saucedemo.com/');

      await page.fill('#user-name', data.username);
      await page.fill('#password', data.password);
      await page.click('#login-button');

    });

  });

});