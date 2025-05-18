import express from "express"
import tarefasRoutes from './routes/tarefas.route.js'
import usuarioRouter from './routes/usuarios.route.js'
import dotenv from "dotenv"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

const whiteList = ['https://www.google.com', 'http://127.0.0.1:8080', 'http://localhost:8080']
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not Allowed by Cors'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use('/v1/api/auth', authRouter)
app.use('/v1/api/tarefas', tarefasRoutes)
app.use('/v1/api/usuarios', usuarioRouter)

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({ mensagem: `${err.message}`})
    }
    next()
})

app.listen(8080, () => {
    console.log('servidor rodando...')
})