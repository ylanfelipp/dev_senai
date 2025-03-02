function verificaCPF(cpf, numeroVerficador) {
    if (cpf.length !== 11) {
        return "CPF inválido";
    }

    let listaNumerosCPF = cpf.split("").map(Number);
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += listaNumerosCPF[i] * (10 - i);
    }

    let restoDivisao = soma % 11;
    let primeiroDigito = restoDivisao < 2 ? 0 : 11 - restoDivisao;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += listaNumerosCPF[i] * (11 - i);
    }

    restoDivisao = soma % 11;
    let segundoDigito = restoDivisao < 2 ? 0 : 11 - restoDivisao;

    let digitosVerificador = `${primeiroDigito}${segundoDigito}`;
    return parseInt(digitosVerificador) === numeroVerficador ? "CPF válido" : "CPF Inválido";
}

console.log(verificaCPF("87429182941", 41));