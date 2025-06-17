const soma = (...numeros:number[]):number => {

    let soma:number = 0

    for(let numero of numeros){

        soma += numero

    }

    return soma

}

console.log(soma(10, 10, 10))