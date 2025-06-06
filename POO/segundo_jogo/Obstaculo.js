import { PersonCanvas } from "./PersonCanvas.js"

class Obstaculo extends PersonCanvas {
    #velocidadeX
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.#velocidadeX = 3.5
    }

    getVelocidadeX = function () {
        return this.#velocidadeX
    }

    atualizaPosicao = function () {
        this.posicaoX -= this.getVelocidadeX()

        if (this.posicaoX <= 0 - this.largura) {
            let alturaObstaculo = Math.floor(Math.random() * 90) + 70
            this.posicaoX = 800 - 100
            this.altura = alturaObstaculo
            this.posicaoY = 400 - alturaObstaculo
            this.velocidade += 0.4
        }
    }

}

export { Obstaculo }