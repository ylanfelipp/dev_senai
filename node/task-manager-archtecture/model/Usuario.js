import { v4 as uuid } from "uuid"

class Usuario {
    constructor(nome, email, senha) {
        this.id = uuid()
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}

export default Usuario