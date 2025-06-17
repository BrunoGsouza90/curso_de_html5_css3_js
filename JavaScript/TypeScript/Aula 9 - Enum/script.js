"use strict";
// Ele cria as chaves e valores para ambos os lados.
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
for (const [key, value] of Object.entries(dias)) {
    console.log(`${key} => ${value}.`);
}
console.log(`\n${dias['domingo']} = ${dias[1]}`);
