class Tarefa {
    constructor(id, titulo, descricao, responsavel, prazo, sprint, prioridade) {
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.responsavel = responsavel
        this.prazo = prazo
        this.sprint = parseInt(sprint)
        this.prioridade = prioridade
        this.concluida = false
    }
}

module.exports = Tarefa