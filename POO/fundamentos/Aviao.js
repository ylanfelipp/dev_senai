import { Veiculo } from "./Veiculo.js";

class Aviao extends Veiculo {
    #mach
    constructor(modelo, ano, marca, cor, velocidadeMax) {
        super(modelo, ano, marca, cor, velocidadeMax)
        this.tipo = "Avião"
        this.#mach = 0
    }

    acelerar = function() {
        this.#mach += 1
    }
}

export { Aviao }