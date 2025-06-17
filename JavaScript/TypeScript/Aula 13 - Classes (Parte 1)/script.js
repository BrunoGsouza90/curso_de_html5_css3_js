"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./src/abstract");
class Computador extends abstract_1.PropertyClass {
    constructor(nome, ram, cpu, ligado = false) {
        super(nome, ram, cpu, ligado);
    }
    ligar() {
        this.fligado = true;
        console.log(`O computador ${this.fnome} foi ligado com sucesso!`);
    }
    desligar() {
        this.fligado = false;
        console.log(`O computador ${this.fnome} foi desligado com sucesso!`);
    }
    info() {
        console.log('\n\nStatus do sistema:\n');
        console.log(`Nome: ${this.fnome}.`);
        console.log(`Ram: ${this.fram}.`);
        console.log(`CPU: ${this.fcpu}.`);
        console.log(`Ligado/Desligado: ${this.fligado == true ? "Ligado" : "Desligado"}.`);
    }
}
let computador1 = new Computador("Acer 9.4", 8, 2.4);
computador1.ligar();
computador1.info();
