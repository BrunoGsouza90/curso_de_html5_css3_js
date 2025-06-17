"use strict";
let dados = {
    nome: "Bruno Gonçalves",
    idade: 25,
    profissao: "Software Enginner"
};
console.log('');
for (const [key, value] of Object.entries(dados)) {
    console.log(`${key} => ${value}.`);
}
