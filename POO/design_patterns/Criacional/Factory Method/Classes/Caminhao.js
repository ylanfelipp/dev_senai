import ITransporte from "../Interfaces/ITransporte.js";

export default class Caminhao extends ITransporte {
    enviarProduto() {
        console.log("Produto está sendo transportado de caminhão")
    }
}