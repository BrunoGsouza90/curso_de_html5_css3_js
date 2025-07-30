const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

// Criamos uma nova instância de imagem.
let jogadores = new Image()

// Setamos a URL.
jogadores.src = "Jogadores.png"

// Setamos as variáveis das posições, recorte e tamanho da imagem.
let inicioJogador = 0
let passos = 4
let posicaoX_Recorte = 0
let posicaoY_Recorte = 0
let larguraRecorte = 0
let alturaRecorte = 0
let posicaoX_imagem = 20
let posicaoY_imagem = 20
let larguraImagem = 100
let alturaImagem = 100

// Desenhamos a imagem apenas depois de carregada.
jogadores.onload = () => {

    larguraRecorte = ( jogadores.width + 6 ) / 4
    alturaRecorte = ( jogadores.height - 105 ) / 4

    posicaoX_Recorte = larguraRecorte * inicioJo1gador

    posicaoY_Recorte = 0

    // Definimos as configurações da imagem, sendo:
    // Imagem, Posição X do Recorte, Posição Y do Recorte, Largura do Recorte, Altura do Recorte, Posição X da Imagem, Posição Y da Imagem, Largura da Imagem, Altura da Imagem.
    contexto.drawImage(jogadores, posicaoX_Recorte, posicaoY_Recorte, larguraRecorte, alturaRecorte, posicaoX_imagem, posicaoY_imagem, larguraImagem, alturaImagem)

}

// // Setamos em uma variável o setInterval para fazer a animação de um em um segundo.
let anima = setInterval(() => {

    contexto.clearRect(0, 0, canvas.width, canvas.height)

    // Caso o passo chege no último movimento jogador nós voltamos ao primeiro passo.
    if(inicioJogador == 4) {

        inicioJogador = 0

    }

    posicaoX_Recorte = larguraRecorte * inicioJogador

    inicioJogador++

    contexto.drawImage(jogadores, posicaoX_Recorte, posicaoY_Recorte, larguraRecorte, alturaRecorte, posicaoX_imagem, posicaoY_imagem, larguraImagem, alturaImagem)

}, 100)

window.addEventListener("keydown", (evento) => {

    if(evento.key == "ArrowDown" && posicaoY_imagem < canvas.height - 120) {

        posicaoY_imagem = posicaoY_imagem + passos

        posicaoY_Recorte = 0

    } else if(evento.key == "ArrowUp" && posicaoY_imagem > 20) {

        posicaoY_imagem = posicaoY_imagem - passos

        posicaoY_Recorte = 190

    } else if(evento.key == "ArrowLeft" && posicaoX_imagem > 20) {
        
        posicaoX_imagem = posicaoX_imagem - passos

        posicaoY_Recorte = 360

    } else if(evento.key == "ArrowRight" && posicaoX_imagem < canvas.width - 120) {

        posicaoX_imagem = posicaoX_imagem + passos

        posicaoY_Recorte = 550

    }

})