import { PersonCanvas } from "./PersonCanvas.js"

class Obstaculo extends PersonCanvas {
    #velocidadeX
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.#velocidadeX = 2
    }

    getVelocidadeX = function () {
        return this.#velocidadeX
    }

    atualizaPosicao = function () {
        this.posicaoX -= this.getVelocidadeX()

        if (this.posicaoX <= 0 - this.largura) {
            let alturaObstaculo = Math.floor(Math.random() * 90) + 70
            this.posicaoX = canvas.width - 100
            this.altura = alturaObstaculo
            this.posicaoY = canvas.height - alturaObstaculo
            this.velocidade += 0.4
        }

        if (this.getGameOver()) {
            this.velocidadeX = 0
            return
        }
        this.velocidadeX = 0.2
        this.posicaoX += this.velocidadeX
    }

}

export { Obstaculo }