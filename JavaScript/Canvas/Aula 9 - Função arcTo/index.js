const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let desenhar = () => {

    contexto.clearRect(0, 0, 500, 500)

    contexto.moveTo(0, 0)
    contexto.lineTo(100, 100)

    // Defini um arco, onde:
    // Início Eixo X, Início Eixo Y Final Eixo X, Final Eixo Y, Raio.
    contexto.arcTo(250, 250, 500, 0, 100)

    contexto.lineTo(500, 0)

    contexto.stroke()

}

desenhar()