function main(n1, n2) {
    console.log(`Soma: ${soma(n1, n2)}`)
    console.log(`Subtração: ${subtracao(n1, n2)}`)
    console.log(`Multiplicação: ${multiplicacao(n1, n2)}`)
    console.log(`Divisão: ${divisao(n1, n2)}`)
}

main(12, 3)


function divisao(n1, n2) {
    if (n1 == 0) throw new Error("Não existe divisão por zero")

    return n1 / n2
}

function subtracao(n1, n2) {
    return n1 - n2
}

function soma(n1, n2) {
    return n1 + n2
}

function multiplicacao(n1, n2) {
    return n1 + n2
}