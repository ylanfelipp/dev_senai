let numSorteado
let contador = 0

function realizaSorteio() {
    if (contador == 0) {
        numSorteado = Math.floor(Math.random() * 120) + 1
        document.getElementById("sorteado").innerHTML = numSorteado
        document.getElementById("btn-sorteia").style.display = "inline"
    }
}

function girarNum() {
    realizaSorteio()
    setInterval(girarNum, 50)
    document.getElementById("btn-inicio").style.display = "none"
}

function pararSorteio() {
    contador = 1
    document.getElementById("btn-reinicia").style.display = "inline"
    document.getElementById("btn-sorteia").style.display = "none"
}

function reinicia() {
    contador = 0
    document.getElementById("btn-reinicia").style.display = "none"
    document.getElementById("btn-sorteia").style.display = "inline"
}