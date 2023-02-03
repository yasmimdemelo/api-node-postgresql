//1º solicitamos o express module e 2º criamos uma instancia do express aplicativo
const express = require('express');
const app = express();

//Permite que um servidor envie uma resposta com cabeçalhos
const cors = require('cors');

//Importe db 
const pool = require('./config/db');

//Importe modulo path
const path = require('path');

//Config o diretorio de view and view engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Config statics files
app.use(express.static(__dirname + '/public'));

//Middleware
app.use(cors());
app.use(express.json());

//Usamos app.get() para definirmos uma rota e a resposta correspondente
app.get('/', (req, res) => {
    res.render('index', {name: 'My Express App'});
});

//Create a task
app.post('/tasks', async (req, res) => {
    try {
        //Extract task_name from request body
        const { task_name } = req.body;

        //Insert the new task into the database
        const newTask = await pool.query(
            "INSERT INTO tasks (task_name) VALUES($1) RETURNING *", [ task_name ]);

        //Send the newly created task in the response
        res.json(newTask.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

//get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const allTask = await pool.query("SELECT * FROM tasks");
        res.json(allTask.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a task
app.get('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
        res.json(task.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});