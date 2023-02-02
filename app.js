//1º solicitamos o express module
const express = require('express');
//2º criamos uma instancia do express aplicativo
const app = express();
//import modulo path
const path = require('path');

//Config o diretorio de view
app.set('views', path.join(__dirname, 'views'));
//View engine to EJS
app.set('view engine', 'ejs');

//usamos app.get() para definirmos uma rota e a resposta correspondente
app.get('/', (req, res) => {
    res.render('index', {name: 'My Express App'});
});

//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});