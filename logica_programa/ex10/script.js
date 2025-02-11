function verificaCPF(cpf, numeroVerficador) {
    if (cpf.length < 11) {
        return "CPF inválido"
    }

    let listaNumerosCPF = cpf.split("")
    listaNumerosCPF = listaNumerosCPF.slice(0, 9)
    let soma = 0
    for (let i = 0; i < 9; i++) {
        for (let j = 10; j >= 2; j--) {
            soma += (parseInt(listaNumerosCPF[i]) * j)
        }
    }

    let digitosVerificador = ""
    let restoDivisao = soma % 11
    if (restoDivisao < 2) {
        digitosVerificador += 0
    } else {
        digitosVerificador += (11 - restoDivisao)
    }

    soma = 0
    for (let i = 0; i < 9; i++) {
        for (let j = 11; j >= 2; j--) {
            soma += (parseInt(listaNumerosCPF[i]) * j)
        }
    }

    restoDivisao = soma % 11
    if (restoDivisao < 2) {
        digitosVerificador += 0
    } else {
        digitosVerificador += (11 - restoDivisao)
    }

    console.log(digitosVerificador)
    console.log(numeroVerficador)

    return parseInt(digitosVerificador) === numeroVerficador ? "CPF válido" : "CPF Inválido"
}

console.log(verificaCPF("14481082925", 25))