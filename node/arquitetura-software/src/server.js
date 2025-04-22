const express = require('express')
const app = express()
const router = require('../routes/usuarios.routes')

app.use("/v1", router)

app.listen(8080, () => {
    console.log('servidor rodando...')
})