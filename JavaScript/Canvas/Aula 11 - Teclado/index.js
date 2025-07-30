const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

// Criamos uma nova instância de imagem.
let nave = new Image()

// Setamos a URL.
nave.src = "https://img.freepik.com/vetores-gratis/modelo-de-adesivo-com-objeto-voador-nao-identificado-ovni-isolado_1308-57963.jpg?semt=ais_hybrid&w=740"

// Desenhamos a imagem apenas depois de carregada.
nave.onload = () => {

    // Definimos a posição da imagem e seu tamanho.
    contexto.drawImage(nave, 0, 0, 100, 100)

}