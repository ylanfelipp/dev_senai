import ITransporte from "../Interfaces/ITransporte.js";

export default class Navio extends ITransporte {
    enviarProduto() {
        console.log("Produto está sendo Transportado de Navio")
    }
}