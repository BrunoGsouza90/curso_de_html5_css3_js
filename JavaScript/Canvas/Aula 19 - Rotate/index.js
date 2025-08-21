const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

contexto.fillStyle = "#00f"
contexto.fillRect(0, 0, 200, 200)

contexto.translate(200, 0)

// Mudamos a rotação dos próximos elementos.
contexto.rotate(45 * ( Math.PI / 180 ))

contexto.fillStyle = "#f00"
contexto.fillRect(0, 0, 200, 200)

contexto.translate(200, 0)

contexto.fillStyle = "#0f0"
contexto.fillRect(0, 0, 200, 200)

contexto.closePath()