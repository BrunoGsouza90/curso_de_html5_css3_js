"use strict";
// Podemos declarar Arrays dessas duas maneiras.
let numeros;
let numeros1;
numeros = [
    1,
    "1",
    30,
    "30"
];
numeros1 = [
    1,
    "1",
    30,
    "30"
];
numeros.pop();
numeros1.splice(3, 4);
console.log(numeros, numeros1);
// Aqui estamos declarando um Array que pode ser apenas lido.
let apenas_leitura = [
    1,
    2,
    3,
    4
];
console.log(apenas_leitura);
// Erro pois o Array é apenas para leitura.
// apenas_leitura.pop()
// Caso queira acrencetar valores é necessário reatribuir.
apenas_leitura = [
    1,
    2,
    3
];
console.log(apenas_leitura);
