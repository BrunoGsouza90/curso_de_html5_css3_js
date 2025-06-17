"use strict";
const resultado = window.document.querySelector("#resultado");
class Pessoas {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        resultado.innerHTML += `Seu nome é ${this.nome} e você tem ${this.idade}.<br>`;
    }
}
let Pessoa1 = new Pessoas("Bruno", "25 anos");
let Pessoa2 = new Pessoas("Lucas", "32 anos");
