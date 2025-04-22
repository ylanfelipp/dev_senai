const express = require('express')
const TarefasController = require('../controllers/TarefasController')
const Router = express.Router()

Router.get("/tarefas", TarefasController.listarTarefas)
Router.post("/tarefas", TarefasController.criarTarefa)
Router.put("/tarefas/:id", TarefasController.atualizarTarefa)
Router.delete("/tarefas/:id", TarefasController.deletarTarefa)

module.exports = Router