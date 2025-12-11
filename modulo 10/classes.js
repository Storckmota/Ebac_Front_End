export class Categoria {
    #nome;
    #valor;

    constructor(nome) {
        this.#nome = nome;
        this.#valor = 0;
    }

    get nome() {
        return this.#nome;
    }

    get valor() {
        return this.#valor;
    }

    adicionarValor(valor) {
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;

    constructor(...categorias) {
        this.#categorias = categorias;
    }

    get categorias() {
        return this.#categorias;
    }

    obterCategoriaPorNome(nome) {
        return this.#categorias.find(cat => cat.nome === nome);
    }

    obterTotal() {
        return this.#categorias.reduce((total, cat) => total + cat.valor, 0);
    }
}
