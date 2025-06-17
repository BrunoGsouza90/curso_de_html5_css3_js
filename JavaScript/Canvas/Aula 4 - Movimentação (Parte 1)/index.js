const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let px = 200
let py = 200

function desenhar(){

    if(px == 500){

        px = 200
        py = 200

    }

    contexto.clearRect(200, 200, 500, 500)

    contexto.fillStyle = "rgb(255, 0, 0)"
    contexto.fillRect(px, py, 100, 100)

    px++
    py++

    anima = requestAnimationFrame(desenhar)

}

desenhar()