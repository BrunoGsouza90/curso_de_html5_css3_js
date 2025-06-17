// Ele cria as chaves e valores para ambos os lados.
enum dias {

    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7

}

for(const [key, value] of Object.entries(dias)){

    console.log(`${key} => ${value}.`)

}

console.log(`\n${dias['domingo']} = ${dias[1]}`)