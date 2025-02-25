import { Veiculo } from "./Veiculo.js";

class Carro extends Veiculo {
    constructor(modelo, ano, marca, cor, velocidadeMax) {
        super(modelo, ano, marca, cor, velocidadeMax)
        this.aceleracao = 15
        this.tipo = "Carro"
    }
}

export { Carro }