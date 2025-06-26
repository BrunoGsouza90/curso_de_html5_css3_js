import React from 'react'

class Classes extends React.Component {

    idade = "25"

    constructor(props) {

        super(props)

        this.ligado = true

        this.state = {

            ligado: true

        }

        this.ld = this.ligarDesligar.bind(this)

    }

    ligarDesligar = () => {

        this.setState({
            
            ligado: !this.state.ligado
        
        })

    }

    render() {

        return (

            <div>

                <p>Meu nome é {this.props.nome}.</p>
                <p>Eu tenho {this.idade} anos de idade.</p>

                <button onClick={this.ld}>Ligar/Desligar Carro</button>
                <p>O carro está {this.state.ligado ? "ligado." : "desligado."}</p>

            </div>

        )

    }

}

export default Classes