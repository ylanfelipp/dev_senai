// Exercício de tratamento de erros

function soma(a, b) {
    return a + b
}

let resultado = soma(2, 3)

let x = 10

console.log(resultado + 10)


let objeto = {
    nome: 'João',
    idade: 30,
    endereco: 'Rua ABC, 123'
}

function imprimeNome(obj) {
    console.log(obj.nome)
}
imprimeNome(objeto)


console.log(soma(2, 3))

if (true) {
    console.log('Você corrigiu todos os erros!')
}
