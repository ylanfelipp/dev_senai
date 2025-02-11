function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    // original: let media = soma / (notas.length - 1);
    let media = soma / notas.length;
    return media;
}

function classificarAluno(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 4) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

function imprimirResultado(notas) {
    let media = calcularMedia(notas);
    let resultado = classificarAluno(media);
    console.log(`Média: ${media}`);
    console.log(`Resultado: ${resultado}`);
}

let notas = [8, 6, 7, 9];
imprimirResultado(notas);
