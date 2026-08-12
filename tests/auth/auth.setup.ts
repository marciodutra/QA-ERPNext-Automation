import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  const username = process.env.ERP_USERNAME;
  const password = process.env.ERP_PASSWORD;

  if (!username) {
    throw new Error('ERP_USERNAME não foi definida no arquivo .env.');
  }

  if (!password) {
    throw new Error('ERP_PASSWORD não foi definida no arquivo .env.');
  }

  await page.goto('/login', {
    waitUntil: 'domcontentloaded',
  });

  const emailInput = page.locator('#login_email');
  const passwordInput = page.locator('#login_password');

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await emailInput.fill(username);
  await passwordInput.fill(password);

  await expect(emailInput).toHaveValue(username);
  await expect(passwordInput).toHaveValue(password);

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL(/\/desk/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});