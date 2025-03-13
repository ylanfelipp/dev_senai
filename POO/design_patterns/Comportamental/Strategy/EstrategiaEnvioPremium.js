import { Estrategia } from "./Estrategia.js";

class EstrategiaEnvioPremium extends Estrategia {
    calcularCusto(custo) {
        return custo * 1.2
    }
}

export { EstrategiaEnvioPremium }