function fatorial(n) {
    if (n == 0) {
        return 1
    }

    return n * fatorial(n - 1)
}

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(4))
console.log(fatorial(6))
console.log(fatorial(7))