class Pedido {
    constructor(custo, estrategia) {
        this.custo = custo
        this.estrategia = estrategia
    }

    getCustoFinal() {
        return this.estrategia.calcularCusto(this.custo)
    }
}

export { Pedido }