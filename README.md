<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Leandro2585/template-node-clean?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Leandro2585/template-node-clean">

  <a href="https://github.com/Leandro2585/template-node-clean/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Leandro2585/template-node-clean">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Leandro2585/template-node-clean/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Leandro2585/template-node-clean?style=social">
  </a>

  <a href="https://github.com.br/Leandro2585">
    <img alt="Feito pela Leandro" src="https://img.shields.io/badge/feito%20por-Leandro-%237519C1">
  </a>

</p>

<h4 align="center">
	🚧  Clean Server - Em Desenvolvimento 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

Clean Server - é uma forma de acelerar o processo da criação de um novo projeto, esse template foi desenvolvido considerando boa práticas de programação, tal como conceitos de arquitetura limpa.

---

## 🚀 Como executar o projeto

Esse template foi desenvolvido com Typescript, portanto certifique-se de que é usual para o seu contexto antes de fazer a instalação.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Server

```bash

# Clone este repositório
$ git clone git@github.com:Leandro2585/students-api-graphql.git

# Vá para a pasta server
$ cd students-api-graphql

# Instale as dependências
$ npm install

# Crie uma instância do banco de dados PostgreSQL com Docker
$ docker run -d --name postgresql -e POSTGRESQL_PASSWORD=your_password -e POSTGRESQL_USERNAME=your_username -e POSTGRES_DATABASE=your_database -p 35432:5432 bitnami/postgresql:latest

# Configure suas credenciais de banco no ormconfig.json

# Rode os testes pra verificar se tudo está funcionando corretamente
$ npm test:staged

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/Leandro2585/students-api-graphql)**Students Api GraphQL**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**

> Veja o arquivo  [package.json](https://github.com/Leandro2585/students-api-graphql/blob/master/package.json)

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

##  Autor

<a href="https://github.com/Leandro2585">
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/49343139?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Leandro Real</b></sub></a> <a href="https://github.com/Leandro2585" title="Leandro">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](https://spdx.org/licenses/CPL-3.0-or-later.html).

Feito com ❤️ por Leandro Real 👋🏽 [Entre em contato!](https://www.linkedin.com/in/leandro-r-434b811a5/)
