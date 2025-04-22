class AuthController {
    static login(req, res) {
        const { email, senha } = req.body

        if (email.trim() == "" || senha.trim() == "")
            return res.status(400).json({ message: "email e/ou senha inválidos!"})
    }
}

module.exports = AuthController