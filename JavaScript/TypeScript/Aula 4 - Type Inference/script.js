"use strict";
window.alert('Testando o Type Inference! O "-w" ou "--watch" deu certo.');
// A variável aceita apenas valores como string agora. Typescript é uma linguagem fortemente tipada.
let nome = "Bruno";
// Isso é um erro:
// nome = 2
// Isso está correto:
nome = "Bruno Gonçalves";