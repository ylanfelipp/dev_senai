function randomId() {
    const valor = () => Math.floor((Math.random() * 10000000) + 1)
    const listABC = ["a1aGVNKULA", "BhnbFOI", "cKMNGashdg", "D", "B", "f", "gungfDFADS", "HHGSFA", "AGGSFDKJGNNMLOIP"]
    let randomIdString = ""
    for (let i = 0; i < 7; i++) {
        if (i % 2 == 0 && i >= 2) {
            randomIdString += valor()
            continue
        }
        const index = Math.floor(Math.random() * listABC.length)
        randomIdString += listABC[index]
    }
    return randomIdString
}

module.exports =  { randomId }