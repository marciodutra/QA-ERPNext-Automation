# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accounting\invoicing.spec.ts >> Accounting - Invoicing >> should navigate to the Chart of Accounts and access the expected account
- Location: tests\accounting\invoicing.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a.tree-label[data-doctype="Account"][data-name="CONTAS RETIFICADORAS - CI"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a.tree-label[data-doctype="Account"][data-name="CONTAS RETIFICADORAS - CI"]')

```

```yaml
- img
- text: Invoicing ERPNext
- button
- text: Search Ctrl+K Notification
- link "Home":
  - /url: /desk/invoicing
- link "Dashboard":
  - /url: /desk/dashboard-view/Accounts
- link "Chart of Accounts":
  - /url: /desk/account
- text: Receivables
- button
- link "Customer":
  - /url: /desk/customer
- link "Sales Invoice":
  - /url: /desk/sales-invoice
- link "Credit Note":
  - /url: /desk/sales-invoice/view/list?is_return=1
- link "Accounts Receivable":
  - /url: /desk/query-report/Accounts Receivable
- text: Payables
- button
- link "Supplier":
  - /url: /desk/supplier
- link "Purchase Invoice":
  - /url: /desk/purchase-invoice
- link "Debit Note":
  - /url: /desk/purchase-invoice/view/list?is_return=1
- link "Accounts Payable":
  - /url: /desk/query-report/Accounts Payable
- text: Payments
- button
- link "Payment Entry":
  - /url: /desk/payment-entry
- link "Journal Entry":
  - /url: /desk/journal-entry
- link "Payment Request":
  - /url: /desk/payment-request
- link "Payment Order":
  - /url: /desk/payment-order
- link "Payment Reconciliation":
  - /url: /desk/payment-reconciliation/Payment Reconciliation
- link "Unreconcile Payment":
  - /url: /desk/unreconcile-payment
- link "Process Payment Reconciliation":
  - /url: /desk/process-payment-reconciliation
- link "Repost Accounting Ledger":
  - /url: /desk/repost-accounting-ledger
- link "Repost Payment Ledger":
  - /url: /desk/repost-payment-ledger
- text: Reports
- button
- link "General Ledger":
  - /url: /desk/query-report/General Ledger
- link "Trial Balance":
  - /url: /desk/query-report/Trial Balance
- link "Financial Reports":
  - /url: /desk/financial-reports
- link "Settings":
  - /url: /desk/accounts-settings/Accounts Settings
- paragraph: Getting Started
- text: md marcio dutra professormarciodutra@gmail.com Getting Started
- button
- button
- img
- text: Accounting Onboarding 1/6 steps completed 17% completed Skip All Configure Chart of Accounts Setup Sales Taxes Create Sales Invoice Create Payment Entry View Balance Sheet Review Accounts Settings
- banner
- list:
  - listitem:
    - link:
      - /url: /desk
  - listitem:
    - link "/ Invoicing":
      - /url: /desk/invoicing
- combobox:
  - option "CD Informática" [selected]
- text: company
- button "Expand"
- button "View"
- button "Menu":
  - img
- button "New"
- text: CD Informática
- list:
  - listitem:
    - text: ATIVO - CI R$ 0,00 Cr
    - list:
      - listitem:
        - text: CIRCULANTE 1 - CI
        - button "Edit"
        - button "Delete"
        - button "Add Child"
        - button "View Ledger"
        - text: R$ 0,00 Cr
      - listitem: NÃO CIRCULANTE - CI R$ 0,00 Cr
  - listitem: SUPERÁVIT/DÉFICIT LÍQUIDO DO PERÍODO - CI R$ 0,00 Cr
  - listitem: PASSIVO - CI R$ 0,00 Cr
  - listitem: RESULTADO LÍQUIDO DO PERÍODO - CI R$ 0,00 Cr
  - listitem: CUSTOS DE PRODUÇÃO - CI R$ 0,00 Cr
- contentinfo
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Accounting - Invoicing', () => {
  4  |   test('should navigate to the Chart of Accounts and access the expected account', async ({
  5  |     page,
  6  |   }) => {
  7  |     // Dashboard
  8  |     await page.goto('/desk');
  9  | 
  10 |     // Accounting
  11 |     const accounting = page.locator(
  12 |       'a.desktop-icon[data-id="Accounting"]'
  13 |     );
  14 | 
  15 |     await expect(accounting).toBeVisible();
  16 |     await accounting.click();
  17 | 
  18 |     // Accounting opens a modal containing the available options
  19 |     const accountingModal = page.locator(
  20 |       '.desktop-modal.show'
  21 |     );
  22 | 
  23 |     await expect(accountingModal).toBeVisible();
  24 | 
  25 |     // Invoicing inside the Accounting modal
  26 |     const invoicing = accountingModal.locator(
  27 |       'a.desktop-icon[data-id="Invoicing"]'
  28 |     );
  29 | 
  30 |     await expect(invoicing).toBeVisible();
  31 |     await invoicing.click();
  32 | 
  33 |     await expect(page).toHaveURL(/\/desk\/invoicing/);
  34 | 
  35 |     // Configure Chart of Accounts
  36 |     const configureChartOfAccounts = page.getByText(
  37 |       'Configure Chart of Accounts',
  38 |       { exact: true }
  39 |     );
  40 | 
  41 |     await expect(configureChartOfAccounts).toBeVisible();
  42 |     await configureChartOfAccounts.click();
  43 | 
  44 |     // Account hierarchy
  45 |     const ativo = page.locator(
  46 |       'a.tree-label[data-doctype="Account"][data-name="ATIVO - CI"]'
  47 |     );
  48 | 
  49 |     await expect(ativo).toBeVisible();
  50 |     await ativo.click();
  51 | 
  52 |     const circulante = page.locator(
  53 |       'a.tree-label[data-doctype="Account"][data-name="CIRCULANTE 1 - CI"]'
  54 |     );
  55 | 
  56 |     await expect(circulante).toBeVisible();
  57 |     await circulante.click();
  58 | 
  59 |     const contasRetificadoras = page.locator(
  60 |       'a.tree-label[data-doctype="Account"][data-name="CONTAS RETIFICADORAS - CI"]'
  61 |     );
  62 | 
> 63 |     await expect(contasRetificadoras).toBeVisible();
     |                                       ^ Error: expect(locator).toBeVisible() failed
  64 |     await contasRetificadoras.click();
  65 | 
  66 |     // Final validation
  67 |     const duplicatasDescontadas = page.locator(
  68 |       'a.tree-label[data-doctype="Account"][data-name="(-) Duplicatas Descontadas - CI"]'
  69 |     );
  70 | 
  71 |     await expect(duplicatasDescontadas).toBeVisible();
  72 |   });
  73 | });
```