import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
const usuarioRouter = express.Router()

usuarioRouter.post('/cadastro', UsuarioController.criarUsuario)

export default usuarioRouter