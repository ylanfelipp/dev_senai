import ITransporte from "../Interfaces/ITransporte"

export default class Aviao extends ITransporte {
    enviarProduto() {
        console.log("Produto está sendo transportado de Avião")
    }
}