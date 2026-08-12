import { test, expect } from '@playwright/test';

test('ERPNext should be accessible', async ({ page }) => {
  await page.goto('/desk');

  await expect(page).toHaveURL(/frappe\.cloud/);
});