function somar_Dois(num){
    return num + 2
}

lista = [1,2,3,4,5,6].map(somar_Dois)
console.log(lista)

var multiplicar_Dois = (num) => {
    return num * 2
}

console.log([2,4,6,8,10].map(multiplicar_Dois))

var div1 = window.document.getElementById('c1')
var div2 = window.document.getElementById('c2')
var div3 = window.document.getElementById('c3')
var div4 = window.document.getElementById('c4')
var div5 = window.document.getElementById('c5')
var div6 = window.document.getElementById('c6')

var lista = [div1, div2, div3, div4, div5, div6]

for(div in lista){
    lista[div].innerHTML = 'CFB Cursos'
}

lista.map((elemento, passo) => {
    console.log(elemento)
    elemento.innerHTML = 'Alterei usando map'
})