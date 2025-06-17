"use strict";
// Precisamos definir um tipo para cada posição. Usamos o "readonly", fazendo das nossas tuplas imutáveis.
let coisas = ["Corda", 10, 10, "Banco", true];
// Erro pois a tupla está com "readonly" sendo imutável.
// coisas.push('casa')
console.log(coisas);
console.log(coisas[3]);
