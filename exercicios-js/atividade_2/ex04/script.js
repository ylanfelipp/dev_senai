const numeros = [10, 20, 30, 40, 50]
numeros.push(60)
console.log(numeros)

let valorRemovido = numeros.pop()
console.log(numeros, valorRemovido)

numeros.splice(2, 1)
console.log(numeros)

numeros.sort((a, b) => {
    return b - a
})
console.log(numeros)