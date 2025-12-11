import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
);

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valor = formulario.elements.valor.value;
    const categoriaSelecionada = formulario.elements.categoria.value;

    if (valorNegativo(valor)) {
        alert("Valor inválido: não pode ser negativo.");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaSelecionada);
    categoria.adicionarValor(valor);

    atualizarInterface(gastosPorCategoria);

    formulario.reset();
});
