import { EstrategiaEnvioPlus } from "./EstrategiaEnvioPlus.js"
import { EstrategiaEnvioPremium } from "./EstrategiaEnvioPremium.js"
import { Pedido } from "./Pedido.js"

const pedido_1 = new Pedido(50, new EstrategiaEnvioPremium)
console.log(pedido_1.getCustoFinal())
const pedido_2 = new Pedido(200, new EstrategiaEnvioPlus)
console.log(pedido_2.getCustoFinal())