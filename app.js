//1º solicitamos o express module e 2º criamos uma instancia do express aplicativo
const express = require('express');
const app = express();

//import modulo path
const path = require('path');

//Config o diretorio de view and view engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Config files statics
app.use(express.static(__dirname + '/public'));

//usamos app.get() para definirmos uma rota e a resposta correspondente
app.get('/', (req, res) => {
    res.render('index', {name: 'My Express App'});
});

//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});