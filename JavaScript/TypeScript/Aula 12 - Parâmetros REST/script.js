"use strict";
const soma = (...numeros) => {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
};
console.log(soma(10, 10, 10));
