// Aqui específicamos uma variável do tipo "null" que seria uma variável nula.
let vnome:string|null;

vnome = null;

console.log(`Variável nula: ${vnome}.`);

// Aqui específicamos uma variável do tipo "undefined" que é uma variável com o valor indefinido.
let vnome2;

console.log(`Variável indefinida: ${vnome2}.`);

// Aqui específicamos uma variável do tipo "unknown" que é uma variável com o valor desconhecido.
let vnome3:unknown = 10;

console.log(`Variável desconhecida: ${vnome3}. Aqui ela tem o valor 10 mais se colocarmos o mouse emcima da sua declaração veremos que é do tipo "unknow" ou desconhecido. Ou seja... por mais que tenha o valor inteiro será impossível atribuir esse valor em uma variável do tipo "number" por exemplo.`);