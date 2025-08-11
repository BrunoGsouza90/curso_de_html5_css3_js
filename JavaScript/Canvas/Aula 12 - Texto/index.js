const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

// Específicamos o tamanho e tipo da fonte.
contexto.font = "30px Arial"

// Definimos a cor do preenchimento do texto.
contexto.fillStyle = "#008"

// Definimos as bordas do texto. O primeiro parâmetro defini o texto, o segndo e terceiro o padding do texto, e o quarto a largura máxima.
contexto.strokeText("Texto com Canvas", 10, 100)

// Definimos o texto porém agora sem bordas em outra posição. O primeiro parâmetro defini o texto, o segndo e terceiro o padding do texto, e o quarto a largura máxima.
contexto.fillText("Texto com Canvas", 10, 200)