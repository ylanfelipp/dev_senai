import Usuario from "../model/Usuario.js"
import fs from "fs/promises"
import bcrypt from "bcrypt"
import path from "path"
import jwt from "jsonwebtoken"

const caminho = path.join(import.meta.dirname, '../data/usuarios.json')
class UsuarioController {
    static async criarUsuario(req, res) {
        const userRequestKeys = Object.keys(req.body)
        const userKeys = ['nome', 'email', 'senha']
        for (let key of userRequestKeys) {
            if (!(userKeys.includes(key))) {
                return res.status(400).json({ mensagem: "Todos os campos devem ser preenchidos." })
            }
        }

        const { nome, email, senha } = req.body
        try {

            const senhaHash = await bcrypt.hash(senha, 10)

            const id = 'USER' + Date.now().toString()
            const user = new Usuario(id, nome, email, senhaHash)
            let usuarios = await fs.readFile(caminho, 'utf-8')
            usuarios = JSON.parse(usuarios)
            usuarios.push(user)

            await fs.writeFile(caminho, JSON.stringify(usuarios, null, 2), 'utf-8')

            return res.status(201).json({ id: user.id, nome: user.nome, email: user.email })
        } catch (err) {
            console.log(err.mensagem)
            return res.status(500).json({ mensagem: "Erro ao criar usuário." })
        }
    }

    static async login(req, res) {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({ mensagem: "Email e senha são obrigatórios." })
        }

        try {
            let usuarios = await fs.readFile(caminho, 'utf-8')
            usuarios = JSON.parse(usuarios)
            const usuario = usuarios.find(usuario => usuario.email === email)
            const validacaoSenha = await bcrypt.compare(senha, usuario.senha)
            if (!validacaoSenha || !usuario) {
                return res.status(404).json({ mensagem: "usuário não autorizado." })
            }
            const accessToken = jwt.sign(usuario, process.env.ACCESS_TOKEN_KEY)
            res.status(200).json({ token: accessToken })
        } catch {
            res.status(500).json({ mensagem: "Problema interno do servidor, tente novamente." })
        }
    }
}

export default UsuarioController