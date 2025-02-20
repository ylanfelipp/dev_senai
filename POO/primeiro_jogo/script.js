const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext('2d')
let gameOver = false
let gravidade = 0.6

const personagem = {
    posicaoX: 50,
    posicaoY: canvas.height - 50,
    largura: 50,
    altura: 50,
    velocidadeY: 0,
    velocidadeX: 0,
    pulando: false
}

document.addEventListener('click', e => {
    if(gameOver) location.reload()
})

document.addEventListener('keypress', e => {
    if (gameOver) return
    if (e.code == "Space") {
        personagem.velocidadeY = -15
        personagem.pulando = true
    }
})


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

    if (obstaculo.posicaoX <= 0 - obstaculo.largura) {
        let alturaObstaculo = Math.floor(Math.random() * 90) + 70
        obstaculo.posicaoX = canvas.width - 100
        obstaculo.altura = alturaObstaculo
        obstaculo.posicaoY = canvas.height - alturaObstaculo
        obstaculo.velocidade += 0.4
    }
}

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
    atualizaObstaculo()
    ctx.fillStyle = "red"
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) - 50, 400, 100)
    ctx.fillStyle = "black"
    ctx.font = "50px Arial"
    ctx.fillText("GAME OVER", (canvas.width / 2) - 150, (canvas.height / 2) - 5)
    gameOver = true
}

function atualizaPersonagem() {
    if (personagem.pulando) {
        personagem.velocidadeY += gravidade
        personagem.posicaoY += personagem.velocidadeY

        if (personagem.posicaoY - personagem.velocidadeY > 350) {
            personagem.posicaoY = 350
            personagem.pulando = false
        }
    }

    if (gameOver) {
        personagem.velocidadeX = 0
        return
    }
    personagem.velocidadeX = 0.2
    personagem.posicaoX += personagem.velocidadeX
} 

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    verificaColisao()
    desenhaObstaculo()
    desenhaPersonagem()
    atualizaObstaculo()
    atualizaPersonagem()
    requestAnimationFrame(loop)
}

loop()