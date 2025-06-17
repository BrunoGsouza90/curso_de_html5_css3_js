const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let px = 5
let py = 5

function desenhar(){

    // Aqui estamos desenhando nosso arco sendo:
    // Posição X, Posiçãop Y, Tamanho, Recorte Eixo X, Recorte Eixo Y, Ordem dos Eixos.
    contexto.arc(60, 60, 50, (Math.PI/180) * 0, (Math.PI/180) * 360, false)

    // Cor do arco.
    contexto.fillStyle = 'blue'
    
    // Espessura do arco.
    contexto.lineWidth = 10

    // Determina que a espessura do arco será redonda.
    contexto.lineJoin = 'round'

    // Determina a cor da espessura do arco.
    contexto.stokeStyle = "black"

    // Renderiza a espessura do arco.
    contexto.stroke()

    // Renderizar o arco.
    contexto.fill()

}

desenhar()