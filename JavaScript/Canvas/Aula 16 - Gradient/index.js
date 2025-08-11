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

// Aplicaremos um Grandient Linear.
contexto.beginPath()

// Criamos o Gradient especificando nos dois primeiros argumentos aonde ele irá começar e nos dois últimos aonde ele irá terminar.
let gradient_linear = contexto.createLinearGradient(0, 0, 300, 300)

// Definimos as cores do Gradient.
gradient_linear.addColorStop(0, "#f00")
gradient_linear.addColorStop(1, "#ff0")

// Aplicamos o Gradient no quadrado.
contexto.fillStyle = gradient_linear

contexto.fillRect(0, 0, 300, 300)

contexto.closePath()

// Agora vamos fazer um Gradient Radial.
contexto.beginPath()

let gradient_radial = contexto.createRadialGradient(
    500, 400, 20, 
    600, 570, 300
)

gradient_radial.addColorStop(0, "#f00")
gradient_radial.addColorStop(1, "#ff0")

contexto.fillStyle = gradient_radial

contexto.fillRect(500, 400, 300, 300)

contexto.closePath()

// Agora trateremos do Gradient Padrão.
contexto.beginPath()

let padrao = new Image()

padrao.src = "https://www.wikihow.com/images_en/thumb/b/b8/Draw-in-3D-Step-3-Version-3.jpg/550px-nowatermark-Draw-in-3D-Step-3-Version-3.jpg"


padrao.onload = () => {

    // Definimos o Gradient, onde o primeiro argumento recebe a imagem e o segundo definimos a repetição.
    let grandient_padrao = contexto.createPattern(padrao, 'repeat')

    contexto.fillStyle = grandient_padrao

    contexto.fillRect(700, 0, 300, 300)

}

contexto.closePath()