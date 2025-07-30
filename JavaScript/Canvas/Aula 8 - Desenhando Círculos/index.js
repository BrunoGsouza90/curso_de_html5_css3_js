const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

let desenhar = () => {

    contexto.fillStyle = "#000"

    contexto.arc(120, 150, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true)
    
    contexto.fill()

    // Método utilizado para definir a inserção de um novo círculo.
    contexto.beginPath()

    contexto.fillStyle = "#090"

    contexto.arc(350, 300, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true)
    
    contexto.fill()


}

desenhar()