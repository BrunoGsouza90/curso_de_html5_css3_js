import React from 'react'

class CicloDeVida extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            contador: 0

        }

    }

    Contar = () => {

        this.setState({

            contador: this.state.contador + 1

        })

    }

    // Primeira função a ser renderizada depois das funções de erro.
    render() {

        return (

            <div>
            
                <p>Componente ativo.</p>

                <button onClick={this.Contar}>Contar</button>

                <p>{this.state.contador}</p>

            </div>

        )

    }

    // Ativado após o "render", quando o componente for montado. Fiz um botão lá no App para o teste. Toda vez que o componente é montado essa função é ativada. Ela também ativada após o "render" quando a página é carregada.
    componentDidMount() {

        console.log("Componente montado!")

    }

    // Ativado após o "componentDidMount", quando o componente é atualizado. É chamado toda vez que o componente é atualizado.
    // Aperte qualquer botão na página para conferir.
    componentDidUpdate(prevProps, prevState) {

        console.log("Componente atualizado!")
    
    }

    // Ativado após o "componentDidMount" ou "componentDidUpdate", quando o componente for deletado. É chamado quando um componente é destruído. Fiz um botão lá no App para o teste. Toda vez que o componente é ocultado essa função é ativada.
    componentWillUnmount() {

        console.log("Componente destruído!")

    }

    // Atualiza o estado antes de renderizar após o erro.
    static getDerivedStateFromError(error) {

        return { hasError: true };

    }

    // Aqui você pode logar o erro ou fazer algo com ele.
    componentDidCatch(error, info) {

        console.log("Erro capturado:", error);
        console.log("Informações:", info);

    }

}

export default CicloDeVida