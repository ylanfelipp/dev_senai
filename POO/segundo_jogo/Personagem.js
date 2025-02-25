import { PersonCanvas } from "./PersonCanvas.js"

class Personagem extends PersonCanvas {
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        super(posicaoX, posicaoY, largura, altura, cor)
        this.pulando = false
        this.velocidadeY = 0
        this.gravidade = 0.6
    }

    saltar = function() {
        this.pulando = true
    }

    atualizaPosicao = function () {
        if (this.pulando) {
            this.velocidadeY += this.gravidade
            this.posicaoY += this.velocidadeY
    
            if (this.posicaoY - this.velocidadeY > 350) {
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