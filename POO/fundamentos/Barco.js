import { Veiculo } from "./Veiculo.js";
class Barco extends Veiculo {
    constructor(tipo, ano, marca, cor, velocidadeMax) {
        super(tipo, ano, marca, cor, velocidadeMax)
    }
}

export { Barco }
