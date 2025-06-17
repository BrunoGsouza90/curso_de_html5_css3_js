class Classe1 {

    static numero:number = 0

    public exibirValor() {

        console.log(Classe1.numero)

    }

}

let classe1 = new Classe1()
let classe2 = new Classe1()
let classe3 = new Classe1()

// A classe static é padrão da classe não do Objeto ela é geral.

// Errado. O static não é para objeto e sim para a classe em geral.
// classe1.numero = 10
// classe2.numero = 10
// classe3.numero = 10

// Correto. Alterá o valor na classe.
Classe1.numero = 10