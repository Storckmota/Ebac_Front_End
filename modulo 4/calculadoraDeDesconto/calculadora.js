
function calcularDesconto () {
    let valorOriginal = document.getElementById(valor).value;
    let desconto = document.getElementById(desconto).value;

    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto

    document.getElementById("resultado").textContent = "Valor final:" + valorFinal;
}

