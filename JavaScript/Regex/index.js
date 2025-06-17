const telefone = window.document.getElementById("telefone")

let texto = "meu email é bruno.gsouza199@gmail.com bruno.gsouza187@gmail.com"

let resultado = texto.match(/([a-z0-9\.]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/ig);

texto = "Nesse texto 35 9987100494"

let ddd = texto.match(/([0-9]{2})(?=\s[0-9]{4}|[0-9]{4})/)

let resultado2 = texto.match(/9()/)

console.log(resultado, resultado2)

telefone.addEventListener("input", (event) => {

    if((event.target.value.slice(-1).match(/[^a-z]/i)) == null) {

        event.target.value = event.target.value.slice(0, -1)

    } else if(event.target.value[4] != undefined) {

        if(event.target.value[4] != " ") {

            event.target.value = `${event.target.value.slice(0, 3)} ${event.target.value.slice(4)}`

        }

    }

    if((event.target.value.length == 1 && event.target.value[0] != "(") || (event.target.value.length >= 2) && event.target.value[0] != "(") {

        event.target.value = `(${event.target.value}`

    } else if(event.target.value.length == 1 && event.target.value[0] == "(") {

        event.target.value = ""

    } else if(event.target.value.length == 4 && event.target.value[0] == "(" && event.target.value.slice(-1) != ")") {

        event.target.value = `${event.target.value.slice(0, 3)}) ${event.target.value.slice(-1)}`

    } else if (event.target.value.slice(-1) == " ") {

        event.target.value = event.target.value.slice(0, -2)

    }
    
})