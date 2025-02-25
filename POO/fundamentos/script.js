import { Veiculo } from './Veiculo.js'
import { Pessoa } from './Pessoa.js'
import { Carro } from './Carro.js'
import { Aviao } from './Aviao.js'


const carro = new Veiculo("SUV", 2025, "Reanult", "prata", 220)
const Motorista = new Pessoa("Ylan", 21, "Motorista")
const Passageiro = new Pessoa("Sarah", 20, "Passageiro")
carro.adicionarPessoa(Motorista)
carro.adicionarPessoa(Passageiro)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.frear()
carro.frear()
carro.frear()
console.log(carro.getVelocidade())

const ferrari = new Carro("F40", 2024, "Ferrari", "Vermelha", 450)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.frear()
ferrari.frear()
ferrari.frear()
ferrari.frear()
const novoPassageiro = new Pessoa("Alan", 45, "Passageiro")
ferrari.adicionarPessoa(novoPassageiro)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())

const aviao = new Aviao()
aviao.acelerar()