import { test, expect } from '@playwright/test';

test.describe('Accounting - Financial Reports', () => {
  test('should navigate to Financial Reports and display Total Asset', async ({
    page,
  }) => {
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

    // Financial Reports inside the Accounting modal
    const financialReports = accountingModal.locator(
      'a.desktop-icon[data-id="Financial Reports"]'
    );

    await expect(financialReports).toBeVisible();
    await financialReports.click();

    // Validate Financial Reports
    const totalAsset = page.locator(
      'span.summary-label',
      { hasText: 'Total Asset' }
    );

    await expect(totalAsset).toBeVisible();
  });
});