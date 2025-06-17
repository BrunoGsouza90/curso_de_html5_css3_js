"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Turbo(100);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia = 0;
        constructor(potencia) {
            this.fpotencia = potencia;
        }
        get fpotencia() {
            return this.potencia;
        }
        set fpotencia(potencia) {
            this.potencia = potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Normal {
        ligado = false;
        cilindros = 0;
        potencia = 0;
        constructor(potencia, cilindros, turbo) {
            this.potencia = (typeof (turbo) != "undefined" ? turbo.fpotencia + potencia : potencia);
            this.cilindros = cilindros;
        }
        ligar() {
            this.ligado = true;
            return "O motor está ligado!";
        }
        desligar() {
            this.ligado = false;
            return "O motor está desligado!";
        }
    }
    Motores.Normal = Normal;
})(Motores || (Motores = {}));
const carros1 = new Veiculos.Carro("Civic");
