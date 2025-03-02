function verificadorCodigoEAN13(codigo, numeroVerficador) {
    if (codigo.length !== 13) {
        return "Código Inválido";
    }

    const listaNumerosCodigo = codigo.split("").map(Number);
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            soma += listaNumerosCodigo[i] * 1;
        } else {
            soma += listaNumerosCodigo[i] * 3;
        }
    }

    const restoDivisao = soma % 10;
    const digitoVerificador = restoDivisao === 0 ? 0 : 10 - restoDivisao;

    return digitoVerificador === parseInt(numeroVerficador) ? "Código válido" : "Código inválido";
}

console.log(verificadorCodigoEAN13("9782940199617", "7"));