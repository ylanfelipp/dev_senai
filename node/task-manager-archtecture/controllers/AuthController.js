import jwt from "jsonwebtoken"
import fs from "fs/promises"
import path from "path"
import bcrypt from "bcrypt"

const caminho = path.join(import.meta.dirname, '../data/usuarios.json')
class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({ mensagem: "Email e senha são obrigatórios." })
        }

        try {
            let usuarios = await fs.readFile(caminho, 'utf-8')
            usuarios = JSON.parse(usuarios)
            const user = usuarios.find(usuario => usuario.email === email)
            if (!user) {
                res.sendStatus(404)
            }
            const validacaoSenha = await bcrypt.compare(senha, user.senha)
            if (!validacaoSenha || !user) {
                return res.status(404).json({ mensagem: "usuário não autorizado." })
            }
            const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '30s' })
            const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '1d' })
            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                path: "/",
                maxAge: 24 * 60 * 60 * 1000
            })
            const userIndex = usuarios.findIndex(user => user.email === email)
            usuarios[userIndex].refreshToken = refreshToken
            await fs.writeFile(caminho, JSON.stringify(usuarios, null, 2), 'utf-8')
            return res.status(200).json({ accessToken })
        } catch (err) {
            res.status(500).json({ mensagem: "Problema interno do servidor, tente novamente.", error: err.message })
        }
    }

    static async refreshToken(req, res) {
        const token = req.cookies?.jwt

        if (!token) return res.sendStatus(401)

        try {
            const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_KEY)
            console.log(decoded)

            let users = JSON.parse(await fs.readFile(caminho, 'utf-8'))
            const user = users.find(user => user.refreshToken === token)
            if (!user) return res.sendStatus(403)

            const newRefreshToken = jwt.sign({ email: decoded.email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '1d' })

            user.refreshToken = newRefreshToken
            const accessToken = jwt.sign({ email: decoded.email }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1m' })
            await fs.writeFile(caminho, JSON.stringify(users, null, 2), 'utf-8')
            res.cookie('jwt', newRefreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                path: "/",
                maxAge: 24 * 60 * 60 * 1000
            })
            res.status(200).json({ accessToken })
        } catch (err) {
            res.status(403).json({ mensagem: "Refresh Token Inválido", errorMessage: err.message })
        }
    }

    static async logout(req, res) {
        const token = req.cookies?.jwt

        if (!token) {
            return res.sendStatus(204)
        }

        try {
            const users = JSON.parse(await fs.readFile(caminho, 'utf-8'))
            const user = users.find(user => user.refreshToken === token)
            if (!user) {
                res.clearCookie('jwt', { httpOnly: true, sameSite: 'strict', secure: false, path: "/"})
                return res.sendStatus(204)
            }

            const userIndex = users.findIndex(user => user.refreshToken === token)
            users[userIndex].refreshToken = ""
            await fs.writeFile(caminho, JSON.stringify(users, null, 2), 'utf-8')
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'strict', secure: false, path: "/"})
            console.log(users)
            return res.sendStatus(204)
        } catch(err) {
            return res.status(500).json({ mensagem: "Erro Interno do Servidor. Não foi possível fazer o logout", error: err.message })
        }
    }
}

export default AuthController