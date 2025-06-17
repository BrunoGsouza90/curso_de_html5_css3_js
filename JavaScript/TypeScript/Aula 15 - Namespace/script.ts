namespace Veiculos {

    export class Carro {

        protected nome:string
        protected motor:Object
    
        constructor(nome:string){
    
            this.nome = nome
            this.motor = new Motores.Turbo(100)
    
        }
    
    }

}

namespace Motores {

    export class Turbo {

        protected potencia:number = 0

        public constructor(potencia:number) {

            this.fpotencia = potencia

        }

        public get fpotencia() {

            return this.potencia

        }

        public set fpotencia(potencia:number) {

            this.potencia = potencia

        }

    }

    export class Normal {

        private ligado: boolean = false
        private cilindros:number = 0
        protected potencia:number = 0
    
        constructor(potencia:number, cilindros:number, turbo?:Turbo) {
    
            this.potencia = (typeof(turbo) != "undefined" ? turbo.fpotencia + potencia : potencia)
            this.cilindros = cilindros
    
        }
    
        public ligar():string {

            this.ligado = true

            return "O motor está ligado!"

        }

        public desligar():string {

            this.ligado = false

            return "O motor está desligado!"

        }

    }

}

const carros1 = new Veiculos.Carro("Civic");