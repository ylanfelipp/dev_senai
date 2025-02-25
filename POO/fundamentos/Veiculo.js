class Veiculo {
    #velocidade;
    constructor(modelo, ano, marca, cor, velocidadeMax) {
        this.modelo = modelo
        this.tipo = "Veículo"
        this.marca = marca
        this.cor = cor
        this.velocidadeMax = velocidadeMax
        this.#velocidade = 0
        this.aceleracao = 10
        this.ano = ano
        this.passageiros = []
    }

    getVelocidade = function() {
        return `Tipo: ${this.tipo} Modelo: ${this.modelo} Velocidade: ${this.#velocidade}km/h`
    }
    
    adicionarPessoa = function(passageiro) {
        this.passageiros.push(passageiro)
    }
    
    acelerar = function() {
        if (this.aceleracao + this.#velocidade < this.velocidadeMax) {
            this.#velocidade += this.aceleracao
        } else {
            this.#velocidade = this.velocidadeMax
        }
    }

    frear = function() {
        if (this.#velocidade - this.aceleracao <= 0) {
            this.#velocidade = 0
        } else {
            this.#velocidade -= this.aceleracao
        }
    }
}

export { Veiculo }