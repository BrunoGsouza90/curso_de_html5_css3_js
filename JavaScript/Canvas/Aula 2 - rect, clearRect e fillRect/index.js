const canvas = window.document.getElementById('canvas')

let contexto = canvas.getContext('2d')

// O fillRect já desenha e preenche o contexto.
contexto.fillStyle = "rgba(0, 0, 255, 0.45)"
contexto.fillRect(0, 0, 250, 250)

contexto.fillStyle = "rgba(255, 0, 0, 0.45)"
contexto.fillRect(250, 0, 500, 250)

contexto.fillStyle = "rgba(56, 55, 55, 0.45)"
contexto.fillRect(0, 250, 250, 250)

// O método "rect" apenas desenha. Para podermos preencher precisamos usar o método "fill" logo em seguida.
contexto.fillStyle = "rgba(0, 255, 0, 0.45)"
contexto.rect(250, 250, 250, 250)
contexto.fill()

// Aqui estamos limpando parte do nosso quadrado. No caso o centro do nosso desenho.
contexto.clearRect(120, 120, 250, 250)