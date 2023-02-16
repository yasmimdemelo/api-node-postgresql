# api-node-postgresql 💻
Este projeto tem como finalidade configurar um servidor de backend, configurar um banco de dados e integrá-los.
Você encontrará a parte de interface sendo a continuação deste projeto aqui: https://github.com/yasmimdemelo/ui-pern-stack.

Ambos projetos são parte de uma aplicação PERN stack que é uma pilha que consiste em:
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

3. docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
  - Container que tem a instância da imagem docker.

4. Crie uma database no Pg Adm 4, que é um sistema de gerenciamento de banco de dados relacional PostgreSQL (RDBMS)
  - Clique em: "Databases" e selecione "Create" > "Database..." e nomeie a tabela como pern.
  
5. Crie a tabela dentro de pern database:
  - Em database.sql contém as informações.

6. Teste a aplicação com os métodos e endpoints abaixo através do Thunder client:
  - Crie uma task_name: POST / http://localhost:5000/tasks/
    - Body:
      {
        "task_name": "Estudar deploy"
      }
  - Liste todas as task_name: GET / http://localhost:5000/tasks
  - Liste uma task_name: GET / http://localhost:5000/tasks/1
  - Atualize uma task_name: PUT / http://localhost:5000/tasks/1
    - Body:
        {
          "task_name": "Estudar inglês"
        }
  - Delete uma task_name: DELETE / http://localhost:5000/tasks/1

## Propósito para mim 🎯
Estudar e entender o funcionamento PERN stack, que separei em 2 projetos, o primeiro é este configurando um servidor backend e o segundo é o frontend com a aplicação React.
Anteriormente já havia estudado JavaScript e feito um projeto usando um CRUD puro em JS, que é um mecanismo que permite criar, ler, editar e excluir dados, com isto testei um aplicativo simples e aprendi como o JavaScript funciona.
