const canvas = window.document.getElementById('canvas')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

// Aqui fizemos a definição do nosso contexto.
contexto.fillStyle = "rgb(173, 216, 230)"

// Aqui estamos desenhando nosso quadrado.
// Aqui definimos a "posição", "largura", "altura".
contexto.fillRect(0, 0, 250, 300)

// Fazendo outro desenho.
contexto.fillStyle = "rgb(255, 0, 0)"
contexto.fillRect(250, 0, 250, 300)