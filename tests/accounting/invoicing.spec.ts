import { test, expect } from '@playwright/test';

test.describe('Accounting - Invoicing', () => {
  test('should navigate to the Chart of Accounts and access the expected account', async ({
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

    // Invoicing inside the Accounting modal
    const invoicing = accountingModal.locator(
      'a.desktop-icon[data-id="Invoicing"]'
    );

    await expect(invoicing).toBeVisible();
    await invoicing.click();

    await expect(page).toHaveURL(/\/desk\/invoicing/);

    // Configure Chart of Accounts
    const configureChartOfAccounts = page.getByText(
      'Configure Chart of Accounts',
      { exact: true }
    );

    await expect(configureChartOfAccounts).toBeVisible();
    await configureChartOfAccounts.click();

    // Account hierarchy
    const ativo = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="ATIVO - CI"]'
    );

    await expect(ativo).toBeVisible();
    await ativo.click();

    const circulante = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="CIRCULANTE 1 - CI"]'
    );

    await expect(circulante).toBeVisible();
    await circulante.click();

    const contasRetificadoras = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="CONTAS RETIFICADORAS - CI"]'
    );

    await expect(contasRetificadoras).toBeVisible();
    await contasRetificadoras.click();

    // Final validation
    const duplicatasDescontadas = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="(-) Duplicatas Descontadas - CI"]'
    );

    await expect(duplicatasDescontadas).toBeVisible();
  });
});