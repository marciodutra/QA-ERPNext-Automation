# QA ERPNext Automation

Framework de testes automatizados para o ERPNext utilizando Playwright, TypeScript e Node.js.

O objetivo deste projeto é construir um framework de automação de testes moderno, organizado e escalável, utilizando práticas aplicadas em projetos profissionais de QA.

---

## 🎯 Objetivo do projeto

Automatizar os principais fluxos funcionais de um ERP utilizando o ERPNext como sistema sob teste.

O framework será desenvolvido para permitir:

* Testes end-to-end (E2E)
* Testes de interface (UI)
* Testes de API
* Testes de autenticação
* Testes funcionais
* Testes de regressão
* Smoke tests
* Organização por módulos do ERP
* Massa de dados de teste
* Relatórios de execução
* Evidências de falha
* Execução local
* Execução em CI/CD

---

## 🏗️ Arquitetura

A arquitetura planejada do projeto é:

```text
QA ERPNext Automation
│
├── src/
│   ├── pages/
│   ├── components/
│   ├── api/
│   ├── services/
│   ├── fixtures/
│   ├── utils/
│   └── types/
│
├── tests/
│   ├── smoke/
│   ├── authentication/
│   ├── sales/
│   ├── purchasing/
│   ├── inventory/
│   ├── customers/
│   ├── suppliers/
│   ├── finance/
│   └── api/
│
├── test-data/
│   ├── users/
│   ├── customers/
│   ├── products/
│   └── orders/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

A estrutura será criada gradualmente conforme o framework evoluir.

---

# 🧰 Tecnologias

## Linguagem

* TypeScript

## Runtime

* Node.js

## Framework de automação

* Playwright

## Navegador

* Chromium

## IDE

* Visual Studio Code

## Controle de versão

* Git
* GitHub

## Relatórios

* Playwright HTML Report
* Allure Report será incorporado posteriormente

## CI/CD

* GitHub Actions será incorporado posteriormente

## Sistema sob teste

* ERPNext

---

# 💻 Ambiente de desenvolvimento

Ambiente utilizado durante o desenvolvimento inicial:

| Tecnologia |  Versão |
| ---------- | ------: |
| Node.js    | 20.20.2 |
| npm        | 11.13.0 |
| TypeScript |   7.0.2 |
| Playwright |  1.62.1 |
| VS Code    | 1.132.1 |
| Git        |  2.54.0 |

> As versões podem ser atualizadas ao longo da evolução do projeto.

---

# 📋 Pré-requisitos

Para executar o framework localmente, é necessário possuir:

* Node.js
* npm
* Git
* Visual Studio Code

Docker não é necessário para executar o framework.

O ERPNext utilizado nos testes está hospedado externamente.

---

# 🚀 Instalação

## 1. Clonar o projeto

```bash
git clone https://github.com/marciodutra/QA-ERPNext-Automation.git
```

Entrar no diretório:

```bash
cd QA-ERPNext-Automation
```

---

## 2. Instalar as dependências

```bash
npm install
```

O comando instala as dependências definidas no `package.json`.

---

## 3. Instalar o Chromium

O projeto utiliza o Chromium para execução dos testes.

```bash
npx playwright install chromium
```

Somente o Chromium é instalado inicialmente para reduzir o consumo de espaço em disco.

Outros navegadores poderão ser adicionados posteriormente.

---

# ▶️ Executando os testes

## Executar todos os testes

```bash
npx playwright test
```

Exemplo de resultado:

```text
Running 1 test using 1 worker

✓ [chromium] › tests\erpnext.smoke.spec.ts › ERPNext should be accessible

1 passed
```

---

## Listar os testes

Para verificar quais testes o Playwright encontrou:

```bash
npx playwright test --list
```

Exemplo:

```text
Listing tests:
  [chromium] › erpnext.smoke.spec.ts:3:5 › ERPNext should be accessible

Total: 1 test in 1 file
```

---

## Executar um teste específico

```bash
npx playwright test tests/erpnext.smoke.spec.ts
```

---

## Executar os testes com navegador visível

Para visualizar o navegador durante a execução:

```bash
npx playwright test --headed
```

---

## Executar um teste específico com navegador visível

```bash
npx playwright test tests/erpnext.smoke.spec.ts --headed
```

---

# 📊 Relatório HTML

O Playwright gera um relatório HTML após a execução dos testes.

Para abrir o último relatório:

```bash
npx playwright show-report
```

O relatório permite visualizar:

* Testes aprovados
* Testes reprovados
* Duração
* Erros
* Screenshots
* Traces
* Informações da execução

---

# 🔎 Verificação do TypeScript

Para verificar se existem erros de TypeScript:

```bash
npx tsc --noEmit
```

Esse comando verifica o código sem gerar arquivos JavaScript.

---

# 🌐 ERPNext

O sistema utilizado como aplicação sob teste é o ERPNext.

Ambiente atual:

```text
ERPNext hospedado no Frappe Cloud
```

A URL do ambiente não deve ficar diretamente espalhada pelos testes.

A configuração será posteriormente migrada para variável de ambiente.

Exemplo futuro:

```text
BASE_URL=https://seu-erp.frappe.cloud
```

Isso permitirá executar os mesmos testes contra diferentes ambientes:

```text
Development
Testing
Staging
Production
```

sem alterar o código dos testes.

---

# 🧪 Primeiro teste implementado

O primeiro teste automatizado implementado é um Smoke Test que verifica se o ERPNext está acessível.

Arquivo:

```text
tests/erpnext.smoke.spec.ts
```

Objetivo:

```text
Playwright
    ↓
Acessa ERPNext
    ↓
Verifica a URL
    ↓
PASS / FAIL
```

Resultado atual:

```text
1 passed
```

---

# 📁 Estrutura atual do projeto

Neste momento o projeto possui:

```text
automation/
│
├── src/
│
├── tests/
│   └── erpnext.smoke.spec.ts
│
├── node_modules/
│
├── package-lock.json
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

A pasta `node_modules` não deve ser versionada no Git.

---

# 🧪 Estratégia de testes

O framework será desenvolvido seguindo diferentes níveis de teste.

## Smoke Tests

Testes rápidos para verificar se as funcionalidades principais estão disponíveis.

Exemplos:

* ERP acessível
* Login funcionando
* Menu principal disponível
* Criação de cliente disponível
* Criação de produto disponível
* Processo básico de venda funcionando

---

## Testes funcionais

Validar funcionalidades individuais do ERP.

Exemplos:

```text
Clientes
Fornecedores
Produtos
Estoque
Vendas
Compras
Financeiro
Projetos
Qualidade
Ativos
Manufacturing
```

---

## Testes de integração

Validar processos que envolvem diferentes módulos.

Exemplo:

```text
Cliente
   ↓
Pedido de venda
   ↓
Nota fiscal
   ↓
Estoque
   ↓
Financeiro
```

---

## Testes de API

Além dos testes de interface, serão criados testes diretamente contra as APIs do ERPNext.

Objetivos:

* Validar endpoints
* Validar status HTTP
* Validar payloads
* Validar respostas
* Criar dados
* Consultar dados
* Atualizar dados
* Excluir dados quando apropriado

---

# 🧱 Page Object Model

Os testes de interface utilizarão uma arquitetura baseada em Page Objects.

Exemplo futuro:

```text
src/
└── pages/
    ├── LoginPage.ts
    ├── HomePage.ts
    ├── CustomerPage.ts
    ├── ProductPage.ts
    └── SalesOrderPage.ts
```

Os testes utilizarão esses objetos em vez de concentrar todos os seletores diretamente nos arquivos de teste.

---

# 🔐 Autenticação

A autenticação será centralizada.

O objetivo é evitar que cada teste precise realizar login manualmente.

A arquitetura futura deverá utilizar o recurso de autenticação do Playwright:

```text
Login
   ↓
Storage State
   ↓
Testes autenticados
```

Credenciais não serão armazenadas no Git.

---

# 🗃️ Dados de teste

Os dados necessários para os testes serão organizados separadamente do código.

Exemplo:

```text
test-data/
├── users/
├── customers/
├── suppliers/
├── products/
└── orders/
```

Também serão avaliadas estratégias para criação e limpeza automática dos dados através da API.

---

# 📸 Evidências

Em caso de falha, o framework será configurado para armazenar evidências como:

* Screenshot
* Trace
* Vídeo
* Logs
* Informações da execução

O objetivo é facilitar a investigação de falhas.

---

# 📈 Relatórios

O projeto inicialmente utiliza o relatório HTML nativo do Playwright.

Posteriormente será adicionado:

```text
Allure Report
```

O objetivo será disponibilizar informações como:

* Pass
* Fail
* Skip
* Duração
* Evidências
* Histórico
* Categorias
* Steps

---

# 🔄 CI/CD

Posteriormente o projeto será integrado ao GitHub Actions.

A execução deverá permitir:

```text
Git Push
    ↓
GitHub Actions
    ↓
Instalação das dependências
    ↓
Instalação do Chromium
    ↓
Execução dos testes
    ↓
Relatório
    ↓
Artifacts
```

---

# 📌 Comandos principais

Instalar dependências:

```bash
npm install
```

Instalar Chromium:

```bash
npx playwright install chromium
```

Verificar TypeScript:

```bash
npx tsc --noEmit
```

Listar testes:

```bash
npx playwright test --list
```

Executar todos os testes:

```bash
npx playwright test
```

Executar testes com navegador visível:

```bash
npx playwright test --headed
```

Executar um arquivo específico:

```bash
npx playwright test tests/erpnext.smoke.spec.ts
```

Abrir relatório:

```bash
npx playwright show-report
```

Ver versão do Playwright:

```bash
npx playwright --version
```

---

# 📋 Roadmap

## Fase 1 — Fundação

* [x] Criar projeto Node.js
* [x] Instalar Playwright
* [x] Instalar TypeScript
* [x] Configurar TypeScript
* [x] Configurar Playwright
* [x] Instalar Chromium
* [x] Criar primeiro teste
* [x] Executar primeiro teste com sucesso
* [x] Criar README

## Fase 2 — Git

* [ ] Inicializar Git
* [ ] Criar `.gitignore`
* [ ] Criar primeiro commit
* [ ] Criar repositório GitHub
* [ ] Enviar projeto para o GitHub

## Fase 3 — Configuração

* [ ] Criar `.env`
* [ ] Configurar `BASE_URL`
* [ ] Configurar ambientes
* [ ] Remover URLs diretamente dos testes

## Fase 4 — Autenticação

* [ ] Criar LoginPage
* [ ] Automatizar login
* [ ] Criar storage state
* [ ] Criar fixture de autenticação
* [ ] Testar logout

## Fase 5 — Arquitetura

* [ ] Criar Page Objects
* [ ] Criar API clients
* [ ] Criar fixtures
* [ ] Criar utilities
* [ ] Criar tipos TypeScript
* [ ] Criar gerenciamento de dados

## Fase 6 — ERPNext

* [ ] Smoke Tests
* [ ] Clientes
* [ ] Fornecedores
* [ ] Produtos
* [ ] Estoque
* [ ] Vendas
* [ ] Compras
* [ ] Financeiro
* [ ] Projetos
* [ ] Qualidade
* [ ] Ativos
* [ ] Manufacturing

## Fase 7 — API

* [ ] Mapear APIs do ERPNext
* [ ] Criar API client
* [ ] Criar testes GET
* [ ] Criar testes POST
* [ ] Criar testes PUT
* [ ] Criar testes DELETE quando aplicável
* [ ] Validar status HTTP
* [ ] Validar contratos de resposta

## Fase 8 — Relatórios

* [ ] Melhorar relatório Playwright
* [ ] Instalar Allure
* [ ] Configurar histórico
* [ ] Adicionar evidências
* [ ] Categorizar falhas

## Fase 9 — CI/CD

* [ ] Criar GitHub Actions
* [ ] Executar testes automaticamente
* [ ] Publicar relatórios
* [ ] Armazenar artifacts
* [ ] Configurar execução por Pull Request
* [ ] Configurar execução agendada

## Fase 10 — Qualidade do framework

* [ ] Lint
* [ ] Formatação
* [ ] Convenções de código
* [ ] Testes paralelos
* [ ] Retry controlado
* [ ] Gestão de flaky tests
* [ ] Logs
* [ ] Documentação
* [ ] Revisão da arquitetura

---

# 📊 Status atual

**Projeto:** QA ERPNext Automation

**Fase atual:** Fundação

**Testes implementados:** 1

**Testes passando:** 1

**Testes falhando:** 0

**Próximo objetivo:** configurar Git e variáveis de ambiente.

---

## Autor

Marcio Dutra

Projeto de estudo e desenvolvimento de um framework moderno de automação de testes para ERP.
