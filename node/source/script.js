const express = require('express')
const app = express()

const porta = 8080

let usuarios = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send(usuarios)
})

app.post("/usuario", (req, res) => {
    const randomId = Math.floor(Math.random() * 10000) + 1
    usuarios.push({ id: randomId, ...req.body })
    res.send(req.body)
})

app.put("/usuario", (req, res) => {
    const id = parseInt(req.query.id)
    const { email } = req.body
    const atualizado = usuarios.filter(us => us.id === parseInt(id)).map(() => {
        return { id, ...req.body, email: email }
    })
    usuarios = usuarios.filter(us => us.id !== parseInt(id))
    usuarios.push(atualizado[0])
    res.send(usuarios)
})

app.delete("/usuario", (req, res) => {
    const id = req.query.id
    usuarios = usuarios.filter(user => user.id !== parseInt(id))
    res.send(usuarios)
})

app.listen(porta, () => {
    console.log("servidor rodando...")
})