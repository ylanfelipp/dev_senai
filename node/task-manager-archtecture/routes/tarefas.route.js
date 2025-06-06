import express from "express"
import TarefasController from "../controllers/TarefasController.js"
import authenticateToken from "../middleware/authenticateToken.js"
const tarefasRoutes = express.Router()

tarefasRoutes.get('/', authenticateToken,TarefasController.getTarefas)
tarefasRoutes.post('/', authenticateToken,TarefasController.criarTarefa)
tarefasRoutes.get('/:id', authenticateToken, TarefasController.getTarefa)
tarefasRoutes.patch('/:id', authenticateToken,TarefasController.atualizarTarefa)
tarefasRoutes.delete('/:id', authenticateToken, TarefasController.deletarTarefa)


export default tarefasRoutes
