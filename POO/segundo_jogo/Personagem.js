import { PersonCanvas } from "./PersonCanvas.js"

class Personagem extends PersonCanvas {
    #gravidade
    #velocidadeY
    #pontos
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.pulando = false
        this.#velocidadeY = 0
        this.#gravidade = 0.4
        this.#pontos = 0
    }

    getGravidade = function() {
        return this.#gravidade
    }

    getVelocidadeY = function() {
        return this.#velocidadeY
    }

    setVelocidadeY = function(velocidade) {
        if (velocidade === 0) {
            this.#velocidadeY = 0
        } else {
            this.#velocidadeY += velocidade
        }
    }

    setPontos = function(pontos) {
        this.#pontos += pontos
    }

    getPontos = function() {
        return this.#pontos
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
                this.setVelocidadeY(0)
                this.posicaoY = 350
                this.pulando = false
                this.setPontos(5)
                localStorage.setItem('pontos', this.getPontos())
            }
        }
    }
}

export { Personagem }