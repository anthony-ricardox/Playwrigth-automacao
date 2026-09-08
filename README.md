# 🎭 Playwright Automation Labs

> Repositório dedicado ao estudo, evolução prática e implementação de arquitetura de testes automatizados (E2E e API) com **Playwright**.

---

## 📌 Sobre o Projeto

Este repositório reúne cenários de teste, rotinas de validação e experimentos práticos focados em **Qualidade de Software (QA)**. O objetivo é aplicar boas práticas de desenvolvimento de testes, como Page Object Model (POM), manipulação avançada de seletores, interceptação de rede e execução paralela.

---

## 🛠️ Tecnologias & Ferramentas

- **Linguagem:** Node.js / TypeScript (ou JavaScript)
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **Relatórios:** HTML Reporter / Allure Report
- **CI/CD:** GitHub Actions (em breve)

---

## 📁 Estrutura do Repositório

```text
.
├── tests/                # Casos de teste automatizados
│   ├── e2e/             # Testes de Interface (End-to-End)
│   └── api/             # Testes de Integração/API
├── pages/                # Page Object Model (POM)
├── utils/                # Massas de dados e helpers
├── playwright.config.ts  # Configurações globais do Playwright
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Documentação do repositório
