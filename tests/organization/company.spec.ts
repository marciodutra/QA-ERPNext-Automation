import { test, expect } from '@playwright/test';

test.describe('Organization - Company', () => {
  test('should access the company details', async ({ page }) => {
    await page.goto('/desk');

    const organization = page.locator('a.desktop-icon[data-id="Organization"]');

    await expect(organization).toBeVisible();
    await organization.click();

    await expect(page).toHaveURL(/\/desk\/company/);

    const company = page.locator(
      'a.ellipsis[data-doctype="Company"][data-name="CD Informática"]'
    );

    await expect(company).toBeVisible();
    await company.click();

    await expect(page).toHaveURL(/\/desk\/company\/CD%20Inform%C3%A1tica/);

    const detailsTab = page.locator(
      'button#company-__details-tab'
    );

    await expect(detailsTab).toBeVisible();
    await expect(detailsTab).toHaveClass(/active/);
  });
});