let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => { //(e) representa o elemento que foi adicionado para o event listener.
    e.preventDefault(); //preventDefault()= Cancela o evento, significando que a ação padrão que pertence ao evento não ocorrerá.
    console.log("button clicked");
    
    formValidation();
});

let formValidation = () => {
    if (input.value === "") { //O operador de igualdade estrita (===) verifica se seus dois operandos são iguais, retornando um resultado booleano.
        msg.innerHTML = "Task cannot be blank"; 
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData(); //Add aqui depois que criar o object data.
    }
};

let data = {}; //Quaisquer dados que recebemos em um campo de entrada vamos armazenar em um objeto.
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost(); //Add esta function após ter criado a variavel createPost.
};

/*Literais de modelos usam acento graves (``) para definir uma string
${...} É uma substituição automática de váriaveis por valores reais.*/
let createPost = () => {           
    posts.innerHTML += `        
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

//função delete
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

//function edit
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML; //previousElementSibling =  propriedade somente leitura retorna o Element imediatamente anterior ao especificado na lista de filhos de seu pai
    e.parentElement.parentElement.remove();
};