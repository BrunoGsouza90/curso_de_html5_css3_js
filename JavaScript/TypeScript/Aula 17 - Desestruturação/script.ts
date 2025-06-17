let array_valores:Array<number> = [10, 20, 30, 40]

// Forma de desestruturação manual.
let a:number, b:number, c:number, d:number

a = array_valores[0]

b = array_valores[1]

c = array_valores[2]

d = array_valores[3]

// Forma de desestruturação automática.
let a1:number, b1:number, c1:number, d1:number

[a1, b1, c1, d1] = array_valores

console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)

const cores = {

    cor1: "Azul",
    cor2: "Amarelo",
    cor3: "Verde",
    cor4: "Branco"

}

let {cor1, cor2, cor3, cor4} = cores

console.log(cor1)
console.log(cor2)
console.log(cor3)
console.log(cor4)