const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

// Definimos a cor da sombra.
contexto.shadowColor = "rgba(0, 0, 0, 0.7)"

// Definimos as configurações do Offset.
contexto.shadowOffsetX = 10
contexto.shadowOffsetY = 10

// Definimos o tamanho do sombreamento.
contexto.shadowBlur = 10

// Definimos a cor do preenchimento da sombra.
contexto.fillStyle = "#f00"
contexto.fillRect(100, 100, 200, 200)