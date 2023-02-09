//1º solicitamos o express module e 2º criamos uma instancia do express aplicativo
const express = require('express');
const app = express();

//Permite que um servidor envie uma resposta com cabeçalhos
const cors = require('cors');

//Importe db 
const pool = require('./config/db');

//Importe modulo path
const path = require('path');
const { json } = require('body-parser');

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
    res.render('index', {name: 'view engine EJS'});
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

//Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const allTask = await pool.query("SELECT * FROM tasks");
        res.json(allTask.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error : "Something went wrong"});
    }
});

//Get a task
//task.rows[0] = verifica se a task existe no database
//O operador "!", nega o valor.
app.get('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
        if (!task.rows[0]) {
            return res.status(404).json({ error: "Task not found"});
        }
        res.json(task.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error : "Something went wrong"});
    }
});

//Update a task
//A expressão task.rows.length === 0, verifica se o comprimento da rows propriedade array da task objeto é igual a zero.
//Se === 0 for TRUE, significa que a matriz está vazia e não contém um ou mais elementos.
// rows é a matriz de id.
app.put('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task_name } = req.body;

        const task = await pool.query("SELECT * FROM tasks WHERE id= $1", [id]);
        if (task.rows.length === 0) {
            return res.status(404).json( {message: "Task not found to update!" });
        }

        const updateTask = await pool.query("UPDATE tasks SET task_name = $1 WHERE id = $2", [task_name, id ]);
        res.json("Task was updated!");
    } catch (err) {
        console.error(err.message);   
    }
});

//Delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const task = await pool.query("SELECT * FROM tasks WHERE id= $1", [id]);
        if (task.rows.length === 0) {
            return res.status(404).json( { message: "Task not found to delete!" });
        }
        
        const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
        res.json("Task was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

//Catch-all route
app.use((req, res, next) => {
    res.status(404).send({ error: 'Not found' });
});

//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});