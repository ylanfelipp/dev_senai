function verificadorCodigoEAN13(codigo, numeroVerficador) {
    if (codigo < 13) {
        return "Código Inválido"
    }

    let soma = 0;
    const listaNumerosCodigo = codigo.split("")
    console.log(listaNumerosCodigo)
    for (let i = 0; i <= codigo.length - 1; i++) {
        if (i % 2 == 0) {
            soma += (listaNumerosCodigo[i] * 3)
        } else {
            soma += listaNumerosCodigo[i]
        }
    }

    console.log(soma)

    // return verificador % 10 == 0 ? "Código válido" : "Código inválido"
}

console.log(verificadorCodigoEAN13("9782940199617", "7"))