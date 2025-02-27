import { PersonCanvas } from "./PersonCanvas.js"

class Personagem extends PersonCanvas {
    #gravidade
    #velocidadeY
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.pulando = false
        this.#velocidadeY = 0
        this.#gravidade = 0.4
    }

    getGravidade = function() {
        return this.#gravidade
    }

    getVelocidadeY = function() {
        return this.#velocidadeY
    }

    setVelocidadeY = function(velocidade) {
        this.#velocidadeY += velocidade
    }

    saltar = function() {
        this.pulando = true
        this.setVelocidadeY(-15)
        this.posicaoY += this.getVelocidadeY()
    }

    atualizaPosicao = function () {
        if (this.pulando) {
            this.setVelocidadeY(this.getGravidade())
            this.posicaoY += this.getVelocidadeY()
    
            if (this.posicaoY - this.getVelocidadeY() >= 350) {
                this.posicaoY = 350
                this.pulando = false
            }
        }
    
        // if (gameOver) {
        //     this.velocidadeX = 0
        //     return
        // }
        this.velocidadeX = 0.2
        this.posicaoX += this.velocidadeX
    }
}

export { Personagem }