const express = require('express')
const app = express()
const Router = require('../routes/tarefas.route')
const RouterAuth = require('../routes/autenticacao.route')

app.use(express.json())
app.use("/", Router)
app.use('/v1', RouterAuth)

app.listen(8000, () => {
    console.log('servidor rodando...')
})