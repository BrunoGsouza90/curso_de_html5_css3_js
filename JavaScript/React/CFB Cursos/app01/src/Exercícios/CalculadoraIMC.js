import React from 'react'
import "./css/CalculadoraIMC.css"

export class CalculadoraIMC extends React.Component {

    constructor(props) {

        super(props)


        this.state = {

            resultado: "0.00"

        }

    }

    enviarFormulario = (event) => {

        event.preventDefault()

        let peso = event.target.peso.value
        let altura = event.target.altura.value

        this.setState(prevState => {

            return {

                resultado: (peso / (altura * altura)).toFixed(2)

            }

        })

    }

    render() {

        return (

            <div>

                <form id="main" method="POST" onSubmit={this.enviarFormulario}>

                    <div>
                
                        <div>

                            <label htmlFor="peso">Informe seu peso:</label>
                            <input type="number" id="peso" name="peso" min="0" max="999" step="0.01"></input>

                        </div>

                        <div>

                            <label htmlFor="altura">Informe sua altura:</label>
                            <input type="number" id="altura" name="altura" min="0" max="999" step="0.01"></input>

                        </div>

                    </div>

                    <div id="div_botao">

                        <button type="submit" id="calcular">Calcular</button>

                    </div>

                </form>

                <p id="paragrafo"><strong>Resultado:</strong><span id="resultado"> { this.state.resultado }</span></p>

                <div>

                    <table>

                        <thead>

                            <tr>

                                <th>Classificação</th>
                                <th>IMC</th>
                                
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Abaixo do Peso</td>
                                <td>Abaixo de 18,5</td>

                            </tr>

                            <tr>

                                <td>Peso Normal</td>
                                <td>Entre 18,5 e 24,9</td>

                            </tr>

                            <tr>

                                <td>Sobrepeso</td>
                                <td>Entre 25 e 29,9</td>

                            </tr>
                            
                            <tr>

                                <td>Obesidade Grau I</td>
                                <td>Entre 30 e 34,9</td>

                            </tr>

                            <tr>

                                <td>Obesidade Grau II</td>
                                <td>Entre 35 e 39,9</td>

                            </tr>

                            <tr>

                                <td>Obesidade Grau III ou Mórbida</td>
                                <td>Maior que 40</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        )

    } 

}