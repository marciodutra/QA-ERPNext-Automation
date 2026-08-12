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
├── .env.example
└── README.md