import { Estrategia } from "./Estrategia.js";

class EstrategiaEnvioPlus extends Estrategia {
    calcularCusto(custo) {
        return custo * 1.8
    }
}

export { EstrategiaEnvioPlus }