const Tarefa = require("../model/Tarefa")

let tarefas = [ {
    id: Date.now().toString(),
    nome: "fazer compras no mercado",
    concluido: false
}]

class TarefasController {
    static listarTarefas(req, res) {
        return res.status(200).json(tarefas)
    }

    static criarTarefa(req, res) {
        const { nome } = req.body
        const id = Date.now().toString()
        const tarefa = new Tarefa(id, nome)
        const addTarefa = tarefas.push(tarefa)
        if (addTarefa)
            return res.status(201).json(tarefa)
        return res.status(404).json({ message: "Bad Request" })
    }

    static atualizarTarefa(req, res) {
        const id = req.params.id
        const tarefaAtualizada = req.body
        const index = tarefas.findIndex(tarefa => {
            return tarefa.id == id
        })

        if (index == -1) {
            res.status(404).json({ message: "Tarefa não encontrada!"})
        }
        tarefas[index] = { ...tarefaAtualizada }
        return res.status(200).json(tarefaAtualizada)
    }

    static deletarTarefa(req, res) {
        const id = req.params.id
        const index = tarefas.findIndex(tarefa => tarefa.id == id)
        if (index == -1) {
            return res.status(404).json({ message: "Tarefa não encontrada!"})
        }

        tarefas = tarefas.filter(tarefa => tarefa.id !== id)
        return res.status(204).send()
    }
}

module.exports = TarefasController