function positivoNegativo(...numeros) {
    let positivos = 0
    let negativos = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++
        } else {
            negativos++
        }
    }

    return `Qtd Números Positivos: ${positivos}\nQtd Números Negativos: ${negativos}`
}

console.log(positivoNegativo(12, -25, -41, 16, -255))