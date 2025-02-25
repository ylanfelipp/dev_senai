class PersonCanvas {
    #posicaoX
    #posicaoY
    #largura
    #altura
    #cor
    constructor(posicaoX, posicaoY, largura, altura, cor) {
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
        this.largura = largura
        this.altura = altura
        this.cor = cor
    }

    desenhar = function(ctx) {
        ctx.fillStyle = this.cor
        ctx.fillRect(
            this.posicaoX, 
            this.posicaoY, 
            this.largura, 
            this.altura
        )
    }

    atualizaPosicao = function () {
        console.log("Atualiza Posição")
    }
}

export { PersonCanvas }