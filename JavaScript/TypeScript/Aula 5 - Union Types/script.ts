// Declaramos uma váriavel que pode receber um array com strings e números.
let string_or_number: (string | number)[]

string_or_number = [

    "JavaScript",
    "Python",
    "C++",
    2,
    // Erro ele não pode receber um valor booleano, apenas strings e numéros.
    // true

]

string_or_number.push("Arduino")

console.log(string_or_number)

// Declaramos uma variável que pode receber todos os tipos.
let all_types: any[]

all_types = [

    "Bruno",
    2,
    2.2,
    true

]

console.log(all_types)