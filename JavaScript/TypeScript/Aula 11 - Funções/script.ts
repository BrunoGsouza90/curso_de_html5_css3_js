// A declaração "void" é dada quando a função não retornará nada.
function pessoa(nome:string, idade:number):void{

    console.log(`Seu nome é ${nome} e você tem ${idade} anos de idade!`);

}

pessoa("Bruno", 25);

const soma = (numero1:number, numero2:number, numero3:number = 0):string => {

    return `A soma entre os valores é ${numero1 + numero2 + numero3}! `;

}

console.log(soma(10, 10));