# api-node-postgresql
Este projeto tem como finalidade configurar um servidor de backend, configurar um banco de dados e integrá-los.

Este projeto é parte de uma aplicação PERN stack que é uma pilha que consiste em:
- PostgreSQL como banco de dados;
- Express como estrutura de back-end;
- React como biblioteca de front-end e
- Node como ambiente de tempo de execução. 

## Pré-requisitos 🚀

### Conhecimento
- HTML.
- CSS.
- JavaScript.

### Instalação
Softwares:
- Visual Studio Code
- Node
- Postgresql
- Docker
- Pg Admin 4

Comandos para executar:
- npm init -y
  - Instala sem precisar configurar o arquivo JSON

- npm install
  - Para instalar todas as dependências

- npm i --save-dev nodemon
  - O Nodemon é um utilitário que reinicia automaticamente um aplicativo Node.js.
  - Adicione ao script debug: "start": "nodemon server.js"

- npm start
  - Executar aplicação

- Executar docker
  - docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres

- Configure as rotas e teste a conexão com o database.

## Purpose for me 🎯
Estudar e entender o funcionamento PERN stack, que irei separar em 2 projetos.
Anteriormente já havia estudado JavaScript e feito um projeto usando um CRUD puro em JS, que é um mecanismo que permite criar, ler, editar e excluir dados.
Com esse projeto anterior testei um aplicativo simples e aprendi como o JavaScript funciona.