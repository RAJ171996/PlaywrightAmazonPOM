# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.test.ts >> Amazon flow
- Location: tests\amazon.test.ts:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('h2 a[href*="iPhone 17 Pro"]').first()

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BasePage } from "../utils/BasePage";
  3  | 
  4  | export class ResultsPage extends BasePage {
  5  | 
  6  |   private iphone17prolink: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     super(page);
  10 | 
  11 |     // ✅ Dynamic locator (NOT hardcoded text)
  12 |     this.iphone17prolink = page.locator('h2 a[href*="iPhone 17 Pro"]');
  13 |   }
  14 | 
  15 |   async selectProduct() {
  16 | 
  17 |     // ✅ Amazon opens in same tab → no popup
> 18 |     await this.iphone17prolink.first().click();
     |                                        ^ Error: locator.click: Target page, context or browser has been closed
  19 | 
  20 |     // wait for product page
  21 |     await this.page.waitForLoadState('domcontentloaded');
  22 |   }
  23 | }
```