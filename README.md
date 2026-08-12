# QA ERPNext Automation

Framework de testes automatizados para o ERPNext utilizando Playwright, TypeScript e Node.js.

O objetivo deste projeto é construir um framework de automação de testes moderno, organizado e escalável, utilizando práticas aplicadas em projetos profissionais de QA.

---

## 🎯 Objetivo do projeto

Automatizar os principais fluxos funcionais de um ERP utilizando o ERPNext como sistema sob teste.

O framework será desenvolvido para permitir:

- Testes end-to-end (E2E)
- Testes de interface (UI)
- Testes de API
- Testes de autenticação
- Testes funcionais
- Testes de regressão
- Smoke tests
- Organização por módulos do ERP
- Massa de dados de teste
- Relatórios de execução
- Evidências de falha
- Execução local
- Execução em CI/CD

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
│   ├── auth/
│   ├── organization/
│   ├── accounting/
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
├── playwright/
│   └── .auth/
│       └── user.json
│
├── tests/
│   ├── auth/
│   │   └── auth.setup.ts
│   │
│   ├── organization/
│   │   └── company.spec.ts
│   │
│   ├── accounting/
│   │   └── invoicing.spec.ts
│   │
│   └── erpnext.smoke.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

A estrutura será criada gradualmente conforme o framework evoluir.

Algumas pastas fazem parte da arquitetura planejada e serão criadas conforme novos recursos forem implementados.

---

# 🧰 Tecnologias

## Linguagem

- TypeScript

## Runtime

- Node.js

## Gerenciador de pacotes

- npm

## Framework de automação

- Playwright

## Navegador

- Chromium

## IDE

- Visual Studio Code

## Controle de versão

- Git
- GitHub

## Relatórios

- Playwright HTML Report
- Allure Report

## Gerenciamento de variáveis de ambiente

- dotenv

## CI/CD

- GitHub Actions será incorporado posteriormente

## Sistema sob teste

- ERPNext
- Frappe Cloud

---

# 💻 Ambiente de desenvolvimento

Ambiente utilizado durante o desenvolvimento inicial:

| Tecnologia | Versão |
| ---------- | ------: |
| Node.js    | 20.20.2 |
| npm        | 11.13.0 |
| TypeScript | 7.0.2 |
| Playwright | 1.62.1 |
| VS Code    | 1.132.1 |
| Git        | 2.54.0 |

> As versões podem ser atualizadas ao longo da evolução do projeto.

---

# 📋 Pré-requisitos

Para executar o framework localmente, é necessário possuir:

- Node.js
- npm
- Git
- Visual Studio Code

Docker não é necessário para executar o framework.

O ERPNext utilizado nos testes está hospedado externamente no Frappe Cloud.

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

O comando instala todas as dependências definidas no `package.json`.

Entre as principais dependências utilizadas estão:

- `@playwright/test`
- `typescript`
- `dotenv`
- `allure-playwright`
- `allure-commandline`

---

## 3. Instalar o Chromium

O projeto utiliza o Chromium para execução dos testes.

```bash
npx playwright install chromium
```

Somente o Chromium é instalado inicialmente para reduzir o consumo de espaço em disco.

Outros navegadores poderão ser adicionados posteriormente.

---

# 🔐 Configuração do ambiente

O projeto utiliza variáveis de ambiente para armazenar configurações e credenciais.

As informações sensíveis não devem ser armazenadas diretamente no código-fonte.

Os arquivos utilizados são:

```text
.env
.env.example
```

O arquivo `.env` é utilizado localmente e não deve ser versionado no Git.

O arquivo `.env.example` serve como modelo para configurar um novo ambiente.

---

## Criando o arquivo `.env`

Depois de clonar o projeto, crie um arquivo chamado:

```text
.env
```

na raiz do projeto.

Exemplo:

```text
BASE_URL=https://seu-ambiente-erpnext.frappe.cloud

ERP_USERNAME=seu_usuario

ERP_PASSWORD=sua_senha
```

A URL real do ERPNext, usuário e senha devem ser configurados somente no `.env`.

---

## Arquivo `.env.example`

O projeto possui o arquivo:

```text
.env.example
```

Esse arquivo pode ser utilizado como referência para criar o `.env`.

Exemplo:

```text
BASE_URL=https://seu-ambiente-erpnext.frappe.cloud

ERP_USERNAME=seu_usuario

ERP_PASSWORD=sua_senha
```

Nunca coloque credenciais reais no `.env.example`.

---

# 🔑 Autenticação

A autenticação do ERPNext é realizada através de um projeto de setup do Playwright.

O login não é executado novamente em cada teste.

O fluxo utilizado é:

```text
Playwright
    ↓
Projeto setup
    ↓
Acessa tela de login
    ↓
Preenche e-mail
    ↓
Preenche senha
    ↓
Realiza login
    ↓
Valida autenticação
    ↓
Salva estado da sessão
    ↓
playwright/.auth/user.json
```

O arquivo de autenticação utilizado é:

```text
playwright/.auth/user.json
```

Esse arquivo contém o estado autenticado da sessão.

Ele não deve ser versionado no Git.

---

## Reutilização da autenticação

Os testes Chromium utilizam o estado salvo:

```text
playwright/.auth/user.json
```

Dessa forma, os testes funcionais começam já autenticados no ERPNext.

O fluxo evita repetir o login em cada cenário.

Exemplo:

```text
Setup
  ↓
Login
  ↓
Storage State
  ↓
Teste Organization
  ↓
Teste Accounting
  ↓
Teste Sales
  ↓
Teste Inventory
```

---

# 🧪 Testes

Os testes são organizados por funcionalidade/módulo do ERPNext.

A estrutura atual inclui:

```text
tests/
│
├── auth/
│   └── auth.setup.ts
│
├── organization/
│   └── company.spec.ts
│
├── accounting/
│   └── invoicing.spec.ts
│
└── erpnext.smoke.spec.ts
```

Novos módulos serão adicionados conforme o desenvolvimento avançar.

---

# 🟢 Smoke Test

O primeiro teste automatizado implementado verifica se o ERPNext está acessível.

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
Verifica disponibilidade
    ↓
PASS / FAIL
```

O Smoke Test faz parte da validação básica do ambiente.

---

# 🔐 Teste de autenticação

O setup de autenticação está localizado em:

```text
tests/auth/auth.setup.ts
```

O setup realiza o login no ERPNext utilizando as informações configuradas no `.env`.

Fluxo:

```text
Acessar /login
    ↓
Preencher e-mail
    ↓
Preencher senha
    ↓
Clicar em Continue
    ↓
Validar acesso autenticado
    ↓
Salvar user.json
```

O login é executado pelo projeto `setup` do Playwright.

Os demais testes dependem desse projeto.

---

# 🏢 Organization

O módulo Organization possui um cenário funcional implementado.

Arquivo:

```text
tests/organization/company.spec.ts
```

Fluxo validado:

```text
Dashboard
    ↓
Organization
    ↓
Empresa
    ↓
Details
```

O cenário acessa o módulo Organization, seleciona a empresa configurada no ERPNext e valida a tela de detalhes.

A validação inclui a presença da aba:

```text
Details
```

O cenário atualmente está passando.

---

# 💰 Accounting

O módulo Accounting possui um cenário relacionado ao processo de Invoicing.

Arquivo:

```text
tests/accounting/invoicing.spec.ts
```

Fluxo validado:

```text
Dashboard
    ↓
Accounting
    ↓
Invoicing
    ↓
Configure Chart of Accounts
    ↓
ATIVO - CI
    ↓
CIRCULANTE 1 - CI
    ↓
CONTAS RETIFICADORAS - CI
    ↓
(-) Duplicatas Descontadas - CI
```

O cenário valida a navegação pela estrutura do plano de contas e a existência da conta esperada.

O cenário atualmente está passando.

---

# ▶️ Executando os testes

## Executar todos os testes

```bash
npx playwright test
```

Esse comando executa todos os testes configurados no projeto.

---

## Executar todos os testes mostrando o navegador

```bash
npx playwright test --headed
```

O parâmetro `--headed` permite visualizar o navegador durante a execução.

---

## Listar os testes encontrados

```bash
npx playwright test --list
```

Esse comando permite verificar quais testes o Playwright encontrou antes de executar.

---

## Executar um arquivo específico

Exemplo:

```bash
npx playwright test tests/organization/company.spec.ts
```

---

## Executar um arquivo específico com navegador visível

```bash
npx playwright test tests/organization/company.spec.ts --headed
```

---

## Executar Accounting / Invoicing

```bash
npx playwright test tests/accounting/invoicing.spec.ts
```

---

## Executar Accounting / Invoicing com navegador visível

```bash
npx playwright test tests/accounting/invoicing.spec.ts --headed
```

---

## Executar somente o setup de autenticação

```bash
npx playwright test tests/auth/auth.setup.ts --project=setup
```

---

## Executar autenticação com navegador visível

```bash
npx playwright test tests/auth/auth.setup.ts --project=setup --headed
```

---

# 🔎 Verificação do TypeScript

Para verificar se existem erros de TypeScript:

```bash
npx tsc --noEmit
```

Esse comando verifica o código sem gerar arquivos JavaScript.

É recomendado executar esse comando antes de executar ou versionar alterações no framework.

---

# 📊 Relatórios

O projeto utiliza o Allure Report para apresentação dos resultados dos testes.

As dependências utilizadas são:

```text
allure-playwright
allure-commandline
```

O Playwright gera os resultados utilizados pelo Allure no diretório:

```text
allure-results/
```

O relatório Allure apresenta informações como:

- Testes aprovados
- Testes reprovados
- Duração
- Steps
- Evidências
- Screenshots
- Vídeos
- Traces
- Informações de erro
- Histórico de execução

---

# 🧾 Gerando o relatório Allure

Após executar os testes, os resultados ficam disponíveis em:

```text
allure-results/
```

Para gerar o relatório HTML:

```bash
npx allure generate allure-results --clean -o allure-report
```

Para abrir o relatório:

```bash
npx allure open allure-report
```

O relatório será aberto no navegador.

---

# 📁 Estrutura dos relatórios

Durante a execução podem ser gerados diretórios como:

```text
allure-results/
allure-report/
test-results/
playwright-report/
```

Esses diretórios são artefatos de execução e não fazem parte do código-fonte do framework.

---

# 📸 Evidências

Em caso de falha, o Playwright está configurado para armazenar evidências.

Configuração atual:

```text
trace: on-first-retry
screenshot: only-on-failure
video: retain-on-failure
```

Isso permite investigar problemas através de:

- Screenshots
- Vídeos
- Traces
- Informações de erro
- Contexto da execução

---

# 🔍 Debug

Durante o desenvolvimento, os testes podem ser executados com o navegador visível:

```bash
npx playwright test --headed
```

Também é possível executar um cenário específico:

```bash
npx playwright test tests/accounting/invoicing.spec.ts --headed
```

Em caso de falha, o Playwright informa os arquivos de evidência gerados.

---

# 📄 Relatório HTML do Playwright

O Playwright também possui um relatório HTML próprio.

Para abrir o último relatório:

```bash
npx playwright show-report
```

O relatório nativo pode ser útil para investigação técnica durante o desenvolvimento.

O relatório principal planejado para apresentação dos resultados do framework é o Allure Report.

---

# 🧱 Page Object Model

Os testes de interface serão gradualmente organizados utilizando uma arquitetura baseada em Page Objects.

Estrutura planejada:

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

Essa estrutura será implementada conforme o número e a complexidade dos cenários aumentarem.

---

# 🧩 Components

Componentes reutilizáveis poderão ser organizados em:

```text
src/components/
```

Exemplos futuros:

```text
src/components/
├── Navigation.ts
├── Sidebar.ts
├── Modal.ts
├── Table.ts
└── Notification.ts
```

O objetivo é evitar duplicação de código entre os testes.

---

# 🌐 API

Os testes de API serão organizados futuramente em:

```text
src/api/
```

A estrutura planejada permitirá criar clientes específicos para as APIs do ERPNext.

Exemplo:

```text
src/api/
├── CustomerApi.ts
├── ProductApi.ts
├── SalesOrderApi.ts
└── AuthenticationApi.ts
```

---

# 🧪 Fixtures

Fixtures personalizadas poderão ser organizadas em:

```text
src/fixtures/
```

O objetivo será centralizar recursos compartilhados entre diferentes cenários.

Exemplos:

- Usuário autenticado
- Dados de teste
- Clientes
- Produtos
- Pedidos
- Configurações de ambiente

---

# 🛠️ Utilities

Funções auxiliares serão organizadas em:

```text
src/utils/
```

Exemplos futuros:

```text
src/utils/
├── dateUtils.ts
├── dataUtils.ts
├── apiUtils.ts
└── validationUtils.ts
```

---

# 🗃️ Dados de teste

Os dados utilizados nos testes serão separados do código.

Estrutura planejada:

```text
test-data/
├── users/
├── customers/
├── suppliers/
├── products/
└── orders/
```

Também serão avaliadas estratégias para criação e limpeza automática dos dados através da API do ERPNext.

---

# 🔐 Segurança

Credenciais não devem ser armazenadas no código-fonte.

As informações de acesso ao ERPNext devem ser configuradas através do `.env`.

O arquivo:

```text
.env
```

é ignorado pelo Git.

O arquivo:

```text
.env.example
```

não deve conter credenciais reais.

O arquivo:

```text
playwright/.auth/user.json
```

também não deve ser versionado.

---

# 🧪 Estratégia de testes

O framework será desenvolvido seguindo diferentes níveis de teste.

---

## Smoke Tests

Testes rápidos para verificar se as funcionalidades principais estão disponíveis.

Exemplos:

- ERP acessível
- Login funcionando
- Dashboard disponível
- Menu principal disponível
- Organization disponível
- Accounting disponível

---

## Testes funcionais

Validar funcionalidades individuais do ERP.

Exemplos:

```text
Organization
Accounting
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

- Validar endpoints
- Validar status HTTP
- Validar payloads
- Validar respostas
- Criar dados
- Consultar dados
- Atualizar dados
- Excluir dados quando apropriado

---

# 📈 Relatórios

O projeto utiliza inicialmente:

```text
Allure Report
```

O objetivo do relatório é apresentar uma visão profissional da execução dos testes.

Informações planejadas:

- Pass
- Fail
- Skip
- Duração
- Steps
- Evidências
- Screenshots
- Vídeos
- Traces
- Histórico
- Categorias
- Informações de falha

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
Configuração das variáveis de ambiente
    ↓
Instalação do Chromium
    ↓
Execução dos testes
    ↓
Geração do relatório
    ↓
Publicação dos artifacts
```

---

# 📦 Git e GitHub

O código-fonte do projeto está hospedado no GitHub.

Repositório:

```text
https://github.com/marciodutra/QA-ERPNext-Automation
```

Para obter a versão mais recente:

```bash
git pull origin main
```

Para verificar a branch atual:

```bash
git branch
```

Para verificar o estado do repositório:

```bash
git status
```

---

# 📌 Fluxo recomendado para um novo desenvolvedor

Depois de clonar o projeto:

```bash
git clone https://github.com/marciodutra/QA-ERPNext-Automation.git
```

Entrar no projeto:

```bash
cd QA-ERPNext-Automation
```

Instalar dependências:

```bash
npm install
```

Instalar o Chromium:

```bash
npx playwright install chromium
```

Criar o arquivo `.env`:

```text
.env
```

Configurar:

```text
BASE_URL=https://seu-ambiente-erpnext.frappe.cloud
ERP_USERNAME=seu_usuario
ERP_PASSWORD=sua_senha
```

Verificar o TypeScript:

```bash
npx tsc --noEmit
```

Executar os testes:

```bash
npx playwright test
```

Executar os testes visualmente:

```bash
npx playwright test --headed
```

Gerar o relatório Allure:

```bash
npx allure generate allure-results --clean -o allure-report
```

Abrir o relatório:

```bash
npx allure open allure-report
```

---

# 📌 Comandos principais

## Instalação

```bash
npm install
```

```bash
npx playwright install chromium
```

---

## TypeScript

```bash
npx tsc --noEmit
```

---

## Playwright

Listar testes:

```bash
npx playwright test --list
```

Executar todos:

```bash
npx playwright test
```

Executar todos com navegador:

```bash
npx playwright test --headed
```

Executar arquivo específico:

```bash
npx playwright test tests/accounting/invoicing.spec.ts
```

Executar arquivo específico com navegador:

```bash
npx playwright test tests/accounting/invoicing.spec.ts --headed
```

Executar autenticação:

```bash
npx playwright test tests/auth/auth.setup.ts --project=setup
```

Executar autenticação com navegador:

```bash
npx playwright test tests/auth/auth.setup.ts --project=setup --headed
```

Abrir relatório HTML do Playwright:

```bash
npx playwright show-report
```

Ver versão do Playwright:

```bash
npx playwright --version
```

---

## Allure

Gerar relatório:

```bash
npx allure generate allure-results --clean -o allure-report
```

Abrir relatório:

```bash
npx allure open allure-report
```

---

# 📋 Roadmap

## Fase 1 — Fundação

- [x] Criar projeto Node.js
- [x] Instalar Playwright
- [x] Instalar TypeScript
- [x] Configurar TypeScript
- [x] Configurar Playwright
- [x] Instalar Chromium
- [x] Criar primeiro teste
- [x] Executar primeiro teste com sucesso
- [x] Criar README

---

## Fase 2 — Git

- [x] Inicializar Git
- [x] Criar `.gitignore`
- [x] Criar primeiro commit
- [x] Criar repositório GitHub
- [x] Enviar projeto para o GitHub

---

## Fase 3 — Configuração

- [x] Criar `.env`
- [x] Criar `.env.example`
- [x] Instalar dotenv
- [x] Configurar `BASE_URL`
- [x] Configurar usuário
- [x] Configurar senha
- [x] Remover URL diretamente dos testes

---

## Fase 4 — Autenticação

- [x] Criar setup de autenticação
- [x] Automatizar login
- [x] Validar credenciais
- [x] Criar storage state
- [x] Criar `playwright/.auth/user.json`
- [x] Reutilizar autenticação nos testes
- [x] Evitar login repetido em cada cenário

---

## Fase 5 — Primeiros cenários funcionais

- [x] Smoke Test
- [x] Organization
- [x] Company
- [x] Validação da aba Details
- [x] Accounting
- [x] Invoicing
- [x] Configure Chart of Accounts
- [x] Navegação pelo Chart of Accounts
- [x] Validação da conta `(-) Duplicatas Descontadas - CI`

---

## Fase 6 — Relatórios

- [x] Instalar `allure-playwright`
- [x] Instalar `allure-commandline`
- [x] Integrar Allure ao Playwright
- [x] Gerar `allure-results`
- [x] Gerar relatório HTML Allure
- [x] Abrir relatório Allure
- [ ] Automatizar geração do relatório
- [ ] Automatizar abertura do relatório
- [ ] Configurar histórico
- [ ] Categorizar falhas
- [ ] Melhorar evidências

---

## Fase 7 — Arquitetura

- [ ] Criar Page Objects
- [ ] Criar API clients
- [ ] Criar fixtures
- [ ] Criar utilities
- [ ] Criar tipos TypeScript
- [ ] Criar gerenciamento de dados
- [ ] Criar componentes reutilizáveis
- [ ] Padronizar seletores
- [ ] Padronizar nomenclatura dos testes

---

## Fase 8 — ERPNext

- [x] Smoke Tests
- [x] Organization
- [x] Accounting
- [ ] Clientes
- [ ] Fornecedores
- [ ] Produtos
- [ ] Estoque
- [ ] Vendas
- [ ] Compras
- [ ] Financeiro
- [ ] Projetos
- [ ] Qualidade
- [ ] Ativos
- [ ] Manufacturing
- [ ] Subcontracting

---

## Fase 9 — API

- [ ] Mapear APIs do ERPNext
- [ ] Criar API client
- [ ] Criar testes GET
- [ ] Criar testes POST
- [ ] Criar testes PUT
- [ ] Criar testes DELETE quando aplicável
- [ ] Validar status HTTP
- [ ] Validar contratos de resposta
- [ ] Criar massa de dados via API
- [ ] Criar limpeza de dados via API

---

## Fase 10 — Relatórios avançados

- [x] Allure
- [ ] Histórico de execução
- [ ] Categorias
- [ ] Attachments
- [ ] Screenshots
- [ ] Vídeos
- [ ] Traces
- [ ] Steps detalhados
- [ ] Informações de ambiente
- [ ] Classificação de falhas

---

## Fase 11 — CI/CD

- [ ] Criar GitHub Actions
- [ ] Executar testes automaticamente
- [ ] Publicar relatórios
- [ ] Armazenar artifacts
- [ ] Configurar execução por Pull Request
- [ ] Configurar execução agendada
- [ ] Configurar variáveis de ambiente no GitHub
- [ ] Configurar secrets
- [ ] Publicar relatório Allure

---

## Fase 12 — Qualidade do framework

- [ ] Lint
- [ ] Formatação
- [ ] Convenções de código
- [ ] Testes paralelos
- [ ] Retry controlado
- [ ] Gestão de flaky tests
- [ ] Logs
- [ ] Documentação
- [ ] Revisão da arquitetura
- [ ] Padronização de Page Objects
- [ ] Padronização de fixtures
- [ ] Padronização de dados de teste

---

# 📊 Status atual

**Projeto:** QA ERPNext Automation

**Sistema sob teste:** ERPNext hospedado no Frappe Cloud

**Framework:** Playwright

**Linguagem:** TypeScript

**Navegador:** Chromium

**Autenticação:** Implementada

**Storage State:** Implementado

**Smoke Test:** Implementado e passando

**Organization:** Implementado e passando

**Company:** Implementado e passando

**Accounting:** Implementado e passando

**Invoicing:** Implementado e passando

**Chart of Accounts:** Implementado e passando

**Allure:** Instalado e integrado

**GitHub:** Configurado

**CI/CD:** Ainda não implementado

**API Tests:** Ainda não implementados

**Page Objects:** Ainda não implementados

**Próximo objetivo:** continuar expandindo os cenários funcionais do ERPNext por módulo, mantendo a autenticação reutilizável e a estabilidade dos testes existentes.

---

# 👨‍💻 Autor

Marcio Dutra

Projeto de estudo e desenvolvimento de um framework moderno de automação de testes para ERP.

```