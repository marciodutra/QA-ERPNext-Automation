import { test, expect } from '@playwright/test';

test('ERPNext should be accessible', async ({ page }) => {
  await page.goto('https://erpnext-nfz-gba.l.frappe.cloud/desk');

  await expect(page).toHaveURL(/frappe\.cloud/);
});