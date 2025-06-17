import { MethodsComputador } from './src/interface'
import { PropertyClass } from './src/abstract'

class Computador extends PropertyClass implements MethodsComputador {

    public constructor(nome:string, ram:number, cpu:number, ligado:boolean = false) {

        super(nome, ram, cpu, ligado)

    }

    public ligar(){

        this.fligado = true

        console.log(`O computador ${this.fnome} foi ligado com sucesso!`)

    }

    public desligar(){

        this.fligado = false

        console.log(`O computador ${this.fnome} foi desligado com sucesso!`)

    }

    public info(){

        console.log('\n\nStatus do sistema:\n')

        console.log(`Nome: ${this.fnome}.`)
        console.log(`Ram: ${this.fram}.`)
        console.log(`CPU: ${this.fcpu}.`)
        console.log(`Ligado/Desligado: ${this.fligado == true ? "Ligado" : "Desligado"}.`)

    }

}

let computador1 = new Computador("Acer 9.4", 8, 2.4)

computador1.ligar()
computador1.info()