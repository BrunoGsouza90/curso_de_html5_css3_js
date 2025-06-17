function f_teste<T, U>(valor: T): U {

    return (valor as unknown) as U

}

console.log(f_teste<number, number>(10))
console.log(f_teste<string, number>("10"))
console.log(f_teste<boolean, number>(true))

class C_teste <T> {

    public valor: T

    constructor(valor:T){

        this.valor = valor

    }

}

const ct1 = new C_teste<number>(10)

console.log(ct1.valor)