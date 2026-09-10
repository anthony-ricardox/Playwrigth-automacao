<div align="center">

# 🎭 Playwright & Vitest Automation Labs

> Repositório dedicado ao estudo, evolução prática e implementação de arquitetura de testes automatizados (E2E, Unitários e API) unindo **Playwright** e **Vitest**.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

---

</div>

## 📌 Sobre o Projeto

Este repositório reúne cenários de teste, rotinas de validação e experimentos práticos focados em **Qualidade de Software (QA)** e **Engenharia de Testes**. 

O objetivo principal é aplicar boas práticas de automação — desde testes unitários com execução em milissegundos através do **Vitest** (usando *Fake Timers* e mocks) até suítes completas de interface e integração com **Playwright**.

---

## 🛠️ Tecnologias & Ferramentas

| Categoria | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e segurança do código de teste |
| **Test Runner (Unit/Fast)** | [Vitest](https://vitest.dev/) | Testes rápidos de unidade e manipulação de tempo (Fake Timers) |
| **Test Runner (E2E/API)** | [Playwright](https://playwright.dev/) | Automação end-to-end e testes de integração de rede |
| **Runtime** | [Node.js](https://nodejs.org/) | Ambiente de execução |

---

## 📁 Estrutura do Repositório

```text
Playwrigth-automacao/
├── src/
│   └── nivelamento/       # Módulos e simulações da aplicação em estudo
├── tests/                 # Casos de teste automatizados (Vitest & Playwright)
│   └── login.test.ts     # Exemplo de testes assíncronos e Fake Timers
├── utils/                 # Helpers, seletores e massas de dados
├── package.json           # Dependências e scripts de execução
├── package-lock.json      # Mapeamento estrito de dependências
└── README.md              # Documentação do projeto
