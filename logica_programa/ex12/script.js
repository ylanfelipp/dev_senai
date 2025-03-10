let romano, anula = 0

const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function converteRomanosEmDecimal() {
    let num, result = 0, anterior = 0, atual = 0
    romano = document.getElementById("romano").value.toUpperCase()

    if (!verificarSeExistemMaisDeTresLetrasIguaisConsecutivas(romano) && anula === 0) {
        for (let i = 0; i < romano.length; i++) {
            atual = romano.charAt(i)
            if (!Object.keys(numerosRomanos).includes(atual)) {
                anula = 1
                i = romano.length
            }
            num = numerosRomanos[atual]
            if (i > 0) {
                if (romano[i - 2] === romano[i - 1] && num > anterior) {
                    anula = 1
                }
            }
    
            if (num === anterior && (anterior === 5 || anterior == 50|| anterior == 500)) {
                anula = 1
            }
    
            if (num > anterior) {
                if (anterior !== 5 && anterior !== 50 && anterior !== 500 && anula === 0) {
                    result += result + num - (anterior * 2) 
                } else {
                    anula = 1
                }
            } else {
                if (anula === 0) {
                    result += num
                }
            }
            anterior = num
        }

        if (anula === 0) {
            document.getElementById("decimal").innerHTML = "Resultado: " + result
        } else {
            setErro()
        }
    } else {
        setErro()
    }
}

function verificarSeExistemMaisDeTresLetrasIguaisConsecutivas(romano) {
    let regex = /(A-Z)\1{3}/
    let result = regex.test(romano)
    return result
}

function setErro() {
    document.getElementById("decimal").innerHTML = "Resultado: --"
    alert("Algarismo inválido: " + romano)
    document.getElementById("romano").value = ""
    anula = 0
}