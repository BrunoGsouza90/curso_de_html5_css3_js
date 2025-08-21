const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

let texto = "Texto de teste para aprender \"Alinhamento de Texto\"."

contexto.font = "20px Arial"

contexto.fillStyle = "#00f"

contexto.textAlign = "center"

contexto.fillText(texto, 500, 200)

contexto.closePath()