# api-node-postgresql
Este projeto tem como finalidade configurar um servidor de backend, configurar um banco de dados e integra-los.

Este projeto é parte de uma aplicação PERN stack que é uma pilha que consiste em:
- PostgreSQL como banco de dados;
- Express como estrutura de back-end;
- React como biblioteca de front-end e
- Node como ambiente de tempo de execução. 

## Purpose for me 🎯
Estudar e entender o funcionamento PERN stack, que irei separar em 2 projetos.
Anteriormente já havia estudado JavaScript e feito um projeto usando um CRUD puro em JS, que é um mecanismo que permite criar, ler, editar e excluir dados.
Com esse projeto anterior testei um aplicativo simples e aprendi como o JavaScript funciona.

## Pré-requisitos
Ter o conhecimento de HTML, CSS e JavaScript.

## Tecnologias 🚀
Esse projeto foi desenvolvido com as seguintes tecnologias:
- Node
- Express
- Postgresql
- Docker
- Pg Admin 4

## Instalação
- Node: https://nodejs.org/en/download/
- npm init -y
  - Instala sem precisar configurar o arquivo JSON
- npm -i —save-dev nodemon
  - O Nodemon é um utilitário que reinicia automaticamente um aplicativo Node.js.
  - Adicione ao script debug: "start": "nodemon server.js"
- npm install express
  - Express é uma estrutura da Web popular para Node.js, um tempo de execução JavaScript do lado do servidor. 
  - Depois de instalar o Express, você pode começar a criar seus aplicativos da Web ou APIs usando seus recursos e ferramentas.
- npm install ejs
  - Embedded JavaScript, é uma linguagem de modelagem simples que permite gerar marcação HTML com código JavaScript simples.
- npm install pg
  - Instalação do pacote pg, postgresql.
- install docker
  - https://www.docker.com/products/docker-desktop/
  - Run: docker run --name postgresql -e POSTGRES_USER=<usuario> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres
- Install Pg Admin 4
  - https://www.pgadmin.org/download/
- Configure as rotas e teste a conexão com o database.

