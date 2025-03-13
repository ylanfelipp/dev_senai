class Observador {
    constructor(nome) {
        this.nome = nome
    }

    update(mensagem) {
        console.log(`O usuário ${this.nome} recebeu a notificação ${mensagem}`)
    }
}

export { Observador }