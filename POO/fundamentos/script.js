const carro = {
    marca: "Chevrolet",
    modelo: "Camaro", 
    vel: 0,
    acelerar: function() {
        this.vel += 10
    },
    frear: function() {
        this.vel -= 5
    },
    apresentacao: function() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nVelocidade: ${this.vel}km/h`)
    }
}


carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.apresentacao()
carro.frear()
carro.frear()
carro.frear()
carro.frear()
carro.apresentacao()