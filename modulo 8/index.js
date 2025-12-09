// 1.0 Preencher dados salvos ao carregar a pagina 

window.addEventListener("DOMContentLoaded", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("endereco"));

    if (dadosSalvos) {
        document.getElementById("cep").value = dadosSalvos.cep || "";
        document.getElementById("logradouro").value = dadosSalvos.logradouro || "";
        document.getElementById("bairro").value = dadosSalvos.bairro || "";
        document.getElementById("cidade").value = dadosSalvos.cidade || "";
        document.getElementById("estado").value = dadosSalvos.estado || "";
        document.getElementById("numero").value = dadosSalvos.numero || "";
    }
}); 

// 2.0 Buscar CEP com Fetch API

document.getElementById("cep").addEventListener("blur", evento => {
    const cepInformado = evento.target.value;

    if (cepInformado.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;

                salvarFormularioNoLocalStorage();
            } else {
                alert("CEP não encontrado");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP:", error));
});     


// 3.0 Salvar dados no localStorage


function salvarFormularioNoLocalStorage(){
    const dados = {
        cep: document.getElementById("cep").value, 
        logradouro: document.getElementById("logradouro").value, 
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value, 
        estado: document.getElementById("estado").value,
        numero: document.getElementById("numero").value
    };

    localStorage.setItem("endereco", JSON.stringify(dados));
}


// 4.0 salvar ao clicar em Enviar 

 document.getElementById("btnEnviar").addEventListener("click", evento => {
    
    evento.preventDefault(); //evita o refresh padrão
    salvarFormularioNoLocalStorage();
    alert("Dados Salvos com Sucesso!"); 

});

// 5.0 Atualizar localStorage quando digitar 

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        salvarFormularioNoLocalStorage();
    });
});
