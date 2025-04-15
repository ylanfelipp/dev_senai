const express = require('express')
const app = express()

app.use(express.json())



const tarefas = [
    {
        id: 1,
        titulo: "Enviar relatório ao cliente",
        descricao: "Relatório semanal de progresso do projeto X",
        concluida: false,
        responsavel: "Ana",
        prazo: "2025-04-20",
        sprint: 3,
        prioridade: "baixa"
    }
]

app.get("/tarefas", (req, res) => {
    if (tarefas.length === 0) {
        res.status(500).json({ message: "Erro ao consultar a base de dados"})
    }

    const { size = 10, sprint = false, nome = false } = req.query

    let resTarefas = tarefas.splice(0, parseInt(size) + 1)

    if (sprint) {
        resTarefas = resTarefas.filter(tarefa => tarefa.sprint === parseInt(sprint))
    }

    if (nome) {
        resTarefas = resTarefas.filter(tarefa => tarefa.responsavel === nome)
    }

    res.status(200).json(resTarefas)
})

app.post('/tarefas', (req, res) => {

})

app.listen(8080, () => {
    console.log('Servidor rodando...')
})