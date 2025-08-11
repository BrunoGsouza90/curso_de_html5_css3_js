const canvas = window.document.getElementById('canvas')
const eixoX = window.document.getElementById('eixoX')
const eixoY = window.document.getElementById('eixoY')

// Aqui estamos configurando o contexto de trabalho do nosso desenho.
let contexto = canvas.getContext('2d')

canvas.addEventListener("mousemove", (evento) => {
    const posicoes = canvas.getBoundingClientRect()

    const x = evento.clientX - posicoes.left
    const y = evento.clientY - posicoes.top

    eixoX.innerHTML = `${x.toFixed(0)} px`
    eixoY.innerHTML = `${y.toFixed(0)} px`

})

contexto.beginPath()

// Definimos a opacidade com GlobalAlpha.
contexto.globalAlpha = "0.5"

contexto.fillStyle = "#00f"
contexto.fillRect(150, 150, 100, 100)

contexto.fillStyle = "#f00"
contexto.fillRect(100, 100, 100, 100)
contexto.fillRect(300, 100, 100, 100)

contexto.fillStyle = "#0f0"
contexto.fillRect(500, 100, 100, 100)
contexto.fillRect(700, 100, 100, 100)

contexto.closePath()