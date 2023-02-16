# api-node-postgresql 💻
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

1. npm install
  - Para instalar todas as dependências

2. npm start
  - Executar aplicação

3. Executar docker
  - docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres

4. Configure o banco de dados:
  - Em database.sql contém as informações.

5. Teste a conexão com o banco de dados através do Thunder client:
  - Crie uma task_name: POST / http://localhost:5000/tasks/
  - Liste todas as task_name: GET / http://localhost:5000/tasks
  - Liste uma task_name: GET / http://localhost:5000/tasks/2
  - Atualize uma task_name: PUT / http://localhost:5000/tasks/1
  - Delete uma task_name: DELETE / http://localhost:5000/tasks/1

## Propósito para mim 🎯
Estudar e entender o funcionamento PERN stack, que irei separar em 2 projetos.
Anteriormente já havia estudado JavaScript e feito um projeto usando um CRUD puro em JS, que é um mecanismo que permite criar, ler, editar e excluir dados.
Com esse projeto anterior testei um aplicativo simples e aprendi como o JavaScript funciona.