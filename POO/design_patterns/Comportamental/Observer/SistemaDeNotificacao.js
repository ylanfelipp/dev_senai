class SistemaDeNotificacao {
    #observadores
    constructor() {
        this.#observadores = []
    }

    addObservador(observador) {
        this.#observadores.push(observador)
    }

    removeObservador(observador) {
        this.#observadores = this.#observadores.filter(ob => ob.nome !== observador.nome)
    }

    notificar(dados) {
        this.#observadores.forEach(observador => {
            observador.update(dados)
        })
    }
}

export { SistemaDeNotificacao }