const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const router = express.Router()

router.get("/usuarios", UsuarioController.listarUsuarios)
router.post('/usuarios', UsuarioController.criarUsuario)
router.patch('/usuarios', UsuarioController.atualizarUsuario)

module.exports = router