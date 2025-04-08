console.log("Hello World!")

setTimeout(() => {
    const future = Date.now() + 10000
    while(Date.now() <= future) {}
    console.log("Timeout 1")
}, 1000)

function pedirPizza(saborPizza, comerPizza) {
    console.log("Preparando Pizza de " + saborPizza + " aguarde 10 segundos...")
    setTimeout(comerPizza, 10000, saborPizza)
}

const callbackFunc = (saborPizza) => {
    console.log("Pizza Finalizada!")
    console.log("Comendo Pizza de " + saborPizza + "...")
}

pedirPizza("Calabresa", callbackFunc)
console.log("Fim do Programa!")

setTimeout(() => {
    console.log("================Exerícios de Assíncronismo================")
}, 2000)

function cozinhar() {
    setTimeout(() => {
        console.log("Ligar o Fogão")
        ligarFogao(ferverAgua)
    }, 3000)
}

function ligarFogao(ferverAgua) {
    setTimeout(() => {
        console.log("Ferver Água")
        ferverAgua(cozinharMacarrao)
    }, 3000)
}

function ferverAgua(cozinharMacarrao) {
    setTimeout(() => {
        cozinharMacarrao(escorrerMacarrao)
    }, 3000)
}

function cozinharMacarrao(escorrerMacarrao) {
    console.log("Cozinhar Macarrão")
    setTimeout(() => {
        escorrerMacarrao(servirPrato)
        console.log("Escorrer Macarrão")
    }, 3000)
}

function escorrerMacarrao(servirPrato) {
    setTimeout(() => {
        servirPrato()
    }, 3000)
}

function servirPrato() {
    console.log("O prato está servido")
}

cozinhar()