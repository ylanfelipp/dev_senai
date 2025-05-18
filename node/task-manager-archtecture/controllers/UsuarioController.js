import Usuario from "../model/Usuario.js"
import fs from "fs/promises"
import bcrypt from "bcrypt"
import path from "path"

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

            const user = new Usuario(nome, email, senhaHash)
            let usuarios = await fs.readFile(caminho, 'utf-8')
            usuarios = JSON.parse(usuarios)
            usuarios.push(user)

            await fs.writeFile(caminho, JSON.stringify(usuarios, null, 2), 'utf-8')
            return res.status(201).json(user)
        } catch (err) {
            return res.status(500).json({ mensagem: "Erro ao criar usuário." })
        }
    }
}

export default UsuarioController