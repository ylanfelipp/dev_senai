function isPrimo(n1) {
    for(let i = 2; i < n1; i++) {
        if (n1 % i === 0) {
            return "Não é Primo"
        }
    }

    return "É Primo"
}

console.log(isPrimo(12))
console.log(isPrimo(7))
console.log(isPrimo(3))
console.log(isPrimo(9))