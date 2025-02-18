const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext('2d')

document.addEventListener('click', e => {
    if(gameOver) location.reload()
})

let gameOver = false

const personagem = {
    posicaoX: 50,
    posicaoY: canvas.height - 50,
    largura: 50,
    altura: 50
}

function desenhaPersonagem() {
    ctx.fillStyle = "white"
    ctx.fillRect(
        personagem.posicaoX, 
        personagem.posicaoY, 
        personagem.largura, 
        personagem.altura
    )
}

const obstaculo = {
    posicaoX: canvas.width - 100,
    posicaoY: canvas.height - 100,
    largura: 50,
    altura: 100,
    velocidade: 5
}

function desenhaObstaculo() {
    ctx.fillStyle = "red"
    ctx.fillRect(
        obstaculo.posicaoX, 
        obstaculo.posicaoY, 
        obstaculo.largura, 
        obstaculo.altura
    )
}

function atualizaObstaculo() {
    obstaculo.posicaoX -= obstaculo.velocidade
}

function verificaColisao() {
    if (
        personagem.posicaoX < obstaculo.posicaoX + obstaculo.largura &&
        personagem.posicaoX + personagem.largura > obstaculo.posicaoX
    ) {
        houveColisao()
    }
}

function houveColisao() {
    obstaculo.velocidade = 0
    atualizaObstaculo()
    ctx.fillStyle = "red"
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) - 50, 400, 100)
    ctx.fillStyle = "black"
    ctx.font = "50px Arial"
    ctx.fillText("GAME OVER", (canvas.width / 2) - 150, (canvas.height / 2) - 5)
    gameOver = true
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    verificaColisao()
    desenhaObstaculo()
    desenhaPersonagem()
    atualizaObstaculo()
    requestAnimationFrame(loop)
}

loop()