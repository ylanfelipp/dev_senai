
class Tarefa {
    constructor(id, titulo, responsavel, dataTermino) {
        this.id = id
        this.titulo = titulo
        this.responsavel = responsavel
        this.concluido = false
        this.dataCriacao = new Date().toISOString().slice(0, 10)
        this.dataTermino = dataTermino
    }
}

export default Tarefa