const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

contexto.fillStyle = "rgba(0, 0, 255, 0.45)"
contexto.fillRect(0, 0, 250, 250)

contexto.fillStyle = "rgba(255, 0, 0, 0.45)"
contexto.fillRect(250, 0, 500, 250)

contexto.fillStyle = "rgba(56, 55, 55, 0.45)"
contexto.fillRect(0, 250, 250, 250)

contexto.fillStyle = "rgba(0, 255, 0, 0.45)"
contexto.fillRect(250, 250, 250, 250)

contexto.clearRect(120, 120, 250, 250)

// Aqui determinamos a posição inicial da nossa linha. O primeiro argumento determina o valor superior e o segundo o valor lateral.
contexto.moveTo(0, 0)

// Aqui determinamos a posição final da linha. O primeiro argumento desenha na lateral e o outro na diagonal.
contexto.lineTo(250, 250)

// Este argumento renderiza a linha.
contexto.stroke()

contexto.lineTo(350, 250)

contexto.moveTo(500, 0)
contexto.lineTo(350, 250)

contexto.stroke()