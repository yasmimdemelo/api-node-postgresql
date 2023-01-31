//1º solicitamos o express module
const express = require('express');
//2º criamos uma instancia do express aplicativo
const app = express();

//usamos app.get() para definirmos uma rota e a resposta correspondente
app.get('/', (req, res) => {
    res.send("Hello, Express and Node.js");
});

//app listen método para iniciar o servidor e escutar em uma porta específica
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});