const pessoa = {
    nome: "Alan",
    idade: 21,
    profissao: "Desenvolvedor jr.",
    endereco: {
        cidade: "Nowhere",
        rua: "Bobos",
        numero: 0
    },
    apresentacao() {
        return `Oi, meu nome é ${this.nome} tenho ${this.idade} anos.`
    }
}

console.log(pessoa.apresentacao())
console.log(pessoa.endereco)
pessoa.profissao = "Desenvolvedor Sr."
console.log(pessoa)
pessoa.telefone = "(48) 9 8820-2018"
console.log(pessoa)