const soma = (x, y) => x + y
const ehPar = (x) => x % 2 === 0
const dobraValores = ([...numeros]) => numeros.map(n => n * 2)
const contaCaracteres = (str) => str.length
const fatorial = (num) => {
    if (num === 0) return 1
    let fatorial = num
    for (let i = 1; i < num; i++) {
        fatorial *= i
    }

    return fatorial
}

console.log(soma(12, 3))
console.log(ehPar(4))
console.log(dobraValores([1, 2, 3, 4, 5]))
console.log(contaCaracteres("Ylan"))
console.log(fatorial(5))