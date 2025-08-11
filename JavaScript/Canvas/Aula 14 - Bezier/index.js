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

// Definimos o ponto de entrada da linha.
contexto.lineTo(200, 100)

// Definimos a curvatura aonde os dois primeiros argumentos defininem o ponto médio da curva. E os dois últimos parâmetros o ponto final da curvatura.
contexto.quadraticCurveTo(300, -50, 400, 100)

// Desenhamos a segunda curvatura.
contexto.quadraticCurveTo(500, 250, 600, 100)

contexto.stroke()

contexto.closePath()

// Vamos desenhar um coração.
contexto.beginPath()

contexto.lineTo(400, 400)

contexto.quadraticCurveTo(400, 200, 500, 400)

contexto.quadraticCurveTo(600, 200, 600, 400)

contexto.moveTo(400, 400)

contexto.lineTo(500, 550)

contexto.lineTo(600, 400)

contexto.stroke()

contexto.closePath()

// Trateremos agora o BezierCurveTo.
contexto.beginPath()

contexto.moveTo(300, 0)

contexto.bezierCurveTo(200, 100, 400,300, 300, 400)

contexto.stroke()

contexto.closePath()

// Coração com BezierCurveTo.
contexto.beginPath()

contexto.moveTo(400, 150)

contexto.bezierCurveTo(500, 0, 800, 200, 400, 500)

contexto.bezierCurveTo(0, 200, 300, 0, 400, 150)

contexto.stroke()

contexto.fillStyle = "#ff0000"

contexto.fill()

contexto.closePath()