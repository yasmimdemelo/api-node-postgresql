//1º solicitamos o express module e 2º criamos uma instancia do express aplicativo
const express = require('express');
const app = express();

//Import body-parser para analisar corpos de solitações
const bodyParser = require('body-parser');

//Importe db 
const pool = require('./config/db');

//import modulo path
const path = require('path');

//Config o diretorio de view and view engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Config statics files
app.use(express.static(__dirname + '/public'));

//Configure o analisador de corpo para analisar corpos de solicitação JSON
app.use(bodyParser.json());

//usamos app.get() para definirmos uma rota e a resposta correspondente
app.get('/', (req, res) => {
    res.render('index', {name: 'My Express App'});
});

app.post('/task', async (req, res) => {
    try {
        //Extract task_name from request body
        const { task_name } = req.body;

        //Insert the new taskinto the database
        const client = await pool.connect();
        const result = await client.query('INSERT INTO tasks (task_name) VALUES($1) RETURNING task_name', [task_name]);
        const id = result.rows[0].id;
        client.release(); //release libera a conexao do cliente acima com o database

        //Send the newly created task in the response
        res.status(201).send({ task_name });

    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting task into database");
    }
});


//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});