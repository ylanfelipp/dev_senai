import { v4 as uuid } from "uuid"

class Tarefa {
    constructor(titulo, responsavel, dataTermino) {
        this.id = uuid()
        this.titulo = titulo
        this.responsavel = responsavel
        this.concluido = false
        this.dataCriacao = new Date().toISOString().slice(0, 10)
        this.dataTermino = dataTermino
    }
}

export default Tarefa