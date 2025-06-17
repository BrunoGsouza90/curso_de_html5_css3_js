"use strict";
function f_teste(valor) {
    return valor;
}
console.log(f_teste(10));
console.log(f_teste("10"));
console.log(f_teste(true));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(10);
console.log(ct1.valor);
