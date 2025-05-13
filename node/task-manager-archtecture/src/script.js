import express from "express"
import tarefasRoutes from '../routes/tarefas.route.js'
import usuarioRouter from '../routes/usuarios.route.js'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

app.use('/v1/api/tarefas', tarefasRoutes)
app.use('/v1/api/usuarios', usuarioRouter)

app.listen(8080, () => {
    console.log('servidor rodando...')
})