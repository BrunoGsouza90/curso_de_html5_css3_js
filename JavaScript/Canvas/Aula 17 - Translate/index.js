const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

contexto.fillStyle = "#00f"
contexto.fillRect(0, 0, 200, 200)

// Alteramos o Ponto Inicial.
contexto.translate(100, 100)

contexto.fillStyle = "#f00"
contexto.fillRect(0, 0, 200, 200)

contexto.closePath()