const fs = require('fs')

console.log('==============INÍCIO=============')

fs.readFile('./teste.txt', {encoding: 'utf-8', flag: 'r+'}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

try {
    const dados = fs.readFileSync('./teste.txt', 'utf-8')
    console.log('Conteúdo -')
    console.log(dados)
} catch (err) {
    console.log(err)
}

console.log('================FIM===============')

try {
    fs.writeFileSync('./teste.txt', 'Hello, World!')
} catch(err) {
    console.log(err)
}

fs.writeFile('./teste.txt', 'Novo Texto', (err) => {
    console.log(err)
})

fs.appendFile('./teste.txt', '\nTexto Adicional', (err) => {
    console.log(err)
})

