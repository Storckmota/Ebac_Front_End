// js/utils.js
const obterElemento = (id) => document.getElementById(id);
const formatoMoeda = (valor) => Number(valor).toFixed(2).replace('.', ',');

export const valorNegativo = (valor) => parseFloat(valor) < 0;

export const atualizarInterface = (gastosPorCategoria) => {

  if (!gastosPorCategoria || !gastosPorCategoria.categorias) return;

  // Atualiza cada categoria
  gastosPorCategoria.categorias.forEach(categoria => {
    const elemento = obterElemento(categoria.nome);
    if (elemento) {
      elemento.textContent = `${categoria.nome}: R$ ${formatoMoeda(categoria.valor)}`;
    }
  });

  // Atualiza total (SÓ SOMA TODAS AS CATEGORIAS, SEM OUTROS)
  const elementoTotal = obterElemento('Total');
  if (elementoTotal) {
    const total = gastosPorCategoria.categorias
      .reduce((acc, categoria) => acc + categoria.valor, 0);

    elementoTotal.textContent = `Total: R$ ${formatoMoeda(total)}`;
  }
};
