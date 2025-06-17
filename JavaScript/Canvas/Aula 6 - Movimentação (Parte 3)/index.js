const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let px = 5
let py = 5

function desenhar(){

    if(px < 395 && py == 5){

        px = px + 15

    } else if (px == 395 && py < 395){

        py = py + 15

    } else if(px > 5 && py == 395){

        px = px - 15

    } else if(px == 5 && py > 5){

        py = py - 15

    }

    contexto.clearRect(0, 0, 500, 500)
    contexto.fillStyle = "rgb(255, 0, 0)"

    contexto.fillRect(px, py, 100, 100)

    // Largura do contorno.
    contexto.lineWidth = 10

    // Cor do contorno.
    contexto.stokeStyle = "rgb(0, 0, 255)"

    contexto.strokeRect(px, py, 100, 100);

    anima = requestAnimationFrame(desenhar)

}

desenhar()