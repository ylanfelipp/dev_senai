const http = require("http")
const url = require('url')

const porta = 8000

const servidor = http.createServer((req, res) => {
    const urlTransformada = url.parse(req.url, true)
    const { pathname , query } = urlTransformada
    console.log(pathname)
    console.log(query)
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("<h1>Bem vindos a calculadora mais simples o possivel</h1>")
    } else if (pathname === "/soma") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let resultado = soma(query.a, query.b)
        res.end(`<h1>soma de dois numeros e: ${resultado}</h1>`)
    } else if (pathname === "/multiplicacao") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let resultado = multi(query.a, query.b)
        res.end(`<h1>multiplicacao de dois numeros e: ${resultado}</h1>`)
    } else if (pathname === "/divisao") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let resultado = divisao(query.a, query.b)
        res.end(`<h1>Divisao entre dois numeros e: ${resultado}</h1>`)
    } else if (pathname === "/subtracao") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let resultado = subtracao(query.a, query.b)
        res.end(`<h1>subtracao entre dois numeros e: ${resultado}</h1>`)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("<h1>404 Not Found</h1>")
    }
})

function soma(n1, n2) {
    return Number(n1) + Number(n2)
}

function subtracao(n1, n2) {
    return Number(n1) - Number(n2)
}

function multi(n1, n2) {
    return Number(n1) * Number(n2)
}

function divisao(n1, n2) {
    return Number(n1) / Number(n2)
}

servidor.listen(porta, () => {
    console.log("servidor rodando...")
})