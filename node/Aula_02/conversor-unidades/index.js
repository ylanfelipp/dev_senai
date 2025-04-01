class Conversor {
    static quilometrosParaMilhas(km) {
        return Number(km) / 0.621371
    }

    static milhasParaQuilometro(milhas) {
        return Number(milhas) * 0.621371
    }

    static metrosParaJardas(metros) {
        return Number(metros) * 1.094
    }

    static jardasParaMetros(jardas) {
        return Number(jardas) / 1.094
    }

    static centimetrosParaPes(cent) {
        return Number(cent) / 30.48
    }

    static pesParaCentimetros(pes) {
        return Number(pes) * 30.48
    }

    static kilogramaParaLibra(kg) {
        return Number(kg) * 2.205
    }

    static LibraParaKilograma(libra) {
        return Number(libra) / 2.205
    }
}

module.exports = { Conversor }