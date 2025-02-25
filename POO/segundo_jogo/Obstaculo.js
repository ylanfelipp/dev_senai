import { PersonCanvas } from "./PersonCanvas.js"

class Obstaculo extends PersonCanvas {
    #velocidadeX
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.#velocidadeX = 2
    }

    atualizaPosicao = function () {
        this.posicaoX -= this.#velocidadeX
    }
    
}

export { Obstaculo }