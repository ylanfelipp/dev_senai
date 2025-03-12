const express = require('express')
const { randomId } = require('./utilities/randomId.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//dados
let usuarios = [
    { id: randomId(), nome: 'Joao', email: 'joao@joao.com' }
]

app.get('/', (req, res) => {
    res.send(usuarios)
})

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.post('/usuarios', (req, res) => {
    let id = randomId()
    const newId = usuarios.includes(user => user.id == id) ? randomId() : id

    let novoUsuario = Object.assign({ id: newId }, req.body)
    usuarios.push(novoUsuario)
    res.json({status: 'usuario cadastrado com sucesso'})
})

app.delete('/usuarios', (req, res) => {
    const { id } = req.body
    const usuario = usuarios.findIndex(user => user.id === id)
    if (usuario === -1) {
        res.status(404).json({ msg: "usuário não encontrado!" })
        return
    }
    usuarios = usuarios.filter(user => user.id !== id)
    res.status(204).json( { msg: "Usuário deletado com Sucesso" } )
})

app.listen(5000, () => {
    console.log('o servidor está rodando http://localhost:5000')
})