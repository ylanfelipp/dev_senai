const pegarUsuario = () => {
    return new Promise((resolve, reject) => {
        resolve({ nome: "Ylan", idade: 21 })
    })
}

const exibirUsuario = async () => {
    const user = await pegarUsuario()
    console.log(`Nome: ${user.nome}, Idade: ${user.idade}`)
}

exibirUsuario()