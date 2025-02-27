import { Personagem } from "./Personagem.js"
import { Obstaculo } from "./Obstaculo.js"


const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext('2d')

document.addEventListener('click', e => {
    if(personagem.getGameOver()) location.reload()
})

document.addEventListener('keypress', e => {
    if (e.code == "Space") {
        personagem.saltar()
    }
})

const personagem = new Personagem(50, canvas.height - 50, 50, 50, "white")

const obstaculo = new Obstaculo(canvas.width - 100, canvas.height - 100, 50, 100, "red")

function verificaColisao() {
    if (
        personagem.posicaoX < obstaculo.posicaoX + obstaculo.largura &&
        personagem.posicaoX + personagem.largura > obstaculo.posicaoX &&
        personagem.posicaoY < obstaculo.posicaoY + obstaculo.altura &&
        personagem.posicaoY + personagem.altura > obstaculo.posicaoY
    ) {
        houveColisao()
    }
}

function houveColisao() {
    obstaculo.velocidade = 0
    obstaculo.atualizaPosicao()
    ctx.fillStyle = "red"
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) - 50, 400, 100)
    ctx.fillStyle = "black"
    ctx.font = "50px Arial"
    ctx.fillText("GAME OVER", (canvas.width / 2) - 150, (canvas.height / 2) - 5)
    personagem.setGameOver(true)
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    verificaColisao()
    obstaculo.desenhar(ctx)
    personagem.desenhar(ctx)
    if(personagem.getGameOver()) return
    personagem.atualizaPosicao()
    obstaculo.atualizaPosicao()
    requestAnimationFrame(loop)
}

loop()