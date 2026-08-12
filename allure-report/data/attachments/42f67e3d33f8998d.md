# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\auth.setup.ts >> authenticate
- Location: tests\auth\auth.setup.ts:3:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://erpnext-nfz-gba.l.frappe.cloud/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { test as setup, expect } from '@playwright/test';
  2  | 
  3  | setup('authenticate', async ({ page }) => {
  4  |   const username = process.env.ERP_USERNAME;
  5  |   const password = process.env.ERP_PASSWORD;
  6  | 
  7  |   if (!username) {
  8  |     throw new Error('ERP_USERNAME não foi definida no arquivo .env.');
  9  |   }
  10 | 
  11 |   if (!password) {
  12 |     throw new Error('ERP_PASSWORD não foi definida no arquivo .env.');
  13 |   }
  14 | 
> 15 |   await page.goto('/login', {
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  16 |     waitUntil: 'domcontentloaded',
  17 |   });
  18 | 
  19 |   const emailInput = page.locator('#login_email');
  20 |   const passwordInput = page.locator('#login_password');
  21 | 
  22 |   await expect(emailInput).toBeVisible();
  23 |   await expect(passwordInput).toBeVisible();
  24 | 
  25 |   await emailInput.fill(username);
  26 |   await passwordInput.fill(password);
  27 | 
  28 |   await expect(emailInput).toHaveValue(username);
  29 |   await expect(passwordInput).toHaveValue(password);
  30 | 
  31 |   await page.getByRole('button', { name: 'Continue' }).click();
  32 | 
  33 |   await expect(page).toHaveURL(/\/desk/);
  34 | 
  35 |   await page.context().storageState({
  36 |     path: 'playwright/.auth/user.json',
  37 |   });
  38 | });
```