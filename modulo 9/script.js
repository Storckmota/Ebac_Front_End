const API = "https://crudcrud.com/api/adbe7db1a02e491ba9bc07d11800abe5/clientes";

document.getElementById("btnCadastrar").addEventListener("click", cadastrarCliente);
document.getElementById("btnListar").addEventListener("click", listarClientes);

function cadastrarCliente (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const cliente = {nome: nome, email: email};

    fetch(API, {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(cliente)
    })

    .then(response => response.json())
    .then(data => {
        alert("Cliente Cadastrado!");
    })
    .catch(error => console.error("Erro ao cadastrar:", error));
}

function listarClientes (event){
    event.preventDefault();

    container.innerHTML = ""; 

    const titulo = document.createElement("h3");
    titulo.textContent = "Lista de cliente";
    container.appendChild(titulo);

    const ul = document.createElement("ul");
    container.appendChild(ul); 

    fetch(API)
        .then(response => response.json())
        .then(clientes => {
            clientes.forEach(cliente => {
                
                const li = document.createElement("li");
                li.textContent = `${cliente.nome} - ${cliente.email}`;

               const btn = document.createElement("button");
               btn.textContent = "Excluir";
               btn.style.marginLeft = "10px";

               btn.addEventListener("click", () => {removerCliente(cliente._id)});

                li.appendChild(btn);
                ul.appendChild(li);
            });

        });
}

function removerCliente (id){
    fetch(`${API}/${id}`, {
       
        method: "DELETE"

    })

    .then(() => listarClientes(new Event ("click")));
}