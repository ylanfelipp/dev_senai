class UsuarioController {
    static listarUsuarios(req, res) {
        res.send("listar usuarios")
    }

    static criarUsuario(req, res) {
        res.send("criando usuario")
    }

    static atualizarUsuario(req, res) {
        res.send("usuario atualizado")
    }
}

module.exports = UsuarioController