import { test, expect } from '@playwright/test';

test.describe('Accounting - Accounts Setup', () => {
  test('should edit the account type and complete the setup step', async ({
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

    // Accounting modal
    const accountingModal = page.locator('.desktop-modal.show');

    await expect(accountingModal).toBeVisible();

    // Accounts Setup
    const accountsSetup = accountingModal.locator(
      'a.desktop-icon[data-id="Accounts Setup"]'
    );

    await expect(accountsSetup).toBeVisible();
    await accountsSetup.click();

    await expect(page).toHaveURL(/\/desk\/account/);

    // Account hierarchy
    const superavit = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="SUPERÁVIT/DÉFICIT LÍQUIDO DO PERÍODO - CI"]'
    );

    await expect(superavit).toBeVisible();
    await superavit.click();

    const outrasReceitasDespesas = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="OUTRAS RECEITAS E DESPESAS - CI"]'
    );

    await expect(outrasReceitasDespesas).toBeVisible();
    await outrasReceitasDespesas.click();

    const receitasDespesasNaoOperacionais = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="RECEITAS E DESPESAS NÃO OPERACIONAIS - CI"]'
    );

    await expect(receitasDespesasNaoOperacionais).toBeVisible();
    await receitasDespesasNaoOperacionais.click();

    const receitasDespesasNaoOperacionais1 = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="RECEITAS E DESPESAS NÃO OPERACIONAIS 1 - CI"]'
    );

    await expect(receitasDespesasNaoOperacionais1).toBeVisible();
    await receitasDespesasNaoOperacionais1.click();

    const despesasNaoOperacionais = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="DESPESAS NÃO OPERACIONAIS - CI"]'
    );

    await expect(despesasNaoOperacionais).toBeVisible();
    await despesasNaoOperacionais.click();

    const outrasDespesasNaoOperacionais = page.locator(
      'a.tree-label[data-doctype="Account"][data-name="(-) Outras Despesas Não Operacionais - CI"]'
    );

    await expect(outrasDespesasNaoOperacionais).toBeVisible();
    await outrasDespesasNaoOperacionais.click();

    // Edit account
    const editButton = page.locator(
      'button.tree-toolbar-button:visible',
      { hasText: 'Edit' }
    );

    await expect(editButton).toBeVisible();
    await editButton.click();

    // Account Category
    const accountCategory = page.locator(
      'input[data-fieldname="account_category"]'
    );

    await expect(accountCategory).toBeVisible();
    await accountCategory.fill('Cash and Cash Equivalents');

    const categoryOption = page.getByText(
      'Cash and Cash Equivalents, Asset',
      { exact: true }
    );

    await expect(categoryOption).toBeVisible();
    await categoryOption.click();

    // Account Type
    const accountType = page.locator(
      'select[data-fieldname="account_type"]'
    );

    await expect(accountType).toBeVisible();
    await accountType.selectOption('Accumulated Depreciation');

    // Save
    const saveButton = page.locator(
      'button.primary-action[data-label="Save"]'
    );

    await expect(saveButton).toBeVisible();
    await saveButton.click();

    // Final validation
    const completedStep = page.locator(
      '.onb-title-steps'
    );

    await expect(completedStep).toHaveText('1/6 steps completed');
  });
});