"use strict";
// A declaração "void" é dada quando a função não retornará nada.
function pessoa(nome, idade) {
    console.log(`Seu nome é ${nome} e você tem ${idade} anos de idade!`);
}
pessoa("Bruno", 25);
const soma = (numero1, numero2, numero3 = 0) => {
    return `A soma entre os valores é ${numero1 + numero2 + numero3}! `;
};
console.log(soma(10, 10));
