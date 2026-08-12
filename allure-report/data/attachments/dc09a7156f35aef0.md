# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\auth.setup.ts >> authenticate
- Location: tests\auth\auth.setup.ts:3:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/desk/
Received string:  "https://erpnext-nfz-gba.l.frappe.cloud/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × locator resolved to <html lang="en" dir="ltr">…</html>
      - unexpected value "https://erpnext-nfz-gba.l.frappe.cloud/login"
    - waiting for "https://erpnext-nfz-gba.l.frappe.cloud/desk" navigation to finish...

```

```yaml
- main:
  - img
  - heading "Sign In" [level=4]
  - paragraph: Welcome! Please sign in to continue.
  - form:
    - text: Email
    - textbox "Email":
      - /placeholder: jane@example.com
      - text: professormarciodutra@gmail.com
    - img
    - text: Password
    - textbox "Password":
      - /placeholder: •••••
      - text: Md@051080
    - img
    - img
    - paragraph:
      - link "Forgot password?":
        - /url: "#forgot"
    - button "Continue"
    - link "Login with Email Link":
      - /url: "#login-with-email-link"
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
  15 |   await page.goto('/login', {
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
> 33 |   await expect(page).toHaveURL(/\/desk/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  34 | 
  35 |   await page.context().storageState({
  36 |     path: 'playwright/.auth/user.json',
  37 |   });
  38 | });
```