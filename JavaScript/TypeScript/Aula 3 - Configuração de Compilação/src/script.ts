class Pessoas{

    protected nome
    protected idade

    constructor(nome: String, idade: String){

        this.nome = nome
        this.idade = idade
        
        console.log(`Seu nome é ${this.nome} e você tem ${this.idade}\n`)

    }

}

let Pessoa1 = new Pessoas("Bruno", "25 anos")
let Pessoa2 = new Pessoas("Lucas", "32 anos")