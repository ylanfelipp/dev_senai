const dataProximoAniversario = new Date("2025-12-19")

const dataAtual = new Date()
// console.log(dataAtual.getTime())

const s = (Date.parse("2025-12-19") - Date.parse("2025-03-18")) / (1000 * 60 * 60 * 24)

console.log(s)