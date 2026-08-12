import { test, expect } from '@playwright/test';

test.describe('Accounting - Payments', () => {
  test('should navigate to Payments', async ({ page }) => {
    // Dashboard
    await page.goto('/desk');

    // Accounting
    const accounting = page.locator(
      'a.desktop-icon[data-id="Accounting"]'
    );

    await expect(accounting).toBeVisible();
    await accounting.click();

    // Accounting opens a modal containing the available options
    const accountingModal = page.locator(
      '.desktop-modal.show'
    );

    await expect(accountingModal).toBeVisible();

    // Payments inside the Accounting modal
    const payments = accountingModal.locator(
      'a.desktop-icon[data-id="Payments"]'
    );

    await expect(payments).toBeVisible();
    await payments.click();

    // Validate Payments page
    await expect(page).toHaveURL(
      /\/desk\/dashboard-view\/Payments/
    );

    // Validate Payments link in the page
    const paymentsLink = page.getByRole(
      'link',
      { name: 'Payments', exact: true }
    ).first();

    await expect(paymentsLink).toBeVisible();
  });
});