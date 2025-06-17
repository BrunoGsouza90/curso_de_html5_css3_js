const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let px = 0
let py = 0

let muda = true

function desenhar(){

    if(px > 0 && muda == false){

        px = py --

        if(px == 0) muda = true

    }
    
    if(px < 500 && muda == true){

        px = py ++

        if(px == 400) muda = false

    }

    contexto.clearRect(0, 0, 500, 500)

    contexto.fillStyle = "rgb(255, 0, 0)"
    contexto.fillRect(px, py, 100, 100)

    anima = requestAnimationFrame(desenhar)

}

desenhar()